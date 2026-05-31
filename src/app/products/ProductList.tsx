'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import styles from './products.module.css';

const products = [
  {
    name: 'JIT Custom Beret Christmas',
    folder: 'JIT-custom-beret-Christmas',
    mainImage: '/images/JIT-custom-beret-Christmas/main_01.jpg',
    description: '3D full-print digital transfer beret, Christmas theme, POD customization supported.',
    category: 'Berets',
  },
  {
    name: 'POD Acrylic Knit Hat',
    folder: 'POD-acrylic-knit-hat',
    mainImage: '/images/POD-acrylic-knit-hat/main_01.jpg',
    description: 'Acrylic knit hat with 3D full print, popular for cross-border e-commerce.',
    category: 'Knit Hats',
  },
  {
    name: 'POD Adult Baseball Cap',
    folder: 'POD-adult-baseball-cap',
    mainImage: '/images/POD-adult-baseball-cap/main_01.jpg',
    description: 'Adult baseball cap, versatile full-print, customizable.',
    category: 'Baseball Caps',
  },
  {
    name: 'POD Beret Large Size',
    folder: 'POD-beret-large-size',
    mainImage: '/images/POD-beret-large-size/main_01.jpg',
    description: 'Large size beret with 3D digital print, suitable for cross-border markets.',
    category: 'Berets',
  },
  {
    name: 'POD Eagle Knit Hat',
    folder: 'POD-eagle-knit-hat',
    mainImage: '/images/POD-eagle-knit-hat/main_01.jpg',
    description: 'Eagle pattern knit hat, 3D full print, trendy and warm.',
    category: 'Knit Hats',
  },
  {
    name: 'POD Fisherman Hat',
    folder: 'POD-fisherman-hat',
    mainImage: '/images/POD-fisherman-hat/main_01.jpg',
    description: 'Fisherman hat with wide brim, 3D full print, stylish and sun-protective.',
    category: 'Fisherman Hats',
  },
  {
    name: 'POD Flat Brim Hiphop Cap',
    folder: 'POD-flat-brim-hiphop-cap',
    mainImage: '/images/POD-flat-brim-hiphop-cap/main_01.jpg',
    description: 'Flat brim hiphop cap, full print, fashionable for street style.',
    category: 'Baseball Caps',
  },
  {
    name: 'POD Kids Cartoon Fisherman Hat',
    folder: 'POD-kids-cartoon-fisherman-hat',
    mainImage: '/images/POD-kids-cartoon-fisherman-hat/main_01.jpg',
    description: 'Cartoon fisherman hat for kids, 3D print, cute and practical.',
    category: 'Kids',
  },
  {
    name: 'POD Kids Mesh Cap',
    folder: 'POD-kids-mesh-cap',
    mainImage: '/images/POD-kids-mesh-cap/main_01.jpg',
    description: 'Kids mesh cap, 3D print, breathable and comfortable.',
    category: 'Kids',
  },
  {
    name: 'POD Large Fisherman Hat',
    folder: 'POD-large-fisherman-hat',
    mainImage: '/images/POD-large-fisherman-hat/main_01.jpg',
    description: 'Large fisherman hat, single layer, 3D print, sun protection.',
    category: 'Fisherman Hats',
  },
  {
    name: 'POD Leifeng Winter Hat',
    folder: 'POD-Leifeng-winter-hat',
    mainImage: '/images/POD-Leifeng-winter-hat/main_01.jpg',
    description: 'Leifeng winter hat, thick and warm, 3D print, windproof.',
    category: 'Winter Hats',
  },
  {
    name: 'POD Summer Fisherman Hat',
    folder: 'POD-summer-fisherman-hat',
    mainImage: '/images/POD-summer-fisherman-hat/main_01.jpg',
    description: 'Summer fisherman hat, 3D print, lightweight and cool.',
    category: 'Fisherman Hats',
  },
  {
    name: 'POD Visor TEMU',
    folder: 'POD-visor-TEMU',
    mainImage: '/images/POD-visor-TEMU/main_01.jpg',
    description: 'Visor hat for TEMU, 3D print, sun protection.',
    category: 'Visors',
  },
  {
    name: 'POD Washed Denim Baseball Cap',
    folder: 'POD-washed-denim-baseball-cap',
    mainImage: '/images/POD-washed-denim-baseball-cap/main_01.jpg',
    description: 'Washed denim baseball cap, customizable, various colors.',
    category: 'Baseball Caps',
  },
];

const categories = ['All', 'Baseball Caps', 'Berets', 'Fisherman Hats', 'Knit Hats', 'Winter Hats', 'Kids', 'Visors'];

export default function ProductList() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    let result = products;

    if (search.trim()) {
      const query = search.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );
    }

    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    result = [...result].sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [search, selectedCategory]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Cap Products Catalog</h1>
        <p>Wholesale print-on-demand caps for global sellers • MOQ: 1 piece</p>
      </div>

      <div className={styles.filters}>
        <div className={styles.searchBox}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.searchInput}
            aria-label="Search products"
          />
        </div>

        <div className={styles.categoryTabs} role="tablist" aria-label="Product categories">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={selectedCategory === cat}
              className={`${styles.categoryTab} ${selectedCategory === cat ? styles.activeTab : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <>
          <p className={styles.resultCount}>{filteredProducts.length} products found</p>
          <div className={styles.grid}>
            {filteredProducts.map((product) => (
              <article key={product.folder} className={styles.card}>
                <Link href={`/products/${product.folder}`}>
                  <div className={styles.imageWrapper}>
                    <img src={product.mainImage} alt={product.name} loading="lazy" />
                    <span className={styles.categoryBadge}>{product.category}</span>
                  </div>
                  <div className={styles.cardContent}>
                    <h2>{product.name}</h2>
                    <p className={styles.description}>{product.description}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </>
      ) : (
        <div className={styles.noResults}>
          <p>No products found matching your criteria.</p>
          <button onClick={() => { setSearch(''); setSelectedCategory('All'); }}>
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}