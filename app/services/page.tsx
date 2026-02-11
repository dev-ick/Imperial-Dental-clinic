// app/services/page.tsx
"use client";

import dynamic from "next/dynamic";

// Map slugs to components for lazy loading
const serviceComponents: Record<string, any> = {
  "dental-checkups": dynamic(() => import("./components/services/dental-checkups")),
  "white-fillings": dynamic(() => import("./components/services/white-fillings")),
  "root-canal-therapy": dynamic(() => import("./components/services/root-canal-therapy")),
  "tooth-extraction": dynamic(() => import("./components/services/tooth-extraction")),
  "teeth-whitening": dynamic(() => import("./components/services/teeth-whitening")),
  "dental-bonding": dynamic(() => import("./components/services/dental-bonding")),
  "porcelain-veneers": dynamic(() => import("./components/services/porcelain-veneers")),
  "crowns-bridges": dynamic(() => import("./components/services/crowns-bridges")),
  "dentures": dynamic(() => import("./components/services/dentures")),
  "braces": dynamic(() => import("./components/services/braces")),
  "retainers": dynamic(() => import("./components/services/retainers")),
  "orthodontic-emergencies": dynamic(() => import("./components/services/orthodontic-emergencies")),
};

export default function ServicesPage({ initialSlug }: { initialSlug?: string }) {
  const slug = initialSlug || "dental-checkups"; // default service
  const ServiceComponent = serviceComponents[slug];

  return ServiceComponent ? <ServiceComponent /> : <p>Service not found.</p>;
}
