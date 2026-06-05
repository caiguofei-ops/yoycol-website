import type { Product } from './types';

interface ProductSchemaProps {
  product: Product;
  baseUrl: string;
  category: string;
}

export default function ProductSchema({ product, baseUrl, category }: ProductSchemaProps) {
  const productUrl = `${baseUrl}/products/${product.folder}`;

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    url: productUrl,
    image: product.mainImages,
    brand: {
      '@type': 'Brand',
      name: 'yoycol',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'yoycol',
      url: baseUrl,
    },
    category: category,
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
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Minimum Order Quantity',
        value: '1',
      },
      {
        '@type': 'PropertyValue',
        name: 'Production Time',
        value: '1-3 Business Days',
      },
      {
        '@type': 'PropertyValue',
        name: 'Print Type',
        value: '3D Full Print / Digital Transfer',
      },
      {
        '@type': 'PropertyValue',
        name: 'Custom Design',
        value: 'Supported',
      },
    ],
  };

  // Add video if available
  if (product.video) {
    schema.video = {
      '@type': 'VideoObject',
      name: `${product.name} Product Video`,
      description: `Product video for ${product.name}`,
      thumbnailUrl: product.mainImages[0],
      contentUrl: `${baseUrl}${product.video}`,
      uploadDate: '2024-01-01',
    };
  }

  // Add SKU if available
  if (product.skus.length > 0) {
    schema.sku = product.skus[0].label;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}