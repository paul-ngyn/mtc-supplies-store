# Contact Form Email Setup Guide

## Free Email Service Providers (Recommended)

### 🏆 1. **Resend** (HIGHLY RECOMMENDED)
- **Free Tier**: 3,000 emails/month, 100 emails/day
- **Best For**: Next.js/Vercel projects
- **Pros**: 
  - Super easy integration with Next.js
  - Excellent deliverability
  - Clean API and great documentation
  - No credit card required for free tier
- **Setup**:
  ```bash
  npm install resend
  ```
- **Website**: https://resend.com

### 2. **SendGrid** (Twilio)
- **Free Tier**: 100 emails/day forever
- **Pros**: 
  - Reliable and established
  - Good deliverability
  - Comprehensive dashboard
- **Cons**: More complex setup
- **Website**: https://sendgrid.com

### 3. **Brevo (formerly Sendinblue)**
- **Free Tier**: 300 emails/day
- **Pros**: 
  - Generous free tier
  - Includes SMS capabilities
  - Marketing automation tools
- **Website**: https://www.brevo.com

### 4. **Mailgun**
- **Free Tier**: 5,000 emails for first 3 months, then pay-as-you-go
- **Pros**: 
  - Powerful API
  - Good for developers
- **Website**: https://www.mailgun.com

---

## ✅ RECOMMENDED SETUP: Using Resend

### Step 1: Sign up for Resend
1. Go to https://resend.com
2. Sign up with your email
3. Verify your email address

### Step 2: Get your API Key
1. Go to API Keys in dashboard
2. Create a new API key
3. Copy the key (starts with `re_`)

### Step 3: Add Domain (Optional but Recommended)
1. Add your domain in Resend dashboard
2. Add DNS records they provide
3. Or use their free `onboarding@resend.dev` for testing

### Step 4: Install Resend
```bash
npm install resend
```

### Step 5: Add Environment Variable
Create or update `.env.local`:
```
RESEND_API_KEY=re_your_api_key_here
```

### Step 6: Update the API Route
Replace the content in `/app/api/contact/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, inquiry } = body;

    // Validate required fields
    if (!name || !email || !phone || !inquiry) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Change this after domain verification
      to: 'info@mapletradecorp.com',
      replyTo: email,
      subject: \`New Contact Form Submission from \${name}\`,
      html: \`
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #1c51a3; color: white; padding: 20px; text-align: center; }
              .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #1c51a3; }
              .value { margin-top: 5px; }
              .footer { margin-top: 20px; padding: 10px; text-align: center; font-size: 12px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Contact Form Submission</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">\${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">\${email}</div>
                </div>
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value">\${phone}</div>
                </div>
                <div class="field">
                  <div class="label">Company:</div>
                  <div class="value">\${company || 'N/A'}</div>
                </div>
                <div class="field">
                  <div class="label">Inquiry:</div>
                  <div class="value">\${inquiry.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              <div class="footer">
                Submitted on \${new Date().toLocaleString('en-US', { 
                  timeZone: 'America/Los_Angeles',
                  dateStyle: 'full',
                  timeStyle: 'long'
                })}
              </div>
            </div>
          </body>
        </html>
      \`,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);

    return NextResponse.json(
      { message: 'Form submitted successfully', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
```

### Step 7: Restart Your Dev Server
```bash
npm run dev
```

---

## Alternative: Using SendGrid

If you prefer SendGrid:

### Install SendGrid
```bash
npm install @sendgrid/mail
```

### Environment Variable
```
SENDGRID_API_KEY=your_api_key_here
```

### API Route Code
```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, inquiry } = body;

    const msg = {
      to: 'info@mapletradecorp.com',
      from: 'noreply@yourdomain.com', // Must be verified in SendGrid
      replyTo: email,
      subject: \`New Contact Form Submission from \${name}\`,
      html: \`
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> \${name}</p>
        <p><strong>Email:</strong> \${email}</p>
        <p><strong>Phone:</strong> \${phone}</p>
        <p><strong>Company:</strong> \${company || 'N/A'}</p>
        <p><strong>Inquiry:</strong></p>
        <p>\${inquiry}</p>
      \`,
    };

    await sgMail.send(msg);

    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('SendGrid error:', error);
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
  }
}
```

---

## Testing

1. Fill out the contact form on your website
2. Check the terminal/console for logs
3. Check info@mapletradecorp.com inbox
4. Check spam folder if not in inbox

---

## Troubleshooting

### Emails going to spam?
1. Set up proper domain verification (SPF, DKIM, DMARC records)
2. Use your own domain instead of onboarding@resend.dev
3. Warm up your sending domain gradually

### Not receiving emails?
1. Check console logs for errors
2. Verify API key is correct
3. Check email service dashboard for delivery status
4. Make sure environment variables are loaded

---

## Production Deployment (Vercel)

Add environment variables in Vercel:
1. Go to your project settings
2. Click "Environment Variables"
3. Add `RESEND_API_KEY` with your key
4. Redeploy your app

---

## Cost Comparison

| Service | Free Tier | Price After |
|---------|-----------|-------------|
| Resend | 3,000/mo | $20/mo for 50k |
| SendGrid | 100/day | $19.95/mo for 50k |
| Brevo | 300/day | $25/mo for 20k |
| Mailgun | Trial | $35/mo for 50k |

**Recommendation**: Start with **Resend** - it's perfect for your use case!
