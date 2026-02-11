"use client";

import Link from "next/link";
import React from "react";
import { ArrowRight, MapPin, Calendar, DollarSign, Users, ClipboardCheck, Sparkles, Search, MessageCircle, ChevronDown, ShieldCheck } from "lucide-react";
import { motion, type Variants } from "framer-motion";

export const OrthodonticEmergenciesHero = () => {
  const subtitle = "Go to theHomepage";

  return (
    <section className="w-full rounded-3xl overflow-hidden shadow-lg bg-white">
      <Link href="/" className="block">
        <motion.div className="relative w-full overflow-hidden cursor-pointer" whileHover="hover">
          <motion.img
            src="/images/orthodox.png"
            alt="Orthodontic Emergency"
            className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            variants={{
              hover: { filter: "brightness(0.8)", transition: { duration: 0.3 } },
            }}
          />

          <motion.div
            className="absolute bottom-6 right-6 flex items-center gap-2 text-white text-xs sm:text-sm md:text-base font-medium drop-shadow-lg"
            variants={{
              hover: { color: "#06b6d4" },
            }}
          >
            <motion.span className="hidden sm:inline transition-colors duration-300" variants={{ hover: { color: "#06b6d4" } }}>
              {subtitle.split("").map((char, i) => (
                <motion.span key={i}>{char === " " ? "\u00A0" : char}</motion.span>
              ))}
            </motion.span>

            <motion.span
              className="text-lg sm:text-xl md:text-2xl"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              variants={{
                hover: {
                  x: [0, 16, -6, 0],
                  opacity: [1, 0, 1, 1],
                  color: "#06b6d4",
                  transition: { duration: 0.9, ease: "easeInOut" },
                },
              }}
              transition={{
                delay: 3.6,
                type: "spring",
                stiffness: 200,
                damping: 12,
              }}
            >
              →
            </motion.span>
          </motion.div>
        </motion.div>
      </Link>

      <div className="relative px-6 py-8 sm:px-12 sm:py-12 bg-white rounded-b-3xl shadow-[0_8px_10px_-4px_rgba(0,0,0,0.45)]">
        <div className="absolute inset-0 bg-white/90 rounded-b-3xl" />
        <p className="relative text-[#161E54] text-sm sm:text-base md:text-lg max-w-5xl">
          Orthodontic emergencies can be painful and distressing. Quick professional care prevents damage to your braces, aligners or teeth and helps protect your treatment progress.
        </p>
      </div>
    </section>
  );
};

const OrthodonticEmergencies = () => {
  const riseUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 180, damping: 18 } },
  } as unknown as Variants;

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  } as unknown as Variants;

  const textContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } } as unknown as Variants;
  const textItem = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 140, damping: 18 } },
  } as unknown as Variants;

  const sectionRise = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 18 } },
  } as unknown as Variants;

  const sectionChildren = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14, delayChildren: 0.12 } },
  } as unknown as Variants;

  const itemRise = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 160, damping: 20 } },
  } as unknown as Variants;

  const benefitsSection = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  } as unknown as Variants;

  const titleRise = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 18 } },
  } as unknown as Variants;

  const benefitItemSlide = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 140, damping: 20 } },
  } as unknown as Variants;

  const imageCurtain = {
    hidden: { clipPath: "inset(0 0 100% 0)" },
    visible: { clipPath: "inset(0 0 0% 0)", transition: { duration: 0.9 } },
  } as unknown as Variants;

  const faqSection = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 18, staggerChildren: 0.12, delayChildren: 0.15 },
    },
  } as unknown as Variants;

  const faqItemRise = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 140, damping: 20 } },
  } as unknown as Variants;

  const cardContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  } as unknown as Variants;

  const cardEnter: Variants = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 18 },
    },
  };

  const orthoCards = [
    {
      imageSrc: "/images/emerg3.jpeg",
      title: "Broken or Loose Bracket",
      teaser: "Bracket detached or loose?",
      full: "A broken or loose bracket can irritate the cheek or gum and may affect tooth movement. We can usually reattach it quickly. Avoid hard foods until fixed.",
    },
    {
      imageSrc: "/images/emerg4.jpg",
      title: "Poking or Irritating Wire",
      teaser: "Wire poking your cheek or tongue?",
      full: "A poking wire is one of the most common orthodontic emergencies. You can use orthodontic wax as a temporary cover. We’ll trim or adjust the wire same-day.",
    },
    {
      imageSrc: "/images/emerg2.jpg",
      title: "Lost Ligature / Elastic",
      teaser: "Missing rubber band or tie?",
      full: "Lost ligatures rarely cause major problems but may slow treatment slightly. We can replace them quickly during your next visit or sooner if needed.",
    },
    {
      imageSrc: "/images/emerg1.jpg",
      title: "Broken Removable Appliance",
      teaser: "Cracked or broken aligner / retainer?",
      full: "Do NOT wear a broken removable appliance. Bring all pieces to the clinic. We’ll assess whether it needs repair or replacement.",
    },
  ];

  const emergencySteps = [
    {
      step: "01",
      icon: Search,
      title: "Quick Assessment",
      description: "We examine the problem, check for damage to teeth or appliances, and assess discomfort level.",
      bg: "from-[#F3F7FB] to-[#E8EEF6]",
    },
    {
      step: "02",
      icon: ClipboardCheck,
      title: "Pain Relief & Protection",
      description: "We apply relief (wax, trimming, or temporary adjustments) and protect soft tissues from irritation.",
      bg: "from-[#F2FBF7] to-[#E6F3EE]",
    },
    {
      step: "03",
      icon: Sparkles,
      title: "Repair or Replacement",
      description: "Broken parts are repaired, reattached or replaced to restore proper function and treatment progress.",
      bg: "from-[#F6F4FA] to-[#ECE9F3]",
    },
    {
      step: "04",
      icon: MessageCircle,
      title: "Care Instructions",
      description: "You receive clear guidance on what to avoid and how to prevent similar issues in the future.",
      bg: "from-[#FAFBFC] to-[#EEF2F6]",
    },
  ];

  const orthoBenefits = [
    {
      icon: Search,
      title: "Prevent Treatment Delay",
      text: "Quick fixes keep your teeth moving according to the treatment plan.",
    },
    {
      icon: Sparkles,
      title: "Reduce Pain & Discomfort",
      text: "Immediate relief from poking wires, loose brackets, or irritation.",
    },
    {
      icon: ShieldCheck,
      title: "Protect Teeth & Appliances",
      text: "Avoid damage to braces, aligners, teeth or gums from broken parts.",
    },
    {
      icon: MessageCircle,
      title: "Expert Guidance",
      text: "Get professional advice on how to manage appliances until your next visit.",
    },
  ];

  const orthoFAQs = [
    {
      q: "What counts as an orthodontic emergency?",
      a: "Severe pain, broken brackets/appliances, poking wires causing cuts, loose bands affecting treatment, or swallowed/broken parts are considered emergencies.",
    },
    {
      q: "Can I fix it myself at home?",
      a: "You can use orthodontic wax temporarily for poking wires. Never cut wires or use household tools — always seek professional care.",
    },
    {
      q: "Will I need to pay extra for emergency visits?",
      a: "Most orthodontic emergencies are covered under your treatment plan. We’ll inform you of any additional costs beforehand.",
    },
    {
      q: "How soon should I come in?",
      a: "For severe pain, broken appliances or loose brackets — same day or next day. For minor irritation — within a few days.",
    },
  ];

  return (
    <>
        <motion.section
          className="bg-[#f5ffff] py-10 md:py-14 mt-10 md:mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div className="text-center max-w-3xl mx-auto mb-8 md:mb-10" variants={textContainer}>
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl font-bold text-[#071c2f] leading-tight"
              variants={textItem}
            >
              Common Orthodontic Emergencies
            </motion.h2>

            <motion.p
              className="mt-3 text-[#3b4a5a] text-sm sm:text-base leading-relaxed"
              variants={textItem}
            >
              These are the most frequent orthodontic problems we see — most can be fixed quickly and easily.
            </motion.p>
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6" variants={cardContainer}>
            {orthoCards.map((item) => (
              <motion.div
                key={item.title}
                variants={cardEnter}
                className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                style={{
                  backgroundImage: `url(${item.imageSrc})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 220, damping: 20 },
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#071c2f]/85 via-[#071c2f]/45 to-transparent/30 transition-opacity duration-300 group-hover:opacity-95" />

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-white z-10 text-left">
                  <h3 className="font-semibold text-base sm:text-lg md:text-xl leading-tight drop-shadow-md">
                    {item.title}
                  </h3>

                  <div className="mt-1.5 text-xs sm:text-sm leading-snug tracking-tight">
                    <div className="transition-opacity duration-400 group-hover:opacity-70">{item.teaser}</div>

                    <motion.div
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      whileHover={{ height: "auto", opacity: 1 }}
                      transition={{
                        height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                        opacity: { duration: 0.3, ease: "easeOut", delay: 0.12 },
                      }}
                    >
                      <div className="pt-2 pb-3 text-xs sm:text-sm leading-snug">{item.full}</div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="text-center mt-8 md:mt-10" variants={riseUp}>
            <Link href="/appointments">
              <motion.button
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#650000] hover:bg-[#8A1A1A] text-white px-5 py-2.5 rounded-full font-medium text-sm shadow-md transition-all mb-6"
              >
                Get Emergency Help Now
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <motion.div
        className="mt-16 bg-[#eaf4fb] rounded-3xl p-10 sm:p-14 shadow-lg"
        variants={sectionRise}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        <motion.div variants={sectionChildren}>
          <motion.div className="text-center max-w-3xl mx-auto mb-12" variants={itemRise}>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#071c2f]">What to Expect During Your Emergency Visit</h2>
          </motion.div>

          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" variants={sectionChildren}>
            {emergencySteps.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  variants={itemRise}
                  className={`bg-gradient-to-br ${item.bg} rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center flex flex-col items-center`}
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.25, ease: "easeOut" },
                  }}
                >
                  <span className="text-[#7A1F2A] font-semibold text-sm mb-2">
                    {item.step}
                  </span>

                  <Icon
                    className="w-8 h-8 text-[#ff0033] mb-4"
                    strokeWidth={1}
                  />

                  <h3 className="font-semibold text-lg mb-2 text-[#071C2F]">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#3b4a5a] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-20"
        variants={benefitsSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="bg-[#eaf4fb] rounded-3xl overflow-hidden shadow-lg">
          <motion.h2
            variants={titleRise}
            className="text-lg sm:text-xl font-bold text-[#071c2f] text-center py-10"
          >
            Benefits of Prompt Orthodontic Emergency Care
          </motion.h2>

          <div className="grid lg:grid-cols-2">
            <motion.div
              className="p-10 sm:p-14"
              variants={benefitsSection}
            >
              <ul className="space-y-5">
                {orthoBenefits.map((benefit) => (
                  <motion.li
                    key={benefit.title}
                    variants={benefitItemSlide}
                    className="flex gap-4 items-start"
                  >
                    <benefit.icon
                      className="w-6 h-6 text-[#ff0033] mt-0.5 shrink-0"
                      strokeWidth={1}
                    />
                    <div>
                      <h4 className="font-semibold text-base text-[#071c2f]">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-[#3b4a5a] leading-relaxed">
                        {benefit.text}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={imageCurtain}
              className="relative min-h-64 md:min-h-[420px] bg-cover bg-center"
              style={{ backgroundImage: "url('/images/benefit.png')" }}
            >
              <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-[#eaf4fb] to-transparent" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mt-20 bg-[#eef6fa] rounded-3xl p-8 sm:p-10 shadow-lg"
        variants={faqSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          variants={faqItemRise}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-[#071c2f]">
            Frequently Asked Questions About Orthodontic Emergencies
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            className="space-y-3"
            variants={faqSection}
          >
            {orthoFAQs.map((item, index) => (
              <motion.details
                key={index}
                variants={faqItemRise}
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
                className="group bg-white rounded-2xl shadow-sm border border-[#e3eef6] p-4"
              >
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-semibold text-sm text-[#071c2f]">
                    {item.q}
                  </span>
                  <ChevronDown className="w-5 h-5 text-[#ff0033] transition-transform group-open:rotate-180" />
                </summary>

                <p className="mt-3 text-sm text-[#3b4a5a] leading-relaxed">
                  {item.a}
                </p>
              </motion.details>
            ))}
          </motion.div>

          <motion.div
            variants={faqItemRise}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="relative rounded-3xl shadow-lg border border-[#eef3f8] overflow-hidden max-w-sm"
          >
            <div className="relative bg-white">
              <img
                src="/images/doc.png"
                alt="Confident orthodontic professional"
                className="w-full h-72 object-cover object-top"
              />

              <div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2
                          rounded-full p-1.5 shadow-md border border-[#e1dcec] z-20
                          bg-[radial-gradient(circle_at_center,#F6F4FA_0%,#ECE9F3_70%)]"
              >
                <ShieldCheck
                  className="w-6 h-6 text-green-600"
                  strokeWidth={1.5}
                />
              </div>
            </div>

            <div className="relative z-10 p-5 text-center bg-gradient-to-br from-[#F6F4FA] to-[#ECE9F3]">
              <h3 className="text-base font-semibold text-[#071c2f]">
                Trusted Orthodontic Team
              </h3>

              <p className="mt-2 text-sm text-[#3b4a5a] leading-relaxed">
                Our specialists follow strict protocols, use modern orthodontic tools,
                and maintain the highest hygiene standards.
              </p>

              <p className="mt-3 text-[11px] font-medium text-[#1fc600] uppercase tracking-wide">
                Certified • Experienced • Patient-Centered
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={faqItemRise}
          className="mt-14 text-center"
        >
          <h3 className="text-2xl font-semibold text-[#071c2f] mb-4">
            Having an Orthodontic Emergency?
          </h3>
          <a
            href="/appointments"
            className="inline-block bg-[#650000] text-white px-6 py-3 
            rounded-full font-semibold shadow-md
            transition-all duration-200 ease-out
            hover:bg-[#8A1A1A] hover:scale-[1.04]"
          >
            Contact Us Now
          </a>
        </motion.div>
      </motion.div>
    </>
  );
};

function ActionButton({
  icon: Icon,
  label,
  href = "#placeholder",
  className = "",
}: {
  icon: React.ElementType;
  label: string;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`
        w-full flex items-center justify-between 
        bg-[#161E54]/50
        rounded-xl 
        px-4 py-1
        text-cyan-300 
        font-small
        shadow-sm 
        hover:shadow-md 
        transition
        ${className} 
      `}
    >
      <span className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-[#ff0033]" />
        {label}
      </span>
      <ArrowRight className="w-4 h-4" />
    </a>
  );
}

export default OrthodonticEmergencies;