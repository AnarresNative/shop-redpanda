import Link from "next/link";
import ArtworkCard from "../components/artwork";
import { artworks } from "../data/artworks";
import Srfooter from "../components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Main Content Wrapper (fills remaining space) */}
      <div className="flex flex-col md:flex-row flex-grow p-8 pb-20 gap-16 sm:p-20">
        {/* Sidebar */}
        <ul className="md:w-1/4 flex flex-col fgap-6 p-4 bg-center justify-center">
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

        {/* Main Section */}
        {/* Note: changed md:w-100 -> md:w-full for valid Tailwind */}
        <main className="md:w-full flex flex-col gap-8 items-center sm:items-start">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Gallery</h1>
            {/* Switch from grid to flex */}
            <div className="flex flex-wrap gap-x-6 gap-y-20">
              {artworks.map((art) => (
                <div
                  key={art.id}
                  className="w-[300px] h-[300px] flex-none"
                >
                  {/* Card with a fixed size */}
                  <ArtworkCard artwork={art} />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Footer outside the flex row */}
     <Srfooter />
    </div>
  );
}
