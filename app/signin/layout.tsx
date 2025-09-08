import { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { getURL } from '@/utils/helpers';

const title = 'Sign In - TKN Supplies Store';
const description = 'Sign in to your TKN Supplies Store account.';

export const metadata: Metadata = {
  metadataBase: new URL(getURL()),
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description
  }
};

export default async function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}