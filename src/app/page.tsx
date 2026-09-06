import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductOverview from "@/components/ProductOverview";
import GradeSelector from "@/components/GradeSelector";
import SpecsTable from "@/components/SpecsTable";
import Certifications from "@/components/Certifications";
import ExportShipping from "@/components/ExportShipping";
import EnquiryForm from "@/components/EnquiryForm";
import FloatingContactWidget from "@/components/FloatingContactWidget";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";

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
