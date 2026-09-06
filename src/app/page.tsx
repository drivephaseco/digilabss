import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductOverview from "@/components/ProductOverview";
import GradeSelector from "@/components/GradeSelector";
import SpecsTable from "@/components/SpecsTable";
import Certifications from "@/components/Certifications";
import ExportShipping from "@/components/ExportShipping";
import FloatingContactWidget from "@/components/FloatingContactWidget";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import dynamic from "next/dynamic";

// Code-split react-hook-form + zod + resolver out of the initial bundle —
// nothing above the fold needs them, and they were flagged as ~150 KiB of
// unused JS on first load.
const EnquiryForm = dynamic(() => import("@/components/EnquiryForm"), {
  loading: () => (
    <section id="enquiry" className="py-16 md:py-24 bg-accent text-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8 animate-pulse">
        <div className="h-8 bg-white/10 rounded w-1/2 mx-auto mb-4" />
        <div className="h-4 bg-white/5 rounded w-2/3 mx-auto mb-12" />
        <div className="space-y-6">
          <div className="h-14 bg-white/5 rounded" />
          <div className="h-14 bg-white/5 rounded" />
          <div className="h-32 bg-white/5 rounded" />
          <div className="h-14 bg-white/10 rounded" />
        </div>
      </div>
    </section>
  ),
});

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Stainless Steel Flanges",
  description:
    "Industrial-grade 304, 316 & 316L stainless steel flanges for oil, gas, and water treatment infrastructure, exported to Saudi Arabia, UAE, Qatar, and Oman.",
  brand: { "@type": "Brand", name: "Bhansali Stainless" },
  category: "Industrial Pipe Fittings",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    areaServed: ["SA", "AE", "QA", "OM"],
  },
};

export default function Home() {
  return (
    <main className="bg-gray-50 text-accent">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <MotionProvider>
        <Header />
        <Hero />
        <ProductOverview />
        <GradeSelector />
        <SpecsTable />
        <Certifications />
        <ExportShipping />
        <EnquiryForm />
        <FloatingContactWidget />
        <Footer />
      </MotionProvider>
    </main>
  );
}
