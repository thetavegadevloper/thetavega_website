import React, { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
} from "framer-motion";

import {
  useNavigate,
  useLocation,
} from "react-router-dom";
// AUTOMOTIVE
import auto1 from "../assets/images/auto1.png";
import auto2 from "../assets/images/auto2.png";
import auto3 from "../assets/images/auto3.png";

// AUTO ANCILLARIES
import autoan1 from "../assets/images/autoan1.jpg";
import autoan2 from "../assets/images/autoan2.jpg";
import autoan3 from "../assets/images/autoan3.jpg";

// CONSUMER DURABLES
import cons1 from "../assets/images/cons1.jpg";
import cons2 from "../assets/images/cons2.jpg";
import cons3 from "../assets/images/cons3.jpg";

// FOOD & BEVERAGE
import food1 from "../assets/images/food1.jpg";
import food2 from "../assets/images/food2.jpg";
import food3 from "../assets/images/food3.jpg";

// PHARMA
import pharm1 from "../assets/images/pharm1.jpg";
import pharm2 from "../assets/images/pharm2.jpg";
import pharm3 from "../assets/images/pharm3.jpg";

// METALS
import meta1 from "../assets/images/meta1.jpg";
import meta2 from "../assets/images/meta2.jpg";
import meta3 from "../assets/images/meta3.jpg";

// PROCESS
import proc1 from "../assets/images/proc1.jpg";
import proc2 from "../assets/images/proc2.jpg";
import proc3 from "../assets/images/proc3.jpg";

// INFRA
import infra1 from "../assets/images/infra1.jpg";
import infra2 from "../assets/images/infra2.jpg";
import infra3 from "../assets/images/infra3.jpg";

/* ============================================================
   ALL INDUSTRY IMAGES
============================================================ */

const industryImages = [
  auto1,
  auto2,
  auto3,

  autoan1,
  autoan2,
  autoan3,

  cons1,
  cons2,
  cons3,

  food1,
  food2,
  food3,

  pharm1,
  pharm2,
  pharm3,

  meta1,
  meta2,
  meta3,

  proc1,
  proc2,
  proc3,

  infra1,
  infra2,
  infra3,
];

/* ============================================================
   INDUSTRY CONTENT
============================================================ */

const industriesData = [
  {
    id: "automotive-ev",
    title: "Automotive & EV",
    images: [auto1, auto2, auto3],

    cards: [
      {
        heading: "Industry Challenges",

        points: [
          "High-volume production with strict takt time",
          "Complex multi-stage assembly processes",
          "Requirement of 100% traceability",
          "Zero-defect manufacturing expectations",
          "Integration with OEM ERP systems",
        ],
      },

      {
        heading: "ThetaVega Solutions",

        points: [
          "End-to-end assembly line automation",
          "Engine & EV battery traceability systems",
          "Smart torqueing & process confirmation",
          "OperateX MES for production intelligence",
          "Robotic and vision-integrated systems",
        ],
      },

      {
        heading: "Typical Systems Deployed",

        points: [
          "Engine assembly traceability lines",
          "EV cell sorting & welding systems",
          "Leak testing & EOL testing systems",
          "Tool data acquisition systems",
        ],
      },

      {
        heading: "Case References",

        points: [
          "Hero MotoCorp – Engine assembly traceability",
          "Bajaj Auto – Smart indexing & process control",
          "Ather Energy – EV cell line automation",
        ],
      },
    ],
  },

  {
     id: "auto-ancillaries",
    title: "Auto Ancillaries",
    images: [autoan1, autoan2, autoan3],

    cards: [
      {
        heading: "Industry Challenges",

        points: [
          "High mix, low volume production",
          "Quality consistency across batches",
          "Machine-level data visibility",
          "Manual inspection limitations",
        ],
      },

      {
        heading: "ThetaVega Solutions",

        points: [
          "CNC machine monitoring systems",
          "SPC & quality analytics",
          "Vision-based inspection systems",
          "Smart assembly & testing stations",
        ],
      },

      {
        heading: "Typical Systems Deployed",

        points: [
          "Machine monitoring dashboards (OEE)",
          "Gauge data integration systems",
          "Inspection automation systems",
          "Production tracking solutions",
        ],
      },

      {
        heading: "Case References",

        points: [
          "GNA Enterprises – Wheel sorting & inspection",
          "Tier-1 suppliers – CNC monitoring & analytics",
        ],
      },
    ],
  },

  {
     id: "consumer-durables",
    title: "Consumer Durables",
    images: [cons1, cons2, cons3],

    cards: [
      {
        heading: "Industry Challenges",

        points: [
          "Fast-changing product variants",
          "Assembly accuracy requirements",
          "Cost pressure with high volumes",
          "Manual dependency in assembly",
        ],
      },

      {
        heading: "ThetaVega Solutions",

        points: [
          "Flexible assembly line automation",
          "Vision inspection for quality control",
          "Digital production tracking",
          "Operator-guided smart stations",
        ],
      },

      {
        heading: "Typical Systems Deployed",

        points: [
          "Assembly workstations with SOP display",
          "Barcode-based tracking systems",
          "Vision inspection stations",
          "Production dashboards",
        ],
      },

      {
        heading: "Case References",

        points: [
          "Appliance manufacturers – Assembly automation",
          "Electronics OEMs – Inspection & traceability",
        ],
      },
    ],
  },

  {
    id: "food-beverage",
    title: "Food & Beverage",
    images: [food1, food2, food3],

    cards: [
      {
        heading: "Industry Challenges",

        points: [
          "Hygiene and regulatory compliance",
          "Batch traceability requirements",
          "Packaging speed & accuracy",
          "Energy & utility optimization",
        ],
      },

      {
        heading: "ThetaVega Solutions",

        points: [
          "Batch tracking & traceability systems",
          "Packaging line automation",
          "Utility monitoring (energy, water, air)",
          "SCADA-based plant monitoring",
        ],
      },

      {
        heading: "Typical Systems Deployed",

        points: [
          "Batch processing control systems",
          "Packaging automation lines",
          "Utility dashboards",
          "Quality monitoring systems",
        ],
      },

      {
        heading: "Case References",

        points: [
          "FMCG plants – Packaging automation",
          "Food processing units – Utility monitoring",
        ],
      },
    ],
  },

  {
     id: "pharma-life-sciences",
    title: "Pharma & Life Sciences",
    images: [pharm1, pharm2, pharm3],

    cards: [
      {
        heading: "Industry Challenges",

        points: [
          "Strict regulatory compliance (FDA, GMP)",
          "Data integrity & audit trails",
          "Serialization & traceability",
          "Cleanroom automation requirements",
        ],
      },

      {
        heading: "ThetaVega Solutions",

        points: [
          "CFR 21 Part 11 compliant systems",
          "Batch traceability & serialization",
          "SCADA & BMS integration",
          "Digital audit & reporting systems",
        ],
      },

      {
        heading: "Typical Systems Deployed",

        points: [
          "Pharma SCADA systems",
          "Serialization tracking systems",
          "Cleanroom monitoring systems",
          "Quality data logging solutions",
        ],
      },

      {
        heading: "Case References",

        points: [
          "Pharma companies – Compliance systems",
          "Healthcare manufacturing – Monitoring solutions",
        ],
      },
    ],
  },

  {
     id: "metals-mining",
    title: "Metals & Mining",
    images: [meta1, meta2, meta3],

    cards: [
      {
        heading: "Industry Challenges",

        points: [
          "Harsh operating environments",
          "Heavy machinery integration",
          "Energy-intensive processes",
          "Lack of real-time monitoring",
        ],
      },

      {
        heading: "ThetaVega Solutions",

        points: [
          "Heavy-duty automation systems",
          "Energy monitoring & optimization",
          "SCADA-based plant control",
          "Predictive maintenance systems",
        ],
      },

      {
        heading: "Typical Systems Deployed",

        points: [
          "Furnace control systems",
          "Conveyor automation systems",
          "Energy monitoring dashboards",
          "Equipment health monitoring",
        ],
      },

      {
        heading: "Case References",

        points: [
          "Steel plants – Process automation",
          "Mining units – Conveyor monitoring",
        ],
      },
    ],
  },

  {
    id: "process-industries",
    title: "Process Industries",
    images: [proc1, proc2, proc3],

    cards: [
      {
        heading: "Industry Challenges",

        points: [
          "Continuous process control",
          "Safety-critical operations",
          "Complex instrumentation",
          "Real-time monitoring needs",
        ],
      },

      {
        heading: "ThetaVega Solutions",

        points: [
          "PLC/SCADA-based process control",
          "Instrumentation integration",
          "Alarm & safety systems",
          "Centralized control rooms",
        ],
      },

      {
        heading: "Typical Systems Deployed",

        points: [
          "Distributed control systems (DCS-like)",
          "SCADA monitoring systems",
          "Alarm management systems",
          "Process analytics dashboards",
        ],
      },

      {
        heading: "Case References",

        points: [
          "Chemical plants – SCADA systems",
          "Oil & gas – Monitoring solutions",
        ],
      },
    ],
  },

  {
     id: "infrastructure-utilities",
    title: "Infrastructure & Utilities",
    images: [infra1, infra2, infra3],

    cards: [
      {
        heading: "Industry Challenges",

        points: [
          "Energy efficiency & cost control",
          "Distributed asset monitoring",
          "Remote management requirements",
          "Sustainability goals",
        ],
      },

      {
        heading: "ThetaVega Solutions",

        points: [
          "Solar SCADA & remote monitoring",
          "Building Management Systems (BMS)",
          "Energy analytics dashboards",
          "Smart utility control systems",
        ],
      },

      {
        heading: "Typical Systems Deployed",

        points: [
          "Solar plant monitoring systems",
          "Utility dashboards (power, water, air)",
          "BMS automation systems",
          "Remote IoT monitoring platforms",
        ],
      },

      {
        heading: "Case References",

        points: [
          "Industrial solar plants – SCADA systems",
          "Commercial infrastructure – BMS solutions",
        ],
      },
    ],
  },
];

/* ============================================================
   REVEAL SECTION
============================================================ */

const RevealSection = ({ children }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    margin: "-80px",
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 45,
        scale: 0.985,
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 45,
        scale: isInView ? 1 : 0.985,
      }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

/* ============================================================
   INDUSTRY IMAGE SLIDER

   Only rotates while near viewport.
============================================================ */

const IndustryImageSlider = ({ images, title }) => {
  const sliderRef = useRef(null);

  const isInView = useInView(sliderRef, {
    margin: "250px 0px",
  });

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setCurrentImage(
        (previous) =>
          (previous + 1) % images.length
      );
    }, 2200);

    return () => clearInterval(interval);
  }, [isInView, images.length]);

  return (
    <div
      ref={sliderRef}
      className="industry-image-frame"
    >
      <AnimatePresence mode="sync">
        <motion.img
          key={`${title}-${currentImage}`}
          src={images[currentImage]}
          alt={`${title} industry`}
          loading="lazy"
          decoding="async"
          initial={{
            opacity: 0,
            scale: 1,
          }}
          animate={{
            opacity: 1,
            scale: 1.08,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            opacity: {
              duration: 0.9,
            },

            scale: {
              duration: 6,
              ease: "linear",
            },
          }}
        />
      </AnimatePresence>
    </div>
  );
};

/* ============================================================
   MAIN COMPONENT
============================================================ */

const Industries = () => {
  const navigate = useNavigate();
   const location = useLocation();
useEffect(() => {
   if (!location.hash) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    return;
  }

  const sectionId = location.hash.replace("#", "");

  const scrollToSection = () => {
    const element = document.getElementById(sectionId);

    if (element) {
      const navbarOffset = 90;

      const elementPosition =
        element.getBoundingClientRect().top +
        window.pageYOffset;

      const offsetPosition =
        elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Wait for page/render animation
  const timer = setTimeout(() => {
    scrollToSection();
  }, 250);

  return () => clearTimeout(timer);
}, [location.hash]);
  /* ==========================================================
     HERO GALLERY
  ========================================================== */

  const [visibleImages, setVisibleImages] =
    useState([0, 1, 2, 3]);

  const nextBatchStartRef = useRef(4);

  const timeoutRefs = useRef([]);

  const cycleTimeoutRef = useRef(null);

  useEffect(() => {
    const INITIAL_HOLD_TIME = 1000;
    const STAGGER_TIME = 1000;
    const POSITIONS = 4;

    const clearAllTimers = () => {
      timeoutRefs.current.forEach((timer) =>
        clearTimeout(timer)
      );

      timeoutRefs.current = [];

      if (cycleTimeoutRef.current) {
        clearTimeout(
          cycleTimeoutRef.current
        );

        cycleTimeoutRef.current =
          null;
      }
    };

    const runCycle = (
      isFirstCycle = false
    ) => {
      timeoutRefs.current.forEach((timer) =>
        clearTimeout(timer)
      );

      timeoutRefs.current = [];

      const startDelay = isFirstCycle
        ? INITIAL_HOLD_TIME
        : 0;

      for (
        let position = 0;
        position < POSITIONS;
        position++
      ) {
        const nextImageIndex =
          (nextBatchStartRef.current +
            position) %
          industryImages.length;

        const timer = setTimeout(() => {
          setVisibleImages((previous) => {
            const updated = [...previous];

            updated[position] =
              nextImageIndex;

            return updated;
          });
        }, startDelay + position * STAGGER_TIME);

        timeoutRefs.current.push(timer);
      }

      nextBatchStartRef.current =
        (nextBatchStartRef.current +
          POSITIONS) %
        industryImages.length;

      cycleTimeoutRef.current =
        setTimeout(() => {
          runCycle(false);
        }, startDelay + POSITIONS * STAGGER_TIME);
    };

    const handleVisibility = () => {
      if (document.hidden) {
        clearAllTimers();
      } else {
        runCycle(false);
      }
    };

    runCycle(true);

    document.addEventListener(
      "visibilitychange",
      handleVisibility
    );

    return () => {
      clearAllTimers();

      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );
    };
  }, []);

  return (
    <div className="industries-page">
      {/* ======================================================
          PAGE CSS
      ====================================================== */}

      <style>{`

        /* ====================================================
           GENERAL
        ==================================================== */

        .industries-page {
          width: 100%;
          overflow-x: hidden;
          background: #fff;
        }

        .industries-page *,
        .industries-page *::before,
        .industries-page *::after {
          box-sizing: border-box;
        }

        .industries-page img {
          max-width: 100%;
        }

        /* ====================================================
           HERO
        ==================================================== */

        .industries-hero {
  min-height: calc(100vh - 74px);

  padding:
    55px 0 45px;

  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;

  box-sizing: border-box;

  background:
    radial-gradient(
      circle at 75% 20%,
      rgba(242,124,45,0.18) 0%,
      transparent 30%
    ),
    radial-gradient(
      circle at 25% 80%,
      rgba(0,91,187,0.15) 0%,
      transparent 35%
    ),
    linear-gradient(
      115deg,
      #020814 0%,
      #031326 35%,
      #071D38 70%,
      #0A2547 100%
    );
}

        .industries-hero-inner {
          width: 100%;

          max-width: 1300px;

          margin: 0 auto;

          padding-left: 20px;
          padding-right: 20px;

          display: flex;

          align-items: center;

          justify-content:
            space-between;

          gap: 100px;

          position: relative;

          z-index: 2;
        }

        .industries-hero-copy {
          flex: 1 1 500px;

          position: relative;
        }

        .industries-hero-eyebrow {
          display: inline-block;

          color: #DB9941;

          font-size: 13px;

          font-weight: 600;

          letter-spacing: 1.8px;

          text-transform: uppercase;
        }

        .industries-hero-title {
          font-size: 46px;

          font-weight: 700;

          color: var(--tv-light);

          margin-top: 20px;

          margin-bottom: 20px;

          line-height: 1.2;
        }

        .industries-hero-title span {
          color: #f27c2d;
        }

        .industries-hero-copy p {
          font-size: 1rem;

          line-height: 1.78;

          color: #ffffff;

          max-width: 760px;

          margin-bottom: 14px;
        }

        /* ====================================================
           HERO IMAGE GRID
        ==================================================== */

        .industries-gallery-wrap {
          flex: 1 1 450px;

          display: flex;

          justify-content: center;
        }

        .industries-gallery-grid {
          width: 100%;

          max-width: 750px;

          height: 400px;

          border-radius: 16px;

          display: grid;

          grid-template-columns:
            repeat(2, minmax(0,1fr));

          grid-template-rows:
            repeat(2,1fr);

          gap: 20px;

          align-items: center;

          justify-content: center;

          padding: 10px;
        }

        .industries-gallery-card {
          width: 100%;

          height: 180px;

          border-radius: 18px;

          overflow: hidden;

          position: relative;

          transform-style:
            preserve-3d;

          border:
            1px solid rgba(
              255,
              255,
              255,
              0.12
            );

          background:
            linear-gradient(
              135deg,
              rgba(
                255,
                255,
                255,
                0.06
              ),
              rgba(
                255,
                255,
                255,
                0.02
              )
            );

          box-shadow:
            0 25px 60px
              rgba(0,0,0,0.35),
            0 8px 20px
              rgba(0,91,187,0.15),
            inset 0 1px 0
              rgba(
                255,
                255,
                255,
                0.15
              );
        }

        .industries-gallery-card img {
          width: 100%;

          height: 100%;

          object-fit: cover;

          position: absolute;

          inset: 0;

          display: block;
        }

        /* ====================================================
           SECTOR INTRO
        ==================================================== */

        .sector-heading {
          text-align: center;

          padding: 0 20px;
        }

        .sector-heading-tag {
          display: block;

          color: #f27c2d;

          font-weight: 700;

          letter-spacing: 2px;

          text-transform: uppercase;

          margin-top: 50px;

          font-size: 14px;
        }

        .sector-heading-title {
          display: inline-block;

          font-size: 20px;

          font-weight: 700;

          letter-spacing: 2px;

          text-transform: uppercase;

          color: #090604;

          margin-top: 10px;

          margin-bottom: 0;

          text-align: center;
        }

        /* ====================================================
           INDUSTRY SECTIONS
        ==================================================== */

        .industry-section {
          padding: 20px;

          margin-bottom: 40px;

          position: relative;
        }

        .industry-section.even {
          background: #ffffff;
        }

        .industry-section.odd {
          background:
            linear-gradient(
              180deg,
              #FFFFFF 0%,
              #FCF7F8 100%
            );
        }

        .industry-container {
          width: 100%;

          max-width: 1200px;

          margin: 0 auto;
        }

        .industry-heading {
          text-align: center;

          margin-bottom: 30px;
        }

        .industry-heading-inner {
          display: inline-block;

          position: relative;
        }

        .industry-heading h2 {
          font-size: 30px;

          font-weight: 700;

          margin: 0;

          color: var(--tv-dark);
        }

        .industry-heading-line {
          position: absolute;

          left: 0;

          bottom: -10px;

          width: 60px;

          height: 4px;

          background:
            linear-gradient(
              90deg,
              #f27c2d,
              #DB9941
            );

          border-radius: 2px;
        }

        /* ====================================================
           INDUSTRY SPLIT LAYOUT
        ==================================================== */

        .industry-layout {
          display: flex;

          flex-direction: row;

          align-items: center;

          gap: 40px;
        }

        .industry-layout.reverse {
          flex-direction: row-reverse;
        }

        .industry-image-column {
          flex: 1 1 450px;

          min-width: 0;
        }

        .industry-content-column {
          flex: 1 1 500px;

          min-width: 0;
        }

        /* ====================================================
           INDUSTRY IMAGE
        ==================================================== */

        .industry-image-frame {
          width: 100%;

          height: 380px;

          border-radius: 18px;

          overflow: hidden;

          position: relative;

          background: #edf0f3;

          box-shadow:
            0 20px 50px
            rgba(0,0,0,0.09);
        }

        .industry-image-frame img {
          position: absolute;

          inset: 0;

          width: 100%;

          height: 100%;

          object-fit: cover;
        }

        /* ====================================================
           INDUSTRY CARDS
        ==================================================== */

        .industry-cards-grid {
          display: grid;

          grid-template-columns:
            repeat(2,minmax(0,1fr));

          gap: 20px;
        }

        .industry-info-card {
          padding: 20px;

          border-radius: 14px;

          box-shadow:
            0 10px 30px
            rgba(0,0,0,0.06);

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease;

          cursor: pointer;

          min-width: 0;
        }

        .industry-info-card.red {
          background: #FFF9F5;

          border-left:
            4px solid #AE2C11;
        }

        .industry-info-card.gold {
          background: #FEFCF8;

          border-left:
            4px solid #DB9941;
        }

        .industry-info-card:hover {
          transform:
            translateY(-6px)
            scale(1.01);

          box-shadow:
            0 18px 35px
            rgba(0,0,0,0.12);
        }

        .industry-info-card h4 {
          font-size: 16px;

          font-weight: 700;

          margin-bottom: 12px;
        }

        .industry-info-card.red h4 {
          color: #AE2C11;
        }

        .industry-info-card.gold h4 {
          color: #7a540a;
        }

        .industry-info-card ul {
          padding: 0;

          margin: 0;

          list-style: none;
        }

        .industry-info-card li {
          display: flex;

          align-items: flex-start;

          gap: 8px;

          margin-bottom: 6px;

          font-size: 13px;

          line-height: 1.5;

          color: #555;
        }

        .industry-info-card li:last-child {
          margin-bottom: 0;
        }

        .industry-card-dot {
          width: 5px;

          height: 5px;

          flex: 0 0 5px;

          background: #f27c2d;

          border-radius: 50%;

          margin-top: 7px;
        }

        /* ====================================================
           CTA
        ==================================================== */

        .industries-cta {
          text-align: center;

          padding: 100px 30px;

          color: #fff;

          background:
            linear-gradient(
              180deg,
              #07111D 0%,
              #13263B 100%
            );

          position: relative;

          overflow: hidden;

          width: 90%;

          max-width: 1500px;

          margin: 40px auto;

          border-radius: 20px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.08
            );

          box-shadow:
            0 30px 80px
              rgba(0,0,0,0.35),
            inset 0 1px 0
              rgba(
                255,
                255,
                255,
                0.08
              );
        }

        .industries-cta-tag {
          color: var(--tv-gold);

          font-weight: 600;

          font-size: 14px;

          letter-spacing: 1px;

          margin-bottom: 12px;
        }

        .industries-cta h2 {
          font-size: 36px;

          font-weight: 800;

          color: var(--tv-white);

          margin-bottom: 15px;
        }

        .industries-cta-description {
          font-size: 16px;

          color: var(--tv-white);

          max-width: 650px;

          margin:
            0 auto 35px;

          line-height: 1.6;
        }

        .industries-cta-buttons {
          display: flex;

          justify-content: center;

          gap: 15px;

          flex-wrap: wrap;
        }

        .industries-cta-primary,
        .industries-cta-secondary {
          min-height: 46px;

          border-radius: 30px;

          cursor: pointer;

          transition: all 0.3s ease;
        }

        .industries-cta-primary {
          background:
            linear-gradient(
              135deg,
              var(--tv-red),
              var(--tv-gold)
            );

          color: #fff;

          padding:
            12px 20px;

          border: none;

          font-weight: 500;
        }

        .industries-cta-secondary {
          background: #fff;

          color: var(--tv-red);

          padding:
            12px 24px;

          border:
            2px solid
            var(--tv-gold);

          font-weight: 600;
        }

        /* ====================================================
           TABLET / SMALL DESKTOP
           <= 1100px
        ==================================================== */

        @media (max-width: 1100px) {

          .industries-hero {
            min-height: auto;

            padding:
              110px 0 65px;
          }

          .industries-hero-inner {
            max-width: 850px;

            flex-direction: column;

            gap: 38px;

            padding-left: 32px;

            padding-right: 32px;
          }

          .industries-hero-copy {
            flex: auto;

            width: 100%;

            text-align: center;
          }

          .industries-hero-copy p {
            margin-left: auto;

            margin-right: auto;

            max-width: 720px;
          }

          .industries-hero-title {
            max-width: 760px;

            margin-left: auto;

            margin-right: auto;
          }

          .industries-gallery-wrap {
            flex: auto;

            width: 100%;

            max-width: 720px;
          }

          .industries-gallery-grid {
            max-width: 680px;

            height: 355px;

            gap: 16px;
          }

          .industries-gallery-card {
            height: 160px;
          }

          .industry-section {
            padding:
              28px 28px;

            margin-bottom:
              30px;
          }

          .industry-container {
            max-width: 800px;
          }

          .industry-layout,
          .industry-layout.reverse {
            flex-direction: column;

            align-items: stretch;

            gap: 28px;
          }

          .industry-image-column,
          .industry-content-column {
            flex: auto;

            width: 100%;
          }

          .industry-image-frame {
            height: 420px;
          }

          .industry-cards-grid {
            gap: 18px;
          }

          .industries-cta {
            width:
              calc(100% - 48px);

            padding:
              75px 30px;
          }

          /* Reduce heavy decorations on tablet */

          .hero-decoration-circle {
            opacity: 0.6;
          }
        }

        /* ====================================================
           MOBILE
           <= 767px
        ==================================================== */

        @media (max-width: 767px) {

          .industries-page {
            overflow-x: clip;
          }

          /* ---------------- HERO ---------------- */

          .industries-hero {
            padding:
              90px 0 45px;
                text-align: left !important;
          }

          .industries-hero-inner {
            padding-left: 18px;

            padding-right: 18px;

            gap: 25px;
              text-align: left !important;
          }

          .industries-hero-eyebrow {
    display: block !important;
  width: 100% !important;

  text-align: left !important;

  margin-left: 0 !important;
  margin-right: 0 !important;

  font-size: 11px !important;
  letter-spacing: 1.5px !important;
  }

          .industries-hero-title {
            font-size:
              clamp(
                1.85rem,
                8vw,
                2.3rem
              );
                text-align: left !important;

            line-height: 1.2;

            margin-top: 13px;

            margin-bottom: 17px;
          }

          .industries-hero-copy p {
            font-size: 0.92rem;
              text-align: left !important;

            line-height: 1.65;

            margin-bottom: 11px;
             text-align: left !important;
          }

          /* ---------------- HERO GALLERY ---------------- */

          .industries-gallery-wrap {
            max-width: 520px;
          }

          .industries-gallery-grid {
            width: 100%;

            height: auto;

            min-height: 250px;

            gap: 10px;

            padding: 5px;
          }

          .industries-gallery-card {
            height:
              clamp(
                105px,
                30vw,
                135px
              );

            border-radius: 13px;

            box-shadow:
              0 14px 30px
                rgba(0,0,0,0.28),
              0 5px 14px
                rgba(
                  0,
                  91,
                  187,
                  0.11
                );
          }

          .industries-gallery-card img {
            border-radius: 12px;
          }

          /* ---------------- DECORATIONS ---------------- */

          .hero-streak,
          .hero-decoration-circle {
            display: none;
          }

          .hero-particle:nth-of-type(n+7) {
            display: none;
          }

          /* ---------------- SECTOR HEADER ---------------- */

          .sector-heading {
            padding:
              0 18px;
          }

          .sector-heading-tag {
            margin-top: 35px;

            font-size: 12px;

            letter-spacing:
              1.5px;
          }

          .sector-heading-title {
            font-size: 15px;

            line-height: 1.45;

            letter-spacing:
              1.2px;

            margin-top: 7px;
          }

          /* ---------------- INDUSTRY SECTION ---------------- */

          .industry-section {
            padding:
              30px 18px;

            margin-bottom:
              8px;
          }

          .industry-heading {
            margin-bottom:
              27px;
          }

          .industry-heading h2 {
            font-size:
              clamp(
                1.45rem,
                6vw,
                1.75rem
              );

            line-height: 1.3;
          }

          .industry-heading-line {
            width: 48px;

            height: 3px;

            bottom: -8px;
          }

          .industry-layout,
          .industry-layout.reverse {
            gap: 20px;
          }

          /* ---------------- INDUSTRY IMAGE ---------------- */

          .industry-image-frame {
            height:
              clamp(
                210px,
                62vw,
                300px
              );

            border-radius: 15px;
          }

          /* ---------------- CARDS ---------------- */

          .industry-cards-grid {
            grid-template-columns:
              1fr;

            gap: 12px;
          }

          .industry-info-card {
            padding:
              17px 16px;

            border-radius:
              13px;

            cursor: default;
          }

          .industry-info-card:hover {
            transform: none;

            box-shadow:
              0 10px 30px
              rgba(0,0,0,0.06);
          }

          .industry-info-card h4 {
            font-size:
              1rem;

            margin-bottom:
              9px;
          }

          .industry-info-card li {
            font-size:
              0.88rem;

            line-height:
              1.5;

            margin-bottom:
              5px;
          }

          /* ---------------- CTA ---------------- */

          .industries-cta {
            width:
              calc(100% - 28px);

            margin:
              28px auto 30px;

            padding:
              55px 18px;

            border-radius:
              18px;
          }

          .industries-cta-tag {
            font-size: 11px;

            line-height: 1.5;

            letter-spacing:
              1px;

            padding:
              0 5px;

            margin-bottom: 10px;
          }

          .industries-cta h2 {
            font-size:
              clamp(
                1.5rem,
                7vw,
                1.95rem
              );

            line-height: 1.28;

            margin-bottom:
              13px;
          }

          .industries-cta-description {
            font-size:
              0.91rem;

            line-height: 1.6;

            padding: 0 5px;

            margin-bottom:
              25px;
          }

          .industries-cta-buttons {
            width: 100%;

            gap: 10px;
          }

          .industries-cta-primary,
          .industries-cta-secondary {
            width: 100%;

            max-width: 330px;

            padding:
              12px 16px;

            font-size:
              0.9rem;
          }
        }

        /* ====================================================
           VERY SMALL MOBILE
           <= 390px
        ==================================================== */

        @media (max-width: 390px) {

          .industries-hero {
            padding-top: 84px;
          }

          .industries-hero-title {
            font-size: 1.72rem;
          }

          .industries-hero-copy p {
            font-size: 0.88rem;
          }

          .industries-gallery-grid {
            min-height: 220px;
          }

          .industries-gallery-card {
            height: 100px;
          }

          .sector-heading-title {
            font-size: 14px;
          }

          .industry-section {
            padding-left: 14px;

            padding-right: 14px;
          }

          .industry-info-card {
            padding:
              15px 14px;
          }
        }

        /* ====================================================
           REDUCE MOTION
        ==================================================== */

        @media (
          prefers-reduced-motion:
          reduce
        ) {

          .industries-page *,
          .industries-page *::before,
          .industries-page *::after {
            animation-duration:
              0.01ms !important;

            animation-iteration-count:
              1 !important;

            transition-duration:
              0.01ms !important;
          }
        }

      `}</style>

      {/* ======================================================
          HERO
      ====================================================== */}

      <RevealSection>
        <section className="industries-hero">
          {/* ==================================================
              BACKGROUND GLOWS
          ================================================== */}

          <div
            style={{
              position: "absolute",
              inset: 0,
              overflow: "hidden",
              zIndex: 0,
              pointerEvents: "none",
            }}
          >
            <motion.div
              animate={{
                x: [0, 80, 0],
                y: [0, -40, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",

                width: "700px",
                height: "700px",

                borderRadius: "50%",

                background:
                  "radial-gradient(circle, rgba(242,124,45,0.18), transparent 70%)",

                filter: "blur(120px)",

                top: "-150px",

                right: "-150px",
              }}
            />

            <motion.div
              animate={{
                x: [0, -60, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",

                width: "700px",
                height: "700px",

                bottom: "-250px",

                left: "-100px",

                borderRadius: "50%",

                background:
                  "radial-gradient(circle, rgba(242,124,45,0.10) 0%, rgba(219,153,65,0.05) 45%, transparent 75%)",

                filter: "blur(90px)",
              }}
            />
          </div>

          {/* ==================================================
              DECORATION CIRCLES
          ================================================== */}

          <div
            className="hero-decoration-circle"
            style={{
              position: "absolute",

              right: "6%",

              top: "78%",

              transform:
                "translateY(-70%)",

              width: "200px",

              height: "200px",

              borderRadius: "50%",

              border:
                "1px solid rgba(255,255,255,0.08)",

              boxShadow:
                "0 0 120px rgba(240,245,250,0.18), inset 0 0 150px rgba(213,155,117,0.08)",

              zIndex: 0,

              pointerEvents: "none",
            }}
          />

          <div
            className="hero-decoration-circle"
            style={{
              position: "absolute",

              right: "37%",

              top: "30%",

              transform:
                "translateY(-50%)",

              width: "200px",

              height: "200px",

              borderRadius: "50%",

              border:
                "1px solid rgba(255,255,255,0.08)",

              boxShadow:
                "0 0 120px rgba(240,245,250,0.18), inset 0 0 150px rgba(213,155,117,0.08)",

              zIndex: 0,

              pointerEvents: "none",
            }}
          />

          {/* ==================================================
              LIGHT STREAK
          ================================================== */}

          <motion.div
            className="hero-streak"
            animate={{
              x: [-50, 50, -50],
            }}
            transition={{
              duration: 15,

              repeat: Infinity,

              ease: "easeInOut",
            }}
            style={{
              position: "absolute",

              top: "-10%",

              right: "-5%",

              width: "1400px",

              height: "160px",

              background:
                "linear-gradient(135deg, transparent, rgba(255,255,255,0.18), transparent)",

              transform:
                "rotate(-35deg)",

              filter: "blur(45px)",

              zIndex: 0,

              pointerEvents: "none",
            }}
          />

          <motion.div
            className="hero-streak"
            animate={{
              x: [30, -30, 30],
            }}
            transition={{
              duration: 20,

              repeat: Infinity,

              ease: "easeInOut",
            }}
            style={{
              position: "absolute",

              top: "15%",

              right: "10%",

              width: "1000px",

              height: "80px",

              background:
                "linear-gradient(135deg, transparent, rgba(255,255,255,0.08), transparent)",

              transform:
                "rotate(-35deg)",

              filter: "blur(30px)",

              zIndex: 0,

              pointerEvents: "none",
            }}
          />

          {/* ==================================================
              PARTICLES
          ================================================== */}

          {Array.from({
            length: 12,
          }).map((_, index) => (
            <motion.div
              className="hero-particle"
              key={index}
              animate={{
                y: [-20, 20, -20],

                x: [-10, 10, -10],

                opacity: [
                  0.2,
                  0.8,
                  0.2,
                ],
              }}
              transition={{
                duration:
                  8 + index * 0.8,

                repeat: Infinity,

                ease: "linear",
              }}
              style={{
                position: "absolute",

                width: "6px",

                height: "6px",

                borderRadius: "50%",

                background:
                  "rgba(219,153,65,0.8)",

                left: `${
                  10 + index * 7
                }%`,

                top: `${
                  20 +
                  (index % 4) * 18
                }%`,

                boxShadow:
                  "0 0 15px rgba(219,153,65,0.5)",

                zIndex: 0,

                pointerEvents: "none",
              }}
            />
          ))}

          {/* ==================================================
              HERO CONTENT
          ================================================== */}

          <div className="industries-hero-inner">
            {/* ================================================
                LEFT
            ================================================ */}

            <div className="industries-hero-copy">
              <span className="industries-hero-eyebrow">
                INDUSTRIES
              </span>

              <h1 className="industries-hero-title">
                Engineering Expertise Across{" "}
                <span>
                  Critical Industries
                </span>
              </h1>

              <p>
                ThetaVega delivers
                industry-specific automation
                and digital solutions tailored
                to the unique challenges of
                each sector.
              </p>

              <p>
                Our strength lies in combining
                deep process understanding +
                advanced engineering + digital
                intelligence to create
                scalable, high-performance
                systems.
              </p>

              <p>
                From discrete manufacturing to
                process industries, we enable
                organizations to achieve
                efficiency, traceability, and
                operational excellence.
              </p>
            </div>

            {/* ================================================
                RIGHT IMAGE GRID
            ================================================ */}

            <div className="industries-gallery-wrap">
              <div className="industries-gallery-grid">
                {visibleImages.map(
                  (
                    imgIndex,
                    position
                  ) => (
                    <motion.div
                      className="industries-gallery-card"
                      key={position}
                      whileHover={{
                        rotateX: -6,

                        rotateY:
                          position % 2 ===
                          0
                            ? 8
                            : -8,

                        y: -10,

                        scale: 1.03,
                      }}
                      transition={{
                        duration: 0.4,

                        ease: "easeOut",
                      }}
                    >
                      <AnimatePresence
                        initial={false}
                      >
                        <motion.img
                          key={`${position}-${imgIndex}`}
                          src={
                            industryImages[
                              imgIndex
                            ]
                          }
                          alt="Industry"
                          decoding="async"
                          initial={{
                            y: "100%",
                          }}
                          animate={{
                            y: "0%",
                          }}
                          exit={{
                            y: "-100%",
                          }}
                          transition={{
                            duration: 0.9,

                            ease: [
                              0.25,
                              0.8,
                              0.25,
                              1,
                            ],
                          }}
                        />
                      </AnimatePresence>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ======================================================
          SECTOR EXPERTISE
      ====================================================== */}

      <div className="sector-heading">
        <span className="sector-heading-tag">
          Sector Expertise
        </span>

        <p className="sector-heading-title">
          Solutions Built for Industry We
          Serve
        </p>
      </div>

      {/* ======================================================
          INDUSTRIES
      ====================================================== */}

      {industriesData.map(
        (industry, index) => (
          <RevealSection
            key={industry.title}
          >
    <section
  id={
    index === 0
      ? "automotive-ev"
      : index === 1
      ? "auto-ancillaries"
      : index === 2
      ? "consumer-durables"
      : index === 3
      ? "food-beverage"
      : index === 4
      ? "pharma-life-sciences"
      : index === 5
      ? "metals-mining"
      : index === 6
      ? "process-industries"
      : "infrastructure-utilities"
  }
  className={`
    industry-section
    ${
      index % 2 === 0
        ? "even"
        : "odd"
    }
  `}
>
              <div className="industry-container">
                {/* ============================================
                    TITLE
                ============================================ */}

                <div className="industry-heading">
                  <div className="industry-heading-inner">
                    <h2>
                      {industry.title}
                    </h2>

                    <span className="industry-heading-line" />
                  </div>
                </div>

                {/* ============================================
                    MAIN LAYOUT
                ============================================ */}

                <div
                  className={`
                    industry-layout
                    ${
                      index % 2 !== 0
                        ? "reverse"
                        : ""
                    }
                  `}
                >
                  {/* ==========================================
                      IMAGE
                  ========================================== */}

                  <div className="industry-image-column">
                    <IndustryImageSlider
                      images={
                        industry.images
                      }
                      title={
                        industry.title
                      }
                    />
                  </div>

                  {/* ==========================================
                      CONTENT
                  ========================================== */}

                  <div className="industry-content-column">
                    <div className="industry-cards-grid">
                      {industry.cards.map(
                        (
                          card,
                          cardIndex
                        ) => (
                          <div
                            key={
                              card.heading
                            }
                            className={`
                              industry-info-card
                              ${
                                cardIndex %
                                  2 ===
                                0
                                  ? "red"
                                  : "gold"
                              }
                            `}
                          >
                            <h4>
                              {
                                card.heading
                              }
                            </h4>

                            <ul>
                              {card.points.map(
                                (
                                  point,
                                  pointIndex
                                ) => (
                                  <li
                                    key={
                                      pointIndex
                                    }
                                  >
                                    <span className="industry-card-dot" />

                                    <span>
                                      {
                                        point
                                      }
                                    </span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </RevealSection>
        )
      )}

      {/* ======================================================
          CTA
      ====================================================== */}

      <section className="industries-cta">
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <p className="industries-cta-tag">
            CUSTOMIZED • SCALABLE •
            INDUSTRY-READY SOLUTIONS
          </p>

          <h2>
            Built for Your Industry.
            Engineered for Performance.
          </h2>

          <p className="industries-cta-description">
            No matter your sector,
            ThetaVega delivers{" "}
            <strong
              style={{
                color:
                  "var(--tv-light)",
              }}
            >
              customized solutions aligned
              with your operational
              realities.
            </strong>
          </p>

          <div className="industries-cta-buttons">
            {/* PRIMARY */}

            <button
              className="industries-cta-primary"
              onClick={() =>
                navigate("/solutions")
              }
              onMouseEnter={(event) => {
                event.currentTarget.style.transform =
                  "translateY(-2px)";

                event.currentTarget.style.boxShadow =
                  "0 15px 35px var(--tv-red)";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.transform =
                  "translateY(0)";

                event.currentTarget.style.boxShadow =
                  "none";
              }}
            >
              Explore Industry Solutions →
            </button>

            {/* SECONDARY */}

            <button
              className="industries-cta-secondary"
              onClick={() =>
                navigate("/contact")
              }
              onMouseEnter={(event) => {
                event.currentTarget.style.background =
                  "var(--tv-red)";

                event.currentTarget.style.color =
                  "#fff";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.background =
                  "#fff";

                event.currentTarget.style.color =
                  "var(--tv-red)";
              }}
            >
              Talk to Our Domain Experts
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Industries;