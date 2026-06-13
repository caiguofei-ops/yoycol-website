const BASE_URL = 'https://yoycolpod.com';

// Products for homepage schema
const categoryProducts = [
  {
    name: 'Baseball Caps',
    url: `${BASE_URL}/products/POD-adult-baseball-cap`,
    image: '/images/POD-adult-baseball-cap/main_01.jpg',
  },
  {
    name: 'Berets',
    url: `${BASE_URL}/products/POD-beret-large-size`,
    image: '/images/POD-beret-large-size/main_01.jpg',
  },
  {
    name: 'Fisherman Hats',
    url: `${BASE_URL}/products/POD-fisherman-hat`,
    image: '/images/POD-fisherman-hat/main_01.jpg',
  },
  {
    name: 'Knit Hats',
    url: `${BASE_URL}/products/POD-acrylic-knit-hat`,
    image: '/images/POD-acrylic-knit-hat/main_01.jpg',
  },
];

export default function ProductListSchema() {
  const schemas = categoryProducts.map((product) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    url: product.url,
    image: `${BASE_URL}${product.image}`,
    brand: {
      '@type': 'Brand',
      name: 'yoycol',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'yoycol',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '156',
    },
  }));

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}