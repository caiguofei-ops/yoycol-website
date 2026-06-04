import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import OrganizationSchema from '../components/OrganizationSchema';
import WebsiteSchema from '../components/WebsiteSchema';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const BASE_URL = 'https://yoycolpod.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'yoycol | Wholesale Print-on-Demand Caps Supplier',
    template: '%s | yoycol',
  },
  description: 'Professional print-on-demand cap factory. 3D full-print hats, baseball caps, berets, fisherman hats, knit caps. MOQ 1 piece, worldwide shipping. Perfect for Amazon, Etsy, Temu, Shopify sellers.',
  keywords: [
    'print on demand caps',
    'POD hats wholesale',
    'custom hats supplier',
    'dropshipping hats supplier',
    '3D print cap factory',
    'full print cap manufacturer',
    'baseball cap supplier China',
    'beret wholesale manufacturer',
    'fisherman hat factory',
    'knit hat bulk supplier',
    'custom cap printing service',
    'cap dropshipping supplier',
    'Amazon FBA hats',
    'Etsy POD hats',
    'Temu wholesale supplier',
    'Shopify dropshipping caps',
    'custom baseball caps bulk',
    'trendy hats wholesale China',
    'hat manufacturer',
    'POD hat factory',
    'wholesale printed caps',
    'custom embroidered hats',
    'sublimation print hats',
    'digital printing caps',
  ],
  authors: [{ name: 'yoycol', url: BASE_URL }],
  creator: 'yoycol',
  publisher: 'yoycol',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'yoycol',
    title: 'yoycol | Wholesale Print-on-Demand Caps Supplier',
    description: 'Professional print-on-demand cap factory. 3D full-print hats, MOQ 1 piece, worldwide shipping. Perfect for Amazon, Etsy, Temu sellers.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'yoycol - Print-on-Demand Caps Wholesale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'yoycol | Wholesale POD Caps',
    description: 'Professional print-on-demand cap supplier. 3D full-print hats, MOQ 1 piece, worldwide shipping.',
    site: '@yoycolpod',
    creator: '@yoycolpod',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual code
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="facebook-domain-verification" content="9djhv8xoqvo8smfl9v05t8oiamqwe7" />
      </head>
      <body className="min-h-full flex flex-col">
        <OrganizationSchema />
        <WebsiteSchema />
        <Header />
        {children}
        <footer style={{ background: '#1a1a1a', color: '#fff', padding: '40px 24px', marginTop: 'auto' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ margin: '0 0 12px', fontSize: '1.1rem' }}>yoycol</h3>
              <p style={{ margin: 0, color: '#999', fontSize: '0.88rem' }}>Professional print-on-demand cap supplier for global e-commerce.</p>
            </div>
            <div>
              <h4 style={{ margin: '0 0 12px', fontSize: '0.9rem' }}>Contact Us</h4>
              <p style={{ margin: '0 0 4px', color: '#999', fontSize: '0.82rem' }}>WhatsApp: +86 13348325895</p>
              <p style={{ margin: 0, color: '#999', fontSize: '0.82rem' }}>Email: info@yoycolpod.com</p>
            </div>
            <div>
              <h4 style={{ margin: '0 0 12px', fontSize: '0.9rem' }}>Quick Links</h4>
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="/products" style={{ color: '#999', textDecoration: 'none', fontSize: '0.82rem' }}>Products</a>
                <a href="/about" style={{ color: '#999', textDecoration: 'none', fontSize: '0.82rem' }}>About</a>
                <a href="/contact" style={{ color: '#999', textDecoration: 'none', fontSize: '0.82rem' }}>Contact</a>
              </div>
            </div>
          </div>
          <div style={{ maxWidth: '1280px', margin: '24px auto 0', paddingTop: '20px', borderTop: '1px solid #333', textAlign: 'center', color: '#666', fontSize: '0.78rem' }}>
            © {new Date().getFullYear()} yoycol. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}