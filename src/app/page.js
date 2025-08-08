import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Professional Electrical Services in Lahore, Pakistan",
  description: "Tipu Electrics - Licensed electrical contractor in Lahore. Residential & commercial electrical services, emergency repairs, panel upgrades, lighting installation. Available 24/7. Call 0317-4636995",
  keywords: "electrician Lahore, electrical services Pakistan, emergency electrician, residential electrical, commercial electrical contractor",
  openGraph: {
    title: "Tipu Electrics - Professional Electrical Services in Lahore",
    description: "Licensed electrical contractor providing residential & commercial electrical services in Lahore, Pakistan. Available 24/7 for emergencies.",
    images: ['/og-home.jpg'],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesGrid />
      </main>
      <Footer />
    </div>
  );
}
