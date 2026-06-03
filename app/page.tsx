"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import StatsSection from "@/components/ui/StatsSection";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-72px)] lg:h-[calc(100vh-72px)] flex flex-col justify-center overflow-hidden py-12 sm:py-16 md:py-20 lg:py-0">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
            src="/videos/vdo3.mp4"
            style={{ filter: "contrast(1.2)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/70 to-[#0a0a0a]/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow/80"></div>
        
        <div className="container-custom relative z-10 w-full">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} 
            className="max-w-[900px] mx-auto text-center flex flex-col items-center"
          >
            <motion.div variants={fadeInUp} className="flex justify-center items-center gap-2.5 mb-4 sm:mb-5 md:mb-7">
              <div className="w-2 h-2 bg-yellow rounded-full animate-pulse"></div>
              <span className="font-display text-[clamp(9px,2vw,12px)] font-bold tracking-[3px] uppercase text-yellow">
                Mangalore & Surrounding Regions
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="font-display text-[clamp(28px,7vw,72px)] font-black leading-none uppercase mb-4 sm:mb-5 md:mb-6 drop-shadow-lg">
              Strong Foundations.
              <span className="text-yellow block">Reliable Earthmoving</span>
              Solutions.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-[clamp(14px,3vw,16px)] text-[#d4d4d4] max-w-[600px] mx-auto mb-6 sm:mb-7 md:mb-8 font-light leading-[1.6] drop-shadow-md">
              Professional excavation, land leveling, demolition, and site preparation services. Trusted by 500+ clients across Mangalore and Karnataka.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap mt-6 sm:mt-7 md:mt-8">
              <a href="tel:+919876543210" className="btn btn-yellow">
                Call Now
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="btn btn-outline">
                WhatsApp Us
              </a>
              <button className="btn btn-outline-yellow">
                Free Quote
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <StatsSection />

      {/* SERVICES PREVIEW */}
      <section className="bg-black min-h-auto py-12 sm:py-16 md:py-20 lg:py-24 xl:min-h-screen xl:h-screen xl:flex xl:flex-col xl:justify-center">
        <div className="container-custom">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col items-center text-center"
          >
            <motion.span variants={fadeInUp} className="tag">What We Do</motion.span>
            <motion.h2 variants={fadeInUp} className="section-title">Our Core <span>Services</span></motion.h2>
            <motion.div variants={fadeInUp} className="divider mx-auto"></motion.div>
            <motion.p variants={fadeInUp} className="section-sub mx-auto">From ground breaking to project completion — we handle every stage of your earthmoving requirements with precision and efficiency.</motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12">
            {[ 
              { title: "Excavation", tags: ["Foundation", "Basement"], video: "/videos/vdo2.mp4", image: "/images/img1.jpg" },
              { title: "Land Leveling", tags: ["Grading", "Compaction"], video: "/videos/vdo3.mp4", image: "/images/img2.jpg" },
              { title: "Demolition", tags: ["Structural", "Clearance"], image: "/images/img1.jpg" }
            ].map((service, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3 + (i * 0.15) }}
                className="bg-[#141414] border border-[#2a2a2a] relative overflow-hidden group transition-all duration-500 hover:border-[#facc15] hover:-translate-y-2 cursor-pointer shadow-2xl shadow-black/50"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#facc15] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 z-10" />
                {service.video ? (
                  <video autoPlay loop muted playsInline className="w-full h-[150px] sm:h-[200px] md:h-[250px] object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" src={service.video} />
                ) : (
                  <div className="relative w-full h-[150px] sm:h-[200px] md:h-[250px]">
                    <Image 
                      src={service.image!} 
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                )}
                <div className="p-4 sm:p-5 md:p-8 relative z-20 bg-gradient-to-t from-[#141414] via-[#141414]/90 to-transparent -mt-12 sm:-mt-14 md:-mt-16 pt-12 sm:pt-14 md:pt-20">
                  <div className="font-display text-[clamp(18px,4vw,24px)] font-extrabold uppercase mb-2 text-white group-hover:text-yellow transition-colors">{service.title}</div>
                  <p className="text-[clamp(12px,2.5vw,15px)] text-[#a0a0a0] leading-[1.7] mb-4 sm:mb-5">Professional {service.title.toLowerCase()} customized for luxury commercial & residential sites.</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-[clamp(8px,2vw,10px)] font-bold tracking-[1.5px] uppercase text-[#facc15] bg-[#facc15]/10 py-1 sm:py-1.5 px-2 sm:px-3 border border-[#facc15]/30 rounded-sm hover:bg-[#facc15]/20 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MACHINERY HIGHLIGHT */}
      <section className="bg-[#141414] min-h-auto py-12 sm:py-16 md:py-20 lg:py-24 xl:min-h-screen xl:h-screen xl:flex xl:flex-col xl:justify-center">
        <div className="container-custom">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col items-center text-center mb-8 sm:mb-10 md:mb-12"
          >
            <motion.span variants={fadeInUp} className="tag">Heavy Fleet</motion.span>
            <motion.h2 variants={fadeInUp} className="section-title">Our <span>Machinery</span></motion.h2>
            <motion.div variants={fadeInUp} className="divider mx-auto"></motion.div>
            <motion.p variants={fadeInUp} className="section-sub mx-auto mb-4 sm:mb-5 md:mb-6">Equipped with state-of-the-art heavy machinery to tackle projects of any scale.</motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/machinery" className="btn btn-outline-yellow">
                View All Machines →
              </Link>
            </motion.div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[
              { title: "JCB Backhoe", cap: "0.3m³ Bucket", img: "/images/img1.jpg", desc: "Premium backhoe loaders optimized for trenching and precision digging." },
              { title: "Excavator", cap: "0.8m³ Bucket", img: "/images/img2.jpg", desc: "Heavy-duty excavation machinery built for expansive commercial earthworks." },
              { title: "Bulldozer", cap: "200HP Engine", img: "/images/img1.jpg", desc: "Powerful bulldozers for precise land leveling and terrain modification." },
              { title: "Tipper Trucks", cap: "12–20 Ton", img: "/images/img2.jpg", desc: "High-capacity transportation fleets handling demanding logistical challenges." }
            ].map((machine, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                className="bg-[#1e1e1e] border-y border-[#2a2a2a] overflow-hidden transition-all duration-500 hover:border-yellow group cursor-pointer hover:shadow-[0_10px_40px_rgba(250,204,21,0.1)] hover:-translate-y-2"
              >
                <div className="relative w-full h-[150px] sm:h-[180px] md:h-[220px] lg:h-[250px]">
                  <Image 
                    src={machine.img} 
                    alt={machine.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover grayscale-[40%] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-110"
                  />
                </div>
                <div className="p-4 sm:p-5 md:p-8 relative z-10 bg-gradient-to-t from-[#1e1e1e] via-[#1e1e1e]/90 to-transparent -mt-10 sm:-mt-12 md:-mt-16 pt-10 sm:pt-12 md:pt-20">
                  <div className="font-display text-[clamp(18px,3.5vw,26px)] font-extrabold uppercase text-white mb-2 group-hover:text-yellow transition-colors">{machine.title}</div>
                  <span className="inline-block font-display text-[clamp(9px,2vw,11px)] font-bold tracking-[3px] bg-yellow/10 border border-yellow/20 text-yellow py-1 sm:py-1.5 px-2 sm:px-4 mb-3 sm:mb-4 rounded-sm">{machine.cap}</span>
                  <p className="text-[clamp(12px,2.5vw,14px)] text-gray-300 leading-[1.8] font-light">{machine.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <div className="border-y-[3px] border-yellow py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden flex items-center min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            src="/videos/vdo3.mp4"
            style={{ filter: "brightness(0.6) contrast(1.5)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/80 backdrop-blur-[1px]"></div>
        </div>
        <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 font-display text-[clamp(80px,15vw,160px)] font-black text-yellow/5 uppercase whitespace-nowrap pointer-events-none tracking-[-4px] z-10 mix-blend-overlay">
          EARTHMOVERS
        </div>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="container-custom flex items-center justify-center lg:justify-between gap-6 sm:gap-8 flex-col lg:flex-row relative z-20 w-full"
        >
          <div className="max-w-[700px] text-center lg:text-left">
            <motion.h2 variants={fadeInUp} className="font-display text-[clamp(28px,6vw,72px)] font-black uppercase leading-[1.05] tracking-tight drop-shadow-2xl">Ready to Break <span className="text-yellow">Ground?</span></motion.h2>
            <motion.p variants={fadeInUp} className="text-[clamp(14px,2.5vw,18px)] text-gray-200 mt-3 sm:mt-4 md:mt-5 font-light leading-relaxed">Experience uncompromised quality and absolute precision. Get a free, no-obligation quote for your premium project in Mangalore and surrounding areas.</motion.p>
          </div>
          <motion.div variants={fadeInUp} className="flex gap-2 sm:gap-3 md:gap-4 flex-col sm:flex-row flex-wrap mt-6 lg:mt-0 justify-center lg:justify-end w-full lg:w-auto">
            <button className="btn btn-yellow shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:shadow-[0_0_50px_rgba(250,204,21,0.5)]">
              Get Free Quote
            </button>
            <a href="tel:+919876543210" className="btn btn-outline border-white/50 hover:border-white">
              +91 98765 43210
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* TESTIMONIALS */}
      <section className="bg-black min-h-auto py-12 sm:py-16 md:py-20 lg:py-24 xl:min-h-screen xl:h-screen xl:flex xl:flex-col xl:justify-center overflow-hidden">
        <div className="container-custom mb-8 sm:mb-10 md:mb-12 xl:mb-12">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col items-center text-center"
          >
            <motion.span variants={fadeInUp} className="tag">Client Reviews</motion.span>
            <motion.h2 variants={fadeInUp} className="section-title">What Clients <span>Say</span></motion.h2>
            <motion.div variants={fadeInUp} className="divider mx-auto"></motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full relative px-2 sm:px-4 text-left overflow-x-auto hide-scrollbar"
        >
          {/* Marquee container */}
          <div className="flex w-[200%] gap-4 sm:gap-6 md:gap-8 animate-scrollx">
            {[
              { name: "Rajesh Kumar", role: "Builder, Whitefield", avy: "RK", text: "Shreematha Earthmovers completed our 2-acre site clearing in just 4 days. Their team was professional, punctual and the machinery was top-notch. Highly recommend for any major earthwork." },
              { name: "Mohan Shetty", role: "Civil Contractor, Tumkur", avy: "MS", text: "We hired them for a large road sub-base preparation project on the outskirts of Mangalore. They delivered on time, within budget, and the quality of work was exceptional." },
              { name: "Anand Prasad", role: "Developer, Electronic City", avy: "AP", text: "Best earthmoving company I&apos;ve worked with in 15 years. They demolished our old warehouse and leveled the entire 5-acre plot in under a week. Truly a reliable partner." },
              /* Duped for seamless effect */
              { name: "Rajesh Kumar", role: "Builder, Whitefield", avy: "RK", text: "Shreematha Earthmovers completed our 2-acre site clearing in just 4 days. Their team was professional, punctual and the machinery was top-notch. Highly recommend for any major earthwork." },
              { name: "Mohan Shetty", role: "Civil Contractor, Tumkur", avy: "MS", text: "We hired them for a large road sub-base preparation project on the outskirts of Mangalore. They delivered on time, within budget, and the quality of work was exceptional." },
              { name: "Anand Prasad", role: "Developer, Electronic City", avy: "AP", text: "Best earthmoving company I&apos;ve worked with in 15 years. They demolished our old warehouse and leveled the entire 5-acre plot in under a week. Truly a reliable partner." }
            ].map((review, i) => (
              <div key={i} className="bg-[#141414] border border-[#2a2a2a] p-4 sm:p-5 md:p-8 relative flex-shrink-0 w-[280px] sm:w-[350px] md:w-[420px] lg:w-[450px]">
                <div className="absolute top-2 sm:top-3 md:top-4 right-3 sm:right-4 md:right-6 font-display text-[50px] sm:text-[60px] md:text-[80px] font-black text-yellow/15 leading-none">&quot;</div>
                <div className="text-yellow text-[12px] sm:text-[13px] md:text-[14px] mb-3 sm:mb-4">★★★★★</div>
                <p className="text-[clamp(12px,2.5vw,15px)] text-[#d4d4d4] leading-[1.8] mb-4 sm:mb-5 md:mb-6 relative z-10">{review.text}</p>
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow flex-shrink-0 flex items-center justify-center font-display text-[16px] sm:text-[18px] md:text-[22px] font-black text-black">
                    {review.avy}
                  </div>
                  <div className="min-w-0">
                    <div className="font-display text-[clamp(14px,2.5vw,17px)] font-bold uppercase truncate">{review.name}</div>
                    <div className="text-[clamp(10px,2vw,12px)] text-gray tracking-[1px] uppercase mt-0.5 truncate">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

    </>
  );
}
