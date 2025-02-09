// app/blog/post.tsx
import React from 'react';
import Navbar from "@/components/navbar";
import Srfooter from '@/components/footer';
import BookCard from "@/components/books";
import { books } from "@/data/books";
import Background_text from '@/components/background_text';
import { Back } from 'gsap';

const Books = () => {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
    <Background_text background_text="Books" />
    <Navbar />
    <Srfooter />
       <main className="md:w-full flex flex-col gap-8 items-center sm:items-start">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-6xl font-bold mb-6">All  of my published books!</h1>
            {/* Switch from grid to flex */}
            <div className="flex flex-wrap gap-x-6 gap-y-20">
              {books.map((books) => (
                <div
                  key={books.id}
                  className="w-[300px] h-[300px] flex-none"
                >
                  {/* Card with a fixed size */}
                  <BookCard book={books} />
                </div>
              ))}
            </div>
          </div>
        </main>
    </div>
  );
};

export default Books;