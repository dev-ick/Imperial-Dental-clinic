// app/our-dentists/components/DentistCard.tsx
import Link from "next/link";
import Image from "next/image";
import { teamMembers, TeamMember } from "../../data/dentists"; // make sure this points to your data file

export default function DentistCard({ member }: { member: TeamMember }) {
  return (
    <Link
      href={`/our-dentists/${member.slug}`}
      className="group bg-white rounded-3xl border border-[#eef3f8] shadow-sm hover:shadow-lg transition overflow-hidden"
    >
      <div className="relative h-56 sm:h-64 md:h-64">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <span className="text-sm text-[#2446f5] font-medium">{member.role}</span>
        <h3 className="mt-1 text-xl font-semibold text-[#0f172a]">{member.name}</h3>
        <p className="mt-1 text-gray-600">{member.specialty}</p>
        <p className="mt-2 text-sm text-gray-500">{member.experience}</p>
      </div>
    </Link>
  );
}
