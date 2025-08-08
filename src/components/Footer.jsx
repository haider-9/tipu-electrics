'use client'

import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#1e293b',
      color: 'white',
      padding: '50px 0 30px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '40px',
          marginBottom: '40px'
        }}>
          <div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              marginBottom: '20px'
            }}>
              <Logo width={35} height={35} />
              <span style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
                Tipu Electrics
              </span>
            </div>
            <p style={{ 
              color: '#94a3b8', 
              fontSize: '0.95rem',
              lineHeight: '1.6'
            }}>
              Professional electrical services in Lahore. Licensed, insured, and available 24/7 for all your electrical needs.
            </p>
          </div>

          <div>
            <h3 style={{ 
              fontWeight: '600', 
              fontSize: '1.1rem',
              marginBottom: '20px',
              color: 'white'
            }}>
              Contact Info
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone style={{ width: '16px', height: '16px', color: '#10b981' }} />
                <a 
                  href="tel:+923174636995" 
                  style={{ 
                    color: '#94a3b8', 
                    textDecoration: 'none',
                    fontSize: '0.9rem'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#10b981'}
                  onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                >
                  0317-4636995
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail style={{ width: '16px', height: '16px', color: '#10b981' }} />
                <a 
                  href="mailto:info@tipuelectrics.com" 
                  style={{ 
                    color: '#94a3b8', 
                    textDecoration: 'none',
                    fontSize: '0.9rem'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#10b981'}
                  onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                >
                  info@tipuelectrics.com
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin style={{ width: '16px', height: '16px', color: '#10b981' }} />
                <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                  Lahore, Pakistan
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ 
              fontWeight: '600', 
              fontSize: '1.1rem',
              marginBottom: '20px',
              color: 'white'
            }}>
              Our Services
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['Home Electrical Work', 'Commercial Electrical', 'Emergency Repairs', 'Lighting Installation'].map((service) => (
                <div key={service} style={{ 
                  color: '#94a3b8', 
                  fontSize: '0.9rem',
                  paddingLeft: '15px',
                  position: 'relative'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '4px',
                    height: '4px',
                    backgroundColor: '#10b981',
                    borderRadius: '50%'
                  }}></span>
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid #334155',
          paddingTop: '25px',
          textAlign: 'center'
        }}>
          <p style={{ 
            color: '#94a3b8', 
            fontSize: '0.85rem'
          }}>
            © 2025 Tipu Electrics. Licensed Electrical Contractor in Lahore, Pakistan.
          </p>
        </div>
      </div>
    </footer>
  );
}