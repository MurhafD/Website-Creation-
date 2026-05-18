"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";

// Map your photos: place files in /public/images/ with these exact names
const photos = [
  {
    src: "/images/gate-backyard-walnut.jpg",
    label: "Backyard Gate",
    colour: "Dark Walnut",
    accent: "#3d1c0a",
    span: "col-span-1 row-span-2", // tall
  },
  {
    src: "/images/gate-fence-grey.jpg",
    label: "Privacy Fence & Gate",
    colour: "Driftwood Grey",
    accent: "#9b8e7e",
    span: "col-span-1",
  },
  {
    src: "/images/gate-double-night.jpg",
    label: "Double Gate",
    colour: "Teak — Night shot",
    accent: "#5a3010",
    span: "col-span-1",
  },
  {
    src: "/images/gate-sliding-dark.jpg",
    label: "Sliding Gate",
    colour: "Dark Walnut",
    accent: "#2d1408",
    span: "col-span-1",
  },
  {
    src: "/images/gate-fence-driftwood.jpg",
    label: "Backyard Fence & Gate",
    colour: "Driftwood Grey",
    accent: "#9b8e7e",
    span: "col-span-1 row-span-2", // tall
  },
  {
    src: "/images/gate-sliding-charcoal.jpg",
    label: "Sliding Gate — Automatic",
    colour: "Charcoal Black",
    accent: "#2c2c2c",
    span: "col-span-1",
  },
  {
    src: "/images/gate-vertical-oak.jpg",
    label: "Backyard Fence & Gate",
    colour: "Light Oak",
    accent: "#c8955a",
    span: "col-span-1",
  },
  {
    src: "/images/gate-commercial.jpg",
    label: "Commercial Gate",
    colour: "Charcoal Black",
    accent: "#2c2c2c",
    span: "col-span-1",
  },
];

function Photo({ photo, index }: { photo: (typeof photos)[0]; index: number }) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: (index % 4) * 0.07 }}
      className={`group relative rounded-2xl overflow-hidden bg-[#242424] ${photo.span} min-h-[220px]`}
    >
      {/* CSS placeholder — looks like the actual product */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${loaded && !errored ? "opacity-0" : "opacity-100"}`}
        style={{ backgroundColor: photo.accent }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(180deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 32px, rgba(0,0,0,0.22) 32px, rgba(0,0,0,0.22) 36px)",
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 6px, rgba(0,0,0,0.07) 6px, rgba(0,0,0,0.07) 7px)",
        }} />
        {/* Frame sim */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-[#222]" />
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#222]" />
        <div className="absolute top-0 bottom-0 left-0 w-4 bg-[#222]" />
        <div className="absolute top-0 bottom-0 right-0 w-4 bg-[#222]" />
        {errored && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
            <span className="text-white/20 text-3xl">🚧</span>
            <span className="text-white/20 text-xs font-mono">Add photo →<br/>{photo.src}</span>
          </div>
        )}
      </div>

      {/* Real photo */}
      <img
        src={photo.src}
        alt={`${photo.label} — ${photo.colour}`}
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
          loaded && !errored ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="text-sm font-bold text-white">{photo.label}</div>
        <div className="text-xs text-white/60 mt-0.5">{photo.colour}</div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="gallery" className="py-28 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#8fb832] text-sm font-semibold tracking-widest uppercase">
            Real Installations
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#f5f0e8] mt-3 mb-4">
            See Them in the Real World
          </h2>
          <p className="text-[#f5f0e8]/60 max-w-xl mx-auto">
            Installed across Canada and the United States. Every gate is custom-built to your opening,
            colour, and configuration.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-auto gap-4 auto-rows-[220px]">
          {photos.map((p, i) => (
            <Photo key={i} photo={p} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block bg-[#4a5e1e] hover:bg-[#5d7626] text-white font-bold px-10 py-4 rounded-xl transition-colors text-sm shadow-lg shadow-[#4a5e1e]/20"
          >
            Get a Quote for Your Property →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
