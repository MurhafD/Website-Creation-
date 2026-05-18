export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <img src="/HD.png" alt="PrimeAlux" className="h-10 w-auto mb-4" />
            <p className="text-sm text-[#f5f0e8]/40 leading-relaxed max-w-xs">
              Canadian manufacturer of premium aluminum gates, fences, pergolas, and outdoor structures.
              Nearly 50 years of aluminum expertise.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#f5f0e8] mb-4 text-sm uppercase tracking-wider">Gate Types</h4>
            <ul className="space-y-2 text-sm text-[#f5f0e8]/50">
              <li><a href="#products" className="hover:text-[#8fb832] transition-colors">Sliding Gate (Manual)</a></li>
              <li><a href="#products" className="hover:text-[#8fb832] transition-colors">Sliding Gate (Automatic)</a></li>
              <li><a href="#products" className="hover:text-[#8fb832] transition-colors">Backyard Gate</a></li>
              <li><a href="#products" className="hover:text-[#8fb832] transition-colors">Sloped Gate</a></li>
              <li><a href="#contact" className="hover:text-[#8fb832] transition-colors">Custom Orders</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#f5f0e8] mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-[#f5f0e8]/50">
              <li>
                <a href="tel:+14163029097" className="hover:text-[#8fb832] transition-colors">
                  📞 +1 (416) 302-9097
                </a>
              </li>
              <li>
                <a href="mailto:info@primealux.com" className="hover:text-[#8fb832] transition-colors">
                  ✉️ info@primealux.com
                </a>
              </li>
              <li className="text-[#f5f0e8]/40">🍁 Serving Canada & the United States</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#f5f0e8]/30">
          <span>© {new Date().getFullYear()} PrimeAlux. All rights reserved.</span>
          <span>Durable · Affordable · Green</span>
        </div>
      </div>
    </footer>
  );
}
