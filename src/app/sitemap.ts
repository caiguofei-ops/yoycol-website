import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yoycolpod.com';

  const products = [
    'JIT-custom-beret-Christmas',
    'POD-acrylic-knit-hat',
    'POD-adult-baseball-cap',
    'POD-beret-large-size',
    'POD-eagle-knit-hat',
    'POD-fisherman-hat',
    'POD-flat-brim-hiphop-cap',
    'POD-kids-cartoon-fisherman-hat',
    'POD-kids-mesh-cap',
    'POD-large-fisherman-hat',
    'POD-Leifeng-winter-hat',
    'POD-summer-fisherman-hat',
    'POD-visor-TEMU',
    'POD-washed-denim-baseball-cap',
  ];

  const staticPages = ['', '/products', '/about', '/contact'];

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1.0 : 0.8,
  }));

  const productUrls = products.map((slug) => ({
    url: `${baseUrl}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticUrls, ...productUrls];
}
