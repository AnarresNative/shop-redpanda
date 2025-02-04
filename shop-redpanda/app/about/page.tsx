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
            Add more paragraphs, headings, images, or any other content as needed. Tailwind&apos;s `prose` class is great for
            text-heavy content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;