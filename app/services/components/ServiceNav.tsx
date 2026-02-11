"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ClockAnimated from "../../components/icons/ClockAnimated";
import {
  Star,
  ShieldCheck,
  ClipboardCheck,
  User,
  Scale,
  DollarSign,
} from "lucide-react";
import { motion,useAnimation,AnimatePresence,useInView, useMotionValue, animate, type Variants } from "framer-motion";
import HeartAnimated from "../../components/icons/HeartAnimated";

interface ServiceNavProps {
  services: { slug: string; name: string }[];
}

export default function ServiceNav({ services }: ServiceNavProps) {
  const pathname = usePathname();

  function getCurrentStatus() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    let isOpen = false;

    if (currentDay === 0) {
      // Sunday: closed
      isOpen = false;
    } else if (currentDay === 6) {
      // Saturday: 9:00 - 14:00
      isOpen = currentHour >= 9 && currentHour < 14;
    } else {
      // Monday to Friday: 8:00 - 19:00
      isOpen = currentHour >= 8 && currentHour < 19;
    }

    return {
      label: isOpen ? "Open now" : "Closed now",
      status: isOpen ? "Open" : "Closed",
    };
  }



  return (
    <aside className="w-full max-w-sm flex flex-col gap-6">
      
      {/* ================= Schedule Hours ================= */}
      <div className=" border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4 rounded-4xl px-2 py-1.5 bg-[#161E54] text-white">
          <h3 className="text-lg font-semibold">Schedule Hours</h3>
          <ClockAnimated className="w-5 h-5 text-white" />
        </div>
        <div className="border-t border-gray-200 mb-4" />

        <ul className="space-y-2 text-sm text-cyan-500">
          <li className="flex justify-between">
            <span>Monday – Friday</span>
            <span>09:00 – 17:00</span>
          </li>

          <li className="flex justify-between">
            <span>Saturday</span>
            <span>09:00 – 14:00</span>
          </li>

          <li className="flex justify-between">
            <span>Sunday</span>
            <span className="text-red-800">Closed</span>
          </li>

          {/* Divider */}
          <li className="pt-3 mt-3 border-t border-gray-200 flex justify-end font-medium">
            
            <span
              className={
                getCurrentStatus().status === "Open"
                  ? "text-green-600"
                  : "text-red-600"
              }
            >
              {getCurrentStatus().label}
            </span>
          </li>
        </ul>

        <motion.div whileHover="hover">
          <Link
            href="/services"
            className="mt-6 inline-flex items-center justify-between w-full rounded-xl bg-[#650000] px-2 py-1.5 text-sm font-medium text-white transition hover:bg-[#520000]"
          >
            <span>Contact Us</span>
            <motion.span
              variants={{
                hover: { x: [0, 14, -14, 0], opacity: [1, 0, 0, 1] },
              }}
              initial={false}
              transition={{ duration: 0.9, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>

      {/* ================= Services Navigation ================= */}
      <div className=" overflow-hidden">
        {/* Services title */}
        <div className="flex items-center justify-between mb-4 rounded-4xl px-2 py-1.5 bg-[#161E54] text-white w-[calc(75%+32px)] mx-auto">
          <h3 className="text-lg font-semibold">Services</h3>
          <HeartAnimated className="w-5 h-5  text-white" />
        </div>

        <nav className="flex flex-col">
          {services.map((service) => {
            const isActive = pathname === `/services/${service.slug}`;

            return (
              <motion.div key={service.slug} whileHover="hover">
                <Link
                  href={`/services/${service.slug}`}
                  className={`relative flex items-center px-6 py-4 text-sm tracking-wide transition
                    ${
                      isActive
                        ? "text-cyan-600 font-semibold"
                        : "text-gray-800 hover:text-gray-600"
                    }`}
                >
                  {/* Service name */}
                  <motion.span
                    className="relative z-10"
                    animate={isActive ? { x: 14 } : { x: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {service.name}
                  </motion.span>

                  {/* Arrow (only exists on hover or active) */}
                  {(isActive || true) && (
                    <motion.span
                      className="absolute right-6 z-0 font-bold"
                      initial={false}
                      animate={
                        isActive
                          ? {
                              x: [-18, 0],
                              opacity: 1,
                            }
                          : {
                              opacity: 0,
                            }
                      }
                      variants={{
                        hover: {
                          opacity: 1,
                          x: [0, 16, -16, 0],
                        },
                      }}
                      transition={{
                        duration: isActive ? 0.45 : 0.9,
                        ease: "easeInOut",
                      }}
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                      }}
                    >
                      →
                    </motion.span>
                  )}
                </Link>
              </motion.div>

            );
          })}
        </nav>
      </div>


      {/* ================= Why Choose Us ================= */}
      <div className=" overflow-hidden">
        <div className="flex items-center justify-between mb-4 rounded-4xl px-2 py-1.5 bg-[#161E54] text-white w-[calc(75%+32px)] mx-auto">
          Why Choose Us?
        </div>

        <ul className="p-6 space-y-4 text-sm text-gray-800">
          <li className="flex items-center gap-3">
            <ShieldCheck className="w-4 h-4 text-[#650000]" />
            Experience and Expertise
          </li>

          <li className="flex items-center gap-3">
            <ClipboardCheck className="w-4 h-4 text-[#650000]" />
            Thorough Assessment
          </li>

          <li className="flex items-center gap-3">
            <User className="w-4 h-4 text-[#650000]" />
            Customer Focused
          </li>

          <li className="flex items-center gap-3">
            <Scale className="w-4 h-4 text-[#650000]" />
            Honesty and Integrity
          </li>

          <li className="flex items-center gap-3">
            <DollarSign className="w-4 h-4 text-[#650000]" />
            Reasonable Treatment Prices
          </li>
        </ul>
      </div>
    </aside>
  );
}
