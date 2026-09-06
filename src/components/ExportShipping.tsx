import Image from "next/image";
import { PackageOpen, FileText } from "lucide-react";

export default function ExportShipping() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full h-[260px] md:h-[360px] rounded-lg overflow-hidden shadow-lg">
          <Image
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={65}
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_14a2e030c7_33a27d542eb5aec9.png"
            alt="Shipping container vessel at a Middle Eastern port at dusk"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Export & Shipping Across the Region</h2>
          <p className="text-secondary mb-8">
            We ship stainless steel flanges directly to major industrial hubs including Jebel Ali, Dammam, and Jeddah ports with full documentation.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded">
                <PackageOpen className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Bulk & Container Loads</h4>
                <p className="text-sm text-secondary">Palletized or loose-container packing per your site requirements.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Complete Documentation</h4>
                <p className="text-sm text-secondary">Commercial invoice, packing list, and mill certificates included.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
