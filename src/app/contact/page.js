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
        <section style={{ 
          background: 'linear-gradient(135deg, #f0fdf4 0%, #f0fdf4 70%, #10b981 70%, #10b981 100%)',
          padding: '100px 0 80px'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '2fr 1fr', 
              gap: '60px', 
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
                  Get In Touch
                  <span style={{ display: 'block', color: '#10b981' }}>With Our Team</span>
                </h1>
                <p style={{ 
                  fontSize: '1.3rem', 
                  color: '#64748b',
                  lineHeight: '1.6',
                  marginBottom: '30px'
                }}>
                  Professional electrical services and emergency repairs available 24/7 across Lahore
                </p>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <a 
                    href="tel:+923174636995"
                    style={{
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      color: 'white',
                      padding: '15px 25px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                  >
                    <Phone style={{ width: '20px', height: '20px' }} />
                    Call: 0317-4636995
                  </a>
                  <div style={{ 
                    padding: '15px 25px', 
                    border: '2px solid #10b981', 
                    color: '#10b981', 
                    borderRadius: '8px',
                    fontWeight: '600'
                  }}>
                    24/7 Emergency Available
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
                  15+
                </div>
                <div style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: '600', 
                  color: '#1e293b',
                  marginBottom: '15px'
                }}>
                  Years Experience
                </div>
                <p style={{ 
                  color: '#64748b', 
                  fontSize: '0.9rem',
                  marginBottom: '20px'
                }}>
                  Trusted electrical contractor serving Lahore since 2009
                </p>
                <div style={{
                  backgroundColor: '#10b981',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  display: 'inline-block'
                }}>
                  Licensed & Insured
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section style={{ padding: '80px 0', backgroundColor: 'white' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '30px',
              marginBottom: '60px'
            }}>
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const CardWrapper = info.link ? 'a' : 'div';
                const cardProps = info.link ? { href: info.link } : {};
                
                return (
                  <div 
                    key={index} 
                    style={{
                      backgroundColor: '#f8fafc',
                      padding: '30px 25px',
                      borderRadius: '16px',
                      textAlign: 'center',
                      border: '2px solid transparent',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#10b981';
                      e.currentTarget.style.backgroundColor = 'white';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(16, 185, 129, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'transparent';
                      e.currentTarget.style.backgroundColor = '#f8fafc';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <CardWrapper {...cardProps} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: '#10b981',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px'
                      }}>
                        <IconComponent style={{ width: '40px', height: '40px', color: 'white' }} />
                      </div>
                      <h3 style={{ 
                        fontWeight: '600', 
                        fontSize: '1.3rem', 
                        marginBottom: '10px',
                        color: '#1e293b'
                      }}>
                        {info.title}
                      </h3>
                      <p style={{ 
                        fontWeight: '500', 
                        fontSize: '1.1rem',
                        marginBottom: '8px',
                        color: '#10b981'
                      }}>
                        {info.details}
                      </p>
                      <p style={{ 
                        fontSize: '0.9rem', 
                        color: '#64748b',
                        lineHeight: '1.5'
                      }}>
                        {info.description}
                      </p>
                    </CardWrapper>
                  </div>
                );
              })}
            </div>

            {/* Contact Form and Info */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '50px',
              alignItems: 'start'
            }}>
              {/* Contact Form */}
              <ContactForm />

              {/* Additional Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <div style={{
                  backgroundColor: 'white',
                  padding: '30px',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: '1px solid #e2e8f0'
                }}>
                  <h3 style={{ 
                    fontSize: '1.4rem', 
                    fontWeight: '600', 
                    marginBottom: '15px',
                    color: '#1e293b'
                  }}>
                    Emergency Service
                  </h3>
                  <p style={{ 
                    color: '#64748b', 
                    marginBottom: '20px',
                    lineHeight: '1.6'
                  }}>
                    Electrical emergencies can&apos;t wait. Our licensed electricians are 
                    available 24/7 for urgent electrical repairs and safety issues.
                  </p>
                  <a 
                    href="tel:+923174636995"
                    style={{
                      backgroundColor: '#10b981',
                      color: 'white',
                      padding: '12px 20px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px'
                    }}
                  >
                    <Phone style={{ width: '18px', height: '18px' }} />
                    Emergency: 0317-4636995
                  </a>
                </div>

                <div style={{
                  backgroundColor: 'white',
                  padding: '30px',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: '1px solid #e2e8f0'
                }}>
                  <h3 style={{ 
                    fontSize: '1.4rem', 
                    fontWeight: '600', 
                    marginBottom: '15px',
                    color: '#1e293b'
                  }}>
                    Our Promise
                  </h3>
                  <p style={{ 
                    color: '#64748b', 
                    marginBottom: '20px',
                    lineHeight: '1.6'
                  }}>
                    We provide honest, reliable electrical services with 
                    transparent pricing and quality workmanship.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {['Professional assessment', 'Fair pricing', 'Quality guarantee', 'Licensed electricians'].map((item, idx) => (
                      <div key={idx} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '10px'
                      }}>
                        <div style={{
                          width: '6px',
                          height: '6px',
                          backgroundColor: '#10b981',
                          borderRadius: '50%'
                        }}></div>
                        <span style={{ 
                          fontSize: '0.9rem',
                          color: '#475569'
                        }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{
                  backgroundColor: 'white',
                  padding: '30px',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: '1px solid #e2e8f0'
                }}>
                  <h3 style={{ 
                    fontSize: '1.4rem', 
                    fontWeight: '600', 
                    marginBottom: '15px',
                    color: '#1e293b'
                  }}>
                    Service Areas
                  </h3>
                  <p style={{ 
                    color: '#64748b', 
                    marginBottom: '20px',
                    lineHeight: '1.6'
                  }}>
                    We proudly serve the following areas with professional 
                    electrical services:
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {['Lahore City Center', 'DHA & Cantt Areas', 'Gulberg & Model Town', 'Industrial Areas', 'Surrounding Districts'].map((area, idx) => (
                      <div key={idx} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '10px'
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
                          {area}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Map Section */}
        <section style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2 style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold', 
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                Visit Our Location
              </h2>
              <p style={{ 
                fontSize: '1.1rem', 
                color: '#64748b'
              }}>
                Located in Lahore, Pakistan - serving the entire metropolitan area
              </p>
            </div>
            <div style={{ 
              borderRadius: '20px', 
              overflow: 'hidden', 
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              border: '1px solid #e2e8f0'
            }}>
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
            <div style={{ 
              textAlign: 'center', 
              marginTop: '30px',
              padding: '25px',
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <p style={{ 
                fontSize: '1.2rem', 
                fontWeight: '600', 
                marginBottom: '8px',
                color: '#1e293b'
              }}>
                123 Electronics St, Lahore, Pakistan
              </p>
              <p style={{ 
                fontSize: '0.95rem', 
                color: '#64748b'
              }}>
                Coordinates: 31.436526, 74.327987
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}