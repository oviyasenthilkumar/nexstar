import { Geist, Geist_Mono, League_Spartan, Sora } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";
import Header from "./components/Header";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NexStar Consulting",
  description:
    "NexStar Consulting provides Zoho solutions, RPA automation, and Applied AI services for scalable business operations in Dubai. Transform your business with cutting-edge technology solutions.",
  keywords:
    "Zoho consulting, RPA automation, Applied AI, business automation, Dubai consulting, scalable operations, business technology solutions",
  authors: [{ name: "NexStar Consulting" }],
  creator: "NexStar Consulting",
  publisher: "NexStar Consulting",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexstar-consulting.com",
    siteName: "NexStar Consulting",
    title:
      "NexStar Consulting — Zoho, RPA & Applied AI for Scalable Operations (Dubai)",
    description:
      "NexStar Consulting provides Zoho solutions, RPA automation, and Applied AI services for scalable business operations in Dubai. Transform your business with cutting-edge technology solutions.",
    images: [],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "NexStar Consulting — Zoho, RPA & Applied AI for Scalable Operations (Dubai)",
    description:
      "NexStar Consulting provides Zoho solutions, RPA automation, and Applied AI services for scalable business operations in Dubai.",
    images: [],
    creator: "@nexstar_consulting",
    site: "@nexstar_consulting",
  },
  alternates: {
    canonical: "https://nexstar-consulting.com",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://nexstar-consulting.com" />
        <link rel="manifest" href="/manifest.json" />

        {/* Override favicon with blank so browser shows globe */}
        <link rel="icon" href="data:;base64,iVBORw0KGgo=" />

        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />
        <meta name="theme-color" content="#545CF6" />
        <meta name="msapplication-TileColor" content="#545CF6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="NexStar Consulting" />

        {/* JSON-LD Schema Markup */}
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${leagueSpartan.variable} ${sora.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
