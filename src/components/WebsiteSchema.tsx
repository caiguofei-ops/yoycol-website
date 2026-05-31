export default function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://yoycolpod.com/#website',
    name: 'yoycol',
    url: 'https://yoycolpod.com',
    description: 'Professional print-on-demand cap factory for global e-commerce sellers.',
    publisher: {
      '@id': 'https://yoycolpod.com/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://yoycolpod.com/products?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}