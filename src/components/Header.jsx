"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import Logo from "./Logo";
import ActiveLink from "./ActiveLink";

export default function Header() {
  return (
    <header style={{
      backgroundColor: 'white',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      borderBottom: '1px solid #e2e8f0'
    }}>
      {/* Top bar */}
      <div style={{ backgroundColor: '#1e293b', color: 'white', padding: '8px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            fontSize: '0.85rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span>📍 Lahore, Pakistan</span>
              <span>⏰ Mon-Fri: 9AM-7PM</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span>✉️ info@tipuelectrics.com</span>
              <span style={{ 
                backgroundColor: '#10b981', 
                padding: '4px 12px', 
                borderRadius: '12px',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                24/7 Emergency
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          padding: '20px 0' 
        }}>
          <Link href="/" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '15px',
            textDecoration: 'none'
          }}>
            <Logo width={50} height={50} />
            <div>
              <div style={{ 
                fontSize: '1.6rem', 
                fontWeight: 'bold',
                color: '#1e293b',
                lineHeight: '1'
              }}>
                Tipu Electrics
              </div>
              <div style={{ 
                fontSize: '0.8rem', 
                color: '#64748b',
                fontWeight: '500'
              }}>
                Licensed Electrical Contractor
              </div>
            </div>
          </Link>

          <nav style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '35px',
            backgroundColor: '#f8fafc',
            padding: '12px 30px',
            borderRadius: '50px',
            border: '1px solid #e2e8f0'
          }} className="hidden md:flex">
            <ActiveLink 
              href="/" 
              style={{ 
                textDecoration: 'none', 
                color: '#475569',
                fontWeight: '600',
                fontSize: '0.95rem',
                transition: 'color 0.2s'
              }}
              activeStyle={{
                color: '#10b981',
                fontWeight: '700'
              }}
            >
              Home
            </ActiveLink>
            <ActiveLink 
              href="/services" 
              style={{ 
                textDecoration: 'none', 
                color: '#475569',
                fontWeight: '600',
                fontSize: '0.95rem',
                transition: 'color 0.2s'
              }}
              activeStyle={{
                color: '#10b981',
                fontWeight: '700'
              }}
            >
              Services
            </ActiveLink>
            <ActiveLink 
              href="/about" 
              style={{ 
                textDecoration: 'none', 
                color: '#475569',
                fontWeight: '600',
                fontSize: '0.95rem',
                transition: 'color 0.2s'
              }}
              activeStyle={{
                color: '#10b981',
                fontWeight: '700'
              }}
            >
              About
            </ActiveLink>
            <ActiveLink 
              href="/contact" 
              style={{ 
                textDecoration: 'none', 
                color: '#475569',
                fontWeight: '600',
                fontSize: '0.95rem',
                transition: 'color 0.2s'
              }}
              activeStyle={{
                color: '#10b981',
                fontWeight: '700'
              }}
            >
              Contact
            </ActiveLink>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <a 
              href="tel:+923174636995"
              style={{
                background: 'linear-gradient(135deg, #10b981, #059669)',
                color: 'white',
                padding: '12px 25px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.3)';
              }}
            >
              <Phone style={{ width: '18px', height: '18px' }} />
              0317-4636995
            </a>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link href="/">Home</Link>
                  <Link href="/services">Services</Link>
                  <Link href="/about">About</Link>
                  <Link href="/contact">Contact</Link>
                  <Button className="mt-6" asChild>
                    <a href="tel:+923174636995">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}