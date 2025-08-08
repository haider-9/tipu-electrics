import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Tipu Electrics - Professional Electrical Services in Lahore, Pakistan",
    template: "%s | Tipu Electrics"
  },
  description: "Professional electrical contractor in Lahore, Pakistan. Licensed electricians providing residential & commercial electrical services, emergency repairs, panel upgrades, and lighting installation. Available 24/7. Call 0317-4636995",
  keywords: [
    "electrician Lahore",
    "electrical services Pakistan", 
    "emergency electrician Lahore",
    "residential electrical work",
    "commercial electrical contractor",
    "electrical panel upgrade",
    "lighting installation Lahore",
    "licensed electrician Pakistan",
    "24/7 electrical repair",
    "Tipu Electrics"
  ],
  authors: [{ name: "Tipu Electrics" }],
  creator: "Tipu Electrics",
  publisher: "Tipu Electrics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tipuelectrics.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Tipu Electrics - Professional Electrical Services in Lahore",
    description: "Licensed electrical contractor in Lahore, Pakistan. Residential & commercial electrical services, emergency repairs, panel upgrades. Available 24/7. Call 0317-4636995",
    url: 'https://tipuelectrics.com',
    siteName: 'Tipu Electrics',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tipu Electrics - Professional Electrical Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tipu Electrics - Professional Electrical Services in Lahore',
    description: 'Licensed electrical contractor in Lahore, Pakistan. Available 24/7 for all electrical needs. Call 0317-4636995',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#10b981" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
