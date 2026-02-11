"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Bell,
  Facebook,
  Instagram,
  ArrowRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <footer className="relative bg-[#0A2540] text-white rounded-3xl max-w-7xl mx-auto mt-2 overflow-hidden">

      <div className="relative px-6 md:px-14 py-14">

        {/* Header */}
        <motion.div
          className="flex items-center justify-between"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
        <div className="inline-flex items-center justify-center rounded-full bg-[#650000] p-2">
        <img
            src="/icons/dental1.svg"
            alt="Karen Dental Clinic"
            className="h-8 w-auto"
        />
        </div>

          <h3 className="text-lg font-semibold">Imperial Dental Clinic</h3>
        </motion.div>

        <div className="my-8 h-px bg-white/20" />

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Contact */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold mb-4">Contact Us!</h4>

            <ul className="space-y-2 text-sm text-white/80">
              <li>Our Location, Along Eastern Bypass</li>
              <li>Utawala Benedicta, Nairobi.</li>
              <li>
                Support mail:
                <span className="text-white"> dickensodhiambo06@gmail.com</span>
              </li>
              <li>Opening Hours: Mon – Sat: 7.00am – 17.00pm</li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                <Phone size={16} />
              </span>
              <span className="font-semibold text-sm">
                Emergency 24h: +254 757 247988
              </span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-300 text-[#0A2540] text-sm font-medium"
            >
              Request An Appointment <ArrowRight size={14} />
            </motion.button>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold mb-4">Services Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {[
                "General Consultation",
                "Dental Bridges",
                "Dental Crowns",
                "Dental Implants",
                "Dental Veneers",
                "Dentures",
                "Orthodontics/Braces",
                "Root Canal Treatment",
                "Teeth Cleaning",
                "Teeth Whitening",
                "Tooth Extraction",
              ].map((item) => (
                <li
                  key={item}
                  className="relative w-fit cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-white after:transition-all hover:after:w-full"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-sm font-semibold mb-4">Subscribe Newsletter</h4>

            <div className="flex items-start gap-3 text-sm text-white/80 mb-5">
              <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                <Bell size={16} />
              </span>
              <p>
                Please sign up to follow the latest news and events from us.
              </p>
            </div>

            <div className="relative w-full max-w-sm bg-white rounded-full">
              <input
                type="email"
                placeholder="*Email address..."
                className="w-full rounded-full px-5 py-3 text-sm text-gray-800 focus:outline-none"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0A2540]">
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram].map((Icon, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer"
                >
                  <Icon size={16} />
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-white text-gray-600 text-xs px-6 md:px-14 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>Passion by Lucide Solutions © 2025 Imperial Dental Clinic</p>
        <div className="flex gap-5">
          {["Terms and Conditions", "Privacy Policy", "Manage Cookies"].map((item) => (
            <span
              key={item}
              className="relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gray-600 after:transition-all hover:after:w-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

    </footer>
  );
}
