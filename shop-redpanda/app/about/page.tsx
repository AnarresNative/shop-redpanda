// app/About/page.tsx
import React from 'react';
import Navbar from "@/components/navbar";
import Background_text from '@/components/background_text';
import Srfooter from '@/components/footer';
import Link from 'next/link';

const Post = () => {
  return (
    <div>
      <Background_text background_text={"About Me"} />
      <div className="max-w-6xl mx-auto p-6 bg-black/10">
        <Navbar />
        <h1 className="text-9xl font-bold mb-6 text-brand-warm-600/100 relative z-2">Redpanda Art</h1>
        <p className="text-brand-beige-700 mb-6">Celine Cresswell • 04-Feb-2025</p>
        <div className="prose space-y-4">
          <p>
            Hi! I&apos;m Céline Cresswell, a UK-based artist specialising in digital art and character illustration. I am the published author of two illustrated titles, &apos;Draw Manga Faces, Heads and Hairstyles: The Workbook&apos; and &apos;Beginner&apos;s Guide to Drawing Manga Bodies and Poses&apos;. I&apos;ve run a successful Etsy shop for digital commissions since 2021, and as of 2024 started selling physical prints and stickers. I&apos;ve sold at conventions such as MCM, hosted multiple manga drawing tutorials at Waterstones Piccadilly and similarly for Warner Bros&apos; movie campaign to promote LOTR: The War of the Rohirrim.
          </p>
          <p>
            I love to draw, particularly cute, fantasy and game characters.
          </p>
          <p>
            My original characters Mae and Cali are two fairies, whose story and world I am building over time, through my own experiences and interests. They serve as a great tool to draw nature from a fantasy perspective. Mae is an ocean fairy whilst Cali is a moon fairy.
          </p>
          <Link className="text-brand-warm-800" href="https://www.instagram.com/redpanda_art/">Follow my socials to keep up to date! </Link>
        </div>
      </div>
      <Srfooter />
    </div>
  );
};

export default Post;
