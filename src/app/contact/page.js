'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactTeam from "@/components/ContactTeam";
import ContactForm from "@/components/ContactForm";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Zap
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "0317-4636995",
    description: "Call us anytime for immediate assistance",
    link: "tel:+923174636995"
  },
  {
    icon: Mail,
    title: "Email",
    details: "tipu672888@gmail.com",
    description: "Send us your questions or project details",
    link: "mailto:tipu672888@gmail.com"
  },
  {
    icon: MapPin,
    title: "Address",
    details: "123 Electronics St, Lahore, Pakistan",
    description: "Visit our office or we'll come to you"
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon-Fri: 9AM-7PM, Sat: 10AM-5PM",
    description: "Sunday: Closed | 24/7 Emergency Available"
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-50 via-emerald-50 to-emerald-500 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
              <div className="md:col-span-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-800 leading-tight">
                  Get In Touch
                  <span className="block text-emerald-500">With Our Team</span>
                </h1>
                <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8">
                  Professional electrical services and emergency repairs available 24/7 across Lahore
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
                  <a 
                    href="tel:+923174636995"
                    className="bg-gradient-to-tr from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 text-sm shadow hover:-translate-y-0.5 transition-transform"
                  >
                    <Phone className="w-5 h-5" />
                    Call: 0317-4636995
                  </a>
                  <div className="px-6 py-3 border-2 border-emerald-500 text-emerald-500 rounded-lg font-semibold text-sm">24/7 Emergency Available</div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl text-center flex flex-col items-center">
                <div className="text-4xl font-bold text-emerald-500 mb-2">15+</div>
                <div className="text-base font-semibold text-slate-800 mb-2">Years Experience</div>
                <p className="text-slate-400 text-sm mb-5">Trusted electrical contractor serving Lahore since 2009</p>
                <div className="bg-emerald-500 text-white px-4 py-2 rounded-full text-xs font-semibold inline-block">Licensed & Insured</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 mb-16">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const CardWrapper = info.link ? 'a' : 'div';
                const cardProps = info.link ? { href: info.link } : {};
                return (
                  <div 
                    key={index} 
                    className="bg-slate-50 hover:bg-white rounded-xl border-2 border-transparent hover:border-emerald-500 p-7 text-center shadow-sm hover:shadow-lg transition-all duration-300 group"
                  >
                    <CardWrapper {...cardProps} className="no-underline text-inherit">
                      <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-5 mx-auto">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-slate-800">{info.title}</h3>
                      <p className="font-semibold text-emerald-500 mb-1">{info.details}</p>
                      <p className="text-xs text-slate-400 leading-relaxed">{info.description}</p>
                    </CardWrapper>
                  </div>
                );
              })}
            </div>
            {/* Contact Form and Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <ContactForm />
              {/* Additional Info */}
              <div className="flex flex-col gap-8">
                <div className="bg-white p-8 rounded-xl shadow border border-slate-200">
                  <h3 className="text-lg font-bold mb-3 text-slate-800">Emergency Service</h3>
                  <p className="text-slate-400 mb-5 leading-relaxed">
                    Electrical emergencies can&apos;t wait. Our licensed electricians are available 24/7 for urgent electrical repairs and safety issues.
                  </p>
                  <a 
                    href="tel:+923174636995"
                    className="bg-emerald-500 text-white px-5 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 text-sm shadow hover:-translate-y-0.5 transition-transform"
                  >
                    <Phone className="w-4 h-4" />
                    Emergency: 0317-4636995
                  </a>
                </div>
                <div className="bg-white p-8 rounded-xl shadow border border-slate-200">
                  <h3 className="text-lg font-bold mb-3 text-slate-800">Our Promise</h3>
                  <p className="text-slate-400 mb-5 leading-relaxed">
                    We provide honest, reliable electrical services with transparent pricing and quality workmanship.
                  </p>
                  <div className="flex flex-col gap-2">
                    {['Professional assessment', 'Fair pricing', 'Quality guarantee', 'Licensed electricians'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                        <span className="text-xs text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow border border-slate-200">
                  <h3 className="text-lg font-bold mb-3 text-slate-800">Service Areas</h3>
                  <p className="text-slate-400 mb-5 leading-relaxed">
                    We proudly serve the following areas with professional electrical services:
                  </p>
                  <div className="flex flex-col gap-1">
                    {['Lahore City Center', 'DHA & Cantt Areas', 'Gulberg & Model Town', 'Industrial Areas', 'Surrounding Districts'].map((area, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        <span className="text-xs text-slate-600">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Map Section */}
        <section className="py-16 bg-emerald-50">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-slate-800">Visit Our Location</h2>
              <p className="text-base text-slate-400">Located in Lahore, Pakistan - serving the entire metropolitan area</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.5!2d74.327987!3d31.436526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI2JzExLjUiTiA3NMKwMTknNDAuOCJF!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tipu Electrics Location - Lahore, Pakistan"
              ></iframe>
            </div>
            <div className="text-center mt-8 p-6 bg-white rounded-xl shadow">
              <p className="text-lg font-semibold mb-1 text-slate-800">123 Electronics St, Lahore, Pakistan</p>
              <p className="text-sm text-slate-400">Coordinates: 31.436526, 74.327987</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
