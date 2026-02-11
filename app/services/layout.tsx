"use client";

import { ReactNode } from "react";
import ServiceNav from "./components/ServiceNav";

const servicesList = [
  "dental-checkups",
  "white-fillings",
  "root-canal-therapy",
  "tooth-extraction",
  "teeth-whitening",
  "dental-bonding",
  "porcelain-veneers",
  "crowns-bridges",
  "dentures",
  "braces",
  "retainers",
  "orthodontic-emergencies",
].map((slug) => ({
  slug,
  name: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
}));

export default function ServicesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {/* HERO (rendered by page) */}
      <div id="service-hero-slot" />

      {/* SIDEBAR + CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:flex md:gap-8">
        {/* Sticky Sidebar */}
        <aside className="md:w-1/4 md:border-r md:border-[#e6eaf0] md:pr-6 md:max-h-screen md:overflow-y-auto sticky top-0">
          <div className="sticky top-24">
            <ServiceNav services={servicesList} />
          </div>
        </aside>

        {/* Scrollable Content */}
        <main className="md:w-3/4 mt-8 md:mt-0 bg-[#f5ffff] rounded-lg">
          {children}
        </main>
      </div>
    </>
  );
}
