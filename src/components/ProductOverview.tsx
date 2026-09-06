"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "fa-droplet",
    title: "Corrosion Resistant",
    body: "Ideal for coastal and chemical processing applications in the Gulf region.",
  },
  {
    icon: "fa-temperature-high",
    title: "High-Temp Rated",
    body: "Maintains strength from cryogenic temps up to 870\u00b0C.",
  },
  {
    icon: "fa-certificate",
    title: "Fully Traceable",
    body: "Mill test certificates and heat-number tracking on every batch.",
  },
  {
    icon: "fa-truck-fast",
    title: "Fast Regional Delivery",
    body: "Stocked in Dubai and Dammam for rapid project turnaround.",
  },
];

export default function ProductOverview() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold mb-6">Engineered for Harsh Environments</h2>
            <p className="text-secondary mb-6">
              Our stainless steel flanges meet international standards for corrosion resistance and structural integrity under high pressure.
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-primary" /> Pressure Class 150 – 2500
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-primary" /> Sizes ½″ – 72″
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-primary" /> Weld Neck, Blind, Slip-On
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="border border-gray-100 p-6 rounded spec-card"
              >
                <i className={`fa-solid ${feature.icon} text-primary text-2xl mb-4`} />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-secondary">{feature.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
