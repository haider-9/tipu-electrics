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
        <section style={{
          background: 'linear-gradient(45deg, #1e293b 0%, #1e293b 50%, white 50%, white 100%)',
          padding: '100px 0'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '50px',
              alignItems: 'center'
            }}>
              <div style={{ color: 'white' }}>
                <div style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#10b981',
                  marginBottom: '15px',
                  textTransform: 'uppercase',
                  letterSpacing: '2px'
                }}>
                  About Us
                </div>
                <h1 style={{
                  fontSize: '3.5rem',
                  fontWeight: 'bold',
                  marginBottom: '30px',
                  lineHeight: '1.1'
                }}>
                  Tipu Electrics
                </h1>
                <p style={{
                  fontSize: '1.3rem',
                  lineHeight: '1.6',
                  marginBottom: '40px',
                  opacity: '0.9'
                }}>
                  Powering Lahore with reliable electrical solutions for over 15 years. Your trusted partner for all electrical needs.
                </p>

                {/* Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                  <div>
                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#10b981' }}>15+</div>
                    <div style={{ fontSize: '0.9rem', opacity: '0.8' }}>Years Experience</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#10b981' }}>1000+</div>
                    <div style={{ fontSize: '0.9rem', opacity: '0.8' }}>Projects Completed</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#10b981' }}>24/7</div>
                    <div style={{ fontSize: '0.9rem', opacity: '0.8' }}>Emergency Service</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#10b981' }}>100%</div>
                    <div style={{ fontSize: '0.9rem', opacity: '0.8' }}>Licensed & Insured</div>
                  </div>
                </div>
              </div>

              <div style={{ position: 'relative' }}>
                {/* Decorative elements */}
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '-20px',
                  width: '100px',
                  height: '100px',
                  backgroundColor: '#10b981',
                  borderRadius: '20px',
                  zIndex: 0
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '-20px',
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#1e293b',
                  borderRadius: '50%',
                  zIndex: 0
                }}></div>

                <Image
                  src="/Team.jpg"
                  alt="Tipu Electrics Team"
                  width={600}
                  height={400}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: '20px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    position: 'relative',
                    zIndex: 1
                  }}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Story section */}
        <section style={{ padding: '80px 0', backgroundColor: 'white' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: '#1e293b'
              }}>
                Our Story & Values
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: '#64748b',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Built on trust, powered by expertise, driven by customer satisfaction
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '30px',
              marginBottom: '60px'
            }}>
              <div style={{
                padding: '40px',
                backgroundColor: '#f8fafc',
                borderRadius: '16px',
                borderLeft: '5px solid #10b981'
              }}>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  marginBottom: '15px',
                  color: '#1e293b'
                }}>
                  Our Mission
                </h3>
                <p style={{
                  color: '#64748b',
                  lineHeight: '1.6'
                }}>
                  To provide safe, reliable, and professional electrical services that power homes and businesses across Lahore, ensuring every project meets the highest standards of quality and safety.
                </p>
              </div>

              <div style={{
                padding: '40px',
                backgroundColor: '#f8fafc',
                borderRadius: '16px',
                borderLeft: '5px solid #065f46'
              }}>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  marginBottom: '15px',
                  color: '#1e293b'
                }}>
                  Our Promise
                </h3>
                <p style={{
                  color: '#64748b',
                  lineHeight: '1.6'
                }}>
                  Every job, big or small, receives our full attention and expertise. We stand behind our work with comprehensive warranties and 24/7 emergency support for your peace of mind.
                </p>
              </div>
            </div>

            {/* Contact CTA */}
            <div style={{
              textAlign: 'center',
              padding: '50px',
              background: 'linear-gradient(135deg, #10b981, #059669)',
              borderRadius: '20px',
              color: 'white'
            }}>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '15px'
              }}>
                Ready to Work Together?
              </h3>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '30px',
                opacity: '0.9'
              }}>
                Experience the difference of working with Lahore's trusted electrical experts
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
                <a
                  href="/contact"
                  className="btn-slide"
                  style={{
                    backgroundColor: 'white',
                    color: '#10b981',
                    border: '2px solid #10b981',
                    padding: '15px 30px',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    display: 'inline-block'
                  }}
                >
                  Get In Touch
                </a>
                <span style={{ color: 'white', opacity: '0.7' }}>or</span>
                <a
                  href="tel:+923174636995"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    borderBottom: '2px solid transparent',
                    transition: 'border-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.borderBottomColor = 'white'}
                  onMouseLeave={(e) => e.target.style.borderBottomColor = 'transparent'}
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