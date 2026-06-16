import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import AiChat from "@/components/AiChat";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://qxldiagnostics.com"),
  title: {
    default: "QXL Diagnostics | NABL Certified Lab in Bengaluru — Advanced Diagnostic Testing",
    template: "%s | QXL Diagnostics Bengaluru",
  },
  description:
    "QXL Diagnostics Super Speciality Lab in Bengaluru — NABL certified, 300+ tests, home collection, same-day reports. Expert pathologists, advanced diagnostic panels for neurology, cardiology, oncology, and more.",
  keywords: [
    "diagnostic lab Bengaluru",
    "NABL certified lab Bangalore",
    "blood test Bangalore",
    "home collection blood test",
    "QXL Diagnostics",
    "pathology lab Kengeri",
    "full body checkup Bangalore",
    "thyroid test Bangalore",
    "cancer markers Bangalore",
    "health packages Bengaluru",
  ],
  authors: [{ name: "QXL Diagnostics" }],
  creator: "QXL Diagnostics",
  publisher: "Qualitify Healthtech Pvt Ltd",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://qxldiagnostics.com",
    siteName: "QXL Diagnostics",
    title: "QXL Diagnostics | NABL Certified Diagnostic Lab Bengaluru",
    description:
      "Advanced diagnostic testing in Bengaluru. NABL certified, home collection, 300+ tests, same-day digital reports. Book now at +91 99646 39639.",
    images: [
      {
        url: "/images/banners/qxl_hero_1_1781507207090.png",
        width: 1200,
        height: 630,
        alt: "QXL Diagnostics Lab Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QXL Diagnostics | NABL Certified Lab Bengaluru",
    description:
      "NABL certified diagnostic lab in Bengaluru. Home collection, 300+ tests, same-day reports.",
    images: ["/images/banners/qxl_hero_1_1781507207090.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

// JSON-LD Structured Data
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "QXL Diagnostics Super Speciality Lab",
  alternateName: "QXL Diagnostics",
  description:
    "NABL certified diagnostic super speciality lab in Bengaluru offering 300+ tests, home sample collection, and same-day digital reports.",
  url: "https://qxldiagnostics.com",
  telephone: "+91-99646-39639",
  email: "qxldiagnostics@gmail.com",
  logo: "https://qxldiagnostics.com/image/Logo (1).png",
  medicalSpecialty: [
    "Neurology", "Hematology", "Cardiology", "Urology", "Endocrinology",
    "Oncology", "Infectious Disease", "Women's Health", "Gastroenterology", "Bone Disorders"
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "07:00",
      closes: "14:00",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "3rd Floor, SLN Complex, Mysore Road, Kengeri",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560060",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.9113827,
    longitude: 77.4850301,
  },
  priceRange: "₹₹",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "500",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does QXL Diagnostics provide home sample collection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, QXL Diagnostics provides free home sample collection across Bengaluru. Our certified phlebotomists will visit at your preferred time. Book via WhatsApp or call +91 99646 39639.",
      },
    },
    {
      "@type": "Question",
      name: "Is QXL Diagnostics NABL certified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, QXL Diagnostics is NABL certified and follows ISO 15189 standards for medical laboratory testing, ensuring the highest quality and accuracy of results.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly does QXL Diagnostics provide reports?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "QXL Diagnostics provides same-day digital reports for most routine tests. Reports are delivered via email and WhatsApp, and can also be downloaded from the patient portal.",
      },
    },
    {
      "@type": "Question",
      name: "Where is QXL Diagnostics located in Bengaluru?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "QXL Diagnostics has two centers: Main Lab at 3rd Floor, SLN Complex, Mysore Road, Kengeri, Bengaluru 560060, and North Hub at L Square, opposite RMZ Galleria Mall, Yelahanka, Bengaluru 560064.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main>{children}</main>
        <Footer />
        <AiChat />
        <Script src="/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
