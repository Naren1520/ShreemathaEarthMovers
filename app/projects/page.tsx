"use client";
import Link from "next/link";
import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    { cat: "excavation", img: "1504307651254-35680f356dfd?w=900&q=75", title: "Prestige Tech Park Foundation", loc: "📍 Whitefield, Mangalore", large: true },
    { cat: "leveling", img: "1541888946425-d81bb19240f5?w=600&q=70", title: "40-Acre Land Leveling", loc: "📍 Tumkur Road", large: false },
    { cat: "road", img: "1558618047-3c8c76ca7d13?w=600&q=70", title: "NH-48 Sub-base Preparation", loc: "📍 Nelamangala, Karnataka", large: false },
    { cat: "demolition", img: "1590247813693-5541d1c609fd?w=600&q=70", title: "Old Factory Demolition", loc: "📍 Peenya Industrial Area", large: false },
    { cat: "excavation", img: "1558618666-fcd25c85cd64?w=600&q=70", title: "Basement Excavation", loc: "📍 Sarjapur Road", large: false },
    { cat: "road", img: "1581244277943-fe4a9c777189?w=900&q=75", title: "Township Internal Roads", loc: "📍 Devanahalli, Mangalore", large: true },
    { cat: "leveling", img: "1572981779307-38b8cabb2407?w=600&q=70", title: "IT Park Site Grading", loc: "📍 Electronic City Phase 2", large: false },
    { cat: "excavation", img: "1504307651254-35680f356dfd?w=600&q=70", title: "Irrigation Pond Excavation", loc: "📍 Kolar District", large: false }
  ];

  return (
    <>
      <div className="bg-[#141414] border-b-[3px] border-yellow pt-20 pb-12">
        <div className="container-custom flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Link href="/" className="font-display text-xs font-bold tracking-[2px] uppercase text-gray cursor-pointer hover:text-yellow">Home</Link>
            <span className="text-yellow text-[10px]">▶</span>
            <span className="font-display text-xs font-bold tracking-[2px] uppercase text-yellow">Projects</span>
          </div>
          <div className="font-display text-xs font-bold tracking-[3px] uppercase text-yellow mb-4">Our Work</div>
          <h1 className="font-display text-[clamp(40px,6vw,80px)] font-black uppercase leading-none">Project <span className="text-yellow">Gallery</span></h1>
          <p className="text-[17px] text-[#d4d4d4] max-w-[560px] mt-4 font-light mx-auto">500+ projects completed across Mangalore and Karnataka. Here&apos;s a glimpse of our finest work.</p>
        </div>
      </div>

      <section className="section bg-black">
        <div className="container-custom">
          <div className="flex gap-2 flex-wrap mb-10">
            {[
              { id: "all", label: "All Projects" },
              { id: "excavation", label: "Excavation" },
              { id: "leveling", label: "Land Leveling" },
              { id: "demolition", label: "Demolition" },
              { id: "road", label: "Road Work" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`font-display text-[13px] font-bold tracking-[1.5px] uppercase py-2 px-5 border-[1.5px] transition-all duration-200 ${
                  filter === tab.id 
                    ? "bg-yellow border-yellow text-black" 
                    : "bg-transparent border-[#2a2a2a] text-gray hover:bg-yellow hover:border-yellow hover:text-black"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[240px] gap-4">
            {projects.filter(p => filter === "all" || p.cat === filter).map((project, idx) => (
              <div key={idx} className={`relative overflow-hidden cursor-pointer group ${project.large ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <img 
                  src={`https://images.unsplash.com/photo-${project.img}`} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale-[20%] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/0 transition-all duration-300 flex flex-col justify-end p-6 group-hover:bg-black/75">
                  <div className="translate-y-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="font-display text-[20px] font-extrabold uppercase text-white">{project.title}</div>
                    <div className="text-[13px] text-yellow mt-1">{project.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-yellow py-10">
        <div className="container-custom flex justify-between flex-wrap gap-6">
          {[
            { num: "500+", label: "Projects Completed" },
            { num: "10+", label: "Years Experience" },
            { num: "50+", label: "Happy Clients" },
            { num: "15+", label: "Machine Fleet" }
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="font-display text-[clamp(36px,5vw,56px)] font-black text-black leading-none">{stat.num}</div>
              <div className="font-display text-[13px] font-bold tracking-[2px] uppercase text-black/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}