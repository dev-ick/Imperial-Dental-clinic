// app/our-dentists/components/DentistBio.tsx
import Image from "next/image";
import { TeamMember } from "../../data/dentists";

type Props = {
  member: TeamMember;
};

export default function DentistBio({ member }: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-8 p-6 md:p-12">
      {/* Image */}
      <div className="relative w-64 h-64 md:w-72 md:h-72 flex-shrink-0 rounded-xl overflow-hidden shadow-md">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Bio Info */}
      <div className="flex-1">
        <span className="text-sm text-[#2446f5] font-medium">{member.role}</span>
        <h2 className="mt-2 text-3xl font-bold text-[#0f172a]">{member.name}</h2>
        <p className="mt-1 text-gray-600 font-medium">{member.specialty}</p>
        <p className="mt-1 text-gray-500">{member.experience}</p>

        <div className="mt-4 text-gray-700 leading-relaxed whitespace-pre-line">
          {member.bio}
        </div>
      </div>
    </div>
  );
}
