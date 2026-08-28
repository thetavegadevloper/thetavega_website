
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import {
  useNavigate,
  useLocation,
} from "react-router-dom";
import image1 from "../assets/images/Picture1.jpg";
import image2 from "../assets/images/Picture2.jpg";
import image3 from "../assets/images/Picture3.jpg";
import image4 from "../assets/images/Picture4.jpg";
import image5 from "../assets/images/Picture5.jpg";
import image6 from "../assets/images/Picture6.jpg";
import image7 from "../assets/images/Picture7.jpg";
import image8 from "../assets/images/Picture8.jpg";
import image9 from "../assets/images/Picture9.jpg";
import image10 from "../assets/images/Picture10.jpg";
import image11 from "../assets/images/Picture11.jpg";
import image12 from "../assets/images/Picture12.jpg";
import image13 from "../assets/images/Picture13.jpg";
import image14 from "../assets/images/Picture14.jpg";
import image15 from "../assets/images/Picture15.jpg";






const fadeUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};


const operateXModules = [
  {
    key: "planning",
    title: "Production Planning & Scheduling",
    description: "AI-assisted planning, target vs actual tracking, dynamic rescheduling",
    color: "#F97316",
    icon: "planning",
    side: "top",
    style: { left: "34%", top: "1%", width: "32%" },
    delay: 1.55,
  },
  {
    key: "documentation",
    title: "Documentation & Reporting",
    description: "Auto-generated production, quality, maintenance & compliance reports",
    color: "#6B9A9E",
    icon: "document",
    side: "left",
    style: { left: "2%", top: "13%", width: "32%" },
    delay: 1.68,
  },
  {
    key: "monitoring",
    title: "Production Monitoring & Andon",
    description: "Real-time dashboards, line status, losses, OEE, alarms & alerts",
    color: "#00AFC8",
    icon: "monitor",
    side: "right",
    style: { right: "2%", top: "13%", width: "32%" },
    delay: 1.81,
  },
  {
    key: "maintenance",
    title: "JH & Preventive Maintenance",
    description: "Machine health monitoring, CBM/TBM/PM scheduling",
    color: "#F5A000",
    icon: "maintenance",
    side: "left",
    style: { left: "2%", top: "32%", width: "32%" },
    delay: 1.94,
  },
  {
    key: "workforce",
    title: "Workforce Management",
    description: "Skill-based manpower allocation, attendance integration, shift readiness",
    color: "#1280C4",
    icon: "workforce",
    side: "right",
    style: { right: "2%", top: "32%", width: "32%" },
    delay: 2.07,
  },
  {
    key: "analytics",
    title: "Analytics & Intelligence",
    description: "OEE/OLE, SPC (Cp/Cpk), trends, AI-driven insights",
    color: "#FF5A59",
    icon: "analytics",
    side: "left",
    style: { left: "2%", top: "51%", width: "32%" },
    delay: 2.20,
  },
  {
    key: "guidance",
    title: "Operator Guidance System",
    description: "Digital SOPs, JH, PM, Q-points, setup guidance, pick-to-light",
    color: "#0C5E9C",
    icon: "guidance",
    side: "right",
    style: { right: "2%", top: "51%", width: "32%" },
    delay: 2.33,
  },
  {
    key: "traceability",
    title: "Traceability System",
    description: "VIN/serial-wise genealogy, station-wise & parameter-wise traceability",
    color: "#B6256B",
    icon: "traceability",
    side: "left",
    style: { left: "2%", top: "70%", width: "32%" },
    delay: 2.46,
  },
  {
    key: "quality",
    title: "Quality Management System",
    description: "CTQ monitoring, poka-yoke validation, audits & NC tracking",
    color: "#30343B",
    icon: "quality",
    side: "right",
    style: { right: "2%", top: "70%", width: "32%" },
    delay: 2.59,
  },
  {
    key: "assurance",
    title: "Product Quality Assurance",
    description: "Process confirmation, tool data, inspection logging, auto-PDI",
    color: "#FF3947",
    icon: "assurance",
    side: "bottom",
    style: { left: "34%", top: "86%", width: "32%" },
    delay: 2.72,
  },
];

const OperateXModuleIcon = ({ type }) => {
  const common = {
    width: "54%",
    height: "54%",
    viewBox: "0 0 64 64",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 3,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (type === "planning") {
    return (
      <svg {...common}>
        <rect x="10" y="8" width="32" height="46" rx="3" />
        <path d="M17 8v7M27 8v7M35 8v7M15 22h22" />
        <path d="M16 31h7M16 39h7M16 47h7M28 31h8M28 39h8M28 47h8" />
        <rect x="40" y="27" width="15" height="23" rx="2" />
        <path d="M44 34h7M44 40h7M44 46h7" />
      </svg>
    );
  }

  if (type === "document") {
    return (
      <svg {...common}>
        <path d="M15 7h25l9 9v40H15z" />
        <path d="M40 7v11h10M21 27h20M21 34h12" />
        <circle cx="28" cy="46" r="7" />
        <path d="M28 39v7l5 3" />
      </svg>
    );
  }

  if (type === "monitor") {
    return (
      <svg {...common}>
        <rect x="8" y="10" width="48" height="33" rx="4" />
        <path d="M24 52h16M32 43v9" />
        <path d="M16 31c5-11 13-13 20-7 6 6 10 3 13-3" />
        <circle cx="20" cy="21" r="3" />
      </svg>
    );
  }

  if (type === "maintenance") {
    return (
      <svg {...common}>
        <circle cx="24" cy="25" r="9" />
        <path d="M24 9v6M24 35v6M8 25h6M34 25h6M13 14l4 4M31 32l4 4M35 14l-4 4M17 32l-4 4" />
        <path d="M39 35l15 15M44 31l8 8M38 37l-9 15" />
      </svg>
    );
  }

  if (type === "workforce") {
    return (
      <svg {...common}>
        <circle cx="32" cy="20" r="8" />
        <circle cx="15" cy="26" r="6" />
        <circle cx="49" cy="26" r="6" />
        <path d="M19 49c1-10 6-15 13-15s12 5 13 15M6 49c1-8 4-12 9-12 3 0 5 1 7 4M58 49c-1-8-4-12-9-12-3 0-5 1-7 4" />
      </svg>
    );
  }

  if (type === "analytics") {
    return (
      <svg {...common}>
        <path d="M9 54h46M14 49V34h8v15M28 49V23h8v26M42 49V14h8v35" />
        <path d="M12 27l11-7 10 3 16-12" />
        <circle cx="12" cy="27" r="2" /><circle cx="23" cy="20" r="2" /><circle cx="33" cy="23" r="2" /><circle cx="49" cy="11" r="2" />
      </svg>
    );
  }

  if (type === "guidance") {
    return (
      <svg {...common}>
        <circle cx="23" cy="19" r="8" />
        <path d="M12 49c1-12 5-18 11-18s10 6 11 18" />
        <path d="M41 14l4-4 4 4 5-1 1 5 4 3-3 4 1 5-5 1-3 4-4-4-5 1-1-5-4-3 3-4-1-5z" />
        <circle cx="49" cy="22" r="4" />
      </svg>
    );
  }

  if (type === "traceability") {
    return (
      <svg {...common}>
        <circle cx="32" cy="14" r="6" />
        <circle cx="15" cy="45" r="6" />
        <circle cx="49" cy="45" r="6" />
        <path d="M29 20L18 39M35 20l11 19M21 45h22" />
        <path d="M10 12h9M14.5 8v8M45 11h9M49.5 7v8" />
      </svg>
    );
  }

  if (type === "quality") {
    return (
      <svg {...common}>
        <rect x="9" y="10" width="42" height="30" rx="3" />
        <path d="M18 52h24M30 40v12" />
        <circle cx="42" cy="27" r="9" />
        <path d="M42 14v5M42 35v5M29 27h5M50 27h5M33 18l4 4M47 32l4 4M51 18l-4 4M37 32l-4 4" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M12 13h30v34H12z" />
      <path d="M18 21h18M18 29h11M18 37h15" />
      <path d="M38 39l7 7 11-14" />
      <circle cx="47" cy="39" r="13" />
    </svg>
  );
};

const OperateXModulesSection = () => {
  const stageWrapRef = useRef(null);
  const autoPlayedRef = useRef(false);
  const userInterruptedRef = useRef(false);

  const connectorPaths = [
    "M600 189 L600 78",
    "M545 189 L505 145 L409 85",
    "M655 189 L695 145 L791 85",
    "M534 207 L470 207 L409 207",
    "M666 207 L730 207 L791 207",
    "M506 324 L470 324 L409 324",
    "M694 324 L730 324 L791 324",
    "M545 391 L500 425 L409 441",
    "M655 391 L700 425 L791 441",
    "M600 391 L600 485",
  ];

  const dotPoints = [
    [600, 78],
    [409, 85],
    [791, 85],
    [409, 207],
    [791, 207],
    [409, 324],
    [791, 324],
    [409, 441],
    [791, 441],
    [600, 485],
  ];

  useEffect(() => {
    const wrap = stageWrapRef.current;
    if (!wrap) return;

    const isMobileView = () => window.innerWidth <= 768;
    let observer = null;
    let leftTimer = null;
    let rightTimer = null;
    let raf1 = null;
    let raf2 = null;

    const getCenterLeft = () =>
      Math.max((wrap.scrollWidth - wrap.clientWidth) / 2, 0);

    const showCenter = () => {
      wrap.scrollLeft = getCenterLeft();
    };

    const stopAutoTour = () => {
      userInterruptedRef.current = true;
      if (leftTimer) clearTimeout(leftTimer);
      if (rightTimer) clearTimeout(rightTimer);
    };

    const startAutoTour = () => {
      if (!isMobileView() || autoPlayedRef.current) return;

      autoPlayedRef.current = true;
      userInterruptedRef.current = false;

      showCenter();

      leftTimer = setTimeout(() => {
        if (userInterruptedRef.current) return;
        wrap.scrollTo({ left: 0, behavior: "smooth" });
      }, 1300);

      rightTimer = setTimeout(() => {
        if (userInterruptedRef.current) return;
        wrap.scrollTo({
          left: Math.max(wrap.scrollWidth - wrap.clientWidth, 0),
          behavior: "smooth",
        });
      }, 3000);
    };

    if (isMobileView()) {
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(showCenter);
      });

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) startAutoTour();
        },
        { threshold: 0.35 }
      );

      observer.observe(wrap);

      wrap.addEventListener("touchstart", stopAutoTour, { passive: true });
      wrap.addEventListener("mousedown", stopAutoTour);
      wrap.addEventListener("wheel", stopAutoTour, { passive: true });
    }

    return () => {
      if (observer) observer.disconnect();
      if (leftTimer) clearTimeout(leftTimer);
      if (rightTimer) clearTimeout(rightTimer);
      if (raf1) cancelAnimationFrame(raf1);
      if (raf2) cancelAnimationFrame(raf2);

      wrap.removeEventListener("touchstart", stopAutoTour);
      wrap.removeEventListener("mousedown", stopAutoTour);
      wrap.removeEventListener("wheel", stopAutoTour);
    };
  }, []);

  return (
    <section
     id="operatex-modules"
    className="operatex-modules-section">
      <style>{`
        .operatex-modules-section {
          position: relative;
          width: 100%;
          background: #ffffff;
           padding: 32px 0 38px;
          overflow: hidden;
        }

        .operatex-modules-stage-wrap {
          width: min(1180px, 96%);
          margin: 0 auto;
          padding: 0;
          position: relative;
          z-index: 2;
        }

        .operatex-modules-stage {
          position: relative;
          width: 100%;
          aspect-ratio: 1200 / 580;
          min-height: 0;
        }

        .operatex-connectors {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 2;
        }

        .operatex-center {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 19%;
          max-width: 225px;
          aspect-ratio: 1.12 / 1;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .operatex-center-hex {
          position: absolute;
          inset: 0;
          clip-path: polygon(24% 0, 76% 0, 100% 50%, 76% 100%, 24% 100%, 0 50%);
          background: #9b9b9b;
          filter: drop-shadow(0 7px 12px rgba(0,0,0,0.06));
        }

        .operatex-center-hex::after {
          content: "";
          position: absolute;
          inset: 6px;
          clip-path: inherit;
          background: #ffffff;
        }

        .operatex-center-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: #0d0d0d;
          line-height: 1;
        }

        .operatex-center-brand {
          display: block;
          font-weight: 800;
          font-size: clamp(17px, 1.55vw, 25px);
          letter-spacing: -0.045em;
          white-space: nowrap;
          user-select: none;
        }

        .operatex-center-brand .accent {
          color: #ee312f;
          font-size: 1.18em;
        }

        .operatex-center-subtitle {
          display: block;
          margin-top: 4px;
          font-size: clamp(10px, 0.9vw, 14px);
          font-weight: 800;
          color: #111;
          user-select: none;
        }

        .operatex-module-group {
          position: absolute;
          z-index: 6;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5%;
          min-height: 12.5%;
          transform-origin: center;
        }

        .operatex-module-group.top,
        .operatex-module-group.bottom {
          gap: 1.8%;
        }

        .operatex-module-card {
          flex: 1 1 auto;
          min-width: 0;
          height: 100%;
          min-height: 74px;
          padding: 10px 16px;
          background: rgba(255,255,255,0.98);
          clip-path: polygon(7% 0, 93% 0, 100% 50%, 93% 100%, 7% 100%, 0 50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
        }

        .operatex-module-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: var(--module-color);
          clip-path: inherit;
          z-index: -2;
        }

        .operatex-module-card::after {
          content: "";
          position: absolute;
          inset: 1px;
          background: #ffffff;
          clip-path: inherit;
          z-index: -1;
        }

        .operatex-module-title {
          color: var(--module-color);
          font-size: clamp(10px, 0.85vw, 13px);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 4px;
          white-space: normal;
          overflow-wrap: break-word;
          max-width: 96%;
        }

        .operatex-module-description {
          color: #0e0e0e;
          font-size: clamp(7.6px, 0.66vw, 10.5px);
          font-weight: 500;
          line-height: 1.25;
          max-width: 97%;
        }

        .operatex-module-icon {
          flex: 0 0 20.8%;
          aspect-ratio: 1 / 1;
          max-width: 72px;
          min-width: 52px;
          clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111;
          background: var(--module-color);
          transition: transform 0.35s ease, filter 0.35s ease;
        }

        .operatex-module-icon::after {
          content: "";
          position: absolute;
          inset: 1px;
          clip-path: inherit;
          background: #fff;
          z-index: 0;
        }

        .operatex-module-icon svg {
          position: relative;
          z-index: 1;
        }

        .operatex-module-group:hover .operatex-module-icon {
          transform: translateY(-3px) scale(1.03);
          filter: drop-shadow(0 8px 10px rgba(0,0,0,0.09));
        }

        @media (max-width: 1100px) {
          .operatex-modules-stage-wrap {
            width: 98%;
          }
          .operatex-module-card {
            min-height: 68px;
            padding: 8px 13px;
          }
          .operatex-module-icon {
            max-width: 66px;
            min-width: 48px;
          }
        }

        @media (max-width: 768px) {
          .operatex-modules-section {
            padding: 28px 0 36px;
          }

          .operatex-modules-stage-wrap {
            width: 100%;
            overflow-x: auto;
            overflow-y: hidden;
            scrollbar-width: none;
            padding: 0;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
          }

          .operatex-modules-stage-wrap::-webkit-scrollbar {
            display: none;
          }

          .operatex-modules-stage {
            width: 900px;
            aspect-ratio: 1200 / 580;
          }

          .operatex-center-brand {
            font-size: 20px;
          }

          .operatex-center-subtitle {
            font-size: 12px;
          }

          .operatex-module-title {
            font-size: 10.5px;
          }

          .operatex-module-description {
            font-size: 8px;
          }

          .operatex-module-card {
            min-height: 62px;
            padding: 8px 12px;
          }

          .operatex-module-icon {
            min-width: 48px;
            max-width: 58px;
          }
        }

        .operatex-modules-heading-wrap {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 28px;
          padding: 0 16px;
        }

        .operatex-modules-heading {
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #0d0d0d;
          margin: 0 0 8px;
        }

        .operatex-modules-heading .accent {
          color: #ee312f;
        }

        .operatex-modules-subheading {
          font-size: clamp(13px, 1.1vw, 16px);
          font-weight: 500;
          color: #5a5a5a;
          margin: 0;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .operatex-modules-heading-wrap {
            margin: 0 auto 20px;
          }
          .operatex-modules-heading {
            font-size: 22px;
          }
          .operatex-modules-subheading {
            font-size: 13px;
          }
        }
          
      `}</style>

<motion.div
        className="operatex-modules-heading-wrap"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="operatex-modules-heading">
          Operate<span className="accent">X</span> Modules
        </h2>
        <p className="operatex-modules-subheading">
          One connected platform bringing every shop-floor function together — planning, quality, maintenance and traceability, all in real time.
        </p>
      </motion.div>

      <div className="operatex-modules-stage-wrap" ref={stageWrapRef}>
        <div className="operatex-modules-stage">
          <svg
            className="operatex-connectors"
            viewBox="0 0 1200 580"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {connectorPaths.map((d, index) => (
              <motion.path
                key={d}
                d={d}
                fill="none"
                stroke="#242424"
                strokeWidth="1.45"
                strokeDasharray="3 5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.9 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.65, delay: 0.72 + index * 0.07, ease: "easeInOut" }}
              />
            ))}

            {dotPoints.map(([cx, cy], index) => (
              <motion.circle
                key={`${cx}-${cy}`}
                cx={cx}
                cy={cy}
                r="3.4"
                fill="#171717"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.25, delay: 1.2 + index * 0.07 }}
              />
            ))}
          </svg>

          <motion.div
            className="operatex-center"
            initial={{ opacity: 0, scale: 0.52, rotate: -8, x: "-50%", y: "-50%" }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0, x: "-50%", y: "-50%" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="operatex-center-hex"
              initial={{ filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" }}
              whileInView={{ filter: "drop-shadow(0 12px 20px rgba(0,0,0,0.07))" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            />
            <div className="operatex-center-content">
              <motion.span
                className="operatex-center-brand"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.32 }}
              >
                <span className="accent">O</span>perate<span className="accent">X</span>
              </motion.span>
              <motion.span
                className="operatex-center-subtitle"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.42, delay: 0.55 }}
              >
                Modules
              </motion.span>
            </div>
          </motion.div>

          {operateXModules.map((module) => {
            const isLeft = module.side === "left";
            const iconFirst = module.side === "right";

            return (
              <motion.div
                key={module.key}
                className={`operatex-module-group ${module.side}`}
                style={{ ...module.style, "--module-color": module.color }}
                initial={{
                  opacity: 0,
                  scale: 0.76,
                  x: isLeft ? 28 : module.side === "right" ? -28 : 0,
                  y: module.side === "top" ? 20 : module.side === "bottom" ? -20 : 0,
                }}
                whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.58, delay: module.delay, ease: [0.22, 1, 0.36, 1] }}
              >
                {iconFirst && (
                  <motion.div
                    className="operatex-module-icon"
                    animate={{ y: [0, -2.5, 0] }}
                    transition={{ duration: 3.4, delay: module.delay + 0.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <OperateXModuleIcon type={module.icon} />
                  </motion.div>
                )}

                <div className="operatex-module-card">
                  <div className="operatex-module-title">{module.title}</div>
                  <div className="operatex-module-description">{module.description}</div>
                </div>

                {!iconFirst && (
                  <motion.div
                    className="operatex-module-icon"
                    animate={{ y: [0, -2.5, 0] }}
                    transition={{ duration: 3.4, delay: module.delay + 0.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <OperateXModuleIcon type={module.icon} />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


const ProductPage = () => {
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

  const timer = setTimeout(() => {
    const element = document.getElementById(sectionId);

    if (element) {
      const navbarOffset = 90;

      const elementPosition =
        element.getBoundingClientRect().top +
        window.pageYOffset;

      window.scrollTo({
        top: elementPosition - navbarOffset,
        behavior: "smooth",
      });
    }
  }, 250);

  return () => clearTimeout(timer);
}, [location.hash]);

  const [imageTick, setImageTick] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setImageTick((prev) => prev + 1);
  }, 2000); // change image every 2 sec

  return () => clearInterval(interval);
}, []);

const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

useEffect(() => {
  const resize = () => setIsMobile(window.innerWidth <= 768);
  window.addEventListener("resize", resize);
  return () => window.removeEventListener("resize", resize);
}, []);
const products = [
  {id: "mes",
    title: "OperateX MES (Manufacturing Execution System)",
    tagline: "Core Manufacturing Brain",
    description:
      "OperateX MES is a next-generation digital manufacturing platform that connects machines, operators, and enterprise systems to deliver real-time visibility, control, and optimization of production operations. It enables end-to-end manufacturing intelligence from raw material to finished goods.",

    images: [image1, image2, image3],

    sections: [
      {
        heading: "Key Modules",
        items: [
          "Production Planning & Scheduling",
          "OEE Monitoring (Availability, Performance, Quality)",
          "Machine Monitoring (CNC, PLC, IIoT)",
          "Quality Management (SPC, CP/CPK, PDI Reports)",
          "Maintenance & TPM",
          "Operator Management & Login Tracking",
          "Document Management (SOP, JH, OPL)",
          "Andon & Escalation System",
          "Analytics Dashboard & Reports",
          "SAP/ERP Integration",
        ],
      },
      {
        heading: "Architecture (L1–L4)",
        items: [
          "L1 (Device Layer): PLCs, CNCs, Sensors, DC Tools",
          "L2 (Control Layer): Data Concentrators (FX5U), Machine Controllers",
          "L3 (Application Layer): OperateX Server (Node.js, TimescaleDB, APIs)",
          "L4 (Enterprise Layer): SAP / ERP / Cloud Integration",
        ],
      },
      {
        heading: "UI Highlights",
        items: [
          "Real-time OEE dashboards",
          "Machine-wise live status (Run/Stop/Breakdown)",
          "SPC charts (CP/CPK, Run Charts, Histograms)",
          "Production vs Target visualization",
          "Andon alerts & escalation screens",
          "Role-based dashboards (Operator / Supervisor / Manager / CEO)",
        ],
      },
      {
        heading: "Deployment Model",
        items: [
          "On-Premise (Factory Server)",
          "Edge + Cloud Hybrid (via IIoT Gateway / Litmus Edge)",
          "Multi-Plant Centralized Deployment",
          "SaaS-ready architecture (future scalable)",
        ],
      },
      {
        heading: "Competitive Advantage",
        items: [
          "Designed for discrete manufacturing (Auto/EV focused)",
          "Native PLC + OT integration expertise (not just IT layer)",
          "Faster deployment vs global MES",
          "Modular → Pay-as-you-scale",
          "Deep integration with traceability + process confirmation",
          "Built in India, cost-effective vs Siemens Opcenter",
        ],
      },
    ],
  },

  {    id: "traceability",
    title: "OperateX Traceability",
    tagline: "Digital Product Memory",
    description:
      "A real-time process confirmation and genealogy tracking system that ensures every part, process, and parameter is validated and recorded across the production lifecycle.",

    images: [image4, image5, image6],

    sections: [
      {
        heading: "Key Modules",
        items: [
          "VIN / Serial Number Tracking",
          "Part Genealogy (Marriage Tracking)",
          "Tool Data Logging (Torque, Angle, Signature)",
          "Leak Test Data Capture",
          "Vision Inspection Integration",
          "Rework & Offline Correction Management",
          "Poka-Yoke Logic Engine",
          "Final PDI Report Generation",
        ],
      },
      {
        heading: "Architecture (L1–L4)",
        items: [
          "L1: DC Tools, Leak Testers, Scanners, Vision Systems",
          "L2: FX5U Data Concentrators",
          "L3: Traceability Engine + Database",
          "L4: SAP / MES Integration",
        ],
      },
      {
        heading: "UI Highlights",
        items: [
          "Engine/Part genealogy tree view",
          "Station-wise OK/NOK tracking",
          "Rework tracking screens",
          "Tool tightening result dashboards",
          "Scan validation screens (barcode/QR)",
        ],
      },
      {
        heading: "Deployment Model",
        items: [
          "Cell-level deployment",
          "Line-level centralized system",
          "Enterprise integration with MES / SAP",
        ],
      },
      {
        heading: "Competitive Advantage",
        items: [
          "Strong indexing-based tracking (no RFID dependency)",
          "Deep process interlock logic (PLC + software combined)",
          "Real-time validation → Zero defect manufacturing",
          "Tight integration with tools, vision, leak testers",
        ],
      },
    ],
  },

  {
     id: "utility-management",
    title: "OperateX Utility (Energy & Utility Management System)",
    tagline: "Energy Intelligence Layer",
    description:
      "A centralized platform for monitoring, analyzing, and optimizing energy and utilities consumption across the plant.",

    images: [image7, image8, image9],

    sections: [
      {
        heading: "Key Modules",
        items: [
          "Energy Monitoring (Machine / Line / Plant Level)",
          "Power Quality Analysis",
          "Demand Monitoring & Alerts",
          "Utility Tracking (Air, Water, Gas)",
          "Cost Analysis (Per Part / Per Machine)",
          "Solar Integration (SCADA + PR/CUF Monitoring)",
        ],
      },
      {
        heading: "Architecture (L1–L4)",
        items: [
          "L1: Energy meters, sensors",
          "L2: Data acquisition gateways / PLCs",
          "L3: Utility analytics platform",
          "L4: ERP / Sustainability dashboards",
        ],
      },
      {
        heading: "UI Highlights",
        items: [
          "Real-time power consumption dashboards",
          "Machine-wise energy usage",
          "Peak demand alerts",
          "Cost vs production analytics",
          "Solar generation monitoring",
        ],
      },
      {
        heading: "Deployment Model",
        items: [
          "On-premise + cloud dashboards",
          "Integration with BMS / SCADA systems",
        ],
      },
      {
        heading: "Competitive Advantage",
        items: [
          "Integration with production → energy per part analytics",
          "Unified platform (Energy + Manufacturing)",
          "Strong SCADA + automation integration capability",
        ],
      },
    ],
  },

  {   id: "ai-analytics",
    title: "Vision Systems / AI Modules",
    tagline: "AI Quality Engine",
    description:
      "Advanced machine vision and AI-driven inspection systems for quality assurance, marking verification, and defect detection.",

    images: [image10, image11, image12],

    sections: [
      {
        heading: "Key Modules",
        items: [
          "OCR & Marking Verification",
          "Presence/Absence Detection",
          "Orientation & Assembly Validation",
          "Surface Defect Detection (AI-based)",
          "Barcode / QR Code Scanning",
          "Vision-Guided Automation",
        ],
      },
      {
        heading: "Architecture",
        items: [
          "Camera Layer (Keyence / Cognex / AI Cameras)",
          "Edge Processing (Industrial PC / AI Module)",
          "Integration with PLC / MES",
          "Data Logging in OperateX",
        ],
      },
      {
        heading: "UI Highlights",
        items: [
          "Live camera feed with overlays",
          "OK/NOK validation screens",
          "OCR reading results",
          "Defect marking visualization",
          "Image history & audit trail",
        ],
      },
      {
        heading: "Deployment Model",
        items: [
          "Standalone machine integration",
          "Inline assembly integration",
          "MES-connected quality system",
        ],
      },
      {
        heading: "Competitive Advantage",
        items: [
          "Strong integration with traceability + MES",
          "Combination of rule-based + AI inspection",
          "Real-time rejection & interlocking",
        ],
      },
    ],
  },

  {   id: "ot-connectivity",
    title: "Proprietary Hardware / Edge Systems",
    tagline: "Industrial Edge Backbone",
    description:
      "Custom-designed hardware systems built by ThetaVega to enable reliable and scalable industrial data acquisition and control.",

    images: [image13, image14, image15],

    sections: [
      {
        heading: "Products Include",
        items: [
          "Data Concentrator Panels (FX5U based)",
          "Smart Operator Panels (Android-based HMI)",
          "IIoT Gateways",
          "Smart Display Systems",
          "Panel Solutions (IP55 / IP65 compliant)",
        ],
      },
      {
        heading: "Architecture",
        items: [
          "Edge Data Collection → Processing → Cloud/MES Integration",
        ],
      },
      {
        heading: "Deployment Model",
        items: [
          "Installed at machine / cell level",
          "Integrated with OperateX platform",
        ],
      },
      {
        heading: "Competitive Advantage",
        items: [
          "Full OT + IT control (hardware + software both)",
          "Cost optimized vs imported systems",
          "Designed for Indian shopfloor conditions",
          "Faster commissioning & support",
        ],
      },
    ],
  },

  
];
const benefitCards = [
  {
    letter: "P",
    title: "Productivity",
    color: "#2F80ED",
    items: [
       {
   title: "Real-time Production Visibility",
   desc: "Live target vs actual monitoring across lines, machines and shifts."
 },
 {
   title: "OEE Driven Performance",
   desc: "Automated OEE, loss analysis and bottleneck identification."
 },
 {
   title: "Optimized Workforce Utilization",
   desc: "Skill-based manpower allocation and stage-wise readiness."
 },
 {
   title: "Reduced Idle & Setup Losses",
   desc: "Digital SOPs, operator guidance and guided changeover."
 }
    ],
  },
  {
    letter: "Q",
    title: "Quality",
    color: "#27AE60",
    items: [
       {
      title: "Built-in Quality at Source",
      desc: "CTQ, poka-yoke and process confirmation enforced at every stage."
    },
    {
      title: "End-to-End Product Traceability",
      desc: "VIN and serial-wise genealogy with machine and process data."
    },
    {
      title: "Zero Defect Dispatch Assurance",
      desc: "Quality gates and system-based PDI validation before dispatch."
    },
    {
      title: "Real-time Defect Alerts",
      desc: "Instant visibility of NCs, deviations and audit failures."
    }
    ],
  },
  {
    letter: "C",
    title: "Cost",
    color: "#F2994A",
    items: [
      {
      title: "Reduced Scrap & Rework Costs",
      desc: "Early defect detection and process enforcement."
    },
    {
      title: "Lower Downtime & Maintenance",
      desc: "Condition-based and predictive maintenance using live data."
    },
    {
      title: "Optimized Inventory & WIP",
      desc: "Real-time production consumption and e-Kanban visibility."
    },
    {
      title: "Elimination of Manual Reporting",
      desc: "Automated reports for production quality and maintenance."
    }
    ],
  },
  {
    letter: "D",
    title: "Delivery",
    color: "#9B51E0",
    items: [
        {
      title: "Improved Schedule Adherence",
      desc: "Real-time tracking of plan versus execution."
    },
    {
      title: "Faster Issue Resolution",
      desc: "Andon alerts and role-based notifications."
    },
    {
      title: "Reliable Dispatch Planning",
      desc: "System-validated production and quality confirmation."
    },
    {
      title: "Shorter Lead Time",
      desc: "Streamlined workflows and reduced decision latency."
    }
    ],
  },
  {
    letter: "S",
    title: "Safety",
    color: "#EB5757",
    items: [
        {
      title: "Centralized Safety Monitoring",
      desc: "Live status of safety devices, interlocks and E-Stops."
    },
    {
      title: "Digital Safety Audits",
      desc: "Scheduled audits with auto alerts and NC tracking."
    },
    {
      title: "Operator Awareness",
      desc: "Safety instructions displayed at machine and stage level."
    },
    {
      title: "Proactive Risk Identification",
      desc: "Early alerts for unsafe conditions and equipment failures."
    }
    ],
  },
  {
    letter: "M",
    title: "Morale",
    color: "#00A99D",
    items: [
       {
      title: "Reduced Operator Dependency",
      desc: "Guided operations through digital SOPs and visual instructions."
    },
    {
      title: "Clear Role Visibility",
      desc: "Operators supervisors and managers see real-time data."
    },
    {
      title: "Faster Problem Resolution",
      desc: "Less firefighting and more structured response."
    },
    {
      title: "Data Driven Recognition",
      desc: "Transparent performance metrics improve accountability."
    }
    ],
  },
];
const [activeCard, setActiveCard] = useState(0);

useEffect(() => {
  if (!isMobile) return;

  const interval = setInterval(() => {
    setActiveCard((prev) => (prev + 1) % 6);
  }, 2500);

  return () => clearInterval(interval);
}, [isMobile]);
 const getCircularPosition = (index, active, total) => {
  let diff = index - active;

  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;

  return diff;
};
const [touchStart, setTouchStart] = useState(null);
const [touchEnd, setTouchEnd] = useState(null);
const handleSwipe = () => {
  if (!touchStart || !touchEnd) return;

  const distance = touchStart - touchEnd;

  if (distance > 50) {
    // swipe left -> next
    setActiveCard((prev) => (prev + 1) % benefitCards.length);
  }

  if (distance < -50) {
    // swipe right -> previous
    setActiveCard(
      (prev) => (prev - 1 + benefitCards.length) % benefitCards.length
    );
  }
};


  return (
    <div style={{ fontFamily: "Montserrat" }}>
      <style>{`
      @media (max-width: 768px) {
        .cta-section {
          width: 94% !important;
          padding: 35px 18px !important;
          margin: 20px auto !important;
          border-radius: 20px !important;
        }

        .cta-section h2 {
          font-size: 1.35rem !important;
          line-height: 1.35 !important;
        }

        .cta-section p {
          font-size: 0.9rem !important;
        }
           
        .cta-buttons {
    display: flex !important;
    flex-wrap: wrap !important;
    justify-content: center !important;
    gap: 12px !important;
  }

  /* First 2 buttons */
  .cta-buttons button {
    width: 165px !important;
    min-width: 165px !important;
    white-space: nowrap !important;
    font-size: 14px !important;
    padding: 12px 16px !important;
  }

  /* Download button second row */
  .cta-buttons a {
    width: 220px !important;
    margin-top: 8px;
    white-space: nowrap !important;
    display: block;
    text-align: center;
    font-size: 14px !important;
    padding: 12px 16px !important;
  }
        
          

        
      }
    `}</style>

      {/* ================= HERO ================= */}
<section
 id="platform"
  style={{
    marginTop: "60px",
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(180deg, #ffffff 0%, #fcfaf7 45%, #f7f4ef 100%)",
  }}
>
  {/* SOFT GLOBAL GLOW */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "radial-gradient(circle at 18% 12%, rgba(242,124,45,0.08) 0%, transparent 28%), radial-gradient(circle at 78% 18%, rgba(219,153,65,0.08) 0%, transparent 26%), radial-gradient(circle at 85% 80%, rgba(242,124,45,0.05) 0%, transparent 24%)",
      zIndex: 0,
    }}
  />

  {/* FLOATING SHAPES */}
  <div
    style={{
      position: "absolute",
      width: "360px",
      height: "360px",
      borderRadius: "50%",
      background:
        "linear-gradient(135deg, rgba(242,124,45,0.13), rgba(219,153,65,0.06))",
      top: "-130px",
      left: "-110px",
      filter: "blur(2px)",
      zIndex: 0,
    }}
  />

  <div
    style={{
      position: "absolute",
      width: "240px",
      height: "240px",
      borderRadius: "50%",
      background:
        "linear-gradient(135deg, rgba(219,153,65,0.16), rgba(242,124,45,0.07))",
      top: "110px",
      left: "170px",
      zIndex: 0,
    }}
  />

  <div
    style={{
      position: "absolute",
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      background:
        "linear-gradient(135deg, rgba(242,124,45,0.16), rgba(219,153,65,0.08))",
      top: "85px",
      left: "420px",
      zIndex: 0,
    }}
  />

  <div
    style={{
      position: "absolute",
      width: "210px",
      height: "210px",
      borderRadius: "50%",
      background:
        "linear-gradient(135deg, rgba(255,255,255,0.55), rgba(242,124,45,0.06))",
      bottom: "40px",
      left: "90px",
      zIndex: 0,
    }}
  />

  <div
    style={{
      position: "absolute",
      width: "300px",
      height: "300px",
      borderRadius: "50%",
      background:
        "linear-gradient(135deg, rgba(219,153,65,0.10), rgba(242,124,45,0.04))",
      bottom: "-110px",
      right: "-70px",
      zIndex: 0,
    }}
  />

  <div
    style={{
      position: "absolute",
      width: "170px",
      height: "170px",
      borderRadius: "50%",
      background:
        "linear-gradient(135deg, rgba(242,124,45,0.10), rgba(219,153,65,0.04))",
      top: "70px",
      right: "120px",
      zIndex: 0,
    }}
  />

  {/* SUBTLE OUTLINE RINGS */}
  <div
    style={{
      position: "absolute",
      width: "140px",
      height: "140px",
      borderRadius: "50%",
      border: "1px solid rgba(242,124,45,0.18)",
      top: "150px",
      right: "260px",
      zIndex: 0,
    }}
  />

  <div
    style={{
      position: "absolute",
      width: "90px",
      height: "90px",
      borderRadius: "50%",
      border: "1px solid rgba(219,153,65,0.18)",
      bottom: "120px",
      right: "120px",
      zIndex: 0,
    }}
  />

  <div className="container" style={{ position: "relative", zIndex: 2 }}>
    <div className="row align-items-center">

      {/* LEFT CONTENT */}
      <div className="col-lg-6">
        <motion.div {...fadeUp}>
          {/* OPERATEX TITLE */}
          <h5
            style={{
              fontWeight: 700,
              marginBottom: "10px",
              fontSize: "3.2rem",
              lineHeight: 1.1,
              color: "#111",
            }}
          >
            <span style={{ color: "#ed2825" }}>O</span>perate
            <span style={{ color: "#ed2825" }}>X</span>
          </h5>

          {/* MAIN HEADING */}
          <h1
            style={{
              fontWeight: 800,
              fontSize: "3.1rem",
              lineHeight: 1.15,
              marginBottom: 0,
              background: "linear-gradient(90deg, #DB9941 0%, #f27c2d 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Manufacturing Intelligence Platform
          </h1>

          <p
            style={{
              marginTop: "20px",
              lineHeight: 1.8,
              color: "#4f4f4f",
              maxWidth: "560px",
              fontSize: "1rem",
            }}
          >
            OperateX connects machines, operators, quality, maintenance and
            planning into one real-time digital factory system.
          </p>
          <button
  onClick={() => navigate("/operatex-platform")}
  style={{
    marginTop: "18px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "12px 22px",
    borderRadius: "999px",
    border: "none",
    background:
      "linear-gradient(135deg, #f27c2d 0%, #DB9941 100%)",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow:
      "0 12px 28px rgba(242,124,45,0.25)",
    transition: "all 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform =
      "translateY(-2px)";

    e.currentTarget.style.boxShadow =
      "0 16px 34px rgba(242,124,45,0.36)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform =
      "translateY(0)";

    e.currentTarget.style.boxShadow =
      "0 12px 28px rgba(242,124,45,0.25)";
  }}
>
  Explore OperateX

  <span
    style={{
      width: "25px",
      height: "25px",
      borderRadius: "50%",
      background:
        "rgba(255,255,255,0.22)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "15px",
    }}
  >
    →
  </span>
</button>
        </motion.div>
      </div>
      

      {/* RIGHT VIDEO */}
      <div className="col-lg-6 d-flex justify-content-center">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* subtle glow behind video */}
          <div
            style={{
              position: "absolute",
              width: "75%",
              height: "75%",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(242,124,45,0.16) 0%, rgba(219,153,65,0.10) 35%, transparent 70%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 0,
            }}
          />

          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              maxWidth: "620px",
              position: "relative",
              zIndex: 2,
            }}
          >
            <source src="/operateX_for_Web.webm" />
          </video>
        </div>
      </div>

    </div>
  </div>
</section>


<OperateXModulesSection />


<section
id="operatex-benefits"
  style={{
   padding: isMobile ? "40px 0" : "90px 0",
      marginTop: isMobile ? "20px" : "20px",
      marginBottom: isMobile ? "20px" : "20px",

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
  }}
/>

{/* CENTER GLOW */}
<div
  style={{
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    height: "500px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(255,192,203,0.08) 0%, rgba(242,124,45,0.05) 45%, transparent 75%)",
    filter: "blur(60px)",
    zIndex: 0,
  }}
/>

{/* BOTTOM LEFT GLOW */}
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
  }}
/>

{/* BOTTOM RIGHT GLOW */}
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
  }}
/>
  

  <div className="container">

    <div className="text-center mb-5">
      <span
        style={{
          color: "#f27c2d",
          fontWeight: 700,
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        OperateX Benefits
      </span>

      <h2
        style={{
         fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
          lineHeight: 1.8,
          color: "#07111D",
          marginBottom: 0,
          fontWeight: 700,
          maxWidth: "900px",
          marginInline: "auto",
          textAlign: "center",
        }}
      >
        Manufacturing Transformation Outcomes
      </h2>
    </div>

    <div
     onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
  onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
  onTouchEnd={handleSwipe}
  style={
    isMobile
      ? {
          display: "flex",
          overflow: "hidden",
          justifyContent: "center",
          width: "100%",
          minHeight: "450px",
          position: "relative",
        }
      : {}
  }
  className={!isMobile ? "row justify-content-center g-4" : ""}
>

      {benefitCards.map((card, index) => (
       <div
  key={index}
  className={!isMobile ? "col-lg-2 col-md-6 col-12" : ""}
 style={
  isMobile
    ? (() => {
        const diff = getCircularPosition(
          index,
          activeCard,
          benefitCards.length
        );

        return {
          position: "absolute",
          transition: "all 0.8s ease",
          transform: `
            translateX(${diff * 220}px)
            scale(${diff === 0 ? 1 : 0.82})
            perspective(1000px)
            rotateY(${diff < 0 ? 25 : diff > 0 ? -25 : 0}deg)
          `,
          opacity: diff === 0 ? 1 : 0.45,
          zIndex: diff === 0 ? 5 : 1,
        };
      })()
    : {}
}
>
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount:0.2}}
            transition={{
              duration: 1.2,
              delay: index * 0.12,
            }}
            style={{
              border: `2px solid ${card.color}`,
              borderBottom: `6px solid ${card.color}`,

  minHeight: isMobile ? "440px" : "420px",
  height: isMobile ? "440px" : "420px",
  width: isMobile ? "320px" : "190px",
              
              background: "#fff",
             minHeight: "420px",
  height: "420px",
  width: "190px",
              textAlign: "center",
              position: "relative",
              overflow: "visible",
             padding: "135px 16px 25px",
            }}
          >
            {/* TOP BADGE */}
          {isMobile ? (
  <motion.div
    key={`${index}-${index === activeCard}`}
    initial={
      index === activeCard
        ? { y: -100, opacity: 0 }
        : { y: -20, opacity: 0.5 }
    }
    animate={
      index === activeCard
        ? { y: 0, opacity: 1 }
        : { y: -20, opacity: 0.5 }
    }
    transition={{ duration: 0.5 }}
    style={{
      position: "absolute",
      top: "-12px",
      left: "28%",
      transform: "translateX(-50%)",
      width: "90px",
      height: "88px",
      background: card.color,
      clipPath: "polygon(0 0,100% 0,100% 70%,50% 100%,0 70%)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 5,
    }}
  >
    <div style={{
      width: "52px",
      height: "52px",
      borderRadius: "50%",
      border: "3px solid #fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontSize: "30px",
      fontWeight: 800,
      marginBottom: "2px",
    }}>
      {card.letter}
    </div>
  </motion.div>
) : (
  <motion.div
    initial={{ y: -100, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{
      duration: 1.0,
      delay: 0.3 + index * 0.12,
    }}
    style={{
      position: "absolute",
      top: "-12px",
      left: "28%",
      transform: "translateX(-50%)",
      width: "90px",
      height: "88px",
      background: card.color,
      clipPath: "polygon(0 0,100% 0,100% 70%,50% 100%,0 70%)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 5,
    }}
  >
    <div style={{
      width: "52px",
      height: "52px",
      borderRadius: "50%",
      border: "3px solid #fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontSize: "30px",
      fontWeight: 800,
      marginBottom: "2px",
    }}>
      {card.letter}
    </div>
  </motion.div>
)}

            {/* TITLE */}
            <h3
              style={{
                color: card.color,
                fontWeight: 800,
                fontSize: "20px",
                marginBottom: "10px",
                marginTop: "-50px",
                
              }}
            >
              {card.title}
            </h3>

            {/* POINTS */}
           {card.items.map((item, i) => (
  <div
    key={i}
    style={{
      marginBottom: "10px",
    }}
  >
    <div
      style={{
        color: card.color,
  fontWeight: 700,
  fontSize: "10px",
  lineHeight: "1.2",
  minHeight: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  

      }}
    >
      {item.title}
    </div>

    <div
      style={{
       color: "#0d0b0b",
  fontSize: "11px",
  lineHeight: "1.25",
  textAlign: "center",
  overflowWrap: "break-word",
  wordBreak: "break-word",
      }}
    >
      {item.desc}
    </div>
  </div>
))}
          </motion.div>
        </div>
      ))}
    </div>
      {/* ADD DOTS HERE */}
  {isMobile && (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      {benefitCards.map((_, index) => (
        <div
          key={index}
          onClick={() => setActiveCard(index)}
          style={{
            width: index === activeCard ? "20px" : "10px",
            height: "10px",
            borderRadius: "999px",
            background:
              index === activeCard
                ? "#f27c2d"
                : "rgba(0,0,0,0.25)",
            transition: "all 0.35s ease",
            cursor: "pointer",
          }}
        />
      ))}
    </div>
  )}
  </div>
</section>


{/* ================= PRODUCTS ================= */}
<section
id="modules"
  style={{
     padding: "30px 0 120px 0",
    background: "linear-gradient(180deg,#fdfcf9,#f4efe7)",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* background glow */}
  <div
    style={{
      position: "absolute",
      top: "-100px",
      right: "-80px",
      width: "420px",
      height: "420px",
      background:
        "radial-gradient(circle, rgba(242,124,45,0.14), transparent 68%)",
      filter: "blur(90px)",
      pointerEvents: "none",
    }}
  />
  <div
    style={{
      position: "absolute",
      bottom: "-120px",
      left: "-80px",
      width: "420px",
      height: "420px",
      background:
        "radial-gradient(circle, rgba(30,76,122,0.12), transparent 68%)",
      filter: "blur(100px)",
      pointerEvents: "none",
    }}
  />

  <div className="container" style={{ position: "relative", zIndex: 2 }}>
    {/* HEADER */}
    <div style={{ textAlign: "center", marginBottom: "90px" }}>
        <span
        style={{
          display: "inline-block",
          fontSize: "20px",
          fontWeight: 700,
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "#f27c2d",
          marginBottom: "8px",
          textAlign: "center",
          width: "100%",
          marginTop: "-40px"
        }}
      >
        Our Products
      </span>

      <h2
        style={{
          fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
          lineHeight: 1.8,
          color: "#07111D",
          marginBottom: 0,
          fontWeight: 700,
          maxWidth: "900px",
          marginInline: "auto",
          textAlign: "center",
        }}
      >
        Powerful Digital Products
      </h2>

      <p
        style={{
          color: "#666",
          maxWidth: "650px",
          margin: "10px auto 0",
          lineHeight: 1.8,
        }}
      >
        Powerful digital solutions engineered for modern manufacturing excellence
      </p>
    </div>

 {products.map((product, index) => {
  const currentImage =
    product.images[
      imageTick % product.images.length
    ];

  return (
    <motion.div
      id={product.id}
      key={product.id}
      {...fadeUp}
      style={{
        marginBottom: "90px",
        paddingBottom: "70px",
        scrollMarginTop: "100px",

        borderBottom:
          index !== products.length - 1
            ? "1px solid rgba(7,17,29,0.08)"
            : "none",
      }}
    >
          {/* TOP ROW */}
          <div className="row align-items-center g-5">
            {/* LEFT CONTENT */}
            <div className="col-lg-6">
              

              <h3
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 3vw, 2.3rem)",
                  color: "#07111D",
                  marginBottom: "10px",
                }}
              >
                {product.title}
              </h3>

              <p
                style={{
                  color: "#f27c2d",
                  fontWeight: 700,
                  letterSpacing: "0.8px",
                  marginBottom: "14px",
                }}
              >
                {product.tagline}
              </p>

              <p
                style={{
                  color: "#4b5563",
                  lineHeight: 1.9,
                  fontSize: "15.5px",
                  marginBottom: "22px",
                  maxWidth: "560px",
                }}
              >
                {product.description}
              </p>

              <div
                style={{
                  width: "70px",
                  height: "4px",
                  borderRadius: "10px",
                  background: "linear-gradient(90deg,#AE2C11,#DB9941)",
                }}
              />
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-6">
              <div
                style={{
                  position: "relative",
                  minHeight: "380px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* glow behind image */}
                <div
                  style={{
                    position: "absolute",
                    width: "280px",
                    height: "280px",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(242,124,45,0.18), transparent 70%)",
                    filter: "blur(55px)",
                  }}
                />

                <motion.img
                  key={currentImage}
                  src={currentImage}
                  alt={product.title}
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    width: "100%",
                    maxWidth: "480px",
                    height: "340px",
                    objectFit: "cover",
                    borderRadius: "20px",
                    boxShadow: "0 25px 55px rgba(7,17,29,0.16)",
                    border: "1px solid rgba(255,255,255,0.8)",
                    position: "relative",
                    zIndex: 2,
                    background: "#fff",
                  }}
                />
              </div>
            </div>
          </div>

          {/* BELOW: KEY MODULES / BOXES */}
          <div style={{ marginTop: "45px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                
              }}
            >
            </div>

            <div className="row g-4">
              {product.sections.map((section, i) => {
                const boxStyles = [
                  {
                    bg: "rgba(174,44,17,0.06)",
                    border: "#AE2C11",
                    iconBg: "linear-gradient(135deg,#AE2C11,#f27c2d)",
                    titleColor: "#AE2C11",
                  },
                  {
                    bg: "rgba(219,153,65,0.10)",
                    border: "#DB9941",
                    iconBg: "linear-gradient(135deg,#DB9941,#f4b860)",
                    titleColor: "#7a540a",
                  },
                  {
                    bg: "linear-gradient(135deg,#07111D,#1b2f45)",
                    border: "#07111D",
                    iconBg: "linear-gradient(135deg,#f27c2d,#DB9941)",
                    titleColor: "#fff",
                    dark: true,
                  },
                ];

                const box = boxStyles[i % boxStyles.length];

                return (
                  <div className="col-md-4" key={i}>
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.25 }}
                      style={{
                        height: "100%",
                        padding: "24px 20px",
                        borderRadius: "20px",
                        background: box.bg,
                        borderLeft: `4px solid ${box.border}`,
                        boxShadow: "0 14px 35px rgba(7,17,29,0.08)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "14px",
                        }}
                      >
                        <div
                          style={{
                            width: "38px",
                            height: "38px",
                            borderRadius: "10px",
                            background: box.iconBg,
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 800,
                            fontSize: "14px",
                            marginRight: "12px",
                            boxShadow: "0 10px 25px rgba(242,124,45,0.20)",
                          }}
                        >
                          {i + 1}
                        </div>

                        <h6
                          style={{
                            margin: 0,
                            fontWeight: 800,
                            color: box.titleColor,
                          }}
                        >
                          {section.heading}
                        </h6>
                      </div>

                      <ul style={{ paddingLeft: "18px", margin: 0 }}>
                        {section.items.map((item, j) => (
                          <li
                            key={j}
                            style={{
                              marginBottom: "8px",
                              color: box.dark ? "rgba(255,255,255,0.84)" : "#555",
                              lineHeight: 1.6,
                              fontSize: "14px",
                            }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      );
    })}
  </div>
</section>

      {/* ================= CTA ================= */}
     <section
     id="request-demo"
      className="cta-section"
  style={{
    
    textAlign: "center",
   
    color: "#fff",
    position: "relative",
    overflow: "hidden",
    
  

    width: "90%",
    maxWidth: "1500px",
    margin: "40px auto",

    padding: "60px 40px",
    borderRadius: "28px",

    background: `
      radial-gradient(circle at 15% 50%, rgba(34,120,255,0.18) 0%, transparent 35%),
      radial-gradient(circle at 85% 30%, rgba(219,153,65,0.20) 0%, transparent 35%),
      linear-gradient(135deg, #07111D 0%, #0B1C2D 50%, #07111D 100%)
    `,

    border: "1px solid rgba(255,255,255,0.08)",

    boxShadow: `
      0 30px 80px rgba(0,0,0,0.35),
      inset 0 1px 0 rgba(255,255,255,0.08)
      `,
  }}
>
  <motion.div {...fadeUp}>
    <div className="container">
      <h2
        style={{
          fontWeight: 800,
          fontSize: "2.1rem",
          lineHeight: 1.25,
          marginBottom: "18px",
          color: "#ffffff",
        }}
      >
        Build Your Digital Factory with ThetaVega
      </h2>

      <p
        style={{
          opacity: 0.92,
          maxWidth: "620px",
          margin: "0 auto",
          fontSize: "1.05rem",
          lineHeight: 1.7,
        }}
      >
        From machine to enterprise — complete transformation
      </p>

      <div
        className="cta-buttons mt-4 d-flex justify-content-center gap-3 flex-wrap"
        style={{
          marginTop: "28px",
            whiteSpace: "nowrap"

        }}
      >
        <button
          className="btn"
            onClick={() => navigate("/contact")}
          style={{
            background: "linear-gradient(135deg, #f27c2d 0%, #DB9941 100%)",
            border: "none",
            padding: "14px 30px",
            borderRadius: "999px",
            color: "#fff",
            fontWeight: 800,
            fontSize: "1rem",
            boxShadow: "0 14px 34px rgba(242,124,45,0.45)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 18px 42px rgba(242,124,45,0.65)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 14px 34px rgba(242,124,45,0.45)";
          }}
        >
          Request Demo
        </button>

        <button
          className="btn"
            onClick={() => navigate("/contact")}
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.65)",
            padding: "14px 30px",
            borderRadius: "999px",
            color: "#fff",
            fontWeight: 800,
            fontSize: "1rem",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.1)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Talk to Expert
        </button>

        <a
  href="/brochure/ThetaVega Profile.pdf"
  download
          style={{
            background: "#ffffff",
            border: "1px solid #ffffff",
            padding: "14px 30px",
            borderRadius: "999px",
            color: "#07111D",
            fontWeight: 800,
            fontSize: "1rem",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 14px 34px rgba(255,255,255,0.18)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Download Brochure
       </a>
      </div>
    </div>
  </motion.div>
</section>

    </div>
  );
};

export default ProductPage;