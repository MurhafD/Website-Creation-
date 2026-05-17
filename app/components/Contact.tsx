"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const gateTypes = [
  "Sliding Gate (Manual)",
  "Sliding Gate (Automatic)",
  "Backyard Gate",
  "Sloped Gate",
  "Not sure — need advice",
];

const sizes = ["6′H × 3′W", "6′H × 4′W", "4′H × 4′W", "Custom Size"];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    gateType: "",
    size: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Gate Quote Request – ${form.gateType || "General Inquiry"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nGate Type: ${form.gateType}\nSize: ${form.size}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:info@primealux.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-28 bg-[#222222]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#8fb832] text-sm font-semibold tracking-widest uppercase">Get in Touch</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#f5f0e8] mt-3 mb-4">
            Request a Quote
          </h2>
          <p className="text-[#f5f0e8]/60 max-w-xl mx-auto">
            Tell us about your project and we&apos;ll get back to you with pricing and options.
            No obligation — just honest answers from the manufacturer.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-bold text-[#f5f0e8] mb-4 text-lg">Contact Us Directly</h3>
              <div className="space-y-4">
                <a
                  href="tel:+14163029097"
                  className="flex items-center gap-4 p-4 bg-[#2a2a2a] rounded-xl border border-white/5 hover:border-[#4a5e1e]/40 transition-colors group"
                >
                  <div className="w-10 h-10 bg-[#4a5e1e]/20 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <div className="text-xs text-[#f5f0e8]/40 mb-0.5">Phone / WhatsApp</div>
                    <div className="font-semibold text-[#f5f0e8] group-hover:text-[#8fb832] transition-colors">
                      +1 (416) 302-9097
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@primealux.com"
                  className="flex items-center gap-4 p-4 bg-[#2a2a2a] rounded-xl border border-white/5 hover:border-[#4a5e1e]/40 transition-colors group"
                >
                  <div className="w-10 h-10 bg-[#4a5e1e]/20 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <div className="text-xs text-[#f5f0e8]/40 mb-0.5">Email</div>
                    <div className="font-semibold text-[#f5f0e8] group-hover:text-[#8fb832] transition-colors">
                      info@primealux.com
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-5 bg-[#4a5e1e]/10 border border-[#4a5e1e]/20 rounded-xl">
              <div className="font-bold text-[#f5f0e8] mb-2">Serving All of Canada & the US</div>
              <p className="text-sm text-[#f5f0e8]/55 leading-relaxed">
                We ship nationwide across Canada and the United States. Lead times vary by gate type and size —
                contact us for current availability.
              </p>
            </div>

            <div className="p-5 bg-[#2a2a2a] border border-white/5 rounded-xl">
              <div className="font-bold text-[#f5f0e8] mb-2">What to Include</div>
              <ul className="text-sm text-[#f5f0e8]/55 space-y-1.5">
                <li>• Gate type (sliding, backyard, sloped)</li>
                <li>• Opening width and height</li>
                <li>• Preferred colour(s)</li>
                <li>• Manual or automatic</li>
                <li>• Your location / province / state</li>
              </ul>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="h-full flex items-center justify-center text-center p-10 bg-[#2a2a2a] rounded-2xl border border-[#4a5e1e]/30">
                <div>
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-[#f5f0e8] mb-2">Your email client should open</h3>
                  <p className="text-[#f5f0e8]/55 text-sm">
                    Your details have been prepared. If your email client didn&apos;t open, please email us directly at{" "}
                    <a href="mailto:info@primealux.com" className="text-[#8fb832]">info@primealux.com</a>
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#2a2a2a] rounded-2xl border border-white/5 p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#f5f0e8]/50 mb-2 uppercase tracking-wider">Name *</label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-[#f5f0e8] placeholder-[#f5f0e8]/25 text-sm focus:outline-none focus:border-[#4a5e1e] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#f5f0e8]/50 mb-2 uppercase tracking-wider">Email *</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-[#f5f0e8] placeholder-[#f5f0e8]/25 text-sm focus:outline-none focus:border-[#4a5e1e] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#f5f0e8]/50 mb-2 uppercase tracking-wider">Phone</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (000) 000-0000"
                      className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-[#f5f0e8] placeholder-[#f5f0e8]/25 text-sm focus:outline-none focus:border-[#4a5e1e] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#f5f0e8]/50 mb-2 uppercase tracking-wider">Gate Type</label>
                    <select
                      name="gateType"
                      value={form.gateType}
                      onChange={handleChange}
                      className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-[#f5f0e8] text-sm focus:outline-none focus:border-[#4a5e1e] transition-colors"
                    >
                      <option value="">Select a gate type</option>
                      {gateTypes.map((g) => <option key={g} value={g}>{g}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#f5f0e8]/50 mb-2 uppercase tracking-wider">Size</label>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setForm((p) => ({ ...p, size: s }))}
                        className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                          form.size === s
                            ? "bg-[#4a5e1e] border-[#4a5e1e] text-white"
                            : "bg-transparent border-white/15 text-[#f5f0e8]/60 hover:border-white/30"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#f5f0e8]/50 mb-2 uppercase tracking-wider">Message / Details</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project — colour preference, location, special requirements..."
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-[#f5f0e8] placeholder-[#f5f0e8]/25 text-sm focus:outline-none focus:border-[#4a5e1e] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#4a5e1e] hover:bg-[#5d7626] text-white font-bold py-4 rounded-xl transition-colors text-sm tracking-wide"
                >
                  Send Quote Request →
                </button>

                <p className="text-xs text-[#f5f0e8]/30 text-center">
                  We typically respond within 1 business day.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
