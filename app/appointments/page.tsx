import type { Metadata } from "next";
import AppointmentForm from "./components/AppointmentForm";
import WhatsAppCTA from "./components/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: "Schedule your dental appointment with our experienced dentists.",
};

export default function AppointmentsPage() {
  return (
    <main className="container mx-auto px-6 py-16 max-w-5xl">
      <header className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Book an Appointment
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Schedule your visit with ease. Choose your preferred option below and
          we’ll take care of the rest.
        </p>
      </header>

      <section className="grid gap-12 md:grid-cols-2 items-start">
        <AppointmentForm />
        <WhatsAppCTA />
      </section>
    </main>
  );
}
