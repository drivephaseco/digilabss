"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Product Categories", href: "#", active: true },
  { label: "Technical Specs", href: "#technical-specs" },
  { label: "Certifications", href: "#certifications" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 shadow-lg">
      {/* Contact Strip */}
      <div className="bg-primary text-white py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex gap-6">
            <span>
              <i className="fa-solid fa-location-dot mr-2 text-secondary" /> Middle East Export Hub
            </span>
            <span className="hidden md:inline">
              <i className="fa-solid fa-truck-fast mr-2 text-secondary" /> Direct Shipping to KSA, UAE, Oman & Qatar
            </span>
          </div>
          <div className="flex gap-3 md:gap-5 items-center">
            <a href="mailto:sales@bhansalistainless.com" className="hover:text-secondary transition-colors">
              <i className="fa-solid fa-envelope mr-1.5" />
              <span className="hidden sm:inline">sales@bhansalistainless.com</span>
            </a>
            <a href="tel:+971501234567" className="hover:text-secondary transition-colors">
              <i className="fa-solid fa-phone mr-1.5" />
              <span className="hidden sm:inline">UAE: +971 50 123 4567</span>
            </a>
            <a href="tel:+966559876543" className="hover:text-secondary transition-colors hidden md:inline">
              <i className="fa-solid fa-phone mr-1.5" /> KSA: +966 55 987 6543
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="text-2xl font-black text-primary tracking-tighter flex items-center">
            <i className="fa-solid fa-cube text-3xl mr-2 text-secondary" />
            BHANSALI<span className="text-accent">STAINLESS</span>
          </div>

          <nav className="hidden md:flex gap-8 items-center text-xs font-bold uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  link.active
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-accent hover:text-primary transition-colors pb-1"
                }
              >
                {link.label}
              </a>
            ))}
            <div className="h-8 w-[1px] bg-gray-200 mx-2" />
            <a
              href="https://wa.me/966559876543"
              className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-full border border-green-200 hover:bg-green-100 transition-colors"
            >
              <i className="fa-brands fa-whatsapp text-lg" />
              <span>KSA Support</span>
            </a>
            <a
              href="#enquiry"
              className="bg-primary text-white px-6 py-3 rounded font-black hover:bg-blue-800 transition-all shadow-[0_4px_14px_0_rgba(30,58,138,0.39)]"
            >
              Get Bulk Quote
            </a>
          </nav>

          <button
            id="mobile-menu-btn"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden text-2xl text-accent"
          >
            <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 md:px-8 py-6 space-y-4 text-sm font-bold uppercase tracking-wider">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={link.active ? "block text-primary" : "block text-accent"}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/966559876543"
                className="flex items-center gap-2 text-green-600"
              >
                <i className="fa-brands fa-whatsapp text-lg" /> KSA Support
              </a>
              <a
                href="#enquiry"
                onClick={() => setMenuOpen(false)}
                className="block bg-primary text-white text-center px-6 py-3 rounded font-black"
              >
                Get Bulk Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
