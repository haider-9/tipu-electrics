'use client'

import { ArrowRight, Zap, Shield, Clock, CheckCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section style={{ 
      background: 'linear-gradient(135deg, #f0fdf4 0%, #f0fdf4 50%, white 50%, white 100%)',
      padding: '100px 0'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '80px', 
          alignItems: 'center'
        }}>
          {/* Left content */}
          <div>
            <h1 style={{ 
              fontSize: '4rem', 
              fontWeight: 'bold',
              marginBottom: '30px',
              color: '#1e293b',
              lineHeight: '1.1'
            }}>
              Professional
              <span style={{ display: 'block', color: '#10b981' }}>Electrical</span>
              Services
            </h1>
            <p style={{ 
              fontSize: '1.3rem', 
              color: '#64748b',
              lineHeight: '1.6',
              marginBottom: '40px',
              maxWidth: '500px'
            }}>
              Licensed electricians providing safe, reliable electrical solutions 
              for residential and commercial properties. Available 24/7 for emergencies.
            </p>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '50px' }}>
              <a 
                href="/contact"
                style={{
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  color: 'white',
                  padding: '15px 30px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              >
                Contact Us
                <ArrowRight style={{ width: '20px', height: '20px' }} />
              </a>
              <a 
                href="tel:+923174636995"
                style={{
                  border: '2px solid #10b981',
                  color: '#10b981',
                  padding: '15px 30px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#10b981';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#10b981';
                }}
              >
                Call: 0317-4636995
              </a>
            </div>

            {/* Features */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  padding: '10px',
                  backgroundColor: '#10b981',
                  borderRadius: '8px'
                }}>
                  <Clock style={{ width: '20px', height: '20px', color: 'white' }} />
                </div>
                <div>
                  <p style={{ fontWeight: '600', fontSize: '0.95rem', color: '#1e293b' }}>24/7 Emergency</p>
                  <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Always available</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  padding: '10px',
                  backgroundColor: '#10b981',
                  borderRadius: '8px'
                }}>
                  <Shield style={{ width: '20px', height: '20px', color: 'white' }} />
                </div>
                <div>
                  <p style={{ fontWeight: '600', fontSize: '0.95rem', color: '#1e293b' }}>Licensed & Insured</p>
                  <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Fully certified</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  padding: '10px',
                  backgroundColor: '#10b981',
                  borderRadius: '8px'
                }}>
                  <CheckCircle style={{ width: '20px', height: '20px', color: 'white' }} />
                </div>
                <div>
                  <p style={{ fontWeight: '600', fontSize: '0.95rem', color: '#1e293b' }}>Guaranteed Work</p>
                  <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Quality assured</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Service showcase */}
          <div style={{ position: 'relative' }}>
            <div style={{
              background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
              borderRadius: '20px',
              padding: '40px',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '30px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}>
                <div style={{
                  width: '100%',
                  height: '200px',
                  background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <Zap style={{ width: '80px', height: '80px', color: '#10b981' }} />
                </div>
                <h3 style={{ 
                  fontWeight: '600', 
                  fontSize: '1.2rem',
                  marginBottom: '8px',
                  color: '#1e293b'
                }}>
                  Expert Electrical Work
                </h3>
                <p style={{ 
                  color: '#64748b',
                  marginBottom: '20px'
                }}>
                  Professional installation & repair
                </p>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between' 
                }}>
                  <span style={{ 
                    fontSize: '0.9rem', 
                    color: '#10b981', 
                    fontWeight: '600'
                  }}>
                    Professional Service
                  </span>
                  <a 
                    href="/contact"
                    style={{
                      backgroundColor: '#10b981',
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div style={{
              position: 'absolute',
              top: '-15px',
              right: '-15px',
              backgroundColor: '#10b981',
              color: 'white',
              borderRadius: '50%',
              padding: '12px',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
            }}>
              <Zap style={{ width: '24px', height: '24px' }} />
            </div>
            <div style={{
              position: 'absolute',
              bottom: '-15px',
              left: '-15px',
              backgroundColor: 'white',
              borderRadius: '50%',
              padding: '16px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              border: '1px solid #e2e8f0'
            }}>
              <Shield style={{ width: '24px', height: '24px', color: '#10b981' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}