import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Maple Trade Corp Store - Food Packaging & Supplies',
    short_name: 'MTC Store',
    description: 'Premium food packaging supplies including plastic containers, biodegradable boxes, sushi trays, and eco-friendly packaging solutions for restaurants and food service businesses.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1c51a3',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
