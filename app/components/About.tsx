"use client";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: "🍁",
    title: "Canadian Made",
    desc: "Manufactured in Canada. Every gate that leaves our facility meets the standards we've held for nearly five decades.",
  },
  {
    icon: "♻️",
    title: "100% Aluminum",
    desc: "Aluminum is infinitely recyclable. Our foam-core slat system uses less raw material while delivering more strength.",
  },
  {
    icon: "💪",
    title: "Built to Last",
    desc: "No wood to rot. No steel to rust. Our aluminum gates are engineered to outlast any organic or iron-based alternative.",
  },
  {
    icon: "💰",
    title: "Direct from Manufacturer",
    desc: "We cut out the middleman. You buy directly from the company that designs, engineers, and builds every gate.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#8fb832] text-sm font-semibold tracking-widest uppercase">About PrimeAlux</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#f5f0e8] mt-3 mb-6 leading-tight">
              Almost 5 Decades in the Aluminum Business
            </h2>
            <p className="text-[#f5f0e8]/65 leading-relaxed mb-6">
              PrimeAlux is a Canadian manufacturer with nearly 50 years of experience in the aluminum industry.
              What started as a deep expertise in aluminum fabrication has evolved into a mission to bring
              the most advanced, beautiful, and durable outdoor products to homeowners and contractors across North America.
            </p>
            <p className="text-[#f5f0e8]/65 leading-relaxed mb-10">
              Our breakthrough foam-core aluminum slat — a first in the industry — lets us produce gates that look and
              feel like premium natural wood, without any of wood&apos;s drawbacks. It&apos;s the kind of innovation
              that only comes from decades of working with aluminum at every level.
            </p>

            <div className="flex items-center gap-4 p-5 bg-[#4a5e1e]/10 border border-[#4a5e1e]/20 rounded-xl">
              <div className="text-4xl">🍁</div>
              <div>
                <div className="font-bold text-[#f5f0e8]">Proudly Canadian</div>
                <div className="text-sm text-[#f5f0e8]/55">Serving Canada & the United States</div>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#242424] border border-white/5 rounded-xl p-6"
              >
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-[#f5f0e8] mb-2">{p.title}</h3>
                <p className="text-sm text-[#f5f0e8]/55 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
