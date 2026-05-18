"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end"
        >
          <a
            href="tel:+14163029097"
            className="flex items-center gap-2 bg-[#2a2a2a] hover:bg-[#333] border border-white/10 text-[#f5f0e8] text-sm font-semibold px-4 py-3 rounded-full shadow-xl transition-colors"
          >
            <span>📞</span>
            <span className="hidden sm:inline">+1 (416) 302-9097</span>
            <span className="sm:hidden">Call</span>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 bg-[#4a5e1e] hover:bg-[#5d7626] text-white text-sm font-bold px-5 py-3 rounded-full shadow-xl transition-colors"
          >
            <span>💬</span>
            Get a Quote
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
