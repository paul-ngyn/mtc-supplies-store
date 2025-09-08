import { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import { Toaster } from '@/components/ui/Toasts/toaster';
import { PropsWithChildren, Suspense } from 'react';
import { getURL } from '@/utils/helpers';
import { headers } from 'next/headers';
import 'styles/main.css';

const title = 'TKN Supplies Store'; // Updated from 'Next.js Subscription Starter'
const description = 'Your one-stop shop for all supplies.'; // Updated from Vercel description

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
  const headersList = headers();
  const pathname = headersList.get('x-pathname') || '';
  const isAuthPage = pathname.startsWith('/signin') || pathname.startsWith('/signup');

  return (
    <html lang="en">
      <body className="bg-white">
        {!isAuthPage && <Navbar />}
        <main
          id="skip"
          className={isAuthPage ? "min-h-screen" : "min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"}
        >
          {children}
        </main>
        <Suspense>
          <Toaster />
        </Suspense>
      </body>
    </html>
  );
}