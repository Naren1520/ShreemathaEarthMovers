"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function Counter({ endValue, suffix, isString }: { endValue: number, suffix: string, isString?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isString) return;
    
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = endValue / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, endValue, isString]);

  if (isString) {
    return <span ref={ref}>{isString}</span>;
  }

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsSection() {
  const stats = [
    { end: 10, suffix: "+", label: "Years Experience" },
    { end: 500, suffix: "+", label: "Projects Done" },
    { isString: "24/7", end: 0, suffix: "", label: "Service Available" },
    { end: 15, suffix: "+", label: "Machines in Fleet" }
  ];

  return (
    <section className="bg-[#141414] py-16 border-y-[3px] border-yellow">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <div className="font-display text-[clamp(42px,6vw,60px)] font-black text-yellow leading-none drop-shadow-md">
                <Counter endValue={stat.end} suffix={stat.suffix} isString={stat.isString} />
              </div>
              <div className="text-[12px] tracking-[2px] uppercase text-[#e0e0e0] mt-3 font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
