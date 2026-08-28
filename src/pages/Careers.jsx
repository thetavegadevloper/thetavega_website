import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  FaArrowRight,
  FaBriefcase,
  FaEnvelope,
  FaPhoneAlt,
  FaUser,
  FaBuilding,
  FaPaperPlane,
  FaCheckCircle,
  FaCogs,
  FaLaptopCode,
  FaChartLine,
  FaIndustry,
  FaGraduationCap,
} from "react-icons/fa";

/* =========================================================
   BACKEND API
========================================================= */

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Careers = () => {
  /* =========================================================
     FORM REF
  ========================================================= */

  const formRef = useRef(null);

  /* =========================================================
     ALWAYS OPEN CAREERS PAGE FROM TOP
  ========================================================= */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  /* =========================================================
     FORM STATE
  ========================================================= */

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    company: "",
    careerArea: "",
    experience: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [successMessage, setSuccessMessage] =
    useState("");

  const [apiError, setApiError] =
    useState("");

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  /* =========================================================
     SCROLL TO APPLICATION FORM
  ========================================================= */

  const scrollToApplication = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* =========================================================
     FORM CHANGE
  ========================================================= */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
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
     VALIDATION
  ========================================================= */

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName =
        "Full name is required";
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      newErrors.email =
        "Please enter a valid email address";
    }

    const mobileNumber =
      formData.mobile.replace(/\D/g, "");

    if (
      mobileNumber.length < 10 ||
      mobileNumber.length > 15
    ) {
      newErrors.mobile =
        "Please enter a valid mobile number";
    }

    if (!formData.careerArea) {
      newErrors.careerArea =
        "Please select a career area";
    }

    if (
      formData.message.trim().length < 10
    ) {
      newErrors.message =
        "Please tell us briefly about your profile";
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length === 0
    );
  };

  /* =========================================================
     SUBMIT APPLICATION TO NODE.JS + MONGODB
  ========================================================= */

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setApiError("");
    setSuccessMessage("");

    try {
      if (!API_BASE_URL) {
        throw new Error(
          "REACT_APP_API_BASE_URL is not configured in the frontend .env file"
        );
      }

      const payload = {
        full_name: formData.fullName.trim(),
        email: formData.email.trim(),
        mobile: formData.mobile.trim(),
        company_name: formData.company.trim(),
        career_area: formData.careerArea,
        experience: formData.experience,
        message: formData.message.trim(),
      };

      console.log(
        "Sending career application:",
        payload
      );

      const response = await fetch(
        `${API_BASE_URL}/api/careers`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(payload),
        }
      );

      let data = {};

      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Unable to submit application. Please try again."
        );
      }

      setSuccessMessage(
        "Application submitted successfully. Our team will review your profile."
      );

      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        company: "",
        careerArea: "",
        experience: "",
        message: "",
      });

      setErrors({});
    } catch (error) {
      console.error(
        "Career application error:",
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

  return (
    <div className="career-page">

      {/* =====================================================
          PAGE CSS
      ===================================================== */}

      <style>{`

        /* =====================================================
           GENERAL
        ===================================================== */

        .career-page {
          width: 100%;

          overflow-x: hidden;

          background: #ffffff;

          color: #151515;

          font-family:
            Montserrat,
            sans-serif;
        }


        .career-page *,
        .career-page *::before,
        .career-page *::after {
          box-sizing: border-box;
        }


        .career-page button,
        .career-page input,
        .career-page select,
        .career-page textarea {
          font-family: inherit;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .career-hero {
          min-height: 72vh;

          padding:
            120px 7% 80px;

          position: relative;

          overflow: hidden;

          display: flex;

          align-items: center;

          background:
            linear-gradient(
              135deg,
              #f8f8f8 0%,
              #ffffff 55%,
              #fff3ec 100%
            );
        }


        /* ORANGE BACKGROUND GLOW */

        .career-hero::after {
          content: "";

          position: absolute;

          width: 560px;

          height: 560px;

          right: -220px;

          top: -230px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(232,93,36,0.13),
              transparent 70%
            );

          pointer-events: none;
        }


        /* SUBTLE GRID */

        .career-hero-grid {
          position: absolute;

          inset: 0;

          opacity: 0.45;

          pointer-events: none;

          background-image:
            linear-gradient(
              rgba(21,21,21,0.025) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(21,21,21,0.025) 1px,
              transparent 1px
            );

          background-size:
            48px 48px;
        }


        .career-hero-inner {
          width: 100%;

          max-width: 1250px;

          margin: 0 auto;

          position: relative;

          z-index: 2;
        }


        .career-small-title {
          display: inline-flex;

          align-items: center;

          gap: 10px;

          margin-bottom: 18px;

          color: #e85d24;

          font-size: 13px;

          font-weight: 700;

          letter-spacing: 3px;

          text-transform: uppercase;
        }


        .career-small-title::before {
          content: "";

          width: 28px;

          height: 2px;

          background: #e85d24;
        }


        .career-hero-title {
          max-width: 900px;

          margin:
            0 0 25px;

          color: #151515;

          font-size:
            clamp(
              42px,
              6vw,
              78px
            );

          line-height: 1.03;

          font-weight: 700;

          letter-spacing:
            -2px;
        }


        .career-highlight {
          color: #e85d24;
        }


        .career-hero-description {
          max-width: 720px;

          margin:
            0 0 35px;

          color: #666666;

          font-size: 18px;

          line-height: 1.75;
        }


        /* =====================================================
           PRIMARY BUTTON
        ===================================================== */

        .career-primary-button {
          min-height: 50px;

          padding:
            0 25px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 12px;

          border: none;

          border-radius: 5px;

          color: #ffffff;

          background: #e85d24;

          cursor: pointer;

          text-decoration: none;

          font-size: 15px;

          font-weight: 600;

          box-shadow:
            0 12px 28px
            rgba(232,93,36,0.17);

          transition:
            background 0.25s ease,
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }


        .career-primary-button svg {
          transition:
            transform 0.25s ease;
        }


        .career-primary-button:hover {
          background: #d94f18;

          transform:
            translateY(-2px);

          box-shadow:
            0 16px 32px
            rgba(232,93,36,0.23);
        }


        .career-primary-button:hover svg {
          transform:
            translateX(4px);
        }


        /* =====================================================
           GENERAL SECTION
        ===================================================== */

        .career-section {
          padding:
            100px 7%;
        }


        .career-container {
          width: 100%;

          max-width: 1250px;

          margin: 0 auto;
        }


        .career-section-heading {
          max-width: 680px;

          margin-bottom: 55px;
        }


        .career-heading {
          margin:
            0 0 18px;

          color: #151515;

          font-size:
            clamp(
              32px,
              4vw,
              50px
            );

          line-height: 1.15;

          font-weight: 700;

          letter-spacing:
            -1px;
        }


        .career-description {
          margin: 0;

          color: #666666;

          font-size: 17px;

          line-height: 1.75;
        }


        /* =====================================================
           ENHANCED THREE CARDS
        ===================================================== */

        .career-feature-grid {
          display: grid;

          grid-template-columns:
            repeat(
              3,
              minmax(0, 1fr)
            );

          gap: 22px;
        }


        .career-feature-card {
          min-height: 270px;

          padding:
            30px;

          position: relative;

          overflow: hidden;

          display: flex;

          flex-direction: column;

          background: #ffffff;

          border:
            1px solid
            rgba(21,21,21,0.08);

          border-radius: 18px;

          box-shadow:
            0 12px 35px
            rgba(0,0,0,0.045);

          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }


        .career-feature-card:hover {
          transform:
            translateY(-7px);

          border-color:
            rgba(232,93,36,0.25);

          box-shadow:
            0 22px 48px
            rgba(0,0,0,0.08);
        }


        /* TOP RIGHT DECORATION */

        .career-feature-card::before {
          content: "";

          position: absolute;

          width: 150px;

          height: 150px;

          right: -85px;

          top: -85px;

          border-radius: 50%;

          background:
            rgba(232,93,36,0.055);

          transition:
            transform 0.35s ease;
        }


        .career-feature-card:hover::before {
          transform:
            scale(1.2);
        }


        /* BOTTOM ORANGE LINE */

        .career-feature-card::after {
          content: "";

          position: absolute;

          left: 30px;

          bottom: 0;

          width: 45px;

          height: 3px;

          background: #e85d24;

          transition:
            width 0.3s ease;
        }


        .career-feature-card:hover::after {
          width:
            calc(100% - 60px);
        }


        /* CARD TOP */

        .career-feature-top {
          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 20px;

          margin-bottom: 35px;

          position: relative;

          z-index: 2;
        }


        .career-feature-icon {
          width: 54px;

          height: 54px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 14px;

          color: #e85d24;

          background: #fff3ec;

          border:
            1px solid
            rgba(232,93,36,0.12);
        }


        .career-number {
          color:
            rgba(21,21,21,0.14);

          font-size: 34px;

          font-weight: 700;

          letter-spacing:
            -1px;
        }


        .career-card-title {
          margin:
            0 0 12px;

          color: #151515;

          font-size: 22px;

          font-weight: 700;

          position: relative;

          z-index: 2;
        }


        .career-card-text {
          margin: 0;

          color: #707070;

          font-size: 15px;

          line-height: 1.7;

          position: relative;

          z-index: 2;
        }


        .career-feature-label {
          margin-top: auto;

          padding-top: 22px;

          color: #e85d24;

          font-size: 11px;

          font-weight: 700;

          letter-spacing: 1px;

          text-transform: uppercase;

          position: relative;

          z-index: 2;
        }


        /* =====================================================
           APPLICATION SECTION
        ===================================================== */

        .career-application-section {
          padding:
            110px 7%;

          background:
            linear-gradient(
              180deg,
              #f7f7f7 0%,
              #fafafa 100%
            );

          scroll-margin-top:
            85px;
        }


        .career-application-layout {
          display: grid;

          grid-template-columns:
            minmax(0, 0.78fr)
            minmax(0, 1.22fr);

          gap: 75px;

          align-items: center;
        }


        /* =====================================================
           FORM LEFT
        ===================================================== */

        .career-application-info {
          max-width: 480px;
        }


        .career-application-info h2 {
          margin:
            0 0 20px;

          color: #151515;

          font-size:
            clamp(
              32px,
              4vw,
              50px
            );

          line-height: 1.12;

          font-weight: 700;

          letter-spacing:
            -1px;
        }


        .career-application-info > p {
          margin:
            0 0 32px;

          color: #666666;

          font-size: 16px;

          line-height: 1.75;
        }


        .career-application-points {
          display: grid;

          gap: 13px;
        }


        .career-application-point {
          padding:
            15px;

          display: flex;

          align-items: center;

          gap: 12px;

          background:
            rgba(255,255,255,0.70);

          border:
            1px solid
            rgba(21,21,21,0.07);

          color: #555555;

          font-size: 13px;
        }


        .career-application-point-icon {
          width: 36px;

          height: 36px;

          flex:
            0 0 36px;

          display: flex;

          align-items: center;

          justify-content: center;

          color: #e85d24;

          background: #fff3ec;
        }


        /* =====================================================
           FORM CARD
        ===================================================== */

        .career-form-card {
          padding: 38px;

          background: #ffffff;

          border:
            1px solid
            rgba(21,21,21,0.08);

          border-radius: 14px;

          box-shadow:
            0 20px 55px
            rgba(0,0,0,0.065);

          position: relative;
        }


        .career-form-card::before {
          content: "";

          position: absolute;

          top: 0;

          left: 38px;

          right: 38px;

          height: 3px;

          background:
            linear-gradient(
              90deg,
              transparent,
              #e85d24,
              transparent
            );
        }


        .career-form-title {
          margin:
            0 0 8px;

          color: #151515;

          font-size: 25px;

          font-weight: 700;
        }


        .career-form-subtitle {
          margin:
            0 0 30px;

          color: #777777;

          font-size: 14px;

          line-height: 1.6;
        }


        .career-form {
          display: grid;

          gap: 18px;
        }


        .career-form-row {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 16px;
        }


        .career-field {
          display: flex;

          flex-direction: column;

          gap: 7px;
        }


        .career-field label {
          margin: 0;

          color: #444444;

          font-size: 13px;

          font-weight: 600;
        }


        .career-field label span {
          color: #e85d24;
        }


        .career-input-wrap {
          position: relative;
        }


        .career-input-icon {
          position: absolute;

          left: 15px;

          top: 50%;

          transform:
            translateY(-50%);

          color: #999999;

          pointer-events: none;
        }


        .career-field input,
        .career-field select,
        .career-field textarea {
          width: 100%;

          border:
            1px solid #dddddd;

          border-radius: 5px;

          outline: none;

          color: #151515;

          background: #ffffff;

          font-size: 14px;

          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }


        .career-field input,
        .career-field select {
          height: 52px;

          padding:
            0 15px;
        }


        .career-input-wrap input {
          padding-left: 43px;
        }


        .career-field textarea {
          min-height: 135px;

          padding: 15px;

          resize: vertical;
        }


        .career-field input:focus,
        .career-field select:focus,
        .career-field textarea:focus {
          border-color: #e85d24;

          box-shadow:
            0 0 0 3px
            rgba(232,93,36,0.07);
        }


        .career-input-error {
          border-color:
            #dc2626 !important;
        }


        .career-error {
          color: #dc2626;

          font-size: 11px;
        }


        /* =====================================================
           FORM MESSAGE
        ===================================================== */

        .career-form-message {
          padding:
            12px 14px;

          display: flex;

          align-items: flex-start;

          gap: 9px;

          color: #166534;

          background: #f0fdf4;

          border:
            1px solid #bbf7d0;

          border-radius: 4px;

          font-size: 12px;

          line-height: 1.5;
        }


        .career-form-api-error {
          padding:
            12px 14px;

          color: #991b1b;

          background: #fef2f2;

          border:
            1px solid #fecaca;

          border-radius: 4px;

          font-size: 12px;

          font-weight: 600;

          line-height: 1.5;
        }


        .career-resume-note {
          margin: 0;

          color: #888888;

          font-size: 11px;

          line-height: 1.55;
        }


        /* =====================================================
           SUBMIT BUTTON
        ===================================================== */

        .career-submit-button {
          min-height: 54px;

          padding:
            0 9px 0 20px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 15px;

          border: none;

          border-radius: 5px;

          color: #ffffff;

          background: #e85d24;

          cursor: pointer;

          font-size: 15px;

          font-weight: 700;

          transition:
            transform 0.25s ease,
            background 0.25s ease,
            box-shadow 0.25s ease;
        }


        .career-submit-button:hover {
          background: #d94f18;

          transform:
            translateY(-2px);

          box-shadow:
            0 14px 30px
            rgba(232,93,36,0.19);
        }


        .career-submit-icon {
          width: 38px;

          height: 38px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 4px;

          background:
            rgba(255,255,255,0.16);
        }


        /* =====================================================
           CTA
        ===================================================== */

        .career-cta {
          padding:
            100px 7%;

          position: relative;

          overflow: hidden;

          color: #ffffff;

          background: #161616;

          text-align: center;
        }


        .career-cta::after {
          content: "";

          position: absolute;

          width: 450px;

          height: 450px;

          right: -180px;

          top: -200px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(232,93,36,0.20),
              transparent 70%
            );
        }


        .career-cta-inner {
          max-width: 720px;

          margin: 0 auto;

          position: relative;

          z-index: 2;
        }


        .career-cta .career-small-title {
          justify-content: center;
        }


        .career-cta-title {
          margin:
            0 0 20px;

          color: #ffffff;

          font-size:
            clamp(
              32px,
              4vw,
              50px
            );

          line-height: 1.15;
        }


        .career-cta-text {
          margin:
            0 0 30px;

          color: #aaaaaa;

          font-size: 17px;

          line-height: 1.7;
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 991px) {

          .career-feature-grid {
            grid-template-columns:
              repeat(
                2,
                minmax(0,1fr)
              );
          }


          .career-feature-card:last-child {
            grid-column:
              1 / 3;
          }


          .career-application-layout {
            grid-template-columns:
              1fr;

            gap: 50px;
          }


          .career-application-info {
            max-width: 700px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 767px) {

          .career-hero {
            min-height: auto;

            padding:
              100px 20px 65px;
          }


          .career-small-title {
            font-size: 11px;

            letter-spacing:
              2px;
          }


          .career-hero-title {
            font-size:
              clamp(
                36px,
                11vw,
                52px
              );

            letter-spacing:
              -1px;
          }


          .career-hero-description {
            font-size: 15px;

            line-height: 1.7;
          }


          .career-primary-button {
            width: 100%;
          }


          .career-section,
          .career-application-section,
          .career-cta {
            padding:
              70px 20px;
          }


          .career-section-heading {
            margin-bottom: 38px;
          }


          .career-feature-grid {
            grid-template-columns:
              1fr;
          }


          .career-feature-card:last-child {
            grid-column: auto;
          }


          .career-feature-card {
            min-height: auto;

            padding: 25px;
          }


          .career-feature-top {
            margin-bottom: 25px;
          }


          .career-form-card {
            padding:
              28px 20px;
          }


          .career-form-card::before {
            left: 20px;

            right: 20px;
          }


          .career-form-row {
            grid-template-columns:
              1fr;
          }


          .career-application-info h2 {
            font-size:
              clamp(
                30px,
                9vw,
                42px
              );
          }

        }

      `}</style>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="career-hero">

        <div className="career-hero-grid" />

        <div className="career-hero-inner">

          <span className="career-small-title">
            Careers
          </span>


          <h1 className="career-hero-title">

            Build the future with

            <span className="career-highlight">
              {" "}Theta Vega
            </span>

          </h1>


          <p className="career-hero-description">

            Join a team working on industrial
            automation, smart manufacturing,
            digital transformation and
            next-generation engineering solutions.

          </p>


          <button
            type="button"
            className="career-primary-button"
            onClick={scrollToApplication}
          >

            Start Your Application

            <FaArrowRight />

          </button>

        </div>

      </section>


      {/* =====================================================
          WHY JOIN THETAVEGA
      ===================================================== */}

      <section className="career-section">

        <div className="career-container">

          <div className="career-section-heading">

            <span className="career-small-title">
              Work With Us
            </span>


            <h2 className="career-heading">
              Grow. Build. Innovate.
            </h2>


            <p className="career-description">

              Work with engineers, developers and
              problem-solvers building meaningful
              solutions for modern manufacturing.

            </p>

          </div>


          {/* =================================================
              ENHANCED 3 CARDS
          ================================================= */}

          <div className="career-feature-grid">

            {/* CARD 1 */}

            <div className="career-feature-card">

              <div className="career-feature-top">

                <div className="career-feature-icon">

                  <FaCogs
                    size={22}
                  />

                </div>


                <div className="career-number">
                  01
                </div>

              </div>


              <h3 className="career-card-title">
                Build Real Systems
              </h3>


              <p className="career-card-text">

                Work directly on industrial automation,
                machine integration, PLC systems,
                traceability and smart manufacturing
                technologies used in production.

              </p>


              <div className="career-feature-label">
                Engineering
              </div>

            </div>


            {/* CARD 2 */}

            <div className="career-feature-card">

              <div className="career-feature-top">

                <div className="career-feature-icon">

                  <FaLaptopCode
                    size={22}
                  />

                </div>


                <div className="career-number">
                  02
                </div>

              </div>


              <h3 className="career-card-title">
                Learn Across Technologies
              </h3>


              <p className="career-card-text">

                Grow across automation, software,
                MES, IIoT, databases and industrial
                connectivity while working with
                multidisciplinary engineering teams.

              </p>


              <div className="career-feature-label">
                Technology
              </div>

            </div>


            {/* CARD 3 */}

            <div className="career-feature-card">

              <div className="career-feature-top">

                <div className="career-feature-icon">

                  <FaChartLine
                    size={22}
                  />

                </div>


                <div className="career-number">
                  03
                </div>

              </div>


              <h3 className="career-card-title">
                Create Measurable Impact
              </h3>


              <p className="career-card-text">

                Help manufacturers improve
                productivity, quality, traceability
                and operational visibility through
                practical engineering solutions.

              </p>


              <div className="career-feature-label">
                Impact
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          APPLICATION FORM
      ===================================================== */}

      <section
        ref={formRef}
        id="career-application"
        className="career-application-section"
      >

        <div className="career-container">

          <div className="career-application-layout">

            {/* =================================================
                LEFT
            ================================================= */}

            <div className="career-application-info">

              <span className="career-small-title">
                Apply With Us
              </span>


              <h2>
                Start Your Journey With Theta Vega
              </h2>


              <p>

                Tell us about your experience,
                technical interests and the area where
                you would like to contribute. Our team
                can review your profile for suitable
                career opportunities.

              </p>


              <div className="career-application-points">

                <div className="career-application-point">

                  <div className="career-application-point-icon">

                    <FaIndustry />

                  </div>

                  Industrial automation and
                  manufacturing engineering

                </div>


                <div className="career-application-point">

                  <div className="career-application-point-icon">

                    <FaLaptopCode />

                  </div>

                  Software, MES, IIoT and
                  digital manufacturing

                </div>


                <div className="career-application-point">

                  <div className="career-application-point-icon">

                    <FaGraduationCap />

                  </div>

                  Engineering graduates and
                  early-career professionals

                </div>


                <div className="career-application-point">

                  <div className="career-application-point-icon">

                    <FaEnvelope />

                  </div>

                  Application will be prepared for
                  careers@thetavega.com

                </div>

              </div>

            </div>


            {/* =================================================
                RIGHT FORM
            ================================================= */}

            <div className="career-form-card">

              <h3 className="career-form-title">
                Career Application
              </h3>


              <p className="career-form-subtitle">

                Complete the details below and tell us
                where you would like to contribute.

              </p>


              <form
                className="career-form"
                onSubmit={handleSubmit}
              >

                {/* =================================================
                    NAME + EMAIL
                ================================================= */}

                <div className="career-form-row">

                  <div className="career-field">

                    <label>

                      Full Name{" "}

                      <span>
                        *
                      </span>

                    </label>


                    <div className="career-input-wrap">

                      <FaUser
                        className="career-input-icon"
                        size={13}
                      />


                      <input
                        type="text"
                        name="fullName"
                        value={
                          formData.fullName
                        }
                        onChange={
                          handleChange
                        }
                        placeholder="Your full name"
                        className={
                          errors.fullName
                            ? "career-input-error"
                            : ""
                        }
                      />

                    </div>


                    {errors.fullName && (

                      <span className="career-error">

                        {
                          errors.fullName
                        }

                      </span>

                    )}

                  </div>


                  <div className="career-field">

                    <label>

                      Email Address{" "}

                      <span>
                        *
                      </span>

                    </label>


                    <div className="career-input-wrap">

                      <FaEnvelope
                        className="career-input-icon"
                        size={13}
                      />


                      <input
                        type="email"
                        name="email"
                        value={
                          formData.email
                        }
                        onChange={
                          handleChange
                        }
                        placeholder="name@email.com"
                        className={
                          errors.email
                            ? "career-input-error"
                            : ""
                        }
                      />

                    </div>


                    {errors.email && (

                      <span className="career-error">

                        {
                          errors.email
                        }

                      </span>

                    )}

                  </div>

                </div>


                {/* =================================================
                    MOBILE + COMPANY
                ================================================= */}

                <div className="career-form-row">

                  <div className="career-field">

                    <label>

                      Mobile Number{" "}

                      <span>
                        *
                      </span>

                    </label>


                    <div className="career-input-wrap">

                      <FaPhoneAlt
                        className="career-input-icon"
                        size={12}
                      />


                      <input
                        type="tel"
                        name="mobile"
                        value={
                          formData.mobile
                        }
                        onChange={
                          handleChange
                        }
                        placeholder="+91 9876543210"
                        className={
                          errors.mobile
                            ? "career-input-error"
                            : ""
                        }
                      />

                    </div>


                    {errors.mobile && (

                      <span className="career-error">

                        {
                          errors.mobile
                        }

                      </span>

                    )}

                  </div>


                  <div className="career-field">

                    <label>
                      Current Company
                    </label>


                    <div className="career-input-wrap">

                      <FaBuilding
                        className="career-input-icon"
                        size={13}
                      />


                      <input
                        type="text"
                        name="company"
                        value={
                          formData.company
                        }
                        onChange={
                          handleChange
                        }
                        placeholder="Company name"
                      />

                    </div>

                  </div>

                </div>


                {/* =================================================
                    CAREER AREA + EXPERIENCE
                ================================================= */}

                <div className="career-form-row">

                  <div className="career-field">

                    <label>

                      Career Area{" "}

                      <span>
                        *
                      </span>

                    </label>


                    <select
                      name="careerArea"
                      value={
                        formData.careerArea
                      }
                      onChange={
                        handleChange
                      }
                      className={
                        errors.careerArea
                          ? "career-input-error"
                          : ""
                      }
                    >

                      <option value="">
                        Select Career Area
                      </option>


                      <option value="Industrial Automation">

                        Industrial Automation

                      </option>


                      <option value="PLC / SCADA Engineering">

                        PLC / SCADA Engineering

                      </option>


                      <option value="Software Development">

                        Software Development

                      </option>


                      <option value="MES & Digital Manufacturing">

                        MES & Digital Manufacturing

                      </option>


                      <option value="IIoT & Data Integration">

                        IIoT & Data Integration

                      </option>


                      <option value="Machine Building / SPM">

                        Machine Building / SPM

                      </option>


                      <option value="Electrical & Controls">

                        Electrical & Controls

                      </option>


                      <option value="Project Engineering">

                        Project Engineering

                      </option>


                      <option value="Graduate / Internship">

                        Graduate / Internship

                      </option>


                      <option value="Other">

                        Other

                      </option>

                    </select>


                    {errors.careerArea && (

                      <span className="career-error">

                        {
                          errors.careerArea
                        }

                      </span>

                    )}

                  </div>


                  <div className="career-field">

                    <label>
                      Experience
                    </label>


                    <select
                      name="experience"
                      value={
                        formData.experience
                      }
                      onChange={
                        handleChange
                      }
                    >

                      <option value="">
                        Select Experience
                      </option>


                      <option value="Fresher">

                        Fresher

                      </option>


                      <option value="0-1 Year">

                        0 - 1 Year

                      </option>


                      <option value="1-3 Years">

                        1 - 3 Years

                      </option>


                      <option value="3-5 Years">

                        3 - 5 Years

                      </option>


                      <option value="5-8 Years">

                        5 - 8 Years

                      </option>


                      <option value="8+ Years">

                        8+ Years

                      </option>

                    </select>

                  </div>

                </div>


                {/* =================================================
                    PROFILE
                ================================================= */}

                <div className="career-field">

                  <label>

                    Tell Us About Yourself{" "}

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
                    placeholder="Briefly describe your skills, experience, projects and the type of work you are interested in..."
                    className={
                      errors.message
                        ? "career-input-error"
                        : ""
                    }
                  />


                  {errors.message && (

                    <span className="career-error">

                      {
                        errors.message
                      }

                    </span>

                  )}

                </div>


                {/* =================================================
                    RESUME NOTE
                ================================================= */}

                <p className="career-resume-note">

                  Your application details will be submitted
                  directly to Theta Vega and stored securely
                  for review. Resume upload can be added once
                  the backend file-upload API is enabled.

                </p>


                {/* =================================================
                    SUCCESS INFORMATION
                ================================================= */}

                {successMessage && (

                  <div className="career-form-message">

                    <FaCheckCircle
                      size={15}
                    />


                    <span>
                      {successMessage}
                    </span>

                  </div>

                )}


                {apiError && (

                  <div className="career-form-api-error">
                    {apiError}
                  </div>

                )}


                {/* =================================================
                    SUBMIT
                ================================================= */}

                <button
                  type="submit"
                  className="career-submit-button"
                  disabled={isSubmitting}
                  style={{
                    opacity: isSubmitting ? 0.65 : 1,
                    cursor: isSubmitting
                      ? "not-allowed"
                      : "pointer",
                  }}
                >

                  <span>
                    {isSubmitting
                      ? "Submitting..."
                      : "Submit Application"}
                  </span>


                  <span className="career-submit-icon">

                    <FaPaperPlane
                      size={13}
                    />

                  </span>

                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="career-cta">

        <div className="career-cta-inner">

          <span className="career-small-title">
            Join Our Team
          </span>


          <h2 className="career-cta-title">

            Think you can make an impact?

          </h2>


          <p className="career-cta-text">

            We are interested in engineers,
            developers and problem-solvers who want
            to build meaningful technology for
            modern manufacturing.

          </p>


          <button
            type="button"
            className="career-primary-button"
            onClick={scrollToApplication}
          >

            Apply With Us

            <FaArrowRight />

          </button>

        </div>

      </section>

    </div>
  );
};

export default Careers;