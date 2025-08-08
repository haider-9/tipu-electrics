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
        <section style={{
          background: 'linear-gradient(135deg, #f8fafc 0%, #f8fafc 60%, #10b981 60%, #10b981 100%)',
          padding: '100px 0 80px'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}>
              <div>
                <h1 style={{
                  fontSize: '3.5rem',
                  fontWeight: 'bold',
                  marginBottom: '25px',
                  color: '#1e293b',
                  lineHeight: '1.1'
                }}>
                  Electrical Services
                  <span style={{ display: 'block', color: '#10b981' }}>You Can Trust</span>
                </h1>
                <p style={{
                  fontSize: '1.3rem',
                  color: '#64748b',
                  lineHeight: '1.6',
                  marginBottom: '30px'
                }}>
                  From simple repairs to complex installations, we deliver professional electrical solutions across Lahore
                </p>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{
                    padding: '15px 25px',
                    backgroundColor: '#1e293b',
                    color: 'white',
                    borderRadius: '8px',
                    fontWeight: '600'
                  }}>
                    15+ Years Experience
                  </div>
                  <div style={{
                    padding: '15px 25px',
                    border: '2px solid #10b981',
                    color: '#10b981',
                    borderRadius: '8px',
                    fontWeight: '600'
                  }}>
                    Licensed & Insured
                  </div>
                </div>
              </div>
              <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: '#10b981',
                  marginBottom: '10px'
                }}>
                  24/7
                </div>
                <div style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  marginBottom: '15px'
                }}>
                  Emergency Service
                </div>
                <p style={{
                  color: '#64748b',
                  fontSize: '0.9rem',
                  marginBottom: '20px'
                }}>
                  Electrical emergencies don&apos;t wait. Neither do we.
                </p>
                <a
                  href="tel:+923174636995"
                  style={{
                    backgroundColor: '#10b981',
                    color: 'white',
                    padding: '12px 20px',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    display: 'inline-block',
                    transition: 'transform 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services in masonry layout */}
        <section style={{ padding: '80px 0', backgroundColor: 'white' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '25px',
              marginBottom: '60px'
            }}>
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const isLarge = index === 0 || index === 3;

                return (
                  <div
                    key={service.id}
                    style={{
                      backgroundColor: index % 2 === 0 ? '#f8fafc' : 'white',
                      padding: isLarge ? '45px 35px' : '35px 30px',
                      borderRadius: '16px',
                      border: '2px solid #e2e8f0',
                      gridRow: isLarge ? 'span 2' : 'span 1',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#10b981';
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 15px 35px rgba(16, 185, 129, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e2e8f0';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {/* Background pattern */}
                    <div style={{
                      position: 'absolute',
                      top: '-50px',
                      right: '-50px',
                      width: '100px',
                      height: '100px',
                      backgroundColor: '#10b981',
                      opacity: '0.05',
                      borderRadius: '50%'
                    }}></div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, #10b981, #059669)',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '25px',
                        boxShadow: '0 8px 20px rgba(16, 185, 129, 0.3)'
                      }}>
                        <IconComponent style={{ width: '40px', height: '40px', color: 'white' }} />
                      </div>

                      <h3 style={{
                        fontSize: isLarge ? '1.6rem' : '1.4rem',
                        fontWeight: '700',
                        marginBottom: '15px',
                        color: '#1e293b'
                      }}>
                        {service.name}
                      </h3>

                      <p style={{
                        color: '#64748b',
                        fontSize: '1rem',
                        lineHeight: '1.6',
                        marginBottom: '25px'
                      }}>
                        {service.description}
                      </p>

                      <div style={{ marginBottom: '20px' }}>
                        {service.features.map((feature, idx) => (
                          <div key={idx} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            marginBottom: '8px'
                          }}>
                            <div style={{
                              width: '4px',
                              height: '4px',
                              backgroundColor: '#10b981',
                              borderRadius: '50%'
                            }}></div>
                            <span style={{
                              fontSize: '0.9rem',
                              color: '#475569'
                            }}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <a
                        href="/contact"
                        className="btn-slide-bottom"
                        style={{
                          display: 'inline-block',
                          padding: '8px 16px',
                          backgroundColor: 'white',
                          color: '#10b981',
                          border: '2px solid #10b981',
                          borderRadius: '20px',
                          fontSize: '0.85rem',
                          fontWeight: '600',
                          textDecoration: 'none'
                        }}
                      >
                        Get Quote →
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{
              textAlign: 'center',
              padding: '50px',
              backgroundColor: '#f8fafc',
              borderRadius: '20px',
              border: '2px dashed #10b981'
            }}>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                Ready to Get Started?
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: '#64748b',
                marginBottom: '25px'
              }}>
                Contact us today for professional electrical services in Lahore
              </p>
              <a
                href="/contact"
                style={{
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  color: 'white',
                  padding: '15px 35px',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  display: 'inline-block',
                  marginRight: '15px',
                  boxShadow: '0 6px 20px rgba(16, 185, 129, 0.3)',
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(16, 185, 129, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.3)';
                }}
              >
                Contact Us
              </a>
              <a
                href="tel:+923174636995"
                style={{
                  color: '#10b981',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1.1rem'
                }}
                onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
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