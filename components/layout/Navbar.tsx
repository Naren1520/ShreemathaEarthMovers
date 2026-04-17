"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Machinery", href: "/machinery" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 border-b-2 border-yellow backdrop-blur-sm transition-all duration-300">
        <div className="container-custom flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-3 font-display cursor-pointer">
            <div className="w-11 h-11 bg-yellow flex items-center justify-center">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-black">
                <path d="M2 22 L8 12 L14 18 L20 8 L30 22 Z" />
                <rect x="2" y="23" width="28" height="4" rx="1" />
              </svg>
            </div>
            <div className="flex flex-col leading-[1.1]">
              <span className="text-[20px] font-extrabold text-white tracking-[0.5px] uppercase">
                Shreematha
              </span>
              <span className="text-[10px] tracking-[3px] text-yellow uppercase font-semibold">
                Earthmovers
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-4 lg:gap-8 h-full">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-display text-[15px] font-bold tracking-[1.5px] uppercase transition-colors px-1 h-full flex items-center ${
                    isActive
                      ? "text-yellow"
                      : "text-[#d4d4d4] hover:text-yellow"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 font-display text-[15px] font-bold tracking-[1.5px] uppercase text-yellow px-5 py-2.5 border-[2px] border-yellow hover:bg-yellow hover:text-black transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:block">Call Now</span>
            </a>
            <button className="md:hidden p-1 text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-[72px] left-0 right-0 bg-[#141414] border-b-2 border-yellow z-40 py-5 md:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-display text-[15px] font-bold tracking-[2px] uppercase px-6 py-4 border-l-4 transition-colors ${
                    isActive
                      ? "text-black bg-yellow border-yellow"
                      : "text-white border-transparent hover:text-yellow hover:border-yellow bg-transparent"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <a href="tel:+919876543210" className="font-display text-[15px] font-bold tracking-[2px] uppercase px-6 py-4 text-white hover:text-yellow flex items-center gap-2 mt-2">
              <Phone className="w-4 h-4 text-yellow" /> Call: +91 98765 43210
            </a>
          </div>
        </div>
      )}
    </>
  );
}