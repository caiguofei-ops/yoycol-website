export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://yoycolpod.com/#organization',
    name: 'yoycol',
    alternateName: 'Yoycol POD',
    url: 'https://yoycolpod.com',
    logo: 'https://yoycolpod.com/logo.png',
    description: 'Professional print-on-demand cap factory for global e-commerce sellers. We provide wholesale custom printed caps for Amazon, Etsy, Temu, and Shopify sellers worldwide.',
    foundingDate: '2020',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+86-133-4832-5895',
        contactType: 'sales',
        availableLanguage: ['English', 'Chinese'],
        areaServed: 'WORLDWIDE',
      },
      {
        '@type': 'ContactPoint',
        email: 'info@yoycolpod.com',
        contactType: 'customer service',
        availableLanguage: ['English', 'Chinese'],
      },
    ],
    sameAs: [
      'https://wa.me/8613348325895',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CN',
      addressRegion: 'Guangdong',
      addressLocality: 'Shenzhen',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}