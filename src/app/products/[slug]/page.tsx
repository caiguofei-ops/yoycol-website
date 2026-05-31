import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductDetailClient from '../../../components/ProductDetailClient';
import ProductSchema from '../../../components/ProductSchema';

// SKU images for each product
const productSkus: Record<string, { label: string; skuImage: string }[]> = {
  'JIT-custom-beret-Christmas': Array.from({ length: 20 }, (_, i) => ({
    label: `SKU ${String(i + 1).padStart(2, '0')}`,
    skuImage: `/images/JIT-custom-beret-Christmas/SKU_${String(i + 1).padStart(2, '0')}.jpg`,
  })),
  'POD-acrylic-knit-hat': Array.from({ length: 23 }, (_, i) => ({
    label: `SKU ${String(i + 1).padStart(2, '0')}`,
    skuImage: `/images/POD-acrylic-knit-hat/SKU_${String(i + 1).padStart(2, '0')}.jpg`,
  })),
  'POD-adult-baseball-cap': Array.from({ length: 17 }, (_, i) => ({
    label: `SKU ${String(i + 1).padStart(2, '0')}`,
    skuImage: `/images/POD-adult-baseball-cap/SKU_${String(i + 1).padStart(2, '0')}.jpg`,
  })),
  'POD-beret-large-size': Array.from({ length: 22 }, (_, i) => ({
    label: `SKU ${String(i + 1).padStart(2, '0')}`,
    skuImage: `/images/POD-beret-large-size/SKU_${String(i + 1).padStart(2, '0')}.jpg`,
  })),
  'POD-eagle-knit-hat': Array.from({ length: 20 }, (_, i) => ({
    label: `SKU ${String(i + 1).padStart(2, '0')}`,
    skuImage: `/images/POD-eagle-knit-hat/SKU_${String(i + 1).padStart(2, '0')}.jpg`,
  })),
  'POD-fisherman-hat': [{ label: 'SKU 01', skuImage: '/images/POD-fisherman-hat/SKU_01.jpg' }],
  'POD-flat-brim-hiphop-cap': Array.from({ length: 24 }, (_, i) => ({
    label: `SKU ${String(i + 1).padStart(2, '0')}`,
    skuImage: `/images/POD-flat-brim-hiphop-cap/SKU_${String(i + 1).padStart(2, '0')}.jpg`,
  })),
  'POD-kids-cartoon-fisherman-hat': Array.from({ length: 24 }, (_, i) => ({
    label: `SKU ${String(i + 1).padStart(2, '0')}`,
    skuImage: `/images/POD-kids-cartoon-fisherman-hat/SKU_${String(i + 1).padStart(2, '0')}.jpg`,
  })),
  'POD-kids-mesh-cap': [{ label: 'SKU 01', skuImage: '/images/POD-kids-mesh-cap/SKU_01.jpg' }],
  'POD-large-fisherman-hat': Array.from({ length: 17 }, (_, i) => ({
    label: `SKU ${String(i + 1).padStart(2, '0')}`,
    skuImage: `/images/POD-large-fisherman-hat/SKU_${String(i + 1).padStart(2, '0')}.jpg`,
  })),
  'POD-Leifeng-winter-hat': [{ label: 'SKU 01', skuImage: '/images/POD-Leifeng-winter-hat/SKU_01.jpg' }],
  'POD-summer-fisherman-hat': Array.from({ length: 16 }, (_, i) => ({
    label: `SKU ${String(i + 1).padStart(2, '0')}`,
    skuImage: `/images/POD-summer-fisherman-hat/SKU_${String(i + 1).padStart(2, '0')}.jpg`,
  })),
  'POD-visor-TEMU': [{ label: 'SKU 01', skuImage: '/images/POD-visor-TEMU/SKU_01.jpg' }],
  'POD-washed-denim-baseball-cap': Array.from({ length: 7 }, (_, i) => ({
    label: `SKU ${String(i + 1).padStart(2, '0')}`,
    skuImage: `/images/POD-washed-denim-baseball-cap/SKU_${String(i + 1).padStart(2, '0')}.jpg`,
  })),
};

// Video paths for products with videos
const productVideos: Record<string, string> = {
  'JIT-custom-beret-Christmas': '/images/JIT-custom-beret-Christmas/video_01.mp4',
  'POD-acrylic-knit-hat': '/images/POD-acrylic-knit-hat/video_01.mp4',
  'POD-adult-baseball-cap': '/images/POD-adult-baseball-cap/video_01.mp4',
  'POD-beret-large-size': '/images/POD-beret-large-size/video_01.mp4',
  'POD-eagle-knit-hat': '/images/POD-eagle-knit-hat/video_01.mp4',
  'POD-fisherman-hat': '/images/POD-fisherman-hat/video_01.mp4',
  'POD-flat-brim-hiphop-cap': '/images/POD-flat-brim-hiphop-cap/video_01.mp4',
  'POD-kids-cartoon-fisherman-hat': '/images/POD-kids-cartoon-fisherman-hat/video_01.mp4',
  'POD-kids-mesh-cap': '/images/POD-kids-mesh-cap/video_01.mp4',
  'POD-large-fisherman-hat': '/images/POD-large-fisherman-hat/video_01.mp4',
  'POD-Leifeng-winter-hat': '/images/POD-Leifeng-winter-hat/video_01.mp4',
  'POD-summer-fisherman-hat': '/images/POD-summer-fisherman-hat/video_01.mp4',
};

type Product = {
  name: string;
  folder: string;
  description: string;
  mainImages: string[];
  detailImages: string[];
  video?: string;
  features: string[];
  skus: { label: string; skuImage: string }[];
};

const defaultFeatures = [
  'Premium full-print finish for high-resolution hats.',
  'Adjustable fit and breathable materials for everyday wear.',
  'Fast global dispatch for e-commerce and dropship sellers.',
];

const products: Product[] = [
  { name: 'JIT Custom Beret Christmas', folder: 'JIT-custom-beret-Christmas', description: '3D full-print digital transfer beret, Christmas theme, POD customization supported. High quality sublimation printing, adjustable fit.', mainImages: ['/images/JIT-custom-beret-Christmas/main_01.jpg', '/images/JIT-custom-beret-Christmas/main_02.jpg', '/images/JIT-custom-beret-Christmas/main_03.jpg', '/images/JIT-custom-beret-Christmas/main_04.jpg', '/images/JIT-custom-beret-Christmas/main_05.jpg'], detailImages: Array.from({ length: 28 }, (_, i) => `/images/JIT-custom-beret-Christmas/detail_${String(i + 2).padStart(2, '0')}.jpg`), video: productVideos['JIT-custom-beret-Christmas'], features: defaultFeatures, skus: productSkus['JIT-custom-beret-Christmas'] },
  { name: 'POD Acrylic Knit Hat', folder: 'POD-acrylic-knit-hat', description: 'Acrylic knit hat with 3D full print, popular for cross-border e-commerce. Soft and warm, perfect for winter.', mainImages: ['/images/POD-acrylic-knit-hat/main_01.jpg', '/images/POD-acrylic-knit-hat/main_02.jpg', '/images/POD-acrylic-knit-hat/main_03.jpg'], detailImages: Array.from({ length: 11 }, (_, i) => `/images/POD-acrylic-knit-hat/detail_${String(i + 2).padStart(2, '0')}.jpg`), video: productVideos['POD-acrylic-knit-hat'], features: defaultFeatures, skus: productSkus['POD-acrylic-knit-hat'] },
  { name: 'POD Adult Baseball Cap', folder: 'POD-adult-baseball-cap', description: 'Adult baseball cap, versatile full-print, customizable. Classic style with modern printing technology.', mainImages: ['/images/POD-adult-baseball-cap/main_01.jpg', '/images/POD-adult-baseball-cap/main_02.jpg', '/images/POD-adult-baseball-cap/main_03.jpg'], detailImages: Array.from({ length: 15 }, (_, i) => `/images/POD-adult-baseball-cap/detail_${String(i + 2).padStart(2, '0')}.jpg`), video: productVideos['POD-adult-baseball-cap'], features: defaultFeatures, skus: productSkus['POD-adult-baseball-cap'] },
  { name: 'POD Beret Large Size', folder: 'POD-beret-large-size', description: 'Large size beret with 3D digital print, suitable for cross-border markets. Elegant European style.', mainImages: ['/images/POD-beret-large-size/main_01.jpg', '/images/POD-beret-large-size/main_02.jpg', '/images/POD-beret-large-size/main_03.jpg'], detailImages: Array.from({ length: 12 }, (_, i) => `/images/POD-beret-large-size/detail_${String(i + 2).padStart(2, '0')}.jpg`), video: productVideos['POD-beret-large-size'], features: defaultFeatures, skus: productSkus['POD-beret-large-size'] },
  { name: 'POD Eagle Knit Hat', folder: 'POD-eagle-knit-hat', description: 'Eagle pattern knit hat, 3D full print, trendy and warm. Perfect for outdoor activities.', mainImages: ['/images/POD-eagle-knit-hat/main_01.jpg', '/images/POD-eagle-knit-hat/main_02.jpg', '/images/POD-eagle-knit-hat/main_03.jpg'], detailImages: Array.from({ length: 22 }, (_, i) => `/images/POD-eagle-knit-hat/detail_${String(i + 2).padStart(2, '0')}.jpg`), video: productVideos['POD-eagle-knit-hat'], features: defaultFeatures, skus: productSkus['POD-eagle-knit-hat'] },
  { name: 'POD Fisherman Hat', folder: 'POD-fisherman-hat', description: 'Fisherman hat with wide brim, 3D full print, stylish and sun-protective. Great for beach and outdoor activities.', mainImages: ['/images/POD-fisherman-hat/main_01.jpg', '/images/POD-fisherman-hat/main_02.jpg', '/images/POD-fisherman-hat/main_03.jpg'], detailImages: Array.from({ length: 14 }, (_, i) => `/images/POD-fisherman-hat/detail_${String(i + 2).padStart(2, '0')}.jpg`), video: productVideos['POD-fisherman-hat'], features: defaultFeatures, skus: productSkus['POD-fisherman-hat'] },
  { name: 'POD Flat Brim Hiphop Cap', folder: 'POD-flat-brim-hiphop-cap', description: 'Flat brim hiphop cap, full print, fashionable for street style. Trendy urban design.', mainImages: ['/images/POD-flat-brim-hiphop-cap/main_01.jpg', '/images/POD-flat-brim-hiphop-cap/main_02.jpg', '/images/POD-flat-brim-hiphop-cap/main_03.jpg'], detailImages: Array.from({ length: 11 }, (_, i) => `/images/POD-flat-brim-hiphop-cap/detail_${String(i + 2).padStart(2, '0')}.jpg`), video: productVideos['POD-flat-brim-hiphop-cap'], features: defaultFeatures, skus: productSkus['POD-flat-brim-hiphop-cap'] },
  { name: 'POD Kids Cartoon Fisherman Hat', folder: 'POD-kids-cartoon-fisherman-hat', description: 'Cartoon fisherman hat for kids, 3D print, cute and practical. Sun protection for children.', mainImages: ['/images/POD-kids-cartoon-fisherman-hat/main_01.jpg', '/images/POD-kids-cartoon-fisherman-hat/main_02.jpg', '/images/POD-kids-cartoon-fisherman-hat/main_03.jpg'], detailImages: Array.from({ length: 12 }, (_, i) => `/images/POD-kids-cartoon-fisherman-hat/detail_${String(i + 2).padStart(2, '0')}.jpg`), video: productVideos['POD-kids-cartoon-fisherman-hat'], features: defaultFeatures, skus: productSkus['POD-kids-cartoon-fisherman-hat'] },
  { name: 'POD Kids Mesh Cap', folder: 'POD-kids-mesh-cap', description: 'Kids mesh cap, 3D print, breathable and comfortable. Perfect for active kids.', mainImages: ['/images/POD-kids-mesh-cap/main_01.jpg', '/images/POD-kids-mesh-cap/main_02.jpg', '/images/POD-kids-mesh-cap/main_03.jpg'], detailImages: Array.from({ length: 30 }, (_, i) => `/images/POD-kids-mesh-cap/detail_${String(i + 2).padStart(2, '0')}.jpg`), video: productVideos['POD-kids-mesh-cap'], features: defaultFeatures, skus: productSkus['POD-kids-mesh-cap'] },
  { name: 'POD Large Fisherman Hat', folder: 'POD-large-fisherman-hat', description: 'Large fisherman hat, single layer, 3D print, sun protection. Wide brim for maximum coverage.', mainImages: ['/images/POD-large-fisherman-hat/main_01.jpg', '/images/POD-large-fisherman-hat/main_02.jpg', '/images/POD-large-fisherman-hat/main_03.jpg'], detailImages: Array.from({ length: 23 }, (_, i) => `/images/POD-large-fisherman-hat/detail_${String(i + 2).padStart(2, '0')}.jpg`), video: productVideos['POD-large-fisherman-hat'], features: defaultFeatures, skus: productSkus['POD-large-fisherman-hat'] },
  { name: 'POD Leifeng Winter Hat', folder: 'POD-Leifeng-winter-hat', description: 'Leifeng winter hat, thick and warm, 3D print, windproof. Classic Chinese style winter hat.', mainImages: ['/images/POD-Leifeng-winter-hat/main_01.jpg', '/images/POD-Leifeng-winter-hat/main_02.jpg', '/images/POD-Leifeng-winter-hat/main_03.jpg'], detailImages: Array.from({ length: 7 }, (_, i) => `/images/POD-Leifeng-winter-hat/detail_${String(i + 2).padStart(2, '0')}.jpg`), video: productVideos['POD-Leifeng-winter-hat'], features: defaultFeatures, skus: productSkus['POD-Leifeng-winter-hat'] },
  { name: 'POD Summer Fisherman Hat', folder: 'POD-summer-fisherman-hat', description: 'Summer fisherman hat, 3D print, lightweight and cool. Perfect for summer beach activities.', mainImages: ['/images/POD-summer-fisherman-hat/main_01.jpg', '/images/POD-summer-fisherman-hat/main_02.jpg', '/images/POD-summer-fisherman-hat/main_03.jpg'], detailImages: Array.from({ length: 13 }, (_, i) => `/images/POD-summer-fisherman-hat/detail_${String(i + 2).padStart(2, '0')}.jpg`), video: productVideos['POD-summer-fisherman-hat'], features: defaultFeatures, skus: productSkus['POD-summer-fisherman-hat'] },
  { name: 'POD Visor TEMU', folder: 'POD-visor-TEMU', description: 'Visor hat for TEMU, 3D print, sun protection. Popular on TEMU marketplace.', mainImages: ['/images/POD-visor-TEMU/main_01.jpg', '/images/POD-visor-TEMU/main_02.jpg', '/images/POD-visor-TEMU/main_03.jpg'], detailImages: Array.from({ length: 16 }, (_, i) => `/images/POD-visor-TEMU/detail_${String(i + 2).padStart(2, '0')}.jpg`), features: defaultFeatures, skus: productSkus['POD-visor-TEMU'] },
  { name: 'POD Washed Denim Baseball Cap', folder: 'POD-washed-denim-baseball-cap', description: 'Washed denim baseball cap, customizable, various colors. Vintage washed look.', mainImages: ['/images/POD-washed-denim-baseball-cap/main_01.jpg', '/images/POD-washed-denim-baseball-cap/main_02.jpg', '/images/POD-washed-denim-baseball-cap/main_03.jpg', '/images/POD-washed-denim-baseball-cap/main_04.jpg', '/images/POD-washed-denim-baseball-cap/main_05.jpg'], detailImages: Array.from({ length: 29 }, (_, i) => `/images/POD-washed-denim-baseball-cap/detail_${String(i + 2).padStart(2, '0')}.jpg`), features: defaultFeatures, skus: productSkus['POD-washed-denim-baseball-cap'] },
];

// Product categories mapping
const productCategories: Record<string, string> = {
  'JIT-custom-beret-Christmas': 'Berets',
  'POD-acrylic-knit-hat': 'Knit Hats',
  'POD-adult-baseball-cap': 'Baseball Caps',
  'POD-beret-large-size': 'Berets',
  'POD-eagle-knit-hat': 'Knit Hats',
  'POD-fisherman-hat': 'Fisherman Hats',
  'POD-flat-brim-hiphop-cap': 'Baseball Caps',
  'POD-kids-cartoon-fisherman-hat': 'Kids Hats',
  'POD-kids-mesh-cap': 'Kids Hats',
  'POD-large-fisherman-hat': 'Fisherman Hats',
  'POD-Leifeng-winter-hat': 'Winter Hats',
  'POD-summer-fisherman-hat': 'Fisherman Hats',
  'POD-visor-TEMU': 'Visors',
  'POD-washed-denim-baseball-cap': 'Baseball Caps',
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.folder }));
}

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.folder === slug);
  if (!product) notFound();

  const category = productCategories[slug] || 'Caps';
  const baseUrl = 'https://yoycolpod.com';

  return (
    <>
      <ProductSchema product={product} baseUrl={baseUrl} category={category} />
      <ProductDetailClient product={product} />
    </>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.folder === slug);
  if (!product) return { title: 'Product Not Found' };

  const category = productCategories[slug] || 'Caps';
  const baseUrl = 'https://yoycolpod.com';
  const productUrl = `${baseUrl}/products/${slug}`;

  return {
    title: `${product.name} | Wholesale ${category} Supplier`,
    description: `${product.description} MOQ: 1 piece, worldwide shipping. Get custom ${category.toLowerCase()} for your Amazon, Etsy, or Shopify store.`,
    keywords: [
      product.name.toLowerCase(),
      'print on demand cap',
      'POD hat supplier',
      'dropshipping hats',
      'wholesale caps',
      'custom hats manufacturer',
      category.toLowerCase(),
      'Amazon FBA hats',
      'Etsy pod hats',
      '3D print cap',
    ],
    authors: [{ name: 'yoycol', url: baseUrl }],
    openGraph: {
      type: 'website',
      url: productUrl,
      title: product.name,
      description: product.description,
      siteName: 'yoycol',
      images: [
        {
          url: product.mainImages[0] || product.skus[0]?.skuImage || '/og-image.jpg',
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.description,
      images: [product.mainImages[0] || product.skus[0]?.skuImage || '/og-image.jpg'],
    },
    alternates: {
      canonical: productUrl,
    },
  };
}