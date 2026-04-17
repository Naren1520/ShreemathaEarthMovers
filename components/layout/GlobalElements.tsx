"use client";
import { useState } from "react";
import { X, Phone, MessageSquare } from "lucide-react";

export default function GlobalElements() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="w-[60px] h-[60px] bg-[#25D366] text-white rounded-full flex items-center justify-center text-[28px] shadow-[0_5px_20px_rgba(37,211,102,0.4)] transition-transform duration-300 hover:scale-110 relative before:content-[''] before:absolute before:inset-0 before:border-2 before:border-[#25D366] before:rounded-full before:animate-pulse">
            <MessageSquare className="w-8 h-8"/>
        </a>
        <a href="tel:+919876543210" className="w-[60px] h-[60px] bg-yellow text-black rounded-full flex items-center justify-center text-[24px] shadow-[0_5px_20px_rgba(250,204,21,0.4)] transition-transform duration-300 hover:scale-110">
          <Phone className="w-7 h-7" />
        </a>
      </div>

      <div className={`fixed inset-0 bg-black/80 z-[999] flex items-center justify-center p-4 backdrop-blur-[5px] transition-all duration-300 ${isModalOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className={`bg-[#141414] w-[90%] max-w-[600px] relative border-[3px] border-yellow shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-all duration-400 ${isModalOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <button 
            onClick={() => setIsModalOpen(false)}
            className="absolute -top-4 -right-4 w-[40px] h-[40px] bg-yellow text-black rounded-full flex items-center justify-center text-[24px] font-bold cursor-pointer hover:bg-white transition-colors shadow-lg z-10"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="bg-yellow p-6 flex items-center gap-4">
            <h2 className="font-display text-[28px] font-black uppercase text-black m-0 leading-none">Request a <span className="text-white">Quote</span></h2>
          </div>
          
          <div className="p-8">
            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" required className="w-full bg-[#1e1e1e] border border-[#2a2a2a] text-white p-3.5 font-body text-[14px] outline-none focus:border-yellow transition-colors placeholder-[#8a8a8a]" />
                <input type="tel" placeholder="Phone Number" required className="w-full bg-[#1e1e1e] border border-[#2a2a2a] text-white p-3.5 font-body text-[14px] outline-none focus:border-yellow transition-colors placeholder-[#8a8a8a]" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full bg-[#1e1e1e] border border-[#2a2a2a] text-white p-3.5 font-body text-[14px] outline-none focus:border-yellow transition-colors placeholder-[#8a8a8a]" />
              <select required defaultValue="" className="w-full bg-[#1e1e1e] border border-[#2a2a2a] text-[#8a8a8a] p-3.5 font-body text-[14px] outline-none focus:border-yellow focus:text-white transition-colors appearance-none">
                <option value="" disabled>Select Service Required</option>
                <option value="excavation">Excavation Services</option>
                <option value="land-leveling">Land Leveling</option>
                <option value="demolition">Demolition Works</option>
                <option value="machine-hire">Machinery Hire</option>
                <option value="other">Other</option>
              </select>
              <textarea placeholder="Project Details" rows={4} required className="w-full bg-[#1e1e1e] border border-[#2a2a2a] text-white p-3.5 font-body text-[14px] outline-none focus:border-yellow transition-colors placeholder-[#8a8a8a] resize-y"></textarea>
              <button type="submit" className="btn btn-yellow w-full justify-center mt-2 p-[15px] text-[15px]">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}