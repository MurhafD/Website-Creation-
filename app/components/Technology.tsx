"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: "🧱",
    title: "Foam-Core Slat Construction",
    desc: "Each aluminum slat is roll-formed and filled with high-density PU foam. This gives the slat its rigidity, insulating properties, and the ability to hold fine surface detail — something solid aluminum alone cannot achieve.",
  },
  {
    icon: "🌿",
    title: "Natural Wood-Grain Finish",
    desc: "Our proprietary surface process embeds realistic wood-grain texture directly into the aluminum. 7 of our 9 colours feature this finish — giving you the warmth of natural wood with zero maintenance.",
  },
  {
    icon: "🛡️",
    title: "UV & Corrosion Resistant",
    desc: "Every gate is powder-coated with a UV-stable, corrosion-resistant finish. No fading, no rust, no rot — built for Canadian winters and harsh outdoor conditions.",
  },
  {
    icon: "🔩",
    title: "Modular Non-Welded Frame",
    desc: "Our 80×80mm aluminum post system uses a modular, non-welded assembly. This means faster installation, easier replacement, and no weak weld points that can fail over time.",
  },
];

export default function Technology() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="technology" className="py-28 bg-[#222222]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Slat cross-section diagram */}
            <div className="relative bg-[#2a2a2a] rounded-2xl overflow-hidden p-8 border border-white/5">
              <div className="text-xs text-[#f5f0e8]/40 font-mono mb-6 tracking-widest uppercase">
                Slat Cross-Section — Patented Technology
              </div>

              {/* Slat layers */}
              <div className="space-y-1.5 mb-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="relative h-9 rounded overflow-hidden flex">
                    <div className="w-3 bg-[#3a3a3a] flex-shrink-0" />
                    <div
                      className="flex-1 relative"
                      style={{
                        background: `linear-gradient(180deg, #6b3a1a ${i % 2 === 0 ? "0%" : "20%"}, #4a2010 100%)`,
                      }}
                    >
                      {/* Wood grain lines */}
                      <div className="absolute inset-0 opacity-30" style={{
                        backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(0,0,0,0.15) 20px, rgba(0,0,0,0.15) 22px)`
                      }} />
                      {/* Foam core indicator */}
                      <div className="absolute inset-x-4 inset-y-1.5 bg-[#f5d090]/10 rounded border border-[#f5d090]/20 flex items-center justify-center">
                        <span className="text-[9px] text-[#f5d090]/60 font-mono tracking-wider">PU FOAM CORE</span>
                      </div>
                    </div>
                    <div className="w-3 bg-[#3a3a3a] flex-shrink-0" />
                  </div>
                ))}
              </div>

              {/* Labels */}
              <div className="flex justify-between text-xs text-[#f5f0e8]/40 font-mono">
                <span>← Aluminum Frame</span>
                <span>Wood-Grain Surface →</span>
              </div>

              {/* Bottom badge */}
              <div className="mt-6 flex items-center gap-3 p-3 bg-[#4a5e1e]/10 border border-[#4a5e1e]/20 rounded-lg">
                <span className="text-2xl">🍁</span>
                <span className="text-sm text-[#8fb832] font-semibold">Manufactured in Canada · 50 Years of Aluminum Innovation</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#8fb832] text-sm font-semibold tracking-widest uppercase">Innovation</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#f5f0e8] mt-3 mb-4">
                Technology That&apos;s Never Been Done Before
              </h2>
              <p className="text-[#f5f0e8]/60 mb-10 leading-relaxed">
                PrimeAlux developed a first-of-its-kind aluminum slat system — roll-formed aluminum filled with PU foam.
                The result is a product that looks like real wood, feels premium, and will outlast anything wood could ever offer.
              </p>
            </motion.div>

            <div className="space-y-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="text-2xl flex-shrink-0 mt-0.5">{f.icon}</div>
                  <div>
                    <h3 className="font-bold text-[#f5f0e8] mb-1">{f.title}</h3>
                    <p className="text-sm text-[#f5f0e8]/55 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
