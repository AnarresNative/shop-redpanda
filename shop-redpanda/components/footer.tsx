"use client"; 
import Image from "next/image";
export default function Srfooter() {
    return (
    <footer className="w-full flex fixed bottom-0 gap-6 flex-wrap items-center justify-center p-4 bg-brand-warm-300">
        <p className="text-[calc(0.2vw+0.75em)]">&copy; 2025 Shop-Redpanda</p>
        <a
        className="text-brand-pink-300 hover:underline text-[calc(0.2vw+0.75em)]"
                href="https://www.etsy.com/uk/shop/ShopRedPanda"
                target="_blank" // Open link in a new tab 
                rel="noopener noreferrer" // Securitybest practices
              >
              <Image src="/images/Etsy.png" alt="Etsy Logo" className="w-6 h-6 transition-opacity duration-100 hover:opacity-60" width={500} height={500}/>
            </a>
            shopredpandaillustrations@gmail.com
    </footer>
    );
  }