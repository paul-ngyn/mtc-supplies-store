import { Metadata } from 'next';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import { Toaster } from '@/components/ui/Toasts/toaster';
import { ListProvider } from '@/utils/listContext';
import { PropsWithChildren, Suspense } from 'react';
import { getURL } from '@/utils/helpers';
import { headers } from 'next/headers';
import { DM_Sans } from 'next/font/google';
import 'styles/main.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
  display: 'swap',
});

const title = 'Maple Trade Corp - Premium Food Packaging & Supplies';
const description = 'Leading supplier of food packaging solutions including HD™ plastic containers, Imperial sushi trays, biodegradable boxes, and eco-friendly packaging. Quality products for restaurants, caterers, and food service businesses.';

export const metadata: Metadata = {
  metadataBase: new URL(getURL()),
  title: {
    default: title,
    template: '%s | Maple Trade Corp'
  },
  description: description,
  keywords: [
    'food packaging supplies',
    'plastic containers',
    'sushi trays',
    'biodegradable food boxes',
    'takeout containers',
    'restaurant supplies',
    'food service packaging',
    'HD plastic containers',
    'Imperial sushi trays',
    'eco-friendly packaging',
    'recyclable containers',
    'food storage containers',
    'wholesale food packaging',
    'commercial food containers',
    'deli containers',
    'bento boxes',
    'clamshell containers',
    'portion cups',
    'paper bags',
    'compostable packaging'
  ],
  authors: [{ name: 'Maple Trade Corp' }],
  creator: 'Maple Trade Corp',
  publisher: 'Maple Trade Corp',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: getURL(),
    title: title,
    description: description,
    siteName: 'Maple Trade Corp Store',
    images: [
      {
        url: '/architecture_diagram.png',
        width: 1200,
        height: 630,
        alt: 'Maple Trade Corp - Food Packaging Supplies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: ['/architecture_diagram.png'],
  },
  alternates: {
    canonical: getURL(),
  },
  category: 'Food Service & Packaging',
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';
  const isAuthPage = pathname.startsWith('/signin') || pathname.startsWith('/signup');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Maple Trade Corp',
    url: getURL(),
    logo: `${getURL()}/architecture_diagram.png`,
    description: 'Leading supplier of food packaging solutions including plastic containers, sushi trays, and eco-friendly packaging for restaurants and food service businesses.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      url: `${getURL()}/contact`,
    },
    sameAs: [],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${dmSans.variable} font-sans ${isAuthPage ? "bg-gray-50" : "bg-white"}`}>
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