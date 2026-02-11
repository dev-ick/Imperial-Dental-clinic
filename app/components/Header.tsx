import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";

export default function Header() {
  return (
      <header className="sticky top-0 z-50 bg-white">

      {/* TOP HEADER: Logo + Contact */}
      <div className="w-full px-6 pt-4 pb-1 flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/dentlogo3.png"
            alt="Dental Clinic Logo"
            width={32}
            height={32}
            priority
          />
          <span className="text-lg text-indigo-900 font-semibold tracking-tight">
            Imperial Dental Clinic
          </span>
        </Link>

        {/* Contact */}
        <div className="flex items-center gap-2 text-sm font-medium">
          <Image
            src="/images/phone.png"
            alt="Phone"
            width={40}
            height={40}
          />
          <span className="text-[#650000] text-base font-bold">
            +254 700 000 000
            <br />
            +254 701 111 111
          </span>
        </div>
      </div>

      {/* NAVBAR: full-width border */}
      <div className="w-full border-b border-black">
        <Navbar />
      </div>
    </header>
  );
}
