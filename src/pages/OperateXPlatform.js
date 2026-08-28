import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";

import {
  FiActivity,
  FiAlertTriangle,
  FiBarChart2,
  FiBell,
  FiBookOpen,
  FiBox,
  FiCheckCircle,
  FiChevronRight,
  FiClipboard,
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiEye,
  FiGitBranch,
  FiGrid,
  FiLayers,
  FiLink2,
  FiMaximize2,
  FiMonitor,
  FiPackage,
  FiRefreshCw,
  FiServer,
  FiSettings,
  FiShield,
  FiSliders,
  FiTool,
  FiTrendingUp,
  FiUsers,
  FiZap,
  FiArrowRight,
} from "react-icons/fi";
import digitalManufacturingAnim from "../assets/json/Digital Manufacturing.json";
import factoryAutomationAnim from "../assets/json/Factory Automation.json";
import traceabilityAnim from "../assets/json/Traceability  Quality Systems.json";
import industrialIotAnim from "../assets/json/Industrial IoT.json";
import smartInfrastructureAnim from "../assets/json/Smart Infrastructure.json";
import machineBuildingAnim from "../assets/json/Machine Building.json";


/* ============================================================
   ANIMATIONS
============================================================ */

const fadeUp = {
  initial: {
    opacity: 0,
    y: 35,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
    amount: 0.15,
  },

  transition: {
    duration: 0.65,
    ease: "easeOut",
  },
};

const platformHighlights = [
  {
    number: "01",
    icon: <FiLink2 />,
    title: "Connect",
    text:
      "Bring machines, systems and people onto one unified manufacturing platform.",
    chips: ["Machines", "Systems", "People"],
    className: "connect-card",
  },
  {
    number: "02",
    icon: <FiSliders />,
    title: "Configure",
    text:
      "Adapt workflows, business rules, routing and user logic according to your plant.",
    chips: ["Workflows", "Rules", "Routing"],
    className: "configure-card",
  },
  {
    number: "03",
    icon: <FiGrid />,
    title: "Integrate",
    text:
      "Connect shop-floor OT systems with enterprise IT applications for seamless data flow.",
    chips: ["OT", "IT", "Data Flow"],
    className: "integrate-card",
  },
  {
    number: "04",
    icon: <FiMaximize2 />,
    title: "Scale",
    text:
      "Start with one use case and progressively expand across lines, shops and plants.",
    chips: ["Line", "Plant", "Enterprise"],
    className: "scale-card",
  },
];

/* ============================================================
   DATA
============================================================ */

const modules = [
  {
    icon: <FiActivity />,
    title: "Production Monitoring & Control",
  },
  {
    icon: <FiCheckCircle />,
    title: "Process Confirmation",
  },
  {
    icon: <FiGitBranch />,
    title: "Product & Process Traceability",
  },
  {
    icon: <FiDatabase />,
    title: "Genealogy",
  },
  {
    icon: <FiBarChart2 />,
    title: "OEE & Performance Analytics",
  },
  {
    icon: <FiShield />,
    title: "Quality Management",
  },
  {
    icon: <FiBookOpen />,
    title: "Digital Work Instructions",
  },
  {
    icon: <FiBell />,
    title: "Andon & Escalation",
  },
  {
    icon: <FiTool />,
    title: "Maintenance & TPM",
  },
  {
    icon: <FiGrid />,
    title: "Production Planning & Scheduling",
  },
  {
    icon: <FiSettings />,
    title: "Tool & Equipment Management",
  },
  {
    icon: <FiPackage />,
    title: "Warehouse & Material Traceability",
  },
  {
    icon: <FiZap />,
    title: "Energy & Utility Monitoring",
  },
  {
    icon: <FiEye />,
    title: "Testing & Inspection Data Management",
  },
  {
    icon: <FiMonitor />,
    title: "Machine Monitoring",
  },
  {
    icon: <FiClipboard />,
    title: "Digital Check Sheets",
  },
  {
    icon: <FiRefreshCw />,
    title: "Rework Management",
  },
  {
    icon: <FiAlertTriangle />,
    title: "Alarm & Downtime Management",
  },
  {
    icon: <FiTrendingUp />,
    title: "Industrial Analytics",
  },
  {
    icon: <FiCpu />,
    title: "AI-enabled Manufacturing Intelligence",
  },
];

const configurations = [
  "Product Variants & SKUs",
  "Process Sequences",
  "Routing Logic",
  "Station Interlocks",
  "Quality Checkpoints",
  "Parameter Limits",
  "Recipes",
  "Production Rules",
  "User Workflows",
  "Approval Mechanisms",
  "Rework Processes",
  "Data Retention",
  "Escalation Logic",
  "Dashboards & KPIs",
  "Reports & Analytics",
];

const technologies = [
  "PLC",
  "CNC Controllers",
  "Robots",
  "Cobots",
  "Vision Systems",
  "DC Tools",
  "Torque Controllers",
  "Leak Testers",
  "Gauging Systems",
  "Laser Marking",
  "Barcode & QR",
  "RFID",
  "Sensors & IoT",
  "SCADA",
  "ERP",
  "SAP",
  "WMS",
  "QMS",
  "PLM",
  "CMMS",
  "Cloud",
  "Analytics Platforms",
  "Third-party Apps",
];

const protocols = [
  "OPC UA",
  "MQTT",
  "Modbus TCP/IP",
  "EtherNet/IP",
  "PROFINET",
  "Serial Communication",
  "REST API",
  "Database Interfaces",
  "CNC Protocols",
  "MTConnect",
  "FOCAS",
];

const aiCapabilities = [
  "Predictive Quality",
  "Predictive Maintenance",
  "Anomaly Detection",
  "Intelligent Downtime Analysis",
  "Process Optimization",
  "Energy Optimization",
  "Production Forecasting",
  "AI-assisted Root Cause Analysis",
  "Automated Manufacturing Insights",
  "Natural Language Manufacturing Queries",
  "Intelligent Alerts & Recommendations",
  "Vision AI Integration",
];

const scalableApplications = [
  "Individual SPMs",
  "Sub-assembly Stations",
  "Assembly Lines",
  "Machining Lines",
  "Testing Facilities",
  "Paint Shops",
  "Warehouses",
  "Utility Systems",
  "Complete Factories",
  "Multiple Manufacturing Locations",
];

const pillars = [
  {
    icon: <FiLayers />,
    title: "Modular",
    text:
      "Deploy only what you need and add capabilities as manufacturing requirements evolve.",
  },
  {
    icon: <FiSliders />,
    title: "Configurable",
    text:
      "Adapt workflows, processes, rules, dashboards and reports without rebuilding the system.",
  },
  {
    icon: <FiLink2 />,
    title: "Connected",
    text:
      "Integrate machines, automation equipment, enterprise systems and third-party applications.",
  },
  {
    icon: <FiCpu />,
    title: "AI Ready",
    text:
      "Create contextualized manufacturing data capable of powering analytics and industrial AI.",
  },
  {
    icon: <FiMaximize2 />,
    title: "Scalable",
    text:
      "Scale from one machine to multiple manufacturing plants using the same technology foundation.",
  },
];

/* ============================================================
   MAIN COMPONENT
============================================================ */


const sectionReveal = {
  initial: { opacity: 0, y: 46 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
};

const OperateXPlatform = () => {
  const navigate = useNavigate();
  const [introDone, setIntroDone] = useState(false);
  const [activeHeroNode, setActiveHeroNode] = useState(0);

  useEffect(() => {
    // Always start this product experience at the top. While the OperateX
    // reveal is playing, lock page scrolling so browser scroll restoration or
    // a touch gesture cannot leave the user halfway down the page.
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlScrollBehavior = document.documentElement.style.scrollBehavior;

    document.body.style.overflow = "hidden";
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const t = setTimeout(() => setIntroDone(true), 2250);

    return () => {
      clearTimeout(t);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.scrollBehavior = previousHtmlScrollBehavior;
    };
  }, []);

  useEffect(() => {
    if (!introDone) return undefined;

    // Keep the hero as the first thing visible after the O → OperateX reveal.
    // Unlock only after the intro has substantially cleared the viewport.
    const revealTimer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.getElementById("platform")?.scrollIntoView({
        block: "start",
        behavior: "auto",
      });
      document.body.style.overflow = "";
    }, 720);

    const timer = setInterval(() => {
      setActiveHeroNode((prev) => (prev + 1) % 4);
    }, 2600);

    return () => {
      clearTimeout(revealTimer);
      clearInterval(timer);
    };
  }, [introDone]);

  const scrollToModules = () => {
    document.getElementById("modules")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const heroNodes = useMemo(
    () => [
      {
        title: "Shop-floor Control",
        sub: "PLC · CNC · Robots",
        anim: factoryAutomationAnim,
        className: "node-a",
      },
      {
        title: "Quality & Genealogy",
        sub: "Traceability · Testing",
        anim: traceabilityAnim,
        className: "node-b",
      },
      {
        title: "Industrial Connectivity",
        sub: "OT · IIoT · Edge",
        anim: industrialIotAnim,
        className: "node-c",
      },
      {
        title: "Enterprise Intelligence",
        sub: "ERP · Cloud · Analytics",
        anim: smartInfrastructureAnim,
        className: "node-d",
      },
    ],
    []
  );

  const moduleGroups = useMemo(
    () => [
      {
        number: "01",
        title: "Production Execution",
        subtitle: "Guide, validate and control manufacturing operations in real time.",
        anim: factoryAutomationAnim,
        items: [modules[0], modules[1], modules[6], modules[9], modules[15]],
      },
      {
        number: "02",
        title: "Quality & Traceability",
        subtitle: "Create a permanent digital record across product and process genealogy.",
        anim: traceabilityAnim,
        items: [modules[2], modules[3], modules[5], modules[13], modules[16]],
      },
      {
        number: "03",
        title: "Performance & Assets",
        subtitle: "Improve utilization, reliability and response across machines and tools.",
        anim: machineBuildingAnim,
        items: [modules[4], modules[8], modules[10], modules[14], modules[17]],
      },
      {
        number: "04",
        title: "Plant Intelligence",
        subtitle: "Turn contextual manufacturing data into faster, smarter decisions.",
        anim: digitalManufacturingAnim,
        items: [modules[7], modules[11], modules[12], modules[18], modules[19]],
      },
    ],
    []
  );

  const backboneLayers = [
    {
      code: "L4",
      icon: <FiCloud />,
      title: "Enterprise Systems",
      text: "ERP · SAP · PLM · WMS · QMS · Cloud · Business Analytics",
    },
    {
      code: "L3",
      icon: <FiCpu />,
      title: "OperateX MES Platform",
      text: "Production · Quality · Traceability · OEE · Maintenance · Scheduling · Analytics · AI",
      active: true,
    },
    {
      code: "L2",
      icon: <FiUsers />,
      title: "Manufacturing Operations",
      text: "Assembly · Machining · Testing · Inspection · Paint Shop · Warehouse · Utilities",
    },
    {
      code: "L1",
      icon: <FiServer />,
      title: "OT & Equipment Layer",
      text: "PLC · CNC · Robot · Vision · DC Tool · Scanner · RFID · Sensors · Test Equipment",
    },
  ];

  const scaleSteps = ["Machine", "Station", "Cell", "Line", "Shop", "Plant", "Multi-Plant"];

  return (
    <main className="opx-page">
      <AnimatePresence>
        {!introDone && (
          <motion.div
            className="opx-intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.68, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="opx-intro-grid" />
            <motion.div
              className="opx-intro-line line-top"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
            />
            <div className="opx-intro-logo" aria-label="OperateX">
              <motion.span
                className="opx-intro-letter opx-intro-o"
                initial={{ x: -180, opacity: 0, rotate: -24, scale: 0.72 }}
                animate={{ x: 0, opacity: 1, rotate: 0, scale: 1 }}
                transition={{ duration: 0.72, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                O
              </motion.span>
              <motion.span
                className="opx-intro-middle"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                transition={{ duration: 0.72, delay: 0.86, ease: [0.22, 1, 0.36, 1] }}
              >
                perate
              </motion.span>
              <motion.span
                className="opx-intro-letter opx-intro-x"
                initial={{ x: 180, opacity: 0, rotate: 24, scale: 0.72 }}
                animate={{ x: 0, opacity: 1, rotate: 0, scale: 1 }}
                transition={{ duration: 0.72, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                X
              </motion.span>
            </div>
            <motion.div
              className="opx-intro-line line-bottom"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.68, delay: 1.22, ease: "easeOut" }}
            />
            <motion.div
              className="opx-intro-sub"
              initial={{ opacity: 0, y: 16, letterSpacing: "8px" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "3px" }}
              transition={{ duration: 0.7, delay: 1.45 }}
            >
              CONNECT · CONFIGURE · INTEGRATE · SCALE
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="opx-hero" id="platform">
        <div className="opx-hero-grid" />
        <div className="opx-hero-glow glow-one" />
        <div className="opx-hero-glow glow-two" />
        <motion.div
          className="opx-scan-beam"
          animate={{ x: ["-120%", "160%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        <div className="opx-container opx-hero-layout">
          <motion.div
            className="opx-hero-copy"
            initial={{ opacity: 0, x: -52 }}
            animate={introDone ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="opx-eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={introDone ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.12 }}
            >
              <span /> MANUFACTURING EXECUTION PLATFORM
            </motion.div>

            <h1>
              A Manufacturing Platform
              <br />
              That <span className="opx-gradient-text">Moves With Your Factory.</span>
            </h1>

            <p className="opx-hero-lead">
              OperateX connects machines, people, processes and enterprise systems into one configurable digital manufacturing environment — built to evolve from one machine to multi-plant operations.
            </p>

            <div className="opx-hero-actions">
              <motion.button
                className="opx-primary-btn"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToModules}
              >
                Explore the Platform <FiArrowRight />
              </motion.button>
              <motion.button
                className="opx-secondary-btn"
                whileHover={{ y: -3 }}
                onClick={() => navigate("/contact")}
              >
                Discuss Your Requirement
              </motion.button>
            </div>

            <div className="opx-hero-features">
              {["Modular", "Configurable", "AI Ready", "Scalable"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 18 }}
                  animate={introDone ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.09 }}
                >
                  <FiCheckCircle /> {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="opx-live-map-wrap"
            initial={{ opacity: 0, scale: 0.9, y: 34 }}
            animate={introDone ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="opx-live-label"><i /> LIVE MANUFACTURING GRAPH</div>
            <div className="opx-live-map">
              <svg className="opx-network-lines" viewBox="0 0 600 520" preserveAspectRatio="none" aria-hidden="true">
                {[
                  "M300 260 C244 214 176 146 112 74",
                  "M300 260 C356 214 424 146 488 74",
                  "M300 260 C244 306 176 374 112 446",
                  "M300 260 C356 306 424 374 488 446",
                ].map((d, index) => (
                  <React.Fragment key={d}>
                    <motion.path
                      d={d}
                      fill="none"
                      stroke="rgba(242,124,45,.56)"
                      strokeWidth="2"
                      strokeDasharray="7 9"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={
                        introDone
                          ? {
                              pathLength: 1,
                              opacity: 1,
                              strokeDashoffset: [0, -64],
                            }
                          : {}
                      }
                      transition={{
                        pathLength: { duration: 1, delay: 0.5 + index * 0.14 },
                        opacity: { duration: 0.55, delay: 0.5 + index * 0.14 },
                        strokeDashoffset: {
                          duration: 2.4,
                          repeat: Infinity,
                          ease: "linear",
                          delay: 1 + index * 0.12,
                        },
                      }}
                    />
                    <motion.circle
                      cx="300"
                      cy="260"
                      r="4.5"
                      fill="#f27c2d"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={introDone ? { opacity: [0.25, 1, 0.25], scale: [0.7, 1.15, 0.7] } : {}}
                      transition={{ duration: 1.8, repeat: Infinity, delay: 0.7 + index * 0.16 }}
                    />
                  </React.Fragment>
                ))}
              </svg>

              <div className="opx-core-anchor">
                <motion.div
                  className="opx-core"
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="opx-core-halo" />
                  <Lottie animationData={digitalManufacturingAnim} loop className="opx-core-lottie" />
                  <div className="opx-core-brand"><b>O</b>perate<b>X</b></div>
                  <small>DIGITAL MANUFACTURING CORE</small>
                </motion.div>
              </div>

              {heroNodes.map((node, index) => (
                <motion.button
                  type="button"
                  key={node.title}
                  className={`opx-live-node ${node.className} ${activeHeroNode === index ? "active" : ""}`}
                  onClick={() => setActiveHeroNode(index)}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={introDone ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.76 + index * 0.11, duration: 0.5 }}
                  whileHover={{ scale: 1.04 }}
                >
                  <Lottie animationData={node.anim} loop className="opx-node-lottie" />
                  <span>
                    <strong>{node.title}</strong>
                    <small>{node.sub}</small>
                  </span>
                </motion.button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                className="opx-live-status"
                key={heroNodes[activeHeroNode].title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.32 }}
              >
                <span>ACTIVE DATA PATH</span>
                <strong>{heroNodes[activeHeroNode].title}</strong>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="opx-philosophy">
        <div className="opx-container">
          <motion.div {...sectionReveal} className="opx-section-head center">
            <span>ONE PLATFORM</span>
            <h2>Connect. Configure. Integrate. Scale.</h2>
            <p>
              OperateX is designed as a living manufacturing layer — flexible enough to start with a focused use case and powerful enough to become the digital backbone of an entire plant.
            </p>
          </motion.div>

          <div className="opx-capability-track">
            <motion.div
              className="opx-capability-line"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            {platformHighlights.map((item, index) => (
              <motion.article
                key={item.title}
                className={`opx-capability-card ${item.className}`}
                initial={{ opacity: 0, y: 48, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.58, delay: index * 0.12 }}
                whileHover={{ y: -10 }}
              >
                <div className="opx-capability-top">
                  <span>{item.number}</span>
                  <motion.div whileHover={{ rotate: 8, scale: 1.08 }}>{item.icon}</motion.div>
                </div>
                <div className={`opx-mini-motion motion-${index + 1}`}>
                  <i /><i /><i /><i />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="opx-chip-row">
                  {item.chips.map((chip) => <span key={chip}>{chip}</span>)}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="opx-modules" id="modules">
        <div className="opx-modules-orbit orbit-a" />
        <div className="opx-modules-orbit orbit-b" />
        <div className="opx-container">
          <motion.div {...sectionReveal} className="opx-section-head light">
            <span>MODULAR BY DESIGN</span>
            <h2>Build the MES Your Manufacturing Actually Needs.</h2>
            <p>
              Deploy one capability, combine selected modules, or scale into a complete production, quality, traceability and intelligence platform.
            </p>
          </motion.div>

          <div className="opx-module-grid">
            {moduleGroups.map((group, groupIndex) => (
              <motion.article
                key={group.title}
                className="opx-module-card"
                initial={{ opacity: 0, y: 55, rotateX: 8 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.7, delay: groupIndex * 0.11 }}
              >
                <div className="opx-module-top">
                  <div>
                    <span className="opx-module-number">{group.number}</span>
                    <h3>{group.title}</h3>
                    <p>{group.subtitle}</p>
                  </div>
                  <motion.div
                    className="opx-module-lottie-shell"
                    animate={{ y: [0, -6, 0], rotate: [0, 1.5, 0] }}
                    transition={{ duration: 4 + groupIndex * 0.4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Lottie animationData={group.anim} loop />
                  </motion.div>
                </div>

                <div className="opx-module-items">
                  {group.items.map((item, index) => (
                    <motion.div
                      className="opx-module-item"
                      key={item.title}
                      initial={{ opacity: 0, x: -18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.16 + index * 0.055 }}
                    >
                      <span>{item.icon}</span>
                      <strong>{item.title}</strong>
                    </motion.div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div {...sectionReveal} className="opx-module-message">
            <FiLayers />
            <div>
              <strong>One focused use case or a complete MES.</strong>
              <span>Start where the business value is highest, then add capabilities without replacing the technology foundation.</span>
            </div>
            <button onClick={() => navigate("/contact")}>Discuss Your Requirement <FiArrowRight /></button>
          </motion.div>
        </div>
      </section>

      <section className="opx-config">
        <div className="opx-container opx-config-layout">
          <motion.div
            className="opx-config-console"
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.72 }}
          >
            <div className="opx-console-bar">
              <div><i /><i /><i /></div>
              <span>OPERATEX / CONFIGURATION ENGINE</span>
              <b><em /> LIVE</b>
            </div>
            <motion.div
              className="opx-config-scan"
              animate={{ y: [0, 530, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="opx-config-list">
              {configurations.map((item, index) => (
                <motion.div
                  key={item}
                  className="opx-config-row"
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(index * 0.045, 0.55) }}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <FiCheckCircle />
                  <strong>{item}</strong>
                  <b>ACTIVE</b>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="opx-config-copy"
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.72 }}
          >
            <span>CONFIGURABLE AROUND YOUR PROCESS</span>
            <h2>Your Process Comes First. The Software Adapts.</h2>
            <p>
              Every factory operates differently. OperateX lets product variants, routing logic, interlocks, quality rules, approvals, rework and analytics evolve without rebuilding the manufacturing platform.
            </p>
            <div className="opx-config-highlight">
              <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}><FiZap /></motion.div>
              <div>
                <strong>Built for Continuous Change</strong>
                <p>Products change. Routes change. Quality rules change. OperateX is designed to change with them.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="opx-connect">
        <div className="opx-container">
          <motion.div {...sectionReveal} className="opx-section-head center light">
            <span>CONNECTED BY DEFAULT</span>
            <h2>Works With the Technology You Already Use.</h2>
            <p>Open interfaces allow IT and OT systems to participate in one connected manufacturing environment.</p>
          </motion.div>

          <motion.div {...sectionReveal} className="opx-connect-stage">
            <div className="opx-marquee row-one">
              <div className="opx-marquee-track">
                {[...technologies.slice(0, 12), ...technologies.slice(0, 12)].map((item, index) => (
                  <span key={`a-${index}`}><i />{item}</span>
                ))}
              </div>
            </div>

            <div className="opx-connect-core">
              <motion.div
                className="opx-connect-core-ring"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              />
              <Lottie animationData={industrialIotAnim} loop className="opx-connect-lottie" />
              <div><b>O</b>perate<b>X</b><small>CONNECTED MANUFACTURING</small></div>
            </div>

            <div className="opx-marquee row-two">
              <div className="opx-marquee-track reverse">
                {[...technologies.slice(11), ...technologies.slice(11)].map((item, index) => (
                  <span key={`b-${index}`}><i />{item}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="opx-open">
        <div className="opx-container opx-open-layout">
          <motion.div {...sectionReveal} className="opx-open-copy">
            <span>OPEN & INTEGRATION-READY</span>
            <h2>New Machines. Existing Machines. One Connectivity Layer.</h2>
            <p>
              OperateX supports diverse shop-floor and enterprise environments without locking manufacturers into a single automation vendor or protocol ecosystem.
            </p>
            <div className="opx-vendor-note"><FiCheckCircle /> Vendor-independent architecture</div>
          </motion.div>

          <motion.div {...sectionReveal} className="opx-protocol-board">
            <div className="opx-protocol-head">
              <div><i /><i /><i /></div>
              <span>CONNECTIVITY ENGINE</span>
              <strong>11 INTERFACES READY</strong>
            </div>
            <div className="opx-protocol-grid">
              {protocols.map((protocol, index) => (
                <motion.div
                  key={protocol}
                  className="opx-protocol-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.045 }}
                  whileHover={{ y: -4 }}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <FiCode />
                  <strong>{protocol}</strong>
                  <i />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="opx-ai">
        <div className="opx-ai-mesh" />
        <div className="opx-container">
          <div className="opx-ai-layout">
            <motion.div {...sectionReveal} className="opx-ai-copy">
              <span>AI-READY MANUFACTURING PLATFORM</span>
              <h2>From Raw Signals to Manufacturing Intelligence.</h2>
              <p>
                Machine data, production events, quality results, downtime, maintenance history and genealogy are contextualized inside OperateX so analytics and industrial AI can work with manufacturing meaning — not isolated tags.
              </p>

              <div className="opx-ai-pipeline">
                {["DATA", "CONTEXT", "INTELLIGENCE"].map((step, index) => (
                  <React.Fragment key={step}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.18 }}
                    >{step}</motion.div>
                    {index < 2 && <motion.span animate={{ x: [-4, 5, -4] }} transition={{ duration: 1.7, repeat: Infinity }}><FiArrowRight /></motion.span>}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>

            <motion.div {...sectionReveal} className="opx-ai-core">
              <div className="opx-ai-orbit orbit-one" />
              <div className="opx-ai-orbit orbit-two" />
              <motion.div
                className="opx-ai-lottie-wrap"
                animate={{ scale: [1, 1.045, 1], y: [0, -6, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Lottie animationData={digitalManufacturingAnim} loop />
              </motion.div>
              <h3>OperateX Intelligence</h3>
              <p>Contextual Manufacturing Data</p>
              <span><i /> AI READY</span>
            </motion.div>
          </div>

          <div className="opx-ai-grid">
            {aiCapabilities.map((item, index) => (
              <motion.div
                key={item}
                className="opx-ai-card"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 6) * 0.055 }}
                whileHover={{ y: -6 }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="opx-scale">
        <div className="opx-container">
          <motion.div {...sectionReveal} className="opx-section-head center">
            <span>BUILT TO SCALE</span>
            <h2>Start at One Machine. Scale to the Enterprise.</h2>
            <p>Use the same technology foundation as your digital manufacturing program expands.</p>
          </motion.div>

          <div className="opx-scale-track">
            <motion.div
              className="opx-scale-line"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2 }}
            />
            {scaleSteps.map((step, index) => (
              <motion.div
                key={step}
                className={`opx-scale-step ${index === scaleSteps.length - 1 ? "final" : ""}`}
                initial={{ opacity: 0, scale: 0.72, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span>{index + 1}</span>
                <strong>{step}</strong>
              </motion.div>
            ))}
          </div>

          <div className="opx-application-grid">
  {scalableApplications.map((item, index) => (
    <motion.div
      className="opx-application"
      key={item}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 5) * 0.06 }}
      whileHover={{ y: -4 }}
    >
      <FiCheckCircle />
      <span>{item}</span>
    </motion.div>
  ))}
</div>
        </div>
      </section>

      <section className="opx-principles">
        <div className="opx-container">
          <motion.div {...sectionReveal} className="opx-section-head center light">
            <span>DESIGNED FOR MODERN MANUFACTURING</span>
            <h2>Five Principles Behind OperateX.</h2>
            <p>A common technology foundation designed to adapt, connect and scale without becoming rigid.</p>
          </motion.div>

          <div className="opx-principle-grid">
            {pillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                className={`opx-principle-card ${index === 2 ? "featured" : ""}`}
                initial={{ opacity: 0, y: 48, x: index % 2 === 0 ? -12 : 12 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.58, delay: index * 0.11 }}
                whileHover={{ y: -9 }}
              >
                <span>0{index + 1}</span>
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3 + index * 0.25, repeat: Infinity }}>{pillar.icon}</motion.div>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
                <i />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="opx-backbone">
        <div className="opx-container opx-backbone-layout">
          <motion.div {...sectionReveal} className="opx-backbone-copy">
            <span>DIGITAL BACKBONE</span>
            <h2>One Information Layer from Shop Floor to Enterprise.</h2>
            <p>
              OperateX creates a common manufacturing information layer so machine signals become contextual production, quality and business intelligence.
            </p>
            <div className="opx-backbone-flow">
              <div>Machine Data</div><FiArrowRight /><div>OperateX</div><FiArrowRight /><div>Intelligence</div>
            </div>
          </motion.div>

          <div className="opx-backbone-stack">
            <motion.div
              className="opx-backbone-rail"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1.1 }}
            />
            {backboneLayers.map((layer, index) => (
              <motion.div
                key={layer.code}
                className={`opx-stack-layer ${layer.active ? "active" : ""}`}
                initial={{ opacity: 0, x: 38 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span>{layer.code}</span>
                <div>{layer.icon}</div>
                <section>
                  <h3>{layer.title}</h3>
                  <p>{layer.text}</p>
                </section>
                <i />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="opx-change">
        <div className="opx-container">
          <motion.div {...sectionReveal} className="opx-change-panel">
            <div className="opx-change-copy">
              <span>BUILT FOR CHANGE</span>
              <h2>Manufacturing Never Stands Still. Neither Should Your MES.</h2>
              <p>
                New products are launched. Machines are added. Processes change. Quality requirements evolve. Plants expand. New technologies emerge.
              </p>
              <p>
                OperateX is designed around this reality, allowing manufacturers to evolve their digital environment without repeatedly replacing the core platform.
              </p>
            </div>
            <div className="opx-change-visual">
              <Lottie animationData={machineBuildingAnim} loop className="opx-change-lottie" />
              {["New Products", "New Machines", "Process Changes", "Quality Rules", "Plant Expansion", "New Technology"].map((item, index) => (
                <motion.span
                  key={item}
                  className={`change-tag tag-${index + 1}`}
                  animate={{ y: index % 2 === 0 ? [0, -7, 0] : [0, 7, 0] }}
                  transition={{ duration: 3 + index * 0.22, repeat: Infinity, ease: "easeInOut" }}
                >{item}</motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="opx-final">
        <div className="opx-final-grid" />
        <motion.div
          className="opx-final-glow"
          animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0.9, 0.55] }}
          transition={{ duration: 4.8, repeat: Infinity }}
        />
        <motion.div {...sectionReveal} className="opx-final-content">
          <div className="opx-final-brand"><b>O</b>perate<b>X</b></div>
          <h2>Build the Digital Manufacturing Platform Around Your Factory.</h2>
          <p>Start with the manufacturing problem that matters today. Build on the same platform for what comes next.</p>
          <div className="opx-final-tags">
            <span>Modular</span><span>Configurable</span><span>Connected</span><span>AI Ready</span><span>Scalable</span>
          </div>
          <motion.button whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => navigate("/contact")}>
            Talk to Our Engineers <FiArrowRight />
          </motion.button>
        </motion.div>
      </section>

      <style>{`
        .opx-page,
        .opx-page * {
          box-sizing: border-box;
          font-family: "Montserrat", sans-serif !important;
        }

        .opx-page {
          --opx-red: #ae2c11;
          --opx-orange: #f27c2d;
          --opx-gold: #db9941;
          --opx-navy: #06101d;
          --opx-blue: #0b2540;
          --opx-ink: #111827;
          --opx-text: #526171;
          --opx-soft: #f4f6f8;
          --opx-line: rgba(17,24,39,.10);
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
          background: #fff;
          color: var(--opx-ink);
        }

        .opx-container {
          width: min(1360px, calc(100% - 64px));
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .opx-intro {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 50% 50%, #102a46 0%, #07111d 50%, #03070c 100%);
          color: #fff;
          overflow: hidden;
        }

        .opx-intro-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
          background-size: 54px 54px;
          mask-image: radial-gradient(circle at center, #000 0%, transparent 72%);
        }

        .opx-intro-logo {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: baseline;
          justify-content: center;
          white-space: nowrap;
          font-size: clamp(3.8rem, 10vw, 9rem);
          font-weight: 850;
          letter-spacing: -.075em;
          line-height: .95;
          text-shadow: 0 25px 65px rgba(0,0,0,.45);
        }

        .opx-intro-letter { color: #f1452f; }
        .opx-intro-middle { overflow: hidden; color: #fff; font-weight: 760; }
        .opx-intro-line { width: min(720px, 72vw); height: 2px; transform-origin: center; background: linear-gradient(90deg, transparent, #f27c2d, #db9941, transparent); z-index: 2; }
        .line-top { margin-bottom: 34px; }
        .line-bottom { margin-top: 30px; }
        .opx-intro-sub { position: relative; z-index: 2; margin-top: 20px; color: rgba(255,255,255,.58); font-size: clamp(.58rem, .95vw, .82rem); font-weight: 700; text-align: center; }

        .opx-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 132px 0 86px;
          overflow: hidden;
          background: linear-gradient(135deg, #04101c 0%, #071a2c 48%, #0a2844 100%);
        }

        .opx-hero-grid, .opx-final-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
          background-size: 68px 68px;
          mask-image: linear-gradient(to bottom, #000, transparent 96%);
        }

        .opx-hero-glow { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; }
        .glow-one { width: 540px; height: 540px; right: -120px; top: -120px; background: rgba(242,124,45,.23); }
        .glow-two { width: 500px; height: 500px; left: -180px; bottom: -190px; background: rgba(38,120,190,.16); }
        .opx-scan-beam { position: absolute; top: 0; bottom: 0; width: 260px; transform: skewX(-18deg); background: linear-gradient(90deg, transparent, rgba(255,255,255,.045), transparent); pointer-events: none; }

        .opx-hero-layout { display: grid; grid-template-columns: minmax(0, .95fr) minmax(520px, 1.05fr); gap: clamp(38px, 5vw, 84px); align-items: center; }
        .opx-eyebrow, .opx-section-head > span, .opx-config-copy > span, .opx-open-copy > span, .opx-ai-copy > span, .opx-backbone-copy > span, .opx-change-copy > span {
          display: flex; align-items: center; gap: 11px; color: var(--opx-gold); font-size: 12px; font-weight: 800; letter-spacing: 2.3px; text-transform: uppercase;
        }
        .opx-eyebrow span { width: 30px; height: 2px; background: linear-gradient(90deg, var(--opx-orange), var(--opx-gold)); }
        .opx-hero h1 { margin: 22px 0 24px; color: #fff; font-size: clamp(2.75rem, 4.35vw, 4.75rem); line-height: 1.05; font-weight: 760; letter-spacing: -.045em; max-width: 780px; }
        .opx-gradient-text { background: linear-gradient(90deg, #f27c2d 0%, #ffad52 48%, #f5d99c 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .opx-hero-lead { color: rgba(255,255,255,.72); font-size: clamp(1rem, 1.15vw, 1.16rem); line-height: 1.82; max-width: 690px; margin: 0; font-weight: 450; }
        .opx-hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }
        .opx-primary-btn, .opx-secondary-btn, .opx-module-message button, .opx-final button { border: 0; border-radius: 999px; padding: 14px 22px; font-size: 13px; font-weight: 800; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 10px; }
        .opx-primary-btn, .opx-final button { color: #fff; background: linear-gradient(135deg, var(--opx-red), var(--opx-orange)); box-shadow: 0 14px 34px rgba(242,124,45,.27); }
        .opx-secondary-btn { color: rgba(255,255,255,.86); background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.13); backdrop-filter: blur(12px); }
        .opx-hero-features { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 10px; margin-top: 28px; max-width: 670px; }
        .opx-hero-features div { min-width: 0; display: flex; align-items: center; gap: 7px; color: rgba(255,255,255,.72); font-size: 11.5px; font-weight: 650; white-space: nowrap; }
        .opx-hero-features svg { color: var(--opx-orange); flex: 0 0 auto; }

        .opx-live-map-wrap { position: relative; min-width: 0; width: min(660px, 100%); justify-self: center; }
        .opx-live-label { width: max-content; max-width: 100%; margin: 0 auto 12px; padding: 8px 12px; border-radius: 999px; border: 1px solid rgba(255,255,255,.11); background: rgba(0,0,0,.18); color: rgba(255,255,255,.64); font-size: 10px; font-weight: 800; letter-spacing: 1.25px; }
        .opx-live-label i, .opx-console-bar b em, .opx-protocol-item > i, .opx-ai-core > span i { display: inline-block; width: 7px; height: 7px; margin-right: 7px; border-radius: 50%; background: #42d68a; box-shadow: 0 0 0 5px rgba(66,214,138,.1); }
        .opx-live-map { position: relative; width: 100%; aspect-ratio: 600 / 520; min-height: 0; border-radius: 36px; border: 1px solid rgba(255,255,255,.1); background: radial-gradient(circle at center, rgba(242,124,45,.11), transparent 28%), linear-gradient(160deg, rgba(255,255,255,.055), rgba(255,255,255,.014)); box-shadow: 0 40px 90px rgba(0,0,0,.34), inset 0 1px 0 rgba(255,255,255,.08); overflow: hidden; }
        .opx-live-map::before { content:""; position:absolute; inset:0; background-image: radial-gradient(rgba(255,255,255,.08) 1px, transparent 1px); background-size: 22px 22px; opacity:.32; mask-image: radial-gradient(circle at center, #000, transparent 78%); }
        .opx-live-map::after { content:""; position:absolute; left:50%; top:50%; width:54%; aspect-ratio:1; transform:translate(-50%,-50%); border-radius:50%; border:1px solid rgba(255,255,255,.035); box-shadow:0 0 0 34px rgba(255,255,255,.012),0 0 0 68px rgba(255,255,255,.008); pointer-events:none; }
        .opx-network-lines { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 2; }
        .opx-core-anchor { position:absolute; left:50%; top:50%; width:190px; height:190px; transform:translate(-50%,-50%); z-index:3; }
        .opx-core { position: relative; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; border-radius: 50%; border: 1px solid rgba(255,255,255,.15); background: linear-gradient(145deg, rgba(6,16,29,.95), rgba(16,48,78,.91)); box-shadow: 0 0 0 16px rgba(242,124,45,.035), 0 22px 55px rgba(0,0,0,.42); }
        .opx-core-halo { position:absolute; inset:-22px; border-radius:50%; border:1px dashed rgba(242,124,45,.35); animation: opxSpin 18s linear infinite; }
        .opx-core-lottie { width: 94px; height: 94px; }
        .opx-core-brand { color:#fff; font-size:20px; font-weight:800; letter-spacing:-.04em; margin-top:-8px; }
        .opx-core-brand b { color:#f1452f; }
        .opx-core small { color:rgba(255,255,255,.44); font-size:8px; letter-spacing:1.2px; margin-top:5px; }
        .opx-live-node { position: absolute; width: 170px; min-height: 72px; display:flex; align-items:center; gap:10px; padding:10px 12px; text-align:left; color:#fff; background:rgba(6,16,29,.84); border:1px solid rgba(255,255,255,.1); border-radius:18px; backdrop-filter:blur(14px); cursor:pointer; z-index:4; box-shadow:0 16px 36px rgba(0,0,0,.24); transition:.3s ease; }
        .opx-live-node.active { border-color:rgba(242,124,45,.62); box-shadow:0 0 0 1px rgba(242,124,45,.16),0 18px 44px rgba(0,0,0,.3); }
        .node-a { left:4%; top:7%; } .node-b { right:4%; top:7%; } .node-c { left:4%; bottom:7%; } .node-d { right:4%; bottom:7%; }
        .opx-node-lottie { width:46px; height:46px; flex:0 0 46px; }
        .opx-live-node span { min-width:0; }
        .opx-live-node strong { display:block; font-size:10.5px; line-height:1.3; font-weight:780; }
        .opx-live-node small { display:block; margin-top:3px; color:rgba(255,255,255,.45); font-size:8.5px; line-height:1.35; }
        .opx-live-status { margin:14px auto 0; width:min(360px,100%); padding:12px 15px; border-top:2px solid var(--opx-orange); background:rgba(255,255,255,.04); color:#fff; text-align:center; }
        .opx-live-status span { display:block; color:rgba(255,255,255,.4); font-size:8px; letter-spacing:1.4px; font-weight:800; }
        .opx-live-status strong { display:block; margin-top:4px; font-size:11px; }

        .opx-section-head { max-width: 820px; margin-bottom: 46px; }
        .opx-section-head.center { margin-left:auto; margin-right:auto; text-align:center; align-items:center; }
        .opx-section-head.center > span { justify-content:center; }
        .opx-section-head h2, .opx-config-copy h2, .opx-open-copy h2, .opx-ai-copy h2, .opx-backbone-copy h2, .opx-change-copy h2 { margin:12px 0 16px; font-size:clamp(2rem,3.25vw,3.25rem); line-height:1.12; letter-spacing:-.035em; font-weight:760; color:var(--opx-ink); }
        .opx-section-head p, .opx-config-copy > p, .opx-open-copy > p, .opx-ai-copy > p, .opx-backbone-copy > p, .opx-change-copy > p { margin:0; color:var(--opx-text); font-size:clamp(.98rem,1.08vw,1.08rem); line-height:1.78; }
        .opx-section-head.light h2, .opx-ai-copy h2 { color:#fff; }
        .opx-section-head.light p, .opx-ai-copy > p { color:rgba(255,255,255,.66); }

        .opx-philosophy { padding: 104px 0; background:linear-gradient(180deg,#fff,#f8fafc); }
        .opx-capability-track { position:relative; display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:18px; }
        .opx-capability-line { position:absolute; left:7%; right:7%; top:58px; height:2px; transform-origin:left; background:linear-gradient(90deg,rgba(174,44,17,.18),var(--opx-orange),rgba(219,153,65,.24)); }
        .opx-capability-card { position:relative; min-width:0; min-height:330px; padding:26px; border-radius:26px; background:#fff; border:1px solid var(--opx-line); box-shadow:0 16px 42px rgba(7,17,29,.07); overflow:hidden; }
        .opx-capability-card::before { content:""; position:absolute; inset:0 auto 0 0; width:4px; background:linear-gradient(180deg,var(--opx-red),var(--opx-orange)); }
        .opx-capability-top { display:flex; justify-content:space-between; align-items:center; }
        .opx-capability-top > span { color:#d7dce1; font-size:2rem; font-weight:850; }
        .opx-capability-top > div { width:48px; height:48px; display:grid; place-items:center; border-radius:15px; color:var(--opx-orange); background:#fff4eb; font-size:21px; }
        .opx-mini-motion { position:relative; height:72px; margin:18px 0 10px; border-radius:16px; background:linear-gradient(135deg,#f7f9fb,#eef2f5); overflow:hidden; }
        .opx-mini-motion i { position:absolute; display:block; border-radius:999px; background:linear-gradient(90deg,var(--opx-red),var(--opx-orange)); }
        .motion-1 i { width:12px; height:12px; animation: opxNodeMove 3.2s infinite ease-in-out; } .motion-1 i:nth-child(1){left:12%;top:42%}.motion-1 i:nth-child(2){left:38%;top:22%;animation-delay:.4s}.motion-1 i:nth-child(3){right:18%;top:52%;animation-delay:.8s}.motion-1 i:nth-child(4){right:8%;top:18%;animation-delay:1.2s}
        .motion-2 i { left:12%; width:76%; height:5px; } .motion-2 i:nth-child(1){top:16%;}.motion-2 i:nth-child(2){top:38%;width:58%;}.motion-2 i:nth-child(3){top:60%;width:68%;}.motion-2 i:nth-child(4){top:82%;width:42%;}
        .motion-3 i { width:18px; height:18px; top:37%; animation:opxNodeMove 2.8s infinite ease-in-out; }.motion-3 i:nth-child(1){left:8%}.motion-3 i:nth-child(2){left:34%;animation-delay:.3s}.motion-3 i:nth-child(3){left:60%;animation-delay:.6s}.motion-3 i:nth-child(4){left:84%;animation-delay:.9s}
        .motion-4 i { bottom:12%; width:13%; animation:opxBarPulse 2.8s infinite ease-in-out; }.motion-4 i:nth-child(1){left:12%;height:28%}.motion-4 i:nth-child(2){left:34%;height:45%;animation-delay:.2s}.motion-4 i:nth-child(3){left:56%;height:64%;animation-delay:.4s}.motion-4 i:nth-child(4){left:78%;height:78%;animation-delay:.6s}
        .opx-capability-card h3 { margin:15px 0 9px; font-size:1.5rem; font-weight:800; letter-spacing:-.025em; }
        .opx-capability-card p { color:var(--opx-text); font-size:.94rem; line-height:1.68; margin:0; }
        .opx-chip-row { display:flex; flex-wrap:wrap; gap:7px; margin-top:18px; }
        .opx-chip-row span { padding:6px 9px; border-radius:999px; font-size:9px; font-weight:800; letter-spacing:.4px; color:#8b3d17; background:#fff2e9; }

        .opx-modules { position:relative; padding:110px 0; overflow:hidden; background:linear-gradient(145deg,#06101d,#0a2239 58%,#0d3150); }
        .opx-modules-orbit { position:absolute; border-radius:50%; border:1px dashed rgba(242,124,45,.12); animation:opxSpin 32s linear infinite; }
        .orbit-a { width:520px;height:520px;right:-250px;top:-130px; }.orbit-b{width:420px;height:420px;left:-220px;bottom:-170px;animation-direction:reverse;}
        .opx-module-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:22px; }
        .opx-module-card { position:relative; min-width:0; border-radius:28px; padding:28px; background:linear-gradient(160deg,rgba(255,255,255,.075),rgba(255,255,255,.025)); border:1px solid rgba(255,255,255,.11); box-shadow:0 26px 70px rgba(0,0,0,.2); backdrop-filter:blur(18px); overflow:hidden; }
        .opx-module-card::after { content:""; position:absolute; left:0; right:0; bottom:0; height:3px; background:linear-gradient(90deg,var(--opx-orange),var(--opx-gold),transparent); }
        .opx-module-top { display:grid; grid-template-columns:minmax(0,1fr) 118px; gap:18px; align-items:center; }
        .opx-module-number { color:var(--opx-gold); font-size:10px; font-weight:850; letter-spacing:1.8px; }
        .opx-module-card h3 { color:#fff; font-size:1.55rem; margin:6px 0 8px; font-weight:800; }
        .opx-module-card p { color:rgba(255,255,255,.56); font-size:.92rem; line-height:1.62; margin:0; }
        .opx-module-lottie-shell { width:110px;height:110px;border-radius:24px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);padding:8px; }
        .opx-module-lottie-shell > div { width:100%;height:100%; }
        .opx-module-items { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:9px; margin-top:22px; }
        .opx-module-item { min-width:0; min-height:58px; display:flex; align-items:center; gap:10px; padding:11px 12px; border-radius:14px; background:rgba(255,255,255,.045); border:1px solid rgba(255,255,255,.07); }
        .opx-module-item > span { width:30px;height:30px;display:grid;place-items:center;flex:0 0 30px;border-radius:9px;background:rgba(242,124,45,.12);color:#ff9a53; }
        .opx-module-item strong { color:rgba(255,255,255,.82); font-size:11.5px; line-height:1.38; font-weight:650; }
        .opx-module-message { margin-top:24px; padding:22px 24px; border-radius:22px; display:grid; grid-template-columns:44px minmax(0,1fr) auto; gap:14px; align-items:center; background:rgba(255,255,255,.055); border:1px solid rgba(255,255,255,.1); color:#fff; }
        .opx-module-message > svg { width:42px;height:42px;padding:10px;border-radius:12px;background:rgba(242,124,45,.12);color:#ff9a53; }
        .opx-module-message strong { display:block; font-size:15px; }
        .opx-module-message span { display:block; margin-top:4px; color:rgba(255,255,255,.55); font-size:12px; line-height:1.5; }
        .opx-module-message button { color:#fff; background:linear-gradient(135deg,var(--opx-red),var(--opx-orange)); }

        .opx-config { padding:110px 0; background:linear-gradient(180deg,#f7f9fb,#fff); }
        .opx-config-layout { display:grid; grid-template-columns:minmax(0,1.08fr) minmax(0,.92fr); gap:70px; align-items:center; }
        .opx-config-console { position:relative; min-width:0; border-radius:26px; overflow:hidden; background:#08121d; border:1px solid rgba(255,255,255,.08); box-shadow:0 30px 70px rgba(7,17,29,.2); }
        .opx-console-bar, .opx-protocol-head { height:54px; padding:0 18px; display:flex; align-items:center; justify-content:space-between; gap:12px; border-bottom:1px solid rgba(255,255,255,.08); color:rgba(255,255,255,.5); font-size:9px; font-weight:800; letter-spacing:1.1px; }
        .opx-console-bar > div, .opx-protocol-head > div { display:flex; gap:5px; }.opx-console-bar > div i,.opx-protocol-head > div i{width:7px;height:7px;border-radius:50%;background:#65717d}.opx-console-bar > div i:first-child,.opx-protocol-head > div i:first-child{background:var(--opx-orange)}
        .opx-console-bar b { color:#61d898; font-size:8px; }.opx-console-bar b em{width:6px;height:6px;margin-right:5px;}
        .opx-config-list { position:relative; padding:12px; }
        .opx-config-row { display:grid; grid-template-columns:30px 20px minmax(0,1fr) auto; align-items:center; gap:8px; min-height:42px; padding:7px 10px; border-bottom:1px solid rgba(255,255,255,.055); color:#fff; }
        .opx-config-row > span { color:rgba(255,255,255,.24); font-size:9px; font-weight:800; }.opx-config-row svg{color:#4cd893}.opx-config-row strong{font-size:10.5px;font-weight:650;color:rgba(255,255,255,.76)}.opx-config-row b{font-size:7px;letter-spacing:.8px;color:#4cd893}
        .opx-config-scan { position:absolute; left:0; right:0; top:54px; height:2px; z-index:4; background:linear-gradient(90deg,transparent,var(--opx-orange),transparent); box-shadow:0 0 20px rgba(242,124,45,.6); pointer-events:none; }
        .opx-config-highlight { margin-top:26px; padding:20px; border-radius:20px; display:flex; gap:14px; align-items:flex-start; background:#fff5ed; border:1px solid rgba(242,124,45,.14); }
        .opx-config-highlight > div:first-child { width:40px;height:40px;display:grid;place-items:center;flex:0 0 40px;border-radius:12px;background:linear-gradient(135deg,var(--opx-red),var(--opx-orange));color:#fff; }
        .opx-config-highlight strong{font-size:14px}.opx-config-highlight p{margin:5px 0 0;color:var(--opx-text);font-size:12.5px;line-height:1.6}

        .opx-connect { position:relative; padding:112px 0; overflow:hidden; background:radial-gradient(circle at 50% 50%,rgba(242,124,45,.11),transparent 25%),linear-gradient(135deg,#06101d,#0a243d); }
        .opx-connect-stage { position:relative; width:100%; min-height:510px; border-radius:34px; overflow:hidden; border:1px solid rgba(255,255,255,.08); background:rgba(255,255,255,.025); display:flex; flex-direction:column; justify-content:center; }
        .opx-connect-stage::before { content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.07) 1px,transparent 1px);background-size:22px 22px;opacity:.28; }
        .opx-marquee { position:relative; z-index:2; width:100%; overflow:hidden; padding:10px 0; }
        .opx-marquee-track { width:max-content; display:flex; gap:10px; animation:opxMarquee 30s linear infinite; }.opx-marquee-track.reverse{animation-direction:reverse;animation-duration:34s}
        .opx-marquee span { display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:999px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.09);color:rgba(255,255,255,.72);font-size:10px;font-weight:700;white-space:nowrap }.opx-marquee span i{width:6px;height:6px;border-radius:50%;background:var(--opx-orange)}
        .opx-connect-core { position:relative; z-index:3; width:240px;height:240px;margin:22px auto;display:grid;place-items:center;text-align:center;border-radius:50%;background:linear-gradient(145deg,#0a1d31,#07111d);border:1px solid rgba(255,255,255,.12);box-shadow:0 0 0 18px rgba(242,124,45,.035),0 30px 70px rgba(0,0,0,.34) }
        .opx-connect-core-ring{position:absolute;inset:-24px;border-radius:50%;border:2px dashed rgba(242,124,45,.3)}.opx-connect-lottie{position:absolute;width:125px;height:125px;top:27px}.opx-connect-core>div:last-child{position:absolute;bottom:37px;color:#fff;font-size:22px;font-weight:800;letter-spacing:-.04em}.opx-connect-core b{color:#f1452f}.opx-connect-core small{display:block;margin-top:5px;color:rgba(255,255,255,.38);font-size:7px;letter-spacing:1.2px}

        .opx-open { padding:110px 0; background:#fff; }
        .opx-open-layout { display:grid;grid-template-columns:minmax(0,.88fr) minmax(0,1.12fr);gap:70px;align-items:center }
        .opx-vendor-note { display:inline-flex;align-items:center;gap:9px;margin-top:24px;padding:10px 13px;border-radius:999px;background:#eefaf4;color:#16804a;font-size:11px;font-weight:800 }.opx-vendor-note svg{font-size:15px}
        .opx-protocol-board{min-width:0;border-radius:26px;overflow:hidden;background:#08121d;box-shadow:0 28px 68px rgba(7,17,29,.2)}.opx-protocol-head strong{color:#4cd893;font-size:8px}.opx-protocol-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1px;background:rgba(255,255,255,.06);padding:1px}.opx-protocol-item{min-width:0;display:grid;grid-template-columns:28px 22px minmax(0,1fr) 8px;align-items:center;gap:8px;padding:15px;background:#0a1724;color:#fff}.opx-protocol-item>span{font-size:9px;color:rgba(255,255,255,.25);font-weight:800}.opx-protocol-item>svg{color:#ff9a53}.opx-protocol-item strong{font-size:10.5px;font-weight:650;white-space:normal}.opx-protocol-item>i{width:6px;height:6px;margin:0;background:#4cd893;box-shadow:none}

        .opx-ai { position:relative;padding:112px 0;background:linear-gradient(135deg,#040b13,#071827 55%,#0b2841);overflow:hidden }.opx-ai-mesh{position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.05) 1px,transparent 1px);background-size:24px 24px;mask-image:radial-gradient(circle at 72% 30%,#000,transparent 70%)}
        .opx-ai-layout{display:grid;grid-template-columns:minmax(0,1fr) 380px;gap:80px;align-items:center}.opx-ai-pipeline{display:flex;align-items:center;gap:10px;margin-top:28px;flex-wrap:wrap}.opx-ai-pipeline>div{padding:10px 13px;border-radius:10px;border:1px solid rgba(255,255,255,.09);background:rgba(255,255,255,.045);color:#fff;font-size:10px;font-weight:800;letter-spacing:.8px}.opx-ai-pipeline>span{color:var(--opx-orange);display:flex}
        .opx-ai-core{position:relative;min-height:380px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;border-radius:50%;border:1px solid rgba(255,255,255,.11);background:radial-gradient(circle,rgba(242,124,45,.12),rgba(255,255,255,.025) 55%,transparent 56%)}.opx-ai-orbit{position:absolute;border-radius:50%;border:1px dashed rgba(255,255,255,.12);animation:opxSpin 18s linear infinite}.opx-ai-orbit.orbit-one{width:300px;height:300px}.opx-ai-orbit.orbit-two{width:350px;height:350px;animation-direction:reverse;animation-duration:26s}.opx-ai-lottie-wrap{width:180px;height:180px;z-index:2}.opx-ai-core h3{color:#fff;font-size:1.45rem;margin:0;font-weight:800;z-index:2}.opx-ai-core p{color:rgba(255,255,255,.5);font-size:10px;margin:5px 0 15px;z-index:2}.opx-ai-core>span{z-index:2;padding:7px 11px;border-radius:999px;border:1px solid rgba(76,216,147,.2);background:rgba(76,216,147,.06);color:#78e5a8;font-size:8px;font-weight:800;letter-spacing:1px}
        .opx-ai-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin-top:56px}.opx-ai-card{min-width:0;min-height:90px;padding:15px;border-radius:16px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07)}.opx-ai-card>span{color:var(--opx-orange);font-size:9px;font-weight:800}.opx-ai-card p{color:rgba(255,255,255,.72);font-size:11.5px;line-height:1.45;margin:7px 0 0;font-weight:650}

        .opx-scale{padding:110px 0;background:linear-gradient(180deg,#fff,#f6f8fa)}.opx-scale-track{position:relative;display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:10px;margin-top:60px}.opx-scale-line{position:absolute;left:6%;right:6%;top:35px;height:3px;transform-origin:left;background:linear-gradient(90deg,var(--opx-red),var(--opx-orange),var(--opx-gold));z-index:0}.opx-scale-step{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;text-align:center;gap:11px}.opx-scale-step span{width:70px;height:70px;display:grid;place-items:center;border-radius:50%;background:#fff;border:2px solid #e4e8ec;color:var(--opx-orange);font-size:1.1rem;font-weight:850;box-shadow:0 10px 28px rgba(7,17,29,.08)}.opx-scale-step.final span{color:#fff;border-color:transparent;background:linear-gradient(135deg,var(--opx-red),var(--opx-orange));box-shadow:0 12px 32px rgba(242,124,45,.26)}.opx-scale-step strong{font-size:11px}.opx-application-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:9px;margin-top:55px}
.opx-application {
  min-height: 64px;
  padding: 12px 14px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  gap: 9px;

  background: #f7f7f5;

  color: #27313a;

  font-size: 12px;
  line-height: 1.45;
  font-weight: 600;

  border: 1px solid rgba(7, 17, 29, 0.08);

  transition:
    transform 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease;
}

.opx-application svg {
  flex: 0 0 auto;

  color: var(--orange);

  font-size: 16px;
  min-width: 16px;
}

.opx-application:hover {
  transform: translateY(-3px);

  background: #ffffff;

  box-shadow:
    0 10px 24px rgba(7, 17, 29, 0.08);
}
        .opx-principles{padding:112px 0;background:linear-gradient(135deg,#06101d,#0b2a47);overflow:hidden}.opx-principle-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:14px}.opx-principle-card{position:relative;min-width:0;min-height:300px;padding:25px 22px;border-radius:24px;background:rgba(255,255,255,.045);border:1px solid rgba(255,255,255,.08);color:#fff;overflow:hidden}.opx-principle-card.featured{background:linear-gradient(160deg,rgba(242,124,45,.17),rgba(255,255,255,.04));border-color:rgba(242,124,45,.25)}.opx-principle-card>span{color:rgba(255,255,255,.18);font-size:2rem;font-weight:850}.opx-principle-card>div{width:52px;height:52px;display:grid;place-items:center;margin:28px 0 18px;border-radius:16px;background:rgba(242,124,45,.1);color:#ff9a53;font-size:23px}.opx-principle-card h3{font-size:1.28rem;font-weight:800;margin:0 0 10px}.opx-principle-card p{color:rgba(255,255,255,.58);font-size:.86rem;line-height:1.62;margin:0}.opx-principle-card>i{position:absolute;left:22px;bottom:22px;width:34px;height:3px;background:linear-gradient(90deg,var(--opx-orange),var(--opx-gold));border-radius:4px}

        .opx-backbone{padding:112px 0;background:#fff}.opx-backbone-layout{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:75px;align-items:center}.opx-backbone-flow{display:flex;align-items:center;gap:9px;margin-top:26px;flex-wrap:wrap}.opx-backbone-flow>div{padding:10px 12px;border-radius:10px;background:#f4f6f8;border:1px solid var(--opx-line);font-size:10px;font-weight:800}.opx-backbone-flow>svg{color:var(--opx-orange)}.opx-backbone-stack{position:relative;display:grid;gap:12px;padding-left:24px}.opx-backbone-rail{position:absolute;left:7px;top:10%;bottom:10%;width:3px;transform-origin:top;background:linear-gradient(180deg,var(--opx-gold),var(--opx-orange),var(--opx-red));border-radius:3px}.opx-stack-layer{position:relative;min-width:0;display:grid;grid-template-columns:42px 48px minmax(0,1fr) 8px;align-items:center;gap:12px;padding:18px;border-radius:18px;background:#f8fafc;border:1px solid var(--opx-line)}.opx-stack-layer.active{background:linear-gradient(135deg,#07111d,#12385c);border-color:transparent;box-shadow:0 20px 42px rgba(7,17,29,.18)}.opx-stack-layer>span{font-size:10px;font-weight:850;color:var(--opx-orange)}.opx-stack-layer>div{width:44px;height:44px;display:grid;place-items:center;border-radius:12px;background:#fff;color:var(--opx-orange);box-shadow:0 8px 20px rgba(7,17,29,.06)}.opx-stack-layer h3{font-size:13px;margin:0 0 4px;font-weight:800}.opx-stack-layer p{font-size:10.5px;line-height:1.45;margin:0;color:var(--opx-text)}.opx-stack-layer.active h3{color:#fff}.opx-stack-layer.active p{color:rgba(255,255,255,.56)}.opx-stack-layer>i{width:7px;height:7px;border-radius:50%;background:#4cd893;box-shadow:0 0 0 6px rgba(76,216,147,.1)}

        .opx-change{padding:30px 0 110px;background:#fff}.opx-change-panel{display:grid;grid-template-columns:minmax(0,1fr) minmax(430px,.85fr);gap:45px;align-items:center;padding:48px;border-radius:34px;background:linear-gradient(135deg,#fff7f0,#fff 54%,#f4f8fb);border:1px solid rgba(242,124,45,.12);box-shadow:0 28px 70px rgba(7,17,29,.08);overflow:hidden}.opx-change-visual{position:relative;min-height:390px}.opx-change-lottie{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:230px;height:230px}.change-tag{position:absolute;padding:10px 13px;border-radius:999px;background:#fff;border:1px solid rgba(242,124,45,.16);box-shadow:0 10px 28px rgba(7,17,29,.08);color:#8b3d17;font-size:10px;font-weight:800;white-space:nowrap}.tag-1{left:3%;top:9%}.tag-2{right:3%;top:15%}.tag-3{left:0;top:47%}.tag-4{right:0;top:48%}.tag-5{left:7%;bottom:8%}.tag-6{right:4%;bottom:7%}

        .opx-final{position:relative;min-height:520px;padding:100px 30px;display:flex;align-items:center;justify-content:center;text-align:center;overflow:hidden;background:linear-gradient(135deg,#04101c,#071a2c 52%,#0b3152);color:#fff}.opx-final-glow{position:absolute;width:480px;height:480px;border-radius:50%;background:radial-gradient(circle,rgba(242,124,45,.23),transparent 68%);filter:blur(28px)}.opx-final-content{position:relative;z-index:2;max-width:900px}.opx-final-brand{font-size:clamp(2.4rem,4vw,4rem);font-weight:850;letter-spacing:-.055em;margin-bottom:16px}.opx-final-brand b{color:#f1452f}.opx-final h2{font-size:clamp(2rem,3.6vw,3.6rem);line-height:1.12;margin:0;font-weight:760;letter-spacing:-.04em}.opx-final p{max-width:670px;margin:18px auto 0;color:rgba(255,255,255,.65);font-size:1rem;line-height:1.75}.opx-final-tags{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin:27px 0}.opx-final-tags span{padding:8px 12px;border-radius:999px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.045);font-size:9px;font-weight:800;letter-spacing:.5px}.opx-final button{margin:0 auto;color:#fff}

        @keyframes opxSpin{to{transform:rotate(360deg)}}
        @keyframes opxNodeMove{0%,100%{transform:translateY(0);opacity:.55}50%{transform:translateY(-8px);opacity:1}}
        @keyframes opxBarPulse{0%,100%{transform:scaleY(.78);opacity:.55}50%{transform:scaleY(1);opacity:1}}
        @keyframes opxMarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}

        @media (max-width: 1280px) {
          .opx-container{width:min(1180px,calc(100% - 48px))}
          .opx-hero-layout{grid-template-columns:minmax(0,.92fr) minmax(470px,1.08fr);gap:40px}
          .opx-live-map{min-height:470px}.opx-live-node{width:150px}.opx-live-node strong{font-size:9.8px}.opx-live-node small{font-size:8px}.opx-core-anchor{width:172px;height:172px}
          .opx-principle-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.opx-principle-card:nth-child(4),.opx-principle-card:nth-child(5){min-height:260px}
        }

        @media (max-width: 1080px) {
          .opx-hero{min-height:auto;padding:118px 0 76px}.opx-hero-layout{grid-template-columns:1fr;gap:56px}.opx-hero-copy{max-width:850px}.opx-live-map-wrap{width:min(680px,100%);margin:0 auto}.opx-live-map{min-height:0;aspect-ratio:600/520}
          .opx-capability-track{grid-template-columns:repeat(2,minmax(0,1fr))}.opx-capability-line{display:none}
          .opx-config-layout,.opx-open-layout,.opx-backbone-layout{grid-template-columns:1fr;gap:48px}.opx-config-copy,.opx-open-copy,.opx-backbone-copy{max-width:820px}
          .opx-ai-layout{grid-template-columns:1fr;gap:44px}.opx-ai-core{width:min(390px,100%);margin:0 auto}.opx-ai-grid{grid-template-columns:repeat(3,minmax(0,1fr))}
          .opx-application-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.opx-change-panel{grid-template-columns:1fr}.opx-change-visual{min-height:360px}
        }

        @media (max-width: 820px) {
          .opx-container{width:min(100% - 32px,760px)}
          .opx-hero{padding:104px 0 64px}.opx-hero h1{font-size:clamp(2.35rem,8vw,3.35rem)}.opx-hero-lead{font-size:.98rem;line-height:1.72}.opx-hero-features{gap:7px}.opx-hero-features div{font-size:10px}
          .opx-live-map{aspect-ratio:auto;min-height:500px;border-radius:28px}.opx-live-node{width:138px;padding:9px}.opx-node-lottie{width:40px;height:40px;flex-basis:40px}.opx-core-anchor{width:158px;height:158px}.opx-core-lottie{width:80px;height:80px}
          .opx-philosophy,.opx-modules,.opx-config,.opx-connect,.opx-open,.opx-ai,.opx-scale,.opx-principles,.opx-backbone{padding:86px 0}
          .opx-section-head{margin-bottom:34px}.opx-section-head h2,.opx-config-copy h2,.opx-open-copy h2,.opx-ai-copy h2,.opx-backbone-copy h2,.opx-change-copy h2{font-size:clamp(1.9rem,6.4vw,2.6rem)}
          .opx-module-grid{grid-template-columns:1fr}.opx-module-message{grid-template-columns:40px minmax(0,1fr)}.opx-module-message button{grid-column:1/-1;width:100%}
          .opx-protocol-grid{grid-template-columns:1fr}.opx-ai-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
          .opx-scale-track{grid-template-columns:repeat(4,minmax(0,1fr));row-gap:28px}.opx-scale-line{display:none}.opx-principle-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.opx-principle-card{min-height:270px}
          .opx-change-panel{padding:32px}.opx-change{padding-bottom:86px}
        }

        @media (max-width: 600px) {
          .opx-container{width:calc(100% - 28px)}
          .opx-intro-logo{font-size:clamp(3rem,18vw,5.2rem)}.opx-intro-line{width:82vw}.opx-intro-sub{font-size:8px;letter-spacing:1.8px!important;padding:0 18px}
          .opx-hero{padding:92px 0 52px}.opx-eyebrow{font-size:9px;letter-spacing:1.5px}.opx-hero h1{margin-top:16px;font-size:clamp(2.05rem,10.6vw,2.8rem);line-height:1.08}.opx-hero-actions{display:grid;grid-template-columns:1fr}.opx-primary-btn,.opx-secondary-btn{width:100%;min-height:48px}.opx-hero-features{grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;margin-top:22px}.opx-hero-features div{font-size:8.6px;gap:4px;justify-content:center;text-align:center}.opx-hero-features svg{font-size:11px}
          .opx-live-label{margin-right:auto}.opx-live-map{min-height:440px}.opx-live-node{width:116px;min-height:62px;border-radius:14px;padding:7px;gap:5px}.opx-node-lottie{width:31px;height:31px;flex-basis:31px}.opx-live-node strong{font-size:8.3px}.opx-live-node small{display:none}.node-a{left:3%;top:5%}.node-b{right:3%;top:5%}.node-c{left:3%;bottom:5%}.node-d{right:3%;bottom:5%}.opx-core-anchor{width:142px;height:142px}.opx-core-lottie{width:72px;height:72px}.opx-core-brand{font-size:17px}.opx-live-status{width:100%;text-align:center}
          .opx-philosophy,.opx-modules,.opx-config,.opx-connect,.opx-open,.opx-ai,.opx-scale,.opx-principles,.opx-backbone{padding:68px 0}.opx-section-head>span,.opx-config-copy>span,.opx-open-copy>span,.opx-ai-copy>span,.opx-backbone-copy>span,.opx-change-copy>span{font-size:9px;letter-spacing:1.6px}.opx-section-head p,.opx-config-copy>p,.opx-open-copy>p,.opx-ai-copy>p,.opx-backbone-copy>p,.opx-change-copy>p{font-size:.94rem;line-height:1.68}
          .opx-capability-track{grid-template-columns:1fr}.opx-capability-card{min-height:0;padding:22px}.opx-capability-card h3{font-size:1.35rem}
          .opx-module-card{padding:21px;border-radius:22px}.opx-module-top{grid-template-columns:minmax(0,1fr) 82px;gap:10px}.opx-module-lottie-shell{width:80px;height:80px;border-radius:18px}.opx-module-card h3{font-size:1.28rem}.opx-module-items{grid-template-columns:1fr}.opx-module-item{min-height:52px}.opx-module-item strong{font-size:11px}.opx-module-message{padding:18px}
          .opx-config-list{padding:8px}.opx-config-row{grid-template-columns:26px 18px minmax(0,1fr);min-height:44px}.opx-config-row>b{display:none}.opx-config-row strong{font-size:10px}.opx-config-highlight{padding:16px}
          .opx-connect-stage{min-height:430px;border-radius:24px}.opx-connect-core{width:190px;height:190px}.opx-connect-core-ring{inset:-18px}.opx-connect-lottie{width:105px;height:105px;top:20px}.opx-connect-core>div:last-child{font-size:19px;bottom:29px}.opx-marquee span{font-size:9px;padding:9px 11px}
          .opx-protocol-head strong{display:none}.opx-protocol-item{padding:14px 11px}.opx-protocol-item strong{font-size:10px}
          .opx-ai-core{min-height:320px}.opx-ai-orbit.orbit-one{width:250px;height:250px}.opx-ai-orbit.orbit-two{width:290px;height:290px}.opx-ai-lottie-wrap{width:155px;height:155px}.opx-ai-grid{grid-template-columns:1fr}.opx-ai-card{min-height:74px}.opx-ai-card p{font-size:11.5px}
          .opx-scale-track{grid-template-columns:repeat(2,minmax(0,1fr));gap:24px 12px}.opx-scale-step span{width:58px;height:58px}.opx-application-grid{grid-template-columns:1fr 1fr}.opx-application-grid>div{font-size:9.5px;padding:10px}.opx-principle-grid{grid-template-columns:1fr}.opx-principle-card{min-height:240px;padding:22px}.opx-backbone-stack{padding-left:18px}.opx-stack-layer{grid-template-columns:36px 40px minmax(0,1fr);padding:14px;gap:9px}.opx-stack-layer>i{display:none}.opx-stack-layer>div{width:38px;height:38px}.opx-stack-layer p{font-size:9.5px}.opx-backbone-flow{gap:6px}.opx-backbone-flow>div{font-size:8.5px;padding:8px}.opx-backbone-flow>svg{font-size:11px}
          .opx-change{padding:12px 0 68px}.opx-change-panel{padding:22px;border-radius:24px}.opx-change-visual{min-height:360px}.opx-change-lottie{width:180px;height:180px}.change-tag{font-size:8.5px;padding:8px 10px}.tag-1{left:0}.tag-2{right:0}.tag-3{left:0}.tag-4{right:0}.tag-5{left:0}.tag-6{right:0}
          .opx-final{min-height:500px;padding:78px 20px}.opx-final p{font-size:.94rem}.opx-final-tags{gap:6px}.opx-final-tags span{font-size:8px;padding:7px 9px}.opx-final button{width:100%;max-width:320px;min-height:48px}
        }

        @media (max-width: 390px) {
          .opx-container{width:calc(100% - 22px)}
          .opx-live-map{min-height:405px}.opx-live-node{width:104px}.opx-node-lottie{width:28px;height:28px;flex-basis:28px}.opx-live-node strong{font-size:7.7px}.opx-core-anchor{width:128px;height:128px}.opx-core-lottie{width:62px;height:62px}.opx-core-brand{font-size:15px}.opx-core small{font-size:6.7px}.opx-hero-features div{font-size:7.7px}
          .opx-module-top{grid-template-columns:minmax(0,1fr) 70px}.opx-module-lottie-shell{width:68px;height:68px}.opx-module-card p{font-size:.84rem}.opx-application-grid{grid-template-columns:1fr}.opx-change-visual{min-height:340px}.change-tag{font-size:7.8px}
        }


        /* ==========================================================
           READABILITY / TYPOGRAPHY PASS
           Montserrat only, larger body text, calmer font weights.
           ========================================================== */

        .opx-page {
          font-family: "Montserrat" !important;
          font-size: 16px;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .opx-page * {
          font-family: "Montserrat" !important;
        }

        .opx-page h1,
        .opx-page h2,
        .opx-page h3,
        .opx-page h4,
        .opx-page h5,
        .opx-page h6 {
          text-wrap: balance;
        }

        .opx-hero h1 {
          font-size: clamp(3rem, 4.6vw, 5rem) !important;
          font-weight: 650 !important;
          line-height: 1.07 !important;
          letter-spacing: -.034em !important;
        }

        .opx-hero-lead {
          font-size: clamp(1.08rem, 1.28vw, 1.24rem) !important;
          line-height: 1.78 !important;
          font-weight: 450 !important;
          color: rgba(255,255,255,.78) !important;
        }

        .opx-eyebrow,
        .opx-section-head > span,
        .opx-config-copy > span,
        .opx-open-copy > span,
        .opx-ai-copy > span,
        .opx-backbone-copy > span,
        .opx-change-copy > span {
          font-size: 12px !important;
          font-weight: 650 !important;
          letter-spacing: 1.8px !important;
        }

        .opx-primary-btn,
        .opx-secondary-btn,
        .opx-module-message button,
        .opx-final button {
          font-size: 14px !important;
          font-weight: 650 !important;
        }

        .opx-hero-features div {
          font-size: 13px !important;
          font-weight: 550 !important;
          white-space: normal !important;
          line-height: 1.35 !important;
        }

        .opx-live-label {
          font-size: 11.5px !important;
          font-weight: 650 !important;
        }

        .opx-core-brand {
          font-size: 22px !important;
          font-weight: 700 !important;
        }

        .opx-core small {
          font-size: 9.5px !important;
          font-weight: 500 !important;
        }

        .opx-live-node strong {
          font-size: 12px !important;
          font-weight: 650 !important;
        }

        .opx-live-node small {
          font-size: 10px !important;
          line-height: 1.4 !important;
        }

        .opx-live-status span {
          font-size: 9.5px !important;
          font-weight: 600 !important;
        }

        .opx-live-status strong {
          font-size: 13px !important;
          font-weight: 650 !important;
        }

        .opx-section-head h2,
        .opx-config-copy h2,
        .opx-open-copy h2,
        .opx-ai-copy h2,
        .opx-backbone-copy h2,
        .opx-change-copy h2 {
          font-size: clamp(2.25rem, 3.5vw, 3.55rem) !important;
          line-height: 1.13 !important;
          letter-spacing: -.026em !important;
          font-weight: 650 !important;
        }

        .opx-section-head p,
        .opx-config-copy > p,
        .opx-open-copy > p,
        .opx-ai-copy > p,
        .opx-backbone-copy > p,
        .opx-change-copy > p {
          font-size: clamp(1.02rem, 1.15vw, 1.14rem) !important;
          line-height: 1.78 !important;
          font-weight: 450 !important;
        }

        .opx-capability-top > span,
        .opx-principle-card > span {
          font-weight: 700 !important;
        }

        .opx-capability-card h3 {
          font-size: 1.6rem !important;
          font-weight: 650 !important;
        }

        .opx-capability-card p {
          font-size: 1rem !important;
          line-height: 1.7 !important;
          font-weight: 450 !important;
        }

        .opx-chip-row span {
          font-size: 11px !important;
          font-weight: 600 !important;
        }

        .opx-module-number {
          font-size: 11px !important;
          font-weight: 650 !important;
        }

        .opx-module-card h3 {
          font-size: 1.65rem !important;
          font-weight: 650 !important;
        }

        .opx-module-card p {
          font-size: 1rem !important;
          line-height: 1.68 !important;
          font-weight: 450 !important;
        }

        .opx-module-item strong {
          font-size: 13.5px !important;
          line-height: 1.48 !important;
          font-weight: 550 !important;
        }

        .opx-module-message strong {
          font-size: 16px !important;
          font-weight: 650 !important;
        }

        .opx-module-message span {
          font-size: 14px !important;
          line-height: 1.55 !important;
        }

        .opx-console-bar,
        .opx-protocol-head {
          font-size: 11px !important;
          font-weight: 600 !important;
        }

        .opx-config-row > span,
        .opx-config-row b {
          font-size: 9.5px !important;
          font-weight: 600 !important;
        }

        .opx-config-row strong {
          font-size: 13.5px !important;
          line-height: 1.45 !important;
          font-weight: 550 !important;
        }

        .opx-config-highlight strong {
          font-size: 16px !important;
          font-weight: 650 !important;
        }

        .opx-config-highlight p {
          font-size: 14.5px !important;
          line-height: 1.65 !important;
        }

        .opx-marquee span {
          font-size: 12px !important;
          font-weight: 550 !important;
        }

        .opx-connect-core > div:last-child {
          font-size: 24px !important;
          font-weight: 700 !important;
        }

        .opx-connect-core small {
          font-size: 9px !important;
          font-weight: 500 !important;
        }

        .opx-vendor-note {
          font-size: 13px !important;
          font-weight: 600 !important;
        }

        .opx-protocol-head strong {
          font-size: 10px !important;
          font-weight: 600 !important;
        }

        .opx-protocol-item > span {
          font-size: 10.5px !important;
          font-weight: 600 !important;
        }

        .opx-protocol-item strong {
          font-size: 13.5px !important;
          line-height: 1.4 !important;
          font-weight: 550 !important;
        }

        .opx-ai-pipeline > div {
          font-size: 12px !important;
          font-weight: 600 !important;
        }

        .opx-ai-core h3 {
          font-size: 1.6rem !important;
          font-weight: 650 !important;
        }

        .opx-ai-core p {
          font-size: 12.5px !important;
          line-height: 1.5 !important;
        }

        .opx-ai-core > span {
          font-size: 10px !important;
          font-weight: 600 !important;
        }

        .opx-ai-card > span {
          font-size: 10.5px !important;
          font-weight: 600 !important;
        }

        .opx-ai-card p {
          font-size: 13.5px !important;
          line-height: 1.52 !important;
          font-weight: 500 !important;
        }

        .opx-scale-step span {
          font-weight: 700 !important;
        }

        .opx-scale-step strong {
          font-size: 13px !important;
          line-height: 1.4 !important;
          font-weight: 600 !important;
        }

        .opx-application-grid > div {
          font-size: 13px !important;
          line-height: 1.45 !important;
          font-weight: 500 !important;
        }

        .opx-principle-card h3 {
          font-size: 1.42rem !important;
          font-weight: 650 !important;
        }

        .opx-principle-card p {
          font-size: .98rem !important;
          line-height: 1.7 !important;
          font-weight: 450 !important;
        }

        .opx-backbone-flow > div {
          font-size: 12px !important;
          font-weight: 600 !important;
        }

        .opx-stack-layer > span {
          font-size: 11px !important;
          font-weight: 650 !important;
        }

        .opx-stack-layer h3 {
          font-size: 15px !important;
          line-height: 1.4 !important;
          font-weight: 650 !important;
        }

        .opx-stack-layer p {
          font-size: 13px !important;
          line-height: 1.55 !important;
          font-weight: 450 !important;
        }

        .change-tag {
          font-size: 11.5px !important;
          font-weight: 600 !important;
        }

        .opx-final-brand {
          font-weight: 700 !important;
        }

        .opx-final h2 {
          font-size: clamp(2.2rem, 3.8vw, 3.75rem) !important;
          font-weight: 650 !important;
        }

        .opx-final p {
          font-size: 1.08rem !important;
          line-height: 1.75 !important;
        }

        .opx-final-tags span {
          font-size: 11px !important;
          font-weight: 550 !important;
        }

        @media (max-width: 820px) {
          .opx-page { font-size: 15.5px; }
          .opx-hero h1 { font-size: clamp(2.45rem, 7.9vw, 3.45rem) !important; }
          .opx-hero-lead { font-size: 1.04rem !important; }
          .opx-section-head h2,
          .opx-config-copy h2,
          .opx-open-copy h2,
          .opx-ai-copy h2,
          .opx-backbone-copy h2,
          .opx-change-copy h2 { font-size: clamp(2rem, 6.3vw, 2.75rem) !important; }
          .opx-module-item strong { font-size: 13px !important; }
          .opx-stack-layer p { font-size: 12.5px !important; }
        }

        @media (max-width: 600px) {
          .opx-page { font-size: 15px; }
          .opx-intro-logo { font-weight: 700 !important; }
          .opx-intro-middle { font-weight: 600 !important; }
          .opx-intro-sub { font-size: 9.5px !important; font-weight: 550 !important; }

          .opx-hero h1 {
            font-size: clamp(2.25rem, 10.3vw, 2.95rem) !important;
            line-height: 1.1 !important;
          }
          .opx-hero-lead { font-size: 1rem !important; line-height: 1.72 !important; }
          .opx-eyebrow { font-size: 10px !important; }
          .opx-hero-features div { font-size: 10.5px !important; }

          .opx-live-node strong { font-size: 9.5px !important; }
          .opx-live-node small { display: none !important; }
          .opx-core-brand { font-size: 18px !important; }
          .opx-core small { font-size: 8px !important; }

          .opx-section-head > span,
          .opx-config-copy > span,
          .opx-open-copy > span,
          .opx-ai-copy > span,
          .opx-backbone-copy > span,
          .opx-change-copy > span { font-size: 10px !important; }

          .opx-section-head p,
          .opx-config-copy > p,
          .opx-open-copy > p,
          .opx-ai-copy > p,
          .opx-backbone-copy > p,
          .opx-change-copy > p { font-size: .98rem !important; }

          .opx-capability-card h3 { font-size: 1.42rem !important; }
          .opx-capability-card p { font-size: .97rem !important; }
          .opx-module-card h3 { font-size: 1.38rem !important; }
          .opx-module-card p { font-size: .96rem !important; }
          .opx-module-item strong { font-size: 12.5px !important; }
          .opx-config-row strong { font-size: 12px !important; }
          .opx-marquee span { font-size: 10.5px !important; }
          .opx-protocol-item strong { font-size: 12.5px !important; }
          .opx-ai-card p { font-size: 12.5px !important; }
          .opx-scale-step strong { font-size: 12px !important; }
          .opx-application-grid > div { font-size: 11.5px !important; }
          .opx-principle-card p { font-size: .94rem !important; }
          .opx-stack-layer h3 { font-size: 13.5px !important; }
          .opx-stack-layer p { font-size: 11.5px !important; }
          .opx-backbone-flow > div { font-size: 10px !important; }
          .change-tag { font-size: 9.5px !important; }
          .opx-final p { font-size: 1rem !important; }
          .opx-final-tags span { font-size: 9.5px !important; }
        }

        @media (max-width: 390px) {
          .opx-hero-features div { font-size: 9.4px !important; }
          .opx-live-node strong { font-size: 8.8px !important; }
          .opx-core-brand { font-size: 16px !important; }
          .opx-module-item strong { font-size: 12px !important; }
          .opx-stack-layer p { font-size: 11px !important; }
          .change-tag { font-size: 9px !important; }
        }

        /* ============================================================
   SCALE APPLICATION CARDS - FINAL READABILITY FIX
============================================================ */

.opx-application-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
  margin-top: 55px;
}

.opx-application {
  min-width: 0;
  min-height: 70px;

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 13px 15px;

  border-radius: 12px;

  background: #f5f6f7;
  border: 1px solid rgba(7, 17, 29, 0.1);

  color: #26323d;

  font-size: 13px !important;
  line-height: 1.45;
  font-weight: 600 !important;

  transition:
    transform 0.28s ease,
    border-color 0.28s ease,
    background 0.28s ease,
    box-shadow 0.28s ease;
}

.opx-application span {
  min-width: 0;
  color: #26323d;

  font-size: 13px !important;
  line-height: 1.45;
  font-weight: 600 !important;
}

.opx-application svg {
  flex: 0 0 auto;

  width: 17px;
  height: 17px;

  color: var(--opx-orange);
}

.opx-application:hover {
  transform: translateY(-4px);

  background: #ffffff;

  border-color: rgba(242, 124, 45, 0.3);

  box-shadow:
    0 12px 28px rgba(7, 17, 29, 0.09);
}


/* ================= SMALL LAPTOP ================= */

@media (max-width: 1080px) {
  .opx-application-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 11px;
  }

  .opx-application,
  .opx-application span {
    font-size: 13px !important;
  }
}


/* ================= TABLET ================= */

@media (max-width: 820px) {
  .opx-application-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 11px;
  }

  .opx-application {
    min-height: 68px;
    padding: 12px 13px;
  }

  .opx-application,
  .opx-application span {
    font-size: 12.5px !important;
  }

  .opx-application svg {
    width: 16px;
    height: 16px;
  }
}


/* ================= MOBILE ================= */

@media (max-width: 600px) {
  .opx-application-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    margin-top: 38px;
  }

  .opx-application {
    min-height: 70px;

    padding: 12px 11px;

    gap: 8px;

    border-radius: 11px;
  }

  .opx-application,
  .opx-application span {
    color: #202b35;

    font-size: 12px !important;
    line-height: 1.42;
    font-weight: 600 !important;
  }

  .opx-application svg {
    width: 16px;
    height: 16px;
    flex: 0 0 16px;
  }
}


/* ================= VERY SMALL MOBILE ================= */

@media (max-width: 390px) {
  .opx-application-grid {
    grid-template-columns: 1fr;
    gap: 9px;
  }

  .opx-application {
    min-height: 58px;

    padding: 11px 13px;
  }

  .opx-application,
  .opx-application span {
    font-size: 12px !important;
  }
}
      `}</style>
    </main>
  );
};

export default OperateXPlatform;
