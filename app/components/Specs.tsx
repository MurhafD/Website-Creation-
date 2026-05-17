"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const specs = [
  { feature: "Material", detail: "High-grade extruded aluminum frame + PU foam-core aluminum slats" },
  { feature: "Available Sizes", detail: "6′H × 3′W · 6′H × 4′W · 4′H × 4′W · Custom sizes available" },
  { feature: "Posts", detail: "80 × 80 mm extruded aluminum posts" },
  { feature: "Frame System", detail: "Modular non-welded design for easy assembly and long-term durability" },
  { feature: "Slat Technology", detail: "Proprietary roll-formed aluminum filled with high-density PU foam" },
  { feature: "Surface Finish", detail: "UV & corrosion-resistant powder coating with optional wood-grain texture" },
  { feature: "Hardware", detail: "Heavy-duty hinges, secure latch (backyard gates); motor system available (automatic sliding)" },
  { feature: "Installation", detail: "Modular surface mount or in-ground post setup" },
  { feature: "Climate Rating", detail: "Engineered for Canadian winters — freeze/thaw and heavy-load tested" },
  { feature: "Colour Options", detail: "9 standard colours — 7 with wood-grain finish, 2 solid" },
];

export default function Specs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="specs" className="py-28 bg-[#222222]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#8fb832] text-sm font-semibold tracking-widest uppercase">Specifications</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#f5f0e8] mt-3 mb-4">
            Quick Specs
          </h2>
          <p className="text-[#f5f0e8]/60">
            Every PrimeAlux gate is built to the same exacting standard across all styles and sizes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden border border-white/8"
        >
          {specs.map((s, i) => (
            <motion.div
              key={s.feature}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`grid sm:grid-cols-3 gap-4 px-6 py-5 ${
                i % 2 === 0 ? "bg-[#2a2a2a]" : "bg-[#252525]"
              } border-b border-white/5 last:border-b-0`}
            >
              <div className="text-sm font-bold text-[#f5f0e8]">{s.feature}</div>
              <div className="sm:col-span-2 text-sm text-[#f5f0e8]/65 leading-relaxed">{s.detail}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-sm text-[#f5f0e8]/40 mt-6"
        >
          Need a non-standard size or configuration?{" "}
          <a href="#contact" className="text-[#8fb832] hover:underline">
            Contact us for custom orders.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
