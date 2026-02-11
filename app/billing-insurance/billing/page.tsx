"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ShieldCheck, CreditCard } from "lucide-react";

const pricingSections = [
  {
    title: "General Dentistry",
    items: [
      { name: "Dental Checkups", price: "KSh 2,000 – 4,000" },
      { name: "White Fillings (Composite)", price: "KSh 4,500 – 10,000 / tooth" },
      { name: "Tooth Extraction (Simple)", price: "KSh 3,500 – 7,000" },
      { name: "Tooth Extraction (Surgical)", price: "KSh 8,000 – 20,000" },
    ],
  },
  {
    title: "Restorative & Endodontic Care",
    items: [
      { name: "Root Canal – Front Teeth", price: "KSh 18,000 – 30,000" },
      { name: "Root Canal – Premolars", price: "KSh 25,000 – 40,000" },
      { name: "Root Canal – Molars", price: "KSh 35,000 – 60,000" },
      { name: "Dental Bonding", price: "KSh 6,000 – 15,000 / tooth" },
    ],
  },
  {
    title: "Cosmetic Dentistry",
    items: [
      { name: "Teeth Whitening (In-clinic)", price: "KSh 20,000 – 35,000" },
      { name: "Teeth Whitening (Take-home)", price: "KSh 10,000 – 18,000" },
      { name: "Porcelain Veneers", price: "KSh 45,000 – 80,000 / tooth" },
    ],
  },
  {
    title: "Crowns, Bridges & Dentures",
    items: [
      { name: "Dental Crown", price: "KSh 30,000 – 60,000" },
      { name: "Dental Bridge", price: "KSh 70,000 – 150,000" },
      { name: "Partial Dentures", price: "KSh 25,000 – 60,000" },
      { name: "Full Dentures", price: "KSh 50,000 – 120,000" },
    ],
  },
  {
    title: "Orthodontics",
    items: [
      { name: "Metal Braces", price: "KSh 120,000 – 180,000" },
      { name: "Ceramic Braces", price: "KSh 180,000 – 250,000" },
      { name: "Clear Aligners", price: "KSh 250,000 – 450,000" },
      { name: "Retainers", price: "KSh 10,000 – 25,000 / arch" },
      { name: "Orthodontic Emergencies", price: "KSh 3,000 – 8,000" },
    ],
  },
];

export default function BillingInsurancePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* ================= HERO ================= */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#161E54]">
          Billing & Insurance
        </h1>
        <p className="mt-3 max-w-2xl text-gray-600">
          Transparent pricing, flexible payment options, and insurance support —
          so you can focus on your health with confidence.
        </p>
      </div>

      {/* ================= CTAs ================= */}
      <div className="flex flex-wrap gap-4 mb-14">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-[#650000] px-6 py-3 text-sm font-medium text-white hover:bg-cyan-700 transition"
        >
          Get a Treatment Quote →
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-[#650000] px-6 py-3 text-sm font-medium text-cyan-700 hover:bg-cyan-50 transition"
        >
          Check Insurance Coverage
        </Link>
      </div>

      {/* ================= PRICING ACCORDIONS ================= */}
      <div className="space-y-4">
        {pricingSections.map((section, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={section.title}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="w-full flex items-center justify-between px-6 py-4 text-left bg-[#F5F7FB] hover:bg-[#EEF2F8] transition"
              >
                <span className="font-semibold text-[#161E54]">
                  {section.title}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 py-5 bg-white">
                  <ul className="space-y-3 text-sm">
                    {section.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex justify-between border-b border-dashed border-gray-200 pb-2"
                      >
                        <span className="text-gray-700">{item.name}</span>
                        <span className="font-medium text-gray-900">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ================= INSURANCE ================= */}
      <div className="mt-16 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold text-[#161E54] mb-4 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-cyan-600" />
            Accepted Insurance Providers
          </h3>
          <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
            <li>NHIF</li>
            <li>Jubilee Insurance</li>
            <li>APA Insurance</li>
            <li>AAR Insurance</li>
            <li>Britam</li>
            <li>Madison Insurance</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#161E54] mb-4 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-cyan-600" />
            Payment Options
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• M-PESA & Mobile Payments</li>
            <li>• Debit & Credit Cards</li>
            <li>• Bank Transfers</li>
            <li>• Flexible payment plans for major treatments</li>
          </ul>
        </div>
      </div>

      {/* ================= DISCLAIMER ================= */}
      <div className="mt-16 p-6 rounded-2xl bg-[#F5F7FB] text-sm text-gray-600">
        <strong className="text-gray-800">Important note:</strong>{" "}
        Prices listed are estimates and may vary based on diagnosis, treatment
        complexity, materials used, and specialist involvement. A full treatment
        plan and cost breakdown will always be provided before care begins.
      </div>
    </section>
  );
}
