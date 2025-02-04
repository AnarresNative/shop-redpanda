// app/About/page.tsx
import React from 'react';
import Navbar from "@/components/navbar";
import Background_text from '@/components/background_text';

const Post = () => {
  return (
    <div>
      <Background_text background_text={"About Me"}/>
      <div className="max-w-3xl mx-auto p-6 bg-black/10">
      <Navbar />
        <h1 className="text-4xl font-bold mb-4 text-brand-lightPink-400">All About me!</h1>
        <p className="text-brand-beige-300 mb-6">Author Name • Date</p>
        <div className="prose">
          <p>
            All About Me!
          </p>
            <p>
            Hi! I&apos;m Céline Cresswell, a UK-based artist specialising in digital art and character illustration. I am the published author of two illustrated titles, &apos;Draw Manga Faces, Heads and Hairstyles: The Workbook&apos; and &apos;Beginner&apos;s Guide to Drawing Manga Bodies and Poses&apos;. I&apos;ve run a successful Etsy shop for digital commissions since 2021, and as of 2024 started selling physical prints and stickers. I&apos;ve sold at conventions such as MCM, hosted multiple manga drawing tutorials at Waterstones Piccadilly and similarly for Warner Bros&apos; movie campaign to promote LOTR: The War of the Rohirrim.

      I love to draw, particularly cute, fantasy and game characters.

      My original characters Mae and Cali are two fairies, who&apos;s story and world I am building overtime, through my own experiences and interests. They serve as a great tool to draw nature from a fantasy perspective. Mae is an ocean fairy whilst Cali is a moon fairy.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Post;