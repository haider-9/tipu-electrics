'use client'

import { 
  Zap, 
  Home, 
  Building, 
  Wrench, 
  Shield, 
  Lightbulb,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    id: 1,
    name: "Residential Wiring",
    description: "Complete home electrical installation and rewiring services",
    features: ["New construction", "Rewiring", "Panel upgrades", "Code compliance"],
    icon: Home,
    badge: "Popular"
  },
  {
    id: 2,
    name: "Commercial Electrical",
    description: "Professional electrical solutions for businesses and offices",
    features: ["Office wiring", "Lighting systems", "Power distribution", "Maintenance"],
    icon: Building,
    badge: "Professional"
  },
  {
    id: 3,
    name: "Emergency Repairs",
    description: "24/7 emergency electrical repair services",
    features: ["Power outages", "Circuit breakers", "Electrical faults", "Safety issues"],
    icon: Zap,
    badge: "24/7"
  },
  {
    id: 4,
    name: "Panel Upgrades",
    description: "Electrical panel installation and upgrade services",
    features: ["Panel replacement", "Circuit additions", "Safety upgrades", "Code updates"],
    icon: Shield
  },
  {
    id: 5,
    name: "Lighting Installation",
    description: "Indoor and outdoor lighting design and installation",
    features: ["LED installation", "Smart lighting", "Outdoor lighting", "Fixture repair"],
    icon: Lightbulb
  },
  {
    id: 6,
    name: "Electrical Maintenance",
    description: "Regular maintenance and inspection services",
    features: ["Safety inspections", "Preventive maintenance", "Code compliance", "Testing"],
    icon: Wrench,
    badge: "Recommended"
  }
];

export default function ServicesGrid() {
  return (
    <section style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            marginBottom: '20px',
            color: '#1e293b'
          }}>
            Our Electrical Services
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#64748b',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Professional electrical services for residential and commercial properties with guaranteed quality work
          </p>
        </div>

        {/* Services grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '30px',
          marginBottom: '50px'
        }}>
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id} 
                style={{
                  backgroundColor: 'white',
                  padding: '30px',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(16, 185, 129, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                }}
              >
                {/* Service icon */}
                <div style={{ position: 'relative', marginBottom: '25px' }}>
                  <div style={{
                    width: '100%',
                    height: '140px',
                    background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <IconComponent style={{ width: '50px', height: '50px', color: '#10b981' }} />
                  </div>
                  {service.badge && (
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      backgroundColor: service.badge === "24/7" ? '#ef4444' : '#10b981',
                      color: 'white',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}>
                      {service.badge}
                    </div>
                  )}
                </div>

                {/* Service info */}
                <div>
                  <h3 style={{ 
                    fontWeight: '600', 
                    fontSize: '1.3rem', 
                    marginBottom: '10px',
                    color: '#1e293b'
                  }}>
                    {service.name}
                  </h3>
                  <p style={{ 
                    color: '#64748b',
                    marginBottom: '20px',
                    lineHeight: '1.5'
                  }}>
                    {service.description}
                  </p>

                  {/* Features */}
                  <div style={{ marginBottom: '20px' }}>
                    {service.features.map((feature, index) => (
                      <div key={index} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '10px',
                        marginBottom: '8px'
                      }}>
                        <div style={{
                          width: '5px',
                          height: '5px',
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



                  {/* Contact button */}
                  <a 
                    href="/contact"
                    className="btn-slide-bottom"
                    style={{
                      backgroundColor: 'white',
                      color: '#10b981',
                      border: '2px solid #10b981',
                      padding: '12px 20px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    Contact Us
                    <ArrowRight style={{ width: '16px', height: '16px' }} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact button */}
        <div style={{ textAlign: 'center' }}>
          <a 
            href="/services"
            className="btn-slide-right"
            style={{
              border: '2px solid #10b981',
              backgroundColor: 'white',
              color: '#10b981',
              padding: '15px 30px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              display: 'inline-block'
            }}
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
}