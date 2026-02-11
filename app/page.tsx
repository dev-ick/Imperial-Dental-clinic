"use client";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { Target,Medal, Eye,HandHeart,MessageCircle,User,BadgeCheck,PiggyBank,Umbrella,} from "lucide-react";
import { motion,useAnimation, useTransform,AnimatePresence,useInView, useMotionValue, animate, type Variants } from "framer-motion";
import Image from "next/image"; 
import MobileMenu from "./components/MobileMenu";
import { testimonials} from "./data/testimonials"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" }, // {}
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }, // {}
  },
};

const word: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" }, // {}
  },
};

type CountUpProps = {
  to: number;
  duration?: number;
  delay?: number;
};

export function CountUp({
  to,
  duration = 3.0,
  delay = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  const value = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(value, to, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
    });

    const unsubscribe = value.on("change", (latest) => {
      setDisplay(Math.floor(latest));
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [isInView, to, duration, delay, value]);

  return <span ref={ref}>{display}</span>;
}


export const curtainReveal: Variants = {
  hidden: {
    scaleY: 0,
    transformOrigin: "top",
  },
  visible: {
    scaleY: 1,
    transition: {
      duration: 1.1,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  },
};

export const overlayReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 24, // start slightly below its final position
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
      delay: 1.1, // MUST match curtainReveal duration
    },
  },
};

export const serviceIcons = {
  checkup: "/icons/checkup.png",
  alignment: "/icons/alignment.png",
  whitening: "/icons/whitening.png",
  implants: "/icons/implants.png",
  hygiene: "/icons/hygiene.png",
  extraction: "/icons/extraction.png",
  rootcanal: "/icons/root-canal.png",
  gum: "/icons/gum.png",
};

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

const riseUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: easeOut,
    },
  }),
};

const imageZoom: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 0.7,
      ease: easeOut,
    },
  },
};

const slideLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: easeOut,
    },
  }),
};


const typedFast: Variants = {
  hidden: {
    clipPath: "inset(0 100% 0 0)",
  },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: {
      delay: 1.4,
      duration: 0.6,
      ease: [0, 0, 1, 1],
    },
  },
};


const sectionReveal: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const CustomerSatisfactionMeter = () => {
  const count = useMotionValue(0);
  const display = useTransform(count, (latest) =>
    Math.floor(latest).toString().padStart(2, "0")
  );

  useEffect(() => {
    const controls = animate(count, 99, { duration: 2, ease: "easeOut" });
    return () => controls.stop();
  }, [count]);



  return (
    <div className="absolute top-8 right-8 z-10">
      <div className="flex items-center gap-3">
        <Medal className="w-18 h-18 text-[#650000]" strokeWidth={0.5} />

        <div>
          <motion.p className="text-5xl font-semibold text-[#650000] leading-none">
            {display && <motion.span>{display}</motion.span>}%
          </motion.p>

          <p className="text-xs text-[#650000] mt-5">
            Customer Satisfaction <br /> is Our Success
          </p>
        </div>
      </div>
    </div>
  );
};



export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const MotionLink = motion(Link);

export default function HomePage() {
  const [active, setActive] = useState<"mission" | "vision">("mission");
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const current = testimonials[index];

  const next = () => {
    setIndex((i) => (i + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance every 6 seconds, pauses on hover
  useEffect(() => {
    if (isPaused) return; // do nothing if paused
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const headline = ["Take Care of your Health and that of your ",
    "Family Today!"];

  return (
    <main className="bg-[#f5ffff] text-gray-900 overflow-hidden">
      <section className="max-w-7xl mx-auto px-6 py-8 relative overflow-hidden">
        <div className="relative z-10">
          <div className="grid md:grid-cols-2 gap-14 items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <div className="mb-4 flex items-center justify-between">
              <motion.div variants={fadeUp} className="text-base text-[#650000] font-semibold">
                or call {" "}
                <span className="underline underline-offset-2">+254 700 000 000</span>{" "}
                and {" "}
                <span className="underline underline-offset-2">+254 701 111 111</span>
              </motion.div>
            </div>

            <motion.h1 variants={stagger} className="text-4xl md:text-5xl text-[#161E54] font-bold leading-tight">
              {"We Are Ready To Make Your Smile Sparkle,".split(" ").map((w, i) => (
                <motion.span key={i} variants={word} className="inline-block mr-2">
                  {w}
                </motion.span>
              ))}
              <br />
              <motion.span
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 bg-[length:200%_200%] text-4xl font-semibold"
              >
                with care you can trust.
              </motion.span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 text-lg text-cyan-900">
              Comprehensive, patient-focused dental services delivered with precision, comfort, and care for every stage of your smile.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex gap-4">
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 bg-[#650000] text-white font-medium rounded-md hover:bg-[#800000] transition"
              >
                Book Appointment
              </motion.button>

              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 border border-[#800000] text-[#800000] bg-white font-medium rounded-md hover:bg-white hover:text-[#800000] transition"
              >
                View Services
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[360px] md:h-[460px] overflow-hidden rounded-lg -mr-6"
          >
            <Image src="/images/denthero.jpg" alt="Modern dental care" fill priority className="object-cover" />
          </motion.div>
          </div>
        </div>

        {/* Upward curved gradient at bottom of hero */}
        <div className="absolute left-0 right-0 bottom-0 w-full h-40 md:h-56 pointer-events-none">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full">
            <defs>
              <linearGradient id="heroCurveGrad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#E6EEF6" />
                <stop offset="80%" stopColor="#0A2540" />
                <stop offset="100%" stopColor="#07192B" />

              </linearGradient>
            </defs>
            <path d="M0,0 C300,120 1140,120 1440,0 L1440,320 L0,320 Z" fill="url(#heroCurveGrad)" />
          </svg>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 relative overflow-hidden text-white bg-[#07192B]">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-12"
        >
          {/* SMALL WELCOME LABEL */}
          <div className="flex items-center gap-3 mb-3">
            <Image
                src="/icons/dental1.svg"
                alt="Dental Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            <span className="text-lg font-semibold togglecase tracking-wide text-white/90">
              Welcome to Imperial Dental Clinic
            </span>
          </div>

          {/* MAIN HEADLINE */}
          <h2 className="text-left text-3xl md:text-5xl font-bold text-white/90 leading-tight">
            Beyond Dental Services:
            <br />
            Our Blueprint for Lasting Health
          </h2>
        </motion.div>


        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch"
        >

          {/* LEFT COLUMN — BLOCK QUOTE */}
          <motion.blockquote
            variants={fadeUp}
            className="relative text-left text-base md:text-lg leading-relaxed text-white/90 border-l-4 border-white/40 pl-6"
          >
            <span className="absolute -left-0 -top-6 text-6xl text-white font-serif">“</span>

            {introText.map((t, i) => (
              <p key={i} className="mt-4">
                {t}
              </p>
            ))}

            <span className="block mt-6 text-6xl text-white font-serif text-right">”</span>
          </motion.blockquote>

          {/* CENTER + RIGHT COLUMNS — SHARED BACKGROUND */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-2 bg-[#DAEBF4]/95 backdrop-blur-sm rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch p-6"
          >

            {/* CENTER COLUMN — IMAGE */}
            <motion.div className="flex">
              <motion.div
                variants={curtainReveal}
                className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-2xl"
              >
                {/* EXPERIENCE OVERLAY */}
                <motion.div
                  variants={overlayReveal}
                  className="absolute top-2 left-2 -mt-2 -ml-2 z-10
                            px-5 pt-6 pb-6 pl-6 text-[#09243C]"
                >
                  {/* ICON */}
                  <div className="absolute top-3 left-3 w-6 h-6">
                    <Image
                      src="/images/dentlogo2.png"
                      alt="Dental icon"
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col items-center mt-4">
                    <span className="text-4xl text-[#2f6b8a] font-bold leading-none tabular-nums">
                      <CountUp to={8} delay={1.2} />
                      <sup className="text-sm align-super ml-0.5">+</sup>
                    </span>
                    <span className="mt-2 text-sm font-medium leading-tight text-center">
                      Years of<br />Experience
                    </span>
                  </div>
                </motion.div>

                {/* IMAGE */}
                <Image
                  src="/images/dentist1.jpg"
                  alt="Enamel Dental Clinic"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN — MISSION / VISION */}
            <motion.div className="flex flex-col text-[#161E54] pb-6">

              {/* TOGGLE HEADERS */}
              <div className="flex gap-24 mb-6 border-b border-[#161E54]/30">
                <button
                  onClick={() => setActive("mission")}
                  className={`flex items-center gap-2 pb-3 text-lg font-semibold transition-colors ${
                    active === "mission"
                      ? "text-[#161E54] border-b-2 border-[#161E54]"
                      : "text-[#161E54]/50 hover:text-[#161E54]/80"
                  }`}
                >
                  <Target className="w-5 h-5" />
                  Our Mission
                </button>

                <button
                  onClick={() => setActive("vision")}
                  className={`flex items-center gap-2 pb-3 text-lg font-semibold transition-colors ${
                    active === "vision"
                      ? "text-[#161E54] border-b-2 border-[#161E54]"
                      : "text-[#161E54]/50 hover:text-[#161E54]/80"
                  }`}
                >
                  <Eye className="w-5 h-5" />
                  Our Vision
                </button>
              </div>

              {/* CONTENT SLIDER */}
              <div className="relative overflow-hidden flex-1">
                <AnimatePresence mode="wait">

                  {active === "mission" && (
                    <motion.div
                      key="mission"
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -40, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.25, 0.8, 0.25, 1] }}
                    >
                      <p className="mt-4 pl-5 pb-4 text-[#161E54]/90 leading-relaxed border-l-4 border-[#650000]">
                        To make world-class dental care accessible through innovative approaches,
                        transparent practices, and relationships built on trust.

                        <span className="block mt-4 mx-auto w-2/3 border-b border-[#161E54]/30 -translate-x-3"></span>
                      </p>

                      <p className="text-[#161E54]/90 leading-relaxed mt-4">
                        We’ve reimagined the patient experience—from thoughtfully designed waiting
                        areas to chairside manner that prioritizes listening before treatment.
                        Our appointment scheduling respects your time, while our follow-up
                        protocols ensure your recovery receives the same attention.
                      </p>

                      <ul className="mt-6 space-y-2 text-sm text-[#161E54]/80">
                        <li className="flex items-start gap-3">
                          <span className="text-[#650000]">✔</span>
                          <span>Friendly team you can call friends</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#650000]">✔</span>
                          <span>We accept many insurance plans and offer discounts</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#650000]">✔</span>
                          <span>Ethical Practice, Transparent Approach</span>
                        </li>
                      </ul>

                      <div className="mt-8">
                        <motion.button
                          className="inline-flex items-center gap-2 px-6 py-2 bg-[#650000] text-white font-semibold rounded-full hover:bg-[#7a0000]"
                          whileHover="hover"
                          initial="initial"
                        >
                          <span>View more about Our Clinic</span>
                          <motion.span
                            variants={{
                              initial: { x: 0, opacity: 1 },
                              hover: { x: [0, 14, -14, 0], opacity: [1, 0, 0, 1] },
                            }}
                            transition={{ duration: 0.9, ease: "easeInOut" }}
                          >
                            →
                          </motion.span>
                        </motion.button>
                      </div>
                    </motion.div>
                  )}

                  {active === "vision" && (
                    <motion.div
                      key="vision"
                      initial={{ y: -40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 40, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.25, 0.8, 0.25, 1] }}
                    >
                      <p className="mt-4 pl-5 text-[#161E54]/90 leading-relaxed border-l-4 border-[#650000]">
                        To be recognized as a premier dental practice where patients of all ages
                        find not just treatment, but genuine partnership in their journey to
                        optimal oral health and confidence.

                        <span className="block mt-4 mx-auto w-2/3 border-b border-[#161E54]/30 -translate-x-3"></span>
                      </p>

                      <p className="text-[#161E54]/90 leading-relaxed mt-4">
                        We continually integrate evidence-based innovations that enhance patient
                        outcomes while remaining thoughtfully selective—adopting new technologies
                        only after rigorous evaluation of their real value to your care experience.
                      </p>

                      <ul className="mt-6 space-y-2 text-sm text-[#161E54]/80">
                        <li className="flex items-start gap-3">
                          <span className="text-[#650000]">✔</span>
                          <span>Friendly team you can call friends</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#650000]">✔</span>
                          <span>We accept many insurance plans and offer discounts</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#650000]">✔</span>
                          <span>Ethical Practice, Transparent Approach</span>
                        </li>
                      </ul>

                      <div className="mt-8">
                        <motion.button
                          className="inline-flex items-center gap-2 px-6 py-3 bg-[#650000] text-white font-semibold rounded-full hover:bg-[#7a0000]"
                          whileHover="hover"
                          initial="initial"
                        >
                          <span>View more about Our Clinic</span>
                          <motion.span
                            variants={{
                              initial: { x: 0, opacity: 1 },
                              hover: { x: [0, 14, -14, 0], opacity: [1, 0, 0, 1] },
                            }}
                            transition={{ duration: 0.9, ease: "easeInOut" }}
                          >
                            →
                          </motion.span>
                        </motion.button>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>
            </motion.div>

          </motion.div>
        </motion.div>

        {/* BOTTOM CTA */}
        <div className="mt-20 flex justify-center">
          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 bg-[#650000] text-white font-semibold rounded-md hover:bg-[#7a0000]"
          >
            Book Online
          </motion.button>
        </div>

      </section>


        <section className="max-w-7xl mx-auto px-6 py-24 relative overflow-hidden bg-[#f5ffff]">
          {/* Top Mountain Curve */}


          {/* Section Content */}
          <div>
            {/* Section Heading */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={stagger}
              className="text-center"
            >
              <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-indigo-900">
                Our Key Services
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                We provide a full spectrum of dental care — from routine checkups to advanced cosmetic and orthodontic treatments.
              </motion.p>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={stagger}
              className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            >
              {services.map((s) => (
                <ServiceCard key={s.title} {...s} />
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* WHY CHOOSE US SECTION */}
        <motion.section
          className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-22 bg-[#D9EDF7] relative overflow-visible md:overflow-hidden rounded-t-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* LEFT CONTENT */}
          <div className="space-y-8 md:space-y-10">
            {/* Title 1 */}
            <motion.div
              variants={slideLeft}
              custom={0.9}
              className="inline-flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-full bg-[#650000] flex items-center justify-center text-white flex-shrink-0">
                <Image
                  src="/icons/dental1.svg"
                  alt="Dental Icon"
                  width={32}
                  height={32}
                />
              </div>
              <span className="text-lg font-semibold text-[#0F2A44]">
                Your Dental Health is Our Top Goal
              </span>
            </motion.div>

            {/* Typed heading */}
            <div className="overflow-hidden">
              <motion.h2
                variants={typedFast}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="block text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F2A44] leading-tight"
              >
                Why Choose Imperial Dental <br />Clinic?
              </motion.h2>
            </div>

            {/* Paragraph */}
            <motion.p
              variants={slideLeft}
              custom={0.9}
              className="text-lg text-[#334155] leading-relaxed"
            >
              Behind every procedure at Imperial Dental is a promise:
              <strong> your comfort matters</strong> as much as your results.
              Whether you're 5 or 85, anxious or at ease — every detail is designed
              around your unique needs.
            </motion.p>
          </div>

          {/* IMAGE */}
          <motion.div
            variants={imageZoom}
            className="relative overflow-hidden shadow-2xl w-full min-h-[220px] sm:min-h-[260px] md:min-h-[420px] aspect-[4/3] md:aspect-[16/10]"
          >
            <Image
              src="/images/dental1.jpg"
              alt="Modern Enamel Dental Clinic interior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>

        {/* FEATURE ITEMS */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-12 gap-y-10">
          {[
            {
              title: "Comfort First",
              icon: HandHeart,
              description:
                "Every detail is designed around your comfort. Dental anxiety doesn’t stand a chance here.",
            },
            {
              title: "Plain Language",
              icon: MessageCircle,
              description:
                "We explain everything in clear, simple terms so you understand exactly what’s happening.",
            },
            {
              title: "Kid-Friendly",
              icon: User,
              description:
                "Positive experiences where children build healthy habits without fear.",
            },
            {
              title: "Industry Certified",
              icon: BadgeCheck,
              description:
                "Strict standards for safety, hygiene, and quality care.",
            },
            {
              title: "No Surprise Bills",
              icon: PiggyBank,
              description:
                "Complete pricing transparency and flexible options.",
            },
            {
              title: "Smart Technology",
              icon: Umbrella,
              description:
                "Advanced dental technology for faster, gentler care.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={riseUp}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-[#650000] flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-white" />
              </div>

              <div>
                <h4 className="font-semibold text-[#0F2A44] text-base mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

        <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 bg-[#D9EDF7] relative overflow-hidden rounded-3xl rounded-t-none">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:p-12 items-center">

                  {/* LEFT: IMAGE */}
                  <div className="relative w-full h-56 md:h-[420px] rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                      src="/images/us.jpg"
                      alt="Karen Dental Clinic Team"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />

                    {/* Floating Tooth Icon */}
                    <div className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-[#650000] flex items-center justify-center shadow-lg">
                      <Image
                        src="/icons/dental1.svg"
                        alt="Dental icon"
                        width={36}
                        height={36}
                      />
                    </div>
                  </div>

                  {/* RIGHT: CONTENT */}
                  <div className="space-y-6">

                    {/* Heading */}
                    <div className="flex items-center gap-3 text-gray-900">
                      {/* Icon with rounded background */}
                      <span className="flex items-center justify-center h-8 w-8 rounded-full bg-[#650000]">
                        <Image
                          src="/icons/dental1.svg"
                          alt="Dental icon"
                          width={22}
                          height={22}
                          className="opacity-80"
                        />
                      </span>

                      {/* Text */}
                      <h3 className="text-xl font-semibold">
                        Meet Our Dentists at Imperial Dental Clinic
                      </h3>
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 leading-relaxed text-[15.5px]">
                      At Imperial Dental Clinic, I’m driven by the transformation I see daily—pain
                      turned to relief, embarrassment to confidence, fear to trust.
                      Every procedure isn’t just clinical work; it’s{" "}
                      <span className="underline font-medium">restoring dignity</span>.
                      I measure success not by treatments completed, but by lives
                      changed through healthier smiles.
                    </p>

                    <hr className="border-gray-200" />

                    {/* Footer */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

                      {/* Profile */}
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                          <img
                            src="/images/ceo.png"
                            alt="CEO"
                            className="w-full h-full object-cover object-center"
                          />
                        </div>

                        <div>
                          <p className="font-semibold text-gray-900">Dr.Stacey Wanjiku</p>
                          <p className="text-sm text-gray-600">
                            CEO Imperial Dental Clinic
                          </p>
                        </div>
                      </div>

                      {/* CTA */}
                      <motion.button
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#650000] text-white text-sm font-medium hover:bg-[#a70000] transition-colors"
                        whileHover="hover"
                        initial="initial"
                      >
                        View All The Dentists
                        <motion.span
                          className="inline-block"
                          variants={{
                            initial: { x: 0, opacity: 1 },
                            hover: { x: [0, 14, -14, 0], opacity: [1, 0, 0, 1] },
                          }}
                          transition={{ duration: 0.9, ease: "easeInOut" }}
                        >
                          →
                        </motion.span>
                      </motion.button>

                    </div>

                  </div>
                </div>
              </div>
      </section>

      {/*what our customers say */}
<section className="max-w-7xl mx-auto mt-4 md:mt-8 px-6 py-14 md:py-16 bg-[#F5F5F2] relative overflow-hidden rounded-3xl">
  {/* Right-side background image */}
  <div className="absolute inset-y-0 right-0 w-full md:w-[48%]">
    <img
      src="/images/customer.jpg"
      alt="Happy customer"
      className="w-full h-full object-cover"
    />

    {/* Minimal left-edge gradient */}
    <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-l from-transparent to-[#F5F5F2]" />

    {/* 99% badge – top-left of image */}
    <CustomerSatisfactionMeter />
  </div>

  {/* Content */}
  <div
    className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16"
    onMouseEnter={() => setIsPaused(true)}   // pause auto-advance on hover
    onMouseLeave={() => setIsPaused(false)}  // resume auto-advance
  >
    {/* Testimonial card */}
    <div className="bg-white rounded-3xl shadow-md p-12 md:p-14 max-w-3xl">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl md:text-[32px] font-semibold text-gray-900">
          What Our Customers Say?
        </h2>

        {/* Icon with background */}
        <div className="w-10 h-10 rounded-full bg-[#650000] flex items-center justify-center">
          <img
            src="/icons/dental1.svg"
            alt="Dental icon"
            className="w-5 h-5"
          />
        </div>
      </div>

      <p className="mt-3 text-sm text-gray-500">
        Overall Rating 4.9 / 150 reviews on Google
      </p>

      {/* Animated testimonial */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index} // key changes trigger AnimatePresence
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mt-8 text-lg text-gray-700 leading-relaxed">
            “{current.quote}”
          </p>

          <div className="mt-10 border-t pt-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div>
                <p className="text-sm font-medium text-gray-900">
                  {current.name}, {current.location}
                </p>
                <p className="text-xs text-gray-500">
                  {current.service}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
              >
                ←
              </button>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
              >
                →
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  </div>
</section>

  {/* CALL TO ACTION SECTION */ }
<section className="max-w-7xl mx-auto px-6 py-16">
  <div className="relative grid grid-cols-1 lg:grid-cols-[30%_70%] overflow-hidden rounded-3xl bg-[#0A2540]">

    {/* LEFT: Image (UNCHANGED) */}
    <motion.div
      className="relative min-h-[380px] lg:min-h-full bg-gray-200 overflow-hidden"
      initial={{ y: -380 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <img
        src="/images/office.jpg"
        alt="Dental office"
        className="w-full h-full object-cover"
      />
    </motion.div>

    {/* RIGHT: Content */}
    <motion.div
      className="relative p-8 md:p-12 text-white"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >

      {/* Decorative SVG (UNCHANGED) */}
      <motion.svg
        viewBox="0 0 300 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-8 -right-8 md:-top-12 md:-right-12 w-[260px] h-[200px] pointer-events-none text-[#650000]"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <path
          d="M140 20 V120 C140 165 240 165 240 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>

      {/* Title (UNCHANGED typed animation) */}
      <motion.h2
        className="text-xl md:text-[26px] font-semibold leading-snug max-w-xl relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.05 },
          },
        }}
      >
        {headline.map((line, lineIndex) => (
          <div key={lineIndex} className="block">
            {line.split("").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.h2>


      {/* Paragraph */}
      <motion.p
        variants={riseUp}
        className="mt-3 text-xs text-white/80 max-w-lg"
      >
        We are always ready to help you at any time, let’s talk together.
      </motion.p>

      {/* Benefits */}
      <motion.div
        className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm"
        variants={staggerContainer}
      >
        {[
          "Nairobi’s most comfortable dental experience",
          "Transparent pricing, no surprise bills",
          "Preventive focus saves future costs",
          "Anxiety-free dentistry for everyone",
          "Flexible hours for busy Nairobians",
          "Family care with top specialists",
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={riseUp}
            className="flex items-start gap-2"
          >
            <span className="text-cyan-400 mt-0.5 text-sm">✓</span>
            <span className="text-white/90 text-sm">{item}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Divider */}
      <motion.div
        variants={riseUp}
        className="my-8 h-px bg-white/20"
      />

      {/* Info blocks */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-5 text-[11px]"
        variants={staggerContainer}
      >
        <motion.div variants={riseUp}>
          <p className="font-semibold text-sm">Imperial Dental Branches</p>
          <p className="text-white/70 mt-1">
            Benedicta<br />Utawala
          </p>
        </motion.div>

        <motion.div variants={riseUp}>
          <p className="font-semibold text-sm">Contact & Support</p>
          <p className="text-white/70 mt-1">
            Mail Us: dickensodhiambo06@gmail.com<br />
            Call Us 24/7: +254 757 247988
          </p>
        </motion.div>

        <motion.div variants={riseUp}>
          <p className="font-semibold text-sm">Schedule Hours</p>
          <p className="text-white/70 mt-1">
            Mon – Fri: 9.00am – 17.00pm<br />
            Sat: 9.00am – 14.30pm
          </p>
        </motion.div>
      </motion.div>

      {/* CTA */}
      <motion.div variants={riseUp} className="mt-8">
        <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#650000] text-white text-xs font-medium hover:bg-cyan-200 transition">
          Schedule An Appointment Directly →
        </button>
      </motion.div>

    </motion.div>
  </div>
</section>


    </main>
  );
}

const introText = [
  "Welcome to Enamel Dental Clinic in Nairobi, where first impressions truly begin with a dazzling smile.",
  "Our expert team provides high-quality dental, hygiene, implant, cosmetic, and orthodontic care.",
  "Located at Moi Avenue in Nairobi CBD, we welcome patients of all ages.",
  "Our goal is to ensure every patient leaves with a radiant and healthy smile.",
];

const trustText = [
  "We listen carefully and design treatment plans tailored to your lifestyle.",
  "Comfort, transparency, and trust guide every decision we make.",
  "Advanced technology meets compassionate care for predictable outcomes.",
  "With us, your long-term oral health always comes first.",
];

const services = [
  {
    title: "Dental Checkups",
    description: "Routine exams to maintain oral health.",
    icon: serviceIcons.checkup,
    href: "/services/dental-checkups",
  },
  {
    title: "Cosmetic Alignment",
    description: "Modern solutions to enhance your smile.",
    icon: serviceIcons.alignment,
    href: "/services/braces",
  },
  {
    title: "Teeth Whitening",
    description: "Safe, professional whitening treatments.",
    icon: serviceIcons.whitening,
    href: "/services/teeth-whitening",
  },
  {
    title: "Dental Implants",
    description: "Permanent, natural-looking tooth replacement.",
    icon: serviceIcons.implants,
    href: "/services/crowns-bridges",
  },
  {
    title: "Oral Hygiene",
    description: "Preventive care for gums and teeth.",
    icon: serviceIcons.hygiene,
    href: "/services/teeth-whitening",
  },
  {
    title: "Tooth Extraction",
    description: "Gentle extractions with proper aftercare.",
    icon: serviceIcons.extraction,
    href: "/services/tooth-extraction",
  },
  {
    title: "Root Canal Therapy",
    description: "Relieve pain and preserve natural teeth.",
    icon: serviceIcons.rootcanal,
    href: "/services/root-canal-therapy",
  },
  {
    title: "Gum Disease Care",
    description: "Advanced periodontal treatments.",
    icon: serviceIcons.gum,
    href: "/services/orthodontic-emergencies",
  },
];

type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
  href: string;
};

function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <MotionLink
      href={href}
      variants={fadeUp}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 28px rgba(22,30,84,0.45)", // #161E54 glow
      }}
      className="relative block p-6 bg-white border border-[#2A316A] rounded-tl-2xl rounded-br-2xl transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-indigo-400"
    >
      {/* ICON */}
      <div className="mb-5 flex justify-center">
        <div className="p-[3px] rounded-full bg-gradient-to-br from-[#bde8f5] to-[#1C4D8D]">
          <div className="w-20 h-20 rounded-full bg-[#abe0f0] flex items-center justify-center">
            <Image src={icon} alt={title} width={56} height={56} />
          </div>
        </div>
      </div>

      {/* TITLE */}
      <h3 className="text-xl font-semibold text-indigo-900 text-center">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="mt-3 text-gray-500 text-center">
        {description}
      </p>

      {/* CTA */}
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="mt-5 flex justify-center"
      >
        <motion.div
          variants={{
            rest: { width: 32 },
            hover: { width: 150 },
          }}
          transition={{ duration: 0.35, ease: [0.25, 0.8, 0.25, 1] }}
          className="flex items-center gap-3 overflow-hidden"
        >
          {/* ARROW */}
          <motion.span
            variants={{
              rest: { x: 0 },
              hover: { x: -6 },
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="text-[#650000] text-xl font-bold"
          >
            →
          </motion.span>

          {/* TEXT */}
          <motion.span
            variants={{
              rest: { opacity: 0, x: 20 },
              hover: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="text-sm font-semibold text-[#650000] whitespace-nowrap"
          >
            Learn more
          </motion.span>
        </motion.div>
      </motion.div>
    </MotionLink>
  );
}

