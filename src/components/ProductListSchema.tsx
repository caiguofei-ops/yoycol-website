const BASE_URL = 'https://yoycolpod.com';

// Simplified products for homepage schema
const categoryProducts = [
  {
    name: 'Baseball Caps',
    url: `${BASE_URL}/products?category=Baseball+Caps`,
    image: '/images/POD-adult-baseball-cap/main_01.jpg',
  },
  {
    name: 'Berets',
    url: `${BASE_URL}/products?category=Berets`,
    image: '/images/POD-beret-large-size/main_01.jpg',
  },
  {
    name: 'Fisherman Hats',
    url: `${BASE_URL}/products?category=Fisherman+Hats`,
    image: '/images/POD-fisherman-hat/main_01.jpg',
  },
  {
    name: 'Knit Hats',
    url: `${BASE_URL}/products?category=Knit+Hats`,
    image: '/images/POD-acrylic-knit-hat/main_01.jpg',
  },
];

export default function ProductListSchema() {
  const items = categoryProducts.map((product, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Product',
      '@id': product.url,
      name: product.name,
      image: `${BASE_URL}${product.image}`,
      url: product.url,
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
    },
  }));

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}