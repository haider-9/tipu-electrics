'use client'

import { ArrowRight, Zap, Shield, Clock, CheckCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-emerald-50 via-emerald-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-7 text-slate-800 leading-tight">
              Professional
              <span className="block text-emerald-500">Electrical</span>
              Services
            </h1>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-10 max-w-md">
              Licensed electricians providing safe, reliable electrical solutions 
              for residential and commercial properties. Available 24/7 for emergencies.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-12 z-10 relative">
              <a 
                href="/contact"
                className="bg-gradient-to-tr from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-lg no-underline text-base font-semibold flex items-center gap-2 shadow-md hover:shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:+923174636995"
                className="border-2 border-emerald-500 text-emerald-500 px-8 py-4 rounded-lg no-underline text-base font-semibold transition-all duration-200 hover:bg-emerald-500 hover:text-white"
              >
                Call: 0317-4636995
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-500 rounded-lg">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-slate-800">24/7 Emergency</p>
                  <p className="text-xs text-slate-400">Always available</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-500 rounded-lg">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-slate-800">Licensed & Insured</p>
                  <p className="text-xs text-slate-400">Fully certified</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-500 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-slate-800">Guaranteed Work</p>
                  <p className="text-xs text-slate-400">Quality assured</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Service showcase */}
          <div className="relative mt-4 lg:mt-0 z-0">
            <div className="bg-gradient-to-br from-slate-50 to-slate-200 rounded-2xl p-10 border border-slate-200">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-full h-48 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg flex items-center justify-center mb-5">
                  <Zap className="w-20 h-20 text-emerald-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-slate-800">
                  Expert Electrical Work
                </h3>
                <p className="text-slate-400 mb-5">
                  Professional installation & repair
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-emerald-500 font-semibold">
                    Professional Service
                  </span>
                  <a 
                    href="/contact"
                    className="bg-emerald-500 text-white px-4 py-2 rounded-md no-underline text-sm font-medium"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-emerald-500 text-white rounded-full p-3 shadow-md">
              <Zap className="w-6 h-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg border border-slate-200">
              <Shield className="w-6 h-6 text-emerald-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
