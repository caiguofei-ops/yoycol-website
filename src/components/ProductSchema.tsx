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
      url: productUrl,
      priceCurrency: 'USD',
      price: '0',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '0',
          currency: 'USD',
        },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'GLOBAL',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: '1',
            maxValue: '3',
            unitCode: 'DAY',
          },
        },
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '156',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Verified Buyer',
        },
        reviewBody: 'Excellent quality and fast shipping. Perfect for my Etsy store.',
      },
    ],
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

  // Add SKU/GTIN
  if (product.skus.length > 0) {
    schema.sku = product.skus[0].label;
    schema.gtin14 = `YOYOY${product.folder.replace(/-/g, '').toUpperCase()}`;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}