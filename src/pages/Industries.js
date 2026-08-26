
import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion,  useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
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
const RevealSection = ({ children }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    margin: "-100px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.98,
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 80,
        scale: isInView ? 1 : 0.98,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

const Industries = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const industryImages = [ auto1, auto2, auto3, autoan1, autoan2, autoan3, cons1, cons2, cons3, food1, food2, food3, pharm1, pharm2, pharm3, meta1, meta2, meta3, proc1, proc2, proc3, infra1, infra2, infra3];

const [visibleImages, setVisibleImages] = useState([0, 1, 2, 3]);

const nextBatchStartRef = useRef(4);
const timeoutRefs = useRef([]);
const intervalRef = useRef(null);

useEffect(() => {
  const INITIAL_HOLD_TIME = 1000;
  const STAGGER_TIME = 1000;
  const POSITIONS = 4;

  const clearAllTimers = () => {
    timeoutRefs.current.forEach((timer) => clearTimeout(timer));
    timeoutRefs.current = [];

    if (intervalRef.current) {
      clearTimeout(intervalRef.current);
      intervalRef.current = null;
    }
  };
  

  const runCycle = (isFirstCycle = false) => {
    timeoutRefs.current.forEach((timer) => clearTimeout(timer));
    timeoutRefs.current = [];

    const startDelay = isFirstCycle ? INITIAL_HOLD_TIME : 0;

    for (let position = 0; position < POSITIONS; position++) {
      const nextImageIndex =
        (nextBatchStartRef.current + position) % industryImages.length;

      const timer = setTimeout(() => {
        setVisibleImages((prev) => {
          const updated = [...prev];
          updated[position] = nextImageIndex;
          return updated;
        });
      }, startDelay + position * STAGGER_TIME);

      timeoutRefs.current.push(timer);
    }

    nextBatchStartRef.current =
      (nextBatchStartRef.current + POSITIONS) % industryImages.length;

    intervalRef.current = setTimeout(() => {
      runCycle(false);
    }, startDelay + POSITIONS * STAGGER_TIME);
  };

  runCycle(true);

  return () => {
    clearAllTimers();
  };
}, []);


  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

const autoImages = [auto1, auto2, auto3];

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % autoImages.length);
  }, 1500);

  return () => clearInterval(interval);
}, [autoImages.length]);
  return (
    <>
      {/* HERO SECTION */}
      <RevealSection>
      <section

      style={{
  minHeight: "90vh",
  padding: "120px 0 90px",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",

   background: `
    radial-gradient(circle at 75% 20%, rgba(242,124,45,0.18) 0%, transparent 30%),
    radial-gradient(circle at 25% 80%, rgba(0,91,187,0.15) 0%, transparent 35%),
    linear-gradient(
      115deg,
      #020814 0%,
      #031326 35%,
      #071D38 70%,
      #0A2547 100%
    )
  
  `,
}}
  >

    <div
  style={{
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    zIndex: 0,
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
    zIndex: 0,
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

<div
  style={{
    position: "absolute",
    right: "6%",
    top: "78%",
    transform: "translateY(-70%)",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow:
      "0 0 120px rgba(240, 245, 250, 0.18), inset 0 0 150px rgba(213, 155, 117, 0.08)",
    zIndex: 0,
  }}
/>
<div
  style={{
    position: "absolute",
    right: "37%",
    top: "30%",
    transform: "translateY(-50%)",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow:
      "0 0 120px rgba(240, 245, 250, 0.18), inset 0 0 150px rgba(213, 155, 117, 0.08)",
    zIndex: 0,
  }}
/>

{/* Main streak */}
<motion.div
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
    transform: "rotate(-35deg)",
    filter: "blur(45px)",
    zIndex: 0,
  }}
/>

{/* Secondary faint streak */}
<motion.div
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
    transform: "rotate(-35deg)",
    filter: "blur(30px)",
    zIndex: 0,
  }}
/>


{Array.from({ length: 12 }).map((_, i) => (
  <motion.div
    key={i}
    animate={{
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      opacity: [0.2, 0.8, 0.2],
    }}
    transition={{
      duration: 8 + i * 0.8,
      repeat: Infinity,
      ease: "linear",
    }}
    style={{
      position: "absolute",
      width: "6px",
      height: "6px",
      borderRadius: "50%",
      background: "rgba(219,153,65,0.8)",

      left: `${10 + i * 7}%`,
      top: `${20 + (i % 4) * 18}%`,

      boxShadow: "0 0 15px rgba(219,153,65,0.5)",
      zIndex: 0,
    }}
  />
))}


 


  

 

{/*<div
  style={{
    position: "absolute",
    top: "50%",
    left: "70%",
    transform: "translate(-50%, -50%)",
    width: "600px",
    height: "600px",
    borderRadius: "50%",
    border: "1px solid rgba(242,124,45,0.08)",
    zIndex: 0,
  }}
/>*/}

  <div
    style={{
      maxWidth: "1300px",
      marginBottom: "20px",
      paddingLeft: "20px",
paddingRight: "20px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "100px",
      flexWrap: "wrap",
      position: "relative",
      zIndex: 1,
    }}
  >
    {/* LEFT CONTENT */}
    <div style={{ flex: "1 1 500px", position: "relative" }}>
      <div style={{ marginBottom: "20px" }}>
        <span
  style={{
               color: "#DB9941",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "1.8px",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
        >
          INDUSTRIES
        </span>
      </div>

      <h1
        style={{
          fontSize: "46px",
          fontWeight: "700",
          color: "var(--tv-light)",
          marginBottom: "20px",
          lineHeight: "1.2",
        }}
      >
        Engineering Expertise Across{" "}
        <span style={{ color: "#f27c2d" }}>
          Critical Industries
        </span>
      </h1>

      <p
        style={{
          fontSize: "1rem",
          lineHeight: 1.78,
          color: "#ffff",
          maxWidth: "760px",
          marginBottom: "14px",
        }}
      >
        ThetaVega delivers industry-specific automation and digital solutions
        tailored to the unique challenges of each sector.
      </p>

      <p
        style={{
          fontSize: "1rem",
          lineHeight: 1.78,
          color: "#ffff",
          maxWidth: "760px",
          marginBottom: "14px",
        }}
      >
        Our strength lies in combining deep process understanding + advanced
        engineering + digital intelligence to create scalable, high-performance
        systems.
      </p>

      <p
        style={{
          fontSize: "1rem",
          lineHeight: 1.78,
          color: "#ffff",
          maxWidth: "760px",
          marginBottom: "14px",
        }}
      >
        From discrete manufacturing to process industries, we enable
        organizations to achieve efficiency, traceability, and operational
        excellence.
      </p>
    </div>
    {/* RIGHT IMAGE PLACEHOLDER */}
<div
  style={{
    flex: "1 1 450px",
    display: "flex",
    justifyContent: "center",
  }}
>
  <div
    style={{
      width: "100%",
      maxWidth: "750px",
      height: "400px",
      borderRadius: "16px",
      background: "transparent",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
    gap: isMobile ? "14px" : "20px",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px",
      fontSize: "14px",
    }}
  >
    {visibleImages.map((imgIndex, index) => (
      <motion.div
  key={index}
  whileHover={{
    rotateX: -6,
    rotateY: index % 2 === 0 ? 8 : -8,
    y: -10,
    scale: 1.03,
  }}
  transition={{
    duration: 0.4,
    ease: "easeOut",
  }}
  style={{
    width: "100%",
    height: "180px",

    borderRadius: "18px",
    overflow: "hidden",

    position: "relative",

    transformStyle: "preserve-3d",

    border: "1px solid rgba(255,255,255,0.12)",

    background:
      "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",

    boxShadow: `
      0 25px 60px rgba(0,0,0,0.35),
      0 8px 20px rgba(0,91,187,0.15),
      inset 0 1px 0 rgba(255,255,255,0.15)
    `,
  }}
>
       <AnimatePresence initial={false}>
  <motion.img
    key={`${index}-${imgIndex}`}
    src={industryImages[imgIndex]}
    alt={`Industry ${imgIndex + 1}`}
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
      ease: [0.25, 0.8, 0.25, 1],
    }}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "16px",
      position: "absolute",
      inset: 0,
      display: "block",
      background: "transparent",
    }}
  />
</AnimatePresence>

<motion.div
  animate={{
    y: [0, -8, 0],
  }}
  whileHover={{
    rotateX: -6,
    rotateY: 8,
    y: -12,
    scale: 1.03,
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
></motion.div>
      </motion.div>
    ))}
  </div>
</div>
  </div>
</section>
</RevealSection>
      {/* AUTOMOTIVE SECTION */}
      <div
  style={{
    textAlign: "center",
    

  }}
>
  <span
  style={{
    display: "block",
    color: "#f27c2d",
    fontWeight: 700,
    letterSpacing: "2px",
    textTransform: "uppercase",
    marginBottom: "0px",
    fontSize: "14px",
     marginTop:"50px",
  }}
>
  Sector Expertise
</span>
  <p
  style={{
    display: "inline-block",
    fontSize: "20px",
    fontWeight: 700,
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#090604",
    marginBottom: "0px", 
    marginTop:"10px",
       
    textAlign: "center",
    
  }}
>
  Solutions Built for Industry We Serve
</p>
</div>

      {/* ================= INDUSTRIES CONTENT ================= */}

{[
  {
    title: "Automotive & EV",
    cards: [
      {
        img: [auto1, auto2, auto3],
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
         " Hero MotoCorp – Engine assembly traceability ",
           "Bajaj Auto – Smart indexing & process control ",
            "Ather Energy – EV cell line automation ",


        ],


      },
    ],
  },

  {
    title: "Auto Ancillaries",
    cards: [
      {
        img: [autoan1, autoan2, autoan3],
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
         "GNA Enterprises – Wheel sorting & inspection ",
        "Tier-1 suppliers – CNC monitoring & analytics ",



        ],


      },
    ],
  },

  {
    title: "Consumer Durables",
    cards: [
      {
        img: [cons1, cons2, cons3],
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
         "Appliance manufacturers – Assembly automation ",
        " Electronics OEMs – Inspection & traceability ",
         ],
        },


    ],
  },

  {
  title: "Food & Beverage",
  cards: [
    {
      img: [food1,food2, food3],
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
         "FMCG plants – Packaging automation  ",
        " Food processing units – Utility monitoring  ",
         ],
        },

  ],
},

{
  title: "Pharma & Life Sciences",
  cards: [
    {
      img: [pharm1,pharm2 ,pharm3],

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
         "Pharma companies – Compliance systems ",
        "  Healthcare manufacturing – Monitoring solutions ",
         ],
        },
  ],
},

{
  title: "Metals & Mining",
  cards: [
    {
      img: [meta1, meta2,meta3],
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
         "Steel plants – Process automation ",
        "  Mining units – Conveyor monitoring ",
         ],
        },
  ],
},

{
  title: "Process Industries",
  cards: [
    {
      img: [proc1, proc2,proc3],
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
         "Chemical plants – SCADA systems ",
        "  Oil & gas – Monitoring solutions  ",
         ],
        },
  ],
},

{
  title: "Infrastructure & Utilities",
  cards: [
    {
      img: [infra1, infra2,infra3],
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
         "Industrial solar plants – SCADA systems ",
        "   Commercial infrastructure – BMS solutions  ",
         ],
        },
  ],
},

 ].map((industry, i) => (
  <RevealSection>
  <div
    key={i}
    style={{
      padding: "20px 20px",
      marginBottom: "40px", // space after each section
      background: i % 2 === 0 ? "#ffffff" : "linear-gradient(180deg, #FFFFFF 0%, #FCF7F8 100%)",
    }}
  >


  <motion.div
  key={i}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 0.8,
    ease: [0.25, 0.8, 0.25, 1],
  }}
  style={{
    padding: "30px 30px",
    background: i % 2 === 0 ? "#ffffff" : "linear-gradient(180deg, #FFFFFF 0%, #FCF7F8 100%)",
  }}
>
</motion.div>
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* TITLE */}
      {/* TITLE */}
<div
  style={{
    textAlign: "center",
    marginBottom: "30px",
  }}
>
  <div
    style={{
      display: "inline-block",
      position: "relative",
    }}
  >
    <h2
      style={{
        fontSize: "30px",
        fontWeight: "700",
        marginTop: "0px",
        marginBottom: "80", // 🔥 important (remove extra gap)
        color: "var(--tv-dark)",
      }}
    >
      {industry.title}
    </h2>

    <span
      style={{
        position: "absolute",
        left: "0", // ✅ starts from FIRST LETTER
        bottom: "-10px",
        width: "60px",
        height: "4px",
        background: "linear-gradient(90deg, #f27c2d, #DB9941)",
        borderRadius: "2px",
      }}
    />
  </div>
</div>
      

      {/* SPLIT LAYOUT */}
      <div
        style={{
          display: "flex",
          flexDirection: i % 2 === 0 ? "row" : "row-reverse",
          alignItems: "center",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* IMAGE */}
        <div style={{ flex: "1 1 450px" }}>
          <div
            style={{
              width: "100%",
              height: "380px",
              borderRadius: "18px",
              overflow: "hidden",
              position: "relative",
            }}
          >
          {Array.isArray(industry.cards[0].img) ? industry.cards[0].img.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                style={{
                  position: "absolute",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  opacity: index === currentImage ? 1 : 0,
  transform: index === currentImage ? "scale(1.08)" : "scale(1)",
  transition: "opacity 1s ease-in-out, transform 6s ease",
                 
                }}
              />
            ))
             :(
      <img
        src={industry.cards[0].img}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    )
}
          </div>
        </div>

        {/* CONTENT */}
        <div style={{ flex: "1 1 500px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            {industry.cards.map((card, idx) => (
              <div
                key={idx}
                style={{
                  padding: "20px",
  background:
    idx % 2 === 0
      ? "#FFF9F5"
      : "#FEFCF8",

  borderRadius: "14px",

  borderLeft:
    idx % 2 === 0
      ? "4px solid #AE2C11"
      : "4px solid #DB9941",

  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",

  transition: "all 0.35s ease",
  cursor: "pointer",
                  
                }}
                onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-6px) scale(1.01)";
    e.currentTarget.style.boxShadow =
      "0 18px 35px rgba(0,0,0,0.12)";
  }}

  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow =
      "0 8px 20px rgba(0,0,0,0.05)";
  }}
              >
                <h4
                  style={{
                   color:
      idx % 2 === 0
        ? "#AE2C11"
        : "#7a540a",

    fontSize: "16px",
    fontWeight: "700",
    marginBottom: "12px",
                  }}
                >
                  {card.heading}
                </h4>

                <ul style={{ padding: 0, margin: 0 }}>
                  {card.points.map((p, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: "8px",
                        marginBottom: "6px",
                        fontSize: "13px",
                        color: "#555",
                      }}
                    >
                      <span
                        style={{
                          width: "5px",
                          height: "5px",
                          background: "#f27c2d",
                          borderRadius: "50%",
                          marginTop: "6px",
                        }}
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  </RevealSection>
))}   {/* ✅ MAP CLOSED PROPERLY */}
{/* ================= CTA ================= */}
   
   
     <div
  style={{
    textAlign: "center",
    padding: isMobile ? "30px 18px" : "100px 0",
    color: "#fff",
    background: "linear-gradient(180deg, #07111D 0%, #13263B 100%)",
  
position: "relative",
    overflow: "hidden",

  width: isMobile ? "94%" : "90%",
    maxWidth: "1500px",
    margin: "40px auto",

 padding: "100px 0",
     borderRadius: "20px",

   
   

    border: "1px solid rgba(255,255,255,0.08)",

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
      amount: 0.3,
    }}
    transition={{
      duration: 0.8,
      ease: "easeOut",
    }}
  >
  
   <p
    style={{
      color: "var(--tv-gold)",
      fontWeight: "600",
      fontSize: "14px",
      letterSpacing: "1px",
      marginBottom: "12px",
    }}
  >
    CUSTOMIZED • SCALABLE • INDUSTRY-READY SOLUTIONS
  </p>
  {/* MAIN TITLE */}
  <h2
    style={{
     fontSize: isMobile ? "24px" : "36px",
      fontWeight: "800",
      color: "var(--tv-white)",
      marginBottom: "15px",
    }}
  >
    Built for Your Industry. Engineered for Performance.
  </h2>

  {/* SHORT HIGHLIGHT LINE (IMPORTANT) */}
 

  {/* DESCRIPTION */}
  <p
    style={{
      fontSize: isMobile ? "14px" : "16px",
      padding: isMobile ? "0 12px" : 0,
      color: "var(--tv-white)",
      maxWidth: "650px",
      margin: "0 auto 35px",
      lineHeight: "1.6",
    }}
  >
    No matter your sector, ThetaVega delivers <strong style={{ color: "var(--tv-light)" }}>customized solutions aligned with your operational realities.</strong> 
  </p>

  {/* BUTTONS */}
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      
      gap: "15px",
      flexWrap: "wrap",
    }}
  >
    {/* PRIMARY BUTTON */}
    <button
      onClick={() => navigate("/solutions")}
      style={{
        background: "linear-gradient(135deg,var(--tv-red),var(--tv-gold))",
        color: "#fff",
        padding: "12px 20px",
        borderRadius: "30px",
        border: "none",
        fontWeight: "500",
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
      }}
    >
      Explore Industry Solutions →
    </button>

    {/* SECONDARY BUTTON */}
    <button
     onClick={() => navigate("/contact")}

      style={{
        background: "#fff",
        color:"var(--tv-red)",
        padding: "14px 28px",
        borderRadius: "30px",
        border: "2px solid var(--tv-gold)",
        fontWeight: "600",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--tv-red)";
        e.currentTarget.style.color = "#fff";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#fff";
        e.currentTarget.style.color = "var(--tv-red)";
      }}
    >
      Talk to Our Domain Experts
    </button>
  </div>
  </motion.div>
</div>
    </>
    
  );
};

export default Industries;