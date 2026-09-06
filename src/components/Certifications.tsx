const badges = [
  { icon: "fa-shield-halved", label: "ASTM" },
  { icon: "fa-award", label: "ISO 9001" },
  { icon: "fa-stamp", label: "CE" },
  { icon: "fa-globe", label: "PED" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <p className="text-sm uppercase tracking-widest text-secondary mb-8">Certified & Compliant</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80">
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-3 text-2xl font-bold text-secondary">
              <i className={`fa-solid ${b.icon}`} /> {b.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
