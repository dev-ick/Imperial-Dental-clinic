import { Phone, MapPin, Clock, ShieldCheck, ParkingCircle } from "lucide-react";

export default function ContactUsPage() {
  return (
    <section className="min-h-screen bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-semibold text-[#161E54]">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are here to help. Reach out to us, visit our clinic, or get directions below.
          </p>
        </div>

        {/* Primary contact + map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact details */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-cyan-500 mt-1" />
              <div>
                <p className="font-medium text-[#161E54]">Call Us</p>
                <p className="text-gray-600">+254 7XX XXX XXX</p>
                <p className="text-sm text-gray-500">Mon – Sat, 8:00 AM – 6:00 PM</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-cyan-500 mt-1" />
              <div>
                <p className="font-medium text-[#161E54]">Visit Our Clinic</p>
                <p className="text-gray-600">Karen, Nairobi</p>
                <p className="text-sm text-gray-500">Near XYZ Mall, 2nd Floor</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-cyan-500 mt-1" />
              <div>
                <p className="font-medium text-[#161E54]">Opening Hours</p>
                <p className="text-gray-600">Monday – Friday: 8:00 AM – 6:00 PM</p>
                <p className="text-gray-600">Saturday: 9:00 AM – 3:00 PM</p>
                <p className="text-sm text-gray-500">Sunday & public holidays: Closed</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-[420px] rounded-2xl overflow-hidden border border-[#eef3f8] shadow-sm">
            <iframe
              title="Clinic location"
              src="https://www.google.com/maps?q=Karen%20Nairobi&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Secondary trust signals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <TrustCard
            icon={ShieldCheck}
            title="Licensed Professionals"
            description="Care provided by qualified and experienced dental professionals."
          />
          <TrustCard
            icon={ParkingCircle}
            title="Convenient Parking"
            description="Easy and secure parking available for all our patients."
          />
          <TrustCard
            icon={Clock}
            title="Reliable Scheduling"
            description="We respect your time with well-managed appointments."
          />
        </div>
      </div>
    </section>
  );
}

function TrustCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-[#eef3f8] bg-white p-6 shadow-sm space-y-3">
      <Icon className="w-7 h-7 text-cyan-500" />
      <h3 className="font-medium text-[#161E54]">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
