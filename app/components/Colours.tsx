"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const colours = [
  {
    id: "dark-walnut",
    name: "Dark Walnut",
    type: "Wood Grain",
    hex: "#3d1c0a",
    stripe: ["#3d1c0a", "#2a1208", "#4a2210", "#3d1c0a"],
  },
  {
    id: "teak",
    name: "Teak",
    type: "Wood Grain",
    hex: "#8b4513",
    stripe: ["#8b4513", "#6b340f", "#9e5018", "#8b4513"],
  },
  {
    id: "driftwood",
    name: "Driftwood Grey",
    type: "Wood Grain",
    hex: "#9b8e7e",
    stripe: ["#9b8e7e", "#857970", "#a89888", "#9b8e7e"],
  },
  {
    id: "light-oak",
    name: "Light Oak",
    type: "Wood Grain",
    hex: "#c8955a",
    stripe: ["#c8955a", "#b07a42", "#d8a870", "#c8955a"],
  },
  {
    id: "charcoal",
    name: "Charcoal Black",
    type: "Solid",
    hex: "#2c2c2c",
    stripe: ["#2c2c2c", "#222222", "#343434", "#2c2c2c"],
  },
  {
    id: "slate",
    name: "Slate Grey",
    type: "Solid",
    hex: "#5a6072",
    stripe: ["#5a6072", "#4a5060", "#6a7082", "#5a6072"],
  },
  {
    id: "cedar",
    name: "Cedar",
    type: "Wood Grain",
    hex: "#a0522d",
    stripe: ["#a0522d", "#884420", "#b86035", "#a0522d"],
  },
  {
    id: "espresso",
    name: "Espresso",
    type: "Wood Grain",
    hex: "#2d1a0e",
    stripe: ["#2d1a0e", "#200e06", "#3a2214", "#2d1a0e"],
  },
  {
    id: "sandstone",
    name: "Sandstone",
    type: "Wood Grain",
    hex: "#c2a878",
    stripe: ["#c2a878", "#a88c60", "#d4bc90", "#c2a878"],
  },
];

function ColourSwatch({
  colour,
  selected,
  onClick,
}: {
  colour: (typeof colours)[0];
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-200 ${
        selected ? "ring-2 ring-[#8fb832] ring-offset-2 ring-offset-[#1a1a1a]" : "ring-1 ring-white/10"
      }`}
    >
      {/* Wood grain / solid swatch */}
      <div className="h-20 relative overflow-hidden">
        <div className="absolute inset-0 flex">
          {colour.stripe.map((c, i) => (
            <div key={i} className="flex-1" style={{ backgroundColor: c }} />
          ))}
        </div>
        {colour.type === "Wood Grain" && (
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 4px,
                rgba(0,0,0,0.3) 4px,
                rgba(0,0,0,0.3) 5px
              )`,
            }}
          />
        )}
        {selected && (
          <div className="absolute inset-0 bg-[#8fb832]/20 flex items-center justify-center">
            <span className="text-white text-xl">✓</span>
          </div>
        )}
      </div>
      <div className="bg-[#2a2a2a] p-2 text-left">
        <div className="text-xs font-semibold text-[#f5f0e8] truncate">{colour.name}</div>
        <div className="text-[10px] text-[#f5f0e8]/40">{colour.type}</div>
      </div>
    </motion.button>
  );
}

export default function Colours() {
  const [selected, setSelected] = useState("dark-walnut");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const activeColour = colours.find((c) => c.id === selected)!;

  return (
    <section id="colours" className="py-28 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#8fb832] text-sm font-semibold tracking-widest uppercase">Colour Options</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#f5f0e8] mt-3 mb-4">
            9 Colours. 7 Wood Grains.
          </h2>
          <p className="text-[#f5f0e8]/60 max-w-xl mx-auto">
            Every colour is available across all gate types and sizes. Select a colour below to preview.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Preview panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="rounded-2xl overflow-hidden bg-[#222] border border-white/5">
              <div className="h-64 relative overflow-hidden" style={{ backgroundColor: activeColour.hex }}>
                <div className="absolute inset-0 flex">
                  {activeColour.stripe.map((c, i) => (
                    <div key={i} className="flex-1" style={{ backgroundColor: c }} />
                  ))}
                </div>
                {activeColour.type === "Wood Grain" && (
                  <div
                    className="absolute inset-0 opacity-25"
                    style={{
                      backgroundImage: `repeating-linear-gradient(
                        90deg, transparent, transparent 5px, rgba(0,0,0,0.35) 5px, rgba(0,0,0,0.35) 6px
                      )`,
                    }}
                  />
                )}
                {/* Frame sim */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-0 right-0 h-6 bg-[#2a2a2a]" />
                  <div className="absolute bottom-0 left-0 right-0 h-6 bg-[#2a2a2a]" />
                  <div className="absolute top-0 bottom-0 left-0 w-6 bg-[#2a2a2a]" />
                  <div className="absolute top-0 bottom-0 right-0 w-6 bg-[#2a2a2a]" />
                </div>
              </div>
              <div className="p-5">
                <div className="text-lg font-bold text-[#f5f0e8]">{activeColour.name}</div>
                <div className="text-sm text-[#8fb832]">{activeColour.type}</div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: activeColour.hex }} />
                  <span className="text-xs text-[#f5f0e8]/40 font-mono">{activeColour.hex.toUpperCase()}</span>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-4 block w-full text-center bg-[#4a5e1e] hover:bg-[#5d7626] text-white font-semibold py-3 rounded-xl transition-colors text-sm"
            >
              Request This Colour
            </a>
          </motion.div>

          {/* Swatches grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {colours.map((c) => (
                <ColourSwatch
                  key={c.id}
                  colour={c}
                  selected={selected === c.id}
                  onClick={() => setSelected(c.id)}
                />
              ))}
            </div>
            <p className="text-xs text-[#f5f0e8]/30 mt-4">
              * Colours shown are representative. Request physical samples for accurate colour matching.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
