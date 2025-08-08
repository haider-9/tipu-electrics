export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://tipuelectrics.com",
    "name": "Tipu Electrics",
    "alternateName": "Tipu Electrical Services",
    "description": "Professional electrical contractor in Lahore, Pakistan providing residential and commercial electrical services, emergency repairs, panel upgrades, and lighting installation.",
    "url": "https://tipuelectrics.com",
    "telephone": "+92-317-4636995",
    "email": "tipu672888@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Electronics St",
      "addressLocality": "Lahore",
      "addressCountry": "Pakistan"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "31.436526",
      "longitude": "74.327987"
    },
    "openingHours": [
      "Mo-Fr 09:00-19:00",
      "Sa 10:00-17:00"
    ],
    "serviceArea": {
      "@type": "City",
      "name": "Lahore"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Electrical Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Electrical Services",
            "description": "Home wiring, panel upgrades, outlet installation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Electrical Services",
            "description": "Office electrical installation, industrial electrical work"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Electrical Repairs",
            "description": "24/7 emergency electrical repair services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lighting Installation",
            "description": "LED installation, outdoor lighting, fixture installation"
          }
        }
      ]
    },
    "priceRange": "$$",
    "paymentAccepted": "Cash, Bank Transfer",
    "currenciesAccepted": "PKR",
    "areaServed": [
      {
        "@type": "City",
        "name": "Lahore"
      },
      {
        "@type": "State",
        "name": "Punjab"
      }
    ],
    "sameAs": [
      "https://tipuelectrics.com"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}