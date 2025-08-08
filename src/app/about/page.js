"use client"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Split hero with stats */}
        <section className="bg-gradient-to-br from-slate-800 via-slate-800 to-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="text-white">
                <div className="text-emerald-400 font-semibold mb-4 uppercase tracking-widest text-sm">About Us</div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-7 leading-tight">Tipu Electrics</h1>
                <p className="text-base sm:text-lg opacity-90 leading-relaxed mb-10">
                  Powering Lahore with reliable electrical solutions for over 15 years. Your trusted partner for all electrical needs.
                </p>
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-emerald-400">15+</div>
                    <div className="text-xs opacity-80">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-400">1000+</div>
                    <div className="text-xs opacity-80">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-400">24/7</div>
                    <div className="text-xs opacity-80">Emergency Service</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-400">100%</div>
                    <div className="text-xs opacity-80">Licensed & Insured</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-5 -left-5 w-24 h-24 bg-emerald-400 rounded-2xl z-0" />
                <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-slate-800 rounded-full z-0" />
                <Image
                  src="/Team.jpg"
                  alt="Tipu Electrics Team"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl relative z-10"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Story section */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-5">
            <div className="text-center mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-800">Our Story & Values</h2>
              <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
                Built on trust, powered by expertise, driven by customer satisfaction
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
              <div className="p-8 bg-slate-50 rounded-xl border-l-4 border-emerald-500">
                <h3 className="text-lg font-bold mb-3 text-slate-800">Our Mission</h3>
                <p className="text-slate-400 leading-relaxed">
                  To provide safe, reliable, and professional electrical services that power homes and businesses across Lahore, ensuring every project meets the highest standards of quality and safety.
                </p>
              </div>
              <div className="p-8 bg-slate-50 rounded-xl border-l-4 border-emerald-900">
                <h3 className="text-lg font-bold mb-3 text-slate-800">Our Promise</h3>
                <p className="text-slate-400 leading-relaxed">
                  Every job, big or small, receives our full attention and expertise. We stand behind our work with comprehensive warranties and 24/7 emergency support for your peace of mind.
                </p>
              </div>
            </div>
            {/* Contact CTA */}
            <div className="text-center p-10 bg-gradient-to-tr from-emerald-500 to-emerald-600 rounded-2xl text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Ready to Work Together?</h3>
              <p className="text-base opacity-90 mb-6">Experience the difference of working with Lahore&apos;s trusted electrical experts</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="bg-white text-emerald-500 border-2 border-emerald-500 px-6 py-3 rounded-full text-base font-semibold hover:bg-emerald-50 transition"
                >
                  Get In Touch
                </a>
                <span className="opacity-80">or</span>
                <a
                  href="tel:+923174636995"
                  className="text-white font-semibold text-base border-b-2 border-transparent hover:border-white transition"
                >
                  Call: 0317-4636995
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
