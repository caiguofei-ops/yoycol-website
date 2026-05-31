import type { Metadata } from 'next';
import styles from '../about.module.css';

export const metadata: Metadata = {
  title: 'About Us | yoycol - Print-on-Demand Cap Factory',
  description: 'Learn about yoycol, a professional print-on-demand cap factory for global e-commerce sellers. Quality POD hats with worldwide shipping.',
};

export default function About() {
  return (
    <div className={styles.about}>
      <h1>About yoycol</h1>

      <section className={styles.section}>
        <h2>Who We Are</h2>
        <p>
          yoycol is a professional print-on-demand (POD) cap factory based in China, dedicated to serving
          global e-commerce sellers, dropshippers, and resellers worldwide. With years of experience in
          the POD industry, we specialize in manufacturing high-quality, custom-printed caps for platforms
          like Amazon, Etsy, Temu, Shopify, and eBay.
        </p>
      </section>

      <section className={styles.section}>
        <h2>What We Offer</h2>
        <div className={styles.featureGrid}>
          <div className={styles.feature}>
            <h3>🎨 Custom Design Service</h3>
            <p>Upload your own artwork or choose from our extensive design library. Our advanced 3D digital printing technology ensures vibrant, durable prints that stand out.</p>
          </div>
          <div className={styles.feature}>
            <h3>📦 Wide Product Range</h3>
            <p>From baseball caps to berets, fisherman hats to knit caps — we offer 14+ different cap styles with over 200+ design templates to choose from.</p>
          </div>
          <div className={styles.feature}>
            <h3>🚀 Fast Production</h3>
            <p>Our streamlined production process ensures your orders are ready within 1-3 business days, helping you fulfill orders quickly and efficiently.</p>
          </div>
          <div className={styles.feature}>
            <h3>🌍 Global Shipping</h3>
            <p>We ship worldwide with reliable logistics partners. Whether you&apos;re in the US, Europe, or anywhere else, we get your products delivered on time.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Why Choose Us?</h2>
        <ul className={styles.benefitsList}>
          <li>
            <strong>No Minimum Order Quantity</strong> — Order just 1 piece. Perfect for testing new designs or running POD businesses.
          </li>
          <li>
            <strong>Wholesale Pricing</strong> — Direct factory pricing means competitive rates for bulk orders.
          </li>
          <li>
            <strong>Quality Guarantee</strong> — Every product undergoes strict quality control before shipping.
          </li>
          <li>
            <strong>Free Mockups</strong> — We provide high-quality product mockups for your online listings.
          </li>
          <li>
            <strong>Dedicated Support</strong> — Our team is available 24/7 via WhatsApp and email to assist you.
          </li>
          <li>
            <strong>Custom Packaging</strong> — Options for branded packaging to enhance your customer experience.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Our Process</h2>
        <div className={styles.processSteps}>
          <div className={styles.step}>
            <span className={styles.stepNumber}>1</span>
            <h3>Select Design</h3>
            <p>Choose from our SKU templates or upload your custom artwork.</p>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNumber}>2</span>
            <h3>Place Order</h3>
            <p>Send your order via WhatsApp or email with your design details.</p>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNumber}>3</span>
            <h3>Production</h3>
            <p>We print and produce your caps within 1-3 business days.</p>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNumber}>4</span>
            <h3>Shipping</h3>
            <p>Your order is shipped worldwide with tracking provided.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Contact Us</h2>
        <p>
          Ready to start your POD business or have questions? Get in touch with us:
        </p>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>💬</span>
            <div>
              <strong>WhatsApp</strong>
              <a href="https://wa.me/8613348325895" target="_blank" rel="noopener noreferrer">+86 13348325895</a>
            </div>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>✉️</span>
            <div>
              <strong>Email</strong>
              <a href="mailto:info@yoycolpod.com">info@yoycolpod.com</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}