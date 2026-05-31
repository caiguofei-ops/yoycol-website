import Link from 'next/link';
import styles from './home.module.css';

export const metadata = {
  title: 'yoycol | Wholesale Print-on-Demand Caps for Dropshippers',
  description: 'Professional print-on-demand cap supplier. 3D full-print hats, baseball caps, berets, fisherman hats. MOQ 1 piece, worldwide shipping. Perfect for Amazon, Etsy, Temu sellers.',
};

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Premium Print-on-Demand Caps
          </h1>
          <p className={styles.heroSubtitle}>
            Your trusted wholesale supplier for custom printed hats.
            3D full-print technology, MOQ 1 piece, worldwide shipping.
            Perfect for Amazon, Etsy, Temu, and dropshipping businesses.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/products" className={styles.primaryBtn}>
              Browse Catalog
            </Link>
            <a href="https://wa.me/8613348325895" target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>🎨</div>
          <h3>Custom Designs</h3>
          <p>Upload your own artwork or choose from trendy templates. 3D full-print technology.</p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>🚀</div>
          <h3>Fast Production</h3>
          <p>Ready in 1-3 business days. Express worldwide shipping to over 100 countries.</p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>💎</div>
          <h3>Premium Quality</h3>
          <p>Vibrant, durable prints with attention to every detail. Quality guaranteed.</p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>📦</div>
          <h3>No Minimum</h3>
          <p>Order just 1 piece with no minimum quantity required. Perfect for POD business.</p>
        </div>
      </section>

      {/* Categories Section */}
      <section className={styles.categories}>
        <h2>Shop by Category</h2>
        <p className={styles.categorySubtitle}>Explore our diverse cap collection designed for global e-commerce</p>
        <div className={styles.categoryGrid}>
          <Link href="/products/POD-adult-baseball-cap" className={styles.categoryCard}>
            <div className={styles.categoryImage} style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
              <span className={styles.categoryEmoji}>🧢</span>
            </div>
            <h3>Baseball Caps</h3>
            <p>Classic street style designs</p>
          </Link>
          <Link href="/products/POD-fisherman-hat" className={styles.categoryCard}>
            <div className={styles.categoryImage} style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}>
              <span className={styles.categoryEmoji}>🎣</span>
            </div>
            <h3>Fisherman Hats</h3>
            <p>Sun protection style</p>
          </Link>
          <Link href="/products/POD-beret-large-size" className={styles.categoryCard}>
            <div className={styles.categoryImage} style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'}}>
              <span className={styles.categoryEmoji}>🎩</span>
            </div>
            <h3>Berets</h3>
            <p>Elegant European style</p>
          </Link>
          <Link href="/products/POD-acrylic-knit-hat" className={styles.categoryCard}>
            <div className={styles.categoryImage} style={{background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'}}>
              <span className={styles.categoryEmoji}>🧶</span>
            </div>
            <h3>Knit Hats</h3>
            <p>Warm winter collection</p>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.whySection}>
        <h2>Why Partner With Us?</h2>
        <div className={styles.whyGrid}>
          <div className={styles.whyCard}>
            <h3>🏭 Direct Factory Pricing</h3>
            <p>Competitive wholesale prices direct from manufacturer. No middleman markup.</p>
          </div>
          <div className={styles.whyCard}>
            <h3>🌍 Global Fulfillment</h3>
            <p>Ship anywhere in the world. Reliable logistics partners for fast delivery.</p>
          </div>
          <div className={styles.whyCard}>
            <h3>📸 Free Mockups</h3>
            <p>High-quality product mockups included for your listings on Amazon, Etsy, Shopify.</p>
          </div>
          <div className={styles.whyCard}>
            <h3>💬 24/7 Support</h3>
            <p>Dedicated account managers to help with orders, customization, and shipping.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2>Ready to Start Selling?</h2>
        <p>Join thousands of dropshippers and e-commerce sellers who trust us for quality print-on-demand caps.</p>
        <a href="https://wa.me/8613348325895" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
          💬 Get Started via WhatsApp
        </a>
      </section>
    </div>
  );
}