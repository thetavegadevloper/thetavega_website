import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import {
  FaCogs,
  FaIndustry,
  FaNetworkWired,
  FaMicrochip,
} from "react-icons/fa";
import techStackMobile from "../assets/images/tech-stack-mobile.svg";
import programmingImg from "../assets/images/1theta.png";
import automationImg from "../assets/images/2 theta.png";
import analyticsImg from "../assets/images/3theta.png";
import iiotImg from "../assets/images/4theta .png";
import cloudImg from "../assets/images/5 theta.png";


import {
  HexGrid,
  Layout,
  Hexagon,
  Text
} from "react-hexgrid";
import {  FaProjectDiagram, FaChartLine } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import autoAnim from "../assets/json/Automotive  EV.json";
import mesAnim from "../assets/json/Digital Manufacturing.json";
import iotAnim from "../assets/json/Industrial IoT.json";
import infraAnim from "../assets/json/Smart Infrastructure.json";


import machineAnim from "../assets/json/Machine Building.json";
import panelAnim from "../assets/json/Panel  Control Systems.json";

import traceAnim from "../assets/json/Traceability  Quality Systems.json";
import visionAnim from "../assets/json/11. Core Products.json";

import { useLocation } from "react-router-dom";




const Solutions = () => {
  const navigate = useNavigate();


  
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(
        location.hash.replace("#", "")
      );

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 200);
      }
    }
  }, [location]);

  const sectionStyle = {
    padding: "60px 0",
  };

  
const Hex = ({ children, borderColor }) => (
  <div
    style={{
      width: "120px",
      height: "138px",
      clipPath:
        "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
      background: "#fff",
      border: `3px solid ${borderColor}`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      fontWeight: 700,
      fontSize: "18px",
      color: borderColor,
      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    }}
  >
    {children}
  </div>
);
   

const solutions = [
  {
    id: "factory-automation",
    title: "Factory Automation & Control Systems",
    icon: autoAnim,
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
    outcome: ["↑ Productivity up to 30%", "↓ Downtime", "↑ Consistency"],
  },
  {
      id: "machine-building",
    title: "Machine Building (SPM & Assembly Lines)",
    icon: machineAnim,
    problem:
      "Standard machines fail to meet custom production requirements.",
    approach:
      "Custom Special Purpose Machines tailored to production.",
    architecture: [
      "CAD + Simulation",
      "PLC + Servo + Vision",
      "Modular stations",
    ],
    useCases: ["Leak testing", "Laser marking", "Assembly systems"],
    outcome: ["↑ Precision", "↑ Throughput", "↓ Manual dependency"],
  },
  {
     id: "panel-control",
    title: "Panel Building & Electrical Systems",
    icon: panelAnim,
    problem: "Poor panel design leads to failures and safety risks.",
    approach:
      "UL/IEC-compliant panels engineered for reliability.",
    architecture: [
      "EPLAN design",
      "IP55/IP65 protection",
      "Segregated wiring",
    ],
    useCases: ["PLC panels", "MCC panels", "Smart distribution"],
    outcome: ["↑ Reliability", "↑ Safety", "↓ Maintenance"],
  },
  {
      id: "mes",
    title: "MES & Digital Manufacturing (OperateX)",
    icon: mesAnim,
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
    outcome: ["↑ OEE 15–25%", "↑ Decision speed"],
  },
  {
    id: "traceability",
    title: "Traceability & Quality Systems",
    icon: traceAnim,
    problem: "Lack of traceability leads to quality failures.",
    approach:
      "End-to-end traceability systems across lifecycle.",
    architecture: [
      "Barcode / RFID",
      "Central database",
      "MES integration",
    ],
    useCases: ["Part tracking", "Poka-yoke", "Genealogy systems"],
    outcome: ["100% traceability", "↑ Quality", "↓ Rework"],
  },
  {
      id: "vision-inspection",
    title: "Vision Inspection Systems",
    icon: visionAnim,
    problem:
      "Manual inspection causes inconsistency and errors.",
    approach:
      "AI-based automated inspection systems.",
    architecture: [
      "Cognex / Keyence",
      "Edge AI processing",
      "PLC integration",
    ],
    useCases: ["OCR/OCV", "Defect detection", "Inspection systems"],
    outcome: ["↑ Accuracy >99%", "↑ Speed", "↓ Human dependency"],
  },
  {
    id: "iot",
    title: "IIoT & Data Integration",
    icon: iotAnim,
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
    outcome: ["↑ Visibility", "↑ Integration"],
  },
  {
     id: "smart-infrastructure",
    title: "Utility & Smart Infrastructure",
    icon: infraAnim,
    problem: "Utilities are poorly monitored causing wastage.",
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
    outcome: ["↓ Cost 10–25%", "↑ Sustainability"],
  },
];
const items = [
    { title: "Automation Systems", anim: autoAnim },
    { title: "MES & Digital Factory", anim: mesAnim },
    { title: "IIoT Integration", anim: iotAnim },
    { title: "Smart Infrastructure", anim: infraAnim },
  ];
const techStyles = {
  programming: {
    width: "260px",
    marginTop: "20px",
  },

  automation: {
    width: "300px",
    marginTop: "20px",
  },

  analytics: {
    width: "240px",
    marginTop: "80px",
  },

  iiot: {
    width: "240px",
    marginTop: "25px",
  },

  cloud: {
    width: "230px",
    marginTop: "25px",
  },
};
  

  


  

  const [activeIndex, setActiveIndex] = useState(0);

  // 🔁 Auto change every 2 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  

  return (
    <div>

      {/* ================= STYLE ================= */}
      <style>{`

      /* HERO */
      .solution-hero {
        padding: 125px 0;
        background: linear-gradient(135deg,#f8fafc,#eef2f6);
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
        background: radial-gradient(circle, rgba(174,44,17,0.15), transparent);
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

      .solution-section-premium {
  position: relative;
  overflow: hidden;

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
     rgba(242,124,45,0.07)
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

.floating-square {
  position: absolute;

  border: 1px solid rgba(242,124,45,0.12);

  background: rgba(255,255,255,0.18);

  backdrop-filter: blur(10px);

  border-radius: 12px;

  animation: floatSquare 18s ease-in-out infinite;
}
  @keyframes floatSquare {
  0% {
    transform: translate(0px, 0px) rotate(0deg);
  }

  25% {
    transform: translate(20px, -30px) rotate(8deg);
  }

  50% {
    transform: translate(-15px, -50px) rotate(-6deg);
  }

  75% {
    transform: translate(-30px, -20px) rotate(10deg);
  }

  100% {
    transform: translate(0px, 0px) rotate(0deg);
  }
}

.floating-blob {
  position: absolute;

  border-radius: 50%;

  background: rgba(242,124,45,0.08);

  filter: blur(25px);

  animation: blobMove 20s ease-in-out infinite;
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

  transition: all 0.4s ease;
}

.solution-modern-card:hover {
  transform: translateY(-10px);
  box-shadow:
    0 25px 55px rgba(7,17,29,0.15);
}

        .solution-modern-card.alt {
           background: #f6f1e8;
  border-left: 4px solid #DB9941;
  border-radius: 26px;
        }

        .solution-modern-card.highlight {
          background: linear-gradient(135deg, #07111D 0%, #1b2f45 100%);
          color: #fff;

        }
.solution-modern-card.highlight .card-title-row h6 {
  color: #ffffff;
  text-shadow:
    0 2px 8px rgba(255,255,255,0.15),
    0 4px 18px rgba(242,124,45,0.35);
}
        
      /* CTA BUTTONS */
      .hero-btn {
        padding: 12px 22px;
        border-radius: 999px;
        font-weight: 600;
        border: none;
        transition: 0.3s;
      }

      .btn-primary {
        background: linear-gradient(135deg,var(--tv-red),var(--tv-gold));
        color: #fff;
      }

      .btn-secondary {
        background: #fff;
        border: 1px solid #ddd;
      }

      .hero-btn:hover {
        transform: translateY(-3px);
      }

      /* RIGHT VISUAL */
      .hero-visual {
        background: #fff;
        border-radius: 22px;
        padding: 20px;
        box-shadow: 0 25px 60px rgba(0,0,0,0.08);
      }

      .mini-card {
        background: #f6f8fb;
        padding: 12px;
        border-radius: 12px;
        margin-bottom: 10px;
        font-size: 0.85rem;
      }

      /* INTRO */
      .intro {
        margin-top: -120px;
        position: relative;
        z-index: 2;
      }

      .intro-card {
        background: #fff;
        padding: 30px;
        border-radius: 20px;
        text-align: center;
        box-shadow: 0 20px 50px rgba(0,0,0,0.08);
        max-width: 700px;
        margin: auto;
      }

      /* CARDS */
      .solution-card {
        background: #fff;
        border-radius: 18px;
        padding: 22px;
        box-shadow: 0 12px 30px rgba(0,0,0,0.05);
        transition: 0.3s;
      }

      .solution-card:hover {
        transform: translateY(-6px);
      }

      
     

      /* MOBILE */
     @media(max-width:768px){
      section {
    padding-top: 80px !important;
    padding-bottom: 40px !important;
  }
  .solution-hero {
    text-align: center;
  }

  .solution-hero h1 {
    font-size: 1.9rem;
  }

  .hero-visual {
    margin-top: 30px;
  }

  /* HERO ROTATING CIRCLE MOBILE ONLY */
  .hero-orb-wrapper {
    height:396px !important;
    margin-top: 0px;
  }

  .hero-orb-outer {
    width: 320px !important;
    height: 320px !important;
  }

  .hero-ring-big {
    width: 380px !important;
    height: 380px !important;
  }

  .hero-ring-small {
    width: 280px !important;
    height: 280px !important;
  }

  .hero-center-glow {
    width: 220px !important;
    height: 220px !important;
  }

  .hero-lottie {
    width: 250px !important;
    height: 250px !important;
  }

  .hero-label {
    top: 40px !important;
    right: 30% !important;
    transform: translateX(50%) !important;
    font-size: 12px !important;
    padding: 8px 14px !important;
  }

  .hero-status {
    min-width: 200px !important;
    bottom: 40px !important;
    padding: 11px !important;
  }

  
} 
  .desktop-tech-stack {
  display: block;
}

.mobile-tech-stack {
  display: none;
}

@media (max-width: 768px) {
  .desktop-tech-stack {
    display: none !important;
  }

  .mobile-tech-stack {
  display: block !important;
    margin: 15px auto;
    width: 100%;
    max-width: 390px;
    padding: 0;
  }
    .glow-card {
  border-radius: 18px;
  overflow: hidden;
  box-shadow:
    0 20px 50px rgba(242,124,45,0.18);
  animation: floatGlow 4s ease-in-out infinite;
}

.glow-card img {
  width: 100%;
  display: block;
}

@keyframes floatGlow {
  0% {
    transform: translateY(0px) scale(1);
  }
  50% {
    transform: translateY(-8px) scale(1.02);
  }
  100% {
    transform: translateY(0px) scale(1);
  }
}
}
  

.ps-card.problem h6 {
  color: #c94a1e;
  font-size: 1.20rem;
  font-weight: 700;
}
@media (max-width: 768px) {
  .floating-square,
  .floating-blob {
    display: none !important;
  }
}
  @media (max-width: 768px) {
  .ps-card,
  .ps-card.problem,
  .ps-card.solution {
    padding: 16px !important;
    border-radius: 16px !important;
    min-height: auto !important;
  }

  .ps-card h6 {
    font-size: 20px !important;
    margin-bottom: 6px !important;
  }

  .ps-card p {
    font-size: 16px !important;
    line-height: 1.5 !important;
  }
}
@media (max-width: 768px) {
  .solution-modern-card,
  .solution-modern-card.alt,
  .solution-modern-card.highlight {
    padding: 18px !important;
    border-radius: 20px !important;
  }

  .solution-modern-card ul {
    padding-left: 18px !important;
    margin-bottom: 0 !important;
  }

  .solution-modern-card li {
    font-size: 16px !important;
    margin-bottom: 4px !important;
    line-height: 1.4;
  }

  .card-title-row {
    margin-bottom: 10px !important;
    gap: 8px !important;
  }

  .card-title-row h6 {
    font-size: 20px !important;
  }

  .card-title-row svg {
    font-size: 14px !important;
  }
}

.ps-card.solution h6 {
   color: #c94a1e;
  font-size: 1.20rem;
  font-weight: 700;
}

.card-title-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
}

.card-title-row svg {
  font-size: 18px;
  color: #7a540a;
}

.solution-modern-card.alt .card-title-row svg {
  color: #7a540a;
}

.solution-modern-card.highlight .card-title-row svg {
  color: #f27c2d;
}

.card-title-row h6 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: #7a540a
}

/* Hover effect */
.ps-card:hover {
  transform: translateY(-4px);
}

.intro-section {
  margin-top: -80px; /* pulls it into hero */
  padding-bottom: 40px;
  position: relative;
  z-index: 2;
}

.intro-card {
  background: #fff;
  padding: 35px;
  border-radius: 18px;
  box-shadow: 0 25px 60px rgba(7,17,29,0.12);
  max-width: 750px;
  margin: auto;
}

.intro-card p {
  margin: 0;
  color: var(--tv-slate);
  font-size: 1.05rem;
}
  section {
  margin-bottom: 40px;
}

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

/* ===== PROBLEM & SOLUTION CARD SHAPE UPGRADE ===== */

.ps-card {
  border-radius: 20px;
  padding: 22px 20px;
  height: 100%;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

/* LEFT CURVE EFFECT (like architecture card) */
.ps-card.problem {
  background: #f8f2ef;
  border-left: 4px solid #c94a1e;
  
  padding: 30px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.04);
  border-radius: 20px 20px 20px 40px; /* 👈 key change */
}

.ps-card.solution {
  background: #f6f1e8;
  border-left: 6px solid #DB9941;
  border-radius: 20px 40px 20px 20px;
  padding: 30px;
}

/* HEADINGS */
.ps-card h6 {
color: #c94a1e;
  font-weight: 700;
  margin-bottom: 10px;
}

/* TEXT */
.ps-card p {
  margin: 0;
  line-height: 1.7;
  font-size: 0.95rem;
}

/* HOVER */
.ps-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(7,17,29,0.12);
}
  /* ===== HERO VISUAL FLOAT ===== */
.hero-visual {
  background: #fff;
  border-radius: 22px;
  padding: 22px;
  box-shadow: 0 25px 60px rgba(0,0,0,0.08);
  animation: floatCard 6s ease-in-out infinite;
}

/* smooth floating container */
@keyframes floatCard {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}


/* ===== MINI CARD BASE ===== */
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
  animation: fadeUp 0.6s ease forwards;
}

/* stagger animation */
.mini-card:nth-child(1) { animation-delay: 0.2s; }
.mini-card:nth-child(2) { animation-delay: 0.4s; }
.mini-card:nth-child(3) { animation-delay: 0.6s; }
.mini-card:nth-child(4) { animation-delay: 0.8s; }

/* hover interaction */
.mini-card:hover {
  transform: translateX(6px) scale(1.03);
  background: #ffffff;
  box-shadow: 0 12px 30px rgba(7,17,29,0.12);
  color: #f27c2d;
}


/* ===== ENTRY ANIMATION ===== */
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

.section-tag {
display: inline-block; 
font-size: 20px; 
font-weight: 700; 
letter-spacing: 2px; 
text-transform: uppercase; 
color: #f27c2d; 
margin-bottom: 8px; 
text-align: center; 
width: 100%;
 margin-top: 30px;     /* ⬆️ increase space ABOVE */
  margin-bottom: 2px;
  

 


      `}</style>

      {/* ================= HERO ================= */}
<section className="hero-section"
  style={{
    minHeight: "90vh",
    padding: "120px 0 90px",
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

  {/* PREMIUM GRID */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      backgroundSize: "72px 72px",
      maskImage:
        "linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.2))",
      opacity: 0.35,
      pointerEvents: "none",
    }}
  />

  {/* MOVING LIGHT */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.08), transparent 58%)",
      animation: "tvLightSweep 9s linear infinite",
      pointerEvents: "none",
    }}
  />

  <div className="container" style={{ position: "relative", zIndex: 2 }}>
    <div className="row align-items-center" style={{ rowGap: "48px" }}>
      {/* LEFT CONTENT */}
      <div className="col-lg-6">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <div
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
            style={{
              fontSize: "clamp(1.9rem, 3.2vw, 3.4rem)",
              fontWeight: 650,
              lineHeight: 1.16,
              letterSpacing: "1px",
              color: "#ffffff",
              marginBottom: "18px",
              maxWidth: "760px",
              textShadow: "0 10px 28px rgba(0,0,0,0.65)",
            }}
          >
            Engineering Solutions for{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #f27c2d 0%, #ffb347 48%, #ffe1a8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Smart Manufacturing
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.78)",
              maxWidth: "650px",
              marginBottom: 0,
              fontWeight: 400,
            }}
          >
            We design intelligent systems that connect machines, data, people,
            and operations into one high-performance digital factory ecosystem.
          </p>
        </motion.div>

        {/* PREMIUM TOPIC CARDS */}
       

        {/* GLASS DESCRIPTION PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.75, delay: 0.25, ease: "easeOut" }}
          style={{
            marginTop: "34px",
            padding: "24px 26px",
            borderRadius: "22px",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.075), rgba(255,255,255,0.035))",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "rgba(255,255,255,0.76)",
            fontSize: "0.98rem",
            lineHeight: 1.8,
            boxShadow:
              "0 20px 50px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.08)",
            maxWidth: "650px",
          }}
        >
          From factory automation to digital manufacturing platforms, our
          solutions are built on scalable architectures, global standards, and
          real-world execution expertise. We engineer complete ecosystems for
          productivity, traceability, and intelligent decision-making.
        </motion.div>
      </div>

      {/* RIGHT VISUAL */}
      <div className="col-lg-6">
        <motion.div className="hero-orb-wrapper"
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          style={{
            height: "560px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* OUTER GLASS ORB */}
          <div    className="hero-orb-outer"
            style={{
              position: "absolute",
              width: "440px",
              height: "440px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.09), rgba(255,255,255,0.025))",
              border: "1px solid rgba(255,255,255,0.13)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              boxShadow:
                "0 35px 90px rgba(0,0,0,0.42), inset 0 1px 0 rgba(255,255,255,0.12)",
            }}
          />

          {/* ROTATING RINGS */}
          <div  className="hero-ring-big"
            style={{
              position: "absolute",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              borderTop: "8px solid rgba(242,124,45,0.6)",
              borderRight: "8px solid rgba(255,255,255,0.08)",
              borderBottom: "8px solid rgba(255,255,255,0.08)",
              borderLeft: "8px solid rgba(0,153,255,0.24)",
              animation: "tvRotate 20s linear infinite",
            }}
          />

          <div className="hero-ring-small"
            style={{
              position: "absolute",
              width: "350px",
              height: "350px",
              borderRadius: "50%",
              borderTop: "3px solid rgba(0,153,255,0.35)",
              borderRight: "3px solid rgba(255,255,255,0.06)",
              borderBottom: "3px solid rgba(242,124,45,0.45)",
              borderLeft: "3px solid rgba(255,255,255,0.06)",
              animation: "tvRotateReverse 16s linear infinite",
            }}
          />

          {/* CENTER GLOW */}
          <div   className="hero-center-glow"
            style={{
              position: "absolute",
              width: "260px",
              height: "260px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(242,124,45,0.28), rgba(100, 186, 243, 0.12), transparent 72%)",
              filter: "blur(34px)",
            }}
          />

          {/* FLOATING LABEL */}
          <motion.div  className="hero-label"
            key={`label-${activeIndex}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            style={{
              position: "absolute",
              top: "38px",
              right: "42px",
              padding: "12px 16px",
              borderRadius: "999px",
              background: "rgba(7,17,29,0.56)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              color: "rgba(255,255,255,0.86)",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "1.3px",
              textTransform: "uppercase",
              boxShadow: "0 12px 34px rgba(0,0,0,0.28)",
            }}
          >
            {items[activeIndex].title}
          </motion.div>

          {/* LOTTIE ICON */}
          <AnimatePresence mode="wait">
            <motion.div  className="hero-lottie"
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.76, rotate: -8, y: 22 }}
              animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.82, rotate: 8, y: -18 }}
              transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: "320px",
                height: "320px",
                zIndex: 3,
                position: "relative",
                filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.35))",
              }}
            >
              <Lottie animationData={items[activeIndex].anim} loop />
            </motion.div>
          </AnimatePresence>

          {/* BOTTOM STATUS CARD */}
          <motion.div  className="hero-status"
            key={`status-${activeIndex}`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            style={{
              position: "absolute",
              bottom: "38px",
              left: "50%",
              transform: "translateX(-50%)",
              minWidth: "300px",
              padding: "16px 18px",
              borderRadius: "18px",
              background:
                "linear-gradient(135deg, rgba(7,17,29,0.72), rgba(255,255,255,0.06))",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              boxShadow: "0 18px 45px rgba(0,0,0,0.32)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                color: "#DB9941",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "1.8px",
                textTransform: "uppercase",
                marginBottom: "6px",
              }}
            >
              Active Capability
            </div>

            <div
              style={{
                color: "#ffffff",
                fontSize: "0.96rem",
                fontWeight: 700,
                lineHeight: 1.35,
              }}
            >
              {items[activeIndex].title}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </div>

  <style>{`
    @keyframes tvRotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes tvRotateReverse {
      from { transform: rotate(360deg); }
      to { transform: rotate(0deg); }
    }

    @keyframes tvLightSweep {
      0% { transform: translateX(-120%); }
      100% { transform: translateX(120%); }
    }

    @media (max-width: 991px) {
      section {
        min-height: auto !important;
      }
    }
  `}</style>
</section>
{/* ================= tech stack ================= */}

<section
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

  <span
    style={{
      fontSize: "14px",
      fontWeight: 700,
      color: "#f27c2d",
      letterSpacing: "2px",
      textTransform: "uppercase",
      display: "block",
      marginBottom: "8px",
      textAlign: "center",
      margingtop: "7px"
    }}
  >
    Our Expertise
  </span>
<h2
  style={{
    fontSize: "17px",
    fontWeight: 700,
        textAlign: "center",
    marginBottom: "30px",
    letterSpacing: "0.5px",
     color: "#090808",
          fontWeight: 700,
          letterSpacing: "2px",
          textTransform: "uppercase",
  }}
>
  End-to-End Manufacturing Technology Stack
</h2>



  {/* TOP TECHNOLOGY IMAGES */}
  <div className="desktop-tech-stack">
  <div
style={{
    display: "flex",
justifyContent: "center",
alignItems: "flex-start",
gap: "5px",
flexWrap: "nowrap",
  }}
>
  {/* Programming */}
  <motion.img
    src={programmingImg}
    alt=""
    initial={{ opacity: 0, x: -120 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    style={{
      width: "310px",
    objectFit: "contain",
    marginTop: "70px",
    marginRight: "5px",
    }}
  />

  {/* OT */}
  <motion.img
    src={automationImg}
    alt=""
    initial={{ opacity: 0, y: -100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    viewport={{ once: true }}
    style={{
     width: "315px",
    objectFit: "contain",
    marginTop: "5px",
    marginRight: "5px",
    }}
  />

  {/* Data */}
  <motion.img
    src={analyticsImg}
    alt=""
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 1.2 }}
    viewport={{ once: true }}
    style={{
      width: "190px",
      objectFit: "contain",
    }}
  />

  {/* IIOT */}
  <motion.img
    src={iiotImg}
    alt=""
    initial={{ opacity: 0, scale: 0.7 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 1.8 }}
    viewport={{ once: true }}
    style={{
      width: "190px",
      objectFit: "contain",
    }}
  />

  {/* Cloud */}
  <motion.img
    src={cloudImg}
    alt=""
    initial={{ opacity: 0, x: 120 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 2.4 }}
    viewport={{ once: true }}
    style={{
      width: "200px",
      objectFit: "contain",
    }}
  />
  </div>


<motion.div
    initial={{
    opacity: 0,
    y: 80
  }}
  whileInView={{
    opacity: 1,
    y: 0
  }}
  viewport={{ once: true }}
  transition={{
    duration: 0.8,
    delay: 2.5
  }}
  style={{
    marginTop: "-40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    textAlign: "center",
    
  }}
>
  <div style={{ flex: 1 }}>
    <div
      style={{
        width: "5px",
        height: "50px",
        background: "#fb6502",
        margin: "0 auto 2px",
        marginRight: "2px"
        
      }}
    />
    <h5 style={{  color: "#fa6704",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "1.3",
    margin: 0,
    marginRight: "-300px"
    
    }}>
      Programming Languages
      <br />
      & Frameworks
    </h5>
  </div>

  <div style={{ flex: 1 }}>
    <div
      style={{
        width: "5px",
        height: "50px",
        background: "#f37928",
        margin: "0 auto -2px",
        marginRight: "-9px",
         marginTop:"-50px",
      }}
    />
    <h5 style={{ color: "#fa6704",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "1.3",
    margin: 0, 
    marginRight: "-315px"}}>
      OT, Industrial &
      <br />
      Automation Technologies
    </h5>
  </div>

  <div style={{ flex: 1 }}>
    <div
      style={{
        width: "5px",
        height: "50px",
        background: "#f27c2d",
        margin: "0 auto 2px",
        marginTop:"35px",
         marginRight: "-9px"

      }}
    />
    <h5 style={{ color: "#fa6704",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "1.3",
    margin: 0, 
    marginRight: "-300px"}}>
      Data, Databases
      <br />
      & Analytics
    </h5>
  </div>

  <div style={{ flex: 1 }}>
    <div
      style={{
        width: "5px",
        height: "40px",
        background: "#f27c2d",
        margin: "0 auto 15px",
         marginTop:"43px",
         marginRight: "100px"
      }}
    />
    <h5 style={{ color: "#fa6704",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "1.3",
    margin: 0,
    marginTop: "-12px",
    marginRight: "-100px"}}>
      IIoT, Edge
      <br />
      & Messaging
    </h5>
  </div>

  <div style={{ flex: 1 }}>
    <div
      style={{
        width: "5px",
        height: "30px",
        background: "#f27c2d",
        margin: "0 auto 15px",
        marginTop:"-7px",
         marginRight: "242px"
      }}
    />
    <h5 style={{ color: "#fa6704",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "1.3",
    margin: 0,
    margingtop: "100px",
    marginRight: "170px"}}>
      Cloud, DevOps
      <br />
      & Deployment
    </h5>
  </div>
</motion.div>
</div>
<motion.div
  className="mobile-tech-stack glow-card"
  initial={{ opacity: 0, y: 70 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.9 }}
>
  <motion.img
    src={techStackMobile}
    alt="Technology Stack"
    animate={{
      y: [0, -8, 0],
      scale: [1, 1.02, 1]
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    style={{
      width: "100%",
      display: "block"
    }}
  />
</motion.div>

</section>








       <div className="text-center"
        style={{   marginTop: "0px", marginBottom: "0px", color: "#f27c2d" }} >
    <span className="section-tag">
      Smart Manufacturing Solutions
    </span>
  </div>

    

      {/* ================= SOLUTIONS ================= */}
      {solutions.map((sol, index) => (
        
        <section
        id={sol.id}
  key={index}
  className="solution-section-premium"
  style={sectionStyle}
>
    {/* Floating Elements */}

  <div
    className="floating-square"
    style={{
      width: "70px",
      height: "70px",
      top: "60px",
      right: "80px",
    }}
  />

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


<div
    className="floating-square"
    style={{
      width: "40px",
      height: "40px",
      bottom: "80px",
      left: "60px",
      animationDelay: "8s",
    }}
  />
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
  <div
  className="floating-blob"
  style={{
    width: "180px",
    height: "180px",
    top: "10%",
    right: "5%",
  }}
/>

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
          
          <div className="container fade-in">
       

            

          <div
  className="section-header"
  style={{
    display: "flex",
    alignItems: "center",
    gap: "14px",
    marginBottom: "10px",
  }}
>
  {/* 🔥 LOTTIE ICON */}
  <div
    style={{
      width: "52px",
      height: "52px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Lottie
      animationData={sol.icon} loop 
      loop={true}   // 👈 PLAY ONLY ONCE
      style={{ width: "100%", height: "100%" }}
    />
  </div>

  {/* TEXT */}
  <div>
    <h2
      style={{
        margin: 0,
        fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
        fontWeight: 650,
        letterSpacing: "0.8px",
      }}
    >
      {sol.title}
    </h2>

    <div className="section-line"></div>
  </div>
</div>

            <div className="row mt-4 g-4">

  {/* Problem */}
 <motion.div 
 className="col-md-6"
   initial={{ opacity: 0, x: -80}}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
>
    <div className="ps-card problem">
      <h6>⚠ Problem</h6>
      <p>{sol.problem}</p>
    </div>
    </motion.div>
   
  {/* Solution */}
  <motion.div
   className="col-md-6"
   initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{
    duration: 0.7,
    ease: "easeOut",
  }}
  >
    <div className="ps-card solution">
      <h6>✔ Solution</h6>
      <p>{sol.approach}</p>
    </div>
  </motion.div>

</div>
<div className="row mt-5 g-4">

  {/* Architecture */}
  <motion.div
    className="col-md-4"
    initial={{ opacity: 0, y: 70 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{
      duration: 0.7,
      delay: 0,
    }}
  >
    <div className="solution-modern-card">
      <div className="card-title-row">
        <FaCogs />
        <h6>Architecture</h6>
      </div>

      <ul>
        {sol.architecture.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  </motion.div>

  {/* Use Cases */}
  <motion.div
    className="col-md-4"
    initial={{ opacity: 0, y: 70 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{
      duration: 0.7,
      delay: 0.15,
    }}
  >
    <div className="solution-modern-card alt">
      <div className="card-title-row">
        <FaProjectDiagram />
        <h6>Use Cases</h6>
      </div>

      <ul>
        {sol.useCases.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  </motion.div>

  {/* Outcome */}
  <motion.div
    className="col-md-4"
    initial={{ opacity: 0, y: 70 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{
      duration: 0.7,
      delay: 0.3,
    }}
  >
    <div className="solution-modern-card highlight">
      <div className="card-title-row">
        <FaChartLine />
        <h6>Outcome</h6>
      </div>

      <ul>
        {sol.outcome.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  </motion.div>

</div>
</div>   
           

            

         
        </section>
      ))}

      {/* ================= CTA ================= */}
      <section style={{
        padding: "100px 0",
        background: "linear-gradient(180deg, #07111D 0%, #13263B 100%)",
        color: "#fff",
        textAlign: "center",
        position: "relative",
    overflow: "hidden",

    width: "90%",
    maxWidth: "1450px",
    margin: "40px auto",

 
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
      }}>


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
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
        <div className="container fade-in">
          <h2>Let’s Engineer Your Next Transformation</h2>
          <p style={{ maxWidth: "600px", margin: "20px auto" }}>
            Build or upgrade your factory with scalable solutions.
          </p>

          <button 
          onClick={() => navigate("/contact")}
          style={{
            background: "linear-gradient(135deg,var(--tv-red),var(--tv-gold))",
            border: "none",
            padding: "14px 28px",
            borderRadius: "999px",
            color: "#fff",
            fontWeight: 700,
            cursor: "pointer",
       
        transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow =
          "0 15px 35px var(--tv-red)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 10px 25px var(--tv-red)";
      }}>
            Talk to Our Engineers
          </button>
        </div>
        </motion.div>
      </section>
      


    </div>
  );
};

export default Solutions;