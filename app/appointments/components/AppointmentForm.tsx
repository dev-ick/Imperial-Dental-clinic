"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";

export default function AppointmentForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    const payload = {
      client_name: formData.get("name") as string,
      client_email: formData.get("email") as string || "N/A", // optional if you want email field
      client_phone: formData.get("phone") as string,
      service_required: formData.get("service") as string,
      appointment_date: formData.get("date") as string,
      submission_date: new Date().toLocaleString(),
      reason: formData.get("reason") as string || "N/A",
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        payload,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      router.push("/appointments/success");
    } catch (err) {
      console.error(err);
      setError("Unable to send request. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Request an Appointment
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="email"
            type="email"
            placeholder="Email (optional)"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <select
            name="service"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
          <option value="">Select a Service</option>
          <option value="Dental Checkups">Dental Checkups</option>
          <option value="White Fillings">White Fillings</option>
          <option value="Root Canal Therapy">Root Canal Therapy</option>
          <option value="Tooth Extraction">Tooth Extraction</option>
          <option value="Teeth Whitening">Teeth Whitening</option>
          <option value="Dental Bonding">Dental Bonding</option>
          <option value="Porcelain Veneers">Porcelain Veneers</option>
          <option value="Crowns Bridges">Crowns Bridges</option>
          <option value="Dentures">Dentures</option>
          <option value="Braces">Braces</option>
          <option value="Retainers">Retainers</option>
          <option value="Orthodontic Emergencies">Orthodontic Emergencies</option>
        </select>
        </div>
        <input
          name="date"
          type="date"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />

        <textarea
          name="reason"
          placeholder="Reason for visit (optional)"
          rows={4}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#650000] hover:bg-[#7A0A0A] text-white rounded-full py-2 font-semibold transition disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
}
