import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const contactEmailTo = process.env.CONTACT_EMAIL_TO || 'info@mapletradecorp.com';
const contactEmailFrom = process.env.CONTACT_EMAIL_FROM || 'Contact Form <onboarding@resend.dev>';

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

    // If Resend is not configured, just log the message
    if (!resend) {
      console.log('Contact form submission (email not configured):', { name, email, phone, company, inquiry });
      return NextResponse.json(
        { message: 'Contact form submitted successfully (email service not configured)' },
        { status: 200 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: contactEmailFrom,
      to: contactEmailTo,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
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
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value">${phone}</div>
                </div>
                <div class="field">
                  <div class="label">Company:</div>
                  <div class="value">${company || 'N/A'}</div>
                </div>
                <div class="field">
                  <div class="label">Inquiry:</div>
                  <div class="value">${inquiry.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              <div class="footer">
                Submitted on ${new Date().toLocaleString('en-US', { 
                  timeZone: 'America/Los_Angeles',
                  dateStyle: 'full',
                  timeStyle: 'long'
                })}
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);

    try {
      await resend.emails.send({
        from: contactEmailFrom,
        to: email,
        replyTo: contactEmailTo,
        subject: 'We received your message',
        html: `
          <div style="font-family: Arial, sans-serif; background-color: #f8fafc; padding: 24px;">
            <div style="max-width: 640px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);">
              <div style="background: linear-gradient(90deg, #1c51a3 0%, #2b6fd7 100%); padding: 28px 32px; color: #ffffff;">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                  <img src="https://yourdomain.com/mtc_logo-removebg.png" alt="MTC Logo" style="height: 48px; width: auto; display: block;" />
                </div>
                <h2 style="margin: 0 0 8px; font-size: 24px;">Thank you for contacting us</h2>
                <p style="margin: 0; font-size: 15px; opacity: 0.95;">We’ve received your message and will be in touch shortly.</p>
              </div>
              <div style="padding: 32px; color: #1f2937;">
                <p style="margin: 0 0 12px; font-size: 16px;">Hi ${name},</p>
                <p style="margin: 0 0 20px; font-size: 15px; line-height: 1.6;">Thanks for reaching out to MTC. We’ve received your message and will get back to you as soon as possible.</p>
                <div style="background-color: #f3f7ff; border-left: 4px solid #1c51a3; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
                  <p style="margin: 0 0 8px; font-weight: 700; color: #1c51a3;">Your message</p>
                  <p style="margin: 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${inquiry.replace(/\n/g, '<br>')}</p>
                </div>
                <p style="margin: 0 0 20px; font-size: 15px; line-height: 1.6;">Be in Touch Soon!<br /><strong>MTC</strong></p>
                <div style="border-top: 1px solid #e5e7eb; padding-top: 16px; font-size: 13px; color: #6b7280; line-height: 1.6;">
                  <p style="margin: 0 0 4px;"><strong>Need help sooner?</strong> Contact us at <a href="mailto:info@mapletradecorp.com" style="color: #1c51a3; text-decoration: none;">info@mapletradecorp.com</a></p>
                  <p style="margin: 0;">MTC Supplies • Quality packaging solutions</p>
                </div>
              </div>
            </div>
          </div>
        `,
      });
      console.log('Confirmation email sent to sender:', email);
    } catch (confirmationError) {
      console.error('Confirmation email error:', confirmationError);
    }

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
