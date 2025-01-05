import ArtworkCard from '../components/generic'
import { artworks } from '../data/artworks'
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ul className="fixed center-0 left-0 flex flex-col gap-6 p-4">
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
          <Link href="/blog/posts" className="cmn-line_motion--white">
            Blog Posts
          </Link>
        </li>
        <li>
          <Link href="/books" className="cmn-line_motion--white">
            Books
          </Link>
        </li>
      </ul>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Gallery</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {artworks.map(art => (
              <ArtworkCard key={art.id} artwork={art} />
            ))}
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
