"use client";
import { motion } from "framer-motion";

const benefits = [
  { icon: "🏭", text: "Made in Canada" },
  { icon: "🔩", text: "Rust & Rot Proof" },
  { icon: "🎨", text: "9 Colour Options" },
  { icon: "📐", text: "Custom Sizes" },
  { icon: "❄️", text: "Winter Rated" },
  { icon: "⚙️", text: "Manual & Automatic" },
  { icon: "🚚", text: "Ships Across North America" },
  { icon: "🛠️", text: "Easy Installation" },
];

export default function Benefits() {
  return (
    <div className="bg-[#4a5e1e] py-4 overflow-hidden">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex gap-10 whitespace-nowrap"
        style={{ width: "max-content" }}
      >
        {[...benefits, ...benefits].map((b, i) => (
          <span key={i} className="flex items-center gap-2 text-sm font-semibold text-white/90">
            <span>{b.icon}</span>
            <span>{b.text}</span>
            <span className="text-white/30 mx-2">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
