import { Metadata } from 'next';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import { Toaster } from '@/components/ui/Toasts/toaster';
import { ListProvider } from '@/utils/listContext';
import { PropsWithChildren, Suspense } from 'react';
import { getURL } from '@/utils/helpers';
import { headers } from 'next/headers';
import { DM_Sans } from 'next/font/google';
import GoogleAnalytics from '@/components/ui/Analytics/GoogleAnalytics';
import OrganizationJsonLd from '@/components/ui/SEO/OrganizationJsonLd';
import '@/styles/main.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
  display: 'swap',
});

const title = 'Maple Trade Corp | Restaurant Supply Distributor & Wholesaler';
const description = 'Maple Trade Corp is a trusted restaurant supply distributor and wholesaler offering eco-friendly food service packaging, compostable containers, paper bags, and sustainable supplies.';

export const metadata: Metadata = {
  metadataBase: new URL(getURL()),
  title: title,
  description: description,
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    shortcut: '/favicon.ico'
  },
  alternates: {
    canonical: getURL()
  },
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    url: getURL(),
    siteName: 'Maple Trade Corp',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description
  }
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';
  const isAuthPage = pathname.startsWith('/signin') || pathname.startsWith('/signup');
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en">
      <body className={`${dmSans.variable} font-sans ${isAuthPage ? "bg-gray-50" : "bg-white"}`}>
        <OrganizationJsonLd />
        {gaMeasurementId ? <GoogleAnalytics measurementId={gaMeasurementId} /> : null}
        <ListProvider>
          {/* Always show navbar - don't disable it on auth pages */}
          <Navbar />
          <main
            id="skip"
            className={isAuthPage ? "min-h-screen" : "min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"}
          >
            {children}
          </main>
          {!isAuthPage && <Footer />}
          <Suspense>
            <Toaster />
          </Suspense>
        </ListProvider>
      </body>
    </html>
  );
}