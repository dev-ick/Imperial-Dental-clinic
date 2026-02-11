"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!open) return;
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-md shadow-sm"
      >
        <Menu className="w-5 h-5 text-[#161E54]" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 bg-black z-40"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed top-0 right-0 h-full w-[86%] max-w-xs bg-white z-50 shadow-2xl overflow-auto"
              ref={ref}
            >
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-3">
                  <img src="/icons/dental1.svg" alt="Logo" className="w-8 h-8 object-contain" />
                  <span className="font-semibold text-[#161E54]">Imperial Dental</span>
                </div>

                <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="p-4 space-y-4">
                <div>
                  <p className="text-xs font-semibold text-gray-500">General Dentistry</p>
                  <div className="mt-2 flex flex-col pl-2">
                    <Link href="/services/dental-checkups" onClick={() => setOpen(false)} className="py-2">Dental Checkups</Link>
                    <Link href="/services/white-fillings" onClick={() => setOpen(false)} className="py-2">White Fillings</Link>
                    <Link href="/services/root-canal-therapy" onClick={() => setOpen(false)} className="py-2">Root Canal Therapy</Link>
                    <Link href="/services/tooth-extraction" onClick={() => setOpen(false)} className="py-2">Tooth Extraction</Link>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-500">Restorative & Cosmetic</p>
                  <div className="mt-2 flex flex-col pl-2">
                    <Link href="/services/teeth-whitening" onClick={() => setOpen(false)} className="py-2">Teeth Whitening</Link>
                    <Link href="/services/dental-bonding" onClick={() => setOpen(false)} className="py-2">Dental Bonding</Link>
                    <Link href="/services/porcelain-veneers" onClick={() => setOpen(false)} className="py-2">Porcelain Veneers</Link>
                    <Link href="/services/crowns-bridges" onClick={() => setOpen(false)} className="py-2">Crowns & Bridges</Link>
                    <Link href="/services/dentures" onClick={() => setOpen(false)} className="py-2">Dentures</Link>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-500">Orthodontics</p>
                  <div className="mt-2 flex flex-col pl-2">
                    <Link href="/services/braces" onClick={() => setOpen(false)} className="py-2">Braces</Link>
                    <Link href="/services/retainers" onClick={() => setOpen(false)} className="py-2">Retainers</Link>
                    <Link href="/services/orthodontic-emergencies" onClick={() => setOpen(false)} className="py-2">Orthodontic Emergencies</Link>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-500">Billing & Insurance</p>
                  <div className="mt-2 flex flex-col pl-2">
                    <Link href="/billing-insurance/billing" onClick={() => setOpen(false)} className="py-2">Billing</Link>
                    <Link href="/billing-insurance/insurance" onClick={() => setOpen(false)} className="py-2">Insurance</Link>
                  </div>
                </div>

                <div>
                  <Link href="/contact-us" onClick={() => setOpen(false)} className="block py-2 font-medium">Contact Us</Link>
                </div>

                <div className="mt-4 border-t pt-4">
                  <a href="tel:+254700000000" className="block py-2 text-[#650000]">+254 700 000 000</a>
                  <a href="tel:+254701111111" className="block py-2 text-[#650000]">+254 701 111 111</a>
                </div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
