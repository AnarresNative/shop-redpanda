"use client"; 
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Icon */}
      <div className="fixed top-4 right-4 z-50 cursor-pointer" onClick={toggleNavbar}>
        <div className="w-8 h-1 bg-pink-300 mb-1"></div>
        <div className="w-8 h-1 bg-pink-400 mb-1"></div>
        <div className="w-8 h-1 bg-pink-500"></div>
      </div>

      {/* Top Navbar */}
      <div
        className={`fixed top-0 left-0 w-full bg-brand-beige-500 text-white transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300`}
      >
        <nav className="flex flex-col sm:flex-row items-center justify-center p-4 gap-10 text-[calc(0.1vw+0.1em)]">
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

