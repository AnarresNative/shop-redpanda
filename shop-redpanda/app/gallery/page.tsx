import ArtworkGallery from "@/components/artworkgallery";
import Navbar from "@/components/navbar";
import { artworks } from "@/data/artworks";

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-6">Gallery</h1>
      <ArtworkGallery artworks={artworks} />
      <Navbar />
    </main>
  );
}
