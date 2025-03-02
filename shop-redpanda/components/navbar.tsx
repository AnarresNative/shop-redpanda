"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/images/shop_redpanda.png" alt="Shop Redpanda" width="50" height="50" />
        </Link>
      </div>

      {/* Hamburger icon */}
      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        <li>
          <Link className={styles.navLink} href="/about">
            About Me
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} href="/gallery">
            Gallery
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} href="/blog">
            Blog Posts
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} href="/books">
            Books
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
