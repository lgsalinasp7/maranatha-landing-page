export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: "Iglesia Maranatha",
    description:
      "Iglesia cristiana de fe, amor y poder en Montería, Córdoba. Servicios los domingos a las 10:00 a.m.",
    url: "https://www.maranathamc.com",
    telephone: "+573114710669",
    email: "contacto@maranathamc.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle 30 # 10-109",
      addressLocality: "Montería",
      addressRegion: "Córdoba",
      addressCountry: "CO",
      neighborhood: "Centro",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Tuesday",
        opens: "18:30",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Thursday",
        opens: "19:00",
        closes: "20:30",
      },
    ],
    sameAs: [
      "https://www.facebook.com/Maranathamonteriacentral?locale=es_LA",
      "https://www.instagram.com/maranathamc/",
    ],
    logo: "https://www.maranathamc.com/images/logoMaranatha.png",
    image: "https://www.maranathamc.com/images/logoMaranatha.png",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
