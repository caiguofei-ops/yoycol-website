'use client';
import { useState, useEffect, useCallback } from 'react';
import styles from './product-detail.module.css';

type SkuItem = {
  label: string;
  skuImage: string;
};

type ProductItem = {
  folder: string;
  name: string;
  mainImages: string[];
  detailImages: string[];
  description: string;
  features: string[];
  skus: SkuItem[];
  video?: string;
};

export default function ProductDetailClient({ product }: { product: ProductItem }) {
  const [selectedSkuIndex, setSelectedSkuIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const selectedSku = product.skus[selectedSkuIndex];
  const selectedImage = selectedSku?.skuImage || product.skus[0]?.skuImage || '';
  const productUrl = typeof window !== 'undefined' ? window.location.href : '';

  // Build slides: main images + video
  const slides = [
    ...product.mainImages,
    ...(product.video ? ['__video__'] : []),
  ];

  const goToPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (zoomOpen) return;
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [zoomOpen, goToPrev, goToNext]);

  const shareOnTwitter = () => {
    const text = `Check out this ${product.name} - Custom Print-on-Demand cap!`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(productUrl)}`, '_blank');
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`, '_blank');
  };

  const shareOnPinterest = () => {
    window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(productUrl)}&description=${encodeURIComponent(product.name)}`, '_blank');
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(productUrl);
    } catch {
      const input = document.createElement('input');
      input.value = productUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.container}>
      {/* Left: Image Gallery */}
      <div className={styles.gallerySection}>
        {/* Main Carousel */}
        <div className={styles.mainImageWrap}>
          <div className={styles.carouselContainer}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`${styles.slide} ${index === currentSlide ? styles.slideActive : ''}`}
              >
                {slide === '__video__' ? (
                  <video
                    src={product.video}
                    controls
                    playsInline
                    autoPlay={!isPaused}
                    loop
                    muted
                    className={styles.mainImg}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={slide}
                    alt={`${product.name} - Image ${index + 1}`}
                    className={styles.mainImg}
                    onClick={() => setZoomOpen(true)}
                  />
                )}
              </div>
            ))}

            {/* Navigation Arrows */}
            {slides.length > 1 && (
              <>
                <button className={`${styles.navBtn} ${styles.navPrev}`} onClick={goToPrev} aria-label="Previous">
                  ‹
                </button>
                <button className={`${styles.navBtn} ${styles.navNext}`} onClick={goToNext} aria-label="Next">
                  ›
                </button>
              </>
            )}
          </div>

          {/* Slide Indicators */}
          {slides.length > 1 && (
            <div className={styles.indicators}>
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`${styles.indicator} ${index === currentSlide ? styles.indicatorActive : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          )}
        </div>

        {/* SKU Selection - Design Showcase */}
        <div className={styles.skuSection}>
          <div className={styles.skuHeader}>
            <span className={styles.skuTitle}>Design Samples</span>
            <span className={styles.skuHint}>({product.skus.length} designs available - Custom designs welcome)</span>
          </div>
          <div className={styles.skuGrid}>
            {product.skus.map((sku, index) => (
              <button
                key={sku.label}
                type="button"
                onClick={() => setSelectedSkuIndex(index)}
                className={`${styles.skuItem} ${selectedSkuIndex === index ? styles.skuSelected : ''}`}
                title={sku.label}
              >
                <img src={sku.skuImage} alt={sku.label} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Product Info */}
      <div className={styles.infoSection}>
        <h1 className={styles.productTitle}>{product.name}</h1>

        <p className={styles.description}>{product.description}</p>

        <div className={styles.tagRow}>
          <span className={styles.tag}>🚚 Fast Shipping</span>
          <span className={styles.tag}>✅ Quality Guaranteed</span>
          <span className={styles.tag}>🎨 Custom Design Welcome</span>
        </div>

        <div className={styles.divider}></div>

        {/* Selected Design Info */}
        <div className={styles.selectedInfo}>
          <span className={styles.selectedLabel}>Selected Design:</span>
          <span>{selectedSku?.label}</span>
        </div>

        {/* Custom Design Note */}
        <div className={styles.customNote}>
          <span className={styles.customIcon}>💡</span>
          <p>You can send us your own design images after placing order. We will print your custom artwork on this cap style.</p>
        </div>

        <div className={styles.divider}></div>

        {/* Product Details Card */}
        <div className={styles.detailCard}>
          <h3>Product Info</h3>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>MOQ</span>
            <span className={styles.detailValue}>1 Piece (No Minimum)</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Production Time</span>
            <span className={styles.detailValue}>1-3 Business Days</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Shipping</span>
            <span className={styles.detailValue}>Worldwide Express</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Available Samples</span>
            <span className={styles.detailValue}>{product.skus.length} Designs</span>
          </div>
        </div>

        {/* Inquiry Button */}
        <a
          href={`https://wa.me/8613348325895?text=${encodeURIComponent(`Hi, I'm interested in: ${product.name}\nDesign: ${selectedSku?.label}\n\nI would like to place an order and send my custom design.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappBtn}
        >
          💬 WhatsApp: +86 13348325895
        </a>

        <a
          href="mailto:info@yoycolpod.com"
          className={styles.emailBtn}
        >
          ✉️ Email: info@yoycolpod.com
        </a>

        {/* Share Section */}
        <div className={styles.shareSection}>
          <span className={styles.shareLabel}>Share:</span>
          <div className={styles.shareButtons}>
            <button type="button" onClick={shareOnTwitter} className={styles.shareBtn} title="Share on Twitter">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </button>
            <button type="button" onClick={shareOnFacebook} className={styles.shareBtn} title="Share on Facebook">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </button>
            <button type="button" onClick={shareOnPinterest} className={styles.shareBtn} title="Share on Pinterest">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.202 7.924-7.202 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
            </button>
            <button type="button" onClick={copyLink} className={styles.shareBtn} title={copied ? 'Copied!' : 'Copy Link'}>
              {copied ? (
                <svg viewBox="0 0 24 24" width="14" height="14" fill="#4caf50"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              ) : (
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M3.9 12c0-1.66 1.34-3 3-3h12c1.66 0 3 1.34 3 3v7c0 1.66-1.34 3-3 3H6.9c-1.66 0-3-1.34-3-3v-7zm4 5.5c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3v-7c0-1.66-1.34-3-3-3H6.9c-1.66 0-3 1.34-3 3v7zm4-6h6v2H7v-2z"/></svg>
              )}
            </button>
          </div>
        </div>

        <div className={styles.serviceRow}>
          <div className={styles.serviceItem}>
            <span className={styles.serviceIcon}>🛡️</span>
            <div>
              <strong>Secure Payment</strong>
              <p>Multiple payment methods</p>
            </div>
          </div>
          <div className={styles.serviceItem}>
            <span className={styles.serviceIcon}>📦</span>
            <div>
              <strong>Fast Delivery</strong>
              <p>Ships in 24-48 hours worldwide</p>
            </div>
          </div>
          <div className={styles.serviceItem}>
            <span className={styles.serviceIcon}>💬</span>
            <div>
              <strong>24/7 Support</strong>
              <p>Contact us anytime</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Product Details */}
      <div className={styles.detailSection}>
        <div className={styles.detailTabs}>
          <button className={`${styles.tab} ${styles.activeTab}`}>Product Details</button>
          <button className={styles.tab}>Specifications</button>
        </div>

        <div className={styles.detailContent}>
          <div className={styles.detailBlock}>
            <h3>Product Description</h3>
            <p>{product.description}</p>
          </div>

          <div className={styles.detailBlock}>
            <h3>Key Features</h3>
            <ul className={styles.featureList}>
              {product.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className={styles.detailBlock}>
            <h3>Product Specifications</h3>
            <div className={styles.specTable}>
              <div className={styles.specRow}>
                <span className={styles.specKey}>Material</span>
                <span className={styles.specVal}>Premium Fabric</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specKey}>Print Type</span>
                <span className={styles.specVal}>3D Full Print / Digital Transfer</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specKey}>Size</span>
                <span className={styles.specVal}>Adjustable / One Size Fits Most</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specKey}>MOQ</span>
                <span className={styles.specVal}>1 Piece (No Minimum Order)</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specKey}>Production Time</span>
                <span className={styles.specVal}>1-3 Business Days</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specKey}>Shipping</span>
                <span className={styles.specVal}>Worldwide Express Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Images Section */}
      {product.detailImages.length > 0 && (
        <div className={styles.detailImagesSection}>
          <h3 className={styles.detailImagesTitle}>Product Gallery</h3>
          <div className={styles.detailImagesGrid}>
            {product.detailImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} detail ${index + 1}`}
                className={styles.detailImage}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      )}

      {/* Zoom Modal */}
      {zoomOpen && (
        <div className={styles.zoomModal} onClick={() => setZoomOpen(false)}>
          <div className={styles.zoomContent} onClick={e => e.stopPropagation()}>
            <button className={styles.zoomClose} onClick={() => setZoomOpen(false)}>×</button>
            <img src={selectedImage} alt={product.name} className={styles.zoomImg} />
          </div>
        </div>
      )}
    </div>
  );
}