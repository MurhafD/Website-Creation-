"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const products = [
  {
    id: "sliding-manual",
    name: "Sliding Gate",
    subtitle: "Manual",
    description:
      "Smooth-rolling manual sliding gate designed for driveways and large openings. Heavy-duty aluminum track system with corrosion-resistant hardware.",
    features: ["Smooth-glide track system", "Heavy-duty aluminum rollers", "Secure manual latch", "Custom widths available"],
    sizes: ["4×6 ft", "3×4 ft", "4×4 ft", "Custom"],
    badge: null,
    accentColor: "#5a3010",
  },
  {
    id: "sliding-auto",
    name: "Sliding Gate",
    subtitle: "Automatic",
    description:
      "Motorized sliding gate with integrated automation system. Open and close with a remote, keypad, or smart device — perfect for busy households.",
    features: ["Motor-driven automation", "Remote & keypad access", "Safety obstacle detection", "Custom widths available"],
    sizes: ["4×6 ft", "3×4 ft", "4×4 ft", "Custom"],
    badge: "Most Popular",
    accentColor: "#4a5e1e",
  },
  {
    id: "backyard",
    name: "Backyard Gate",
    subtitle: "With Latch",
    description:
      "Elegant walk-through gate for backyards, pool enclosures, and side yards. Comes with a heavy-duty latch and hinges for effortless daily use.",
    features: ["Heavy-duty hinge system", "Secure lockable latch", "Inward & outward swing", "Standard & custom sizes"],
    sizes: ["6×3 ft", "6×4 ft", "Custom"],
    badge: null,
    accentColor: "#2a4a6e",
  },
  {
    id: "sloped",
    name: "Sloped Gate",
    subtitle: "Custom Angle",
    description:
      "Engineered for uneven terrain and sloped driveways. Each gate is custom-fabricated to match your exact slope angle without compromising aesthetics.",
    features: ["Custom slope angle", "Precision-fabricated frame", "All gate types available", "Professional measurement"],
    sizes: ["Custom only"],
    badge: "Custom",
    accentColor: "#6e4a2a",
  },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-[#242424] rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-300"
    >
      {product.badge && (
        <div className="absolute top-4 right-4 z-10 bg-[#4a5e1e] text-white text-xs font-bold px-3 py-1 rounded-full">
          {product.badge}
        </div>
      )}

      {/* Visual panel simulation */}
      <div
        className="h-52 relative overflow-hidden"
        style={{ backgroundColor: product.accentColor }}
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `repeating-linear-gradient(
              180deg,
              rgba(255,255,255,0.05) 0px,
              rgba(255,255,255,0.05) 36px,
              rgba(0,0,0,0.2) 36px,
              rgba(0,0,0,0.2) 40px
            )`,
          }}
        />
        {/* Frame simulation */}
        <div className="absolute left-4 top-0 bottom-0 w-4 bg-[#2a2a2a] opacity-80" />
        <div className="absolute right-4 top-0 bottom-0 w-4 bg-[#2a2a2a] opacity-80" />
        <div className="absolute top-0 left-0 right-0 h-4 bg-[#2a2a2a] opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#2a2a2a] opacity-80" />

        {/* Sliding indicator */}
        {product.id.includes("sliding") && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1">
            <div className="w-8 h-1.5 bg-white/30 rounded-full" />
            <div className="w-8 h-1.5 bg-white/30 rounded-full" />
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-[#f5f0e8]">{product.name}</h3>
          <span className="text-sm text-[#8fb832] font-semibold">{product.subtitle}</span>
        </div>

        <p className="text-[#f5f0e8]/60 text-sm leading-relaxed mb-5">
          {product.description}
        </p>

        <ul className="space-y-2 mb-6">
          {product.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-[#f5f0e8]/70">
              <span className="text-[#8fb832] text-base leading-none">✓</span>
              {f}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-6">
          {product.sizes.map((s) => (
            <span
              key={s}
              className="text-xs bg-white/5 border border-white/10 text-[#f5f0e8]/60 px-3 py-1 rounded-full"
            >
              {s}
            </span>
          ))}
        </div>

        <a
          href="#contact"
          className="block w-full text-center bg-[#4a5e1e]/20 hover:bg-[#4a5e1e] border border-[#4a5e1e]/50 hover:border-[#4a5e1e] text-[#8fb832] hover:text-white font-semibold text-sm py-3 rounded-lg transition-all duration-300"
        >
          Request a Quote
        </a>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="products" className="py-28 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#8fb832] text-sm font-semibold tracking-widest uppercase">Our Gates</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#f5f0e8] mt-3 mb-4">
            Choose Your Gate
          </h2>
          <p className="text-[#f5f0e8]/60 max-w-xl mx-auto">
            Every gate is manufactured in Canada using our proprietary foam-core aluminum slat system.
            Built to withstand Canadian winters and beyond.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
