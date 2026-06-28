import Link from 'next/link';
import Icons from '../components/Icons';
import ProductListSchema from '../components/ProductListSchema';
import styles from './home.module.css';

export const metadata = {
  title: 'yoycol | Wholesale Print-on-Demand Caps for Dropshippers',
  description: 'Professional print-on-demand cap supplier. 3D full-print hats, baseball caps, berets, fisherman hats. MOQ 1 piece, worldwide shipping. Perfect for Amazon, Etsy, Temu sellers.',
};

export default function Home() {
  return (
    <>
      <ProductListSchema />
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
              <Link href="/products" className="btn btn-primary">
                Browse Catalog
                <Icons.ArrowRight />
              </Link>
              <a href="https://wa.me/8613348325895" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Icons.Design />
            </div>
            <h3>Custom Designs</h3>
            <p>Upload your own artwork. 3D full-print technology for vibrant, durable prints.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Icons.Production />
            </div>
            <h3>Fast Production</h3>
            <p>Ready in 1-3 business days. Express worldwide shipping to over 100 countries.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Icons.Quality />
            </div>
            <h3>Premium Quality</h3>
            <p>Vibrant, durable prints with attention to every detail. Quality guaranteed.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Icons.NoMinimum />
            </div>
            <h3>No Minimum Order</h3>
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
                <div className={styles.categoryIcon}>
                  <Icons.BaseballCap />
                </div>
              </div>
              <div className={styles.categoryContent}>
                <h3>Baseball Caps</h3>
                <p>Classic street style designs</p>
              </div>
              <div className={styles.categoryArrow}>
                <Icons.ArrowRight />
              </div>
            </Link>
            <Link href="/products/POD-fisherman-hat" className={styles.categoryCard}>
              <div className={styles.categoryImage} style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}>
                <div className={styles.categoryIcon}>
                  <Icons.FishermanHat />
                </div>
              </div>
              <div className={styles.categoryContent}>
                <h3>Fisherman Hats</h3>
                <p>Sun protection style</p>
              </div>
              <div className={styles.categoryArrow}>
                <Icons.ArrowRight />
              </div>
            </Link>
            <Link href="/products/POD-beret-large-size" className={styles.categoryCard}>
              <div className={styles.categoryImage} style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'}}>
                <div className={styles.categoryIcon}>
                  <Icons.Beret />
                </div>
              </div>
              <div className={styles.categoryContent}>
                <h3>Berets</h3>
                <p>Elegant European style</p>
              </div>
              <div className={styles.categoryArrow}>
                <Icons.ArrowRight />
              </div>
            </Link>
            <Link href="/products/POD-acrylic-knit-hat" className={styles.categoryCard}>
              <div className={styles.categoryImage} style={{background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'}}>
                <div className={styles.categoryIcon}>
                  <Icons.KnitHat />
                </div>
              </div>
              <div className={styles.categoryContent}>
                <h3>Knit Hats</h3>
                <p>Warm winter collection</p>
              </div>
              <div className={styles.categoryArrow}>
                <Icons.ArrowRight />
              </div>
            </Link>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={styles.whySection}>
          <h2>Why Partner With Us?</h2>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>
                <Icons.Factory />
              </div>
              <h3>Direct Factory Pricing</h3>
              <p>Competitive wholesale prices direct from manufacturer. No middleman markup.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>
                <Icons.GlobalShipping />
              </div>
              <h3>Global Fulfillment</h3>
              <p>Ship anywhere in the world. Reliable logistics partners for fast delivery.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>
                <Icons.Mockup />
              </div>
              <h3>Free Mockups</h3>
              <p>High-quality product mockups included for your listings on Amazon, Etsy, Shopify.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>
                <Icons.Support />
              </div>
              <h3>24/7 Support</h3>
              <p>Dedicated account managers to help with orders, customization, and shipping.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <h2>Ready to Start Selling?</h2>
          <p>Join thousands of dropshippers and e-commerce sellers who trust us for quality print-on-demand caps.</p>
          <a href="https://wa.me/8613348325895" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
            <Icons.WhatsApp />
            Get Started via WhatsApp
          </a>
        </section>
      </div>
    </>
  );
}