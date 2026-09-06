import { ShieldCheck, Award, Stamp, Globe, type LucideIcon } from "lucide-react";

const badges: { icon: LucideIcon; label: string }[] = [
  { icon: ShieldCheck, label: "ASTM" },
  { icon: Award, label: "ISO 9001" },
  { icon: Stamp, label: "CE" },
  { icon: Globe, label: "PED" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <p className="text-sm uppercase tracking-widest text-secondary mb-8">Certified & Compliant</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80">
          {badges.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.label} className="flex items-center gap-3 text-2xl font-bold text-secondary">
                <Icon className="w-6 h-6" /> {b.label}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
