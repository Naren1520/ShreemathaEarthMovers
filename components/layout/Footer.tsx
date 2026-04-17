import Link from "next/link";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#141414] border-t-[3px] border-yellow pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-5 font-display cursor-pointer">
              <div className="w-11 h-11 bg-yellow flex items-center justify-center">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 fill-black">
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
            </div>
            <p className="text-[14px] text-gray leading-[1.7] max-w-[280px]">
              Trusted earthmoving and construction support services in Mangalore since 2014. Strong foundations, reliable results.
            </p>
            <div className="flex gap-2.5 mt-5">
              <a href="#" className="w-[38px] h-[38px] bg-[#2a2a2a] border border-[#2a2a2a] flex items-center justify-center hover:bg-yellow hover:border-yellow transition-colors group text-gray hover:text-black">
                <svg viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path></svg>
              </a>
              <a href="https://wa.me/919876543210" className="w-[38px] h-[38px] bg-[#2a2a2a] border border-[#2a2a2a] flex items-center justify-center hover:bg-yellow hover:border-yellow transition-colors group">
                <Phone className="w-4 h-4 text-gray group-hover:text-black" />
              </a>
              <a href="mailto:info@shreemathaearth.com" className="w-[38px] h-[38px] bg-[#2a2a2a] border border-[#2a2a2a] flex items-center justify-center hover:bg-yellow hover:border-yellow transition-colors group">
                <Mail className="w-4 h-4 text-gray group-hover:text-black" />
              </a>
            </div>
          </div>

          <div>
            <div className="font-display text-[14px] font-bold tracking-[2px] uppercase text-yellow mb-5">Quick Links</div>
            <div className="flex flex-col gap-2.5">
              <Link href="/" className="text-[14px] text-gray hover:text-yellow hover:pl-2 transition-all">Home</Link>
              <Link href="/services" className="text-[14px] text-gray hover:text-yellow hover:pl-2 transition-all">Services</Link>
              <Link href="/machinery" className="text-[14px] text-gray hover:text-yellow hover:pl-2 transition-all">Machinery</Link>
              <Link href="/projects" className="text-[14px] text-gray hover:text-yellow hover:pl-2 transition-all">Projects</Link>
              <Link href="/about" className="text-[14px] text-gray hover:text-yellow hover:pl-2 transition-all">About Us</Link>
              <Link href="/contact" className="text-[14px] text-gray hover:text-yellow hover:pl-2 transition-all">Contact</Link>
            </div>
          </div>

          <div>
            <div className="font-display text-[14px] font-bold tracking-[2px] uppercase text-yellow mb-5">Services</div>
            <div className="flex flex-col gap-2.5">
              <Link href="/services" className="text-[14px] text-gray hover:text-yellow hover:pl-2 transition-all">Excavation</Link>
              <Link href="/services" className="text-[14px] text-gray hover:text-yellow hover:pl-2 transition-all">Land Leveling</Link>
              <Link href="/services" className="text-[14px] text-gray hover:text-yellow hover:pl-2 transition-all">Demolition</Link>
              <Link href="/services" className="text-[14px] text-gray hover:text-yellow hover:pl-2 transition-all">Site Clearing</Link>
              <Link href="/services" className="text-[14px] text-gray hover:text-yellow hover:pl-2 transition-all">Road Work</Link>
              <Link href="/machinery" className="text-[14px] text-gray hover:text-yellow hover:pl-2 transition-all">Machine Hire</Link>
            </div>
          </div>

          <div>
            <div className="font-display text-[14px] font-bold tracking-[2px] uppercase text-yellow mb-5">Contact</div>
            <div className="flex flex-col gap-[10px]">
              <div className="text-[14px] text-[#d4d4d4] mb-[10px] leading-[1.6]">
                No. 45, 3rd Cross,<br/>Peenya Industrial Area,<br/>Mangalore – 560058
              </div>
              <a href="tel:+919876543210" className="flex items-center gap-2 text-[14px] text-gray hover:text-yellow">
                <Phone className="w-4 h-4" /> +91 98765 43210
              </a>
              <a href="https://wa.me/919876543210" className="flex items-center gap-2 text-[14px] text-gray hover:text-yellow text-[#d4d4d4]">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
              <a href="mailto:info@shreemathaearth.com" className="flex items-center gap-2 text-[14px] text-gray hover:text-yellow">
                <Mail className="w-4 h-4" /> info@shreemathaearth.com
              </a>
            </div>
          </div>

        </div>
        
        <div className="mt-12 pt-6 border-t border-[#2a2a2a] flex justify-between items-center flex-wrap gap-4">
          <div className="text-[13px] text-gray">
            © 2026 Shreematha Earthmovers. All rights reserved. | GST: 29XXXXX0000X1ZX
          </div>
          <div className="flex gap-6">
            <span className="text-[13px] text-gray cursor-pointer hover:text-yellow">Privacy Policy</span>
            <span className="text-[13px] text-gray cursor-pointer hover:text-yellow">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}