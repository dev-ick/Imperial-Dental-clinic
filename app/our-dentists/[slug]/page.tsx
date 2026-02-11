// app/our-dentists/[slug]/page.tsx
import { teamMembers, TeamMember } from "../../data/dentists";
import DentistBio from "../components/DentistBio";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default function DentistProfilePage({ params }: Props) {
  // Find the team member by slug
  const member: TeamMember | undefined = teamMembers.find(
    (m) => m.slug === params.slug
  );

  // If no member is found, return 404
  if (!member) return notFound();

  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <DentistBio member={member} />
      </div>
    </section>
  );
}

