import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function AppointmentSuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center bg-white rounded-3xl shadow-lg p-8 border border-[#eef3f8]">
        <CheckCircle className="mx-auto h-14 w-14 text-green-600" strokeWidth={1.5} />

        <h1 className="mt-4 text-2xl font-semibold text-gray-900">
          Appointment Request Sent
        </h1>

        <p className="mt-3 text-gray-600 leading-relaxed">
          Thank you for contacting us. Your appointment request has been
          successfully submitted. Our team will review it and get back to you
          shortly.
        </p>

        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-[#2446f5] px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
