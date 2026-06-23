'use server';

import type { Tables } from '@/types_db';
import { getErrorRedirect } from '@/utils/helpers';

type Price = Tables<'prices'>;

type CheckoutResponse = {
  errorRedirect?: string;
  sessionId?: string;
};

export async function checkoutWithStripe(
  _price: Price,
  redirectPath: string = '/account'
): Promise<CheckoutResponse> {
  return {
    errorRedirect: getErrorRedirect(
      redirectPath,
      'Checkout unavailable',
      'Supabase customer management has been removed from this project.'
    )
  };
}

export async function createStripePortal(currentPath: string) {
  return getErrorRedirect(
    currentPath,
    'Billing portal unavailable',
    'Supabase customer management has been removed from this project.'
  );
}
