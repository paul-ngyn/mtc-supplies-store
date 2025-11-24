import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last Updated: November 24, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12 space-y-8">
          
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">OVERVIEW</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Maple Trade Corporation ("MTC," "Company," "we," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you and our practices for collecting, maintaining, protecting, using, and disclosing that information.
              </p>
              <p>
                This policy applies to information that we collect:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Through our website at www.mapletradecorp.com (the "Website")</li>
                <li>In email, text, and other electronic messages between you and the Website</li>
                <li>In person, over the phone, in writing, or through the mail</li>
                <li>When you interact with our contact forms and inquiry submissions</li>
              </ul>
              <p className="mt-4">
                Please read this policy carefully to understand our policies regarding our collection, treatment, and use of your information. If you do not agree with our policies and practices, your choice is to not use our Website. By accessing or using the Website, you accept and agree to be bound and abide by this Privacy Policy and our <Link href="/terms" className="text-[#1c51a3] hover:underline">Terms of Service</Link>. You should periodically review this privacy policy because it may change from time to time.
              </p>
              <p>
                Our store is hosted on Vercel and powered by Next.js and Supabase. Payment processing is handled securely through Stripe.
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">INFORMATION WE MAY COLLECT ABOUT YOU</h2>
            <div className="text-gray-700 space-y-4">
              <p>We collect several types of information from and about users of our Website, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, phone number, company name, and mailing address</li>
                <li><strong>Business Information:</strong> Job title, employer, and business-related inquiries</li>
                <li><strong>Transaction Information:</strong> Details of products and services you inquire about or purchase</li>
                <li><strong>Communication Records:</strong> Copies of your correspondence with us, including emails and contact form submissions</li>
                <li><strong>Technical Information:</strong> Basic information about your internet connection and the device you use to access our Website</li>
              </ul>
            </div>
          </section>

          {/* How We Collect Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">HOW WE COLLECT INFORMATION</h2>
            <div className="text-gray-700 space-y-4">
              <p>We collect this information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Directly from you when you provide it to us through contact forms, email inquiries, or phone calls</li>
                <li>When you create an account or make a purchase on our Website</li>
                <li>Automatically through basic website functionality (but we do not use extensive tracking or analytics cookies)</li>
              </ul>
            </div>
          </section>

          {/* Technologies We Use */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">TECHNOLOGIES WE USE</h2>
            <div className="text-gray-700 space-y-4">
              <p>Our Website uses the following technologies:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Vercel:</strong> Website hosting platform</li>
                <li><strong>Next.js:</strong> Web application framework for the Website</li>
                <li><strong>Supabase:</strong> Authentication and database services for account management</li>
                <li><strong>Stripe:</strong> Secure payment processing (Stripe handles all payment card information directly; we do not store your payment details)</li>
                <li><strong>Essential Cookies:</strong> Basic browser cookies necessary for website functionality, such as maintaining your session and shopping cart</li>
              </ul>
              <p className="mt-4">
                <strong>Important:</strong> We do not use tracking pixels, analytics services, or advertising cookies to monitor your online behavior. We only collect information that you voluntarily provide to us.
              </p>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">HOW WE USE YOUR INFORMATION</h2>
            <div className="text-gray-700 space-y-4">
              <p>We use information that we collect about you or that you provide to us, including any personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To present our Website and its contents to you</li>
                <li>To provide you with information, products, or services that you request from us</li>
                <li>To process your orders and manage your account</li>
                <li>To fulfill any other purpose for which you provide it</li>
                <li>To provide you with notices about your account or orders</li>
                <li>To carry out our obligations and enforce our rights arising from any contracts</li>
                <li>To notify you about changes to our Website or products/services</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>For any other purpose with your consent</li>
              </ul>
            </div>
          </section>

          {/* Disclosure of Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">DISCLOSURE OF YOUR INFORMATION</h2>
            <div className="text-gray-700 space-y-4">
              <p>We may disclose personal information that we collect or you provide:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To our service providers who assist us in operating our Website and processing transactions (such as Vercel, Supabase, and Stripe), who are bound by contractual obligations to keep personal information confidential</li>
                <li>To fulfill the purpose for which you provide it</li>
                <li>For any other purpose disclosed by us when you provide the information</li>
                <li>With your consent</li>
                <li>To comply with any court order, law, or legal process</li>
                <li>To enforce or apply our Terms of Service</li>
                <li>If we believe disclosure is necessary to protect the rights, property, or safety of MTC, our customers, or others</li>
              </ul>
              <p className="mt-4">
                <strong>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</strong>
              </p>
            </div>
          </section>

          {/* Your Choices */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">YOUR CHOICES ABOUT YOUR INFORMATION</h2>
            <div className="text-gray-700 space-y-4">
              <p>We strive to provide you with choices regarding the personal information you provide to us:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> You can set your browser to refuse cookies, but please note that some parts of the Website may not function properly without them</li>
                <li><strong>Promotional Communications:</strong> If you do not wish to receive promotional emails from us, you can opt-out by following the unsubscribe instructions in those emails or by contacting us directly</li>
                <li><strong>Account Information:</strong> You can review and change your personal information by logging into your account on the Website</li>
              </ul>
            </div>
          </section>

          {/* Payment Processing */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">PAYMENT PROCESSING</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                We use Stripe as our third-party payment processor. We do not store your payment card details. Payment information is provided directly to Stripe, whose use of your personal information is governed by their Privacy Policy. Stripe adheres to PCI-DSS standards to ensure the secure handling of payment information.
              </p>
            </div>
          </section>

          {/* Accessing and Correcting Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">ACCESSING AND CORRECTING YOUR INFORMATION</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                You can review and change your personal information by logging into the Website and visiting your account profile page. You may also send us an email at <a href="mailto:info@mapletradecorp.com" className="text-[#1c51a3] hover:underline">info@mapletradecorp.com</a> to request access to, correct, or delete any personal information that you have provided to us.
              </p>
              <p>
                If you have an account connected with the Website, we cannot delete your personal information except by also deleting your user account. We may not accommodate a request to change information if we believe the change would violate any law or legal requirement or cause the information to be incorrect.
              </p>
            </div>
          </section>

          {/* California Privacy Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">CALIFORNIA PRIVACY RIGHTS</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                If you are a California resident, you have specific rights regarding your personal information under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to know what personal information we have collected about you</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to opt-out of the sale of your personal information (we do not sell personal information)</li>
                <li>The right to non-discrimination for exercising your privacy rights</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at <a href="mailto:info@mapletradecorp.com" className="text-[#1c51a3] hover:underline">info@mapletradecorp.com</a> or call us at your convenience.
              </p>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">DATA SECURITY</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                We use reasonable security measures to protect personal information. We use Supabase for secure authentication and data storage, and Stripe for secure payment processing. However, no method of transmission over the Internet or electronic storage is 100% secure. Therefore, we cannot guarantee absolute security and encourage you to use the Website and share information with caution.
              </p>
              <p>
                The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our Website, you are responsible for keeping this password confidential. We ask you not to share your password with anyone.
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">DATA RETENTION</h2>
            <div className="text-gray-700">
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. When we no longer need your personal information, we will securely delete or anonymize it.
              </p>
            </div>
          </section>

          {/* International Data Transfer */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">TRANSFER OF DATA</h2>
            <div className="text-gray-700">
              <p>
                Your personal information may be transferred and maintained on computers located in the United States. If you are located outside of the United States and choose to provide information to us, please note that we transfer the data to the United States and process it there. Your use of the Website and submission of such information represents your consent to this transfer.
              </p>
            </div>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">CHILDREN UNDER THE AGE OF 16</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Our Website is not intended for children under the age of 16. No one under the age of 16 may provide any personal information to or on the Website. We do not knowingly collect personal information from children under 16. If you are under 16, do not use or provide any information on this Website.
              </p>
              <p>
                If we learn we have collected or received personal information from a child under 16 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 16, please contact us at <a href="mailto:info@mapletradecorp.com" className="text-[#1c51a3] hover:underline">info@mapletradecorp.com</a>.
              </p>
            </div>
          </section>

          {/* Changes to Privacy Policy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">CHANGES TO THIS PRIVACY POLICY</h2>
            <div className="text-gray-700">
              <p>
                We will post any changes that we make to our Privacy Policy on this page. The date the Privacy Policy was last revised is identified at the top of the page. You are responsible for periodically visiting our Website and this Privacy Policy to check for any changes. Changes to the Privacy Policy are effective upon posting to the Website.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">CONTACT INFORMATION</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                All questions or comments about this Privacy Policy and our privacy practices should be directed to:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-semibold text-lg mb-2">Maple Trade Corporation</p>
                <p>Hayward, California</p>
                <p>Email: <a href="mailto:info@mapletradecorp.com" className="text-[#1c51a3] hover:underline">info@mapletradecorp.com</a></p>
                <p className="mt-4">
                  You may also contact us through our <Link href="/contact" className="text-[#1c51a3] hover:underline">Contact Form</Link>.
                </p>
              </div>
            </div>
          </section>

          {/* Back to Home */}
          <div className="pt-8 border-t border-gray-200">
            <Link 
              href="/" 
              className="inline-block bg-[#1c51a3] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#153d7f] transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata() {
  return {
    title: 'Privacy Policy - Maple Trade Corporation',
    description: 'Privacy Policy for Maple Trade Corporation - Learn how we collect, use, and protect your personal information.',
  };
}
