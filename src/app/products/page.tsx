import type { Metadata } from 'next';
import ProductList from './ProductList';

export const metadata: Metadata = {
  title: 'Print-on-Demand Cap Products Catalog | yoycol',
  description: 'Browse our wholesale print-on-demand cap collection. Baseball caps, berets, fisherman hats, knit caps, and more. MOQ 1 piece, worldwide shipping. Perfect for Amazon, Etsy, Temu sellers.',
  keywords: [
    'print on demand caps catalog',
    'POD hat products',
    'wholesale caps collection',
    'custom caps supplier',
    'baseball caps wholesale',
    'berets wholesale',
    'fisherman hats bulk',
    'knit hats dropshipping',
  ],
  openGraph: {
    title: 'yoycol | Print-on-Demand Cap Products',
    description: 'Wholesale print-on-demand caps for global sellers. MOQ 1 piece, worldwide shipping.',
    type: 'website',
  },
};

export default function ProductsPage() {
  return <ProductList />;
}