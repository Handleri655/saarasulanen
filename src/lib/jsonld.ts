import { site } from "../data/site";
import { services, servicePath } from "../data/services";
import type { Faq } from "../data/faq";

export function serializeGraph(nodes: Record<string, unknown>[]) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": nodes,
  }).replace(/</g, "\\u003c");
}

export function organizationNode() {
  return {
    "@type": ["AutomotiveBusiness", "Organization"],
    "@id": `${site.url}/#yritys`,
    name: site.name,
    legalName: site.legalName,
    slogan: site.slogan,
    description: site.description,
    url: site.url,
    email: site.email,
    telephone: site.phoneTel,
    foundingDate: site.founded,
    taxID: site.businessId,
    image: `${site.url}/og.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressCountry: site.address.countryCode,
    },
    areaServed: {
      "@type": "Country",
      name: "Finland",
    },
    sameAs: [site.facebook, site.instagram],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pinnoituspalvelut",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.h1,
          url: new URL(servicePath(service.slug), site.url).href,
        },
      })),
    },
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": `${site.url}/#sivusto`,
    url: site.url,
    name: site.name,
    inLanguage: "fi",
    publisher: { "@id": `${site.url}/#yritys` },
  };
}

export function breadcrumbNode(items: { name: string; href: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.href, site.url).href,
    })),
  };
}

export function serviceNode(service: (typeof services)[number]) {
  return {
    "@type": "Service",
    name: service.h1,
    serviceType: "Keraaminen pinnoitus",
    description: service.metaDescription,
    url: new URL(servicePath(service.slug), site.url).href,
    provider: { "@id": `${site.url}/#yritys` },
    areaServed: { "@type": "Country", name: "Finland" },
  };
}

export function faqNode(items: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
