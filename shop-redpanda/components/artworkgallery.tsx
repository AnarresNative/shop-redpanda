"use client";
import { useState } from "react";
import ArtworkCard from "./artwork";
import Image from "next/image";

// Define what a single artwork looks like
interface Artwork {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  storelink: string;
}

// Define the props for the gallery component
interface ArtworkGalleryProps {
  artworks: Artwork[];
}

// Now use this interface in the component’s definition
export default function ArtworkGallery({ artworks }: ArtworkGalleryProps) {
  const [featured, setFeatured] = useState(artworks?.[0] || null);

  return (
    <div className="relative min-h-screen">
      {/* LEFT COLUMN (scrollable) */}
      <div className="flex lg:w-3/5 md:max-w-full flex-wrap gap-x-6 gap-y-6 p-4">
        {artworks.map((art) => (
          <div
            key={art.id}
            className="w-[300px] flex-none"
            onMouseEnter={() => setFeatured(art)}
          >
            <ArtworkCard artwork={art} />
          </div>
        ))}
      </div>

      {/* RIGHT COLUMN (fixed) */}
      {featured && (
        <div className="hidden lg:flex fixed top-0 right-0 w-2/5 h-screen flex-col items-center justify-center p-4 bg-brand-warm-200/50">
          <div>
            <Image
              src={featured.imageUrl}
              alt={featured.title}
              className="object-cover w-auto"
              width={500}
              height={500}
            />
            <p className="mt-2 text-center font-sans text-4xl text-brand-warm-600">
              {featured.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

