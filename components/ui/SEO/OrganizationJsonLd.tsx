import { getURL } from '@/utils/helpers';

export default function OrganizationJsonLd() {
  const baseUrl = getURL();
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Maple Trade Corp',
    url: baseUrl,
    logo: `${baseUrl}/mtc_logo-removebg.png`,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-510-783-3888',
        contactType: 'customer service',
        email: 'info@mapletradecorp.com'
      }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2660 W Winton Ave',
      addressLocality: 'Hayward',
      addressRegion: 'CA',
      postalCode: '94545',
      addressCountry: 'US'
    },
    sameAs: ['https://www.linkedin.com/']
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
