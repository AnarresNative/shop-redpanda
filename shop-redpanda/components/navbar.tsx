import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/"><Image src="/images/shop_redpanda.png" alt="Shop Redpanda" width="50" height="50"/></Link>
      </div>
      <ul className={styles.navLinks}>
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
