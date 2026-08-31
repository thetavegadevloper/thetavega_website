import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import {
  FaCogs,
  FaProjectDiagram,
  FaChartLine,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import techStackMobile from "../assets/images/tech-stack-mobile.svg";
import programmingImg from "../assets/images/1theta.png";
import automationImg from "../assets/images/2 theta.png";
import analyticsImg from "../assets/images/3theta.png";
import iiotImg from "../assets/images/4theta .png";
import cloudImg from "../assets/images/5 theta.png";

/* ============================================================
   LOTTIE LOADERS

   These JSON files are dynamically imported instead of loading
   every animation with the initial page bundle.
============================================================ */

const loadAutoAnim = () =>
  import("../assets/json/Automotive  EV.json");

const loadMesAnim = () =>
  import("../assets/json/Digital Manufacturing.json");

const loadIotAnim = () =>
  import("../assets/json/Industrial IoT.json");

const loadInfraAnim = () =>
  import("../assets/json/Smart Infrastructure.json");

const loadMachineAnim = () =>
  import("../assets/json/Machine Building.json");

const loadPanelAnim = () =>
  import("../assets/json/Panel  Control Systems.json");

const loadTraceAnim = () =>
  import("../assets/json/Traceability  Quality Systems.json");

const loadVisionAnim = () =>
  import("../assets/json/11. Core Products.json");

/* ============================================================
   LAZY LOTTIE

   Lottie animation is rendered only when it approaches
   the viewport. Hero animations can use eager={true}.
============================================================ */

const AsyncLottie = ({
  loader,
  loop = true,
  eager = false,
  className = "",
  style = {},
}) => {
  const containerRef = useRef(null);

  const [shouldLoad, setShouldLoad] = useState(eager);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    if (eager) {
      setShouldLoad(true);
      return;
    }

    const element = containerRef.current;

    if (!element) return;

    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window)
    ) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "250px 0px",
        threshold: 0.01,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [eager]);

  useEffect(() => {
    if (!shouldLoad) return;

    let cancelled = false;

    loader()
      .then((module) => {
        if (!cancelled) {
          setAnimationData(module.default || module);
        }
      })
      .catch((error) => {
        console.error("Unable to load Lottie animation:", error);
      });

    return () => {
      cancelled = true;
    };
  }, [shouldLoad, loader]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: "relative",
        ...style,
      }}
    >
      {animationData ? (
        <Lottie
          animationData={animationData}
          loop={loop}
          autoplay
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      ) : (
        <div className="lottie-loading-placeholder" />
      )}
    </div>
  );
};

/* ============================================================
   DATA
============================================================ */

const solutions = [
  {
    id: "factory-automation",
    title: "Factory Automation & Control Systems",
    iconLoader: loadAutoAnim,
    problem:
      "Modern manufacturing lines suffer from fragmented control systems and downtime inefficiencies.",
    approach:
      "Robust PLC, HMI, SCADA, and motion control solutions.",
    architecture: [
      "PLC: Mitsubishi / Siemens / Omron",
      "Protocols: OPC-UA, Profinet, EtherCAT",
      "SCADA monitoring",
      "MES / ERP integration",
    ],
    useCases: [
      "Assembly line automation",
      "Robotics integration",
      "Motion systems",
    ],
    outcome: [
      "↑ Productivity up to 30%",
      "↓ Downtime",
      "↑ Consistency",
    ],
  },

  {
    id: "machine-building",
    title: "Machine Building (SPM & Assembly Lines)",
    iconLoader: loadMachineAnim,
    problem:
      "Standard machines fail to meet custom production requirements.",
    approach:
      "Custom Special Purpose Machines tailored to production.",
    architecture: [
      "CAD + Simulation",
      "PLC + Servo + Vision",
      "Modular stations",
    ],
    useCases: [
      "Leak testing",
      "Laser marking",
      "Assembly systems",
    ],
    outcome: [
      "↑ Precision",
      "↑ Throughput",
      "↓ Manual dependency",
    ],
  },

  {
    id: "panel-control",
    title: "Panel Building & Electrical Systems",
    iconLoader: loadPanelAnim,
    problem:
      "Poor panel design leads to failures and safety risks.",
    approach:
      "UL/IEC-compliant panels engineered for reliability.",
    architecture: [
      "EPLAN design",
      "IP55/IP65 protection",
      "Segregated wiring",
    ],
    useCases: [
      "PLC panels",
      "MCC panels",
      "Smart distribution",
    ],
    outcome: [
      "↑ Reliability",
      "↑ Safety",
      "↓ Maintenance",
    ],
  },

  {
    id: "mes",
    title: "MES & Digital Manufacturing (OperateX)",
    iconLoader: loadMesAnim,
    problem:
      "Lack of real-time visibility and decision-making.",
    approach:
      "OperateX MES platform for digital manufacturing.",
    architecture: [
      "IoT + PLC integration",
      "Microservices",
      "React dashboards",
    ],
    useCases: [
      "OEE monitoring",
      "Production tracking",
      "Predictive maintenance",
    ],
    outcome: [
      "↑ OEE 15–25%",
      "↑ Decision speed",
    ],
  },

  {
    id: "traceability",
    title: "Traceability & Quality Systems",
    iconLoader: loadTraceAnim,
    problem:
      "Lack of traceability leads to quality failures.",
    approach:
      "End-to-end traceability systems across lifecycle.",
    architecture: [
      "Barcode / RFID",
      "Central database",
      "MES integration",
    ],
    useCases: [
      "Part tracking",
      "Poka-yoke",
      "Genealogy systems",
    ],
    outcome: [
      "100% traceability",
      "↑ Quality",
      "↓ Rework",
    ],
  },

  {
    id: "vision-inspection",
    title: "Vision Inspection Systems",
    iconLoader: loadVisionAnim,
    problem:
      "Manual inspection causes inconsistency and errors.",
    approach:
      "AI-based automated inspection systems.",
    architecture: [
      "Cognex / Keyence",
      "Edge AI processing",
      "PLC integration",
    ],
    useCases: [
      "OCR/OCV",
      "Defect detection",
      "Inspection systems",
    ],
    outcome: [
      "↑ Accuracy >99%",
      "↑ Speed",
      "↓ Human dependency",
    ],
  },

  {
    id: "iot",
    title: "IIoT & Data Integration",
    iconLoader: loadIotAnim,
    problem:
      "Machines operate in silos without unified data.",
    approach:
      "Seamless machine connectivity and data integration.",
    architecture: [
      "OPC-UA, MQTT",
      "IoT gateways",
      "Cloud integration",
    ],
    useCases: [
      "Machine monitoring",
      "Energy tracking",
      "Multi-plant integration",
    ],
    outcome: [
      "↑ Visibility",
      "↑ Integration",
    ],
  },

  {
    id: "smart-infrastructure",
    title: "Utility & Smart Infrastructure",
    iconLoader: loadInfraAnim,
    problem:
      "Utilities are poorly monitored causing wastage.",
    approach:
      "Smart monitoring with analytics and optimization.",
    architecture: [
      "Sensors + PLC",
      "SCADA dashboards",
      "Cloud analytics",
    ],
    useCases: [
      "Energy management",
      "Water monitoring",
      "BMS integration",
    ],
    outcome: [
      "↓ Cost 10–25%",
      "↑ Sustainability",
    ],
  },
];

const items = [
  {
    title: "Automation Systems",
    animLoader: loadAutoAnim,
  },
  {
    title: "MES & Digital Factory",
    animLoader: loadMesAnim,
  },
  {
    title: "IIoT Integration",
    animLoader: loadIotAnim,
  },
  {
    title: "Smart Infrastructure",
    animLoader: loadInfraAnim,
  },
];

/* ============================================================
   COMPONENT
============================================================ */

const Solutions = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeIndex, setActiveIndex] = useState(0);

  /*
   * Tablet + mobile uses one scalable technology-stack image.
   * Desktop keeps your existing 5-image design.
   */
  const [compactTechStack, setCompactTechStack] = useState(() => {
    if (typeof window === "undefined") return false;

    return window.matchMedia("(max-width: 991px)").matches;
  });

  /* ============================================================
     RESPONSIVE VIEW DETECTION
  ============================================================ */

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(max-width: 991px)");

    const handleChange = (event) => {
      setCompactTechStack(event.matches);
    };

    setCompactTechStack(mediaQuery.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);

      return () =>
        mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);

    return () => mediaQuery.removeListener(handleChange);
  }, []);

  /* ============================================================
     HASH SCROLL
  ============================================================ */

   useEffect(() => {
    /* NORMAL SOLUTIONS PAGE -> HERO */
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      return;
    }

    const element = document.getElementById(
      location.hash.replace("#", "")
    );

    if (!element) return;

    const timeout = setTimeout(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 200);

    return () => clearTimeout(timeout);
  }, [location]);

  /* ============================================================
     HERO AUTO ROTATION
  ============================================================ */

  useEffect(() => {
    let interval;

    const startRotation = () => {
      clearInterval(interval);

      interval = setInterval(() => {
        setActiveIndex(
          (previous) => (previous + 1) % items.length
        );
      }, 2000);
    };

    const handleVisibility = () => {
      if (document.hidden) {
        clearInterval(interval);
      } else {
        startRotation();
      }
    };

    startRotation();

    document.addEventListener(
      "visibilitychange",
      handleVisibility
    );

    return () => {
      clearInterval(interval);

      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );
    };
  }, []);

  const sectionStyle = {
    padding: "60px 0",
  };

  return (
    <div className="solutions-page">
      {/* ========================================================
          GLOBAL PAGE STYLES
      ======================================================== */}

      <style>{`

        /* ======================================================
           PAGE SAFETY
        ====================================================== */

        .solutions-page {
          width: 100%;
          overflow-x: hidden;
        }

        .solutions-page *,
        .solutions-page *::before,
        .solutions-page *::after {
          box-sizing: border-box;
        }

        img {
          max-width: 100%;
        }

        .lottie-loading-placeholder {
          width: 100%;
          height: 100%;
        }

        /* ======================================================
           HERO
        ====================================================== */

        .hero-section {
          min-height: 90vh;
        }

        .hero-copy {
          position: relative;
        }

        .hero-description-panel {
          max-width: 650px;
        }

        .hero-orb-wrapper {
          height: 560px;
        }

        .hero-orb-outer {
          width: 440px;
          height: 440px;
        }

        .hero-ring-big {
          width: 500px;
          height: 500px;
        }

        .hero-ring-small {
          width: 350px;
          height: 350px;
        }

        .hero-center-glow {
          width: 260px;
          height: 260px;
        }

        .hero-lottie {
          width: 320px;
          height: 320px;
        }

        .hero-label {
          top: 38px;
          right: 42px;
        }

        .hero-status-anchor {
          position: absolute;
          bottom: 38px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 6;
        }

        .hero-status {
          min-width: 300px;
        }

        /* ======================================================
           ORIGINAL HERO SUPPORT
        ====================================================== */

        .solution-hero {
          padding: 125px 0;
          background:
            linear-gradient(
              135deg,
              #f8fafc,
              #eef2f6
            );
          position: relative;
          overflow: hidden;
        }

        .solution-hero::after {
          content: "";
          position: absolute;
          right: -100px;
          top: -70px;
          width: 450px;
          height: 450px;
          background:
            radial-gradient(
              circle,
              rgba(174,44,17,0.15),
              transparent
            );
          filter: blur(60px);
        }

        .solution-hero h1 {
          font-weight: 700;
          font-size: 2.7rem;
          color: #07111D;
        }

        .solution-hero span {
          color: var(--tv-red);
        }

        .solution-hero p {
          margin-top: 15px;
          color: #555;
          max-width: 520px;
        }

        /* ======================================================
           SOLUTION BACKGROUND
        ====================================================== */

        .solution-section-premium {
          position: relative;
          overflow: hidden;
          scroll-margin-top: 90px;

          background:
            linear-gradient(
              180deg,
              #fafbfc 0%,
              #f5f7fa 50%,
              #ffffff 100%
            );
        }

        .solution-section-premium::before {
          content: "";
          position: absolute;
          top: -100px;
          right: -100px;
          width: 350px;
          height: 350px;
          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(242,124,45,0.07),
              transparent 70%
            );

          filter: blur(50px);
          animation: glowFloat 10s ease-in-out infinite;
        }

        .solution-section-premium::after {
          content: "";
          position: absolute;
          bottom: -120px;
          left: -120px;
          width: 300px;
          height: 300px;
          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(219,153,65,0.05),
              transparent 70%
            );

          filter: blur(60px);
          animation: glowFloat2 14s ease-in-out infinite;
        }

        @keyframes glowFloat {
          0% {
            transform: translate(0,0);
          }

          50% {
            transform: translate(-40px,20px);
          }

          100% {
            transform: translate(0,0);
          }
        }

        @keyframes glowFloat2 {
          0% {
            transform: translate(0,0);
          }

          50% {
            transform: translate(40px,-20px);
          }

          100% {
            transform: translate(0,0);
          }
        }

        /* ======================================================
           FLOATING DECORATIONS
        ====================================================== */

        .floating-square {
          position: absolute;
          border:
            1px solid rgba(242,124,45,0.12);
          background:
            rgba(255,255,255,0.18);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          animation:
            floatSquare 18s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes floatSquare {
          0% {
            transform:
              translate(0px,0px)
              rotate(0deg);
          }

          25% {
            transform:
              translate(20px,-30px)
              rotate(8deg);
          }

          50% {
            transform:
              translate(-15px,-50px)
              rotate(-6deg);
          }

          75% {
            transform:
              translate(-30px,-20px)
              rotate(10deg);
          }

          100% {
            transform:
              translate(0px,0px)
              rotate(0deg);
          }
        }

        .floating-blob {
          position: absolute;
          border-radius: 50%;
          background:
            rgba(242,124,45,0.08);
          filter: blur(25px);
          animation:
            blobMove 20s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes blobMove {
          0% {
            transform: translate(0,0);
          }

          25% {
            transform: translate(50px,-30px);
          }

          50% {
            transform: translate(-20px,-60px);
          }

          75% {
            transform: translate(-40px,20px);
          }

          100% {
            transform: translate(0,0);
          }
        }

        /* ======================================================
           SOLUTION CARDS
        ====================================================== */

        .solution-modern-card {
          position: relative;
          overflow: hidden;

          background:
            radial-gradient(
              circle at top right,
              rgba(201,74,30,0.08),
              transparent 40%
            ),
            #f8f2ef;

          border-left: 5px solid #c94a1e;
          border-radius: 28px;

          padding: 32px;
          height: 100%;

          box-shadow:
            0 10px 30px rgba(0,0,0,0.05),
            0 2px 8px rgba(0,0,0,0.04);

          transition:
            transform 0.4s ease,
            box-shadow 0.4s ease;
        }

        .solution-modern-card:hover {
          transform: translateY(-10px);

          box-shadow:
            0 25px 55px
            rgba(7,17,29,0.15);
        }

        .solution-modern-card.alt {
          background: #f6f1e8;
          border-left:
            4px solid #DB9941;
          border-radius: 26px;
        }

        .solution-modern-card.highlight {
          background:
            linear-gradient(
              135deg,
              #07111D 0%,
              #1b2f45 100%
            );

          color: #fff;
        }

        .solution-modern-card.highlight
        .card-title-row h6 {
          color: #ffffff;

          text-shadow:
            0 2px 8px
              rgba(255,255,255,0.15),
            0 4px 18px
              rgba(242,124,45,0.35);
        }

        /* ======================================================
           CTA / HERO BUTTON SUPPORT
        ====================================================== */

        .hero-btn {
          padding: 12px 22px;
          border-radius: 999px;
          font-weight: 600;
          border: none;
          transition: 0.3s;
        }

        .btn-primary {
          background:
            linear-gradient(
              135deg,
              var(--tv-red),
              var(--tv-gold)
            );

          color: #fff;
        }

        .btn-secondary {
          background: #fff;
          border: 1px solid #ddd;
        }

        .hero-btn:hover {
          transform: translateY(-3px);
        }

        /* ======================================================
           RIGHT VISUAL SUPPORT
        ====================================================== */

        .hero-visual {
          background: #fff;
          border-radius: 22px;
          padding: 22px;

          box-shadow:
            0 25px 60px
            rgba(0,0,0,0.08);

          animation:
            floatCard 6s ease-in-out infinite;
        }

        @keyframes floatCard {
          0% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }

          100% {
            transform: translateY(0);
          }
        }

        .mini-card {
          background: #f6f8fb;
          padding: 14px 16px;
          border-radius: 12px;
          margin-bottom: 12px;
          font-size: 0.9rem;
          font-weight: 500;

          transition: all 0.35s ease;

          opacity: 0;
          transform: translateY(25px);
          animation:
            fadeUp 0.6s ease forwards;
        }

        .mini-card:nth-child(1) {
          animation-delay: 0.2s;
        }

        .mini-card:nth-child(2) {
          animation-delay: 0.4s;
        }

        .mini-card:nth-child(3) {
          animation-delay: 0.6s;
        }

        .mini-card:nth-child(4) {
          animation-delay: 0.8s;
        }

        .mini-card:hover {
          transform:
            translateX(6px)
            scale(1.03);

          background: #ffffff;

          box-shadow:
            0 12px 30px
            rgba(7,17,29,0.12);

          color: #f27c2d;
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(25px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ======================================================
           SECTION LABEL
        ====================================================== */

        .section-tag {
          display: inline-block;
          width: 100%;

          font-size: 20px;
          font-weight: 700;
          letter-spacing: 2px;

          text-transform: uppercase;
          text-align: center;

          color: #f27c2d;

          margin-top: 30px;
          margin-bottom: 2px;
        }

        /* ======================================================
           PROBLEM / SOLUTION CARDS
        ====================================================== */

        .ps-card {
          border-radius: 20px;
          padding: 22px 20px;
          height: 100%;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .ps-card.problem {
          background: #f8f2ef;
          border-left:
            4px solid #c94a1e;

          padding: 30px;

          box-shadow:
            0 8px 25px
            rgba(0,0,0,0.04);

          border-radius:
            20px 20px 20px 40px;
        }

        .ps-card.solution {
          background: #f6f1e8;
          border-left:
            6px solid #DB9941;

          border-radius:
            20px 40px 20px 20px;

          padding: 30px;
        }

        .ps-card.problem h6,
        .ps-card.solution h6 {
          color: #c94a1e;
          font-size: 1.20rem;
          font-weight: 700;
        }

        .ps-card h6 {
          color: #c94a1e;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .ps-card p {
          margin: 0;
          line-height: 1.7;
          font-size: 0.95rem;
        }

        .ps-card:hover {
          transform: translateY(-6px);

          box-shadow:
            0 20px 40px
            rgba(7,17,29,0.12);
        }

        /* ======================================================
           CARD TITLES
        ====================================================== */

        .card-title-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
        }

        .card-title-row svg {
          font-size: 18px;
          color: #7a540a;
          flex-shrink: 0;
        }

        .solution-modern-card.alt
        .card-title-row svg {
          color: #7a540a;
        }

        .solution-modern-card.highlight
        .card-title-row svg {
          color: #f27c2d;
        }

        .card-title-row h6 {
          margin: 0;

          font-size: 1.25rem;
          font-weight: 700;

          color: #7a540a;
        }

        /* ======================================================
           SECTION HEADER
        ====================================================== */

        .section-header {
          margin-bottom: 25px;
        }

        .section-header h2 {
          font-weight: 800;
          color: var(--tv-dark);
        }

        .section-line {
          width: 50px;
          height: 4px;

          background: var(--tv-gold);

          margin-top: 10px;
          border-radius: 10px;
        }

        /* ======================================================
           TECH STACK
        ====================================================== */

        .desktop-tech-stack {
          display: block;
        }

        .mobile-tech-stack {
          display: none;
        }

        .tech-stack-section {
          position: relative;
        }

        /* ======================================================
           CTA
        ====================================================== */

        .solution-cta {
          width: 90%;
          max-width: 1450px;
          margin: 40px auto;
        }

        .solution-cta h2 {
          font-size:
            clamp(1.8rem, 3vw, 2.5rem);

          font-weight: 700;
        }

        /* ======================================================
           HERO ANIMATIONS
        ====================================================== */

        @keyframes tvRotate {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes tvRotateReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        @keyframes tvLightSweep {
          0% {
            transform: translateX(-120%);
          }

          100% {
            transform: translateX(120%);
          }
        }

        /* ======================================================
           TABLET
           768px - 991px

           Desktop >=992 stays unchanged.
        ====================================================== */

        @media
        (min-width: 768px)
        and
        (max-width: 991px) {

          .hero-section {
            min-height: auto !important;
            padding:
              110px 0 65px !important;
          }

          .hero-section .container {
            max-width: 760px;
          }

          .hero-copy {
            text-align: center;
          }

          .hero-copy p {
            margin-left: auto !important;
            margin-right: auto !important;
          }

          .hero-description-panel {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-orb-wrapper {
            height: 475px !important;
            margin-top: 10px;
          }

          .hero-orb-outer {
            width: 380px !important;
            height: 380px !important;
          }

          .hero-ring-big {
            width: 430px !important;
            height: 430px !important;
          }

          .hero-ring-small {
            width: 310px !important;
            height: 310px !important;
          }

          .hero-center-glow {
            width: 230px !important;
            height: 230px !important;
          }

          .hero-lottie {
            width: 280px !important;
            height: 280px !important;
          }

          .hero-label {
            top: 34px !important;
            right: 13% !important;
          }

          .hero-status-anchor {
            bottom: 25px;
          }

          .hero-status {
            min-width: 290px !important;
          }

          .tech-stack-section {
            padding: 30px 0 40px !important;
          }

          .desktop-tech-stack {
            display: none !important;
          }

          .mobile-tech-stack {
            display: block !important;

            width: min(90%, 680px);
            margin: 20px auto 5px;
          }

          .mobile-tech-stack img {
            display: block;
            width: 100%;
          }

          .glow-card {
            border-radius: 20px;
            overflow: hidden;

            box-shadow:
              0 20px 50px
              rgba(242,124,45,0.15);
          }

          .solution-section-premium {
            padding:
              50px 0 !important;
          }

          .solution-section-premium
          .container {
            max-width: 720px;
          }

          .solution-detail-grid
          > .col-md-4 {
            flex: 0 0 50%;
            max-width: 50%;
            width: 50%;
          }

          .solution-detail-grid
          > .col-md-4:last-child {
            flex: 0 0 100%;
            max-width: 100%;
            width: 100%;
          }

          .solution-modern-card {
            padding: 24px;
            border-radius: 22px;
          }

          .solution-modern-card.alt {
            border-radius: 22px;
          }

          .section-tag {
            margin-top: 20px;
            font-size: 17px;
          }

          .solution-cta {
            width:
              calc(100% - 48px);

            padding:
              75px 30px !important;
          }
        }

        /* ======================================================
           MOBILE
           <=767px
        ====================================================== */

        @media (max-width: 767px) {

          .solutions-page {
            overflow-x: clip;
          }

          /* ---------------- HERO ---------------- */

          .hero-section {
            min-height: auto !important;

            padding:
              92px 0 48px !important;
          }

          .hero-section .container {
            padding-left: 18px;
            padding-right: 18px;
          }

           .hero-copy {
    text-align: left !important;
  }

          .hero-eyebrow {
            font-size: 11px !important;
            letter-spacing:
              1.5px !important;

            margin-bottom:
              11px !important;
              text-align: left !important;
          }

          .hero-main-title {
            font-size:
              clamp(
                1.85rem,
                8vw,
                2.35rem
              ) !important;
               text-align: left !important;


            line-height:
              1.18 !important;

            letter-spacing:
              0.3px !important;

            margin-bottom:
              15px !important;
          }

          .hero-main-description {
            font-size:
              0.96rem !important;
              

            line-height:
              1.7 !important;

            max-width:
              520px !important;

            margin-left: auto;
            margin-right: auto;
          }

          .hero-description-panel {
            margin-top:
              24px !important;

            padding:
              18px 17px !important;

            border-radius:
              17px !important;

            font-size:
              0.91rem !important;

            line-height:
              1.65 !important;

            text-align: left;
          }

          /* ---------------- HERO ORB ---------------- */

          .hero-orb-wrapper {
            height:
              355px !important;

            margin-top:
              -5px !important;
          }

          .hero-orb-outer {
            width:
              min(
                280px,
                78vw
              ) !important;

            height:
              min(
                280px,
                78vw
              ) !important;
          }

          .hero-ring-big {
            width:
              min(
                330px,
                92vw
              ) !important;

            height:
              min(
                330px,
                92vw
              ) !important;

            border-width:
              5px !important;
          }

          .hero-ring-small {
            width:
              min(
                245px,
                68vw
              ) !important;

            height:
              min(
                245px,
                68vw
              ) !important;
          }

          .hero-center-glow {
            width:
              min(
                190px,
                55vw
              ) !important;

            height:
              min(
                190px,
                55vw
              ) !important;
          }

          .hero-lottie {
            width:
              min(
                215px,
                62vw
              ) !important;

            height:
              min(
                215px,
                62vw
              ) !important;
          }

          .hero-label {
            top:
              12px !important;

            left:
              50% !important;

            right:
              auto !important;

            transform:
              translateX(-50%) !important;

            white-space:
              nowrap;

            font-size:
              9.5px !important;

            letter-spacing:
              1px !important;

            padding:
              7px 11px !important;

            max-width:
              calc(100vw - 46px);

            overflow:
              hidden;

            text-overflow:
              ellipsis;
          }

          .hero-status-anchor {
            width:
              calc(
                100% - 46px
              );

            bottom:
              2px;
          }

          .hero-status {
            width: 100%;

            min-width:
              0 !important;

            padding:
              11px 14px !important;

            border-radius:
              14px !important;
          }

          .hero-status-eyebrow {
            font-size:
              9px !important;

            margin-bottom:
              3px !important;
          }

          .hero-status-title {
            font-size:
              0.86rem !important;
          }

          /* ---------------- TECH STACK ---------------- */

          .tech-stack-section {
            padding:
              28px 0 26px !important;
          }

          .tech-stack-section
          .tech-eyebrow {
            font-size:
              12px !important;

            letter-spacing:
              1.5px !important;

            margin-bottom:
              6px !important;
          }

          .tech-stack-section
          .tech-title {
            font-size:
              15px !important;

            line-height:
              1.4 !important;

            letter-spacing:
              1.3px !important;

            margin:
              0 auto 18px !important;

            padding:
              0 18px;

            max-width:
              500px;
          }

          .desktop-tech-stack {
            display:
              none !important;
          }

          .mobile-tech-stack {
            display:
              block !important;

            width:
              calc(
                100% - 26px
              );

            max-width:
              500px;

            margin:
              8px auto 0;

            padding: 0;
          }

          .glow-card {
            border-radius:
              16px;

            overflow:
              hidden;

            box-shadow:
              0 14px 35px
              rgba(242,124,45,0.14);
          }

          .glow-card img {
            width: 100%;
            display: block;
          }

          /* ---------------- SOLUTION LABEL ---------------- */

          .section-tag {
            font-size:
              14px !important;

            letter-spacing:
              1.4px !important;

            line-height:
              1.45;

            margin-top:
              22px !important;

            padding:
              0 18px;
          }

          /* ---------------- SOLUTION SECTION ---------------- */

          .solution-section-premium {
            padding:
              38px 0 !important;

            scroll-margin-top:
              72px;
          }

          .solution-section-premium
          .container {
            padding-left:
              18px;

            padding-right:
              18px;
          }

          .floating-square,
          .floating-blob {
            display:
              none !important;
          }

          .solution-section-premium::before,
          .solution-section-premium::after {
            filter:
              blur(35px);

            opacity: 0.65;
            animation: none;
          }

          /* ---------------- TITLE ---------------- */

          .section-header {
            align-items:
              flex-start !important;

            gap:
              10px !important;

            margin-bottom:
              8px !important;
          }

          .solution-lottie-icon {
            width:
              44px !important;

            height:
              44px !important;

            flex: 0 0 44px;
          }

          .section-header h2 {
            font-size:
              clamp(
                1.3rem,
                5.8vw,
                1.62rem
              ) !important;

            line-height:
              1.28 !important;

            letter-spacing:
              0.2px !important;
          }

          .section-line {
            width: 42px;
            height: 3px;
            margin-top: 8px;
          }

          /* ---------------- ROW SPACING ---------------- */

          .solution-problem-row {
            margin-top:
              20px !important;

            --bs-gutter-y:
              14px !important;
          }

          .solution-detail-grid {
            margin-top:
              26px !important;

            --bs-gutter-y:
              14px !important;
          }

          /* ---------------- PROBLEM / SOLUTION ---------------- */

          .ps-card,
          .ps-card.problem,
          .ps-card.solution {
            padding:
              18px !important;

            border-radius:
              17px !important;

            min-height:
              auto !important;
          }

          .ps-card.problem {
            border-left-width:
              4px !important;
          }

          .ps-card.solution {
            border-left-width:
              4px !important;
          }

          .ps-card h6,
          .ps-card.problem h6,
          .ps-card.solution h6 {
            font-size:
              1.04rem !important;

            margin-bottom:
              7px !important;
          }

          .ps-card p {
            font-size:
              0.91rem !important;

            line-height:
              1.6 !important;
          }

          .ps-card:hover {
            transform: none;
          }

          /* ---------------- ARCHITECTURE / CASE / OUTCOME ---------------- */

          .solution-modern-card,
          .solution-modern-card.alt,
          .solution-modern-card.highlight {
            padding:
              19px !important;

            border-radius:
              18px !important;
          }

          .solution-modern-card {
            border-left-width:
              4px;
          }

          .solution-modern-card:hover {
            transform: none;
          }

          .solution-modern-card ul {
            padding-left:
              19px !important;

            margin-bottom:
              0 !important;
          }

          .solution-modern-card li {
            font-size:
              0.91rem !important;

            line-height:
              1.55 !important;

            margin-bottom:
              5px !important;
          }

          .solution-modern-card li:last-child {
            margin-bottom:
              0 !important;
          }

          .card-title-row {
            margin-bottom:
              12px !important;

            gap:
              9px !important;
          }

          .card-title-row h6 {
            font-size:
              1.05rem !important;

            line-height:
              1.25;
          }

          .card-title-row svg {
            font-size:
              16px !important;
          }

          /* ---------------- CTA ---------------- */

          .solution-cta {
            width:
              calc(
                100% - 28px
              ) !important;

            margin:
              24px auto 30px !important;

            padding:
              56px 18px !important;

            border-radius:
              20px !important;
          }

          .solution-cta h2 {
            font-size:
              clamp(
                1.55rem,
                7vw,
                2rem
              ) !important;

            line-height:
              1.25;

            padding:
              0 3px;
          }

          .solution-cta p {
            font-size:
              0.94rem;

            line-height:
              1.6;

            margin:
              14px auto 22px !important;
          }

          .solution-cta button {
            min-height:
              46px;

            padding:
              12px 22px !important;

            font-size:
              0.92rem;
          }
        }

        /* ======================================================
           VERY SMALL PHONES
           <=390px
        ====================================================== */

        @media (max-width: 390px) {

          .hero-section {
            padding-top:
              86px !important;
          }

          .hero-main-title {
            font-size:
              1.75rem !important;
          }

          .hero-main-description {
            font-size:
              0.91rem !important;
          }

          .hero-orb-wrapper {
            height:
              330px !important;
          }

          .hero-ring-big {
            width:
              min(
                305px,
                91vw
              ) !important;

            height:
              min(
                305px,
                91vw
              ) !important;
          }

          .hero-orb-outer {
            width:
              min(
                260px,
                76vw
              ) !important;

            height:
              min(
                260px,
                76vw
              ) !important;
          }

          .hero-ring-small {
            width:
              225px !important;

            height:
              225px !important;
          }

          .hero-lottie {
            width:
              195px !important;

            height:
              195px !important;
          }

          .hero-status-anchor {
            width:
              calc(
                100% - 32px
              );
          }

          .section-tag {
            font-size:
              13px !important;
          }
        }

        /* ======================================================
           REDUCED MOTION
        ====================================================== */

        @media
        (prefers-reduced-motion: reduce) {

          .floating-square,
          .floating-blob,
          .solution-section-premium::before,
          .solution-section-premium::after {
            animation:
              none !important;
          }
        }

      `}</style>

      {/* ========================================================
          HERO
      ======================================================== */}

      <section
  className="hero-section"
  style={{
    minHeight: "calc(100vh - 74px)",
    padding: "55px 0 45px",
    boxSizing: "border-box",

    position: "relative",
    overflow: "hidden",

    display: "flex",
    alignItems: "center",

    background:
      "radial-gradient(circle at 78% 22%, rgba(242,124,45,0.22), transparent 34%), linear-gradient(135deg, #06101d 0%, #081a2d 42%, #12385c 100%)",
  }}
>
        {/* ORANGE PREMIUM GLOW */}

        <div
          style={{
            position: "absolute",
            top: "-160px",
            right: "-120px",
            width: "620px",
            height: "620px",

            background:
              "radial-gradient(circle, rgba(242,124,45,0.38), rgba(242,124,45,0.08), transparent 68%)",

            filter: "blur(90px)",
            opacity: 0.9,
            pointerEvents: "none",
          }}
        />

        {/* BLUE DEPTH GLOW */}

        <div
          style={{
            position: "absolute",
            bottom: "-180px",
            left: "-140px",
            width: "580px",
            height: "580px",

            background:
              "radial-gradient(circle, rgba(0,153,255,0.24), rgba(0,153,255,0.06), transparent 70%)",

            filter: "blur(100px)",
            pointerEvents: "none",
          }}
        />

        {/* GRID */}

        <div
          style={{
            position: "absolute",
            inset: 0,

            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",

            backgroundSize: "72px 72px",

            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.2))",

            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.2))",

            opacity: 0.35,
            pointerEvents: "none",
          }}
        />

        {/* LIGHT SWEEP */}

        <div
          style={{
            position: "absolute",
            inset: 0,

            background:
              "linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.08), transparent 58%)",

            animation:
              "tvLightSweep 9s linear infinite",

            pointerEvents: "none",
          }}
        />

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            className="row align-items-center"
            style={{
              rowGap: "48px",
            }}
          >
            {/* LEFT CONTENT */}

            <div className="col-lg-6 hero-copy">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 26,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.75,
                  ease: "easeOut",
                }}
              >
                <div
                  className="hero-eyebrow"
                  style={{
                    color: "#DB9941",
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "1.8px",
                    textTransform: "uppercase",
                    marginBottom: "14px",
                  }}
                >
                  Our Solutions
                </div>

                <h1
                  className="hero-main-title"
                  style={{
                    fontSize:
                      "clamp(1.9rem, 3.2vw, 3.4rem)",

                    fontWeight: 650,
                    lineHeight: 1.16,
                    letterSpacing: "1px",
                    color: "#ffffff",
                    marginBottom: "18px",
                    maxWidth: "760px",

                    textShadow:
                      "0 10px 28px rgba(0,0,0,0.65)",
                  }}
                >
                  Engineering Solutions for{" "}
                  <span
                    style={{
                      background:
                        "linear-gradient(90deg, #f27c2d 0%, #ffb347 48%, #ffe1a8 100%)",

                      WebkitBackgroundClip:
                        "text",

                      WebkitTextFillColor:
                        "transparent",

                      backgroundClip:
                        "text",
                    }}
                  >
                    Smart Manufacturing
                  </span>
                </h1>

                <p
                  className="hero-main-description"
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.85,

                    color:
                      "rgba(255,255,255,0.78)",

                    maxWidth: "650px",
                    marginBottom: 0,
                    fontWeight: 400,
                  }}
                >
                  We design intelligent systems that
                  connect machines, data, people, and
                  operations into one high-performance
                  digital factory ecosystem.
                </p>
              </motion.div>

              {/* DESCRIPTION */}

              <motion.div
                className="hero-description-panel"
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.75,
                  delay: 0.2,
                  ease: "easeOut",
                }}
                style={{
                  marginTop: "34px",
                  padding: "24px 26px",
                  borderRadius: "22px",

                  backdropFilter: "blur(18px)",
                  WebkitBackdropFilter:
                    "blur(18px)",

                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.075), rgba(255,255,255,0.035))",

                  border:
                    "1px solid rgba(255,255,255,0.12)",

                  color:
                    "rgba(255,255,255,0.76)",

                  fontSize: "0.98rem",
                  lineHeight: 1.8,

                  boxShadow:
                    "0 20px 50px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
              >
                From factory automation to digital
                manufacturing platforms, our solutions
                are built on scalable architectures,
                global standards, and real-world
                execution expertise. We engineer
                complete ecosystems for productivity,
                traceability, and intelligent
                decision-making.
              </motion.div>
            </div>

            {/* ==================================================
                RIGHT HERO VISUAL
            ================================================== */}

            <div className="col-lg-6">
              <motion.div
                className="hero-orb-wrapper"
                initial={{
                  opacity: 0,
                  scale: 0.94,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.85,
                  ease: "easeOut",
                }}
                style={{
                  height: "560px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                {/* OUTER ORB */}

                <div
                  className="hero-orb-outer"
                  style={{
                    position: "absolute",
                    width: "440px",
                    height: "440px",
                    borderRadius: "50%",

                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.09), rgba(255,255,255,0.025))",

                    border:
                      "1px solid rgba(255,255,255,0.13)",

                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter:
                      "blur(16px)",

                    boxShadow:
                      "0 35px 90px rgba(0,0,0,0.42), inset 0 1px 0 rgba(255,255,255,0.12)",
                  }}
                />

                {/* OUTER RING */}

                <div
                  className="hero-ring-big"
                  style={{
                    position: "absolute",
                    width: "500px",
                    height: "500px",
                    borderRadius: "50%",

                    borderTop:
                      "8px solid rgba(242,124,45,0.6)",

                    borderRight:
                      "8px solid rgba(255,255,255,0.08)",

                    borderBottom:
                      "8px solid rgba(255,255,255,0.08)",

                    borderLeft:
                      "8px solid rgba(0,153,255,0.24)",

                    animation:
                      "tvRotate 20s linear infinite",
                  }}
                />

                {/* INNER RING */}

                <div
                  className="hero-ring-small"
                  style={{
                    position: "absolute",
                    width: "350px",
                    height: "350px",
                    borderRadius: "50%",

                    borderTop:
                      "3px solid rgba(0,153,255,0.35)",

                    borderRight:
                      "3px solid rgba(255,255,255,0.06)",

                    borderBottom:
                      "3px solid rgba(242,124,45,0.45)",

                    borderLeft:
                      "3px solid rgba(255,255,255,0.06)",

                    animation:
                      "tvRotateReverse 16s linear infinite",
                  }}
                />

                {/* CENTER GLOW */}

                <div
                  className="hero-center-glow"
                  style={{
                    position: "absolute",
                    width: "260px",
                    height: "260px",
                    borderRadius: "50%",

                    background:
                      "radial-gradient(circle, rgba(242,124,45,0.28), rgba(100,186,243,0.12), transparent 72%)",

                    filter: "blur(34px)",
                  }}
                />

                {/* FLOATING LABEL */}

                <motion.div
                  className="hero-label"
                  key={`label-${activeIndex}`}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  style={{
                    position: "absolute",
                    top: "38px",
                    right: "42px",

                    padding:
                      "12px 16px",

                    borderRadius:
                      "999px",

                    background:
                      "rgba(7,17,29,0.56)",

                    border:
                      "1px solid rgba(255,255,255,0.12)",

                    backdropFilter:
                      "blur(14px)",

                    WebkitBackdropFilter:
                      "blur(14px)",

                    color:
                      "rgba(255,255,255,0.86)",

                    fontSize:
                      "11px",

                    fontWeight: 700,

                    letterSpacing:
                      "1.3px",

                    textTransform:
                      "uppercase",

                    boxShadow:
                      "0 12px 34px rgba(0,0,0,0.28)",

                    zIndex: 7,
                  }}
                >
                  {items[activeIndex].title}
                </motion.div>

                {/* HERO LOTTIE */}

                <AnimatePresence mode="wait">
                  <motion.div
                    className="hero-lottie"
                    key={activeIndex}
                    initial={{
                      opacity: 0,
                      scale: 0.76,
                      rotate: -8,
                      y: 22,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.82,
                      rotate: 8,
                      y: -18,
                    }}
                    transition={{
                      duration: 0.62,
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }}
                    style={{
                      width: "320px",
                      height: "320px",
                      zIndex: 3,
                      position: "relative",

                      filter:
                        "drop-shadow(0 30px 40px rgba(0,0,0,0.35))",
                    }}
                  >
                    <AsyncLottie
                      loader={
                        items[activeIndex]
                          .animLoader
                      }
                      eager
                      loop
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* STATUS */}

                <div className="hero-status-anchor">
                  <motion.div
                    className="hero-status"
                    key={`status-${activeIndex}`}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    style={{
                      minWidth: "300px",

                      padding:
                        "16px 18px",

                      borderRadius:
                        "18px",

                      background:
                        "linear-gradient(135deg, rgba(7,17,29,0.72), rgba(255,255,255,0.06))",

                      border:
                        "1px solid rgba(255,255,255,0.12)",

                      backdropFilter:
                        "blur(16px)",

                      WebkitBackdropFilter:
                        "blur(16px)",

                      boxShadow:
                        "0 18px 45px rgba(0,0,0,0.32)",

                      textAlign: "center",
                    }}
                  >
                    <div
                      className="hero-status-eyebrow"
                      style={{
                        color: "#DB9941",

                        fontSize:
                          "11px",

                        fontWeight: 700,

                        letterSpacing:
                          "1.8px",

                        textTransform:
                          "uppercase",

                        marginBottom:
                          "6px",
                      }}
                    >
                      Active Capability
                    </div>

                    <div
                      className="hero-status-title"
                      style={{
                        color: "#ffffff",

                        fontSize:
                          "0.96rem",

                        fontWeight: 700,

                        lineHeight:
                          1.35,
                      }}
                    >
                      {
                        items[activeIndex]
                          .title
                      }
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          TECHNOLOGY STACK
      ======================================================== */}

      <section
        className="tech-stack-section"
        style={{
          padding: "8px 0",
          background: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* TOP LEFT GLOW */}

        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "-100px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",

            background:
              "radial-gradient(circle, rgba(242,124,45,0.15) 0%, rgba(255,182,193,0.10) 40%, transparent 75%)",

            filter: "blur(40px)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {/* TOP RIGHT GLOW */}

        <div
          style={{
            position: "absolute",
            top: "50px",
            right: "-100px",
            width: "280px",
            height: "280px",
            borderRadius: "50%",

            background:
              "radial-gradient(circle, rgba(255,192,203,0.18) 0%, rgba(242,124,45,0.08) 45%, transparent 75%)",

            filter: "blur(35px)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {/* CENTER GLOW */}

        <div
          style={{
            position: "absolute",
            top: "45%",
            left: "50%",

            transform:
              "translate(-50%, -50%)",

            width: "500px",
            height: "500px",
            borderRadius: "50%",

            background:
              "radial-gradient(circle, rgba(255,192,203,0.08) 0%, rgba(242,124,45,0.05) 45%, transparent 75%)",

            filter: "blur(60px)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {/* BOTTOM LEFT */}

        <div
          style={{
            position: "absolute",
            bottom: "-120px",
            left: "10%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",

            background:
              "radial-gradient(circle, rgba(255,182,193,0.14) 0%, transparent 75%)",

            filter: "blur(40px)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {/* BOTTOM RIGHT */}

        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "5%",
            width: "350px",
            height: "350px",
            borderRadius: "50%",

            background:
              "radial-gradient(circle, rgba(242,124,45,0.12) 0%, rgba(255,192,203,0.06) 45%, transparent 75%)",

            filter: "blur(45px)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <span
            className="tech-eyebrow"
            style={{
              fontSize: "14px",
              fontWeight: 700,
              color: "#f27c2d",

              letterSpacing: "2px",
              textTransform: "uppercase",

              display: "block",
              marginBottom: "8px",

              textAlign: "center",
              marginTop: "7px",
            }}
          >
            Our Expertise
          </span>

          <h2
            className="tech-title"
            style={{
              fontSize: "17px",
              fontWeight: 700,
              textAlign: "center",

              marginBottom:
                "30px",

              letterSpacing:
                "2px",

              color: "#090808",

              textTransform:
                "uppercase",
            }}
          >
            End-to-End Manufacturing Technology Stack
          </h2>

          {/* ====================================================
              DESKTOP TECHNOLOGY STACK
              Only rendered on >=992px
          ==================================================== */}

          {!compactTechStack && (
            <div className="desktop-tech-stack">
              <div
                style={{
                  display: "flex",

                  justifyContent:
                    "center",

                  alignItems:
                    "flex-start",

                  gap: "5px",

                  flexWrap:
                    "nowrap",
                }}
              >
                {/* PROGRAMMING */}

                <motion.img
                  src={programmingImg}
                  alt="Programming Languages and Frameworks"
                  loading="lazy"
                  decoding="async"
                  initial={{
                    opacity: 0,
                    x: -120,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  viewport={{
                    once: true,
                  }}
                  style={{
                    width: "310px",
                    objectFit:
                      "contain",
                    marginTop:
                      "70px",
                    marginRight:
                      "5px",
                  }}
                />

                {/* AUTOMATION */}

                <motion.img
                  src={automationImg}
                  alt="Industrial Automation Technologies"
                  loading="lazy"
                  decoding="async"
                  initial={{
                    opacity: 0,
                    y: -100,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.6,
                  }}
                  viewport={{
                    once: true,
                  }}
                  style={{
                    width: "315px",
                    objectFit:
                      "contain",
                    marginTop:
                      "5px",
                    marginRight:
                      "5px",
                  }}
                />

                {/* ANALYTICS */}

                <motion.img
                  src={analyticsImg}
                  alt="Data Databases and Analytics"
                  loading="lazy"
                  decoding="async"
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 1.2,
                  }}
                  viewport={{
                    once: true,
                  }}
                  style={{
                    width: "190px",
                    objectFit:
                      "contain",
                  }}
                />

                {/* IIOT */}

                <motion.img
                  src={iiotImg}
                  alt="IIoT Edge and Messaging"
                  loading="lazy"
                  decoding="async"
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 1.8,
                  }}
                  viewport={{
                    once: true,
                  }}
                  style={{
                    width: "190px",
                    objectFit:
                      "contain",
                  }}
                />

                {/* CLOUD */}

                <motion.img
                  src={cloudImg}
                  alt="Cloud DevOps and Deployment"
                  loading="lazy"
                  decoding="async"
                  initial={{
                    opacity: 0,
                    x: 120,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 2.4,
                  }}
                  viewport={{
                    once: true,
                  }}
                  style={{
                    width: "200px",
                    objectFit:
                      "contain",
                  }}
                />
              </div>

              {/* DESKTOP LABELS */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: 2.5,
                }}
                style={{
                  marginTop:
                    "-40px",

                  display:
                    "flex",

                  justifyContent:
                    "space-between",

                  alignItems:
                    "flex-start",

                  textAlign:
                    "center",
                }}
              >
                {/* LABEL 1 */}

                <div
                  style={{
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      width: "5px",
                      height: "50px",

                      background:
                        "#fb6502",

                      margin:
                        "0 auto 2px",

                      marginRight:
                        "2px",
                    }}
                  />

                  <h5
                    style={{
                      color:
                        "#fa6704",

                      fontWeight:
                        600,

                      fontSize:
                        "16px",

                      lineHeight:
                        "1.3",

                      margin: 0,

                      marginRight:
                        "-300px",
                    }}
                  >
                    Programming Languages
                    <br />
                    & Frameworks
                  </h5>
                </div>

                {/* LABEL 2 */}

                <div
                  style={{
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      width: "5px",
                      height: "50px",

                      background:
                        "#f37928",

                      margin:
                        "0 auto -2px",

                      marginRight:
                        "-9px",

                      marginTop:
                        "-50px",
                    }}
                  />

                  <h5
                    style={{
                      color:
                        "#fa6704",

                      fontWeight:
                        600,

                      fontSize:
                        "16px",

                      lineHeight:
                        "1.3",

                      margin: 0,

                      marginRight:
                        "-315px",
                    }}
                  >
                    OT, Industrial &
                    <br />
                    Automation Technologies
                  </h5>
                </div>

                {/* LABEL 3 */}

                <div
                  style={{
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      width: "5px",
                      height: "50px",

                      background:
                        "#f27c2d",

                      margin:
                        "0 auto 2px",

                      marginTop:
                        "35px",

                      marginRight:
                        "-9px",
                    }}
                  />

                  <h5
                    style={{
                      color:
                        "#fa6704",

                      fontWeight:
                        600,

                      fontSize:
                        "16px",

                      lineHeight:
                        "1.3",

                      margin: 0,

                      marginRight:
                        "-300px",
                    }}
                  >
                    Data, Databases
                    <br />
                    & Analytics
                  </h5>
                </div>

                {/* LABEL 4 */}

                <div
                  style={{
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      width: "5px",
                      height: "40px",

                      background:
                        "#f27c2d",

                      margin:
                        "0 auto 15px",

                      marginTop:
                        "43px",

                      marginRight:
                        "100px",
                    }}
                  />

                  <h5
                    style={{
                      color:
                        "#fa6704",

                      fontWeight:
                        600,

                      fontSize:
                        "16px",

                      lineHeight:
                        "1.3",

                      margin: 0,

                      marginTop:
                        "-12px",

                      marginRight:
                        "-100px",
                    }}
                  >
                    IIoT, Edge
                    <br />
                    & Messaging
                  </h5>
                </div>

                {/* LABEL 5 */}

                <div
                  style={{
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      width: "5px",
                      height: "30px",

                      background:
                        "#f27c2d",

                      margin:
                        "0 auto 15px",

                      marginTop:
                        "-7px",

                      marginRight:
                        "242px",
                    }}
                  />

                  <h5
                    style={{
                      color:
                        "#fa6704",

                      fontWeight:
                        600,

                      fontSize:
                        "16px",

                      lineHeight:
                        "1.3",

                      margin: 0,

                      marginRight:
                        "170px",
                    }}
                  >
                    Cloud, DevOps
                    <br />
                    & Deployment
                  </h5>
                </div>
              </motion.div>
            </div>
          )}

          {/* ====================================================
              TABLET / MOBILE TECHNOLOGY STACK
          ==================================================== */}

          {compactTechStack && (
            <motion.div
              className="mobile-tech-stack glow-card"
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.75,
              }}
            >
              <motion.img
                src={techStackMobile}
                alt="End-to-End Manufacturing Technology Stack"
                loading="lazy"
                decoding="async"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  width: "100%",
                  display: "block",
                }}
              />
            </motion.div>
          )}
        </div>
      </section>

      {/* ========================================================
          SOLUTIONS TAG
      ======================================================== */}

      <div
        className="text-center"
        style={{
          marginTop: "0px",
          marginBottom: "0px",
          color: "#f27c2d",
        }}
      >
        <span className="section-tag">
          Smart Manufacturing Solutions
        </span>
      </div>

      {/* ========================================================
          SOLUTION SECTIONS
      ======================================================== */}

      {solutions.map((sol, index) => (
        <section
          id={sol.id}
          key={sol.id}
          className="solution-section-premium"
          style={sectionStyle}
        >
          {/* FLOATING ELEMENT 1 */}

          <div
            className="floating-square"
            style={{
              width: "70px",
              height: "70px",
              top: "60px",
              right: "80px",
            }}
          />

          {/* FLOATING ELEMENT 2 */}

          <div
            className="floating-square"
            style={{
              width: "40px",
              height: "40px",
              bottom: "80px",
              left: "60px",
              animationDelay: "2s",
            }}
          />

          {/* FLOATING ELEMENT 3 */}

          <div
            className="floating-square"
            style={{
              width: "55px",
              height: "55px",
              top: "50%",
              left: "5%",
              animationDelay: "4s",
            }}
          />

          {/* FLOATING ELEMENT 4 */}

          <div
            className="floating-square"
            style={{
              width: "40px",
              height: "40px",
              bottom: "80px",
              right: "60px",
              animationDelay: "8s",
            }}
          />

          {/* BLOB 1 */}

          <div
            className="floating-blob"
            style={{
              width: "180px",
              height: "180px",
              top: "10%",
              right: "5%",
            }}
          />

          {/* BLOB 2 */}

          <div
            className="floating-blob"
            style={{
              width: "140px",
              height: "140px",
              bottom: "10%",
              left: "5%",
              animationDelay: "5s",
            }}
          />

          <div
            className="container fade-in"
            style={{
              position: "relative",
              zIndex: 2,
            }}
          >
            {/* ==================================================
                HEADER
            ================================================== */}

            <div
              className="section-header"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "10px",
              }}
            >
              {/* LOTTIE */}

              <div
                className="solution-lottie-icon"
                style={{
                  width: "52px",
                  height: "52px",

                  display: "flex",

                  alignItems:
                    "center",

                  justifyContent:
                    "center",

                  flexShrink: 0,
                }}
              >
                <AsyncLottie
                  loader={sol.iconLoader}
                  loop
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>

              {/* TITLE */}

              <div>
                <h2
                  style={{
                    margin: 0,

                    fontSize:
                      "clamp(1.6rem, 2.5vw, 2.2rem)",

                    fontWeight: 650,

                    letterSpacing:
                      "0.8px",
                  }}
                >
                  {sol.title}
                </h2>

                <div className="section-line" />
              </div>
            </div>

            {/* ==================================================
                PROBLEM + SOLUTION
            ================================================== */}

            <div className="row mt-4 g-4 solution-problem-row">
              {/* PROBLEM */}

              <motion.div
                className="col-md-6"
                initial={{
                  opacity: 0,
                  x: -60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
              >
                <div className="ps-card problem">
                  <h6>⚠ Problem</h6>

                  <p>
                    {sol.problem}
                  </p>
                </div>
              </motion.div>

              {/* SOLUTION */}

              <motion.div
                className="col-md-6"
                initial={{
                  opacity: 0,
                  x: 60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
              >
                <div className="ps-card solution">
                  <h6>✔ Solution</h6>

                  <p>
                    {sol.approach}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* ==================================================
                ARCHITECTURE + USE CASES + OUTCOME
            ================================================== */}

            <div className="row mt-5 g-4 solution-detail-grid">
              {/* ARCHITECTURE */}

              <motion.div
                className="col-md-4"
                initial={{
                  opacity: 0,
                  y: 55,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.65,
                  delay: 0,
                }}
              >
                <div className="solution-modern-card">
                  <div className="card-title-row">
                    <FaCogs />

                    <h6>
                      Architecture
                    </h6>
                  </div>

                  <ul>
                    {sol.architecture.map(
                      (item) => (
                        <li key={item}>
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </motion.div>

              {/* USE CASES */}

              <motion.div
                className="col-md-4"
                initial={{
                  opacity: 0,
                  y: 55,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.1,
                }}
              >
                <div className="solution-modern-card alt">
                  <div className="card-title-row">
                    <FaProjectDiagram />

                    <h6>
                      Use Cases
                    </h6>
                  </div>

                  <ul>
                    {sol.useCases.map(
                      (item) => (
                        <li key={item}>
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </motion.div>

              {/* OUTCOME */}

              <motion.div
                className="col-md-4"
                initial={{
                  opacity: 0,
                  y: 55,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.2,
                }}
              >
                <div className="solution-modern-card highlight">
                  <div className="card-title-row">
                    <FaChartLine />

                    <h6>
                      Outcome
                    </h6>
                  </div>

                  <ul>
                    {sol.outcome.map(
                      (item) => (
                        <li key={item}>
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* ========================================================
          CTA
      ======================================================== */}

      <section
        className="solution-cta"
        style={{
          padding: "100px 0",
          color: "#fff",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",

          width: "90%",
          maxWidth: "1450px",
          margin: "40px auto",

          borderRadius: "28px",

          background: `
            radial-gradient(
              circle at 15% 50%,
              rgba(34,120,255,0.18) 0%,
              transparent 35%
            ),
            radial-gradient(
              circle at 85% 30%,
              rgba(219,153,65,0.20) 0%,
              transparent 35%
            ),
            linear-gradient(
              135deg,
              #07111D 0%,
              #0B1C2D 50%,
              #07111D 100%
            )
          `,

          border:
            "1px solid rgba(255,255,255,0.08)",

          boxShadow: `
            0 30px 80px rgba(0,0,0,0.35),
            inset 0 1px 0 rgba(255,255,255,0.08)
          `,
        }}
      >
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
          <div className="container fade-in">
            <h2>
              Let’s Engineer Your Next Transformation
            </h2>

            <p
              style={{
                maxWidth: "600px",
                margin: "20px auto",
              }}
            >
              Build or upgrade your factory
              with scalable solutions.
            </p>

            <button
              onClick={() =>
                navigate("/contact")
              }
              style={{
                background:
                  "linear-gradient(135deg,var(--tv-red),var(--tv-gold))",

                border: "none",

                padding:
                  "14px 28px",

                borderRadius:
                  "999px",

                color: "#fff",

                fontWeight: 700,

                cursor: "pointer",

                transition:
                  "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-2px)";

                e.currentTarget.style.boxShadow =
                  "0 15px 35px var(--tv-red)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0)";

                e.currentTarget.style.boxShadow =
                  "0 10px 25px var(--tv-red)";
              }}
            >
              Talk to Our Engineers
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Solutions;