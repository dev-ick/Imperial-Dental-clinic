export type TeamMember = {
  slug: string;
  name: string;
  role: "Dentist" | "Dental Nurse";
  specialty: string;
  experience: string;
  image: string;
  bio: string;
};

export const teamMembers: TeamMember[] = [
  // ───────────────── Dentists ─────────────────
  {
    slug: "dr-jane-mwangi",
    name: "Dr. Jane Mwangi",
    role: "Dentist",
    specialty: "General & Cosmetic Dentistry",
    experience: "8+ Years Experience",
    image: "/images/team/jane.jpg",
    bio: `
    Dr. Jane Mwangi is a compassionate general dentist with a strong focus
    on preventive and cosmetic care. She is known for her gentle approach
    and dedication to patient education.
    `,
  },
  {
    slug: "dr-eric-otieno",
    name: "Dr. Eric Otieno",
    role: "Dentist",
    specialty: "Orthodontics",
    experience: "10+ Years Experience",
    image: "/images/team/eric.jpg",
    bio: `
    Dr. Eric Otieno specializes in orthodontic treatment for both adults
    and children. He is passionate about creating confident smiles using
    modern, evidence-based techniques.
    `,
  },
  {
    slug: "dr-linda-wanjiku",
    name: "Dr. Linda Wanjiku",
    role: "Dentist",
    specialty: "Pediatric Dentistry",
    experience: "6+ Years Experience",
    image: "/images/team/linda.jpg",
    bio: `
    Dr. Linda Wanjiku focuses on providing comfortable and friendly dental
    care for children. She works closely with parents to build lifelong
    healthy oral habits.
    `,
  },

  // ───────────────── Nurses ─────────────────
  {
    slug: "nurse-mary-kinuthia",
    name: "Mary Kinuthia",
    role: "Dental Nurse",
    specialty: "Chairside Assistance & Patient Care",
    experience: "7+ Years Experience",
    image: "/images/team/mary.jpg",
    bio: `
    Mary Kinuthia is an experienced dental nurse known for her calm
    demeanor and attention to detail. She ensures patients feel relaxed
    and supported throughout their visits.
    `,
  },
  {
    slug: "nurse-susan-atieno",
    name: "Susan Atieno",
    role: "Dental Nurse",
    specialty: "Sterilization & Infection Control",
    experience: "5+ Years Experience",
    image: "/images/team/susan.jpg",
    bio: `
    Susan Atieno plays a key role in maintaining the highest standards of
    hygiene and infection control within the clinic, ensuring patient
    safety at all times.
    `,
  },
  {
    slug: "nurse-peter-kamau",
    name: "Peter Kamau",
    role: "Dental Nurse",
    specialty: "Patient Preparation & Post-Care",
    experience: "4+ Years Experience",
    image: "/images/team/peter.jpg",
    bio: `
    Peter Kamau supports both dentists and patients by ensuring smooth
    preparation before procedures and clear guidance during post-treatment
    care.
    `,
  },
];
