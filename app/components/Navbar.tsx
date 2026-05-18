"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Products", href: "#products" },
  { label: "Technology", href: "#technology" },
  { label: "Gallery", href: "#gallery" },
  { label: "Colours", href: "#colours" },
  { label: "Specs", href: "#specs" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1a1a1a]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="PrimeAlux"
            className="h-10 w-auto"
            onError={(e) => {
              const t = e.currentTarget;
              t.style.display = "none";
              const fallback = t.nextElementSibling as HTMLElement | null;
              if (fallback) fallback.style.display = "flex";
            }}
          />
          <div className="hidden items-center gap-2">
            <div className="w-8 h-8 bg-[#4a5e1e] rounded flex items-center justify-center text-white font-bold text-sm">P</div>
            <span className="font-bold text-[#f5f0e8] text-lg tracking-tight">PrimeAlux</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#f5f0e8]/70 hover:text-[#8fb832] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#4a5e1e] hover:bg-[#5d7626] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Get a Quote
          </a>
        </div>

        <button
          className="md:hidden text-[#f5f0e8] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1a1a1a] border-t border-white/10"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#f5f0e8]/80 hover:text-[#8fb832] font-medium transition-colors py-1"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="bg-[#4a5e1e] text-white text-center font-semibold px-5 py-3 rounded-lg mt-2"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
