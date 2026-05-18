"use client";
import { motion } from "framer-motion";

function GateVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto select-none">
      {/* Fence panels left */}
      <div className="absolute left-0 top-8 bottom-8 w-[28%] rounded-xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #6b3a1a, #4a2010)" }}>
          <div className="absolute inset-0" style={{
            backgroundImage: "repeating-linear-gradient(180deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 34px, rgba(0,0,0,0.22) 34px, rgba(0,0,0,0.22) 38px)",
          }} />
          <div className="absolute inset-0" style={{
            backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 6px, rgba(0,0,0,0.08) 6px, rgba(0,0,0,0.08) 7px)",
          }} />
        </div>
        {/* Posts */}
        <div className="absolute top-0 bottom-0 right-0 w-4 bg-[#282828]" />
        <div className="absolute top-0 left-0 right-0 h-4 bg-[#282828]" />
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#282828]" />
      </div>

      {/* Fence panels right */}
      <div className="absolute right-0 top-8 bottom-8 w-[28%] rounded-xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #6b3a1a, #4a2010)" }}>
          <div className="absolute inset-0" style={{
            backgroundImage: "repeating-linear-gradient(180deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 34px, rgba(0,0,0,0.22) 34px, rgba(0,0,0,0.22) 38px)",
          }} />
          <div className="absolute inset-0" style={{
            backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 6px, rgba(0,0,0,0.08) 6px, rgba(0,0,0,0.08) 7px)",
          }} />
        </div>
        <div className="absolute top-0 bottom-0 left-0 w-4 bg-[#282828]" />
        <div className="absolute top-0 left-0 right-0 h-4 bg-[#282828]" />
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#282828]" />
      </div>

      {/* Gate */}
      <div className="relative mx-auto w-[40%] z-10">
        {/* Post left */}
        <div className="absolute -left-3 top-0 bottom-0 w-3 bg-[#282828] rounded-l shadow-lg" />
        {/* Post right */}
        <div className="absolute -right-3 top-0 bottom-0 w-3 bg-[#282828] rounded-r shadow-lg" />

        {/* Gate panel */}
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{ rotateY: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
          style={{ transformOrigin: "left center", transformStyle: "preserve-3d" }}
          className="relative rounded overflow-hidden shadow-2xl"
        >
          {/* Slats */}
          <div className="relative" style={{ background: "linear-gradient(180deg, #7a4020, #4a2010)" }}>
            <div className="absolute inset-0" style={{
              backgroundImage: "repeating-linear-gradient(180deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 32px, rgba(0,0,0,0.28) 32px, rgba(0,0,0,0.28) 36px)",
            }} />
            <div className="absolute inset-0" style={{
              backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(0,0,0,0.07) 8px, rgba(0,0,0,0.07) 9px)",
            }} />
            <div className="h-72" />
          </div>
          {/* Frame */}
          <div className="absolute top-0 left-0 right-0 h-3 bg-[#282828]" />
          <div className="absolute bottom-0 left-0 right-0 h-3 bg-[#282828]" />

          {/* Hinge */}
          <div className="absolute right-2 top-10 w-3 h-5 bg-[#1a1a1a] rounded-sm shadow" />
          <div className="absolute right-2 bottom-10 w-3 h-5 bg-[#1a1a1a] rounded-sm shadow" />
          {/* Latch */}
          <div className="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-8 bg-[#1a1a1a] rounded-sm shadow" />
        </motion.div>
      </div>

      {/* Ground */}
      <div className="absolute -bottom-4 left-0 right-0 h-8 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#1a1a1a]"
    >
      {/* Subtle grid bg */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(#f5f0e8 1px, transparent 1px), linear-gradient(90deg, #f5f0e8 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      <div className="absolute inset-0 bg-gradient-to-br from-[#4a5e1e]/15 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#4a5e1e]/15 border border-[#4a5e1e]/30 text-[#8fb832] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              🍁 Canadian Manufacturer · Est. 50+ Years
            </div>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-[#f5f0e8] leading-[1.05] mb-6">
              Premium
              <span className="block text-transparent bg-clip-text" style={{
                backgroundImage: "linear-gradient(135deg, #8fb832, #4a5e1e)"
              }}>
                Aluminum
              </span>
              <span className="block">Gates</span>
            </h1>
            <p className="text-lg text-[#f5f0e8]/65 mb-10 max-w-lg leading-relaxed">
              The only gate built with foam-core aluminum slats — giving you the natural look of wood
              with zero rot, zero rust, and zero maintenance. Engineered for Canadian winters.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a href="#products" className="bg-[#4a5e1e] hover:bg-[#5d7626] text-white font-bold px-8 py-4 rounded-xl transition-all text-sm shadow-lg shadow-[#4a5e1e]/30">
              Browse Gates →
            </a>
            <a href="#contact" className="border border-[#f5f0e8]/20 hover:border-[#f5f0e8]/40 hover:bg-white/5 text-[#f5f0e8] font-semibold px-8 py-4 rounded-xl transition-all text-sm">
              Request a Quote
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 pt-8 border-t border-white/8"
          >
            {[
              { value: "50+", label: "Years in Aluminum" },
              { value: "9", label: "Colour Options" },
              { value: "4", label: "Gate Styles" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black text-[#8fb832]">{s.value}</div>
                <div className="text-xs text-[#f5f0e8]/45 mt-1 leading-snug">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: gate visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="hidden lg:block"
        >
          <GateVisual />

          {/* Label badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-8 mx-auto max-w-xs bg-[#242424] border border-white/8 rounded-xl p-4 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-[#4a5e1e]/20 flex items-center justify-center text-lg flex-shrink-0">
              ✓
            </div>
            <div>
              <div className="text-sm font-bold text-[#f5f0e8]">Foam-Core Slat Technology</div>
              <div className="text-xs text-[#f5f0e8]/45">Patented · First in the industry</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-10 bg-gradient-to-b from-[#8fb832] to-transparent"
        />
      </motion.div>
    </section>
  );
}
