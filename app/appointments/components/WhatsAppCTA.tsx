export default function WhatsAppCTA() {
  return (
    <div className="bg-[#f8fafc] rounded-2xl border border-gray-100 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-3">
        Prefer WhatsApp?
      </h2>

      <p className="text-gray-600 mb-6">
        Chat with our team directly and book your appointment in minutes.
      </p>

      <a
        href="https://wa.me/254700000000?text=Hello%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full sm:w-auto text-center bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-semibold transition"
      >
        Book via WhatsApp
      </a>
    </div>
  );
}
