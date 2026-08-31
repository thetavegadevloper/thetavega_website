import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import image from "../assets/images/image.png";
import aboutHeroBg from "../assets/images/AboutUsBack.jpg"; // update name/path as per your file
import { FaEye, FaBullseye } from "react-icons/fa6";
import { FaUsersGear, FaIndustry, FaChartLine } from "react-icons/fa6";
import philosophy from "../assets/images/engineering_about.jpg";
import global_approach from "../assets/images/gloabla_about.jpg";
import certificate1 from "../assets/images/certificate1.png";
import certificate2 from "../assets/images/certificate2.png";
import Lottie from "lottie-react";


import visionAnim from "../assets/json/Our Vision.json";
import missionAnim from "../assets/json/Our Mission.json";

import {
 
  FaRobot,
  FaMicrochip,
  FaWifi,

  FaBolt,
} from "react-icons/fa6";


const LeadershipCard = ({ leader, index }) => {
  const [split, setSplit] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });

  useEffect(() => {
    if (isInView) {
      setSplit(false); // reset every time

      const run = async () => {
        await new Promise((res) => setTimeout(res, 600));  // appear
        await new Promise((res) => setTimeout(res, 1000)); // pause
        setSplit(true); // animate
      };

      run();
    }
  }, [isInView]);

  

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -40 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{
        borderRadius: "20px",
  padding: "0px",
  background: "#fff",
  border: "3px solid transparent",

  backgroundImage: `
    linear-gradient(#fff, #fff),
    linear-gradient(135deg, #DB9941, #f27c2d)
  `,
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",

  minHeight: "260px",
  height: "100%",
  display: "flex",
  overflow: "hidden",

  transformStyle: "preserve-3d",
  perspective: "1000px",

  boxShadow: `
    0 10px 20px rgba(0,0,0,0.08),
    0 25px 50px rgba(7,17,29,0.14),
    inset 0 1px 0 rgba(255,255,255,0.7)
  `,

  transition: "all 0.4s ease",
      
      }}
      className="leader-card-3d"
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: split ? "flex-start" : "center",
          textAlign: split ? "left" : "center",
          gap: "1px",
        }}
      >
        {/* IMAGE */}
        <motion.div
  initial={{ opacity: 0, x: 80 }}
  animate={{
    opacity: split ? 1 : 0,
    x: split ? 0 : 80,
  }}
  transition={{ duration: 0.9}}
  style={{
    flex: "0 0 40%",
    height: "100%",
    display: split ? "block" : "none",
    overflow: "hidden",
     borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
  }}
>
  <img
    src={leader.image}
    alt={leader.name}
    style={{
      width: "110%",
      height: "110%",
      objectFit: "cover"   // 🔥 IMPORTANT
     
    }}
  />
</motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ x: 0 }}
          animate={{
            x: split ? 20 : 0, // 👉 REAL movement
          }}
          transition={{ duration: 0.9}}
          style={{
            flex: split ? "0 0 60%" : "100%",
            display: "flex",
            padding: "4px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: split ? "flex-start" : "center",
                paddingRight: split ? "42px" : "4px", 
          }}
        >
          {/* NAME */}
          <h4
            style={{
              marginBottom: "6px",
              fontSize: split ? "19px" : "23px",
              lineHeight: "1.25",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {leader.name}
          </h4>

          {/* DESIGNATION */}
          <div
            style={{
              color: "#f27c2d",
              fontWeight: 700,
              marginBottom: "8px",
              fontSize: split ? "14px" : "16px",
            }}
          >
            {leader.designation}
          </div>

          {/* BIO */}
          <p
            style={{
              marginBottom: 0,
              fontSize: split ? "14px" : "16 px",
              lineHeight: "1.5",
              paddingRight: split ? "12px" : "0px", 
            }}
          >
            {leader.bio}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};










const About = () => {

const videoRef = useRef(null);
 useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);
  const heroCards = [
  {
    title: "Automation",
    text: "PLC, SCADA, machine integration, controls, and industrial execution systems.",
  },
  {
    title: "Digitalization",
    text: "MES, IIoT, dashboards, traceability, analytics, and plant data systems.",
  },
  {
    title: "Machine Building",
    text: "Assembly systems, SPMs, leak test systems, and process automation solutions.",
  },
  {
    title: "Industrial Intelligence",
    text: "Connected operations, decision support, optimization, and future-ready factory platforms.",
  },
];

const [activeHeroCard, setActiveHeroCard] = useState(0);
const [pauseHeroCard, setPauseHeroCard] = useState(false);

useEffect(() => {
  if (pauseHeroCard) return;

  const timer = setInterval(() => {
    setActiveHeroCard((prev) => (prev + 1) % heroCards.length);
  }, 3000);

  return () => clearInterval(timer);
}, [pauseHeroCard]);

const leadershipData = [

    {
    name: "Tejas Bakliwal",
    designation: "CEO, Managing Director",
    bio: "Leads ThetaVega with an entrepreneurial vision focused on automation, digital manufacturing, and scalable industrial technology platforms.",
    image: image,
  },
  {
    name: "Tejas Bakliwal",
    designation: "CEO, Managing Director",
    bio: "Leads ThetaVega with an entrepreneurial vision focused on automation, digital manufacturing, and scalable industrial technology platforms.",
    image: image,
  },
  {
    name: "Tejaswini Bakliwal",
    designation: "Director",
    bio: "Drives strategic direction, organizational growth, and business alignment across engineering, customer delivery, and transformation initiatives.",
    image:  image,
  },
  {
    name: "CA. Sumali Patni",
    designation: "CFO",
    bio: "Oversees financial strategy, compliance, governance, and business planning to support sustainable and disciplined growth.",
    image:  image,
  },
  {
    name: "Saurabh Pahade",
    designation: "COO",
    bio: "Leads operational execution with a strong focus on delivery excellence, industrial project management, and client success.",
    image:  image,
  },
  {
    name: "Shayam Gaikwad",
    designation: "CTO",
    bio: "Drives technology architecture, platform innovation, and engineering strategy across automation, software, IIoT, and smart factory systems.",
    image:  image,
  },
];


const [activeLeaderIndex, setActiveLeaderIndex] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    setActiveLeaderIndex((prev) => (prev + 1) % leadershipData.length);
  }, 2000);

  return () => clearInterval(timer);
}, []);


const certificateImages = [
  certificate1,
  certificate2,
 
];

const [activeCertificate, setActiveCertificate] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    setActiveCertificate((prev) => (prev + 1) % certificateImages.length);
  }, 1000);

  return () => clearInterval(timer);
}, []);
const thetaCards = {
  theta: [
    {
      title: "Transformation",
      text: "Theta represents progression and change. For ThetaVega, it reflects our role in transforming traditional manufacturing into connected, automated, and digitally enabled operations.",
    },
    {
      title: "Continuous Improvement",
      text: "Theta also signifies movement and refinement. It aligns with our commitment to ongoing improvement across automation, digitalization, and industrial process optimization.",
    },
    {
      title: "Innovation",
      text: "Theta symbolizes new beginnings and forward motion. It reflects ThetaVega’s focus on introducing modern technologies, intelligent systems, and future-ready industrial practices.",
    },
  ],
  vega: [
    {
      title: "Vision",
      text: "Vega represents clarity, direction, and aspiration. It reflects our vision of helping industries move toward intelligent, data-driven, and high-performance manufacturing.",
    },
    {
      title: "Precision & Accuracy",
      text: "Vega also stands for reliability and exactness. It reflects the engineering precision behind our automation systems, digital platforms, and execution methodology.",
    },
    {
      title: "Navigational Guidance",
      text: "Like a guiding star, Vega represents direction. It reflects our role in helping manufacturers navigate industrial complexity with confidence, structure, and technological clarity.",
    },
  ],
};

const whoWeAreItems = [
  "Factory Automation & PLC/SCADA Systems",
  "Machine Building (SPM, Assembly, Leak Test Systems)",
  "Manufacturing Execution Systems (OperateX MES)",
  "Industrial IoT & Smart Factory Solutions",
  "Vision Systems & Quality Automation",
  "Utility Monitoring & Energy Management",
];

const missionItems = [
  "Deliver high-performance, scalable, and reliable solutions",
  "Enable industries to achieve data-driven decision-making",
  "Build platforms that integrate seamlessly across shopfloor to enterprise",
  "Maintain the highest standards of quality, compliance, and engineering excellence",
];



const philosophyItems = [
  "ISA-95 & ISA-88 aligned architecture",
  "Modular and scalable system design",
  "Seamless OT–IT integration",
  "Data-centric engineering for analytics and AI readiness",
  "Reliability, safety, and maintainability as core principles",
];

const globalItems = [
  "Solutions designed as per international standards",
  "Scalable architectures suitable for multi-plant deployments",
  "Capability to integrate with global systems like ERP, MES, and cloud platforms",
  "Strong focus on documentation, compliance, and audit readiness",
];

const certificationItems = [
  "ISO 9001 – Quality Management Systems",
  "ISO 27001 – Information Security Management",
  "IEC 62443 Standards – Electrical & Automation Compliance",
  "ISA-95 / ISA-88 – Industrial Automation Architecture",
  "UL / CE Compliance – Panel & system-level safety standards",
  "FDA (21 CFR Part 11) – For regulated industries where applicable",
];

  const styles = {
    page: {
      backgroundColor: "#ffffff",
      color: "#07111D",
      fontFamily: "Montserrat, sans-serif",
      overflowX: "hidden",
    },

    section: {
      position: "relative",
      padding: "82px 0 0 0",
      backgroundColor: "#ffffff",
      overflow: "hidden",
      borderBottom: "1px solid rgba(7,17,29,0.05)",
    },

    heroSection: {
      position: "relative",
      padding: "96px 0 72px",
      background:
        "linear-gradient(180deg, #ffffff 0%, rgba(245,244,241,0.55) 100%)",
      overflow: "hidden",
      borderBottom: "1px solid rgba(7,17,29,0.05)",
    },

    glowTopRight: {
      position: "absolute",
      top: "-120px",
      right: "-120px",
      width: "320px",
      height: "320px",
      borderRadius: "50%",
      background: "rgba(219, 153, 65, 0.10)",
      filter: "blur(55px)",
      zIndex: 0,
      animation: "floatSoft 8s ease-in-out infinite",
    },

    glowBottomLeft: {
      position: "absolute",
      bottom: "-120px",
      left: "-120px",
      width: "280px",
      height: "280px",
      borderRadius: "50%",
      background: "rgba(174, 44, 17, 0.08)",
      filter: "blur(55px)",
      zIndex: 0,
      animation: "floatSoft 10s ease-in-out infinite",
    },

    sectionGlowLeft: {
      position: "absolute",
      top: "15%",
      left: "-90px",
      width: "220px",
      height: "220px",
      borderRadius: "50%",
      background: "rgba(7,17,29,0.04)",
      filter: "blur(38px)",
      zIndex: 0,
    },

    sectionGlowRight: {
      position: "absolute",
      bottom: "-70px",
      right: "-70px",
      width: "220px",
      height: "220px",
      borderRadius: "50%",
      background: "rgba(219,153,65,0.08)",
      filter: "blur(38px)",
      zIndex: 0,
    },

    heroTag: {
      
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  padding: "8px 16px",
  borderRadius: "50px",
  background: "rgba(255, 255, 255, 0.9)",
  border: "1px solid rgba(0, 0, 0, 0.08)",
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "1px",
  textTransform: "uppercase",
  color: "#f27c2d",
  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.05)",
  marginBottom: "1.35rem",
  backdropFilter: "blur(8px)",
    },

    sectionTag: {
  display: "inline-block",
  fontSize: "20px",
  fontWeight: 700,
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: "#f27c2d",
  marginBottom: "8px",
  textAlign: "center",
  width: "100%",
},

    heroTitle: {
      fontSize: "clamp(2rem, 3.3vw, 3.25rem)",
      fontWeight: 800,
      lineHeight: 1.08,
      color: "#07111D",
      marginBottom: "16px",
      maxWidth: "760px",
    },

    heroAccent: {
      color: "#f27c2d",
    },

    leadText: {
      fontSize: "1rem",
      lineHeight: 1.78,
      color: "#39444D",
      maxWidth: "760px",
      marginBottom: "14px",
    },

    heroPanel: {
      background: "rgba(255,255,255,0.8)",
      border: "1px solid rgba(57,68,77,0.08)",
      borderRadius: "28px",
      padding: "26px",
      boxShadow: "0 18px 42px rgba(7,17,29,0.06)",
      backdropFilter: "blur(10px)",
    },

    heroStatGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: "14px",
    },

    heroStatCard: {
      borderRadius: "18px",
      padding: "16px",
      background: "#ffffff",
      border: "1px solid rgba(57,68,77,0.08)",
      boxShadow: "0 10px 24px rgba(7,17,29,0.04)",
      transition: "transform 0.35s ease, box-shadow 0.35s ease",
    },

    heroStatTitle: {
      fontSize: "0.88rem",
      fontWeight: 700,
      color: "#07111D",
      marginBottom: "6px",
    },

    heroStatText: {
      fontSize: "0.84rem",
      lineHeight: 1.65,
      color: "#5C6670",
      marginBottom: 0,
    },

    sectionTitle: {
      fontSize: "clamp(1.2rem, 2vw, 1.65rem)",
      fontWeight: 800,
      color: "#07111D",
      marginBottom: "12px",
      lineHeight: 1.15,
    },

    sectionIntro: {
      fontSize: "0.98rem",
      lineHeight: 1.76,
      color: "#39444D",
      maxWidth: "820px",
      marginBottom: 0,
    },

    cleanCard: {
      height: "100%",
      background: "rgba(255,255,255,0.94)",
      border: "1px solid rgba(57,68,77,0.08)",
      borderRadius: "24px",
      padding: "24px",
      boxShadow: "0 14px 30px rgba(7,17,29,0.05)",
      transition: "transform 0.35s ease, box-shadow 0.35s ease",
    },

    cardTitle: {
      fontSize: "1rem",
      fontWeight: 800,
      color: "#07111D",
      marginBottom: "10px",
    },

    cardText: {
      fontSize: "0.92rem",
      lineHeight: 1.72,
      color: "#39444D",
      marginBottom: 0,
    },

    listWrap: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },

    listItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
    },

    listDot: {
      minWidth: "10px",
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      background: "#DB9941",
      marginTop: "7px",
      boxShadow: "0 0 0 6px rgba(219,153,65,0.08)",
    },

    listText: {
      fontSize: "0.94rem",
      lineHeight: 1.68,
      color: "#39444D",
      marginBottom: 0,
    },

    splitPanel: {
      height: "100%",
      borderRadius: "28px",
      overflow: "hidden",
      border: "1px solid rgba(57,68,77,0.08)",
      boxShadow: "0 16px 36px rgba(7,17,29,0.06)",
      background: "#ffffff",
    },

    splitPanelHeader: {
      padding: "18px 22px",
      borderBottom: "1px solid rgba(57,68,77,0.08)",
      background: "linear-gradient(180deg, #fff 0%, #f7f5f1 100%)",
    },

    splitPanelTitle: {
      margin: 0,
      fontSize: "1.08rem",
      fontWeight: 800,
      color: "#f27c2d",
      textAlign: "center",
    },

    splitPanelBody: {
      padding: "22px",
    },

    thetaHeroBox: {
      textAlign: "center",
      marginBottom: "30px",
    },

    thetaMainTitle: {
      fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)",
      fontWeight: 800,
      color: "#F17617",
      marginBottom: "8px",
      lineHeight: 1.1,
    },

    thetaSubTitle: {
      fontSize: "0.92rem",
      color: "#5C6670",
      marginBottom: 0,
      fontWeight: 500,
    },

    thetaGroupTitle: {
      fontSize: "1.7rem",
      fontWeight: 800,
      color: "#F17617",
      textAlign: "center",
      marginBottom: "22px",
    },

    meaningCard: {
      height: "100%",
      background: "#ffffff",
      border: "1px solid rgba(57,68,77,0.10)",
      borderRadius: "18px",
      padding: "20px",
      boxShadow: "0 8px 22px rgba(7,17,29,0.06)",
      transition: "transform 0.35s ease, box-shadow 0.35s ease",
    },

    meaningCardTitle: {
      fontSize: "1rem",
      fontWeight: 800,
      color: "#4A52B2",
      marginBottom: "10px",
      textAlign: "center",
    },

    meaningCardText: {
      fontSize: "0.86rem",
      lineHeight: 1.72,
      color: "#4A4F57",
      textAlign: "left",
      marginBottom: 0,
    },

    divider: {
      width: "100%",
      height: "1px",
      background: "linear-gradient(90deg, transparent 0%, rgba(7,17,29,0.10) 50%, transparent 100%)",
      margin: "34px 0",
    },

    leadershipCard: {
      height: "100%",
      background: "#ffffff",
      border: "1px solid rgba(57,68,77,0.08)",
      borderRadius: "24px",
      padding: "24px",
      boxShadow: "0 14px 30px rgba(7,17,29,0.05)",
      textAlign: "center",
      transition: "transform 0.35s ease, box-shadow 0.35s ease",
    },

    profileFrame: {
      width: "112px",
      height: "112px",
      borderRadius: "50%",
      margin: "0 auto 16px",
      padding: "4px",
      background: "linear-gradient(135deg, #DB9941 0%, #f27c2d 100%)",
      boxShadow: "0 12px 24px rgba(7,17,29,0.08)",
    },

    profileImage: {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      objectFit: "cover",
      background: "#F3F0EA",
      display: "block",
    },

    profileFallback: {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      background: "linear-gradient(180deg, #F3F0EA 0%, #E8E2D8 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#07111D",
      fontWeight: 800,
      fontSize: "1.6rem",
    },

    leadershipName: {
      fontSize: "1.02rem",
      fontWeight: 800,
      color: "#07111D",
      marginBottom: "6px",
    },

    leadershipDesignation: {
      fontSize: "0.84rem",
      fontWeight: 700,
      color: "#f27c2d",
      textTransform: "uppercase",
      letterSpacing: "0.7px",
      marginBottom: "12px",
    },

    leadershipBio: {
      fontSize: "0.9rem",
      lineHeight: 1.68,
      color: "#39444D",
      marginBottom: 0,
    },

    twoToneCard: {
      height: "100%",
      borderRadius: "26px",
      padding: "26px",
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(245,244,241,0.92) 100%)",
      border: "1px solid rgba(57,68,77,0.08)",
      boxShadow: "0 14px 30px rgba(7,17,29,0.05)",
    },

    darkCard: {
      height: "100%",
      borderRadius: "26px",
      padding: "26px",
      background: "linear-gradient(180deg, #07111D 0%, #13263B 100%)",
      border: "1px solid rgba(255,255,255,0.05)",
      boxShadow: "0 18px 34px rgba(7,17,29,0.10)",
    },

    darkCardTitle: {
      fontSize: "1.2rem",
      fontWeight: 800,
      color: "#ffffff",
      marginBottom: "12px",
    },

    darkText: {
      fontSize: "0.93rem",
      lineHeight: 1.72,
      color: "rgba(255,255,255,0.82)",
      marginBottom: 0,
    },

    certCard: {
      height: "100%",
      borderRadius: "18px",
      background: "#ffffff",
      border: "1px solid rgba(57,68,77,0.08)",
      padding: "18px",
      boxShadow: "0 8px 22px rgba(7,17,29,0.04)",
    },

    certTitle: {
      fontSize: "0.93rem",
      fontWeight: 800,
      color: "#07111D",
      lineHeight: 1.5,
      marginBottom: 0,
    },
     closingBox: {
  width: "100%",
  padding: "100px 20px",

  background: "linear-gradient(180deg, #07111D 0%, #13263B 100%)",

  border: "none",
  borderRadius: "0",
  margin: "0",
  boxShadow: "none",

  textAlign: "center",
},
    

    closingTop: {
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "1.2px",
      textTransform: "uppercase",
      color: "var(--tv-gold)",
      marginBottom: "10px",
    },

    closingTitle: {
      fontSize: "clamp(1.6rem, 2.4vw, 2.4rem)",
      fontWeight: 800,
      color: "var(--tv-light)",
      lineHeight: 1.16,
      marginBottom: "14px",
    },

    closingText: {
      fontSize: "0.95rem",
      lineHeight: 1.76,
      color: "var(--tv-white)",
      maxWidth: "760px",
      margin: "0 auto 14px",
    },

    closingStrong: {
      fontSize: "1.08rem",
      fontWeight: 800,
      color: "var(--tv-gold)",
      marginBottom: 0,
    },
  };

  const renderList = (items, textStyle = styles.listText) => (
    <div style={styles.listWrap}>
      {items.map((item, index) => (
        <div style={styles.listItem} key={index}>
          <div style={styles.listDot}></div>
          <p style={textStyle}>{item}</p>
        </div>
      ))}
    </div>
  );
  return (
    <div style={styles.page}>
      <style>
        {`
          @keyframes floatSoft {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
          }

          .tv-hover-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 40px #07111D);
          }
            .leader-card-3d:hover {
  transform:
    perspective(1000px)
    rotateX(6deg)
    rotateY(-6deg)
    translateY(-14px);

  box-shadow:
    0 25px 40px rgba(0,0,0,0.14),
    0 40px 70px rgba(242,124,45,0.22);
}

          .tv-stat-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 16px 28px rgba(7,17,29,0.08);
          }

          @media (max-width: 991px) {
            .tv-hero-panel {
              margin-top: 8px;
            }
          }

          @media (max-width: 767px) {
            .tv-section {
              padding: 64px 0 !important;
            }

            .tv-hero {
              padding: 82px 0 60px !important;
            }

            .tv-closing-box {
              padding: 30px 18px !important;
              border-radius: 24px !important;
            }

            .tv-theta-group-title {
              font-size: 1.38rem !important;
            }
          }
            .cta-wrapper {
  padding: 50px 15px !important;
  min-height: auto !important;
  
}

.cta-title {
  font-size: 1.5rem !important;
  line-height: 1.1 !important;
}

.cta-text {
  font-size: 0.9rem !important;
  line-height: 1.5!important;
}
        `}
      </style>

      <section
  style={{
    position: "relative",
     padding: "80px 0 58px",
    backgroundImage: `url(${aboutHeroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
  }}
  className="tv-section tv-hero"
>
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(90deg, rgba(7,17,29,0.88) 0%, rgba(7,17,29,0.78) 52%, rgba(7,17,29,0.50) 100%)",
      zIndex: 1,
    }}
  />

  <div className="container" style={{ position: "relative", zIndex: 2 }}>
    <div className="row align-items-center" style={{ rowGap: "34px" }}>
      <div className="col-lg-7">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
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
            About ThetaVega
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
            Engineering Intelligence for{" "}
            <span style={{ color: "#f27c2d" }}>Modern Manufacturing</span>
          </h1>

          <p
            style={{
              fontSize: "0.96rem",
              lineHeight: 1.76,
              color: "rgba(255,255,255,0.82)",
              maxWidth: "720px",
              marginBottom: "10px",
            }}
          >
            ThetaVega Tech Private Limited is a technology-driven organization
            focused on delivering advanced automation, digitalization, and smart
            manufacturing solutions.
          </p>

          <p
            style={{
              fontSize: "0.96rem",
              lineHeight: 1.76,
              color: "rgba(255,255,255,0.82)",
              maxWidth: "720px",
              marginBottom: "10px",
            }}
          >
            We combine deep industrial engineering expertise with modern software
            technologies to build scalable, future-ready systems for global
            manufacturing enterprises.
          </p>

          <p
            style={{
              fontSize: "0.96rem",
              lineHeight: 1.76,
              color: "rgba(255,255,255,0.82)",
              maxWidth: "720px",
              marginBottom: 0,
            }}
          >
            ThetaVega stands for precision, performance, and partnership —
            enabling manufacturers to operate with greater visibility, control,
            traceability, and operational intelligence.
          </p>
        </motion.div>
      </div>

      <div className="col-lg-5">
        <div
          onMouseEnter={() => setPauseHeroCard(true)}
          onMouseLeave={() => setPauseHeroCard(false)}
          style={{
            position: "relative",
            minHeight: "220px",
            padding: "10px 0 10px 34px",
            borderLeft: "2px solid rgba(219,153,65,0.55)",
            overflow: "hidden",
          }}
        >
          <motion.div
            key={activeHeroCard}
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeInOut" }}
            style={{
              minHeight: "160px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "1.8px",
                color: "#DB9941",
                marginBottom: "12px",
              }}
            >
              {String(activeHeroCard + 1).padStart(2, "0")} / 04
            </div>

            <h3
              style={{
                fontSize: "clamp(1.35rem, 2vw, 2rem)",
                fontWeight: 600,
                lineHeight: 1.22,
                color: "#ffffff",
                marginBottom: "12px",
              }}
            >
              {heroCards[activeHeroCard].title}
            </h3>

            <p
              style={{
                fontSize: "0.94rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.78)",
                marginBottom: 0,
                maxWidth: "390px",
              }}
            >
              {heroCards[activeHeroCard].text}
            </p>
          </motion.div>

          <div
            style={{
              display: "flex",
              gap: "8px",
              marginTop: "18px",
            }}
          >
            {heroCards.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveHeroCard(index)}
                style={{
                  width: index === activeHeroCard ? "26px" : "8px",
                  height: "8px",
                  borderRadius: "999px",
                  border: "none",
                  padding: 0,
                  background:
                    index === activeHeroCard
                      ? "#DB9941"
                      : "rgba(255,255,255,0.35)",
                  transition: "all 0.35s ease",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section
  style={{
    position: "relative",
    padding: "86px 0",
    background:
      "linear-gradient(180deg, #ffffff 0%, #f7f5f1 52%, #ffffff 100%)",
    overflow: "hidden",
  }}
  className="tv-section"
>
  <div
    style={{
      position: "absolute",
      top: "-140px",
      left: "-120px",
      width: "360px",
      height: "360px",
      borderRadius: "50%",
      background: "rgba(219,153,65,0.12)",
      filter: "blur(18px)",
    }}
  />

  <div
    style={{
      position: "absolute",
      right: "-130px",
      bottom: "-150px",
      width: "390px",
      height: "390px",
      borderRadius: "50%",
      background: "rgba(242,124,45,0.10)",
      filter: "blur(18px)",
    }}
  />

  <div className="container" style={{ position: "relative", zIndex: 2 }}>
    <div style={{ textAlign: "center", marginBottom: "52px" }}>
         <div
            style={{
              display: "inline-block",
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#f27c2d",
              marginBottom: "18px",
              textAlign: "center",
              width: "100%",
            }}
          >
           Thetavega word meaning
          </div>

      <h2
        style={{
          fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
          fontWeight: 650,
          lineHeight: 1.12,
          letterSpacing: "1px",
          color: "#07111D",
          marginBottom: "12px",
        }}
      >
        The Profound Significance Behind Our Name Theta-Vega 
      </h2>

    </div>

    <div className="row g-4 align-items-stretch">
  {[
    {
      label: "Theta",
      symbol: "θ",
      color: "#f27c2d",
      softColor: "rgba(242,124,45,0.12)",
      items: thetaCards.theta,
    },
    {
      label: "Vega",
      symbol: "V",
      color: "#DB9941",
      softColor: "rgba(219,153,65,0.14)",
      items: thetaCards.vega,
    },
  ].map((group) => (
    <div className="col-lg-6" key={group.label}>
      <div
        className="tv-hover-card"
        style={{
          position: "relative",
          height: "100%",
          minHeight: "auto",
          padding: "26px",
          borderRadius: "34px",
          overflow: "hidden",
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.72) 100%)",
          border: "1px solid rgba(7,17,29,0.08)",
          boxShadow: "0 24px 60px rgba(7,17,29,0.09)",
          backdropFilter: "blur(14px)",
          transition: "all 0.35s ease",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-70px",
            right: "-70px",
            width: "190px",
            height: "190px",
            borderRadius: "50%",
            background: group.softColor,
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "-55px",
            left: "-55px",
            width: "145px",
            height: "145px",
            borderRadius: "50%",
            background: group.softColor,
            filter: "blur(3px)",
          }}
        />

        <div style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "18px",
              marginBottom: "24px",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "clamp(1.75rem, 2.6vw, 2.6rem)",
                  fontWeight: 700,
                  color: "#07111D",
                  marginBottom: "5px",
                  lineHeight: 1.1,
                }}
              >
                {group.label}
              </h3>
            </div>

            <div
              style={{
                minWidth: "82px",
                width: "82px",
                height: "82px",
                borderRadius: "26px",
                background: group.color,
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2.3rem",
                fontWeight: 700,
                boxShadow: `0 18px 40px ${group.color}55`,
                transform: "rotate(-6deg)",
              }}
            >
              {group.symbol}
            </div>
          </div>

          <div
  style={{
    position: "relative",
    padding: "8px 0 0",
  }}
>
  {group.items.map((item, index) => (
    <div
      key={index}
      style={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: "34px 1fr",
        gap: "16px",
        paddingBottom: index === group.items.length - 1 ? 0 : "22px",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "14px",
            height: "14px",
            borderRadius: "50%",
            background: group.color,
            boxShadow: `0 0 0 8px ${group.softColor}`,
            marginTop: "7px",
            zIndex: 2,
          }}
        />

        {index !== group.items.length - 1 && (
          <div
            style={{
              position: "absolute",
              top: "26px",
              bottom: "-8px",
              width: "2px",
              background: `linear-gradient(180deg, ${group.color}, transparent)`,
              opacity: 0.45,
            }}
          />
        )}
      </div>

      <div
        style={{
          paddingBottom: "2px",
          borderBottom:
            index !== group.items.length - 1
              ? "1px dashed rgba(7,17,29,0.12)"
              : "none",
        }}
      >
        <h4
          style={{
            fontSize: "1rem",
            fontWeight: 750,
            color: group.color,
            marginBottom: "6px",
            lineHeight: 1.35,
          }}
        >
          {item.title}
        </h4>

        <p
          style={{
            fontSize: "0.9rem",
            lineHeight: 1.68,
            color: "#39444D",
            marginBottom: 0,
          }}
        >
          {item.text}
        </p>
      </div>
    </div>
  ))}
</div>
        </div>
      </div>
    </div>
  ))}
</div>
  </div>
</section>

<section
  style={{
    position: "relative",
    padding: "70px 0",
    background:
      "linear-gradient(135deg, #07111D 0%, #0D1B2A 55%, #07111D 100%)",
    overflow: "hidden",
  }}
  className="tv-section"
>
  <div style={styles.sectionGlowLeft}></div>
  <div style={styles.sectionGlowRight}></div>

  <div className="container" style={{ position: "relative", zIndex: 2 }}>
    <div className="row g-5 align-items-center">
      <motion.div
        className="col-lg-6"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
      >
        <div
          style={{
            padding: "30px",
            borderRadius: "28px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.22)",
            backdropFilter: "blur(12px)",
          }}
          className="tv-hover-card"
        >
          <div
            style={{
              fontSize: "17px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#f27c2d",
              marginBottom: "12px",
            }}
          >
            Who We Are
          </div>

          <h2
            style={{
              fontSize: "clamp(1.15rem, 1.8vw, 1.55rem)",
              fontWeight: 650,
              lineHeight: 1.28,
              color: "#ffffff",
              marginBottom: "14px",
            }}
          >
            A multidisciplinary team building connected, intelligent, and
            data-driven factories
          </h2>

          <p
            style={{
              fontSize: "0.86rem",
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.76)",
              marginBottom: "20px",
            }}
          >
            We are a multidisciplinary team of automation engineers, software
            developers, and system integrators committed to transforming
            manufacturing environments into scalable, connected, and
            high-performance operations.
          </p>

         <div style={{ display: "grid", gap: "9px" }}>
  {[
    { icon: <FaIndustry />, text: "Factory Automation & PLC/SCADA Systems" },
    { icon: <FaRobot />, text: "Machine Building (SPM, Assembly, Leak Test Systems)" },
    { icon: <FaMicrochip />, text: "Manufacturing Execution Systems (OperateX MES)" },
    { icon: <FaWifi />, text: "Industrial IoT & Smart Factory Solutions" },
    { icon: <FaEye />, text: "Vision Systems & Quality Automation" },
    { icon: <FaBolt />, text: "Utility Monitoring & Energy Management" },
  ].map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: 0.55 + index * 0.06,
        ease: "easeOut",
      }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "11px",
      }}
    >
      <div
        style={{
          minWidth: "24px",
          width: "24px",
          height: "24px",
          color: "#f27c2d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "16px",
        }}
      >
        {item.icon}
      </div>

      <div
        style={{
          fontSize: "0.84rem",
          lineHeight: 1.32,
          color: "rgba(255,255,255,0.84)",
          fontWeight: 500,
        }}
      >
        {item.text}
      </div>
    </motion.div>
  ))}
</div>
        </div>
      </motion.div>

      <motion.div
        className="col-lg-6"
        initial={{ opacity: 0, x: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
      >
        <div
          style={{
            position: "relative",
            paddingLeft: "55px",
            paddingBottom: "38px",
          }}
        >
          <div
            style={{
              position: "relative",
              minHeight: "430px",
              borderTop: "5px solid #d85803",
              borderRadius: "0 145px 0 0",
              background: "#DB9941",
              boxShadow: "0 28px 70px rgba(0,0,0,0.25)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.18), rgba(7,17,29,0.14))",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: "54px 48px 120px",
                color: "#ffffff",
              }}
            >
              <h3
                style={{
                  fontSize: "clamp(1.35rem, 2vw, 1.9rem)",
                  fontWeight: 700,
                  marginBottom: "18px",
                  color: "#d44f02",
                }}
              >
                How We Work
              </h3>

              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  color: "rgba(12, 7, 0, 0.88)",
                  marginBottom: "18px",
                }}
              >
                We work closely with OEMs, Tier-1, and Tier-2 manufacturers,
                delivering solutions that directly impact productivity,
                traceability, compliance, and operational efficiency.
              </p>

              <div
                style={{
                  marginTop: "18px",
                  paddingTop: "18px",
                  borderTop: "1px solid rgba(255,255,255,0.20)",
                }}
              >
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.88)",
                    marginBottom: 0,
                  }}
                >
                  Our strength lies in combining industrial engineering depth
                  with software-driven execution — allowing clients to achieve
                  both process reliability and digital transformation through
                  one integrated partner.
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 42 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.35, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: "0",
              bottom: "0",
              width: "230px",
              padding: "22px 24px 26px",
              background: "#f27c2d",
              color: "#ffffff",
              borderRadius: "0 0 56px 0",
              boxShadow: "0 20px 44px rgba(242,124,45,0.34)",
              zIndex: 5,
            }}
          >
            <div
              style={{
                fontSize: "1.8rem",
                fontWeight: 800,
                lineHeight: 1.05,
                marginBottom: "8px",
              }}
            >
              15+ Years
            </div>

            <div
              style={{
                fontSize: "1.35rem",
                fontWeight: 800,
                lineHeight: 1.18,
              }}
            >
              of Industrial <br />
              Innovation
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

<section
  style={{
    position: "relative",
    padding: "90px 0 80px",
    background:
      "linear-gradient(180deg, #ffffff 0%, #f7f5f1 52%, #ffffff 100%)",
    overflow: "hidden",
  }}
  className="tv-section"
>
  <div style={styles.sectionGlowLeft}></div>
  <div style={styles.sectionGlowRight}></div>

  <div className="container" style={{ position: "relative", zIndex: 1 }}>
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      style={{ textAlign: "center", marginBottom: "0px" }}
    >
      <div
        style={{
          display: "inline-block",
          fontSize: "20px",
          fontWeight: 700,
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "#f27c2d",
          marginBottom: "24px",
        }}
      >
        What We Do
      </div>

      <h2
  style={{
    fontSize: "clamp(1.2rem, 2vw, 1.65rem)",
    fontWeight: 650,
    lineHeight: 1.3,
    color: "#07111D",
    marginBottom: 0,
  }}
>
  Automation <span style={{ color: "#f27c2d" }}>|</span> Digitalization{" "}
  <span style={{ color: "#f27c2d" }}>|</span> Traceability
</h2>
    </motion.div>

<style>
  {`
    @keyframes tvBorderMove {
      from {
        stroke-dashoffset: 0;
      }
      to {
        stroke-dashoffset: -1600;
      }
    }
  `}
</style>

<motion.div
  initial={{ opacity: 0, y: 55 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.35 }}
  onViewportEnter={() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;

    video.play().catch((err) => {
      console.log("Video play blocked:", err);
    });
  }}
  onViewportLeave={() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;
  }}
  transition={{
    duration: 0.85,
    delay: 0.15,
    ease: [0.22, 1, 0.36, 1],
  }}
  style={{
    position: "relative",
    maxWidth: "980px",
    margin: "0 auto",
    borderRadius: "18px",
    overflow: "hidden",
  }}
>
  <video
    ref={videoRef}
    muted
    playsInline
    preload="auto"
    controls={false}
    style={{
      width: "100%",
      height: "auto",
      objectFit: "cover",
      display: "block",
      borderRadius: "18px",
      padding: "0 10px 0 10px",
    }}
  >
    <source src="/transparent.webm" type="video/webm" />
    Your browser does not support the video tag.
  </video>
</motion.div>
  </div>
</section>

<section
  style={{
    position: "relative",
    padding: "90px 0 80px",
    background:
      "linear-gradient(180deg, #ffffff 0%, #f7f5f1 52%, #ffffff 100%)",
    overflow: "hidden",
  }}
  className="tv-section"
>
  <div style={styles.sectionGlowLeft}></div>
  <div style={styles.sectionGlowRight}></div>

  <div className="container" style={{ position: "relative", zIndex: 1 }}>
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      style={{ textAlign: "center", marginBottom: "66px" }}
    >
      <div
        style={{
          display: "inline-block",
          fontSize: "20px",
          fontWeight: 700,
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "#f27c2d",
          marginBottom: "14px",
        }}
      >
        Our Vision & Mission
      </div>

      <h2
        style={{
          fontSize: "clamp(1.2rem, 2vw, 1.65rem)",
          fontWeight: 650,
          lineHeight: 1.3,
          color: "#07111D",
          marginBottom: 0,
        }}
      >
        Guiding ThetaVega toward intelligent industrial transformation
      </h2>
    </motion.div>

    <div className="row g-5 justify-content-center">
      {[
        {
          label: "Vision",
          title:
            "To establish ThetaVega as a globally trusted industrial technology brand",
          text:
            "Enabling the transformation of manufacturing through intelligent automation, digital innovation, and engineering excellence.",
          animation: visionAnim,
        },
        {
          label: "Mission",
          title: "Delivering scalable systems for the factories of the future",
          list: missionItems,
          animation: missionAnim,
        },
      ].map((item, index) => (
        <div className="col-lg-6" key={item.label}>
          {/* 🔥 Circle with Lottie */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{
              duration: 0.65,
              delay: index * 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              position: "relative",
              zIndex: 5,
              width: "118px",
              height: "118px",
              borderRadius: "50%",
              margin: "0 auto -58px",
              background:
                "linear-gradient(135deg, #f27c2d 0%, #DB9941 100%)",
              border: "4px solid #ffffff",
              outline: "2px solid #07111D",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 16px 34px rgba(242,124,45,0.32)",
              overflow: "hidden",
            }}
          >
            <Lottie
              animationData={item.animation}
              loop
              autoplay
              style={{
                width: "72px",
                height: "72px",
              }}
            />
          </motion.div>

          {/* 🔥 Card */}
          <motion.div
            className="tv-hover-card"
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{
              duration: 0.85,
              delay: 0.32 + index * 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              position: "relative",
              minHeight: "330px",
              height: "100%",
              padding: "88px 42px 22px",
              borderRadius: "14px",
              background:
                "linear-gradient(180deg, #07111D 0%, #132335 100%)",
              boxShadow: "0 22px 48px rgba(7,17,29,0.16)",
              textAlign: "center",
              overflow: "visible",
            }}
          >
            <h3
              style={{
                fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                fontWeight: 750,
                color: "#ffffff",
                marginBottom: "16px",
              }}
            >
              Our {item.label}
            </h3>

            <h4
              style={{
                fontSize: "0.98rem",
                fontWeight: 700,
                color: "#DB9941",
                lineHeight: 1.55,
                marginBottom: "14px",
              }}
            >
              {item.title}
            </h4>

            {item.text && (
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.82)",
                  marginBottom: 0,
                }}
              >
                {item.text}
              </p>
            )}

            {item.list && (
              <div
                style={{
                  display: "grid",
                  gap: "9px",
                  marginTop: "8px",
                  textAlign: "left",
                }}
              >
                {item.list.map((point, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "0.88rem",
                      lineHeight: 1.55,
                      color: "rgba(255,255,255,0.82)",
                    }}
                  >
                    <span
                      style={{
                        minWidth: "8px",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "#f27c2d",
                        marginTop: "7px",
                      }}
                    />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      ))}
    </div>
  </div>
</section>



 
{/* <section
  style={{
    position: "relative",
    padding: "86px 0",
    background:
      "linear-gradient(180deg, #ffffff 0%, #f7f5f1 52%, #ffffff 100%)",
    overflow: "hidden",
  }}
  className="tv-section"
>
  <div style={styles.sectionGlowLeft}></div>
  <div style={styles.sectionGlowRight}></div>

  <div className="container" style={{ position: "relative", zIndex: 1 }}>
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ marginBottom: "52px", textAlign: "center" }}
    >
      <div
        style={{
          display: "inline-block",
          fontSize: "20px",
          fontWeight: 700,
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "#f27c2d",
          marginBottom: "14px",
        }}
      >
        Leadership
      </div>

      <h2
        style={{
          fontSize: "clamp(1.2rem, 2vw, 1.65rem)",
          fontWeight: 650,
          lineHeight: 1.3,
          color: "#07111D",
          marginBottom: "12px",
        }}
      >
        Leadership with entrepreneurial vision and hands-on engineering depth
      </h2>

      <p
        style={{
          fontSize: "0.94rem",
          lineHeight: 1.75,
          color: "#5C6670",
          maxWidth: "780px",
          margin: "0 auto",
        }}
      >
        ThetaVega is led by a team focused on industrial innovation, execution
        discipline, scalable platforms, and long-term manufacturing
        transformation.
      </p>
    </motion.div>

    <div style={{ display: "grid", gap: "24px" }}>
      {leadershipData.map((leader, index) => {
        const reverse = index % 2 !== 0;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{
              duration: 0.7,
              delay: index * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              display: "grid",
              gridTemplateColumns: reverse ? "1fr 240px" : "240px 1fr",
              gap: "0",
              alignItems: "stretch",
              borderRadius: "34px",
              overflow: "hidden",
              background:
                "linear-gradient(145deg, #07111D 0%, #132335 100%)",
              boxShadow: "0 24px 58px rgba(7,17,29,0.14)",
              border: "1px solid rgba(7,17,29,0.08)",
            }}
            className="tv-hover-card"
          >
            {!reverse && (
              <div
                style={{
                  minHeight: "245px",
                  background:
                    "linear-gradient(135deg, rgba(242,124,45,0.18), rgba(219,153,65,0.18))",
                }}
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            )}

            <div
              style={{
                position: "relative",
                padding: "34px 38px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-80px",
                  right: reverse ? "auto" : "-80px",
                  left: reverse ? "-80px" : "auto",
                  width: "190px",
                  height: "190px",
                  borderRadius: "50%",
                  background: "rgba(242,124,45,0.12)",
                }}
              />

              <div style={{ position: "relative", zIndex: 2 }}>
                <div
                  style={{
                    display: "inline-block",
                    padding: "7px 14px",
                    borderRadius: "999px",
                    background: "rgba(242,124,45,0.13)",
                    color: "#DB9941",
                    fontSize: "0.76rem",
                    fontWeight: 750,
                    marginBottom: "14px",
                  }}
                >
                  {leader.designation}
                </div>

                <h3
                  style={{
                    fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                    fontWeight: 750,
                    color: "#ffffff",
                    marginBottom: "12px",
                  }}
                >
                  {leader.name}
                </h3>

                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.72,
                    color: "rgba(255,255,255,0.78)",
                    marginBottom: 0,
                    maxWidth: "720px",
                  }}
                >
                  {leader.bio}
                </p>
              </div>
            </div>

            {reverse && (
              <div
                style={{
                  minHeight: "245px",
                  background:
                    "linear-gradient(135deg, rgba(242,124,45,0.18), rgba(219,153,65,0.18))",
                }}
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            )}
          </motion.div>
        );
      })}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      style={{ marginTop: "34px" }}
    >
      <div
        style={{
          padding: "26px",
          borderRadius: "30px",
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.94), rgba(255,255,255,0.66))",
          boxShadow: "0 18px 42px rgba(7,17,29,0.08)",
          border: "1px solid rgba(7,17,29,0.07)",
        }}
      >
        <div
          style={{
            fontSize: "1.08rem",
            fontWeight: 750,
            color: "#07111D",
            marginBottom: "14px",
            textAlign: "center",
          }}
        >
          Leadership Focus Areas
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          {focusItems.map((item, index) => (
            <span
              key={index}
              style={{
                padding: "8px 14px",
                borderRadius: "999px",
                background: "rgba(242,124,45,0.10)",
                color: "#39444D",
                fontSize: "0.82rem",
                fontWeight: 600,
                border: "1px solid rgba(219,153,65,0.18)",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
</section> */}



<section
  style={{
    position: "relative",
    padding: "86px 0",
    background:
      "linear-gradient(180deg, #ffffff 0%, #f7f5f1 52%, #ffffff 100%)",
    overflow: "hidden",
  }}
  className="tv-section"
>
  <div style={styles.sectionGlowLeft}></div>
  <div style={styles.sectionGlowRight}></div>

  <div className="container" style={{ position: "relative", zIndex: 1 }}>
    <div style={{ textAlign: "center", marginBottom: "42px" }}>
      <div
        style={{
          display: "inline-block",
          fontSize: "20px",
          fontWeight: 700,
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "#f27c2d",
          marginBottom: "14px",
        }}
      >
        Engineering Mindset
      </div>

      <h2
        style={{
          fontSize: "clamp(1.2rem, 2vw, 1.65rem)",
          fontWeight: 650,
          lineHeight: 1.3,
          color: "#07111D",
          marginBottom: "10px",
        }}
      >
        Designed with discipline, delivered with global precision
      </h2>

      <p
        style={{
          fontSize: "0.94rem",
          lineHeight: 1.7,
          color: "#5C6670",
          maxWidth: "760px",
          margin: "0 auto",
        }}
      >
        Our engineering approach combines structured execution, scalable design,
        and long-term maintainability for future-ready industrial systems.
      </p>
    </div>

    <div className="row g-4">
      {[
        {
          title: "Engineering Philosophy",
          subtitle: "Structured. Standards-driven. Future-oriented.",
          image: philosophy,
          intro:
            "At ThetaVega, engineering is not just execution — it is structured, standards-driven, and future-oriented.",
          list: philosophyItems,
          outro:
            "We design systems that are not only functional, but also sustainable, upgradeable, maintainable, and globally compatible.",
        },
        {
          title: "Global Approach",
          subtitle: "Global mindset with localized execution strength.",
          image: global_approach,
          intro:
            "ThetaVega follows a global delivery mindset with localized execution strength and industrial rigor.",
          list: globalItems,
          outro:
            "We aim to serve clients across geographies with consistent quality, scalable design practices, and engineering precision.",
        },
      ].map((item, index) => (
        <div className="col-lg-6" key={index}>
<motion.div
  className="tv-hover-card"
  initial={{ opacity: 0, y: 34 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.28 }}
  transition={{
    duration: 0.7,
    delay: index * 0.12,
    ease: [0.22, 1, 0.36, 1],
  }}
  style={{
    position: "relative",
    minHeight: "400px",
    height: "100%",
    borderRadius: "34px",
    overflow: "hidden",
    boxShadow: "0 26px 64px rgba(7,17,29,0.18)",
  }}
>
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
  style={{
    position: "absolute",
    inset: 0,
    backgroundImage: `url(${item.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(0px)",
    transform: "scale(1.01)",
  }}
/>

<div
  style={{
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(7,17,29,0.12) 0%, rgba(7,17,29,0.36) 42%, rgba(7,17,29,0.84) 100%)",
  }}
/>

<div
  style={{
    position: "absolute",
    inset: 0,
    background:
      index === 0
        ? "linear-gradient(135deg, rgba(242,124,45,0.14), transparent 46%)"
        : "linear-gradient(135deg, rgba(219,153,65,0.13), transparent 46%)",
  }}
/>

<div
  style={{
    position: "relative",
    zIndex: 2,
    height: "100%",
    padding: "34px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
  }}
>
  <div>
    <h3
      style={{
        fontSize: "clamp(1.45rem, 2.3vw, 2rem)",
        fontWeight: 750,
        color: "#ffffff",
        lineHeight: 1.18,
        marginBottom: 20,
        textShadow: "0 6px 24px rgba(0,0,0,0.75)",
      }}
    >
      {item.title}
    </h3>
  </div>

  <div
    style={{
      margin: "0 -34px -34px",
      padding: "12px 34px 34px",
      background:
        "linear-gradient(180deg, transparent 0%, rgba(7,17,29,0.52) 28%, rgba(7,17,29,0.82) 100%)",
    }}
  >
    <p
      style={{
        fontSize: "1rem",
        lineHeight: 1.72,
        color: "rgba(255,255,255,0.96)",
        marginBottom: "16px",
        maxWidth: "94%",
        textShadow: "0 3px 14px rgba(0,0,0,0.8)",
        fontWeight: 500,
      }}
    >
      {item.intro}
    </p>

    <div style={{ display: "grid", gap: "9px", marginBottom: "16px" }}>
      {item.list.map((point, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "10px",
            color: "rgba(255,255,255,0.94)",
            fontSize: "1rem",
            lineHeight: 1.55,
            textShadow: "0 3px 12px rgba(0,0,0,0.78)",
            fontWeight: 500,
          }}
        >
          <span
            style={{
              minWidth: "7px",
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: index === 0 ? "#f27c2d" : "#DB9941",
              marginTop: "8px",
              boxShadow: "0 0 12px rgba(242,124,45,0.55)",
            }}
          />
          <span>{point}</span>
        </div>
      ))}
    </div>

    <p
      style={{
        fontSize: "1rem",
        lineHeight: 1.72,
        color: "rgba(255,255,255,0.96)",
        marginBottom: 0,
        maxWidth: "94%",
        textShadow: "0 3px 14px rgba(0,0,0,0.8)",
        fontWeight: 500,
      }}
    >
      {item.outro}
    </p>
  </div>
</div>
</motion.div>
        </div>
      ))}
    </div>
  </div>
</section>

<section style={styles.section} className="tv-section">
  <div style={styles.sectionGlowLeft}></div>
  <div style={styles.sectionGlowRight}></div>

  <div className="container" style={{ position: "relative", zIndex: 1 }}>
    <div style={{ marginBottom: "46px", textAlign: "center" }}>
      <div style={styles.sectionTag}>Certifications & Standards</div>

      <h2 style={styles.sectionTitle}>
        Aligned with global quality, safety, architecture, and compliance benchmarks
      </h2>

      <p style={{ ...styles.sectionIntro, margin: "0 auto" }}>
        Our solutions and processes are designed to meet the regulatory,
        safety, cybersecurity, and engineering expectations of modern
        industrial environments.
      </p>
    </div>

    <div className="row g-5 align-items-center">
      {/* LEFT AWARD STYLE */}
      <div className="col-lg-7">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "30px 22px",
          }}
        >
          {certificationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                textAlign: "center",
                minHeight: "118px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: "1.35rem",
                  lineHeight: 1,
                  color: "#f7b84b",
                  letterSpacing: "1px",
                  marginBottom: "12px",
                  textShadow: "0 8px 18px rgba(247,184,75,0.22)",
                  whiteSpace: "nowrap",
                }}
              >
                ❬ ★★★★★ ❭
              </div>

              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 850,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "#9AA4AE",
                  marginBottom: "7px",
                }}
              >
                Certified
              </div>

              <div
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 800,
                  lineHeight: 1.3,
                  color: "#07111D",
                  maxWidth: "190px",
                }}
              >
                {item}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* RIGHT CERTIFICATE FRAME */}
    {/* RIGHT CERTIFICATE AREA */}
<div className="col-lg-5">
  <motion.div
    initial={{ opacity: 0, x: 32 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false, amount: 0.25 }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "16px",
    }}
  >
    {certificateImages.map((certificate, index) => (
      <motion.div
        key={index}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "relative",
          width: "100%",
          padding: "6px",
          borderRadius: "16px",
          background:
            "linear-gradient(135deg, rgba(242,124,45,0.38), rgba(255,255,255,0.95), rgba(219,153,65,0.32))",
          boxShadow: "0 16px 38px rgba(7,17,29,0.10)",
        }}
      >
        {/* Border overlay */}
        <div
          style={{
            position: "absolute",
            inset: "4px",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.8)",
            pointerEvents: "none",
          }}
        />

        {/* Certificate Image */}
        <img
          src={certificate}
          alt={`ThetaVega Certificate ${index + 1}`}
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            height: "auto", // 🔥 natural height
            display: "block",
            borderRadius: "10px",
            background: "#fff",
          }}
        />
      </motion.div>
    ))}
  </motion.div>
</div>
    </div>
  </div>
</section>

     <section
  style={{
    ...styles.section,
    padding: "0",
    background: "transparent",
  }}
  className="tv-section"
>
  <div style={styles.glowTopRight}></div>
  <div style={styles.glowBottomLeft}></div>

  {/* 🔥 FULL WIDTH CTA (NO CONTAINER) */}
  <div
    className="cta-wrapper"
  style={{
    position: "relative",
    overflow: "hidden",

    width: "90%",
    maxWidth: "1450px",
    margin: "40px auto",

 padding: "100px 0",
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
 



  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: 0.3 }}
    transition={{ duration: 0.8 }}
    style={{
      position: "relative",
      zIndex: 2,
      textAlign: "center",
      maxWidth: "950px",
      margin: "0 auto",
    }}
  >
    <div
      style={{
        color: "#DB9941",
        fontWeight: 700,
        letterSpacing: "2px",
        textTransform: "uppercase",
        marginBottom: "22px",
        fontSize: "14px",
      }}
    >
      BUILDING TRUST THROUGH ENGINEERING EXCELLENCE
    </div>

    <h2 className="cta-title"
      style={{
        color: "#fff",
        fontSize: "1.7",
        fontWeight: 800,
        marginBottom: "25px",
        lineHeight: 1.15,
      }}
    >
      Precision. Performance. Partnership.
    </h2>

    <p
    className="cta-text"
      style={{
        color: "rgba(255,255,255,0.85)",
        fontSize: "1.00rem",
        lineHeight: 1.7,
        marginBottom: "15px",
      }}
    >
      ThetaVega does not just deliver projects — we deliver long-term
      industrial transformation through structured engineering,
      intelligent automation, digital systems, and execution discipline.
    </p>

    <p
      style={{
        color: "rgba(255,255,255,0.85)",
        fontSize: "1.00rem",
        lineHeight: 1.4,
      }}
    >
      With a strong industrial foundation and a future-focused approach,
      we are building solutions that help manufacturers grow with
      confidence, clarity, and capability.
    </p>

    <div
      style={{
        marginTop: "30px",
        color: "#DB9941",
        fontWeight: 700,
        fontSize: "1.5rem",
      }}
    >
      Engineering Tomorrow, Today.
    </div>
  </motion.div>
</div>
  
</section>
    </div>
  );
};

export default About;