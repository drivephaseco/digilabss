"use client";

import { motion } from "framer-motion";

const grades = [
  {
    grade: "304",
    standard: "AISI 304 / EN 1.4301",
    body: "General-purpose grade with excellent formability. Widely used in food, pharmaceutical, and architectural piping.",
    specs: ["Chromium: 18\u201320%", "Nickel: 8\u201310.5%", "Max Temp: 870\u00b0C"],
  },
  {
    grade: "316",
    standard: "AISI 316 / EN 1.4401",
    body: "Enhanced corrosion resistance with molybdenum. The standard choice for marine and chemical environments.",
    specs: ["Chromium: 16\u201318%", "Molybdenum: 2\u20133%", "Max Temp: 870\u00b0C"],
  },
  {
    grade: "316L",
    standard: "AISI 316L / EN 1.4404",
    body: "Low-carbon variant that prevents sensitization during welding. Preferred for critical welded assemblies.",
    specs: ["Carbon: \u2264 0.03%", "Molybdenum: 2\u20133%", "Max Temp: 870\u00b0C"],
  },
];

export default function GradeSelector() {
  return (
    <section id="grade-selector" className="py-16 md:py-20 bg-silver">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Select Your Grade</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Compare our most requested stainless steel flange grades to find the right specification for your pipeline system.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {grades.map((g) => (
            <motion.div
              key={g.grade}
              whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(30,58,138,0.25)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-primary cursor-pointer"
            >
              <div className="text-4xl font-bold text-primary mb-2">{g.grade}</div>
              <div className="text-sm text-secondary mb-6">{g.standard}</div>
              <p className="text-sm mb-6">{g.body}</p>
              <ul className="text-sm space-y-2 text-secondary">
                {g.specs.map((s) => (
                  <li key={s}>&bull; {s}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
