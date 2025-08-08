'use client'

import {
  Home,
  Building,
  Zap,
  Lightbulb
} from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Residential",
    icon: Home,
    description: "Home wiring & repairs"
  },
  {
    id: 2,
    name: "Commercial",
    icon: Building,
    description: "Business electrical work"
  },
  {
    id: 3,
    name: "Emergency",
    icon: Zap,
    description: "24/7 urgent repairs"
  },
  {
    id: 4,
    name: "Lighting",
    icon: Lightbulb,
    description: "LED & fixture installation"
  }
];

export default function ServiceCategories() {
  return (
    <section style={{ padding: '80px 0', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
        {/* Left-aligned header */}
        <div style={{ marginBottom: '60px', maxWidth: '500px' }}>
          <h2 style={{
            fontSize: '2.8rem',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#1e293b',
            lineHeight: '1.1'
          }}>
            What We Do Best
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#64748b',
            lineHeight: '1.6'
          }}>
            Specialized electrical services tailored for Lahore's residential and commercial needs
          </p>
        </div>

        {/* Horizontal layout with alternating sides */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={category.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '50px',
                  flexDirection: isEven ? 'row' : 'row-reverse',
                  padding: '40px',
                  backgroundColor: '#f8fafc',
                  borderRadius: '16px',
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
                {/* Icon section */}
                <div style={{
                  minWidth: '120px',
                  height: '120px',
                  backgroundColor: '#10b981',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  <IconComponent style={{ width: '50px', height: '50px', color: 'white' }} />
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    width: '30px',
                    height: '30px',
                    backgroundColor: '#065f46',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    color: 'white',
                    fontWeight: 'bold'
                  }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Content section */}
                <div style={{ flex: 1, textAlign: isEven ? 'left' : 'right' }}>
                  <h3 style={{
                    fontWeight: '700',
                    fontSize: '1.8rem',
                    marginBottom: '15px',
                    color: '#1e293b'
                  }}>
                    {category.name}
                  </h3>
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#64748b',
                    lineHeight: '1.6',
                    maxWidth: '400px',
                    margin: isEven ? '0' : '0 0 0 auto'
                  }}>
                    {category.description}
                  </p>
                  <div style={{
                    marginTop: '20px',
                    display: 'inline-block',
                    padding: '8px 20px',
                    backgroundColor: '#10b981',
                    color: 'white',
                    borderRadius: '25px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    Learn More →
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}