export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.eelawncare.com",
    name: "E&E Lawn Care Service, LLC",
    description:
      "Professional lawn care services in North Port and Port Charlotte, FL. Family-owned and operated. Mowing, trimming, landscaping, pressure washing & more.",
    url: "https://www.eelawncare.com",
    telephone: "+1-941-555-0123",
    email: "info@eelawncare.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "North Port",
      addressRegion: "FL",
      postalCode: "34286",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 27.0442,
      longitude: -82.2359,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "North Port, FL" },
      { "@type": "City", name: "Port Charlotte, FL" },
      { "@type": "City", name: "Englewood, FL" },
      { "@type": "City", name: "Venice, FL" },
      { "@type": "City", name: "Nokomis, FL" },
    ],
    priceRange: "$$",
    slogan: "Your Lawn Is My Problem!",
    sameAs: [
      "https://www.facebook.com/p/EE-Lawn-Care-Service-LLC-61550549894671/",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Lawn Care Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Weekly Lawn Mowing",
            description: "Professional lawn mowing service starting at $35 per visit.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Edging & Trimming",
            description: "Precise edging and trimming services starting at $25.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pressure Washing",
            description: "Professional pressure washing services starting at $99.",
          },
        },
      ],
    },
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "E&E Lawn Care Service, LLC",
    url: "https://www.eelawncare.com",
    description:
      "Professional lawn care services in North Port and Port Charlotte, FL.",
    publisher: {
      "@type": "Organization",
      name: "E&E Lawn Care Service, LLC",
    },
  };
}
