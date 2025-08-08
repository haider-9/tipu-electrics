"use client"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Zap,
  Home,
  Building,
  Lightbulb
} from "lucide-react";

const services = [
  {
    id: 1,
    name: "Home Electrical Work",
    description: "Wiring, outlets, and electrical repairs for homes",
    icon: Home,
    features: [
      "House wiring and rewiring",
      "Electrical panel upgrades",
      "Outlet and switch installation",
      "Circuit breaker repairs"
    ]
  },
  {
    id: 2,
    name: "Commercial Electrical",
    description: "Electrical services for businesses and offices",
    icon: Building,
    features: [
      "Office electrical installation",
      "Industrial electrical work",
      "Emergency lighting",
      "Electrical maintenance"
    ]
  },
  {
    id: 3,
    name: "Emergency Repairs",
    description: "24/7 electrical emergency services",
    icon: Zap,
    features: [
      "Power outage repairs",
      "Electrical fault diagnosis",
      "Safety hazard fixes",
      "Same-day service"
    ]
  },
  {
    id: 4,
    name: "Lighting Solutions",
    description: "LED installation and lighting design",
    icon: Lightbulb,
    features: [
      "LED light installation",
      "Outdoor lighting",
      "Ceiling fan installation",
      "Light fixture repairs"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero with diagonal split */}
        <section className="bg-gradient-to-br from-slate-100 via-slate-100 to-emerald-500 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-800 leading-tight">
                  Electrical Services
                  <span className="block text-emerald-500">You Can Trust</span>
                </h1>
                <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8">
                  From simple repairs to complex installations, we deliver professional electrical solutions across Lahore
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
                  <div className="px-6 py-3 bg-slate-800 text-white rounded-lg font-semibold text-sm">15+ Years Experience</div>
                  <div className="px-6 py-3 border-2 border-emerald-500 text-emerald-500 rounded-lg font-semibold text-sm">Licensed & Insured</div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl text-center flex flex-col items-center">
                <div className="text-4xl font-bold text-emerald-500 mb-2">24/7</div>
                <div className="text-base font-semibold text-slate-800 mb-2">Emergency Service</div>
                <p className="text-slate-400 text-sm mb-5">Electrical emergencies don&apos;t wait. Neither do we.</p>
                <a
                  href="tel:+923174636995"
                  className="bg-emerald-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow hover:-translate-y-0.5 transition-transform"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services in masonry layout */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-16">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className={`relative bg-white/80 ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'} rounded-xl border-2 border-slate-200 p-7 shadow-sm hover:border-emerald-500 hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
                  >
                    {/* Background pattern */}
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-emerald-500 opacity-10 rounded-full" />
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-tr from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6 shadow-md">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold mb-3 text-slate-800">{service.name}</h3>
                      <p className="text-slate-400 text-sm mb-5">{service.description}</p>
                      <div className="mb-4">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 mb-2">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                            <span className="text-xs text-slate-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <a
                        href="/contact"
                        className="inline-block px-4 py-2 bg-white text-emerald-500 border-2 border-emerald-500 rounded-full text-xs font-semibold hover:bg-emerald-50 transition"
                      >
                        Get Quote →
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center p-8 bg-slate-50 rounded-2xl border-2 border-dashed border-emerald-500">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-800">Ready to Get Started?</h3>
              <p className="text-base text-slate-400 mb-6">Contact us today for professional electrical services in Lahore</p>
              <a
                href="/contact"
                className="inline-block bg-gradient-to-tr from-emerald-500 to-emerald-600 text-white px-8 py-3 rounded-full text-base font-semibold shadow hover:-translate-y-0.5 transition-transform mr-4"
              >
                Contact Us
              </a>
              <a
                href="tel:+923174636995"
                className="text-emerald-500 font-semibold text-base hover:underline"
              >
                Or call: 0317-4636995
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
