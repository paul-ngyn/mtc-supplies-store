import { MetadataRoute } from 'next';
import { getURL } from '@/utils/helpers';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getURL();
  const currentDate = new Date();

  // Define all brand and category routes
  const brands = ['hd', 'imperial', 'mb', 'td', 'tkn'];

  const categoryRoutes = [
    // HD categories
    '/category/hd',
    '/category/hd/clipin',
    '/category/hd/clipin/rectangular',
    '/category/hd/clipin/round',
    '/category/hd/clipin/compartment',
    '/category/hd/deli-containers',
    '/category/hd/meat-trays',
    '/category/hd/soup-containers',
    '/category/hd/v-series',
    '/category/hd/v-series/rectangular',
    '/category/hd/v-series/round',
    '/category/hd/v-series/rectangular-vented',
    '/category/hd/rerobox',
    '/category/hd/rerobox/rectangular',
    '/category/hd/rerobox/round',
    '/category/hd/rerobox/compartment',

    // Imperial categories
    '/category/imperial',
    '/category/imperial/pokebowl',
    '/category/imperial/bento',
    '/category/imperial/bento/5-compartment',
    '/category/imperial/bento/single-compartment',
    '/category/imperial/sushi-tray',
    '/category/imperial/sushi-tray/rectangular-sushi-tray',
    '/category/imperial/sushi-tray/round-party-tray',

    // MB categories
    '/category/mb',
    '/category/mb/hinged-clamshells',
    '/category/mb/hinged-clamshells/tfpp-white',
    '/category/mb/hinged-clamshells/pp-vented-black',

    // TD categories
    '/category/td',
    '/category/td/plastic-containers',
    '/category/td/plastic-containers/rectangular',
    '/category/td/plastic-containers/round',
    '/category/td/plastic-containers/compartments',
    '/category/td/soup-containers',

    // TKN categories
    '/category/tkn',
    '/category/tkn/bagasse-hinged-clamshells',
    '/category/tkn/bagasse-clamshells',
    '/category/tkn/boat-trays',
    '/category/tkn/bio-boxes',
    '/category/tkn/bio-boxes/white',
    '/category/tkn/bio-boxes/kraft',
    '/category/tkn/chopsticks',
    '/category/tkn/food-pails',
    '/category/tkn/food-pails/white',
    '/category/tkn/food-pails/kraft',
    '/category/tkn/portion-cups-lids',
    '/category/tkn/portion-cups',
    '/category/tkn/portion-cup-lids',
    '/category/tkn/paper-bags',
    '/category/tkn/napkins-papertowels',
    '/category/tkn/napkins-papertowels/napkins',
    '/category/tkn/napkins-papertowels/paper-towels',
    '/category/tkn/napkins-papertowels/tissue',
    '/category/tkn/napkins-papertowels/toilet-seat-covers',
  ];

  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/brands`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  const categoryPages = categoryRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...categoryPages];
}
