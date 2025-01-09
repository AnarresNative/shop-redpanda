"use client";
import { useState } from "react";
import ArtworkCard from "./artwork";

export default function ArtworkGallery({ artworks }) {
  const [featured, setFeatured] = useState(artworks?.[0] || null);

  return (
    <div className="relative min-h-screen">
      {/* 
        LEFT COLUMN (scrollable):
        - We use `pr-[50%]` to reserve space for the fixed right column on larger screens.
        - `overflow-auto h-screen` ensures this area is scrollable.
      */}

        <div className="flex w-2/3 flex-wrap gap-x-6 gap-y-6 p-4">
          {artworks.map((art) => (
            <div
              key={art.id}
              // Remove h-[300px] if you want the card height to be driven
              // by its content. Keeping it can force extra space.
              className="w-[300px] flex-none"
              onMouseEnter={() => setFeatured(art)}
            >
              <ArtworkCard artwork={art} />
            </div>
          ))}
        </div>

      {/* 
        RIGHT COLUMN (fixed):
        - Only shows if there's a "featured" artwork.
        - `fixed top-0 right-0 w-1/2 h-screen` ensures it stays in place.
      */}
      {featured && (
        <div className="hidden md:flex fixed top-0 right-0 w-1/3 h-screen flex-col items-center justify-center p-4 bg-brand-beige-800">
          <img
            src={featured.imageUrl}
            alt={featured.title}
            className="object-cover w-auto"
          />
          <p className="mt-2 text-center text-lg font-semibold">
            {featured.title}
          </p>
        </div>
      )}
    </div>
  );
}
