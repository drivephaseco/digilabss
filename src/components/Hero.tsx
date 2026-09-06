"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative hero-gradient text-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block bg-white/10 backdrop-blur px-3 py-1 rounded-full text-xs uppercase tracking-wider mb-6">
            ASTM • ASME Certified
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Premium Stainless Steel Flanges for Middle East Industry
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-md">
            High-grade 304, 316 & 316L flanges engineered for oil, gas, and water treatment infrastructure across Saudi Arabia and the UAE.
          </p>
          <a
            href="#enquiry"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-all"
          >
            Request a Catalogue <ArrowRight className="w-4 h-4" />
          </a>
        </m.div>

        <m.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative h-[320px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl border border-white/10"
        >
          <Image
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_24878ae6d9_5afeb9f34edcf4d5.png"
            alt="Professional industrial photography of high-grade stainless steel flanges stacked on a rack"
            priority
          />
        </m.div>
      </div>
    </section>
  );
}
