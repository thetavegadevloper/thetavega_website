import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaBuilding,
  FaIndustry,
  FaMapMarkedAlt,
  FaLocationArrow,
  FaPaperPlane,
  FaHeadset,
  FaArrowRight,
  FaCogs,
  FaProjectDiagram,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

/* =========================================================
   BACKEND API
========================================================= */

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const ContactPage = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 768
  );
   useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  useEffect(() => {
    const handleResize = () =>
      setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  const fadeUp = {
    initial: {
      opacity: 0,
      y: 42,
    },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: false,
      amount: 0.25,
    },

    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  };

  const fadeLeft = {
    initial: {
      opacity: 0,
      x: -55,
    },

    whileInView: {
      opacity: 1,
      x: 0,
    },

    viewport: {
      once: false,
      amount: 0.25,
    },

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  };

  const fadeRight = {
    initial: {
      opacity: 0,
      x: 55,
    },

    whileInView: {
      opacity: 1,
      x: 0,
    },

    viewport: {
      once: false,
      amount: 0.25,
    },

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  };

  const deliveryCenters = [
    "Sambhaji Nagar",
    "Pune",
    "Mumbai",
    "Indore",
    "Delhi NCR",
    "Bangalore",
    "Chennai",
    "Hyderabad",
    "Nagpur",
    "Raipur",
    "Kolkata",
  ];

  const [showCookie, setShowCookie] =
    useState(false);

  useEffect(() => {
    const cookieConsent =
      localStorage.getItem("cookieConsent");

    if (!cookieConsent) {
      setShowCookie(true);
    }
  }, []);

  const items = [
    {
      title: "New Production Lines",
      color: "#3B82F6",
    },

    {
      title: "Automation Upgrade",
      color: "#06B6D4",
    },

    {
      title: "MES & Traceability",
      color: "#8B5CF6",
    },

    {
      title: "Quality Compliance",
      color: "#22C55E",
    },

    {
      title: "OEE Optimization",
      color: "#EAB308",
    },
  ];

  const inputStyle = {
    width: "100%",
    height: "54px",
    padding: "0 18px",
    borderRadius: "16px",
    border:
      "1px solid rgba(7,17,29,0.12)",
    background: "#fcfbf8",
    fontSize: "15px",
    color: "#07111D",
    outline: "none",
  };

  /* =========================================================
     CONTACT FORM STATE
  ========================================================= */

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    companyName: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [
    successMessage,
    setSuccessMessage,
  ] = useState("");

  const [apiError, setApiError] =
    useState("");

  const [
    isSubmitting,
    setIsSubmitting,
  ] = useState(false);

  /* =========================================================
     FORM CHANGE
  ========================================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    if (successMessage) {
      setSuccessMessage("");
    }

    if (apiError) {
      setApiError("");
    }
  };

  /* =========================================================
     CONTACT API SUBMIT
  ========================================================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    /* ================= VALIDATION ================= */

    if (!formData.fullName.trim()) {
      newErrors.fullName =
        "Full name is required";
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      newErrors.email =
        "Please enter valid email";
    }

    const mobileRegex = /^[0-9]{10}$/;

    if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile =
        "Mobile must be 10 digits";
    }

    if (!formData.subject.trim()) {
      newErrors.subject =
        "Subject required";
    }

    if (
      formData.message.trim().length < 10
    ) {
      newErrors.message =
        "Message too short";
    }

    if (
      Object.keys(newErrors).length > 0
    ) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSuccessMessage("");
    setApiError("");
    setIsSubmitting(true);

    try {
      /* ===========================================
         CHECK ENV
      =========================================== */

      if (!API_BASE_URL) {
        throw new Error(
          "REACT_APP_API_BASE_URL is not configured in the frontend .env file"
        );
      }

      /* ===========================================
         BACKEND PAYLOAD
         
         Frontend:
         fullName
         companyName

         MongoDB Backend:
         full_name
         company_name
      =========================================== */

      const payload = {
        full_name:
          formData.fullName.trim(),

        email:
          formData.email.trim(),

        mobile:
          formData.mobile.trim(),

        company_name:
          formData.companyName.trim(),

        subject:
          formData.subject.trim(),

        message:
          formData.message.trim(),
      };

      console.log(
        "Sending contact payload:",
        payload
      );

      console.log(
        "Contact API:",
        `${API_BASE_URL}/api/contact`
      );

      /* ===========================================
         API CALL
      =========================================== */

      const response = await fetch(
        `${API_BASE_URL}/api/contact`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(payload),
        }
      );

      const data =
        await response.json();

      console.log(
        "Contact API response:",
        data
      );

      /* ===========================================
         CHECK BACKEND RESPONSE
      =========================================== */

      if (
        !response.ok ||
        !data.success
      ) {
        throw new Error(
          data.message ||
            "Unable to send your message"
        );
      }

      /* ===========================================
         SUCCESS
      =========================================== */

      setSuccessMessage(
        "Message sent successfully!"
      );

      /* ===========================================
         CLEAR FORM
      =========================================== */

      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        companyName: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(
        "Contact API error:",
        error
      );

      setApiError(
        error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /* =========================================================
     CONTACT CARDS
  ========================================================= */

  const contactCards = [
    {
      title: "Email",
      primary: "info@thetavega.tech",
      secondary: "sales@thetavega.tech",
      Icon: FaEnvelope,
      href: "mailto:info@thetavega.tech",
    },

    {
      title: "Phone",
      primary: "+91 9175109978",
      secondary: "+91 9371675893",
      Icon: FaPhoneAlt,
      href: "tel:+919175109978",
    },

    {
      title: "Corporate Office",
      primary:
        "Block No. 02, Sadafulli, Rana Nagar",

      secondary:
        "Chh.Sambhaji Nagar 431001 INDIA",

      Icon: FaBuilding,

      href:
        "https://www.google.com/maps/search/?api=1&query=Block+No+02+Sadafulli+Rana+Nagar+Chhatrapati+Sambhaji+Nagar",
    },

    {
      title: "Works",
      primary: "MIDC Waluj",

      secondary:
        "Chh.Sambhaji Nagar- 431136 INDIA",

      Icon: FaIndustry,

      href:
        "https://www.google.com/maps/search/?api=1&query=MIDC+Waluj+Chhatrapati+Sambhaji+Nagar",
    },
  ];

  return (
    <div
      style={{
        background: "#ffffff",
        color: "#07111D",
        overflow: "hidden",
      }}
    >
      {/* =====================================================
          HERO - CONTACT + ANIMATED INDIA MAP
      ===================================================== */}

  {/* =====================================================
    HERO - INNOVATIVE CORPORATE LOCATION
===================================================== */}

<section className="tv-contact-hero-innovation">

  {/* BACKGROUND GRID */}
  <div className="tv-hero-tech-grid" />

  {/* BACKGROUND GLOWS */}
  <motion.div
    className="tv-hero-orange-glow"
    animate={{
      scale: [1, 1.12, 1],
      opacity: [0.35, 0.65, 0.35],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  <div className="container">
    <div className="tv-hero-innovation-layout">

      {/* =================================================
          LEFT
      ================================================= */}

      <motion.div
        className="tv-hero-content-new"
        initial={{
          opacity: 0,
          x: -35,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
      >

        {/* EYEBROW */}

        <div className="tv-hero-eyebrow">
          <span className="tv-eyebrow-pulse" />

          <FaHeadset size={12} />

          CONTACT THETAVEGA

          <span className="tv-eyebrow-line" />
        </div>


        {/* HEADING */}

        <h1 className="tv-hero-main-title">
          Let’s Talk About Your
          <span>
            Factory Goals
          </span>
        </h1>


        {/* DESCRIPTION */}

        <p className="tv-hero-description">
          Whether you are planning automation, MES, IIoT,
          traceability, or machine integration, our team can
          help you move from idea to execution with the right
          engineering approach.
        </p>

        <p className="tv-hero-description tv-hero-description-last">
          Reach out to ThetaVega Tech for smart manufacturing
          solutions, industrial digitalization, and scalable
          factory transformation.
        </p>


        {/* BUTTONS */}

        <div className="tv-hero-action-row">

          <motion.a
            href="mailto:sales@thetavega.tech"
            className="tv-hero-primary-action"
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            <FaPaperPlane size={12} />

            Start Discussion

            <span className="tv-btn-arrow">
              <FaArrowRight size={10} />
            </span>
          </motion.a>


          <motion.a
            href="tel:+919371675893"
            className="tv-hero-secondary-action"
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            <FaPhoneAlt
              size={12}
              color="#f27c2d"
            />

            Call Now
          </motion.a>

        </div>


        {/* CONNECTED PROCESS */}

        <div className="tv-hero-capability-flow">

          {[
            "Automation",
            "MES",
            "IIoT",
            "Traceability",
            "Machine Integration",
          ].map((item, index) => (

            <React.Fragment key={item}>

              <motion.div
                className="tv-capability-node"
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.55 + index * 0.08,
                }}
              >
                <motion.span
                  animate={{
                    boxShadow: [
                      "0 0 0 3px rgba(242,124,45,0.06)",
                      "0 0 0 7px rgba(242,124,45,0.02)",
                      "0 0 0 3px rgba(242,124,45,0.06)",
                    ],
                  }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    delay: index * 0.15,
                  }}
                />

                {item}
              </motion.div>

              {index < 4 && (
                <div className="tv-capability-line">
                  <motion.div
                    animate={{
                      x: ["-100%", "250%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.25,
                      ease: "linear",
                    }}
                  />
                </div>
              )}

            </React.Fragment>

          ))}

        </div>

      </motion.div>


      {/* =================================================
          RIGHT - CORPORATE DIGITAL MAP
      ================================================= */}

      <motion.div
        className="tv-hero-map-column"
        initial={{
          opacity: 0,
          x: 55,
          scale: 0.94,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.9,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >

        {/* FLOATING LABEL */}

        <motion.div
          className="tv-map-floating-tag"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span />

          LIVE  LOCATION
        </motion.div>


        {/* MAIN MAP CARD */}

        <div className="tv-innovative-map-card">

          {/* MOVING BORDER */}

          <motion.div
            className="tv-map-border-light"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          />


          {/* HEADER */}

          <div className="tv-map-command-header">

            <div className="tv-map-command-left">

              <motion.div
                className="tv-map-status-dot"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                }}
              />

              <FaMapMarkedAlt size={12} />

              <div>
                <strong>
                   OFFICE
                </strong>

                <span>
                  THETAVEGA TECH
                </span>
              </div>

            </div>


            <div className="tv-map-online-pill">
              <span />

              ONLINE
            </div>

          </div>


          {/* =================================================
              MAP BODY
          ================================================= */}

         {/* =================================================
    MAP BODY
================================================= */}

<div className="tv-map-body">

  <iframe
    title="ThetaVega Tech Private Limited"
    src="https://www.google.com/maps?q=ThetaVega%20Tech%20Private%20Limited%2C%20Chhatrapati%20Sambhajinagar%2C%20Maharashtra%2C%20India&z=15&output=embed"
    width="100%"
    height="100%"
    style={{
      border: 0,
      width: "100%",
      height: "100%",
      display: "block",
    }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />

  {/* HUD CORNERS */}

  <div className="tv-hud-corner tv-hud-tl" />
  <div className="tv-hud-corner tv-hud-tr" />
  <div className="tv-hud-corner tv-hud-bl" />
  <div className="tv-hud-corner tv-hud-br" />


  {/* SCANNER */}

  <motion.div
    className="tv-map-scanner"
    animate={{
      top: ["8%", "88%", "8%"],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />


  {/* OFFICE GLASS CARD */}

  <motion.div
    className="tv-map-office-card"
    initial={{
      opacity: 0,
      y: 25,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      delay: 0.7,
      duration: 0.6,
    }}
  >

    <div className="tv-map-office-icon">
      <FaLocationArrow size={16} />
    </div>

    <div className="tv-map-office-info">

      <span className="tv-office-small-title">
         OFFICE
      </span>

      <strong>
        ThetaVega Tech Private Limited
      </strong>

      <p>
        Block No. 02, Sadafulli, Rana Nagar,
        Chh. Sambhaji Nagar 431001, INDIA
      </p>

    </div>

    <a
      href="https://www.google.com/maps/search/?api=1&query=ThetaVega+Tech+Private+Limited+Chhatrapati+Sambhajinagar+Maharashtra"
      target="_blank"
      rel="noopener noreferrer"
      className="tv-map-direction-btn"
    >
      <FaArrowRight size={11} />
    </a>

  </motion.div>

</div>

          {/* =================================================
              MAP FOOTER
          ================================================= */}

          <div className="tv-map-command-footer">

            <div>
              <span>
                LOCATION
              </span>

              <strong>
                CSN
              </strong>
            </div>


            <div>
              <span>
                STATE
              </span>

              <strong>
                Maharashtra
              </strong>
            </div>


            <div>
              <span>
                COUNTRY
              </span>

              <strong>
                India
              </strong>
            </div>


            <div>
              <span>
                STATUS
              </span>

              <strong className="tv-map-active">
                ACTIVE
              </strong>
            </div>

          </div>

        </div>

      </motion.div>

    </div>
  </div>


  <style>{`

/* =========================================================
   HERO
========================================================= */

.tv-contact-hero-innovation {
  position: relative;

  padding: 82px 0 72px;

  overflow: hidden;

  background:
    radial-gradient(
      circle at 88% 25%,
      rgba(242,124,45,0.07),
      transparent 28%
    ),
    linear-gradient(
      110deg,
      #ffffff 0%,
      #ffffff 63%,
      #faf7f3 100%
    );

  border-bottom:
    1px solid rgba(7,17,29,0.06);
}


/* GRID */

.tv-hero-tech-grid {
  position: absolute;

  inset: 0;

  pointer-events: none;

  opacity: .55;

  background-image:
    linear-gradient(
      rgba(7,17,29,.024) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(7,17,29,.024) 1px,
      transparent 1px
    );

  background-size:
    44px 44px;
}


/* GLOW */

.tv-hero-orange-glow {
  position: absolute;

  width: 470px;
  height: 470px;

  right: -140px;
  top: -170px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(242,124,45,.16),
      transparent 68%
    );

  pointer-events: none;
}


/* =========================================================
   LAYOUT
========================================================= */

.tv-hero-innovation-layout {
  position: relative;

  z-index: 2;

  display: grid;

  grid-template-columns:
    minmax(0, 1.08fr)
    minmax(420px, .92fr);

  align-items: center;

  gap:
    clamp(48px, 6vw, 90px);
}


/* =========================================================
   LEFT
========================================================= */

.tv-hero-content-new {
  min-width: 0;
}


.tv-hero-eyebrow {
  display: inline-flex;

  align-items: center;

  gap: 9px;

  margin-bottom: 18px;

  color: #f27c2d;

  font-size: 11px;

  font-weight: 800;

  letter-spacing: 2px;
}


.tv-eyebrow-pulse {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #f27c2d;

  box-shadow:
    0 0 0 5px rgba(242,124,45,.09);
}


.tv-eyebrow-line {
  width: 48px;
  height: 1px;

  margin-left: 5px;

  background:
    linear-gradient(
      90deg,
      #f27c2d,
      transparent
    );
}


/* TITLE */

.tv-hero-main-title {
  max-width: 720px;

  margin: 0 0 24px;

  color: #07111D;

  font-size:
    clamp(2.5rem, 4vw, 4.3rem);

  font-weight: 760;

  line-height: 1.04;

  letter-spacing: -.025em;
}


.tv-hero-main-title span {
  display: block;

  margin-top: 7px;

  color: #f27c2d;
}


/* CONTENT */

.tv-hero-description {
  max-width: 660px;

  margin: 0 0 10px;

  color: #626970;

  font-size: .96rem;

  line-height: 1.8;
}


.tv-hero-description-last {
  margin-bottom: 27px;
}


/* =========================================================
   ACTIONS
========================================================= */

.tv-hero-action-row {
  display: flex;

  align-items: center;

  flex-wrap: wrap;

  gap: 12px;
}


.tv-hero-primary-action,
.tv-hero-secondary-action {
  min-height: 50px;

  padding: 0 21px;

  border-radius: 14px;

  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 9px;

  text-decoration: none;

  font-size: 13px;

  font-weight: 750;
}


.tv-hero-primary-action {
  color: white;

  background: #07111D;

  box-shadow:
    0 16px 30px rgba(7,17,29,.16);
}


.tv-hero-primary-action:hover {
  color: white;
}


.tv-btn-arrow {
  width: 27px;
  height: 27px;

  margin-left: 4px;

  border-radius: 8px;

  display: flex;

  align-items: center;

  justify-content: center;

  background:
    rgba(255,255,255,.11);
}


.tv-hero-secondary-action {
  color: #07111D;

  background: white;

  border:
    1px solid rgba(7,17,29,.1);
}


.tv-hero-secondary-action:hover {
  color: #07111D;
}


/* =========================================================
   CAPABILITY FLOW
========================================================= */

.tv-hero-capability-flow {
  max-width: 500px;

  margin-top: 38px;

  display: flex;

  align-items: center;
}


.tv-capability-node {
  display: flex;

  align-items: center;

  gap: 7px;

  white-space: nowrap;

  color: #6C737A;

  font-size: 9.5px;

  font-weight: 700;
}


.tv-capability-node > span {
  width: 7px;
  height: 7px;

  flex: 0 0 7px;

  border-radius: 50%;

  background: white;

  border:
    2px solid #f27c2d;
}


.tv-capability-line {
  position: relative;

  flex: 1;

  min-width: 22px;

  height: 1px;

  margin: 0 9px;

  overflow: hidden;

  background:
    rgba(242,124,45,.19);
}


.tv-capability-line div {
  position: absolute;

  top: 0;

  width: 30%;
  height: 1px;

  background:
    linear-gradient(
      90deg,
      transparent,
      #f27c2d,
      transparent
    );
}


/* =========================================================
   MAP SIDE
========================================================= */

.tv-hero-map-column {
  position: relative;

  width: 100%;
}


.tv-map-floating-tag {
  position: absolute;

  z-index: 10;

  top: -18px;
  right: 20px;

  padding: 9px 13px;

  border-radius: 999px;

  display: flex;

  align-items: center;

  gap: 8px;

  color: #07111D;

  background:
    rgba(255,255,255,.95);

  border:
    1px solid rgba(7,17,29,.08);

  box-shadow:
    0 10px 30px rgba(7,17,29,.1);

  font-size: 8px;

  font-weight: 800;

  letter-spacing: 1px;
}


.tv-map-floating-tag span {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #f27c2d;

  box-shadow:
    0 0 0 4px rgba(242,124,45,.10);
}


/* =========================================================
   MAP CARD
========================================================= */

.tv-innovative-map-card {
  position: relative;

  width: 100%;

  max-width: 480px;

  margin-left: auto;

  overflow: hidden;

  border-radius: 26px;

  background: #07111D;

  border:
    1px solid rgba(255,255,255,.08);

  box-shadow:
    0 35px 75px rgba(7,17,29,.22);
}


/* MOVING BORDER EFFECT */

.tv-map-border-light {
  position: absolute;

  z-index: 0;

  width: 240px;
  height: 240px;

  right: -120px;
  top: -120px;

  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(242,124,45,.32),
      transparent
    );

  pointer-events: none;
}


/* =========================================================
   MAP HEADER
========================================================= */

.tv-map-command-header {
  position: relative;

  z-index: 4;

  min-height: 55px;

  padding: 0 17px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  background:
    linear-gradient(
      90deg,
      #07111D,
      #0d1d2c
    );

  border-bottom:
    1px solid rgba(255,255,255,.08);
}


.tv-map-command-left {
  display: flex;

  align-items: center;

  gap: 9px;

  color: rgba(255,255,255,.72);
}


.tv-map-command-left > div {
  display: flex;

  flex-direction: column;
}


.tv-map-command-left strong {
  color: white;

  font-size: 9px;

  font-weight: 800;

  letter-spacing: 1.25px;
}


.tv-map-command-left span {
  margin-top: 1px;

  color:
    rgba(255,255,255,.37);

  font-size: 6.5px;

  font-weight: 600;

  letter-spacing: .8px;
}


.tv-map-status-dot {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #f27c2d;
}


.tv-map-online-pill {
  padding: 5px 8px;

  border-radius: 999px;

  display: flex;

  align-items: center;

  gap: 5px;

  color: #DB9941;

  background:
    rgba(219,153,65,.07);

  border:
    1px solid rgba(219,153,65,.15);

  font-size: 7px;

  font-weight: 800;

  letter-spacing: .8px;
}


.tv-map-online-pill span {
  width: 5px;
  height: 5px;

  border-radius: 50%;

  background: #DB9941;
}


/* =========================================================
   MAP BODY
========================================================= */

.tv-map-body {
  position: relative;

  height: 395px;

  overflow: hidden;

  background: #e7e5df;
}


.tv-map-body iframe {
  position: absolute;

  inset: 0;
}


/* =========================================================
   HUD CORNERS
========================================================= */

.tv-hud-corner {
  position: absolute;

  z-index: 4;

  width: 25px;
  height: 25px;

  pointer-events: none;
}


.tv-hud-tl {
  left: 12px;
  top: 12px;

  border-left: 2px solid #f27c2d;
  border-top: 2px solid #f27c2d;
}


.tv-hud-tr {
  right: 12px;
  top: 12px;

  border-right: 2px solid #f27c2d;
  border-top: 2px solid #f27c2d;
}


.tv-hud-bl {
  left: 12px;
  bottom: 12px;

  border-left: 2px solid #f27c2d;
  border-bottom: 2px solid #f27c2d;
}


.tv-hud-br {
  right: 12px;
  bottom: 12px;

  border-right: 2px solid #f27c2d;
  border-bottom: 2px solid #f27c2d;
}


/* =========================================================
   SCANNER
========================================================= */

.tv-map-scanner {
  position: absolute;

  z-index: 3;

  left: 5%;

  width: 90%;
  height: 1px;

  pointer-events: none;

  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(242,124,45,.9),
      transparent
    );

  box-shadow:
    0 0 14px rgba(242,124,45,.7);
}


/* =========================================================
   RADAR
========================================================= */

.tv-map-radar {
  position: absolute;

  z-index: 5;

  right: 14%;
  top: 45%;

  width: 12px;
  height: 12px;

  pointer-events: none;
}


.tv-map-radar-ring {
  position: absolute;

  inset: 0;

  border-radius: 50%;

  border:
    2px solid #f27c2d;
}


.tv-map-radar-core {
  position: absolute;

  left: 50%;
  top: 50%;

  width: 9px;
  height: 9px;

  transform:
    translate(-50%, -50%);

  border-radius: 50%;

  background: #f27c2d;

  border:
    2px solid white;

  box-shadow:
    0 0 15px rgba(242,124,45,.8);
}


/* =========================================================
   OFFICE CARD
========================================================= */

.tv-map-office-card {
  position: absolute;

  z-index: 7;

  left: 18px;
  right: 18px;
  bottom: 18px;

  min-height: 95px;

  padding: 14px;

  display: grid;

  grid-template-columns:
    42px 1fr 34px;

  align-items: center;

  gap: 12px;

  border-radius: 16px;

  background:
    rgba(255,255,255,.95);

  backdrop-filter:
    blur(14px);

  border:
    1px solid rgba(255,255,255,.6);

  box-shadow:
    0 18px 40px rgba(7,17,29,.18);
}


.tv-map-office-icon {
  width: 42px;
  height: 42px;

  border-radius: 12px;

  display: flex;

  align-items: center;

  justify-content: center;

  color: #f27c2d;

  background:
    linear-gradient(
      135deg,
      rgba(242,124,45,.13),
      rgba(219,153,65,.13)
    );
}


.tv-map-office-info {
  min-width: 0;
}


.tv-office-small-title {
  display: block;

  margin-bottom: 3px;

  color: #f27c2d;

  font-size: 7px;

  font-weight: 850;

  letter-spacing: 1.2px;
}


.tv-map-office-info strong {
  display: block;

  margin-bottom: 4px;

  color: #07111D;

  font-size: 11px;

  font-weight: 800;
}


.tv-map-office-info p {
  margin: 0;

  color: #727980;

  font-size: 8px;

  line-height: 1.45;
}


.tv-map-direction-btn {
  width: 34px;
  height: 34px;

  border-radius: 10px;

  display: flex;

  align-items: center;

  justify-content: center;

  color: white;

  background: #07111D;

  text-decoration: none;

  transition:
    transform .25s ease,
    background .25s ease;
}


.tv-map-direction-btn:hover {
  color: white;

  background: #f27c2d;

  transform:
    translateX(3px);
}


/* =========================================================
   MAP FOOTER
========================================================= */

.tv-map-command-footer {
  position: relative;

  z-index: 4;

  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  background: #07111D;
}


.tv-map-command-footer > div {
  padding: 10px 5px;

  text-align: center;

  border-right:
    1px solid rgba(255,255,255,.07);
}


.tv-map-command-footer > div:last-child {
  border-right: 0;
}


.tv-map-command-footer span {
  display: block;

  margin-bottom: 2px;

  color:
    rgba(255,255,255,.3);

  font-size: 6px;

  font-weight: 700;

  letter-spacing: .8px;
}


.tv-map-command-footer strong {
  display: block;

  color: white;

  font-size: 8px;

  font-weight: 750;
}


.tv-map-active {
  color:
    #DB9941 !important;
}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 991px) {

  .tv-hero-innovation-layout {
    grid-template-columns: 1fr;

    gap: 55px;
  }


  .tv-hero-content-new {
    text-align: center;
  }


  .tv-hero-eyebrow {
    justify-content: center;
  }


  .tv-hero-main-title,
  .tv-hero-description {
    margin-left: auto;

    margin-right: auto;
  }


  .tv-hero-action-row {
    justify-content: center;
  }


  .tv-hero-capability-flow {
    margin-left: auto;

    margin-right: auto;

    justify-content: center;
  }


  .tv-innovative-map-card {
    margin:
      0 auto;

    max-width:
      570px;
  }

}


/* =========================================================
   MOBILE
========================================================= */
/* =========================================================
   MOBILE
   <= 767px
========================================================= */

@media (max-width: 767px) {

  /* ===============================
     HERO SECTION
  =============================== */

  .tv-contact-hero-innovation {
    padding: 72px 0 44px !important;
    overflow: hidden;
  }

  .tv-contact-hero-innovation .container {
    width: 100%;
    max-width: 100%;
    padding-left: 18px !important;
    padding-right: 18px !important;
  }


  /* ===============================
     MAIN LAYOUT
  =============================== */

  .tv-hero-innovation-layout {
    grid-template-columns: 1fr !important;

    gap: 42px !important;

    width: 100%;
  }


  /* ===============================
     LEFT CONTENT
  =============================== */

  .tv-hero-content-new {
    width: 100%;

    text-align: left !important;
  }


  /* EYEBROW */

  .tv-hero-eyebrow {
    width: 100%;

    display: flex !important;

    align-items: center;

    justify-content: flex-start !important;

    gap: 7px;

    margin-bottom: 14px;

    font-size: 10px !important;

    letter-spacing: 1.4px !important;

    text-align: left !important;
  }


  .tv-eyebrow-pulse {
    width: 6px;
    height: 6px;
  }


  .tv-eyebrow-line {
    width: 34px;

    margin-left: 3px;
  }


  /* ===============================
     MAIN TITLE
  =============================== */

  .tv-hero-main-title {
    width: 100%;

    max-width: 100% !important;

    margin:
      0 0 17px !important;

    text-align: left !important;

    font-size:
      clamp(
        2rem,
        9vw,
        2.65rem
      ) !important;

    line-height:
      1.08 !important;

    letter-spacing:
      -0.025em !important;
  }


  .tv-hero-main-title span {
    display: block;

    margin-top: 5px;
  }


  /* ===============================
     DESCRIPTION
  =============================== */

  .tv-hero-description {
    width: 100%;

    max-width: 100% !important;

    margin-left: 0 !important;

    margin-right: 0 !important;

    margin-bottom: 9px !important;

    text-align: left !important;

    font-size:
      0.9rem !important;

    line-height:
      1.65 !important;
  }


  .tv-hero-description-last {
    margin-bottom:
      23px !important;
  }


  /* ===============================
     BUTTONS
  =============================== */

  .tv-hero-action-row {
    width: 100%;

    display: flex;

    align-items: stretch;

    justify-content:
      flex-start !important;

    gap: 10px;
  }


  .tv-hero-primary-action,
  .tv-hero-secondary-action {
    min-height:
      47px !important;

    padding:
      0 15px !important;

    border-radius:
      12px !important;

    font-size:
      12px !important;

    flex:
      1 1 calc(50% - 5px);

    white-space: nowrap;
  }


  .tv-btn-arrow {
    width: 24px;
    height: 24px;

    margin-left: 1px;
  }


  /* ===============================
     CAPABILITY FLOW
  =============================== */

  .tv-hero-capability-flow {
    width: 100%;

    max-width:
      100% !important;

    margin:
      27px 0 0 !important;

    display: flex;

    flex-wrap: wrap;

    align-items: center;

    justify-content:
      flex-start !important;

    gap:
      10px 15px;
  }


  .tv-capability-node {
    font-size:
      8.5px !important;

    gap: 6px;
  }


  .tv-capability-node > span {
    width: 6px;
    height: 6px;

    flex:
      0 0 6px;
  }


  .tv-capability-line {
    display:
      none !important;
  }


  /* ===============================
     MAP COLUMN
  =============================== */

  .tv-hero-map-column {
    width: 100%;

    max-width: 100%;

    margin-top: 5px;
  }


  /* FLOATING LIVE LOCATION */

  .tv-map-floating-tag {
    top:
      -14px !important;

    right:
      10px !important;

    padding:
      7px 10px !important;

    gap: 6px;

    font-size:
      6.5px !important;

    letter-spacing:
      0.8px;
  }


  .tv-map-floating-tag span {
    width: 6px;
    height: 6px;
  }


  /* ===============================
     MAP CARD
  =============================== */

  .tv-innovative-map-card {
    width: 100% !important;

    max-width:
      100% !important;

    margin:
      0 auto !important;

    border-radius:
      20px !important;
  }


  /* HEADER */

  .tv-map-command-header {
    min-height:
      50px !important;

    padding:
      0 13px !important;
  }


  .tv-map-command-left {
    gap: 7px;
  }


  .tv-map-command-left strong {
    font-size:
      8px !important;

    letter-spacing:
      1px;
  }


  .tv-map-command-left span {
    font-size:
      5.8px !important;
  }


  .tv-map-online-pill {
    padding:
      4px 7px !important;

    font-size:
      6px !important;
  }


  /* ===============================
     MAP BODY
  =============================== */

  .tv-map-body {
    height:
      315px !important;
  }


  .tv-map-body iframe {
    width:
      100% !important;

    height:
      100% !important;
  }


  /* ===============================
     HUD
  =============================== */

  .tv-hud-corner {
    width:
      19px !important;

    height:
      19px !important;
  }


  .tv-hud-tl {
    left: 8px;
    top: 8px;
  }

  .tv-hud-tr {
    right: 8px;
    top: 8px;
  }

  .tv-hud-bl {
    left: 8px;
    bottom: 8px;
  }

  .tv-hud-br {
    right: 8px;
    bottom: 8px;
  }


  /* ===============================
     OFFICE OVERLAY CARD
  =============================== */

  .tv-map-office-card {
    left:
      10px !important;

    right:
      10px !important;

    bottom:
      10px !important;

    min-height:
      72px !important;

    padding:
      9px 10px !important;

    grid-template-columns:
      34px minmax(0, 1fr) 30px !important;

    gap:
      8px !important;

    border-radius:
      13px !important;
  }


  .tv-map-office-icon {
    width:
      34px !important;

    height:
      34px !important;

    border-radius:
      10px !important;
  }


  .tv-map-office-info {
    min-width: 0;

    overflow: hidden;
  }


  .tv-office-small-title {
    font-size:
      6px !important;

    letter-spacing:
      0.8px !important;

    margin-bottom:
      2px !important;
  }


  .tv-map-office-info strong {
    font-size:
      9px !important;

    line-height:
      1.25 !important;

    margin-bottom:
      3px !important;
  }


  .tv-map-office-info p {
    font-size:
      6.5px !important;

    line-height:
      1.35 !important;

    overflow-wrap:
      anywhere;
  }


  .tv-map-direction-btn {
    width:
      30px !important;

    height:
      30px !important;

    border-radius:
      8px !important;
  }


  /* ===============================
     MAP FOOTER
  =============================== */

  .tv-map-command-footer {
    grid-template-columns:
      repeat(4, minmax(0, 1fr));
  }


  .tv-map-command-footer > div {
    padding:
      8px 2px !important;
  }


  .tv-map-command-footer span {
    font-size:
      5px !important;

    letter-spacing:
      0.45px !important;
  }


  .tv-map-command-footer strong {
    font-size:
      6.7px !important;

    overflow-wrap:
      anywhere;
  }


  /* ===============================
     BACKGROUND
  =============================== */

  .tv-hero-orange-glow {
    width:
      300px !important;

    height:
      300px !important;

    right:
      -130px !important;

    top:
      -100px !important;
  }

}

/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 430px) {

  .tv-map-body {
    height:
      315px;
  }


  .tv-map-command-header {
    min-height:
      50px;

    padding:
      0 11px;
  }


  .tv-map-command-left strong {
    font-size:
      7px;
  }


  .tv-map-online-pill {
    font-size:
      6px;
  }


  .tv-map-office-info strong {
    font-size:
      9px;
  }


  .tv-map-office-info p {
    font-size:
      7px;
  }


  .tv-map-command-footer span {
    font-size:
      5.5px;
  }


  .tv-map-command-footer strong {
    font-size:
      7px;
  }

}

  `}</style>

</section>

      {/* =====================================================
          CONTACT CARDS
      ===================================================== */}

      <section
        style={{
          padding:
            "82px 0 90px",

          background:
            "linear-gradient(180deg, #ffffff 0%, #fbfaf8 100%)",

          position: "relative",

          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",

            inset: 0,

            backgroundImage:
              "radial-gradient(rgba(7,17,29,0.045) 1px, transparent 1px)",

            backgroundSize:
              "24px 24px",

            opacity: 0.4,

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
          <motion.div
            {...fadeUp}
            style={{
              textAlign: "center",

              marginBottom:
                "52px",

              maxWidth: "760px",

              marginLeft:
                "auto",

              marginRight:
                "auto",
            }}
          >
            <div
              style={{
                display:
                  "inline-flex",

                alignItems:
                  "center",

                justifyContent:
                  "center",

                gap: "12px",

                color:
                  "#DB9941",

                fontSize:
                  "12px",

                fontWeight:
                  850,

                letterSpacing:
                  "2px",

                textTransform:
                  "uppercase",

                marginBottom:
                  "14px",
              }}
            >
              <span
                style={{
                  width:
                    "28px",

                  height:
                    "1px",

                  background:
                    "linear-gradient(90deg, transparent, #DB9941)",
                }}
              />

              Reach Us

              <span
                style={{
                  width:
                    "28px",

                  height:
                    "1px",

                  background:
                    "linear-gradient(90deg, #DB9941, transparent)",
                }}
              />
            </div>

            <h2
              style={{
                fontSize:
                  "clamp(2rem, 3.5vw, 3.5rem)",

                fontWeight:
                  850,

                color:
                  "#07111D",

                letterSpacing:
                  "-1.2px",

                marginBottom:
                  "14px",
              }}
            >
              Contact Details
            </h2>

            <p
              style={{
                color:
                  "#5D5D5D",

                fontSize:
                  "1rem",

                lineHeight:
                  1.8,

                marginBottom:
                  0,
              }}
            >
              Connect with our team
              through our corporate
              office, works, email, or
              phone for project
              discussions and support.
            </p>
          </motion.div>

          {/* CARDS */}

          <div className="row g-4">
            {contactCards.map(
              (
                card,
                index
              ) => {
                const iconStyles =
                  [
                    {
                      background:
                        "rgba(242,124,45,0.10)",

                      color:
                        "#f27c2d",

                      border:
                        "rgba(242,124,45,0.18)",
                    },

                    {
                      background:
                        "rgba(219,153,65,0.12)",

                      color:
                        "#DB9941",

                      border:
                        "rgba(219,153,65,0.22)",
                    },

                    {
                      background:
                        "rgba(7,17,29,0.065)",

                      color:
                        "#07111D",

                      border:
                        "rgba(7,17,29,0.10)",
                    },

                    {
                      background:
                        "rgba(242,124,45,0.10)",

                      color:
                        "#f27c2d",

                      border:
                        "rgba(242,124,45,0.18)",
                    },
                  ];

                const theme =
                  iconStyles[
                    index
                  ];

                return (
                  <div
                    className="col-xl-3 col-lg-6 col-md-6"
                    key={
                      index
                    }
                  >
                    <motion.a
                      href={
                        card.href
                      }
                      target={
                        card.href.startsWith(
                          "http"
                        )
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        card.href.startsWith(
                          "http"
                        )
                          ? "noopener noreferrer"
                          : undefined
                      }
                      initial={{
                        opacity:
                          0,

                        y: 25,
                      }}
                      whileInView={{
                        opacity:
                          1,

                        y: 0,
                      }}
                      viewport={{
                        once:
                          true,

                        amount:
                          0.3,
                      }}
                      transition={{
                        duration:
                          0.55,

                        delay:
                          index *
                          0.07,

                        ease:
                          "easeOut",
                      }}
                      whileHover={{
                        y: -6,
                      }}
                      className="tv-reference-contact-card"
                    >
                      <div className="tv-card-curve" />

                      <div className="tv-card-bottom-line" />

                      <div
                        style={{
                          width:
                            "54px",

                          height:
                            "54px",

                          minWidth:
                            "54px",

                          borderRadius:
                            "14px",

                          background:
                            theme.background,

                          color:
                            theme.color,

                          border: `1px solid ${theme.border}`,

                          display:
                            "flex",

                          alignItems:
                            "center",

                          justifyContent:
                            "center",

                          boxShadow:
                            "0 10px 24px rgba(7,17,29,0.06)",

                          position:
                            "relative",

                          zIndex:
                            2,
                        }}
                      >
                        <card.Icon
                          size={
                            21
                          }
                        />
                      </div>

                      <div
                        style={{
                          minWidth:
                            0,

                          flex:
                            1,

                          position:
                            "relative",

                          zIndex:
                            2,
                        }}
                      >
                        <h4
                          style={{
                            color:
                              "#07111D",

                            fontSize:
                              "1.02rem",

                            fontWeight:
                              800,

                            marginBottom:
                              "7px",
                          }}
                        >
                          {
                            card.title
                          }
                        </h4>

                        <p
                          style={{
                            color:
                              "#39444D",

                            fontSize:
                              "0.88rem",

                            lineHeight:
                              1.5,

                            marginBottom:
                              "4px",

                            overflowWrap:
                              "anywhere",
                          }}
                        >
                          {
                            card.primary
                          }
                        </p>

                        <p
                          style={{
                            color:
                              "#7A838B",

                            fontSize:
                              "0.82rem",

                            lineHeight:
                              1.5,

                            marginBottom:
                              0,

                            overflowWrap:
                              "anywhere",
                          }}
                        >
                          {
                            card.secondary
                          }
                        </p>
                      </div>

                      <div className="tv-card-small-arrow">
                        <FaArrowRight
                          size={
                            11
                          }
                        />
                      </div>
                    </motion.a>
                  </div>
                );
              }
            )}
          </div>

          {/* FLOW */}

          <motion.div
            {...fadeUp}
            className="tv-contact-flow"
          >
            {[
              "Email",
              "Phone",
              "Office",
              "Works",
            ].map(
              (
                item,
                index
              ) => (
                <React.Fragment
                  key={
                    item
                  }
                >
                  <div className="tv-contact-flow-item">
                    <div className="tv-flow-circle">
                      <div />
                    </div>

                    <span>
                      {
                        item
                      }
                    </span>
                  </div>

                  {index <
                    3 && (
                    <div className="tv-flow-line">
                      <span />
                    </div>
                  )}
                </React.Fragment>
              )
            )}
          </motion.div>
        </div>

        <style>{`

          .tv-reference-contact-card {
            min-height: 158px;

            height: 100%;

            padding:
              24px 22px;

            display: flex;

            align-items: center;

            gap: 17px;

            position: relative;

            overflow: hidden;

            text-decoration: none;

            background: #ffffff;

            border:
              1px solid rgba(7,17,29,0.075);

            border-radius:
              18px;

            box-shadow:
              0 10px 34px rgba(7,17,29,0.055);

            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease,
              border-color 0.3s ease;
          }

          .tv-reference-contact-card:hover {
            text-decoration: none;

            border-color:
              rgba(242,124,45,0.22);

            box-shadow:
              0 18px 42px rgba(7,17,29,0.09);
          }

          .tv-card-curve {
            position: absolute;

            width: 125px;

            height: 125px;

            top: -72px;

            right: -45px;

            border-radius:
              50%;

            background:
              linear-gradient(
                145deg,
                rgba(242,124,45,0.035),
                rgba(219,153,65,0.09)
              );

            pointer-events:
              none;

            transition:
              all 0.35s ease;
          }

          .tv-reference-contact-card:hover
          .tv-card-curve {
            width: 145px;

            height: 145px;

            background:
              linear-gradient(
                145deg,
                rgba(242,124,45,0.07),
                rgba(219,153,65,0.13)
              );
          }

          .tv-card-bottom-line {
            position: absolute;

            left: 22px;

            right: 22px;

            bottom: 0;

            height: 3px;

            border-radius:
              10px 10px 0 0;

            background:
              linear-gradient(
                90deg,
                #DB9941,
                #f27c2d
              );

            transform:
              scaleX(0);

            transform-origin:
              left;

            transition:
              transform 0.3s ease;
          }

          .tv-reference-contact-card:hover
          .tv-card-bottom-line {
            transform:
              scaleX(1);
          }

          .tv-card-small-arrow {
            position: absolute;

            right: 17px;

            bottom: 14px;

            width: 25px;

            height: 25px;

            border-radius:
              50%;

            background:
              rgba(242,124,45,0.07);

            color:
              #f27c2d;

            display:
              flex;

            align-items:
              center;

            justify-content:
              center;

            opacity:
              0;

            transform:
              translateX(-5px);

            transition:
              all 0.25s ease;
          }

          .tv-reference-contact-card:hover
          .tv-card-small-arrow {
            opacity: 1;

            transform:
              translateX(0);
          }

          .tv-contact-flow {
            max-width:
              760px;

            margin:
              54px auto 0;

            display:
              flex;

            align-items:
              flex-start;

            justify-content:
              center;
          }

          .tv-contact-flow-item {
            width:
              90px;

            display:
              flex;

            flex-direction:
              column;

            align-items:
              center;

            position:
              relative;

            z-index:
              2;
          }

          .tv-flow-circle {
            width:
              22px;

            height:
              22px;

            border-radius:
              50%;

            background:
              #ffffff;

            border:
              1px solid rgba(242,124,45,0.38);

            display:
              flex;

            align-items:
              center;

            justify-content:
              center;

            box-shadow:
              0 0 0 5px rgba(242,124,45,0.045);
          }

          .tv-flow-circle div {
            width:
              6px;

            height:
              6px;

            border-radius:
              50%;

            background:
              #f27c2d;
          }

          .tv-contact-flow-item span {
            margin-top:
              8px;

            color:
              #7A838B;

            font-size:
              10px;

            font-weight:
              600;
          }

          .tv-flow-line {
            flex:
              1;

            height:
              22px;

            position:
              relative;
          }

          .tv-flow-line::before {
            content: "";

            position:
              absolute;

            left:
              0;

            right:
              0;

            top:
              10px;

            border-top:
              1px dashed rgba(219,153,65,0.33);
          }

          .tv-flow-line span {
            position:
              absolute;

            left:
              50%;

            top:
              8px;

            transform:
              translateX(-50%);

            width:
              5px;

            height:
              5px;

            border-radius:
              50%;

            background:
              #DB9941;
          }

          @media (max-width: 767px) {

            .tv-reference-contact-card {
              min-height:
                145px;

              padding:
                20px;
            }

            .tv-contact-flow {
              display:
                none;
            }
          }

        `}</style>
      </section>

      {/* =====================================================
          OFFICE / WORKS + CONTACT FORM
      ===================================================== */}

      <section
        style={{
          padding:
            "110px 0",

          background:
            "#f7f4ef",

          color:
            "#07111D",

          position:
            "relative",

          overflow:
            "hidden",
        }}
      >
        <div className="container">
          <div className="row align-items-stretch g-5">

            {/* LEFT SIDE */}

            <div className="col-lg-6">
              <motion.div
                {...fadeLeft}
                style={{
                  height:
                    "100%",

                  display:
                    "flex",

                  flexDirection:
                    "column",

                  justifyContent:
                    "center",
                }}
              >
                <div
                  style={{
                    color:
                      "#f27c2d",

                    fontSize:
                      "12px",

                    fontWeight:
                      850,

                    letterSpacing:
                      "2px",

                    textTransform:
                      "uppercase",

                    marginBottom:
                      "14px",
                  }}
                >
                  Our Presence
                </div>

                <h2
                  style={{
                    fontSize:
                      "clamp(2rem, 3.5vw, 3.5rem)",

                    fontWeight:
                      850,

                    lineHeight:
                      1.12,

                    letterSpacing:
                      "-1.2px",

                    color:
                      "#07111D",

                    marginBottom:
                      "22px",
                  }}
                >
                  Office & Works Built
                  for Execution
                </h2>

                <p
                  style={{
                    color:
                      "#5D5D5D",

                    fontSize:
                      "1rem",

                    lineHeight:
                      1.85,

                    marginBottom:
                      "32px",
                  }}
                >
                  Our CSN-based office
                  and works support
                  engineering, design,
                  automation execution,
                  software delivery,
                  customer coordination,
                  and deployment.
                </p>

                <div
                  style={{
                    display:
                      "grid",

                    gap:
                      "16px",
                  }}
                >
                  {[
                    {
                      title:
                        "Corporate Office",

                      text:
                        "Block No. 02, Sadafulli, Rana Nagar, Chh.Sambhaji Nagar 431001 INDIA",

                      Icon:
                        FaBuilding,
                    },

                    {
                      title:
                        "Works",

                      text:
                        "MIDC Waluj, Chh.Sambhaji Nagar - 431136 INDIA",

                      Icon:
                        FaIndustry,
                    },
                  ].map(
                    (
                      item,
                      index
                    ) => (
                      <motion.div
                        key={
                          index
                        }
                        whileHover={{
                          x: 8,
                        }}
                        style={{
                          padding:
                            "22px",

                          borderRadius:
                            "24px",

                          background:
                            "#ffffff",

                          border:
                            "1px solid rgba(7,17,29,0.08)",

                          boxShadow:
                            "0 18px 45px rgba(7,17,29,0.08)",

                          display:
                            "flex",

                          gap:
                            "16px",

                          alignItems:
                            "flex-start",
                        }}
                      >
                        <div
                          style={{
                            width:
                              "50px",

                            height:
                              "50px",

                            borderRadius:
                              "17px",

                            background:
                              "linear-gradient(135deg, rgba(219,153,65,0.16), rgba(242,124,45,0.1))",

                            color:
                              "#DB9941",

                            display:
                              "flex",

                            alignItems:
                              "center",

                            justifyContent:
                              "center",

                            flex:
                              "0 0 50px",
                          }}
                        >
                          <item.Icon
                            size={
                              22
                            }
                          />
                        </div>

                        <div>
                          <h4
                            style={{
                              fontSize:
                                "1.05rem",

                              fontWeight:
                                850,

                              marginBottom:
                                "8px",
                            }}
                          >
                            {
                              item.title
                            }
                          </h4>

                          <p
                            style={{
                              marginBottom:
                                0,

                              color:
                                "#5D5D5D",

                              lineHeight:
                                1.7,
                            }}
                          >
                            {
                              item.text
                            }
                          </p>
                        </div>
                      </motion.div>
                    )
                  )}
                </div>
              </motion.div>
            </div>

            {/* =================================================
                RIGHT CONTACT FORM
            ================================================= */}

            <div className="col-lg-6">
              <motion.div
                {...fadeRight}
                style={{
                  height:
                    "100%",

                  minHeight:
                    "620px",

                  background:
                    "#ffffff",

                  borderRadius:
                    "32px",

                  padding:
                    "34px",

                  border:
                    "1px solid rgba(7,17,29,0.08)",

                  boxShadow:
                    "0 24px 70px rgba(7,17,29,0.08)",

                  position:
                    "relative",

                  overflow:
                    "hidden",
                }}
              >
                {/* TOP ACCENT */}

                <div
                  style={{
                    position:
                      "absolute",

                    top:
                      0,

                    left:
                      "34px",

                    right:
                      "34px",

                    height:
                      "3px",

                    borderRadius:
                      "0 0 10px 10px",

                    background:
                      "linear-gradient(90deg, #DB9941, #f27c2d, #DB9941)",
                  }}
                />

                {/* DECORATION */}

                <div
                  style={{
                    position:
                      "absolute",

                    width:
                      "190px",

                    height:
                      "190px",

                    borderRadius:
                      "50%",

                    top:
                      "-120px",

                    right:
                      "-90px",

                    background:
                      "radial-gradient(circle, rgba(242,124,45,0.10), transparent 68%)",

                    pointerEvents:
                      "none",
                  }}
                />

                {/* HEADER */}

                <div
                  style={{
                    marginBottom:
                      "24px",

                    paddingBottom:
                      "18px",

                    borderBottom:
                      "1px solid rgba(7,17,29,0.08)",

                    position:
                      "relative",

                    zIndex:
                      2,
                  }}
                >
                  <div
                    style={{
                      color:
                        "#f27c2d",

                      fontSize:
                        "11px",

                      fontWeight:
                        850,

                      letterSpacing:
                        "1.8px",

                      textTransform:
                        "uppercase",

                      marginBottom:
                        "7px",

                      display:
                        "flex",

                      alignItems:
                        "center",

                      gap:
                        "8px",
                    }}
                  >
                    <FaPaperPlane
                      size={11}
                    />

                    Send a Message
                  </div>

                  <div
                    style={{
                      display:
                        "flex",

                      alignItems:
                        "flex-end",

                      justifyContent:
                        "space-between",

                      gap:
                        "20px",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          color:
                            "#07111D",

                          fontSize:
                            "1.45rem",

                          fontWeight:
                            850,

                          margin:
                            "0 0 5px",
                        }}
                      >
                        Contact with Us
                      </h3>

                      <p
                        style={{
                          color:
                            "#7A838B",

                          fontSize:
                            "0.82rem",

                          lineHeight:
                            1.6,

                          margin:
                            0,
                        }}
                      >
                        Share your
                        requirement and
                        our team will
                        connect with you.
                      </p>
                    </div>

                   
                  </div>
                </div>

                {/* =================================================
                    FORM
                ================================================= */}

                <form
                  onSubmit={
                    handleSubmit
                  }
                  className="tv-project-form"
                  style={{
                    position:
                      "relative",

                    zIndex:
                      2,
                  }}
                >
                  {/* ROW 1 */}

                  <div className="tv-form-row">
                    <div className="tv-field">
                      <label>
                        Full Name{" "}
                        <span>
                          *
                        </span>
                      </label>

                      <div className="tv-input-wrap">
                        <input
                          name="fullName"
                          value={
                            formData.fullName
                          }
                          onChange={
                            handleChange
                          }
                          placeholder="Your name"
                          className={
                            errors.fullName
                              ? "tv-input-error"
                              : ""
                          }
                        />
                      </div>

                      {errors.fullName && (
                        <small className="tv-error-text">
                          {
                            errors.fullName
                          }
                        </small>
                      )}
                    </div>

                    <div className="tv-field">
                      <label>
                        Business Email{" "}
                        <span>
                          *
                        </span>
                      </label>

                      <div className="tv-input-wrap">
                        <input
                          name="email"
                          value={
                            formData.email
                          }
                          onChange={
                            handleChange
                          }
                          placeholder="name@company.com"
                          className={
                            errors.email
                              ? "tv-input-error"
                              : ""
                          }
                        />
                      </div>

                      {errors.email && (
                        <small className="tv-error-text">
                          {
                            errors.email
                          }
                        </small>
                      )}
                    </div>
                  </div>

                  {/* ROW 2 */}

                  <div className="tv-form-row">
                    <div className="tv-field">
                      <label>
                        Mobile Number{" "}
                        <span>
                          *
                        </span>
                      </label>

                      <div className="tv-input-wrap">
                        <input
                          name="mobile"
                          value={
                            formData.mobile
                          }
                          onChange={
                            handleChange
                          }
                          placeholder="10 digit mobile number"
                          className={
                            errors.mobile
                              ? "tv-input-error"
                              : ""
                          }
                        />
                      </div>

                      {errors.mobile && (
                        <small className="tv-error-text">
                          {
                            errors.mobile
                          }
                        </small>
                      )}
                    </div>

                    <div className="tv-field">
                      <label>
                        Company Name
                      </label>

                      <div className="tv-input-wrap">
                        <input
                          name="companyName"
                          value={
                            formData.companyName
                          }
                          onChange={
                            handleChange
                          }
                          placeholder="Company name"
                        />
                      </div>
                    </div>
                  </div>

                  {/* SUBJECT */}

                  <div className="tv-field">
                    <label>
                      Project Subject{" "}
                      <span>
                        *
                      </span>
                    </label>

                    <div className="tv-input-wrap">
                      <input
                        name="subject"
                        value={
                          formData.subject
                        }
                        onChange={
                          handleChange
                        }
                        placeholder="How can we help?"
                        className={
                          errors.subject
                            ? "tv-input-error"
                            : ""
                        }
                      />
                    </div>

                    {errors.subject && (
                      <small className="tv-error-text">
                        {
                          errors.subject
                        }
                      </small>
                    )}
                  </div>

                  {/* MESSAGE */}

                  <div className="tv-field">
                    <label>
                      Project Requirements{" "}
                      <span>
                        *
                      </span>
                    </label>

                    <textarea
                      name="message"
                      value={
                        formData.message
                      }
                      onChange={
                        handleChange
                      }
                      placeholder="Tell us about your project, goals and requirements..."
                      className={
                        errors.message
                          ? "tv-input-error"
                          : ""
                      }
                    />

                    {errors.message && (
                      <small className="tv-error-text">
                        {
                          errors.message
                        }
                      </small>
                    )}
                  </div>

                  {/* SUCCESS */}

                  {successMessage && (
                    <div
                      style={{
                        background:
                          "#dcfce7",

                        color:
                          "#166534",

                        padding:
                          "11px 14px",

                        borderRadius:
                          "10px",

                        fontWeight:
                          600,

                        fontSize:
                          "13px",
                      }}
                    >
                      {
                        successMessage
                      }
                    </div>
                  )}

                  {/* API ERROR */}

                  {apiError && (
                    <div
                      style={{
                        background:
                          "#fee2e2",

                        color:
                          "#991b1b",

                        padding:
                          "11px 14px",

                        borderRadius:
                          "10px",

                        fontWeight:
                          600,

                        fontSize:
                          "13px",
                      }}
                    >
                      {apiError}
                    </div>
                  )}

                  {/* SEND BUTTON */}

                  <motion.button
                    whileHover={
                      !isSubmitting
                        ? {
                            y: -2,

                            boxShadow:
                              "0 18px 38px rgba(242,124,45,0.30)",
                          }
                        : {}
                    }
                    whileTap={
                      !isSubmitting
                        ? {
                            scale:
                              0.99,
                          }
                        : {}
                    }
                    type="submit"
                    className="tv-send-message-btn"
                    disabled={
                      isSubmitting
                    }
                    style={{
                      opacity:
                        isSubmitting
                          ? 0.7
                          : 1,

                      cursor:
                        isSubmitting
                          ? "not-allowed"
                          : "pointer",
                    }}
                  >
                    <span>
                      {isSubmitting
                        ? "Sending..."
                        : "Send Message"}
                    </span>

                    <div className="tv-send-icon">
                      <FaPaperPlane
                        size={
                          12
                        }
                      />
                    </div>
                  </motion.button>
                </form>

                <style>{`

                  .tv-project-form {
                    display: grid;

                    gap: 15px;
                  }

                  .tv-form-row {
                    display: grid;

                    grid-template-columns:
                      1fr 1fr;

                    gap: 14px;
                  }

                  .tv-field {
                    display: flex;

                    flex-direction:
                      column;

                    gap: 6px;
                  }

                  .tv-field label {
                    color:
                      #39444D;

                    font-size:
                      12px;

                    font-weight:
                      700;

                    margin:
                      0;
                  }

                  .tv-field label span {
                    color:
                      #f27c2d;
                  }

                  .tv-input-wrap {
                    position:
                      relative;
                  }

                  .tv-field input,
                  .tv-field textarea {
                    width:
                      100%;

                    background:
                      #fcfbf8;

                    border:
                      1px solid rgba(7,17,29,0.12);

                    border-radius:
                      12px;

                    color:
                      #07111D;

                    font-size:
                      14px;

                    outline:
                      none;

                    transition:
                      border-color 0.25s ease,
                      box-shadow 0.25s ease,
                      background 0.25s ease;
                  }

                  .tv-field input {
                    height:
                      50px;

                    padding:
                      0 15px;
                  }

                  .tv-field textarea {
                    height:
                      125px;

                    padding:
                      14px 15px;

                    resize:
                      none;
                  }

                  .tv-field input::placeholder,
                  .tv-field textarea::placeholder {
                    color:
                      #9A9FA4;
                  }

                  .tv-field input:focus,
                  .tv-field textarea:focus {
                    background:
                      #ffffff;

                    border-color:
                      rgba(242,124,45,0.65);

                    box-shadow:
                      0 0 0 3px rgba(242,124,45,0.08);
                  }

                  .tv-input-wrap::after {
                    content: "";

                    position:
                      absolute;

                    left:
                      15px;

                    right:
                      15px;

                    bottom:
                      0;

                    height:
                      2px;

                    border-radius:
                      10px;

                    background:
                      linear-gradient(
                        90deg,
                        #DB9941,
                        #f27c2d
                      );

                    transform:
                      scaleX(0);

                    transform-origin:
                      left;

                    transition:
                      transform 0.25s ease;

                    pointer-events:
                      none;
                  }

                  .tv-input-wrap:focus-within::after {
                    transform:
                      scaleX(1);
                  }

                  .tv-field input.tv-input-error,
                  .tv-field textarea.tv-input-error {
                    border-color:
                      #ef4444;
                  }

                  .tv-error-text {
                    color:
                      #ef4444;

                    font-size:
                      11px;

                    margin-left:
                      2px;
                  }

                  .tv-send-message-btn {
                    width:
                      100%;

                    height:
                      54px;

                    margin-top:
                      2px;

                    padding:
                      0 8px 0 20px;

                    border:
                      none;

                    border-radius:
                      12px;

                    background:
                      linear-gradient(
                        135deg,
                        #DB9941,
                        #f27c2d
                      );

                    color:
                      #07111D;

                    font-size:
                      15px;

                    font-weight:
                      800;

                    cursor:
                      pointer;

                    display:
                      flex;

                    align-items:
                      center;

                    justify-content:
                      space-between;

                    box-shadow:
                      0 14px 30px rgba(242,124,45,0.22);

                    transition:
                      box-shadow 0.25s ease;
                  }

                  .tv-send-icon {
                    width:
                      38px;

                    height:
                      38px;

                    border-radius:
                      9px;

                    background:
                      rgba(255,255,255,0.25);

                    display:
                      flex;

                    align-items:
                      center;

                    justify-content:
                      center;

                    color:
                      #07111D;

                    transition:
                      transform 0.25s ease;
                  }

                  .tv-send-message-btn:hover
                  .tv-send-icon {
                    transform:
                      translateX(2px)
                      rotate(-4deg);
                  }

                  @media (max-width: 767px) {

                    .tv-form-row {
                      grid-template-columns:
                        1fr;
                    }

                  }

                `}</style>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DELIVERY CENTRES
      ===================================================== */}

      <section
        style={{
          padding:
            "110px 0",

          background:
            "#ffffff",

          position:
            "relative",

          overflow:
            "hidden",
        }}
      >
        <div className="container">
          <motion.div
            {...fadeUp}
            style={{
              textAlign:
                "center",

              maxWidth:
                "780px",

              margin:
                "0 auto 58px",
            }}
          >
            <div
              style={{
                color:
                  "#DB9941",

                fontSize:
                  "12px",

                fontWeight:
                  850,

                letterSpacing:
                  "2px",

                textTransform:
                  "uppercase",

                marginBottom:
                  "14px",
              }}
            >
              Delivery Centres in India
            </div>

            <h2
              style={{
                fontSize:
                  "clamp(2rem, 3.5vw, 3.5rem)",

                fontWeight:
                  850,

                color:
                  "#07111D",

                letterSpacing:
                  "-1.2px",

                marginBottom:
                  "16px",
              }}
            >
              Supporting Customers
              Across India
            </h2>

            <p
              style={{
                color:
                  "#5D5D5D",

                fontSize:
                  "1rem",

                lineHeight:
                  1.8,

                marginBottom:
                  0,
              }}
            >
              Our regional delivery
              presence helps us support
              faster execution,
              deployment, coordination,
              and customer success.
            </p>
          </motion.div>

          {/* CITY GRID */}

          <div
            style={{
              display:
                "grid",

              gridTemplateColumns:
                isMobile
                  ? "repeat(3, 1fr)"
                  : "repeat(6, 1fr)",

              gap:
                isMobile
                  ? "12px"
                  : "16px",

              justifyItems:
                "center",
            }}
          >
            {deliveryCenters.map(
              (
                city,
                index
              ) => {
                const isLastTwo =
                  isMobile &&
                  index >=
                    deliveryCenters.length -
                      2;

                return (
                  <div
                    key={
                      city
                    }
                    style={{
                      width:
                        "100%",

                      ...(isLastTwo && {
                        gridColumn:
                          index ===
                          deliveryCenters.length -
                            2
                            ? "1 / 2"
                            : "3 / 4",
                      }),
                    }}
                  >
                    <motion.div
                      initial={{
                        opacity:
                          0,

                        scale:
                          0.88,

                        y:
                          28,
                      }}
                      whileInView={{
                        opacity:
                          1,

                        scale:
                          1,

                        y:
                          0,
                      }}
                      viewport={{
                        once:
                          false,

                        amount:
                          0.35,
                      }}
                      transition={{
                        duration:
                          0.5,

                        delay:
                          index *
                          0.035,

                        ease:
                          "easeOut",
                      }}
                      whileHover={{
                        y:
                          -8,

                        scale:
                          1.04,
                      }}
                      style={{
                        padding:
                          isMobile
                            ? "12px 8px"
                            : "18px 12px",

                        minHeight:
                          isMobile
                            ? "60px"
                            : "76px",

                        borderRadius:
                          "18px",

                        background:
                          "#ffffff",

                        border:
                          "1px solid rgba(7,17,29,0.08)",

                        color:
                          "#07111D",

                        textAlign:
                          "center",

                        fontSize:
                          isMobile
                            ? "12px"
                            : "0.93rem",

                        fontWeight:
                          800,

                        display:
                          "flex",

                        alignItems:
                          "center",

                        justifyContent:
                          "center",

                        boxShadow:
                          "0 14px 35px rgba(7,17,29,0.07)",
                      }}
                    >
                      <div
                        style={{
                          display:
                            "flex",

                          alignItems:
                            "center",

                          justifyContent:
                            "center",

                          gap:
                            "8px",
                        }}
                      >
                        <FaLocationArrow
                          size={
                            13
                          }
                          color="#DB9941"
                        />

                        <span>
                          {
                            city
                          }
                        </span>
                      </div>
                    </motion.div>
                  </div>
                );
              }
            )}
          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        style={{
          padding:
            "110px 0",

          background:
            "#f7f4ef",

          position:
            "relative",
        }}
      >
        <div className="container">
          <motion.div
            {...fadeUp}
            style={{
              padding:
                isMobile
                  ? "28px"
                  : "64px",

              borderRadius:
                "38px",

              background:
                "#07111D",

              color:
                "#ffffff",

              position:
                "relative",

              overflow:
                "hidden",

              boxShadow:
                "0 30px 80px rgba(7,17,29,0.24)",
            }}
          >
            <div
              style={{
                position:
                  "absolute",

                top:
                  "-140px",

                right:
                  "-120px",

                width:
                  "450px",

                height:
                  "450px",

                borderRadius:
                  "50%",

                background:
                  "radial-gradient(circle, rgba(219,153,65,0.34), transparent 66%)",

                filter:
                  "blur(70px)",
              }}
            />

            <div
              className="row align-items-center"
              style={{
                position:
                  "relative",

                zIndex:
                  2,

                rowGap:
                  "28px",
              }}
            >
              <div className="col-lg-8">
                <div
                  style={{
                    color:
                      "#DB9941",

                    fontSize:
                      "12px",

                    fontWeight:
                      850,

                    letterSpacing:
                      "2px",

                    textTransform:
                      "uppercase",

                    marginBottom:
                      "14px",
                  }}
                >
                  Start a Conversation
                </div>

                <h2
                  style={{
                    fontSize:
                      "clamp(2rem, 3.4vw, 3.5rem)",

                    fontWeight:
                      850,

                    lineHeight:
                      1.12,

                    letterSpacing:
                      "-1.2px",

                    marginBottom:
                      "16px",
                  }}
                >
                  Ready to modernize your
                  factory operations?
                </h2>

                <p
                  style={{
                    color:
                      "rgba(229,229,223,0.76)",

                    fontSize:
                      "1rem",

                    lineHeight:
                      1.8,

                    maxWidth:
                      "720px",

                    marginBottom:
                      0,
                  }}
                >
                  Reach out to our team
                  for automation, MES,
                  IIoT, traceability,
                  machine integration,
                  quality, maintenance,
                  and operational
                  intelligence
                  solutions.
                </p>
              </div>

              <div className="col-lg-4">
                <div
                  style={{
                    display:
                      "flex",

                    gap:
                      "14px",

                    justifyContent:
                      isMobile
                        ? "center"
                        : "flex-end",

                    flexWrap:
                      "wrap",
                  }}
                >
                  <motion.a
                    whileHover={{
                      y:
                        -4,

                      scale:
                        1.03,
                    }}
                    whileTap={{
                      scale:
                        0.98,
                    }}
                    href="mailto:sales@thetavega.tech"
                    style={{
                      textDecoration:
                        "none",

                      padding:
                        "15px 24px",

                      borderRadius:
                        "999px",

                      background:
                        "linear-gradient(135deg, #DB9941, #f27c2d)",

                      color:
                        "#07111D",

                      fontWeight:
                        850,

                      boxShadow:
                        "0 16px 38px rgba(242,124,45,0.32)",

                      display:
                        "inline-flex",

                      alignItems:
                        "center",

                      gap:
                        "10px",
                    }}
                  >
                    <FaEnvelope
                      size={
                        15
                      }
                    />

                    Contact Sales
                  </motion.a>

                  <motion.a
                    whileHover={{
                      y:
                        -4,

                      scale:
                        1.03,
                    }}
                    whileTap={{
                      scale:
                        0.98,
                    }}
                    href="tel:+919371675893"
                    style={{
                      textDecoration:
                        "none",

                      padding:
                        "15px 24px",

                      borderRadius:
                        "999px",

                      background:
                        "rgba(255,255,255,0.08)",

                      border:
                        "1px solid rgba(255,255,255,0.16)",

                      color:
                        "#ffffff",

                      fontWeight:
                        750,

                      display:
                        "inline-flex",

                      alignItems:
                        "center",

                      gap:
                        "10px",
                    }}
                  >
                    <FaPhoneAlt
                      size={
                        15
                      }
                    />

                    Call Team
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`

        @media (max-width: 991px) {

          .container {
            max-width:
              94%;
          }

        }

      `}</style>
    </div>
  );
};

export default ContactPage;