import Link from "next/link";
import Srfooter from "../components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Scrolling background container */}
      <div
        className="
          absolute inset-0
          bg-[url('/images/Website_Gallery_Scroll_Images.jpg')]  /* Replace with your image path */
          bg-repeat-x                 /* Repeat horizontally to enable the loop */
          bg-[length:auto_100%]      /* Adjust height if needed, e.g., auto 100% */
          animate-scrolling          /* Use the custom animation we defined */
          z-1
          "
      >
        {/* You can put content here or leave it empty if it's purely decorative */}
      </div>
    <div className="z-2 flex flex-col min-h-screen font-[family-name:var(--font-quiche-sans)]">
      {/* Main Content Wrapper (fills remaining space) */}
      <div className="z-3 flex md:h-2/3 flex-col md:flex-row flex-grow p-8 pb-20 gap-16 sm:p-20">
        {/* Sidebar */}
        <ul className="z-50 w-[calc(18vw+6em+10rem)] flex flex-col fgap-6 p-4 self-center rounded-3xl bg-brand-warm-300/90">
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
            <Link href="/blog" className="cmn-line_motion--white">
              Blog Posts
            </Link>
          </li>
          <li>
            <Link href="/books" className="cmn-line_motion--white">
              Books
            </Link>
          </li>
        </ul>
        {/* Note: changed md:w-100 -> md:w-full for valid Tailwind */}
      </div>

      {/* Footer outside the flex row */}
     <Srfooter />
    </div>
    </main>
  );
}
