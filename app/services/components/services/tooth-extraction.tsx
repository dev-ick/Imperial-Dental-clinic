"use client";

import Link from "next/link";
import React from "react";
import {ArrowRight,MapPin,Calendar,DollarSign,Users, Syringe,Scissors,HeartPulse,ShieldAlert,Search,AlignVerticalJustifyCenter,ChevronDown,ShieldCheck} from "lucide-react";
import { motion, cubicBezier, type Variants } from "framer-motion";

export const ToothExtractionHero = () => {
  const subtitle =
    "The Dental Clinic With The Best Dentists in Nairobi";
  
  return (
    <section className="w-full rounded-3xl overflow-hidden shadow-lg bg-white">
      {/* Image section */}
      <Link href="/" className="block">
        <motion.div
          className="relative w-full overflow-hidden cursor-pointer"
          whileHover="hover"
        >
          {/* Image zoom */}
          <motion.img
            src="/images/extraction.jpg"
            alt="Dental Checkup"
            className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            variants={{
              hover: { filter: "brightness(0.8)", transition: { duration: 0.3 } },
            }}
          />

          {/* Title */}
          <motion.h2
            className="absolute bottom-6 left-6 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg"
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{ color: "#06b6d4" }} // cyan on hover
            transition={{
              delay: 0.6,
              type: "spring",
              stiffness: 180,
              damping: 14,
            }}
          >
            Tooth Extraction
          </motion.h2>

          {/* Subtitle + arrow */}
          <motion.div
            className="absolute bottom-6 right-6 flex items-center gap-2 text-white text-xs sm:text-sm md:text-base font-medium drop-shadow-lg"
            variants={{
              hover: { color: "#06b6d4" }, // entire text cyan on hover
            }}
          >
            <motion.span
              className="transition-colors duration-300"
              variants={{
                hover: { color: "#06b6d4" },
              }}
            >
              {subtitle.split("").map((char, i) => (
                <motion.span key={i}>{char === " " ? "\u00A0" : char}</motion.span>
              ))}
            </motion.span>

            {/* Arrow */}
            <motion.span
              className="text-lg sm:text-xl md:text-2xl"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              variants={{
                hover: {
                  x: [0, 16, -6, 0],
                  opacity: [1, 0, 1, 1],
                  color: "#06b6d4", // cyan
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

      {/* Description section */}
      <div className="relative px-6 py-8 sm:px-12 sm:py-12 bg-white rounded-b-3xl shadow-[0_8px_10px_-4px_rgba(0,0,0,0.45)]">
        <div className="absolute inset-0 bg-white/90 rounded-b-3xl" />
        <p className="relative text-[#161E54] text-sm sm:text-base md:text-lg max-w-5xl">
        Tooth extractions remove severely damaged or infected teeth, protecting your overall oral health. 
        They prevent pain, stop infection, and keep your smile strong.
        </p>
      </div>
    </section>
  );
};

const ToothExtraction = () => {

  const riseUp = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 180,
        damping: 18,
      },
    },
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

const deckContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.3,  // short pause before stack approaches
    },
  },
};

const deckCardVariant = (index: number) => {
  const isMiddle = index === 1;
  const direction = index === 0 ? -1 : 1;  // left: -1, right: +1

  return {
    hidden: {
      scale: 0.75,  // start smaller (zoomed out, "away from table")
      opacity: isMiddle ? 0.9 : 0.6,  // middle clearer, sides "behind"
      x: isMiddle ? 0 : direction * 4,  // stacked at center, tiny peek (like card number visible)
      y: 60,  // start "below" (positive y = from bottom, approaching table)
      filter: isMiddle ? "blur(0px)" : "blur(1.5px)",  // sides feel stacked behind
      zIndex: isMiddle ? 30 : 10,  // middle on top
    },
    visible: {
      scale: 1,
      opacity: 1,
      x: isMiddle ? 0 : direction * 16,  // tight final spread (adjust 12-20 for spacing)
      y: 0,
      filter: "blur(0px)",
      zIndex: isMiddle ? 30 : index === 0 ? 20 : 25,
      transition: {
        // Sequence: approach/zoom first, then spread
        scale: {
          type: "spring" as const,
          stiffness: 120,  // gentle for "slowly coming towards"
          damping: 20,
          delay: isMiddle ? 0 : 0.1,  // middle starts zoom, sides immediate
          duration: 0.6,  // longer for gentle approach
        },
        y: {
          type: "spring" as const,
          stiffness: 120,
          damping: 20,
          delay: isMiddle ? 0 : 0.1,
          duration: 0.6,
        },
        opacity: { delay: isMiddle ? 0 : 0.1, duration: 0.5 },
        filter: { delay: isMiddle ? 0 : 0.1, duration: 0.5 },
        x: {
          type: "spring" as const,
          stiffness: 140,
          damping: 18,
          delay: 0.7,  // start spread AFTER zoom lands (adjust 0.6-0.8 for timing)
        },
      },
    },
  };
};

interface CardItem {
  imageSrc: string;
  title: string;
  description: string;
}

const cards: CardItem[] = [
  {
    imageSrc: "/images/gingivitis.png",
    title: "Bleeding Gums",
    description: "Do you notice blood when brushing or flossing? Early gum disease detection is key.",
  },
  {
    imageSrc: "/images/pain.jpg",
    title: "Tooth Pain",
    description: "Persistent toothaches or sensitivity are strong reasons to book a checkup.",
  },
  {
    imageSrc: "/images/regular.png",
    title: "Routine Checkups",
    description: "Even without symptoms, visits every 6 months help prevent future problems.",
  },
];

const cardEnter: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

const textVariants: Variants = {
  collapsed: {
    maxHeight: 40, // teaser (~2 lines)
    opacity: 0.9,
  },
  expanded: {
    maxHeight: 120, // full text
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};



const textContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const textItem: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 18,
    },
  },
};

const sectionRise: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

const sectionChildren: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

const itemRise: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 160,
      damping: 20,
    },
  },
};

const benefitsSection: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const titleRise: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

const benefitItemSlide: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 20,
    },
  },
};

const imageCurtain: Variants = {
  hidden: {
    clipPath: "inset(0 0 100% 0)",
  },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const faqSection: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const faqItemRise: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 20,
    },
  },
};

const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12, 
      delayChildren: 0.15,   
    },
  },
};

const MotionArrowRight = motion(ArrowRight);

const arrowVariants = {
  hover: {
    x: [0, 14, -14, 0],
    opacity: [1, 0, 0, 1],
  },
};

  return (
    <>
      <section className="py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 rounded-2xl overflow-hidden shadow-lg relative">

            {/* LEFT: Text Content */}
            <motion.div
              className="bg-[#eaf4fb] p-8 flex flex-col justify-center"
              variants={container}
              initial="hidden"
              whileInView="visible" 
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h1
                variants={riseUp}
                className="text-base md:text-xl font-semibold text-[#071c2f] leading-snug"
              >
                Safeguard Your Health with Necessary Tooth Extractions
              </motion.h1>

              <motion.p
                variants={riseUp}
                className="mt-4 text-[#3b4a5a] text-sm md:text-sm leading-relaxed max-w-xl"
              >
                Tooth extractions are performed when a tooth is too damaged, decayed, or infected to be saved. 
                By removing problem teeth, extractions prevent the spread of infection, relieve pain, and protect surrounding teeth and gums. 
                This essential treatment helps maintain overall oral health, supports long‑term comfort, and ensures your smile remains strong and functional.
              </motion.p>
              <Link href="/appointments">
                <motion.button
                  variants={riseUp}
                  whileHover="hover"
                  className="mt-6 inline-flex items-center gap-3 
                            bg-[#650000] hover:bg-[#8A1A1A] transition 
                            text-white
                            px-3 py-1.5 rounded-full font-medium shadow-md"
                >
                  <span className="relative z-10">
                    Book A Consultation
                  </span>

                  <motion.span
                    variants={{
                      hover: {
                        x: [0, 14, -14, 0],
                        opacity: [1, 0, 0, 1],
                      },
                    }}
                    initial={false}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    className="flex items-center"
                  >
                    <ArrowRight className="w-5 h-5 stroke-[2.2]" />
                  </motion.span>
                </motion.button>
              </Link>
            </motion.div>

            {/* RIGHT: Image (NO animation yet) */}
            <div
              className="relative w-full h-full"
              style={{
                backgroundImage: "url('/images/extraction3.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Buttons Overlay */}
              <motion.div
                className="absolute bottom-4 right-4 w-64 space-y-3 z-10"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div
                  variants={riseUp}
                  whileHover={{ x: 10 }}         // move 10px to the right on hover
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                >
                  <ActionButton icon={Users} label="See Our Dentists" href = "/our-dentists" />
                </motion.div>

                <motion.div
                  variants={riseUp}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                >
                  <ActionButton icon={MapPin} label="Find a Location" href = "/contact-us" />
                </motion.div>

                <motion.div
                  variants={riseUp}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                >
                  <ActionButton icon={Calendar} label="Book Appointment" href = "/appointments" />
                </motion.div>

                <motion.div
                  variants={riseUp}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                >
                  <ActionButton icon={DollarSign} label="Price Estimates" href = "/billing-insurance/billing" />
                </motion.div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* WHO NEEDS A DENTAL CHECKUP? Section */}
      <motion.section
        className="bg-[#f5ffff] py-10 md:py-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Title & intro */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-8 md:mb-10"
            variants={textContainer}
          >
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl font-bold text-[#071c2f] leading-tight"
              variants={textItem}
            >
              Who Should Get a Dental Checkup?
            </motion.h2>

            <motion.p
              className="mt-3 text-[#3b4a5a] text-sm sm:text-base leading-relaxed"
              variants={textItem}
            >
              Regular dental visits matter for everyone — especially if you're noticing any of these signs.
            </motion.p>
          </motion.div>

          {/* Cards – tighter spacing, smaller text, left-aligned */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
            variants={cardContainer}
          >
            {[
              {
                imageSrc: "/images/periodontitis.jpg",
                title: "Advanced Gum Disease",
                full: "Severe periodontitis can cause bone and gum loss. Extraction may be needed to stop infection and protect surrounding teeth.",
              },
              {
                imageSrc: "/images/impacted1.jpg",
                title: "Impacted Teeth",
                full: "Impacted teeth can lead to pain, crowding, or infection. Removal prevents complications and keeps your bite healthy.",
              },
              {
                imageSrc: "/images/overcrowded.jpg",
                title: "Overcrowding",
                full: "Extractions are sometimes required before orthodontic treatment to create room for proper alignment and a confident smile.",
              },

            ].map((item) => (
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
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071c2f]/85 via-[#071c2f]/45 to-transparent/30 transition-opacity duration-300 group-hover:opacity-95" />

                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-white z-10 text-left">
                      <h3 className="font-semibold text-base sm:text-lg md:text-xl leading-tight drop-shadow-md">
                        {item.title}
                      </h3>

                      {/* Text block */}
                      <div
                        className="
                          mt-1.5 text-xs sm:text-sm leading-snug tracking-tight
                          line-clamp-2 group-hover:line-clamp-none
                          transition-all duration-500 ease-out
                        "
                      >
                        {item.full}
                      </div>
                    </div>
                  </motion.div>
            ))}
          </motion.div>

          {/* Optional small CTA – smaller & tighter */}
          <motion.div
            className="text-center mt-8 md:mt-10"
            variants={riseUp}
          >
            <Link href="/appointments">
              <motion.button
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#650000] hover:bg-[#8A1A1A] text-white px-5 py-2.5 rounded-full font-medium text-sm shadow-md transition-all"
              >
                Book Checkup Now
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

            {/* WHAT TO EXPECT — animated nested section */}
            <motion.div
              className="mt-16 bg-[#eaf4fb] rounded-3xl p-10 sm:p-14 shadow-lg"
              variants={sectionRise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
            >
              <motion.div variants={sectionChildren}>
                {/* Header */}
                <motion.div
                  className="text-center max-w-3xl mx-auto mb-12"
                  variants={itemRise}
                >
                  <h2 className="text-xl sm:text-1xl font-bold text-[#071c2f]">
                    What to Expect During Your Visit
                  </h2>
                </motion.div>

                {/* Steps */}
                <motion.div
                  className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
                  variants={sectionChildren}
                >
                  {[
                    {
                      step: "01",
                      icon: Search,
                      title: "Initial Assessment",
                      description:
                        "The dentist examines the tooth and surrounding gums. X-rays may be taken to evaluate roots and bone.",
                      bg: "from-[#F3F7FB] to-[#E8EEF6]",
                    },
                    {
                      step: "02",
                      icon: Syringe,
                      title: "Anesthesia & Comfort",
                      description:
                        "Local anesthesia is administered to ensure the procedure is painless and comfortable.",
                      bg: "from-[#F2FBF7] to-[#E6F3EE]",
                    },
                    {
                      step: "03",
                      icon: Scissors,
                      title: "Tooth Removal",
                      description:
                        "The affected tooth is carefully loosened and extracted to prevent further infection or damage.",
                      bg: "from-[#F6F4FA] to-[#ECE9F3]",
                    },
                    {
                      step: "04",
                      icon: HeartPulse,
                      title: "Aftercare & Healing",
                      description:
                        "You receive instructions for recovery, including medication, hygiene, and follow-up visits to support healing.",
                      bg: "from-[#FAFBFC] to-[#EEF2F6]",
                    },
                  ].map((item) => {
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

            {/* Benefits of Regular Dental Checkups */}
            <motion.div
              className="mt-20"
              variants={benefitsSection}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="bg-[#eaf4fb] rounded-3xl overflow-hidden shadow-lg">

                {/* CENTERED TITLE */}
                <motion.h2
                  variants={titleRise}
                  className="text-lg sm:text-xl font-bold text-[#071c2f] text-center py-10"
                >
                  Benefits of Regular Dental Checkups
                </motion.h2>

                <div className="grid lg:grid-cols-2">

                  {/* LEFT: Benefits */}
                  <motion.div
                    className="p-10 sm:p-14"
                    variants={benefitsSection}
                  >
                    <ul className="space-y-5">
                      {[
                        {
                          icon: ShieldAlert,
                          title: "Stop Infection Spread",
                          description:
                            "Removing severely decayed or infected teeth prevents bacteria from spreading to surrounding teeth and gums.",
                          bg: "from-[#F3F7FB] to-[#E8EEF6]",
                        },
                        {
                          icon: Scissors,
                          title: "Relieve Pain",
                          description:
                            "Extraction eliminates persistent toothaches caused by damage, decay, or impaction, restoring comfort.",
                          bg: "from-[#F2FBF7] to-[#E6F3EE]",
                        },
                        {
                          icon: AlignVerticalJustifyCenter,
                          title: "Create Space",
                          description:
                            "Overcrowded mouths may require extractions to allow proper alignment during orthodontic treatment.",
                          bg: "from-[#F6F4FA] to-[#ECE9F3]",
                        },
                        {
                          icon: HeartPulse,
                          title: "Support Healing",
                          description:
                            "After removal, your mouth can heal properly, reducing complications and supporting long-term oral health.",
                          bg: "from-[#FAFBFC] to-[#EEF2F6]",
                        },
                      ].map((benefit) => (
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
                              {benefit.description}
                            </p>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* RIGHT: Image curtain reveal */}
                  <motion.div
                    variants={imageCurtain}
                    className="relative min-h-[420px] bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/benefit.png')" }}
                  >
                    {/* Left gradient edge */}
                    <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-[#eaf4fb] to-transparent" />
                  </motion.div>

                </div>
              </div>
            </motion.div>

            {/* FAQs Section */}
            <motion.div
              className="mt-20 bg-[#eef6fa] rounded-3xl p-8 sm:p-10 shadow-lg"
              variants={faqSection}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Header */}
              <motion.div
                variants={faqItemRise}
                className="text-center max-w-3xl mx-auto mb-10"
              >
                <h2 className="text-xl sm:text-lg font-bold text-[#071c2f]">
                  Everything you need to know before your dental checkup.
                </h2>
              </motion.div>

              {/* Content */}
              <div className="grid lg:grid-cols-2 gap-10 items-start">

                {/* FAQ Accordion */}
                <motion.div
                  className="space-y-3"
                  variants={faqSection}
                >
                  {[
                    {
                      q: "How long does a tooth extraction take?",
                      a: "Most routine extractions take 20–40 minutes, depending on the tooth’s condition and position. Impacted teeth may take longer.",
                    },
                    {
                      q: "Is a tooth extraction painful?",
                      a: "No. Local anesthesia is used to numb the area, so you should only feel pressure, not pain. Mild soreness afterward is normal and manageable.",
                    },
                    {
                      q: "Will I need stitches after extraction?",
                      a: "Not always. Simple extractions usually heal without stitches, but surgical or impacted teeth may require dissolvable stitches to aid healing.",
                    },
                    {
                      q: "What happens after the tooth is removed?",
                      a: "You’ll receive aftercare instructions to manage healing, including rest, hygiene, and follow-up visits if needed.",
                    },
                  ].map((item, index) => (
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

                {/* Assurance Card (image NOT animated) */}
                <motion.div
                  variants={faqItemRise}
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="relative rounded-3xl shadow-lg border border-[#eef3f8] overflow-hidden max-w-sm"
                >
                  {/* Image section */}
                  <div className="relative bg-white">
                    <img
                      src="/images/doc.png"
                      alt="Confident dental professional"
                      className="w-full h-72 object-cover object-top"
                    />

                    {/* Authority badge */}
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

                  {/* Content */}
                  <div className="relative z-10 p-5 text-center bg-gradient-to-br from-[#F6F4FA] to-[#ECE9F3]">
                    <h3 className="text-base font-semibold text-[#071c2f]">
                      Trusted Dental Professionals
                    </h3>

                    <p className="mt-2 text-sm text-[#3b4a5a] leading-relaxed">
                      Our clinic follows strict clinical protocols, modern technology,
                      and internationally recognized hygiene standards.
                    </p>

                    <p className="mt-3 text-[11px] font-medium text-[#1fc600] uppercase tracking-wide">
                      Certified • Experienced • Patient-Focused
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* CTA */}
              <motion.div
                variants={faqItemRise}
                className="mt-14 text-center"
              >
                <h3 className="text-2xl font-semibold text-[#071c2f] mb-4">
                  Ready for a Checkup?
                </h3>
                <a
                  href="/appointments"
                  className="inline-block bg-[#650000] text-white px-2 py-1.5 
                  rounded-full font-semibold shadow-md
                  transition-all duration-200 ease-out
                  hover:bg-[#8A1A1A] hover:scale-[1.04]"
                >
                  Book Appointment Now
                </a>
              </motion.div>
            </motion.div>

    </>
      );
    }

function ActionButton({
  icon: Icon,
  label,
  href = "#placeholder",   // default placeholder
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

    
export default ToothExtraction;