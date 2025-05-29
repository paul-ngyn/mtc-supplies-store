import Stripe from 'stripe';
import { stripe } from '@/utils/stripe/config';
import {
  upsertProductRecord,
  upsertPriceRecord,
  manageSubscriptionStatusChange,
  deleteProductRecord,
  deletePriceRecord
} from '@/utils/supabase/admin';

// Add this configuration to prevent Next.js from parsing the body
export const config = {
  api: {
    bodyParser: false,
  },
};

const relevantEvents = new Set([
  'product.created',
  'product.updated',
  'product.deleted',
  'price.created',
  'price.updated',
  'price.deleted',
  'checkout.session.completed',
  'customer.subscription.created',
  'customer.subscription.updated',
  'customer.subscription.deleted'
]);

export async function POST(req: Request) {
  // Log the request URL to help debug 308 issues
  console.log("Webhook URL:", req.url);
  
  const body = await req.text();
  const sig = req.headers.get('stripe-signature') as string;
  
  if (!sig) {
    console.log("❌ No Stripe signature found in request");
    return new Response('No Stripe signature provided', { status: 400 });
  }
  
  // Determine which secret to use - this is the key part
  let webhookSecret: string;
  
  // For local development using Stripe CLI
  if (process.env.STRIPE_CLI_WEBHOOK_SECRET) {
    webhookSecret = process.env.STRIPE_CLI_WEBHOOK_SECRET;
    console.log("Using CLI webhook secret");
  } 
  // For production
  else if (process.env.STRIPE_WEBHOOK_SECRET) {
    webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    console.log("Using production webhook secret");
  } 
  else {
    console.log("No webhook secret found");
    return new Response('Webhook secret not found.', { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    console.log(`🔔 Webhook received: ${event.type}`);
  } catch (err: any) {
    console.log(`❌ Error message: ${err.message}`);
    console.log(`❌ Signature header: ${sig ? sig.substring(0, 20) + '...' : 'missing'}`);
    console.log(`❌ Webhook secret: ${webhookSecret ? webhookSecret.substring(0, 5) + '...' : 'missing'}`);
    console.log(`❌ Body preview: ${body.substring(0, 50)}...`);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Process events we care about
  if (relevantEvents.has(event.type)) {
    try {
      switch (event.type) {
        case 'product.created':
        case 'product.updated':
          await upsertProductRecord(event.data.object as Stripe.Product);
          console.log(`✅ Processed ${event.type} for ${(event.data.object as Stripe.Product).id}`);
          break;
          
        case 'price.created':
        case 'price.updated':
          await upsertPriceRecord(event.data.object as Stripe.Price);
          console.log(`✅ Processed ${event.type} for ${(event.data.object as Stripe.Price).id}`);
          break;
          
        case 'price.deleted':
          await deletePriceRecord(event.data.object as Stripe.Price);
          console.log(`✅ Processed ${event.type} for ${(event.data.object as Stripe.Price).id}`);
          break;
          
        case 'product.deleted':
          await deleteProductRecord(event.data.object as Stripe.Product);
          console.log(`✅ Processed ${event.type} for ${(event.data.object as Stripe.Product).id}`);
          break;
          
        case 'customer.subscription.created':
        case 'customer.subscription.updated':
        case 'customer.subscription.deleted':
          const subscription = event.data.object as Stripe.Subscription;
          await manageSubscriptionStatusChange(
            subscription.id,
            subscription.customer as string,
            event.type === 'customer.subscription.created'
          );
          console.log(`✅ Processed ${event.type} for ${subscription.id}`);
          break;
          
        case 'checkout.session.completed':
          const checkoutSession = event.data.object as Stripe.Checkout.Session;
          if (checkoutSession.mode === 'subscription') {
            const subscriptionId = checkoutSession.subscription;
            await manageSubscriptionStatusChange(
              subscriptionId as string,
              checkoutSession.customer as string,
              true
            );
            console.log(`✅ Processed subscription checkout for ${subscriptionId}`);
          } else {
            console.log(`Skipping non-subscription checkout session ${checkoutSession.id}`);
          }
          break;
          
        default:
          console.log(`⚠️ Unhandled relevant event type: ${event.type}`);
      }
      
      // Return 200 status after successful processing
      return new Response(JSON.stringify({ received: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
      
    } catch (error) {
      console.log("❌ Error processing webhook:", error);
      // Still return 200 to prevent Stripe from retrying
      // We've already logged the error for our reference
      return new Response(
        JSON.stringify({
          received: true,
          error: 'Failed to process webhook event',
          details: error instanceof Error ? error.message : 'Unknown error'
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
  } else {
    // Simply acknowledge receipt of events we don't process
    console.log(`ℹ️ Ignoring event type: ${event.type}`);
    return new Response(JSON.stringify({ received: true, processed: false }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}