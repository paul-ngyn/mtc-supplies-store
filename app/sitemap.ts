import type { MetadataRoute } from 'next';
import { getURL } from '@/utils/helpers';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getURL();
  const now = new Date();

  const routes = [
    '',
    '/about',
    '/aboutus',
    '/brands',
    '/contact',
    '/products',
    '/search',
    '/list',
    '/privacy',
    '/terms',
    '/subscription',
    '/category/tkn',
    '/category/hd',
    '/category/td',
    '/category/imperial',
    '/category/mb',
    '/category/tkn/paper-bags',
    '/category/tkn/bio-boxes',
    '/category/tkn/food-pails',
    '/category/tkn/boat-trays',
    '/category/tkn/portion-cups',
    '/category/tkn/portion-cup-lids',
    '/category/tkn/portion-cups-lids',
    '/category/tkn/bagasse-hinged-clamshells',
    '/category/tkn/chopsticks',
    '/category/tkn/napkins-papertowels',
    '/category/hd/rerobox',
    '/category/hd/clipin',
    '/category/hd/v-series',
    '/category/hd/meat-trays',
    '/category/hd/deli-containers',
    '/category/hd/soup-containers',
    '/category/td/plastic-containers',
    '/category/td/soup-containers',
    '/category/imperial/sushi-tray',
    '/category/imperial/bento',
    '/category/imperial/pokebowl',
    '/category/mb/hinged-clamshells'
  ];

  return routes.map((route) => ({
    url: route ? `${baseUrl}${route}` : baseUrl,
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7
  }));
}
