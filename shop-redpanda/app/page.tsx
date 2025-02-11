import Link from "next/link";
import Srfooter from "../components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ShopRedpanda | Manga & Anime Art",
  description:
    "Discover the vibrant world of ShopRedpanda—a UK-based digital art studio specializing in manga, anime, and character illustration.",
  keywords: [
    "Redpanda Art",
    "ShopRedpanda",
    "Manga",
    "Anime",
    "Digital Art",
    "Character Illustration",
    "UK Artist"
  ],
  openGraph: {
    title: "ShopRedpanda | Manga & Anime Art",
    description:
      "Explore the portfolio and creative journey of ShopRedpanda, a UK-based artist specializing in digital art.",
    url: "https://shopredpanda.co.uk",
    siteName: "ShopRedpanda",
    images: [
      {
        url: "https://shopredpanda.co.uk/images/Waterfall.jpg",
        width: 1200,
        height: 630,
        alt: "ShopRedpanda - Manga & Anime Art"
      }
    ],
    locale: "en_UK",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "ShopRedpanda | Manga & Anime Art",
    description:
      "Discover ShopRedpanda: a UK-based digital art studio specializing in manga, anime, and character illustration.",
    site: "@YourTwitterHandle",
    images: "https://shopredpanda.co.uk/images/Waterfall.jpg"
  }
};

const jsonLd = {
'@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Redpanda Art',
    url: 'https://shopredpanda.com',
    sameAs: [
      'https://www.instagram.com/redpandaart',
      'https://twitter.com/redpandaart'
    ],
    jobTitle: 'Digital Artist',
    worksFor: {
      '@type': 'Organization',
      name: 'Shopredpanda'
    },
    description: 'A UK-based artist specializing in manga, anime, digital art, and character illustration.'
  }

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <script       type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Scrolling background container */}
      <div
        className="
          absolute inset-0
          bg-[url('/images/Website_Gallery_Scroll_Images.jpg')]  /* Replace with your image path */
          bg-repeat-x                 /* Repeat horizontally to enable the loop */
          bg-[length:auto_100%]      /* Adjust height if needed, e.g., auto 100% */
          animate-scrolling          /* Use the custom animation we defined */
          z-1
          "
      >
      </div>
    <div className="z-2 flex flex-col min-h-screen font-[family-name:var(--font-quiche-sans)]">
      {/* Main Content Wrapper (fills remaining space) */}
      <div className="z-3 flex md:h-2/3 flex-col md:flex-row flex-grow p-8 pb-20 gap-16 sm:p-20">
        {/* Sidebar */}
        <ul className="z-50 w-[calc(18vw+6em+10rem)] flex flex-col fgap-6 p-4 self-center rounded-3xl bg-brand-warm-300/90">
          <li>
            <Link href="/about" className="cmn-line_motion--white">
              About Me
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="cmn-line_motion--white">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/blog" className="cmn-line_motion--white">
              Blog Posts
            </Link>
          </li>
          <li>
            <Link href="/books" className="cmn-line_motion--white">
              Books
            </Link>
          </li>
        </ul>
        {/* Note: changed md:w-100 -> md:w-full for valid Tailwind */}
      </div>
      <p>Shopredpanda, is a manga and anime artist in the uk, specialising in character illustration and is an etsy vendor</p>
      {/* Footer outside the flex row */}
     <Srfooter />
    </div>
    </main>
  );
}
