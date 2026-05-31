export interface SkuItem {
  label: string;
  skuImage: string;
}

export interface Product {
  name: string;
  folder: string;
  description: string;
  mainImages: string[];
  detailImages: string[];
  video?: string;
  features: string[];
  skus: SkuItem[];
}