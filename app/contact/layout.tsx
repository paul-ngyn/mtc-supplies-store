import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get a Quote for Food Packaging Supplies',
  description: 'Contact Maple Trade Corp for food packaging supplies and solutions. Reach out for bulk orders, custom sizing, product information, or any questions about our HD, Imperial, TKN, TD, and MB packaging products.',
  keywords: [
    'contact food packaging supplier',
    'food packaging quote',
    'bulk packaging orders',
    'restaurant supply contact',
    'custom packaging inquiry',
    'wholesale packaging',
    'food service contact',
    'packaging consultation'
  ],
  openGraph: {
    title: 'Contact Us - Get a Quote for Food Packaging Supplies',
    description: 'Contact Maple Trade Corp for food packaging supplies and solutions. Reach out for bulk orders and product information.',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
