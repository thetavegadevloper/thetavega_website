import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/Artboard 2.jpg";
import Lottie from "lottie-react";
import {
  FaProjectDiagram,
  FaMicrochip,
  FaIndustry,
  FaCogs,
  FaCube,
} from "react-icons/fa";

import {
  FaCarSide,
  FaBlender,
  FaUtensils,
  FaFlask,
} from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";


import projectAnim from "../assets/json/7. Projects.json";
import deviceAnim from "../assets/json/8. Connected Devices.json";
import industryAnim from "../assets/json/9. Industries.json";
import techAnim from "../assets/json/10. Technologies.json";
import productAnim from "../assets/json/11. Core Products.json";

import factoryAnim from "../assets/json/Factory Automation.json";
import machineAnim from "../assets/json/Machine Building.json";
import mesAnim from "../assets/json/Digital Manufacturing.json";
import traceabilityAnim from "../assets/json/Traceability  Quality Systems.json";
import iotAnim from "../assets/json/Industrial IoT.json";
import panelAnim from "../assets/json/Panel  Control Systems.json";

import autoAnim from "../assets/json/Automotive  EV.json";
import ancillariesAnim from "../assets/json/Auto Ancillaries.json";
import consumerAnim from "../assets/json/Consumer Durables.json";
import foodAnim from "../assets/json/Food  Beverage.json";
import pharmaAnim from "../assets/json/Pharmaceuticals  Life Sciences.json";
import metalsAnim from "../assets/json/Metals  Process Industries.json";


const Home = () => {
  const styles = {
    page: {
      backgroundColor: "#ffffff",
      fontFamily: "Montserrat, sans-serif",
      overflowX: "hidden",
    },

    heroSection: {
      position: "relative",
      minHeight: "620px",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      backgroundColor: "#f8f9fa",
    },

heroBg: {
  position: "absolute",
  top: "0px",
  bottom: "20px",
  left: "150px",
  right: "30px",
  width: "calc(100% - 60px)",
  height: "calc(100% - 40px)",
  objectFit: "contain",
  objectPosition: "center",
  zIndex: 1,
  borderRadius: "24px",
  backgroundColor: "#ffffff",
},

    // overlay: {
    //   position: "absolute",
    //   inset: 0,
    //   background:
    //     "linear-gradient(90deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.94) 32%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0.15) 100%)",
    //   zIndex: 2,
    // },

    gradientBlur1: {
      position: "absolute",
      top: "8%",
      left: "-80px",
      width: "240px",
      height: "240px",
      borderRadius: "50%",
      background: "rgba(174, 44, 17, 0.10)",
      filter: "blur(50px)",
      zIndex: 2,
      animation: "floatY 7s ease-in-out infinite",
    },

    gradientBlur2: {
      position: "absolute",
      bottom: "4%",
      left: "22%",
      width: "200px",
      height: "200px",
      borderRadius: "50%",
      background: "rgba(219, 153, 65, 0.14)",
      filter: "blur(55px)",
      zIndex: 2,
      animation: "floatY 9s ease-in-out infinite",
    },

    contentWrap: {
      position: "relative",
      zIndex: 3,
      width: "100%",
    },

    tag: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      padding: "8px 16px",
      borderRadius: "50px",
      background: "rgba(255,255,255,0.9)",
      border: "1px solid rgba(0,0,0,0.08)",
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "1px",
      textTransform: "uppercase",
      color: "#f27c2d",
      boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
      marginBottom: "1.35rem",
      backdropFilter: "blur(8px)",
    },

    tagDot: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: "#DB9941",
      boxShadow: "0 0 0 6px rgba(219, 153, 65, 0.16)",
    },

    headline: {
      fontSize: "clamp(1.8rem, 3.8vw, 3.5rem)",
      fontWeight: 800,
      lineHeight: 1.18,
      letterSpacing: "-0.6px",
      color: "#07111D",
      marginBottom: "1.2rem",
      maxWidth: "620px",
    },

    accent: {
      color: "#f27c2d",
      position: "relative",
      display: "inline-block",
    },

    subline: {
      fontSize: "clamp(0.95rem, 1.25vw, 1.08rem)",
      color: "#4d5b68",
      lineHeight: 1.95,
      maxWidth: "580px",
      marginBottom: "2.1rem",
      fontWeight: 500,
    },

    primaryBtn: {
      background: "linear-gradient(135deg, #f27c2d 0%, #DB9941 100%)",
      color: "#fff",
      border: "none",
      borderRadius: "999px",
      padding: "12px 24px",
      fontWeight: 700,
      fontSize: "14px",
      textDecoration: "none",
      boxShadow: "0 14px 30px rgba(174, 44, 17, 0.22)",
      transition: "all 0.3s ease",
    },

    secondaryBtn: {
      background: "rgba(255,255,255,0.9)",
      color: "#07111D",
      border: "1px solid rgba(0,0,0,0.08)",
      borderRadius: "999px",
      padding: "12px 24px",
      fontWeight: 700,
      fontSize: "14px",
      textDecoration: "none",
      boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
      transition: "all 0.3s ease",
    },

    statCard: {
      background: "rgba(255,255,255,0.88)",
      border: "1px solid rgba(0,0,0,0.07)",
      borderRadius: "20px",
      padding: "16px 18px",
      boxShadow: "0 14px 32px rgba(12, 18, 24, 0.06)",
      backdropFilter: "blur(8px)",
      height: "100%",
      transition: "all 0.3s ease",
    },

    statLabel: {
      fontSize: "11px",
      fontWeight: 700,
      color: "#7b8791",
      textTransform: "uppercase",
      letterSpacing: "1px",
      marginBottom: "8px",
    },

    statText: {
      fontSize: "15px",
      fontWeight: 700,
      color: "#07111D",
      lineHeight: 1.5,
      marginBottom: 0,
    },
    statsSection: {
  padding: "80px 0 90px",
  background: "linear-gradient(180deg, #ffffff 0%, #E5E5DF 100%)",
},

statsTop: {
  textAlign: "center",
  marginBottom: "50px",
},

statsEyebrow: {
  display: "inline-block",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: "#f27c2d",
  marginBottom: "12px",
},

statsHeading: {
  fontSize: "clamp(1.7rem, 2.8vw, 2.6rem)",
  fontWeight: 800,
  color: "#07111D",
  marginBottom: "12px",
},

statsSubtext: {
  fontSize: "1rem",
  color: "#39444D",
  maxWidth: "700px",
  margin: "0 auto",
  lineHeight: 1.8,
},

statsCard: {
  background: "#ffffff",
  borderRadius: "22px",
  padding: "28px 22px",
  height: "100%",
  border: "1px solid rgba(57, 68, 77, 0.10)",
  boxShadow: "0 14px 34px rgba(7, 17, 29, 0.06)",
  transition: "all 0.35s ease",
  position: "relative",
  overflow: "hidden",
},

statsCardGlow: {
  position: "absolute",
  top: "-30px",
  right: "-30px",
  width: "90px",
  height: "90px",
  borderRadius: "50%",
  background: "rgba(219, 153, 65, 0.10)",
  filter: "blur(8px)",
},

statsIconWrap: {
  width: "62px",
  height: "62px",
  borderRadius: "18px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, rgba(174,44,17,0.10) 0%, rgba(219,153,65,0.16) 100%)",
  color: "#f27c2d",
  fontSize: "24px",
  marginBottom: "18px",
},

statsNumber: {
  fontSize: "1.9rem",
  fontWeight: 800,
  color: "#07111D",
  marginBottom: "8px",
  lineHeight: 1.2,
},

statsLabel: {
  fontSize: "0.98rem",
  color: "#39444D",
  fontWeight: 600,
  lineHeight: 1.6,
  marginBottom: 0,
},

  };


  const Counter = ({ end, duration = 1800, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;

        started.current = true;
        let startTimestamp = null;

        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const current = Math.floor(progress * end);

          setCount(current);

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            setCount(end);
          }
        };

        requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={ref} style={styles.statsNumber}>
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

const caseStudyRef = useRef(null);
const [playCaseAnim, setPlayCaseAnim] = useState(false);

const [playIndustryAnimation, setPlayIndustryAnimation] = useState(false);
const industrySectionRef = useRef(null);


  /* 🔥 Trigger animation every time section comes into view */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlayIndustryAnimation(false);
          setTimeout(() => {
            setPlayIndustryAnimation(true);
          }, 50);
        }
      },
      { threshold: 0.4 }
    );

    if (industrySectionRef.current) {
      observer.observe(industrySectionRef.current);
    }

    return () => {
      if (industrySectionRef.current) {
        observer.unobserve(industrySectionRef.current);
      }
    };
  }, []);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setPlayCaseAnim(false);

        setTimeout(() => {
          setPlayCaseAnim(true);
        }, 100);
      }
    },
    { threshold: 0.35 }
  );

  if (caseStudyRef.current) {
    observer.observe(caseStudyRef.current);
  }

  return () => observer.disconnect();
}, []);


useEffect(() => {
  const section = industrySectionRef.current;
  if (!section) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setPlayIndustryAnimation(true);
        observer.unobserve(section);
      }
    },
    {
      threshold: 0.25,
    }
  );

  observer.observe(section);

  return () => observer.disconnect();
}, []);


  return (
    <div style={styles.page}>
      <style>
        {`
          @keyframes floatY {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-16px); }
            100% { transform: translateY(0px); }
          }

          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .home-hero-content {
            animation: fadeUp 1s ease;
          }

          .hero-btn-primary:hover {
            color: #fff !important;
            transform: translateY(-2px);
            box-shadow: 0 18px 36px rgba(174, 44, 17, 0.28) !important;
          }

          .hero-btn-secondary:hover {
            color: #f27c2d !important;
            background: #ffffff !important;
            transform: translateY(-2px);
          }

          .hero-stat-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 18px 36px rgba(12, 18, 24, 0.1) !important;
          }

          @media (max-width: 991px) {
            .home-hero-section {
              min-height: 520px !important;
            }

            .home-hero-overlay {
              background: linear-gradient(
                180deg,
                rgba(255,255,255,0.96) 0%,
                rgba(255,255,255,0.9) 45%,
                rgba(255,255,255,0.55) 75%,
                rgba(255,255,255,0.2) 100%
              ) !important;
            }
          }

          @media (max-width: 767px) {
            .home-hero-section {
              min-height: 470px !important;
            }
          }
            .stats-feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(7, 17, 29, 0.10) !important;
}
 /* ================= STATS MOBILE GRID FIX ================= */
/* ================= FINAL MOBILE FIX ================= */
@media (max-width: 576px) {

  /* GRID: 2 per row */
  .stats-section .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }

  .stats-section .row > div {
    flex: 0 0 47% !important;
    max-width: 47% !important;
  }

  /* LAST CARD SAME SIZE (NOT BIG) */
  .stats-section .row > div:last-child {
    flex: 0 0 47% !important;
    max-width: 47% !important;
  }

  /* CARD HEIGHT REDUCTION */
  .stats-feature-card {
    padding: 14px 12px !important;
    border-radius: 16px;
  }

  /* ICON SIZE */
  .stats-feature-card div[style*="width: 58px"] {
    width: 42px !important;
    height: 42px !important;
    margin-bottom: 10px !important;
  }

  /* NUMBER SIZE */
  .stats-feature-card div[style*="font-size: 1.9rem"] {
    font-size: 1.3rem !important;
    margin-bottom: 4px !important;
  }

  /* TEXT SIZE */
  .stats-feature-card p {
    font-size: 0.8rem !important;
    margin-bottom: 0 !important;
  }
}@media (max-width: 576px) {
  .stats-section {
    padding-bottom: 40px !important;
  }
}
@media (max-width: 768px) {

 

 
  /* OPERATEX SECTION */
  video {
    height: 320px !important;
    width: 100% !important;
  }

  @media (max-width:768px){
  .operate-video-wrapper{
      margin-left:0 !important;
  }
}

  /* INTERNATIONAL STANDARD CARDS */
  .col-md-6 {
    width: 100% !important;
    max-width: 100% !important;
    margin-bottom: 14px !important;
  }

  .col-md-6 > div {
    padding: 14px !important;
    border-radius: 14px !important;
  }

  /* MOBILE TOUCH EFFECT */
  .stats-feature-card,
  .theta-cards-grid > div,
  .industry-card-animated {
    transition: all 0.50s ease !important;
    -webkit-tap-highlight-color: transparent;
  }

  .stats-feature-card:active,
  .theta-cards-grid > div:active,
  .industry-card-animated:active {
    transform: scale(0.97);
    box-shadow: 0 10px 20px rgba(0,0,0,0.15) !important;
  }
}



/* Tablet: 3 cards per row */
@media (min-width: 577px) and (max-width: 992px) {
  .stats-section .row > div {
    flex: 0 0 33.3333%;
    max-width: 33.3333%;
  }
} 

@keyframes caseFromRight {
  from {
    opacity: 0;
    transform: translateX(80px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes caseFromLeft {
  from {
    opacity: 0;
    transform: translateX(-80px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .case-card-1,
  .case-card-2,
  .case-card-3 {
    opacity: 0;
  }

  .case-card-1.case-animate {
    animation: caseFromRight 0.7s ease forwards;
  }

  .case-card-2.case-animate {
    animation: caseFromLeft 0.7s ease forwards;
    animation-delay: 0.35s;
  }

  .case-card-3.case-animate {
    animation: caseFromRight 0.7s ease forwards;
    animation-delay: 0.7s;
  }
}
/* INTERNATIONAL STANDARD CARD HOVER */
.standard-card {
  transition: all 0.35s ease !important;
  cursor: pointer;
}

.standard-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(219,153,65,0.18) !important;
  border: 1px solid rgba(219,153,65,0.35) !important;
  background: linear-gradient(
    135deg,
    rgba(219,153,65,0.18),
    rgba(255,255,255,0.08)
  ) !important;
}

.standard-card:hover div:first-child {
  transform: scale(1.3);
  box-shadow: 0 0 18px rgba(219,153,65,0.5);
}

.standard-card div:first-child {
  transition: all 0.35s ease;
}
@media (max-width:768px){
  .standard-card:active{
    transform: scale(0.98);
  }
}
  
        `}
        
      </style>

    <section
  className="home-hero-section"
  style={{
    position: "relative",
    width: "100vw",
    minHeight: "700px",
    overflow: "hidden",
    marginLeft: "calc(50% - 50vw)",
    marginRight: "calc(50% - 50vw)",
    padding: 0,
  }}
>
<img
  src={heroImage}
  alt="OperateX Hero"
  style={{
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center center",
    zIndex: 1,
    transform: "scale(1.08)",
    animation: "heroImageMove 8s ease-in-out infinite alternate",
  }}
/>

  <div
    style={{
      position: "absolute",
      inset: 0,
      zIndex: 2,
      background:
        "linear-gradient(90deg, rgba(3,8,18,0.82) 0%, rgba(4,13,28,0.62) 38%, rgba(4,13,28,0.28) 68%, rgba(4,13,28,0.12) 100%)",
    }}
  />

  <div
    style={{
      position: "absolute",
      width: "420px",
      height: "420px",
      left: "-130px",
      top: "70px",
      borderRadius: "50%",
      background: "rgba(0, 210, 255, 0.22)",
      filter: "blur(90px)",
      zIndex: 2,
    }}
  />

  <div
    style={{
      position: "absolute",
      width: "360px",
      height: "360px",
      right: "8%",
      bottom: "-100px",
      borderRadius: "50%",
      background: "rgba(219, 153, 65, 0.20)",
      filter: "blur(95px)",
      zIndex: 2,
    }}
  />

  <div
    style={{
      position: "relative",
      zIndex: 3,
      minHeight: "650px",
      display: "flex",
      alignItems: "center",
    }}
  >
    <div className="container-fluid px-lg-5">
      <div className="row align-items-center" style={{ minHeight: "700px" }}>
       <div className="col-lg-7 col-md-10">
  <div className="home-hero-content">
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px 16px",
        border: "1px solid rgba(0, 210, 255, 0.45)",
        borderRadius: "999px",
        color: "#DB9941",
        fontSize: "13px",
        fontWeight: 700,
        letterSpacing: "2px",
        textTransform: "uppercase",
        textShadow: "0 2px 10px rgba(0,0,0,0.9)",
        boxShadow: "0 0 22px rgba(0, 210, 255, 0.24)",
        marginBottom: "22px",
        opacity: 0,
        animation: "fadeUp 10s ease-in-out infinite",
      }}
    >
      <span
        style={{
          width: "9px",
          height: "9px",
          borderRadius: "50%",
          background: "#00D2FF",
          boxShadow: "0 0 16px rgba(0,210,255,1)",
        }}
      ></span>
      Industrial Automation • MES • Intelligence
    </div>

    <h1
      style={{
         fontSize: "clamp(2.1rem, 4.6vw, 4.8rem)",
        lineHeight: 1.05,
        fontWeight: 760,
        color: "#ffffff",
        maxWidth: "900px",
        marginBottom: "22px",
        letterSpacing: "2px",
        WebkitTextStroke: "0.7px rgba(255,255,255,0.16)",
        textShadow:
          "0 3px 0 rgba(0,0,0,0.25), 0 10px 30px rgba(0,0,0,0.9), 0 0 24px rgba(0,210,255,0.28)",
        animation: "heroTextReveal 10s ease-in-out infinite",
      }}
    >
      Engineering the{" "}
      <span
        style={{
          color: "#f27c2d",
          fontWeight: 780,
          letterSpacing: "2px",
          WebkitTextStroke: "0.7px rgba(255,255,255,0.14)",
          textShadow:
            "0 3px 0 rgba(0,0,0,0.25), 0 10px 28px rgba(0,0,0,0.9), 0 0 24px rgba(219,153,65,0.45)",
        }}
      >
        Connected Factory
      </span>
    </h1>

    <p
      style={{
        color: "#F3F7FA",
        fontSize: "clamp(1.05rem, 1.6vw, 1.35rem)",
        lineHeight: 1.7,
        maxWidth: "720px",
        marginBottom: "34px",
        fontWeight: 500,
        letterSpacing: "2px",
        textShadow:
          "0 2px 0 rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.95)",
        opacity: 0,
        animation: "fadeUp 10s ease-in-out infinite",
        animationDelay: "0.25s",
      }}
    >
      Automation, Machine Building, MES & Industrial Intelligence
    </p>

    <div
      className="d-flex flex-wrap gap-3 mb-4"
      style={{
        opacity: 0,
        animation: "fadeUp 10s ease-in-out infinite",
        animationDelay: "0.45s",
      }}
    >
      <Link
        to="/contact"
        style={{
          padding: "14px 28px",
          borderRadius: "999px",
          background: "#f27c2d",
          color: "#07111D",
          fontWeight: 700,
          
          textDecoration: "none",
          boxShadow: "0 12px 30px rgba(0,0,0,0.45)",
          transition: "all 0.3s ease",
        }}
      >
        Talk to Us
      </Link>

      <Link
        to="/product"
        style={{
          padding: "14px 28px",
          borderRadius: "999px",
          border: "1px solid rgba(255,255,255,0.75)",
          color: "#ffffff",
          fontWeight: 700,
          letterSpacing: "2px",
          textDecoration: "none",
          textShadow: "0 2px 8px rgba(0,0,0,0.9)",
          boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
          transition: "all 0.3s ease",
        }}
      >
        Explore OperateX



         {/*Explore{" "}
  <span style={{ color: "#800000" }}>O</span>
  perate
  <span style={{ color: "#800000" }}>X</span>  */}
      </Link>
    </div>
  </div>
</div>

        <div className="col-lg-5 d-none d-lg-block"></div>
      </div>
    </div>
  </div>

<style>
  {`
    @keyframes heroTextReveal {
      0% {
        opacity: 0;
        transform: translateY(18px);
        filter: blur(6px);
      }
      14% {
        opacity: 1;
        transform: translateY(0);
        filter: blur(0);
      }
      84% {
        opacity: 1;
        transform: translateY(0);
        filter: blur(0);
      }
      100% {
        opacity: 0;
        transform: translateY(-8px);
        filter: blur(4px);
      }
    }

    @keyframes fadeUp {
      0% {
        opacity: 0;
        transform: translateY(16px);
        filter: blur(4px);
      }
      14% {
        opacity: 1;
        transform: translateY(0);
        filter: blur(0);
      }
      84% {
        opacity: 1;
        transform: translateY(0);
        filter: blur(0);
      }
      100% {
        opacity: 0;
        transform: translateY(-6px);
        filter: blur(3px);
      }
    }

      @keyframes heroImageMove {
    0% {
      transform: scale(1.08) translateX(0px) translateY(0px);
    }
    50% {
      transform: scale(1.11) translateX(-18px) translateY(-8px);
    }
    100% {
      transform: scale(1.08) translateX(14px) translateY(8px);
    }
  }
  `}
</style>
</section>

 {/* <section style={styles.statsSection} className="stats-section">
      <div className="container">
        <div style={styles.statsTop}>
          <div
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
            }}
          >
            Our Footprint
          </div>

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
            Built across projects, devices and industries
          </h2>

          <p style={styles.statsSubtext}>
            We deliver connected industrial solutions that combine automation,
            machine intelligence, digital manufacturing and scalable deployment.
          </p>
        </div>

        <div className="row g-4 stats-row">
          <div className="col-lg col-md-4 col-sm-6">
            <div style={styles.statsCard} className="stats-feature-card">
              <div style={styles.statsCardGlow}></div>
              <div style={styles.statsIconWrap}>
                <FaProjectDiagram />
              </div>
              <Counter end={400} suffix="+" />
              <p style={styles.statsLabel}>Projects</p>
            </div>
          </div>

          <div className="col-lg col-md-4 col-sm-6">
            <div style={styles.statsCard} className="stats-feature-card">
              <div style={styles.statsCardGlow}></div>
              <div style={styles.statsIconWrap}>
                <FaMicrochip />
              </div>
              <Counter end={7500} suffix="+" />
              <p style={styles.statsLabel}>Connected Devices</p>
            </div>
          </div>

          <div className="col-lg col-md-4 col-sm-6">
            <div style={styles.statsCard} className="stats-feature-card">
              <div style={styles.statsCardGlow}></div>
              <div style={styles.statsIconWrap}>
                <FaIndustry />
              </div>
              <Counter end={10} suffix="+" />
              <p style={styles.statsLabel}>Industries</p>
            </div>
          </div>

          <div className="col-lg col-md-6 col-sm-6">
            <div style={styles.statsCard} className="stats-feature-card">
              <div style={styles.statsCardGlow}></div>
              <div style={styles.statsIconWrap}>
                <FaCogs />
              </div>
              <Counter end={30} suffix="+" />
              <p style={styles.statsLabel}>Technologies</p>
            </div>
          </div>

          <div className="col-lg col-md-6 col-sm-12">
            <div style={styles.statsCard} className="stats-feature-card">
              <div style={styles.statsCardGlow}></div>
              <div style={styles.statsIconWrap}>
                <FaCube />
              </div>
              <Counter end={6} />
              <p style={styles.statsLabel}>Core Products</p>
            </div>
          </div>
        </div>
      </div>
    </section> */}

    <section style={styles.statsSection} className="stats-section">
  <div className="container">
    <div style={styles.statsTop}>
      <div
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
        }}
      >
        Our Footprint
      </div>

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
        Built across projects, devices and industries
      </h2>

      <p style={styles.statsSubtext}>
        We deliver connected industrial solutions that combine automation,
        machine intelligence, digital manufacturing and scalable deployment.
      </p>
    </div>

    <div className="row g-4 stats-row">
      <div className="col-lg col-md-4 col-sm-6">
        <div style={styles.statsCard} className="stats-feature-card">
          <div style={styles.statsCardGlow}></div>
          <div style={styles.statsIconWrap}>
            <Lottie animationData={projectAnim} loop style={{ width: 55, height: 55 }} />
          </div>
          <Counter end={400} suffix="+" />
          <p style={styles.statsLabel}>Projects</p>
        </div>
      </div>

      <div className="col-lg col-md-4 col-sm-6">
        <div style={styles.statsCard} className="stats-feature-card">
          <div style={styles.statsCardGlow}></div>
          <div style={styles.statsIconWrap}>
            <Lottie animationData={deviceAnim} loop style={{ width: 55, height: 55 }} />
          </div>
          <Counter end={7500} suffix="+" />
          <p style={styles.statsLabel}>Connected Devices</p>
        </div>
      </div>

      <div className="col-lg col-md-4 col-sm-6">
        <div style={styles.statsCard} className="stats-feature-card">
          <div style={styles.statsCardGlow}></div>
          <div style={styles.statsIconWrap}>
            <Lottie animationData={industryAnim} loop style={{ width: 55, height: 55 }} />
          </div>
          <Counter end={10} suffix="+" />
          <p style={styles.statsLabel}>Industries</p>
        </div>
      </div>

      <div className="col-lg col-md-6 col-sm-6">
        <div style={styles.statsCard} className="stats-feature-card">
          <div style={styles.statsCardGlow}></div>
          <div style={styles.statsIconWrap}>
            <Lottie animationData={techAnim} loop style={{ width: 55, height: 55 }} />
          </div>
          <Counter end={30} suffix="+" />
          <p style={styles.statsLabel}>Technologies</p>
        </div>
      </div>

      <div className="col-lg col-md-6 col-sm-12">
        <div style={styles.statsCard} className="stats-feature-card">
          <div style={styles.statsCardGlow}></div>
          <div style={styles.statsIconWrap}>
            <Lottie animationData={productAnim} loop style={{ width: 55, height: 55 }} />
          </div>
          <Counter end={6} />
          <p style={styles.statsLabel}>Core Products</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section
  style={{
    padding: "90px 0",
    backgroundColor: "#ffffff",
  }}
>
  <div className="container">
    <div className="row mb-3 justify-content-center text-center">
      <div className="col-lg-9">
        <div
          style={{
            display: "inline-block",
            fontSize: "18px",
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#f27c2d",
            marginBottom: "8px",
          }}
        >
          What We Do
        </div>

        <p
          style={{
            fontSize: "clamp(1.15rem, 2vw, 1.55rem)",
            lineHeight: 1.8,
            color: "#07111D",
            marginBottom: 0,
            fontWeight: 600,
            maxWidth: "900px",
            marginInline: "auto",
          }}
        >
          Integrated solutions across automation, machine engineering, and
          digital manufacturing.
        </p>
      </div>
    </div>

    <div className="row g-2">
{
[
  [factoryAnim, "Factory Automation", "#f27c2d", "factory-automation"],
  [machineAnim, "Machine Building", "#f27c2d", "machine-building"],
  [mesAnim, "MES & Digital Manufacturing", "#f27c2d", "mes"],
  [traceabilityAnim, "Traceability & Quality Systems", "#f27c2d", "traceability"],
  [iotAnim, "Industrial IoT & Data Integration", "#f27c2d", "iot"],
  [panelAnim, "Panel & Control Systems", "#f27c2d", "panel-control"]
]
.map(([animation, title, color, sectionId], index) => (
  <div className="col-lg-4 col-md-6" key={index}>
    <div
      style={{
        height: "100%",
        minHeight: "260px",
        padding: "24px 18px",
        borderRadius: "26px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        transition: "all 0.35s ease",
      }}
    >
      {/* 🔥 JSON animation */}
      <div
        style={{
          width: "110px",
          height: "110px",
          marginBottom: "18px",
        }}
      >
        <Lottie
          animationData={animation}
          loop
          autoplay
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      <h4
        style={{
          fontSize: "1.18rem",
          fontWeight: 600,
          color: "#07111D",
          marginBottom: "16px",
        }}
      >
        {title}
      </h4>

      <Link
  to={`/solutions#${sectionId}`}
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    color,
    fontSize: "0.92rem",
    fontWeight: 500,
    textDecoration: "none",
  }}
>
  Know More →
</Link>
    </div>
  </div>
))}
    </div>
  </div>
</section>

{/* ================= OPERATEX HIGHLIGHT ================= */}
<section
  style={{
    padding: "76px 0",
    background:
      "linear-gradient(115deg, #07111D 0%, #0d1b2a 56%, #f7f3ee 48%, #ffffff 50%)",
    color: "#ffffff",
    position: "relative",
    overflow: "hidden",
  }}
>
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "radial-gradient(circle at 78% 45%, rgba(219,153,65,0.18) 0%, rgba(219,153,65,0.06) 28%, transparent 55%)",
      pointerEvents: "none",
    }}
  />

  <div className="container" style={{ position: "relative", zIndex: 2 }}>
    <div className="row align-items-center" style={{ rowGap: "68px" }}>
      {/* LEFT CONTENT */}
      <div className="col-lg-6">
        <div
          style={{
            animation: "operateFadeUp 1s ease forwards",
          }}
        >
          <div
            style={{
              display: "inline-block",
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#DB9941",
              marginBottom: "14px",
            }}
          >
            OperateX Highlight
          </div>

          <h2
            style={{
              fontSize: "clamp(1.9rem, 3vw, 3.1rem)",
              fontWeight: 650,
              lineHeight: 1.18,
              letterSpacing: "1px",
              marginBottom: "14px",
              color: "#ffffff",
              textShadow: "0 10px 28px rgba(0,0,0,0.38)",
            }}
          >
            Manufacturing Intelligence Platform
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.82)",
              marginBottom: "22px",
              maxWidth: "560px",
            }}
          >
            OperateX connects machines, operators, quality, maintenance and
            planning into one real-time digital factory system.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "12px",
              marginBottom: "26px",
              maxWidth: "560px",
            }}
          >
            {[
              "Live Production",
              "OEE Insights",
              "Traceability",
              "Quality Analytics",
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  padding: "12px 14px",
                  borderRadius: "14px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#ffffff",
                  fontSize: "0.92rem",
                  fontWeight: 500,
                  animation: "operateFadeUp 1s ease forwards",
                  animationDelay: `${0.15 + index * 0.08}s`,
                  opacity: 0,
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#DB9941",
                    marginRight: "10px",
                    transform: "translateY(-1px)",
                  }}
                />
                {item}
              </div>
            ))}
          </div>

        <a
  href="/product"
  style={{
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "13px 24px",
    borderRadius: "999px",
    background: "linear-gradient(135deg, #f27c2d 0%, #DB9941 100%)",
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "0.95rem",
    letterSpacing: "0.7px",
    boxShadow: "0 14px 30px rgba(219,153,65,0.28)",
    border: "1px solid rgba(255,255,255,0.28)",
    transition: "all 0.35s ease",
  }}
>
  Explore OperateX
  <span
    style={{
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      background: "rgba(255,255,255,0.22)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "15px",
      lineHeight: 1,
    }}
  >
    →
  </span>
</a>
        </div>
      </div>

      {/* RIGHT VIDEO */}
      <div className="col-lg-6">
        <div
          style={{
            marginLeft:"25%",
            animation: "operateVideoFloat 6s ease-in-out infinite",
          }}
        >
          <div
            style={{
              width: "100%",
              borderRadius: "24px",
              overflow: "hidden",
              background: "transparent",
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              style={{
                width: "100%",
                height: "480px",
                objectFit: "contain",
                display: "block",
                background: "transparent",
              }}
            >
              <source src="/operateX_for_Web.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    {`
      @keyframes operateFadeUp {
        from {
          opacity: 0;
          transform: translateY(22px);
          filter: blur(5px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }
      }

      @keyframes operateVideoFloat {
        0% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
        100% {
          transform: translateY(0px);
        }
      }
    `}
  </style>
</section>

{/* ================= INDUSTRIES WE SERVE ================= */}

<section
      ref={industrySectionRef}
      style={{
        padding: "90px 0",
        backgroundColor: "#ffffff",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes cardSpread {
          0% {
            transform: scaleX(0.22);
            transform-origin: right center;
          }
          100% {
            transform: scaleX(1);
            transform-origin: right center;
          }
        }

        @keyframes textReveal {
          0% {
            opacity: 0;
            transform: translateX(-14px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .industry-card-text {
          opacity: 0;
        }

        .industry-card-animated {
          animation: cardSpread 0.75s ease forwards;
          transform-origin: right center;
        }

        .industry-card-animated .industry-card-text {
          animation: textReveal 0.45s ease forwards;
        }

        .industry-card-1 { animation-delay: 0s; }
        .industry-card-1 .industry-card-text { animation-delay: 0.65s; }

        .industry-card-2 { animation-delay: 0.12s; }
        .industry-card-2 .industry-card-text { animation-delay: 0.77s; }

        .industry-card-3 { animation-delay: 0.24s; }
        .industry-card-3 .industry-card-text { animation-delay: 0.89s; }

        .industry-card-4 { animation-delay: 0.36s; }
        .industry-card-4 .industry-card-text { animation-delay: 1.01s; }

        .industry-card-5 { animation-delay: 0.48s; }
        .industry-card-5 .industry-card-text { animation-delay: 1.13s; }

        .industry-card-6 { animation-delay: 0.60s; }
        .industry-card-6 .industry-card-text { animation-delay: 1.25s; }
      `}</style>

      <div className="container">
        <div className="row mb-5 justify-content-center text-center">
          <div className="col-lg-9">
            <div
              style={{
                display: "inline-block",
                fontSize: "20px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#f27c2d",
                marginBottom: "8px",
              }}
            >
              Industries We Serve
            </div>

            <p
              style={{
                fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                lineHeight: 1.8,
                color: "#07111D",
                marginBottom: "10px",
                fontWeight: 700,
                maxWidth: "950px",
                marginInline: "auto",
              }}
            >
              Automation and digital manufacturing solutions tailored to industry-specific needs
            </p>

            <p
              style={{
                maxWidth: "760px",
                margin: "0 auto",
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "#39444D",
                fontWeight: 500,
              }}
            >
              Designed for production-critical environments across discrete and process manufacturing.
            </p>
          </div>
        </div>

        <div className="row g-3 justify-content-center">
          {[
            {
              title: "Automotive & EV",
              animation: autoAnim,
              iconBg: "#fcfcfc",
              bg: "linear-gradient(180deg, #ffffff 0%, #F5F1EB 100%)",
            },
            {
              title: "Auto Ancillaries",
              animation: ancillariesAnim,
              iconBg: "#fcfcfc",
              bg: "#ffffff",
            },
            {
              title: "Consumer Durables",
              animation: consumerAnim,
              iconBg: "#fcfcfc",
              bg: "linear-gradient(180deg, #ffffff 0%, #F8F5EE 100%)",
            },
            {
              title: "Food & Beverage",
              animation: foodAnim,
              iconBg: "#fcfcfc",
              bg: "#ffffff",
            },
            {
              title: "Pharmaceuticals & Life Sciences",
              animation: pharmaAnim,
              iconBg: "#fcfcfc",
              bg: "linear-gradient(180deg, #ffffff 0%, #F5F1EB 100%)",
            },
            {
              title: "Metals & Process Industries",
              animation: metalsAnim,
              iconBg: "#fcfcfc",
              bg: "#ffffff",
            },
          ].map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                className={
                  playIndustryAnimation
                    ? `industry-card-animated industry-card-${index + 1}`
                    : ""
                }
                style={{
                  padding: "22px 24px",
                  borderRadius: "20px",
                  border: "1px solid rgba(57,68,77,0.10)",
                  background: item.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  minHeight: "88px",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  className="industry-card-text"
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#07111D",
                    lineHeight: 1.5,
                  }}
                >
                  {item.title}
                </div>

                {/* 🔥 Lottie Icon */}
                <div
  style={{
    minWidth: "80px",
    width: "80px",
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    position: "relative",
    zIndex: 2,
  }}
>
  <Lottie
    animationData={item.animation}
    loop
    autoplay
    style={{ width: "70px", height: "70px" }}
  />
</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

{/* ================= WHY THETAVEGA ================= */}
<section
  style={{
    padding: "62px 0 60px 0",
    background: "linear-gradient(180deg, #E5E5DF 0%, #ffffff 100%)",
    overflow: "hidden",
    position: "relative",
  }}
>
  <style>{`
    @keyframes thetaFloat1 {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }

    @keyframes thetaFloat2 {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-14px); }
    }

    @keyframes thetaFloat3 {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }

    @media (max-width: 991px) {
      .theta-main-row {
        flex-direction: column !important;
        gap: 30px !important;
      }

      .theta-left-block,
      .theta-right-block {
        width: 100% !important;
        max-width: 100% !important;
        flex: 0 0 100% !important;
      }

      .theta-left-block {
        text-align: center !important;
        padding-right: 0 !important;
      }

      .theta-left-block p {
        max-width: 100% !important;
        margin: 0 auto !important;
      }

      .theta-cards-grid {
        grid-template-columns: 1fr 1fr !important;
        gap: 16px !important;
      }
    }
@keyframes thetaCircleFloatBig {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  50% {
    transform: translateY(-14px) translateX(10px);
  }
}

@keyframes thetaCircleFloatSmall {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  50% {
    transform: translateY(12px) translateX(-8px);
  }
}

    @media (max-width: 575px) {
      .theta-cards-grid {
        grid-template-columns: 1fr !important;
      }
    }
  `}</style>

<div
  style={{
    position: "absolute",
    top: "-104px",
    left: "-104px",
    width: "430px",
    height: "430px",
    borderRadius: "50%",
    background: "#DB9941",
    opacity: 0.18,
    animation: "thetaCircleFloatBig 7s ease-in-out infinite",
    zIndex: 0,
  }}
/>

<div
  style={{
    position: "absolute",
    top: "120px",
    left: "80px",
    width: "292px",
    height: "292px",
    borderRadius: "50%",
    background: "#f27c2d",
    opacity: 0.28,
    animation: "thetaCircleFloatSmall 5.5s ease-in-out infinite",
    zIndex: 1,
  }}
/>
 <div className="container" style={{ position: "relative", zIndex: 2 }}>
    <div
      style={{
        textAlign: "center",
        marginBottom: "34px",
      }}
    >
      <div
        style={{
            display: "inline-block",
            fontSize: "20px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#f27c2d",
            marginBottom: "8px",
          }}
      >
        Why ThetaVega
      </div>
    </div>

    <div
      className="theta-main-row"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "8px",
      }}
    >
      <div
        className="theta-left-block"
        style={{
          width: "40%",
          maxWidth: "40%",
          flex: "0 0 40%",
          paddingRight: "10px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.7rem, 2.4vw, 2.45rem)",
            fontWeight: 800,
            lineHeight: 1.16,
            color: "#07111D",
            marginBottom: "34px",
          }}
        >
          Built for real manufacturing environments
        </h2>

        <p
          style={{
            fontSize: "0.98rem",
            lineHeight: 1.78,
            color: "#39444D",
            marginBottom: 0,
            maxWidth: "410px",
          }}
        >
          We combine plant-floor engineering with digital manufacturing
          expertise to deliver systems that are practical, scalable and
          production-ready.
        </p>
      </div>

      <div
        className="theta-right-block"
        style={{
          width: "60%",
          maxWidth: "60%",
          flex: "0 0 60%",
        }}
      >
        <div
          className="theta-cards-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "18px",
            alignItems: "stretch",
          }}
        >
          {[
            {
              icon: "https://cdn.lordicon.com/rpviwvwn.json",
              title: "OT + IT Convergence",
              text: "Deep integration of shop-floor automation with manufacturing IT and enterprise systems.",
              animation: "thetaFloat1 4.5s ease-in-out infinite",
            },
            {
              icon: "https://cdn.lordicon.com/fwkrbvja.json",
              title: "Engineering-Driven Approach",
              text: "Designed and executed by engineers with real plant-floor experience.",
              animation: "thetaFloat2 5s ease-in-out infinite",
            },
            {
              icon: "https://cdn.lordicon.com/msoeawqm.json",
              title: "End-to-End Capability",
              text: "From machine design to MES deployment and plant-wide integration.",
              animation: "thetaFloat3 4.7s ease-in-out infinite",
            },
            {
              icon: "https://cdn.lordicon.com/iltqorsz.json",
              title: "Production-Ready Solutions",
              text: "Systems engineered for reliability, scalability, and long-term operation.",
              animation: "thetaFloat2 5.3s ease-in-out infinite",
            },
            {
              icon: "https://cdn.lordicon.com/wloilxuq.json",
              title: "Data-Driven Manufacturing",
              text: "Enabling real-time insights, analytics, and decision-making.",
              animation: "thetaFloat1 4.9s ease-in-out infinite",
            },
{
  icon: "https://cdn.lordicon.com/hprrytat.json",
  title: "Scalable & Future-Ready",
  text: "Built to support Industry 4.0, digital transformation, and global manufacturing standards.",
  animation: "thetaFloat3 5.1s ease-in-out infinite",
  trigger: "in",
  state: "in-reveal",
  stroke: "bold",
  colors: "primary:#f27c2d",
},
          ].map((item, index) => (
            <div
              key={index}
              style={{
                height: "100%",
                animation: item.animation,
              }}
            >
              <div
                style={{
                  height: "100%",
                  minHeight: "198px",
                  borderRadius: "22px",
                  padding: "18px 18px 16px 18px",
                  background: "rgba(255,255,255,0.72)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.55)",
                  boxShadow: "0 14px 28px rgba(7,17,29,0.07)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "12px",
                    minHeight: "46px",
                  }}
                >
                 <lord-icon
  src={item.icon}
  trigger="loop"
  delay="1500"
  state={item.state || ""}
  colors={item.colors || "primary:#07111D,secondary:#f27c2d"}
  style={{
    width: "46px",
    height: "46px",
  }}
></lord-icon>
                </div>

                <h4
                  style={{
                    fontSize: "0.98rem",
                    fontWeight: 700,
                    color: "#07111D",
                    marginBottom: "8px",
                    lineHeight: 1.3,
                    minHeight: "42px",
                  }}
                >
                  {item.title}
                </h4>

                <p
                  style={{
                    fontSize: "0.84rem",
                    lineHeight: 1.58,
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
</section>

{/* ================= INTERNATIONAL STANDARDS ================= */}
<section
  style={{
    padding: "90px 0",
    backgroundColor: "#07111D",
    color: "#ffffff",
  }}
>
  <div className="container">
    <div className="row align-items-center g-5">
      <div className="col-lg-5">
        <div
          style={{
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "1.4px",
            textTransform: "uppercase",
            color: "#DB9941",
            marginBottom: "14px",
          }}
        >
          Built on International Standards
        </div>

        <h2
          style={{
            fontSize: "clamp(1.8rem, 2.9vw, 2.6rem)",
            fontWeight: 800,
            lineHeight: 1.2,
            color: "#ffffff",
            marginBottom: "16px",
          }}
        >
          Engineered for safety, reliability and compliance
        </h2>

        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.9,
            color: "rgba(255,255,255,0.82)",
            marginBottom: "22px",
          }}
        >
          Our solutions are designed and engineered in alignment with global
          standards to ensure safety, reliability, and compliance.
        </p>

        <div
          style={{
            padding: "18px 20px",
            borderRadius: "18px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#DB9941",
            fontWeight: 600,
            lineHeight: 1.8,
          }}
        >
          Ensuring globally compliant, audit-ready manufacturing systems.
        </div>
      </div>

      <div className="col-lg-7">
        <div className="row g-3">
          {[
            "ISO 9001 – Quality Management",
            "ISO 27001 – Information Security",
            "ISA-95 / ISA-88 – Industrial Architecture",
            "IEC 62443 – Cybersecurity",
            "CE / UL – Equipment Compliance",
            "RoHS – Environmental Compliance",
          ].map((item, index) => (
            <div className="col-md-6" key={index}>
              <div
               className="standard-card"
                style={{
                  height: "100%",
                  padding: "18px 18px",
                  borderRadius: "18px",
                  background:
                    index % 2 === 0
                      ? "rgba(219,153,65,0.10)"
                      : "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    minWidth: "12px",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#DB9941",
                  }}
                />
                <div
                  style={{
                    fontSize: "0.96rem",
                    lineHeight: 1.7,
                    color: "#ffffff",
                    fontWeight: 500,
                  }}
                >
                  {item}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

{/* ================= CASE STUDIES PREVIEW ================= */}
<section
 ref={caseStudyRef}
  style={{
    padding: "95px 0",
    backgroundColor: "#ffffff",
  }}
>
  <div className="container">
    <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-5">
      <div>
        <div
          style={{
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "1.4px",
            textTransform: "uppercase",
            color: "#f27c2d",
            marginBottom: "12px",
          }}
        >
          Case Studies Preview
        </div>

        <h2
          style={{
            fontSize: "clamp(1.8rem, 2.9vw, 2.6rem)",
            fontWeight: 800,
            color: "#07111D",
            marginBottom: "10px",
          }}
        >
          Proven in Production Environments
        </h2>
      </div>

      
    </div>

    <div className="row g-4 case-study-row">
      {[
        {
          title: "Engine Assembly Traceability System",
          text: "Complete SKU indexing, DC tool integration, and real-time production tracking.",
        },
        {
          title: "EV Battery Assembly Automation",
          text: "Cell sorting, welding validation, and process traceability systems.",
        },
        {
          title: "Machine Monitoring & OEE System",
          text: "Real-time machine connectivity with analytics dashboards and reporting.",
        },
      ].map((item, index) => (
       <div
  className={`col-lg-4 case-card-${index + 1} ${
    playCaseAnim ? "case-animate" : ""
  }`}
  key={index}
>
          <div
            style={{
              height: "100%",
              borderRadius: "24px",
              padding: "28px 24px",
              background:
                index === 1
                  ? "linear-gradient(180deg, #07111D 0%, #13263b 100%)"
                  : "linear-gradient(180deg, #ffffff 0%, #E5E5DF 100%)",
              border:
                index === 1
                  ? "1px solid rgba(255,255,255,0.06)"
                  : "1px solid rgba(57,68,77,0.08)",
              boxShadow:
                index === 1
                  ? "0 16px 34px rgba(7,17,29,0.16)"
                  : "0 14px 28px rgba(7,17,29,0.05)",
            }}
          >
            <div
              style={{
                color: "#DB9941",
                fontSize: "14px",
                fontWeight: 700,
                marginBottom: "14px",
              }}
            >
              🔶 Case Study {index + 1}
            </div>

            <h4
              style={{
                fontSize: "1.18rem",
                fontWeight: 700,
                color: index === 1 ? "#ffffff" : "#07111D",
                marginBottom: "12px",
                lineHeight: 1.4,
              }}
            >
              {item.title}
            </h4>

            <p
              style={{
                fontSize: "0.97rem",
                lineHeight: 1.85,
                color: index === 1 ? "rgba(255,255,255,0.82)" : "#39444D",
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
</section>
    </div>
  );
};

export default Home;