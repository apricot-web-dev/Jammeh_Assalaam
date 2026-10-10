export const business = {
  name: "Jammeh AsSalaam Moving",
  url: "https://jamoving.co",
  phone: "+14159405405",
  displayPhone: "(415) 940-5405",
  cities: [
    "Berkeley",
    "Oakland",
    "Emeryville",
    "Alameda",
    "Richmond",
    "El Cerrito",
    "Fremont",
    "Hayward",
    "San Leandro",
    "Walnut Creek",
    "Concord",
    "San Ramon",
  ],
};
export const siteUrl = new URL(process.env.SITE_URL || business.url);
export const absoluteUrl = (path: string) => new URL(path, siteUrl).toString();
export const description =
  "Plan your East Bay move with Jammeh AsSalaam Moving. Berkeley, Oakland and nearby cities. Local moving and packing help. Call (415) 940-5405.";
export const socialImage = {
  url: "/moving-hero-social.jpg",
  width: 1200,
  height: 630,
  alt: "Moving-day scene outside a California home",
};

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "@id": absoluteUrl("/#business"),
  name: business.name,
  url: absoluteUrl("/"),
  telephone: business.phone,
  description,
  image: absoluteUrl("/moving-hero-social.jpg"),
  // Only the confirmed locality is published; no storefront address is invented.
  address: {
    "@type": "PostalAddress",
    addressLocality: "Berkeley",
    addressRegion: "CA",
    addressCountry: "US",
  },
  areaServed: business.cities.map((name) => ({
    "@type": "City",
    name: `${name}, California`,
  })),
  founder: { "@type": "Person", name: "Bubacarr Jammeh" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Moving services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "East Bay local moving",
          url: absoluteUrl("/east-bay-moving-services#local-moving"),
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Packing and moving help",
          url: absoluteUrl("/east-bay-moving-services#packing-help"),
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cross-country move planning",
          description:
            "Routes, carrier arrangements and availability are confirmed before booking.",
        },
      },
    ],
  },
};
