import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXX";

export const metadata: Metadata = {
  metadataBase: new URL("https://digilabss.vercel.app"),
  title: "Premium Stainless Steel Flanges | Bhansali Stainless - Saudi Arabia & UAE",
  description:
    "Industrial-grade 304, 316 & 316L stainless steel flanges exported to Saudi Arabia, UAE, Qatar, and Oman. ASTM/ISO certified. Bulk and container shipping with full documentation.",
  keywords: [
    "stainless steel flanges",
    "304 flanges",
    "316 flanges",
    "316L flanges",
    "stainless steel exporter Saudi Arabia",
    "stainless steel exporter UAE",
    "flange supplier Middle East",
  ],
  openGraph: {
    title: "Premium Stainless Steel Flanges | Bhansali Stainless",
    description:
      "High-grade 304, 316 & 316L flanges engineered for oil, gas, and water treatment infrastructure across Saudi Arabia and the UAE.",
    url: "https://digilabss.vercel.app",
    siteName: "Bhansali Stainless",
    type: "website",
    images: [
      {
        url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_24878ae6d9_5afeb9f34edcf4d5.png",
        width: 1200,
        height: 630,
        alt: "Stainless steel flanges stacked on an industrial rack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Stainless Steel Flanges | Bhansali Stainless",
    description:
      "High-grade 304, 316 & 316L flanges for industrial buyers across the Middle East.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- App Router layout, not pages/_document.js */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
