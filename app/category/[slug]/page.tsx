import { redirect, notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Valid brand slugs
const validBrands = ['tkn', 'hd', 'td', 'imperial', 'mb'];

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;

  // Check if this is a valid brand slug
  if (!validBrands.includes(slug)) {
    notFound();
  }

  // Redirect to the brand-specific page
  redirect(`/category/${slug}`);
}

export async function generateStaticParams() {
  return validBrands.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  const brandNames: Record<string, string> = {
    tkn: 'TKN',
    hd: 'HD',
    td: 'TD',
    imperial: 'Imperial',
    mb: 'MB',
  };

  const brandName = brandNames[slug] || 'Products';

  return {
    title: `${brandName} Products - Maple Trade Corp`,
    description: `Explore ${brandName} packaging products and solutions.`,
  };
}
