import Link from "next/link";
import Image from "next/image";

export default function Services() {
  return (
    <>
      <div className="bg-[#141414] border-b-[3px] border-yellow pt-20 pb-12">
        <div className="container-custom flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Link href="/" className="font-display text-xs font-bold tracking-[2px] uppercase text-gray cursor-pointer hover:text-yellow">Home</Link>
            <span className="text-yellow text-[10px]">▶</span>
            <span className="font-display text-xs font-bold tracking-[2px] uppercase text-yellow">Services</span>
          </div>
          <div className="font-display text-xs font-bold tracking-[3px] uppercase text-yellow mb-4">What We Offer</div>
          <h1 className="font-display text-[clamp(40px,6vw,80px)] font-black uppercase leading-none">Our <span className="text-yellow">Services</span></h1>
          <p className="text-[17px] text-[#d4d4d4] max-w-[560px] mt-4 font-light mx-auto">Comprehensive earthmoving and construction support services backed by 10+ years of hands-on expertise.</p>
        </div>
      </div>

      <section className="section bg-black">
        <div className="container-custom">
          {/* Service 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20 group">
            <div className="relative w-full h-[400px]">
              <Image 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" 
                alt="Excavation"
                fill
                priority
                className="object-cover grayscale-[20%]"
              />
            </div>
            <div>
              <span className="tag">Service 01</span>
              <h2 className="section-title !text-[clamp(32px,4vw,52px)]">Excavation</h2>
              <div className="divider"></div>
              <p className="section-sub mt-4 text-[#d4d4d4]">From shallow trenches to deep basement foundations, our excavation team handles projects of all scales with precision and safety compliance. We use modern GPS-guided machinery for accurate cut-fill calculations.</p>
              <div className="mt-7 flex flex-col gap-2.5">
                {[
                  "Foundation Excavation (Residential & Commercial)",
                  "Basement Construction Excavation",
                  "Utility Trenching (Water, Sewage, Cable)",
                  "Rock Breaking & Hard Soil Excavation",
                  "Pond & Lake Excavation"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-[14px] text-[#d4d4d4]">
                    <span className="text-yellow text-[18px] font-black">▶</span> {item}
                  </div>
                ))}
              </div>
              <button className="btn btn-yellow mt-8">Get Quote For This Service</button>
            </div>
          </div>

          {/* Service 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 md:order-1">
              <span className="tag">Service 02</span>
              <h2 className="section-title !text-[clamp(32px,4vw,52px)]">Land Leveling</h2>
              <div className="divider"></div>
              <p className="section-sub mt-4 text-[#d4d4d4]">We prepare your land for construction with expert grading, filling, and compaction. Our laser-guided leveling technology ensures perfectly flat surfaces ready for any structural work.</p>
              <div className="mt-7 flex flex-col gap-2.5">
                {[
                  "Agricultural Land Leveling",
                  "Construction Site Grading",
                  "Soil Compaction & Filling",
                  "Cut and Fill Operations",
                  "Drainage Slope Preparation"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-[14px] text-[#d4d4d4]">
                    <span className="text-yellow text-[18px] font-black">▶</span> {item}
                  </div>
                ))}
              </div>
              <button className="btn btn-yellow mt-8">Get Quote For This Service</button>
            </div>
            <div className="relative w-full h-[400px] order-1 md:order-2">
              <Image 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" 
                alt="Land Leveling"
                fill
                className="object-cover grayscale-[20%]"
              />
            </div>
          </div>

          {/* Service 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20 group">
            <div className="relative w-full h-[400px]">
              <Image 
                src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?w=800&q=80" 
                alt="Demolition"
                fill
                className="object-cover grayscale-[20%]"
              />
            </div>
            <div>
              <span className="tag">Service 03</span>
              <h2 className="section-title !text-[clamp(32px,4vw,52px)]">Demolition</h2>
              <div className="divider"></div>
              <p className="section-sub mt-4 text-[#d4d4d4]">Safe, efficient structural demolition for residential, commercial and industrial buildings. We handle debris removal, recycling of materials, and leave your site clean and ready for redevelopment.</p>
              <div className="mt-7 flex flex-col gap-2.5">
                {[
                  "Residential Building Demolition",
                  "Industrial Structure Removal",
                  "Concrete Breaking & Removal",
                  "Compound Wall Removal",
                  "Debris Hauling & Disposal"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-[14px] text-[#d4d4d4]">
                    <span className="text-yellow text-[18px] font-black">▶</span> {item}
                  </div>
                ))}
              </div>
              <button className="btn btn-yellow mt-8">Get Quote For This Service</button>
            </div>
          </div>

          {/* Services 4 & 5 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="bg-[#141414] border border-[#2a2a2a] relative overflow-hidden group transition-all hover:border-yellow hover:-translate-y-1">
              <div className="relative w-full h-[200px]">
                <Image 
                  src="https://images.unsplash.com/photo-1620905485547-caee9a5e14cd?w=600&q=70" 
                  alt="Site Clearing"
                  fill
                  className="object-cover grayscale-[20%]"
                />
              </div>
              <div className="p-7">
                <span className="tag">Service 04</span>
                <div className="font-display text-[22px] font-extrabold uppercase mt-3 mb-3 text-white">Site Clearing</div>
                <div className="text-[15px] text-[#8a8a8a] leading-[1.7]">Complete removal of vegetation, trees, stumps, old structures and debris to prepare a blank canvas for your construction project. We ensure full environmental compliance.</div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Vegetation", "Tree Removal", "Stump Grinding", "Debris"].map(tag => (
                    <span key={tag} className="text-[11px] tracking-[1px] uppercase text-yellow bg-yellow/10 py-[3px] px-[10px] border border-yellow/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="btn btn-outline-yellow mt-5 text-[13px] py-2.5 px-5">Request Quote</button>
              </div>
            </div>
            
            <div className="bg-[#141414] border border-[#2a2a2a] relative overflow-hidden group transition-all hover:border-yellow hover:-translate-y-1">
              <div className="relative w-full h-[200px]">
                <Image 
                  src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=70" 
                  alt="Road Work"
                  fill
                  className="object-cover grayscale-[20%]"
                />
              </div>
              <div className="p-7">
                <span className="tag">Service 05</span>
                <div className="font-display text-[22px] font-extrabold uppercase mt-3 mb-3 text-white">Road Work</div>
                <div className="text-[15px] text-[#8a8a8a] leading-[1.7]">Full-scale road sub-base and earthwork services including cutting, filling, compaction and drainage. Serving NHAI, BBMP and private road projects across Karnataka.</div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Sub-base", "Cutting", "Compaction", "Drainage"].map(tag => (
                    <span key={tag} className="text-[11px] tracking-[1px] uppercase text-yellow bg-yellow/10 py-[3px] px-[10px] border border-yellow/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="btn btn-outline-yellow mt-5 text-[13px] py-2.5 px-5">Request Quote</button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA BANNER */}
      <div className="bg-[#141414] border-y-[3px] border-yellow py-20 relative overflow-hidden">
        <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 font-display text-[160px] font-black text-yellow/5 uppercase whitespace-nowrap pointer-events-none tracking-[-4px]">
          EARTHMOVERS
        </div>
        <div className="container-custom flex items-center justify-between gap-8 flex-wrap relative z-10">
          <div>
            <h2 className="font-display text-[clamp(32px,5vw,56px)] font-black uppercase leading-[1.05]">Need a Custom <span className="text-yellow">Solution?</span></h2>
            <p className="text-base text-gray mt-3">We also handle specialized earthmoving requirements. Call us to discuss your project.</p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <button className="btn btn-yellow">
              Request Free Quote
            </button>
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="btn btn-outline">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}