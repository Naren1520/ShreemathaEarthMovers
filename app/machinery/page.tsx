import Link from "next/link";
import Image from "next/image";

export default function Machinery() {
  const machines = [
    {
      title: "JCB / Backhoe Loader",
      sub: "3CX Model",
      img: "1580894742597-87bc8789db3d?w=800&q=80",
      desc: "The most versatile machine in our fleet. Ideal for small to medium excavation tasks, trenching, material loading and backfilling. Its compact design allows operation in restricted access areas like urban sites and narrow plots.",
      specs: [
        { label: "Engine", val: "74 HP" },
        { label: "Bucket Capacity", val: "0.3 m³" },
        { label: "Digging Depth", val: "5.97 m" },
        { label: "Operating Weight", val: "8.1 Ton" }
      ]
    },
    {
      title: "Hydraulic Excavator",
      sub: "20T Class",
      img: "1558618666-fcd25c85cd64?w=800&q=80",
      desc: "Our workhorse for heavy excavation projects. Capable of deep foundation digging, hard rock excavation with breaker attachment, and high-volume material handling. Perfect for large residential and commercial sites.",
      specs: [
        { label: "Engine", val: "136 HP" },
        { label: "Bucket Capacity", val: "0.8 m³" },
        { label: "Digging Depth", val: "6.63 m" },
        { label: "Operating Weight", val: "20 Ton" }
      ]
    },
    {
      title: "Bulldozer D6",
      sub: "200 HP",
      img: "1504307651254-35680f356dfd?w=800&q=80",
      desc: "High-power crawler dozer for land clearing, pushing and leveling large areas. Equipped with GPS blade control for precision grading on large-scale agricultural and construction projects.",
      specs: [
        { label: "Engine", val: "200 HP" },
        { label: "Blade Width", val: "3.9 m" },
        { label: "Push Force", val: "178 kN" },
        { label: "Operating Weight", val: "21 Ton" }
      ]
    },
    {
      title: "Tipper Trucks",
      sub: "12–20 Ton",
      img: "1586528116311-ad8dd3c8310d?w=800&q=80",
      desc: "Fleet of heavy-duty tippers for transportation of excavated soil, demolition debris, sand, metal and construction materials. Available for daily hire, monthly contracts and project-based transport.",
      specs: [
        { label: "Payload", val: "12–20 Ton" },
        { label: "Body Volume", val: "10–18 m³" },
        { label: "Fleet Size", val: "8 Trucks" },
        { label: "Availability", val: "24/7" }
      ]
    }
  ];

  return (
    <>
      <div className="bg-[#141414] border-b-[3px] border-yellow pt-20 pb-12">
        <div className="container-custom flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Link href="/" className="font-display text-xs font-bold tracking-[2px] uppercase text-gray cursor-pointer hover:text-yellow">Home</Link>
            <span className="text-yellow text-[10px]">▶</span>
            <span className="font-display text-xs font-bold tracking-[2px] uppercase text-yellow">Machinery</span>
          </div>
          <div className="font-display text-xs font-bold tracking-[3px] uppercase text-yellow mb-4">Heavy Fleet</div>
          <h1 className="font-display text-[clamp(40px,6vw,80px)] font-black uppercase leading-none">Our <span className="text-yellow">Machines</span></h1>
          <p className="text-[17px] text-[#d4d4d4] max-w-[560px] mt-4 font-light mx-auto">Well-maintained, modern fleet of heavy earthmoving equipment available for hire or contract work across Mangalore.</p>
        </div>
      </div>

      <section className="section bg-black">
        <div className="container-custom">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {machines.map((machine, mIdx) => (
              <div key={mIdx} className="bg-[#141414] border border-[#2a2a2a] overflow-hidden group">
                <div className="relative w-full h-[320px]">
                  <Image 
                    src={`https://images.unsplash.com/photo-${machine.img}`} 
                    alt={machine.title}
                    fill
                    className="object-cover grayscale-[20%] transition-all duration-400 group-hover:grayscale-0 group-hover:brightness-110"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start flex-wrap gap-3 mb-4">
                    <div className="font-display text-[28px] font-black uppercase text-white leading-none whitespace-pre-wrap">{machine.title}</div>
                    <span className="font-display text-xs font-bold tracking-[2px] bg-yellow text-black py-1 px-3 whitespace-nowrap">{machine.sub}</span>
                  </div>
                  <p className="text-[15px] text-gray leading-[1.7] mb-6">{machine.desc}</p>
                  <div className="grid grid-cols-2 gap-2.5 text-[13px] mb-8">
                    {machine.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="bg-[#1e1e1e] p-3 border-l-2 border-yellow">
                        <div className="text-gray uppercase tracking-[1px] text-[11px] mb-1">{spec.label}</div>
                        <div className="text-white font-semibold">{spec.val}</div>
                      </div>
                    ))}
                  </div>
                  <button className="btn btn-yellow">Hire This Machine</button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-yellow p-12 flex items-center justify-between flex-wrap gap-6">
            <div>
              <div className="font-display text-[clamp(24px,4vw,42px)] font-black text-black uppercase leading-[1.1]">Need a Machine on Rent?</div>
              <div className="text-[15px] text-black/65 mt-2">Daily, weekly and monthly rental rates available. All machines come with experienced operators.</div>
            </div>
            <div className="flex gap-3.5 flex-wrap">
              <a href="tel:+919876543210" className="btn bg-black text-yellow hover:bg-black/90">Call: +91 98765 43210</a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="btn bg-black/10 text-black border-2 border-black hover:bg-black hover:text-yellow">WhatsApp</a>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}