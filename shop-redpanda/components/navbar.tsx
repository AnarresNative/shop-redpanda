"use client"; 
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Icon */}
      <div className="fixed top-4 right-4 z-100 cursor-pointer" onClick={toggleNavbar}>
        <div className="w-8 h-1 bg-pink-100 mb-1"></div>
        <div className="w-8 h-1 bg-pink-200 mb-1"></div>
        <div className="w-8 h-1 bg-pink-300"></div>
      </div>

      {/* Top Navbar */}
      <div
        className={`fixed top-0 left-0 w-full bg-brand-orange-600 text-white transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300`}
      >
         <Link href="" className="cmn-line_motion--white">
         <Image src="/images/shop_redpanda.png" alt="Etsy Logo" className="w-6 h-6 transition-opacity duration-100 hover:opacity-60" width={500} height={500}/>
         </Link>
        <nav className="flex flex-col sm:flex-row items-center justify-center p-4 gap-10 text-[calc(0.2vw+0.5em)]">
          <Link href="/about" className="cmn-line_motion--white">
            About Me
          </Link>
          <Link href="/gallery" className="cmn-line_motion--white">
            Gallery
          </Link>
          <Link href="/blog/posts" className="cmn-line_motion--white">
            Blog Posts
          </Link>
          <Link href="/books" className="cmn-line_motion--white">
            Books
          </Link>
        </nav>
      </div>
    </>
  );
}

