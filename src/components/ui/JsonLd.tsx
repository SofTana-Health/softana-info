import { siteConfig } from "@/config/site-config";

export function JsonLd() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": siteConfig.name,
    "operatingSystem": "Windows, Linux, Web",
    "applicationCategory": "BusinessApplication",
    "description": siteConfig.description,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "PEN"
    }
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.name,
    "image": siteConfig.ogImage,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address,
      "addressLocality": siteConfig.contact.city,
      "addressCountry": "PE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -12.0651,
      "longitude": -75.2048
    },
    "url": siteConfig.url,
    "telephone": siteConfig.contact.phone
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
    </>
  );
}
