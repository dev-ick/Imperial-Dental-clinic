"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <div className="w-full border-b[1px] border-black">
      <nav className="hidden md:flex items-center justify-between w-full pt-1 pb-2">

        {/* LEFT: Navigation */}
        <div className="flex items-center gap-4 text-indigo-900 text-base font-medium mx-auto">
          <Dropdown
            title="General Dentistry"
            isOpen={openDropdown === "general"}
            onClick={() => toggleDropdown("general")}
          >
            <NavItem href="/services/dental-checkups" label="Dental Checkups" />
            <NavItem href="/services/white-fillings" label="White Fillings" />
            <NavItem href="/services/root-canal-therapy" label="Root Canal Therapy" />
            <NavItem href="/services/tooth-extraction" label="Tooth Extraction" />
          </Dropdown>

          <Dropdown
            title="Restorative & Cosmetic"
            isOpen={openDropdown === "restorative"}
            onClick={() => toggleDropdown("restorative")}
          >
            <NavItem href="/services/teeth-whitening" label="Teeth Whitening" />
            <NavItem href="/services/dental-bonding" label="Dental Bonding" />
            <NavItem href="/services/porcelain-veneers" label="Porcelain Veneers" />
            <NavItem href="/services/crowns-bridges" label="Crowns & Bridges" />
            <NavItem href="/services/dentures" label="Dentures" />
          </Dropdown>

          <Dropdown
            title="Orthodontics"
            isOpen={openDropdown === "orthodontics"}
            onClick={() => toggleDropdown("orthodontics")}
          >
            <NavItem href="/services/braces" label="Braces" />
            <NavItem href="/services/retainers" label="Retainers" />
            <NavItem
              href="/services/orthodontic-emergencies"
              label="Orthodontic Emergencies"
            />
          </Dropdown>

          <Dropdown
            title="Billing & Insurance"
            isOpen={openDropdown === "fees"}
            onClick={() => toggleDropdown("fees")}
          >
            <NavItem href="/billing-insurance/billing" label="Billing" />
            <NavItem href="/billing-insurance/insurance" label="Insurance" />
          </Dropdown>

          <Link href="/contact-us" className="hover:text-green-500 transition">
            Contact Us
          </Link>
        </div>
      </nav>
    </div>
  );
}

function Dropdown({
  title,
  isOpen,
  onClick,
  children,
}: {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (isOpen) {
          onClick();
        }
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClick]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={onClick}
        className={`flex items-center gap-2 transition ${
          isOpen ? "text-green-600" : "hover:text-green-500"
        }`}
      >
        {title}
        <span
          className={`inline-block transition-transform ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          ›
        </span>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-[8px] w-60 bg-white border border-t-0 shadow-lg z-50">
          <div className="py-2">{children}</div>
        </div>
      )}
    </div>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block px-4 py-2 text-sm hover:bg-green-50 hover:text-green-600 transition"
    >
      {label}
    </Link>
  );
}
