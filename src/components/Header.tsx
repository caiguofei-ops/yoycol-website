'use client';
import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link href="/">
          <img src="/images/POD-adult-baseball-cap/main_01.jpg" alt="logo" className={styles.logo} />
        </Link>
        <h1 className={styles.title}>yoycol</h1>
      </div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
