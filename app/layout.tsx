import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Enamel Dental Clinic",
  description: "Modern, patient-focused dental care",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins bg-white text-gray-900 antialiased`}>
        <Header />

        {/* Page content */}
        <main>{children}</main>

        {/* Global footer */}
        <Footer />
      </body>
    </html>
  );
}

