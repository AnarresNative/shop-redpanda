import ArtworkGallery from "@/components/artworkgallery";
import Background_text from "@/components/background_text";
import Navbar from "@/components/navbar";
import { artworks } from "@/data/artworks";

export default function Home() {
  return (
    <main className="p-4">
      <Background_text background_text={"Gallery"}/>
      <h1 className="text-9xl font-bold mb-6 text-brand-orange-700">Gallery</h1>
      <ArtworkGallery artworks={artworks} />
      <Navbar />
    </main>
  );
}
