"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";

const photos = [
  {
    id: 1,
    src: "/images/gate-1.jpg",
    alt: "Backyard gate with dark walnut wood-grain slats and charcoal aluminum frame",
    label: "Backyard Gate — Dark Walnut",
    accent: "#3d1c0a",
  },
  {
    id: 2,
    src: "/images/gate-2.jpg",
    alt: "Privacy fence with driftwood grey slats and black frame on artificial turf",
    label: "Privacy Gate — Driftwood Grey",
    accent: "#9b8e7e",
  },
  {
    id: 3,
    src: "/images/gate-3.jpg",
    alt: "Double swing gate with warm brown wood-grain slats lit at night",
    label: "Double Swing Gate — Teak",
    accent: "#7a3b1e",
  },
  {
    id: 4,
    src: "/images/gate-4.jpg",
    alt: "Single backyard gate with espresso slats and charcoal frame",
    label: "Backyard Gate — Espresso",
    accent: "#2d1a0e",
  },
  {
    id: 5,
    src: "/images/gate-5.jpg",
    alt: "Wide sliding gate installation with dark brown wood-grain finish",
    label: "Sliding Gate — Dark Walnut",
    accent: "#3d1c0a",
  },
  {
    id: 6,
    src: "/images/gate-6.jpg",
    alt: "Charcoal black commercial gate with glass panel inserts",
    label: "Commercial Gate — Charcoal Black",
    accent: "#2c2c2c",
  },
  {
    id: 7,
    src: "/images/gate-7.jpg",
    alt: "Open-slat louvered gate with teak finish in urban setting",
    label: "Open-Slat Gate — Teak",
    accent: "#8b4513",
  },
  {
    id: 8,
    src: "/images/gate-8.jpg",
    alt: "Sloped driveway gate with teak wood-grain slats",
    label: "Sloped Gate — Teak",
    accent: "#8b4513",
  },
];

function PhotoSlot({
  photo,
  index,
}: {
  photo: (typeof photos)[0];
  index: number;
}) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-[#2a2a2a]"
    >
      {/* Placeholder shown while image loads or if missing */}
      {(!loaded || errored) && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center"
          style={{ backgroundColor: photo.accent }}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `repeating-linear-gradient(
                180deg,
                rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 34px,
                rgba(0,0,0,0.25) 34px, rgba(0,0,0,0.25) 38px
              )`,
            }}
          />
          {/* Frame simulation */}
          <div className="absolute top-0 left-0 right-0 h-5 bg-[#2a2a2a] opacity-70" />
          <div className="absolute bottom-0 left-0 right-0 h-5 bg-[#2a2a2a] opacity-70" />
          <div className="absolute top-0 bottom-0 left-0 w-5 bg-[#2a2a2a] opacity-70" />
          <div className="absolute top-0 bottom-0 right-0 w-5 bg-[#2a2a2a] opacity-70" />
          {errored && (
            <div className="relative z-10 text-center px-4">
              <div className="text-2xl mb-2 opacity-40">📷</div>
              <div className="text-xs text-white/40 font-mono">
                {photo.src.replace("/images/", "")}
              </div>
            </div>
          )}
        </div>
      )}

      <img
        src={photo.src}
        alt={photo.alt}
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
          loaded && !errored ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Overlay label */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <span className="text-sm font-semibold text-white">{photo.label}</span>
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
            Every gate is custom-built and installed across Canada and the United States.
            Here&apos;s what our customers are living with every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {photos.map((p, i) => (
            <PhotoSlot key={p.id} photo={p} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="#contact"
            className="inline-block bg-[#4a5e1e] hover:bg-[#5d7626] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-sm"
          >
            Get a Quote for Your Property →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
