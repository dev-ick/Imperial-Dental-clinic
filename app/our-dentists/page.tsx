// app/our-dentists/page.tsx
import { teamMembers} from "../data/dentists";
import type { TeamMember } from "../data/dentists";

import DentistCard from "./components/DentistCard";

export default function OurDentistsPage() {
  return (
    <section className="bg-[#f9fbfd] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <header className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#0f172a]">
            Our Dental Team
          </h1>
          <p className="mt-4 text-gray-600">
            Meet our experienced dentists and dedicated nursing staff.
          </p>
        </header>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member: TeamMember) => (
            <DentistCard key={member.slug} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
