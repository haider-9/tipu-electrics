"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import Logo from "./Logo";
import ActiveLink from "./ActiveLink";
import { DialogTitle } from "@radix-ui/react-dialog";

// VisuallyHidden component
function VisuallyHidden({ children }) {
  return <span style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}>{children}</span>;
}

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 border-b border-slate-200">
      {/* Top bar - only desktop */}
      <div className="hidden md:block bg-slate-900 text-white py-2 text-xs sm:text-sm">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
            <div className="flex items-center gap-5">
              <span>📍 Lahore, Pakistan</span>
              <span>⏰ Mon-Fri: 9AM-7PM</span>
            </div>
            <div className="flex items-center gap-4">
              <span>✉️ info@tipuelectrics.com</span>
              <span className="bg-emerald-500 px-3 py-1 rounded-xl text-xs font-semibold">
                24/7 Emergency
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop header */}
      <div className="hidden md:block max-w-6xl mx-auto px-5">
        <div className="flex flex-row items-center justify-between py-5 gap-0">
          <Link href="/" className="flex items-center gap-3 no-underline">
            <Logo width={50} height={50} />
            <div>
              <div className="text-2xl font-bold text-slate-800 leading-none">
                Tipu Electrics
              </div>
              <div className="text-xs text-slate-400 font-medium">
                Licensed Electrical Contractor
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="flex items-center gap-9 bg-slate-50 px-8 py-3 rounded-full border border-slate-200">
            <ActiveLink 
              href="/" 
              style={{ textDecoration: 'none', color: '#475569', fontWeight: '600', fontSize: '0.95rem', transition: 'color 0.2s' }}
              activeStyle={{ color: '#10b981', fontWeight: '700' }}
            >
              Home
            </ActiveLink>
            <ActiveLink 
              href="/services" 
              style={{ textDecoration: 'none', color: '#475569', fontWeight: '600', fontSize: '0.95rem', transition: 'color 0.2s' }}
              activeStyle={{ color: '#10b981', fontWeight: '700' }}
            >
              Services
            </ActiveLink>
            <ActiveLink 
              href="/about" 
              style={{ textDecoration: 'none', color: '#475569', fontWeight: '600', fontSize: '0.95rem', transition: 'color 0.2s' }}
              activeStyle={{ color: '#10b981', fontWeight: '700' }}
            >
              About
            </ActiveLink>
            <ActiveLink 
              href="/contact" 
              style={{ textDecoration: 'none', color: '#475569', fontWeight: '600', fontSize: '0.95rem', transition: 'color 0.2s' }}
              activeStyle={{ color: '#10b981', fontWeight: '700' }}
            >
              Contact
            </ActiveLink>
          </nav>

          <a 
            href="tel:+923174636995"
            className="bg-gradient-to-tr from-emerald-500 to-emerald-600 text-white px-6 py-2 rounded-full no-underline text-sm font-semibold flex items-center gap-2 shadow-md hover:shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4" />
            0317-4636995
          </a>
        </div>
      </div>

      {/* Mobile header - completely different layout */}
      <div className="md:hidden px-4 py-3 flex items-center justify-between max-w-full">
        {/* Sidebar icon */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-7 w-7 text-black" />
            </Button>
          </SheetTrigger>
          <SheetContent className="pt-8 px-6 border-l border-slate-200">
            <DialogTitle asChild>
              <VisuallyHidden>Mobile Navigation</VisuallyHidden>
            </DialogTitle>
            <nav className="flex flex-col space-y-6">
              <Link href="/" className="text-lg font-semibold text-slate-800 py-2 px-2 rounded hover:bg-emerald-50">Home</Link>
              <Link href="/services" className="text-lg font-semibold text-slate-800 py-2 px-2 rounded hover:bg-emerald-50">Services</Link>
              <Link href="/about" className="text-lg font-semibold text-slate-800 py-2 px-2 rounded hover:bg-emerald-50">About</Link>
              <Link href="/contact" className="text-lg font-semibold text-slate-800 py-2 px-2 rounded hover:bg-emerald-50">Contact</Link>
              <Button className="mt-8 w-full" asChild>
                <a href="tel:+923174636995" className="flex items-center justify-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
        {/* Logo and business name centered */}
        <Link href="/" className="flex items-center gap-2 mx-auto">
          <Logo width={36} height={36} />
          <span className="text-lg font-bold text-slate-800 leading-none">Tipu Electrics</span>
        </Link>
        {/* Call button on right */}
        <a 
          href="tel:+923174636995"
          className="bg-gradient-to-tr from-emerald-500 to-emerald-600 text-white px-3 py-2 rounded-full no-underline text-xs font-semibold flex items-center gap-1 shadow-md hover:shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
        >
          <Phone className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}
