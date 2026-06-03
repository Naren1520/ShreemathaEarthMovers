import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Shield, Clock, DollarSign } from "lucide-react";

export default function About() {
  return (
    <>
      <div className="bg-[#141414] border-b-[3px] border-yellow pt-20 pb-12">
        <div className="container-custom flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Link href="/" className="font-display text-xs font-bold tracking-[2px] uppercase text-gray cursor-pointer hover:text-yellow">Home</Link>
            <span className="text-yellow text-[10px]">▶</span>
            <span className="font-display text-xs font-bold tracking-[2px] uppercase text-yellow">About</span>
          </div>
          <div className="font-display text-xs font-bold tracking-[3px] uppercase text-yellow mb-4">Our Story</div>
          <h1 className="font-display text-[clamp(40px,6vw,80px)] font-black uppercase leading-none">About <span className="text-yellow">Us</span></h1>
          <p className="text-[17px] text-[#d4d4d4] max-w-[560px] mt-4 font-light mx-auto">A family-built business that grew from one JCB to a fleet of 15+ machines — all through honest work and trusted partnerships.</p>
        </div>
      </div>

      <section className="section bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="relative w-full h-[500px]">
                <Image 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" 
                  alt="Shreematha Earthmovers team"
                  fill
                  priority
                  className="object-cover grayscale-[20%]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-yellow p-7 text-center">
                <div className="font-display text-[56px] font-black text-black leading-none">10+</div>
                <div className="font-display text-xs font-bold tracking-[2px] text-black/70 uppercase">Years in<br />Business</div>
              </div>
            </div>
            
            <div>
              <span className="tag">Who We Are</span>
              <h2 className="section-title !text-[clamp(28px,4vw,48px)]">Mangalore&apos;s Trusted <span>Earthmoving</span> Partner</h2>
              <div className="divider"></div>
              <p className="text-base text-gray-light leading-[1.8] mt-5">Founded in 2014 by Shri. Ramesh Gowda, Shreematha Earthmovers started with a single JCB and a vision to provide reliable, affordable earthmoving services to the growing construction industry of Mangalore.</p>
              <p className="text-base text-gray-light leading-[1.8] mt-4">Today, we operate a fleet of 15+ machines, serve clients across 5 districts, and have completed over 500 projects ranging from residential foundations to large industrial site developments.</p>
              
              <div className="mt-8 flex flex-col gap-4">
                {[
                  { title: "Licensed & Insured", desc: "All machinery is insured. We comply with all Karnataka PWD and municipal regulations for earthwork operations.", icon: <Shield className="w-4 h-4 text-black" /> },
                  { title: "Experienced Operators", desc: "Our team of 30+ skilled operators bring years of on-site experience ensuring safe, efficient project execution.", icon: <CheckCircle2 className="w-4 h-4 text-black" /> },
                  { title: "On-Time Delivery", desc: "We understand that delays cost you money. Our project planning and execution ensures timelines are always met.", icon: <Clock className="w-4 h-4 text-black" /> }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-[#141414] border-l-[3px] border-yellow">
                    <div className="w-9 h-9 bg-yellow flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-display text-base font-bold uppercase mb-1">{item.title}</div>
                      <div className="text-sm text-gray">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="mt-24">
            <span className="tag">We Operate In</span>
            <h2 className="section-title !text-[clamp(28px,4vw,48px)]">Service <span>Areas</span></h2>
            <div className="divider"></div>
            <p className="text-base text-gray-light max-w-[600px] mt-4 mb-8">We cover Mangalore and surrounding districts within Karnataka. For projects further afield, contact us for availability.</p>
            <div className="flex flex-wrap gap-2.5">
              {[
                "Mangalore Urban", "Mangalore Rural", "Whitefield", "Sarjapur", "Electronic City",
                "Devanahalli", "Tumkur", "Kolar", "Ramanagara", "Doddaballapur", "Hoskote",
                "Nelamangala", "Anekal", "Mysuru", "Mandya"
              ].map((area, idx) => (
                <span key={idx} className="font-display text-[13px] font-bold tracking-[1px] uppercase border border-[#2a2a2a] px-[14px] py-1.5 text-gray-light hover:border-yellow hover:text-yellow transition-all cursor-default">
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="mt-24">
            <span className="tag">Our Values</span>
            <h2 className="section-title !text-[clamp(28px,4vw,48px)]">What We <span>Stand For</span></h2>
            <div className="divider"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                { title: "Safety First", desc: "Zero-compromise safety protocols on every site. Our operators are trained in DGMS safety standards.", icon: <Shield className="text-black" /> },
                { title: "Quality Work", desc: "Every project is executed with precision and reviewed by our senior engineers before handover.", icon: <CheckCircle2 className="text-black" /> },
                { title: "On-Time", desc: "We schedule resources efficiently and maintain transparent communication throughout the project timeline.", icon: <Clock className="text-black" /> },
                { title: "Fair Pricing", desc: "Transparent, competitive rates with no hidden costs. You get a detailed quote before any work begins.", icon: <DollarSign className="text-black" /> }
              ].map((val, idx) => (
                <div key={idx} className="bg-[#141414] border border-[#2a2a2a] p-8 border-t-[3px] border-t-yellow">
                  <div className="w-[52px] h-[52px] bg-yellow flex items-center justify-center mb-5">
                    {val.icon}
                  </div>
                  <div className="font-display text-[22px] font-extrabold uppercase mb-2.5 text-white">{val.title}</div>
                  <div className="text-[14px] text-gray leading-[1.7]">{val.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}