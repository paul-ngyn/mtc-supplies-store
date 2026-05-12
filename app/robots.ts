import { MetadataRoute } from 'next';
import { getURL } from '@/utils/helpers';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getURL();

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/auth/', '/account/', '/orders/', '/subscription/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
