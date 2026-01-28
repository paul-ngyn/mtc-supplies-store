import { Metadata } from 'next';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import { Toaster } from '@/components/ui/Toasts/toaster';
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

const title = 'Maple Trade Corp Store';
const description = 'Your one-stop shop for all supplies.';

export const metadata: Metadata = {
  metadataBase: new URL(getURL()),
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description
  }
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';
  const isAuthPage = pathname.startsWith('/signin') || pathname.startsWith('/signup');

  return (
    <html lang="en">
      <body className={`${dmSans.variable} font-sans ${isAuthPage ? "bg-gray-50" : "bg-white"}`}>
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
      </body>
    </html>
  );
}