"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#1a1a1a]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 38px,
              rgba(255,255,255,0.03) 38px,
              rgba(255,255,255,0.03) 40px
            )`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a5e1e]/20 via-transparent to-[#8b4513]/10" />
      </div>

      {/* Decorative side panel */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block overflow-hidden">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `repeating-linear-gradient(
              180deg,
              #5a3010 0px,
              #5a3010 36px,
              #3d1c0a 36px,
              #3d1c0a 40px
            )`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-[#2a2a2a]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-0 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-[#8fb832] text-sm font-semibold tracking-widest uppercase mb-4">
              Canadian Aluminum Manufacturer · 50 Years of Excellence
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-[#f5f0e8] leading-tight mb-6">
              Gates Built to
              <span className="block text-[#8fb832]">Last a Lifetime</span>
            </h1>
            <p className="text-lg text-[#f5f0e8]/70 mb-10 max-w-lg leading-relaxed">
              Premium aluminum gates with our patented foam-core slat technology.
              The natural look of wood — the strength of aluminum. Zero rot, zero rust, zero maintenance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#products"
              className="bg-[#4a5e1e] hover:bg-[#5d7626] text-white font-semibold px-8 py-4 rounded transition-colors text-sm"
            >
              Browse Gates
            </a>
            <a
              href="#contact"
              className="border border-[#f5f0e8]/30 hover:border-[#f5f0e8]/60 text-[#f5f0e8] font-semibold px-8 py-4 rounded transition-colors text-sm"
            >
              Request a Quote
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 flex gap-10"
          >
            {[
              { value: "50+", label: "Years in Aluminum" },
              { value: "9", label: "Colour Options" },
              { value: "100%", label: "Aluminum Build" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-[#8fb832]">{stat.value}</div>
                <div className="text-sm text-[#f5f0e8]/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[#f5f0e8]/40 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-8 bg-gradient-to-b from-[#8fb832] to-transparent"
        />
      </motion.div>
    </section>
  );
}
