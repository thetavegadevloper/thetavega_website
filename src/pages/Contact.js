import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";
import indiaMap from "../assets/images/india.png";

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





const ContactPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth <= 768);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
  const fadeUp = {
    initial: { opacity: 0, y: 42 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.25 },
    transition: { duration: 0.75, ease: "easeOut" },
  };

  const fadeLeft = {
    initial: { opacity: 0, x: -55 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: false, amount: 0.25 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const fadeRight = {
    initial: { opacity: 0, x: 55 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: false, amount: 0.25 },
    transition: { duration: 0.8, ease: "easeOut" },
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
  const [showCookie, setShowCookie] = useState(false);

useEffect(() => {
  const cookieConsent = localStorage.getItem("cookieConsent");

  if (!cookieConsent) {
    setShowCookie(true);
  }
}, []);

 const items = [
    { title: "New Production Lines", color: "#3B82F6" },
    { title: "Automation Upgrade", color: "#06B6D4" },
    { title: "MES & Traceability", color: "#8B5CF6" },
    { title: "Quality Compliance", color: "#22C55E" },
    { title: "OEE Optimization", color: "#EAB308" },
  ];

const inputStyle = {
  width: "100%",
  height: "54px",
  padding: "0 18px",
  borderRadius: "16px",
  border: "1px solid rgba(7,17,29,0.12)",
  background: "#fcfbf8",
  fontSize: "15px",
  color: "#07111D",
  outline: "none",
};

const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  mobile: "",
  companyName: "",
  subject: "",
  message: "",
});

const [errors, setErrors] = useState({});
const [successMessage, setSuccessMessage] = useState("");

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
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const newErrors = {};

  if (!formData.fullName.trim()) {
    newErrors.fullName = "Full name is required";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    newErrors.email = "Please enter valid email";
  }

  const mobileRegex = /^[0-9]{10}$/;
  if (!mobileRegex.test(formData.mobile)) {
    newErrors.mobile = "Mobile must be 10 digits";
  }

  if (!formData.subject.trim()) {
    newErrors.subject = "Subject required";
  }

  if (formData.message.trim().length < 10) {
    newErrors.message = "Message too short";
  }

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  setErrors({});

  try {
    const response = await fetch(
      "http://192.168.1.16:5000/api/contact/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (data.success) {
      setSuccessMessage("Message sent successfully!");

      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        companyName: "",
        subject: "",
        message: "",
      });
    }
  } catch (error) {
    console.error(error);
  }
};

 





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
      primary: "Block No. 02, Sadafulli, Rana Nagar",
      secondary: "Chh.Sambhaji Nagar 431001 INDIA",
      Icon: FaBuilding,
       href:
      "https://www.google.com/maps/search/?api=1&query=Block+No+02+Sadafulli+Rana+Nagar+Chhatrapati+Sambhaji+Nagar",
    },
    {
      title: "Works",
      primary: "MIDC Waluj",
      secondary: "Chh.Sambhaji Nagar- 431136 INDIA",
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
      {/* HERO */}
     {/* HERO */}
{/* =========================================================
    CONTACT HERO - SIMPLE INDUSTRIAL STYLE
========================================================= */}
<section
  style={{
    position: "relative",
    padding: "92px 0 74px",
    background:
      "linear-gradient(110deg, #ffffff 0%, #ffffff 68%, #fbf7f2 100%)",
    overflow: "hidden",
    borderBottom: "1px solid rgba(7,17,29,0.06)",
  }}
>
  {/* SUBTLE INDUSTRIAL GRID */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      backgroundImage:
        "linear-gradient(rgba(7,17,29,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(7,17,29,0.025) 1px, transparent 1px)",
      backgroundSize: "44px 44px",
      opacity: 0.75,
      pointerEvents: "none",
    }}
  />

  {/* VERY LIGHT ORANGE GLOW */}
  <div
    style={{
      position: "absolute",
      width: "420px",
      height: "420px",
      borderRadius: "50%",
      right: "-210px",
      top: "-230px",
      background:
        "radial-gradient(circle, rgba(242,124,45,0.12), transparent 68%)",
      pointerEvents: "none",
    }}
  />

  {/* THIN INDUSTRIAL LINE */}
  <div
    style={{
      position: "absolute",
      right: "7%",
      top: "42%",
      width: "240px",
      height: "1px",
      background:
        "linear-gradient(90deg, transparent, rgba(242,124,45,0.35), transparent)",
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
      initial={{
        opacity: 0,
        y: 18,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.65,
        ease: "easeOut",
      }}
      style={{
        maxWidth: "850px",
      }}
    >
      {/* SMALL LABEL */}
      <div
        style={{
          color: "#f27c2d",

          fontSize: "13px",
          fontWeight: 600,

          letterSpacing: "1.8px",
          textTransform: "uppercase",

          marginBottom: "14px",

          display: "inline-flex",
          alignItems: "center",
          gap: "9px",
        }}
      >
        <FaHeadset size={13} />

        Contact ThetaVega
      </div>

      {/* HEADING */}
      <h1
        style={{
          fontSize: "clamp(1.9rem, 3.2vw, 3.4rem)",
          fontWeight: 650,

          lineHeight: 1.16,
          letterSpacing: "1px",

          color: "#07111D",

          maxWidth: "800px",

          marginBottom: "18px",
        }}
      >
        Let’s Talk About Your{" "}
        <span style={{ color: "#f27c2d" }}>
          Factory Goals
        </span>
      </h1>

      {/* CONTENT */}
      <p
        style={{
          fontSize: "0.96rem",
          lineHeight: 1.76,

          color: "#5D5D5D",

          maxWidth: "720px",

          marginBottom: "10px",
        }}
      >
        Whether you are planning automation, MES, IIoT, traceability, or
        machine integration, our team can help you move from idea to
        execution with the right engineering approach.
      </p>

      <p
        style={{
          fontSize: "0.96rem",
          lineHeight: 1.76,

          color: "#5D5D5D",

          maxWidth: "720px",

          marginBottom: "25px",
        }}
      >
        Reach out to ThetaVega Tech for smart manufacturing solutions,
        industrial digitalization, and scalable factory transformation.
      </p>

      {/* BUTTONS */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <motion.a
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.98,
          }}
          href="mailto:sales@thetavega.tech"
          style={{
            minHeight: "46px",

            padding: "0 21px",

            borderRadius: "999px",

            background: "#07111D",

            color: "#ffffff",

            textDecoration: "none",

            fontSize: "0.9rem",
            fontWeight: 600,

            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "9px",

            boxShadow:
              "0 12px 26px rgba(7,17,29,0.15)",
          }}
        >
          <FaPaperPlane size={12} />

          Start Discussion
        </motion.a>

        <motion.a
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.98,
          }}
          href="tel:+919371675893"
          style={{
            minHeight: "46px",

            padding: "0 21px",

            borderRadius: "999px",

            background: "#ffffff",

            color: "#07111D",

            border:
              "1px solid rgba(7,17,29,0.11)",

            textDecoration: "none",

            fontSize: "0.9rem",
            fontWeight: 600,

            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "9px",
          }}
        >
          <FaPhoneAlt
            size={12}
            color="#f27c2d"
          />

          Call Now
        </motion.a>
      </div>

      {/* =============================================
          SIMPLE INDUSTRIAL PROCESS LINE
      ============================================= */}
      <div className="tv-industrial-process">
        {[
          "Automation",
          "MES",
          "IIoT",
          "Traceability",
          "Machine Integration",
        ].map((item, index) => (
          <React.Fragment key={item}>
            <div className="tv-industrial-process-item">
              <span />

              {item}
            </div>

            {index < 4 && (
              <div className="tv-industrial-process-line" />
            )}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  </div>

  <style>{`

    /* =============================================
       INDUSTRIAL CONNECTION LINE
    ============================================= */

    .tv-industrial-process {
      margin-top: 42px;

      max-width: 780px;

      display: flex;
      align-items: center;
    }


    .tv-industrial-process-item {
      white-space: nowrap;

      display: flex;
      align-items: center;

      gap: 7px;

      color: #6F777E;

      font-size: 11px;
      font-weight: 650;

      letter-spacing: 0.4px;
    }


    .tv-industrial-process-item span {
      width: 7px;
      height: 7px;

      min-width: 7px;

      border-radius: 50%;

      background: #ffffff;

      border: 2px solid #f27c2d;

      box-shadow:
        0 0 0 4px rgba(242,124,45,0.06);
    }


    .tv-industrial-process-line {
      flex: 1;

      min-width: 30px;

      margin: 0 13px;

      height: 1px;

      background:
        linear-gradient(
          90deg,
          rgba(219,153,65,0.18),
          rgba(242,124,45,0.45),
          rgba(219,153,65,0.18)
        );
    }


    @media (max-width: 767px) {

      .tv-industrial-process {
        margin-top: 34px;

        flex-wrap: wrap;

        gap: 13px 18px;
      }


      .tv-industrial-process-line {
        display: none;
      }

    }

  `}</style>
</section>

      {/* CONTACT CARDS */}
     {/* CONTACT CARDS */}
<section
  style={{
    padding: "82px 0 90px",
    background:
      "linear-gradient(180deg, #ffffff 0%, #fbfaf8 100%)",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* subtle dotted background */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      backgroundImage:
        "radial-gradient(rgba(7,17,29,0.045) 1px, transparent 1px)",
      backgroundSize: "24px 24px",
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
    {/* HEADING */}
    <motion.div
      {...fadeUp}
      style={{
        textAlign: "center",
        marginBottom: "52px",
        maxWidth: "760px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          color: "#DB9941",
          fontSize: "12px",
          fontWeight: 850,
          letterSpacing: "2px",
          textTransform: "uppercase",
          marginBottom: "14px",
        }}
      >
        <span
          style={{
            width: "28px",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, #DB9941)",
          }}
        />

        Reach Us

        <span
          style={{
            width: "28px",
            height: "1px",
            background:
              "linear-gradient(90deg, #DB9941, transparent)",
          }}
        />
      </div>

      <h2
        style={{
          fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
          fontWeight: 850,
          color: "#07111D",
          letterSpacing: "-1.2px",
          marginBottom: "14px",
        }}
      >
        Contact Details
      </h2>

      <p
        style={{
          color: "#5D5D5D",
          fontSize: "1rem",
          lineHeight: 1.8,
          marginBottom: 0,
        }}
      >
        Connect with our team through our corporate office, works, email,
        or phone for project discussions and support.
      </p>
    </motion.div>

    {/* CARDS */}
    <div className="row g-4">
      {contactCards.map((card, index) => {
        const iconStyles = [
          {
            background: "rgba(242,124,45,0.10)",
            color: "#f27c2d",
            border: "rgba(242,124,45,0.18)",
          },
          {
            background: "rgba(219,153,65,0.12)",
            color: "#DB9941",
            border: "rgba(219,153,65,0.22)",
          },
          {
            background: "rgba(7,17,29,0.065)",
            color: "#07111D",
            border: "rgba(7,17,29,0.10)",
          },
          {
            background: "rgba(242,124,45,0.10)",
            color: "#f27c2d",
            border: "rgba(242,124,45,0.18)",
          },
        ];

        const theme = iconStyles[index];

        return (
          <div
            className="col-xl-3 col-lg-6 col-md-6"
            key={index}
          >
            <motion.a
              href={card.href}
              target={
                card.href.startsWith("http")
                  ? "_blank"
                  : undefined
              }
              rel={
                card.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
                ease: "easeOut",
              }}
              whileHover={{
                y: -6,
              }}
              className="tv-reference-contact-card"
            >
              {/* top right decorative curve */}
              <div className="tv-card-curve" />

              {/* orange bottom line */}
              <div className="tv-card-bottom-line" />

              {/* ICON */}
              <div
                style={{
                  width: "54px",
                  height: "54px",
                  minWidth: "54px",
                  borderRadius: "14px",
                  background: theme.background,
                  color: theme.color,
                  border: `1px solid ${theme.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow:
                    "0 10px 24px rgba(7,17,29,0.06)",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <card.Icon size={21} />
              </div>

              {/* CONTENT */}
              <div
                style={{
                  minWidth: 0,
                  flex: 1,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <h4
                  style={{
                    color: "#07111D",
                    fontSize: "1.02rem",
                    fontWeight: 800,
                    marginBottom: "7px",
                  }}
                >
                  {card.title}
                </h4>

                <p
                  style={{
                    color: "#39444D",
                    fontSize: "0.88rem",
                    lineHeight: 1.5,
                    marginBottom: "4px",
                    overflowWrap: "anywhere",
                  }}
                >
                  {card.primary}
                </p>

                <p
                  style={{
                    color: "#7A838B",
                    fontSize: "0.82rem",
                    lineHeight: 1.5,
                    marginBottom: 0,
                    overflowWrap: "anywhere",
                  }}
                >
                  {card.secondary}
                </p>
              </div>

              {/* small arrow */}
              <div className="tv-card-small-arrow">
                <FaArrowRight size={11} />
              </div>
            </motion.a>
          </div>
        );
      })}
    </div>

    {/* SMALL CONNECTING DESIGN LIKE REFERENCE */}
    <motion.div
      {...fadeUp}
      className="tv-contact-flow"
    >
      {[
        "Email",
        "Phone",
        "Office",
        "Works",
      ].map((item, index) => (
        <React.Fragment key={item}>
          <div className="tv-contact-flow-item">
            <div className="tv-flow-circle">
              <div />
            </div>

            <span>{item}</span>
          </div>

          {index < 3 && (
            <div className="tv-flow-line">
              <span />
            </div>
          )}
        </React.Fragment>
      ))}
    </motion.div>
  </div>

  <style>{`
    .tv-reference-contact-card {
      min-height: 158px;
      height: 100%;

      padding: 24px 22px;

      display: flex;
      align-items: center;
      gap: 17px;

      position: relative;
      overflow: hidden;

      text-decoration: none;

      background: #ffffff;

      border: 1px solid rgba(7,17,29,0.075);
      border-radius: 18px;

      box-shadow:
        0 10px 34px rgba(7,17,29,0.055);

      transition:
        transform 0.3s ease,
        box-shadow 0.3s ease,
        border-color 0.3s ease;
    }


    .tv-reference-contact-card:hover {
      text-decoration: none;

      border-color: rgba(242,124,45,0.22);

      box-shadow:
        0 18px 42px rgba(7,17,29,0.09);
    }


    /* curved shape like reference card */
    .tv-card-curve {
      position: absolute;

      width: 125px;
      height: 125px;

      top: -72px;
      right: -45px;

      border-radius: 50%;

      background:
        linear-gradient(
          145deg,
          rgba(242,124,45,0.035),
          rgba(219,153,65,0.09)
        );

      pointer-events: none;

      transition: all 0.35s ease;
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


    /* orange highlight underneath */
    .tv-card-bottom-line {
      position: absolute;

      left: 22px;
      right: 22px;
      bottom: 0;

      height: 3px;

      border-radius: 10px 10px 0 0;

      background:
        linear-gradient(
          90deg,
          #DB9941,
          #f27c2d
        );

      transform: scaleX(0);
      transform-origin: left;

      transition: transform 0.3s ease;
    }


    .tv-reference-contact-card:hover
    .tv-card-bottom-line {
      transform: scaleX(1);
    }


    .tv-card-small-arrow {
      position: absolute;

      right: 17px;
      bottom: 14px;

      width: 25px;
      height: 25px;

      border-radius: 50%;

      background: rgba(242,124,45,0.07);

      color: #f27c2d;

      display: flex;
      align-items: center;
      justify-content: center;

      opacity: 0;

      transform: translateX(-5px);

      transition: all 0.25s ease;
    }


    .tv-reference-contact-card:hover
    .tv-card-small-arrow {
      opacity: 1;
      transform: translateX(0);
    }


    /* =========================================
       BOTTOM FLOW
    ========================================= */

    .tv-contact-flow {
      max-width: 760px;

      margin:
        54px auto
        0;

      display: flex;
      align-items: flex-start;
      justify-content: center;
    }


    .tv-contact-flow-item {
      width: 90px;

      display: flex;
      flex-direction: column;
      align-items: center;

      position: relative;
      z-index: 2;
    }


    .tv-flow-circle {
      width: 22px;
      height: 22px;

      border-radius: 50%;

      background: #ffffff;

      border:
        1px solid rgba(242,124,45,0.38);

      display: flex;
      align-items: center;
      justify-content: center;

      box-shadow:
        0 0 0 5px rgba(242,124,45,0.045);
    }


    .tv-flow-circle div {
      width: 6px;
      height: 6px;

      border-radius: 50%;

      background: #f27c2d;
    }


    .tv-contact-flow-item span {
      margin-top: 8px;

      color: #7A838B;

      font-size: 10px;
      font-weight: 600;
    }


    .tv-flow-line {
      flex: 1;

      height: 22px;

      position: relative;
    }


    .tv-flow-line::before {
      content: "";

      position: absolute;

      left: 0;
      right: 0;
      top: 10px;

      border-top:
        1px dashed rgba(219,153,65,0.33);
    }


    .tv-flow-line span {
      position: absolute;

      left: 50%;
      top: 8px;

      transform: translateX(-50%);

      width: 5px;
      height: 5px;

      border-radius: 50%;

      background: #DB9941;
    }


    @media (max-width: 767px) {

      .tv-reference-contact-card {
        min-height: 145px;

        padding: 20px;
      }


      .tv-contact-flow {
        display: none;
      }

    }
  `}</style>
</section>

      {/* OFFICE / WORKS IMAGE SECTION */}
      <section
  style={{
    padding: "110px 0",
    background: "#f7f4ef",
    color: "#07111D",
    position: "relative",
    overflow: "hidden",
  }}
>
  <div className="container">
    <div className="row align-items-stretch g-5">
      {/* LEFT SIDE */}
      <div className="col-lg-6">
        <motion.div
          {...fadeLeft}
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              color: "#f27c2d",
              fontSize: "12px",
              fontWeight: 850,
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            Our Presence
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
              fontWeight: 850,
              lineHeight: 1.12,
              letterSpacing: "-1.2px",
              color: "#07111D",
              marginBottom: "22px",
            }}
          >
            Office & Works Built for Execution
          </h2>

          <p
            style={{
              color: "#5D5D5D",
              fontSize: "1rem",
              lineHeight: 1.85,
              marginBottom: "32px",
            }}
          >
            Our CSN-based office and works support engineering, design,
            automation execution, software delivery, customer coordination,
            and deployment.
          </p>

          <div style={{ display: "grid", gap: "16px" }}>
            {[
              {
                title: "Corporate Office",
                text: "Block No. 02, Sadafulli, Rana Nagar, Chh.Sambhaji Nagar 431001 INDIA",
                Icon: FaBuilding,
              },
              {
                title: "Works",
                text: "MIDC Waluj, Chh.Sambhaji Nagar - 431136 INDIA",
                Icon: FaIndustry,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 8 }}
                style={{
                  padding: "22px",
                  borderRadius: "24px",
                  background: "#ffffff",
                  border: "1px solid rgba(7,17,29,0.08)",
                  boxShadow: "0 18px 45px rgba(7,17,29,0.08)",
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "17px",
                    background:
                      "linear-gradient(135deg, rgba(219,153,65,0.16), rgba(242,124,45,0.1))",
                    color: "#DB9941",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: "0 0 50px",
                  }}
                >
                  <item.Icon size={22} />
                </div>

                <div>
                  <h4
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 850,
                      marginBottom: "8px",
                    }}
                  >
                    {item.title}
                  </h4>

                  <p
                    style={{
                      marginBottom: 0,
                      color: "#5D5D5D",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* RIGHT SIDE FORM */}
      {/* RIGHT SIDE FORM */}
<div className="col-lg-6">
  <motion.div
    {...fadeRight}
    style={{
      height: "100%",
      minHeight: "620px",
      background: "#ffffff",
      borderRadius: "32px",
      padding: "34px",
      border: "1px solid rgba(7,17,29,0.08)",
      boxShadow: "0 24px 70px rgba(7,17,29,0.08)",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* TOP ORANGE ACCENT */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: "34px",
        right: "34px",
        height: "3px",
        borderRadius: "0 0 10px 10px",
        background:
          "linear-gradient(90deg, #DB9941, #f27c2d, #DB9941)",
      }}
    />

    {/* SOFT DECORATION */}
    <div
      style={{
        position: "absolute",
        width: "190px",
        height: "190px",
        borderRadius: "50%",
        top: "-120px",
        right: "-90px",
        background:
          "radial-gradient(circle, rgba(242,124,45,0.10), transparent 68%)",
        pointerEvents: "none",
      }}
    />

    {/* FORM HEADER */}
    <div
      style={{
        marginBottom: "24px",
        paddingBottom: "18px",
        borderBottom: "1px solid rgba(7,17,29,0.08)",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div
        style={{
          color: "#f27c2d",
          fontSize: "11px",
          fontWeight: 850,
          letterSpacing: "1.8px",
          textTransform: "uppercase",
          marginBottom: "7px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <FaPaperPlane size={11} />
        Send a Message
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <div>
          <h3
            style={{
              color: "#07111D",
              fontSize: "1.45rem",
              fontWeight: 850,
              margin: "0 0 5px",
            }}
          >
            Contact with Us
          </h3>

          <p
            style={{
              color: "#7A838B",
              fontSize: "0.82rem",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Share your requirement and our team will connect with you.
          </p>
        </div>

        <div
          style={{
            color: "#DB9941",
            fontSize: "10px",
            fontWeight: 800,
            letterSpacing: "1.2px",
            whiteSpace: "nowrap",
          }}
        >
          PROJECT / 01
        </div>
      </div>
    </div>

    <form
      onSubmit={handleSubmit}
      className="tv-project-form"
      style={{
        position: "relative",
        zIndex: 2,
      }}
    >
      {/* ROW 1 */}
      <div className="tv-form-row">
        <div className="tv-field">
          <label>
            Full Name <span>*</span>
          </label>

          <div className="tv-input-wrap">
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your name"
              className={errors.fullName ? "tv-input-error" : ""}
            />
          </div>

          {errors.fullName && (
            <small className="tv-error-text">
              {errors.fullName}
            </small>
          )}
        </div>

        <div className="tv-field">
          <label>
            Business Email <span>*</span>
          </label>

          <div className="tv-input-wrap">
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              className={errors.email ? "tv-input-error" : ""}
            />
          </div>

          {errors.email && (
            <small className="tv-error-text">
              {errors.email}
            </small>
          )}
        </div>
      </div>

      {/* ROW 2 */}
      <div className="tv-form-row">
        <div className="tv-field">
          <label>
            Mobile Number <span>*</span>
          </label>

          <div className="tv-input-wrap">
            <input
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="10 digit mobile number"
              className={errors.mobile ? "tv-input-error" : ""}
            />
          </div>

          {errors.mobile && (
            <small className="tv-error-text">
              {errors.mobile}
            </small>
          )}
        </div>

        <div className="tv-field">
          <label>Company Name</label>

          <div className="tv-input-wrap">
            <input
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company name"
            />
          </div>
        </div>
      </div>

      {/* SUBJECT */}
      <div className="tv-field">
        <label>
          Project Subject <span>*</span>
        </label>

        <div className="tv-input-wrap">
          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="How can we help?"
            className={errors.subject ? "tv-input-error" : ""}
          />
        </div>

        {errors.subject && (
          <small className="tv-error-text">
            {errors.subject}
          </small>
        )}
      </div>

      {/* MESSAGE */}
      <div className="tv-field">
        <label>
          Project Requirements <span>*</span>
        </label>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project, goals and requirements..."
          className={errors.message ? "tv-input-error" : ""}
        />

        {errors.message && (
          <small className="tv-error-text">
            {errors.message}
          </small>
        )}
      </div>

      {successMessage && (
        <div
          style={{
            background: "#dcfce7",
            color: "#166534",
            padding: "11px 14px",
            borderRadius: "10px",
            fontWeight: 600,
            fontSize: "13px",
          }}
        >
          {successMessage}
        </div>
      )}

      {/* BUTTON */}
      <motion.button
        whileHover={{
          y: -2,
          boxShadow: "0 18px 38px rgba(242,124,45,0.30)",
        }}
        whileTap={{ scale: 0.99 }}
        type="submit"
        className="tv-send-message-btn"
      >
        <span>Send Message</span>

        <div className="tv-send-icon">
          <FaPaperPlane size={12} />
        </div>
      </motion.button>
    </form>

    <style>{`
      /* ============================
         FORM LAYOUT
      ============================ */

      .tv-project-form {
        display: grid;
        gap: 15px;
      }

      .tv-form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;
      }


      /* ============================
         FIELD
      ============================ */

      .tv-field {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .tv-field label {
        color: #39444D;
        font-size: 12px;
        font-weight: 700;
        margin: 0;
      }

      .tv-field label span {
        color: #f27c2d;
      }


      /* ============================
         INPUT
      ============================ */

      .tv-input-wrap {
        position: relative;
      }

      .tv-field input,
      .tv-field textarea {
        width: 100%;

        background: #fcfbf8;

        border:
          1px solid rgba(7,17,29,0.12);

        border-radius: 12px;

        color: #07111D;

        font-size: 14px;

        outline: none;

        transition:
          border-color 0.25s ease,
          box-shadow 0.25s ease,
          background 0.25s ease;
      }

      .tv-field input {
        height: 50px;
        padding: 0 15px;
      }

      .tv-field textarea {
        height: 125px;
        padding: 14px 15px;
        resize: none;
      }

      .tv-field input::placeholder,
      .tv-field textarea::placeholder {
        color: #9A9FA4;
      }


      /* FOCUS */

      .tv-field input:focus,
      .tv-field textarea:focus {
        background: #ffffff;

        border-color:
          rgba(242,124,45,0.65);

        box-shadow:
          0 0 0 3px rgba(242,124,45,0.08);
      }


      /* SMALL ORANGE FOCUS LINE */

      .tv-input-wrap::after {
        content: "";

        position: absolute;

        left: 15px;
        right: 15px;
        bottom: 0;

        height: 2px;

        border-radius: 10px;

        background:
          linear-gradient(
            90deg,
            #DB9941,
            #f27c2d
          );

        transform: scaleX(0);

        transform-origin: left;

        transition:
          transform 0.25s ease;

        pointer-events: none;
      }

      .tv-input-wrap:focus-within::after {
        transform: scaleX(1);
      }


      /* ERRORS */

      .tv-field input.tv-input-error,
      .tv-field textarea.tv-input-error {
        border-color: #ef4444;
      }

      .tv-error-text {
        color: #ef4444;
        font-size: 11px;
        margin-left: 2px;
      }


      /* ============================
         SEND BUTTON
      ============================ */

      .tv-send-message-btn {
        width: 100%;

        height: 54px;

        margin-top: 2px;

        padding:
          0 8px
          0 20px;

        border: none;

        border-radius: 12px;

        background:
          linear-gradient(
            135deg,
            #DB9941,
            #f27c2d
          );

        color: #07111D;

        font-size: 15px;
        font-weight: 800;

        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: space-between;

        box-shadow:
          0 14px 30px rgba(242,124,45,0.22);

        transition:
          box-shadow 0.25s ease;
      }


      .tv-send-icon {
        width: 38px;
        height: 38px;

        border-radius: 9px;

        background:
          rgba(255,255,255,0.25);

        display: flex;
        align-items: center;
        justify-content: center;

        color: #07111D;

        transition:
          transform 0.25s ease;
      }


      .tv-send-message-btn:hover
      .tv-send-icon {
        transform:
          translateX(2px)
          rotate(-4deg);
      }


      /* ============================
         MOBILE
      ============================ */

      @media (max-width: 767px) {

        .tv-form-row {
          grid-template-columns: 1fr;
        }

      }
    `}</style>
  </motion.div>
</div>
    </div>
  </div>
</section>

      {/* DELIVERY CENTRES */}
      <section
        style={{
          padding: "110px 0",
          background: "#ffffff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <motion.div
            {...fadeUp}
            style={{
              textAlign: "center",
              maxWidth: "780px",
              margin: "0 auto 58px",
            }}
          >
            <div
              style={{
                color: "#DB9941",
                fontSize: "12px",
                fontWeight: 850,
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              Delivery Centres in India
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                fontWeight: 850,
                color: "#07111D",
                letterSpacing: "-1.2px",
                marginBottom: "16px",
              }}
            >
              Supporting Customers Across India
            </h2>

            <p
              style={{
                color: "#5D5D5D",
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: 0,
              }}
            >
              Our regional delivery presence helps us support faster execution,
              deployment, coordination, and customer success.
            </p>
          </motion.div>

        <div
  style={{
    display: "grid",
    gridTemplateColumns: isMobile ? "repeat(3, 1fr)" : "repeat(6, 1fr)",
    gap: isMobile ? "12px" : "16px",
    justifyItems: "center",
  }}
>
  {deliveryCenters.map((city, index) => {
    const isLastTwo =
      isMobile && index >= deliveryCenters.length - 2;

    return (
      <div
        key={city}
        style={{
          width: "100%",
          ...(isLastTwo && {
            gridColumn:
              index === deliveryCenters.length - 2
                ? "1 / 2"
                : "3 / 4",
          }),
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 28 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{
            duration: 0.5,
            delay: index * 0.035,
            ease: "easeOut",
          }}
          whileHover={{
            y: -8,
            scale: 1.04,
          }}
          style={{
            padding: isMobile ? "12px 8px" : "18px 12px",
            minHeight: isMobile ? "60px" : "76px",
            borderRadius: "18px",
            background: "#ffffff",
            border: "1px solid rgba(7,17,29,0.08)",
            color: "#07111D",
            textAlign: "center",
            fontSize: isMobile ? "12px" : "0.93rem",
            fontWeight: 800,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 14px 35px rgba(7,17,29,0.07)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <FaLocationArrow size={13} color="#DB9941" />
            <span>{city}</span>
          </div>
        </motion.div>
      </div>
    );
  })}
</div>

          {/* MAP PLACE */}
         {/* ACTUAL COMPANY MAP */}
<motion.div
  {...fadeUp}
  style={{
    marginTop: "50px",
    borderRadius: "26px",
    minHeight: "420px",
    background: "#ffffff",
    border: "1px solid rgba(7,17,29,0.08)",
    boxShadow: "0 28px 70px rgba(7,17,29,0.08)",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* GOOGLE MAP */}
  <iframe
    title="ThetaVega Corporate Office"
    src="https://www.google.com/maps?q=Block%20No.%2002%2C%20Sadafulli%2C%20Rana%20Nagar%2C%20Chhatrapati%20Sambhajinagar%2C%20Maharashtra%20431001%2C%20India&output=embed"
    width="100%"
    height="420"
    style={{
      border: 0,
      display: "block",
      width: "100%",
    }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />

  {/* ADDRESS CARD OVER MAP */}
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    style={{
      position: "absolute",
      left: "24px",
      bottom: "24px",

      width: "360px",
      maxWidth: "calc(100% - 48px)",

      padding: "20px",

      background: "rgba(255,255,255,0.96)",
      backdropFilter: "blur(12px)",

      borderRadius: "18px",

      border: "1px solid rgba(7,17,29,0.08)",

      boxShadow:
        "0 18px 45px rgba(7,17,29,0.16)",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "14px",
      }}
    >
      {/* ICON */}
      <div
        style={{
          width: "46px",
          height: "46px",
          minWidth: "46px",

          borderRadius: "14px",

          background:
            "linear-gradient(135deg, rgba(219,153,65,0.15), rgba(242,124,45,0.12))",

          color: "#f27c2d",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FaMapMarkedAlt size={20} />
      </div>

      {/* ADDRESS */}
      <div style={{ flex: 1 }}>
        <div
          style={{
            color: "#f27c2d",
            fontSize: "10px",
            fontWeight: 850,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            marginBottom: "5px",
          }}
        >
          Corporate Office
        </div>

        <h4
          style={{
            color: "#07111D",
            fontSize: "1rem",
            fontWeight: 850,
            marginBottom: "6px",
          }}
        >
          ThetaVega Tech Private Limited
        </h4>

        <p
          style={{
            color: "#5D5D5D",
            fontSize: "0.82rem",
            lineHeight: 1.6,
            marginBottom: "12px",
          }}
        >
          Block No. 02, Sadafulli, Rana Nagar,
          Chh. Sambhaji Nagar 431001, INDIA
        </p>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Block+No+02+Sadafulli+Rana+Nagar+Chhatrapati+Sambhaji+Nagar"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#07111D",
            fontSize: "0.76rem",
            fontWeight: 750,
            textDecoration: "none",

            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
          }}
        >
          Get Directions

          <FaArrowRight
            size={11}
            color="#f27c2d"
          />
        </a>
      </div>
    </div>
  </motion.div>
</motion.div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "110px 0",
          background: "#f7f4ef",
          position: "relative",
        }}
      >
        <div className="container">
          <motion.div
            {...fadeUp}
            style={{
              padding: isMobile ? "28px" : "64px",
              borderRadius: "38px",
              background: "#07111D",
              color: "#ffffff",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 30px 80px rgba(7,17,29,0.24)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-140px",
                right: "-120px",
                width: "450px",
                height: "450px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(219,153,65,0.34), transparent 66%)",
                filter: "blur(70px)",
              }}
            />

            <div
              className="row align-items-center"
              style={{ position: "relative", zIndex: 2, rowGap: "28px" }}
            >
              <div className="col-lg-8">
                <div
                  style={{
                    color: "#DB9941",
                    fontSize: "12px",
                    fontWeight: 850,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    marginBottom: "14px",
                  }}
                >
                  Start a Conversation
                </div>

                <h2
                  style={{
                    fontSize: "clamp(2rem, 3.4vw, 3.5rem)",
                    fontWeight: 850,
                    lineHeight: 1.12,
                    letterSpacing: "-1.2px",
                    marginBottom: "16px",
                  }}
                >
                  Ready to modernize your factory operations?
                </h2>

                <p
                  style={{
                    color: "rgba(229,229,223,0.76)",
                    fontSize: "1rem",
                    lineHeight: 1.8,
                    maxWidth: "720px",
                    marginBottom: 0,
                  }}
                >
                  Reach out to our team for automation, MES, IIoT, traceability,
                  machine integration, quality, maintenance, and operational
                  intelligence solutions.
                </p>
              </div>

              <div className="col-lg-4">
                <div
                  style={{
                    display: "flex",
                    gap: "14px",
                    justifyContent: isMobile ? "center" : "flex-end",
                    flexWrap: "wrap",
                    
                  }}
                >
                  <motion.a
                    whileHover={{ y: -4, scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    href="mailto:sales@thetavega.tech"
                    style={{
                      textDecoration: "none",
                      padding: "15px 24px",
                      borderRadius: "999px",
                      background: "linear-gradient(135deg, #DB9941, #f27c2d)",
                      color: "#07111D",
                      fontWeight: 850,
                      boxShadow: "0 16px 38px rgba(242,124,45,0.32)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      
                    }}
                  >
                    <FaEnvelope size={15} />
                    Contact Sales
                  </motion.a>

                  <motion.a
                    whileHover={{ y: -4, scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    href="tel:+919371675893"
                    style={{
                      textDecoration: "none",
                      padding: "15px 24px",
                      borderRadius: "999px",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.16)",
                      color: "#ffffff",
                      fontWeight: 750,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <FaPhoneAlt size={15} />
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
            max-width: 94%;
          }
        }
      `}</style>

   
    </div>
  );
};

export default ContactPage;