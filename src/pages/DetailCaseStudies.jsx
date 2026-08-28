import React, { useEffect } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaCheckCircle,
  FaExclamationTriangle,
  FaIndustry,
  FaLayerGroup,
  FaNetworkWired,
} from "react-icons/fa";
import { caseStudies } from "./CaseStudies";

const FlowDiagram = ({ title, steps, accent }) => (
  <motion.section
    className="dcs-flow-card"
    style={{ "--study-accent": accent }}
    initial={{ opacity: 0, y: 38 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7 }}
  >
    <div className="dcs-section-label">System Flow</div>
    <h2>{title}</h2>

    <div className="dcs-flow-wrap">
      {steps.map((step, index) => (
        <React.Fragment key={`${step}-${index}`}>
          <motion.div
            className="dcs-flow-node"
            initial={{ opacity: 0, scale: 0.82, y: 18 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: index * 0.11 }}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
          </motion.div>

          {index < steps.length - 1 && (
            <motion.div
              className="dcs-flow-arrow"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.38, delay: 0.18 + index * 0.11 }}
            >
              <FaArrowRight />
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </div>
  </motion.section>
);

const DetailSection = ({ section, accent, sectionIndex }) => {
  if (section.type === "flow") {
    return (
      <FlowDiagram
        title={section.title}
        steps={section.items}
        accent={accent}
      />
    );
  }

  if (section.type === "formula") {
    return (
      <motion.section
        className="dcs-content-card dcs-formula-card"
        style={{ "--study-accent": accent }}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.22 }}
        transition={{ duration: 0.65, delay: Math.min(sectionIndex * 0.04, 0.18) }}
      >
        <div className="dcs-section-label">Key Intelligence</div>
        <h2>{section.title}</h2>
        <motion.div
          className="dcs-formula"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          {section.formula}
        </motion.div>
        {section.text?.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </motion.section>
    );
  }

  if (section.type === "text") {
    return (
      <motion.section
        className="dcs-content-card"
        style={{ "--study-accent": accent }}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.22 }}
        transition={{ duration: 0.65, delay: Math.min(sectionIndex * 0.04, 0.18) }}
      >
        <div className="dcs-section-label">Case Study Detail</div>
        <h2>{section.title}</h2>
        <div className="dcs-text-stack">
          {section.text?.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      className="dcs-content-card"
      style={{ "--study-accent": accent }}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.65, delay: Math.min(sectionIndex * 0.04, 0.18) }}
    >
      <div className="dcs-section-label">Case Study Detail</div>
      <h2>{section.title}</h2>
      <div className="dcs-list-grid">
        {section.items?.map((item, index) => (
          <motion.div
            className="dcs-list-item"
            key={`${item}-${index}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.38, delay: Math.min(index * 0.035, 0.28) }}
            whileHover={{ y: -3 }}
          >
            <span className="dcs-list-check">
              <FaCheck />
            </span>
            <span>{item}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

const DetailCaseStudies = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const study = caseStudies.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!study) {
    return (
      <div
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 20px",
          textAlign: "center",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        <div>
          <h2 style={{ fontWeight: 800, color: "#07111D" }}>
            Case study not found
          </h2>
          <button
            onClick={() => navigate("/case-studies")}
            style={{
              marginTop: "18px",
              border: 0,
              borderRadius: "999px",
              padding: "12px 20px",
              color: "#fff",
              fontWeight: 800,
              background: "linear-gradient(135deg,#AE2C11,#f27c2d)",
            }}
          >
            Back to Case Studies
          </button>
        </div>
      </div>
    );
  }

  const currentIndex = caseStudies.findIndex((item) => item.slug === study.slug);
  const previousStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextStudy =
    currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  return (
    <div
      className="detail-case-study-page"
      style={{ "--study-accent": study.accent }}
    >
      <style>{`
        .detail-case-study-page {
          --dcs-red: #AE2C11;
          --dcs-orange: #f27c2d;
          --dcs-gold: #DB9941;
          --dcs-dark: #07111D;
          --dcs-ink: #101820;
          --dcs-text: #425466;
          --dcs-muted: #6f7d8c;
          --dcs-border: rgba(7, 17, 29, .08);
          font-family: "Montserrat", sans-serif;
          background: #f7f9fb;
          color: var(--dcs-dark);
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .detail-case-study-page *,
        .detail-case-study-page *::before,
        .detail-case-study-page *::after {
          box-sizing: border-box;
        }

        .detail-case-study-page,
        .detail-case-study-page * {
          font-family: "Montserrat", sans-serif !important;
        }

        .detail-case-study-page img,
        .detail-case-study-page svg {
          max-width: 100%;
        }

        .detail-case-study-page h1,
        .detail-case-study-page h2,
        .detail-case-study-page h3,
        .detail-case-study-page p,
        .detail-case-study-page span,
        .detail-case-study-page strong {
          overflow-wrap: anywhere;
        }

        /* ================= UNIQUE CASE-DOSSIER HERO ================= */
        .dcs-hero {
          position: relative;
          overflow: hidden;
          padding: 112px 0 72px;
          background:
            linear-gradient(90deg, rgba(174,44,17,.035) 1px, transparent 1px),
            linear-gradient(rgba(174,44,17,.035) 1px, transparent 1px),
            linear-gradient(135deg, #f7f3ec 0%, #fff 52%, #f4efe6 100%);
          background-size: 32px 32px, 32px 32px, auto;
          border-bottom: 1px solid rgba(7,17,29,.08);
          isolation: isolate;
        }

        .dcs-hero::before {
          content: "";
          position: absolute;
          z-index: -1;
          width: 520px;
          height: 520px;
          right: -170px;
          top: -180px;
          border-radius: 50%;
          background: radial-gradient(circle, color-mix(in srgb, var(--study-accent) 16%, transparent), transparent 68%);
          filter: blur(8px);
          animation: dcsHeroGlow 7s ease-in-out infinite;
          pointer-events: none;
        }

        .dcs-hero::after {
          content: "";
          position: absolute;
          z-index: -1;
          width: 330px;
          height: 330px;
          left: -150px;
          bottom: -160px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(219,153,65,.13), transparent 70%);
          animation: dcsHeroGlow 8.5s ease-in-out infinite reverse;
          pointer-events: none;
        }

        .dcs-hero-shell {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(360px, .92fr);
          gap: clamp(34px, 5vw, 74px);
          align-items: center;
          width: 100%;
        }

        .dcs-hero-copy-block,
        .dcs-blueprint-board {
          min-width: 0;
        }

        .dcs-case-identifier {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 0 0 22px;
          color: #6c665f;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .dcs-case-identifier::before {
          content: "";
          width: 38px;
          height: 2px;
          flex: 0 0 38px;
          background: linear-gradient(90deg, var(--study-accent), var(--dcs-gold));
        }

        .dcs-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 0 0 24px;
          padding: 9px 13px;
          border-radius: 10px;
          border: 1px solid rgba(7,17,29,.09);
          background: rgba(255,255,255,.72);
          color: #4f5b66;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 8px 22px rgba(7,17,29,.05);
          transition: transform .25s ease, border-color .25s ease, color .25s ease, box-shadow .25s ease;
        }

        .dcs-back-btn:hover {
          transform: translateX(-4px);
          color: var(--dcs-dark);
          border-color: color-mix(in srgb, var(--study-accent) 35%, #d9dde1);
          box-shadow: 0 12px 28px rgba(7,17,29,.08);
        }

        .dcs-kicker {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          max-width: 100%;
          gap: 9px;
          padding: 8px 11px;
          margin-bottom: 14px;
          border-radius: 8px;
          color: var(--study-accent);
          background: color-mix(in srgb, var(--study-accent) 7%, #fff);
          border: 1px solid color-mix(in srgb, var(--study-accent) 22%, #e8e2d9);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.7px;
          text-transform: uppercase;
        }

        .dcs-kicker::before {
          content: "";
          width: 7px;
          height: 7px;
          border-radius: 2px;
          background: var(--study-accent);
          box-shadow: 0 0 0 5px color-mix(in srgb, var(--study-accent) 10%, transparent);
          animation: dcsSquarePulse 2.2s ease-in-out infinite;
        }

        .dcs-hero h1 {
          max-width: 800px;
          margin: 0 0 18px;
          color: #07111D;
          font-size: clamp(2.25rem, 4.2vw, 4.25rem);
          font-weight: 800;
          line-height: 1.04;
          letter-spacing: -.035em;
        }

        .dcs-hero-headline {
          position: relative;
          max-width: 720px;
          margin: 0 0 27px;
          padding-left: 16px;
          color: #4d5a66;
          font-size: clamp(.98rem, 1.35vw, 1.12rem);
          font-weight: 500;
          line-height: 1.75;
        }

        .dcs-hero-headline::before {
          content: "";
          position: absolute;
          left: 0;
          top: 5px;
          bottom: 5px;
          width: 3px;
          border-radius: 4px;
          background: linear-gradient(180deg, var(--study-accent), var(--dcs-gold));
        }

        .dcs-meta-wrap {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          max-width: 760px;
        }

        .dcs-meta-pill {
          min-width: 0;
          display: flex;
          align-items: flex-start;
          gap: 9px;
          padding: 11px 12px;
          border-radius: 12px;
          color: #394754;
          background: rgba(255,255,255,.82);
          border: 1px solid rgba(7,17,29,.075);
          box-shadow: 0 8px 22px rgba(7,17,29,.045);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.5;
          transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
        }

        .dcs-meta-pill:last-child:nth-child(odd) {
          grid-column: 1 / -1;
        }

        .dcs-meta-pill:hover {
          transform: translateY(-3px);
          border-color: color-mix(in srgb, var(--study-accent) 30%, #dfe3e7);
          box-shadow: 0 14px 28px rgba(7,17,29,.075);
        }

        .dcs-meta-pill svg {
          color: var(--study-accent);
          margin-top: 2px;
          flex: 0 0 auto;
        }

        .dcs-meta-pill span {
          min-width: 0;
          overflow-wrap: anywhere;
        }

        /* Blueprint/dossier visual — deliberately different from the Solutions hero */
        .dcs-blueprint-board {
          position: relative;
          width: 100%;
          max-width: 510px;
          justify-self: end;
          border-radius: 26px;
          overflow: hidden;
          color: #fff;
          background:
            linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px),
            linear-gradient(145deg, #09121c 0%, #101d29 100%);
          background-size: 28px 28px, 28px 28px, auto;
          border: 1px solid rgba(255,255,255,.08);
          box-shadow: 0 34px 75px rgba(7,17,29,.20);
        }

        .dcs-blueprint-board::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(110deg, transparent 15%, rgba(255,255,255,.055) 48%, transparent 62%);
          transform: translateX(-120%);
          animation: dcsBlueprintSweep 6.8s ease-in-out infinite;
          pointer-events: none;
        }

        .dcs-blueprint-topbar {
          position: relative;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 14px 16px;
          border-bottom: 1px solid rgba(255,255,255,.08);
          background: rgba(255,255,255,.025);
        }

        .dcs-blueprint-topbar span {
          min-width: 0;
          color: rgba(255,255,255,.65);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .dcs-blueprint-leds {
          display: flex;
          gap: 5px;
          flex: 0 0 auto;
        }

        .dcs-blueprint-leds i {
          width: 7px;
          height: 7px;
          border-radius: 2px;
          background: rgba(255,255,255,.18);
        }

        .dcs-blueprint-leds i:first-child { background: var(--study-accent); }
        .dcs-blueprint-leds i:nth-child(2) { background: var(--dcs-gold); }

        .dcs-blueprint-main {
          position: relative;
          min-height: 330px;
          padding: 28px 24px 22px;
          display: grid;
          place-items: center;
        }

        .dcs-blueprint-lines {
          position: absolute;
          inset: 16px;
          width: calc(100% - 32px);
          height: calc(100% - 32px);
          pointer-events: none;
          opacity: .9;
        }

        .dcs-blueprint-icon-shell {
          position: relative;
          z-index: 4;
          width: min(220px, 58vw);
          aspect-ratio: 1 / 1;
          display: grid;
          place-items: center;
          clip-path: polygon(12% 0, 88% 0, 100% 12%, 100% 88%, 88% 100%, 12% 100%, 0 88%, 0 12%);
          background: linear-gradient(145deg, rgba(255,255,255,.10), rgba(255,255,255,.035));
          border: 1px solid rgba(255,255,255,.12);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.08), 0 22px 50px rgba(0,0,0,.28);
        }

        .dcs-blueprint-icon-shell::before {
          content: "";
          position: absolute;
          inset: 12px;
          clip-path: inherit;
          border: 1px dashed color-mix(in srgb, var(--study-accent) 45%, rgba(255,255,255,.18));
          animation: dcsDashPulse 3s ease-in-out infinite;
        }

        .dcs-lottie {
          position: relative;
          z-index: 5;
          width: 170px;
          height: 170px;
          max-width: 76%;
          max-height: 76%;
          filter: drop-shadow(0 20px 28px rgba(0,0,0,.30));
        }

        .dcs-blueprint-node {
          position: absolute;
          z-index: 6;
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 92px;
          max-width: 130px;
          padding: 8px 10px;
          border-radius: 9px;
          border: 1px solid rgba(255,255,255,.10);
          background: rgba(5,13,21,.78);
          backdrop-filter: blur(8px);
          box-shadow: 0 12px 24px rgba(0,0,0,.23);
        }

        .dcs-blueprint-node b {
          color: var(--study-accent);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1.2px;
          text-transform: uppercase;
        }

        .dcs-blueprint-node span {
          color: rgba(255,255,255,.76);
          font-size: 9px;
          font-weight: 600;
          line-height: 1.25;
        }

        .dcs-blueprint-node.input { left: 18px; top: 45px; }
        .dcs-blueprint-node.core { right: 18px; top: 120px; }
        .dcs-blueprint-node.output { left: 24px; bottom: 30px; }

        .dcs-blueprint-number {
          position: absolute;
          z-index: 2;
          right: 13px;
          bottom: -6px;
          color: rgba(255,255,255,.055);
          font-size: 92px;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -6px;
          user-select: none;
        }

        .dcs-blueprint-footer {
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid rgba(255,255,255,.08);
          background: rgba(255,255,255,.025);
        }

        .dcs-blueprint-metric {
          min-width: 0;
          padding: 13px 10px;
          text-align: center;
          border-right: 1px solid rgba(255,255,255,.07);
        }

        .dcs-blueprint-metric:last-child { border-right: 0; }

        .dcs-blueprint-metric b {
          display: block;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          margin-bottom: 3px;
        }

        .dcs-blueprint-metric span {
          display: block;
          color: rgba(255,255,255,.42);
          font-size: 7.5px;
          font-weight: 700;
          letter-spacing: .8px;
          text-transform: uppercase;
        }

        @keyframes dcsHeroGlow {
          0%,100% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(-18px,12px,0) scale(1.08); }
        }
        @keyframes dcsSquarePulse {
          0%,100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(.72); opacity: .62; }
        }
        @keyframes dcsBlueprintSweep {
          0%,18% { transform: translateX(-120%); }
          65%,100% { transform: translateX(120%); }
        }
        @keyframes dcsDashPulse {
          0%,100% { opacity: .45; }
          50% { opacity: 1; }
        }

        /* ================= BODY ================= */
        .dcs-body {
          position: relative;
          padding: 82px 0 110px;
          background:
            radial-gradient(circle at 10% 8%, color-mix(in srgb, var(--study-accent) 8%, transparent), transparent 24%),
            radial-gradient(circle at 92% 42%, rgba(31,132,214,.06), transparent 24%),
            linear-gradient(180deg, #f7f9fb 0%, #ffffff 42%, #f8fafc 100%);
        }

        .dcs-body::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: .42;
          background-image: radial-gradient(rgba(7,17,29,.06) .7px, transparent .7px);
          background-size: 18px 18px;
          mask-image: linear-gradient(to bottom, black, transparent 92%);
        }

        .dcs-body > .container { position: relative; z-index: 1; }

        .dcs-problem-solution {
          margin-bottom: 64px;
          position: relative;
        }

        .dcs-ps-card {
          position: relative;
          height: 100%;
          overflow: hidden;
          padding: 34px 34px 36px;
          border-radius: 28px;
          border: 1px solid var(--dcs-border);
          box-shadow: 0 16px 42px rgba(7,17,29,.065);
          transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease;
        }

        .dcs-ps-card::after {
          content: attr(data-number);
          position: absolute;
          right: 20px;
          top: 10px;
          font-size: 78px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: -5px;
          color: rgba(7,17,29,.035);
          pointer-events: none;
        }

        .dcs-ps-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 26px 56px rgba(7,17,29,.12);
        }

        .dcs-ps-card.problem {
          background:
            radial-gradient(circle at 93% 10%, rgba(201,74,30,.11), transparent 27%),
            linear-gradient(145deg, #fff8f5 0%, #fff 72%);
          border-left: 5px solid #c94a1e;
          border-radius: 28px 28px 28px 48px;
        }

        .dcs-ps-card.solution {
          background:
            radial-gradient(circle at 93% 10%, color-mix(in srgb, var(--study-accent) 12%, transparent), transparent 28%),
            linear-gradient(145deg, #fffaf0 0%, #fff 72%);
          border-left: 5px solid var(--study-accent);
          border-radius: 28px 48px 28px 28px;
        }

        .dcs-ps-title {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 11px;
          margin-bottom: 16px;
          color: #b44425;
          font-weight: 800;
          font-size: 1.08rem;
          letter-spacing: -.01em;
        }

        .dcs-ps-title svg {
          width: 36px;
          height: 36px;
          padding: 9px;
          border-radius: 11px;
          background: rgba(201,74,30,.10);
        }

        .dcs-ps-card.solution .dcs-ps-title { color: color-mix(in srgb, var(--study-accent) 72%, #5d4500); }
        .dcs-ps-card.solution .dcs-ps-title svg { background: color-mix(in srgb, var(--study-accent) 12%, #fff); }

        .dcs-ps-card p {
          position: relative;
          z-index: 1;
          color: var(--dcs-text);
          font-size: .97rem;
          font-weight: 500;
          line-height: 1.82;
          margin: 0 0 12px;
        }
        .dcs-ps-card p:last-child { margin-bottom: 0; }

        /* ================= CONTENT / FLOW CARDS ================= */
        .dcs-flow-card,
        .dcs-content-card {
          --study-accent: #f27c2d;
          position: relative;
          overflow: hidden;
          padding: 38px;
          margin-bottom: 38px;
          border-radius: 30px;
          background: rgba(255,255,255,.92);
          border: 1px solid rgba(7,17,29,.07);
          box-shadow: 0 18px 48px rgba(7,17,29,.07);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease;
        }

        .dcs-flow-card:hover,
        .dcs-content-card:hover {
          transform: translateY(-4px);
          border-color: color-mix(in srgb, var(--study-accent) 22%, rgba(7,17,29,.08));
          box-shadow: 0 26px 60px rgba(7,17,29,.10);
        }

        .dcs-flow-card::before,
        .dcs-content-card::before {
          content: "";
          position: absolute;
          inset: 0 auto auto 0;
          width: 130px;
          height: 4px;
          background: linear-gradient(90deg, var(--study-accent), var(--dcs-gold), transparent);
          border-radius: 0 999px 999px 0;
          box-shadow: 0 3px 16px color-mix(in srgb, var(--study-accent) 23%, transparent);
        }

        .dcs-flow-card::after,
        .dcs-content-card::after {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          right: -90px;
          top: -90px;
          background: radial-gradient(circle, color-mix(in srgb, var(--study-accent) 9%, transparent), transparent 68%);
          pointer-events: none;
        }

        .dcs-section-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--study-accent);
          text-transform: uppercase;
          letter-spacing: 1.7px;
          font-size: 9.5px;
          font-weight: 900;
          margin-bottom: 8px;
        }

        .dcs-section-label::before {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 2px;
          background: var(--study-accent);
          transform: rotate(45deg);
        }

        .dcs-flow-card h2,
        .dcs-content-card h2 {
          color: var(--dcs-dark);
          font-size: clamp(1.4rem, 2.15vw, 2rem);
          font-weight: 800;
          letter-spacing: -.025em;
          line-height: 1.15;
          margin-bottom: 29px;
        }

        .dcs-flow-wrap {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 9px;
          flex-wrap: nowrap;
          overflow-x: auto;
          padding: 8px 3px 14px;
          scrollbar-width: thin;
          scrollbar-color: color-mix(in srgb, var(--study-accent) 38%, #d8dde3) transparent;
        }

        .dcs-flow-wrap::-webkit-scrollbar { height: 5px; }
        .dcs-flow-wrap::-webkit-scrollbar-thumb { background: color-mix(in srgb, var(--study-accent) 38%, #d8dde3); border-radius: 999px; }

        .dcs-flow-node {
          min-width: 132px;
          max-width: 190px;
          flex: 1 1 136px;
          min-height: 104px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 16px 14px;
          border-radius: 20px;
          background:
            linear-gradient(#fff, #fff) padding-box,
            linear-gradient(135deg, color-mix(in srgb, var(--study-accent) 58%, #fff), #e8edf2) border-box;
          border: 1px solid transparent;
          box-shadow: 0 10px 24px rgba(7,17,29,.06);
          transition: transform .28s ease, box-shadow .28s ease;
        }

        .dcs-flow-node:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 18px 32px rgba(7,17,29,.11);
        }

        .dcs-flow-node::after {
          content: "";
          position: absolute;
          inset: auto 14px 9px;
          height: 2px;
          border-radius: 2px;
          background: linear-gradient(90deg, transparent, var(--study-accent), transparent);
          opacity: .45;
        }

        .dcs-flow-node span {
          width: 30px;
          height: 30px;
          border-radius: 9px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, var(--study-accent), color-mix(in srgb, var(--study-accent) 58%, var(--dcs-gold)));
          color: #fff;
          font-size: 9px;
          font-weight: 900;
          margin-bottom: 9px;
          box-shadow: 0 8px 18px color-mix(in srgb, var(--study-accent) 24%, transparent);
        }

        .dcs-flow-node strong {
          font-size: 11.5px;
          line-height: 1.42;
          color: #233140;
          font-weight: 720;
        }

        .dcs-flow-arrow {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          min-width: 28px;
          color: var(--study-accent);
          transform-origin: left;
          font-size: 14px;
          filter: drop-shadow(0 3px 7px color-mix(in srgb, var(--study-accent) 28%, transparent));
        }

        .dcs-flow-arrow svg { animation: dcsArrowNudge 1.5s ease-in-out infinite; }
        @keyframes dcsArrowNudge { 0%,100% { transform: translateX(0); opacity: .72; } 50% { transform: translateX(4px); opacity: 1; } }

        .dcs-list-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .dcs-list-item {
          min-height: 58px;
          display: flex;
          align-items: flex-start;
          gap: 11px;
          padding: 14px 15px;
          border-radius: 16px;
          background: linear-gradient(145deg, #fbfcfd, #f4f7f9);
          border: 1px solid rgba(7,17,29,.055);
          color: #3f4f5f;
          font-size: 12.3px;
          font-weight: 560;
          line-height: 1.5;
          transition: transform .25s ease, background .25s ease, border-color .25s ease, box-shadow .25s ease;
        }

        .dcs-list-item:hover {
          transform: translateY(-4px);
          background: #fff;
          border-color: color-mix(in srgb, var(--study-accent) 24%, #e3e8ec);
          box-shadow: 0 12px 24px rgba(7,17,29,.075);
        }

        .dcs-list-check {
          width: 24px;
          height: 24px;
          border-radius: 8px;
          flex: 0 0 24px;
          display: grid;
          place-items: center;
          color: #fff;
          background: linear-gradient(135deg, var(--study-accent), color-mix(in srgb, var(--study-accent) 55%, var(--dcs-gold)));
          font-size: 9px;
          box-shadow: 0 6px 14px color-mix(in srgb, var(--study-accent) 22%, transparent);
        }

        .dcs-text-stack {
          display: grid;
          gap: 12px;
        }

        .dcs-content-card p {
          color: var(--dcs-text);
          font-size: .98rem;
          font-weight: 500;
          line-height: 1.82;
          margin: 0 0 9px;
          max-width: 1050px;
        }

        .dcs-formula-card {
          background:
            radial-gradient(circle at 92% 12%, color-mix(in srgb, var(--study-accent) 13%, transparent), transparent 36%),
            linear-gradient(145deg, #ffffff, #f8fafc);
        }

        .dcs-formula {
          position: relative;
          overflow: hidden;
          padding: 28px 24px;
          margin: -3px 0 22px;
          border-radius: 22px;
          text-align: center;
          color: #fff;
          background: linear-gradient(120deg, #07111D 0%, color-mix(in srgb, var(--study-accent) 55%, #0b1c2d) 100%);
          border: 1px solid rgba(255,255,255,.08);
          font-size: clamp(1.15rem, 2.2vw, 1.8rem);
          font-weight: 800;
          letter-spacing: .1px;
          box-shadow: 0 18px 38px rgba(7,17,29,.16);
        }

        .dcs-formula::after {
          content: "";
          position: absolute;
          top: -60%;
          left: -30%;
          width: 55%;
          height: 220%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.12), transparent);
          transform: rotate(18deg);
          animation: dcsFormulaSweep 5.2s ease-in-out infinite;
        }
        @keyframes dcsFormulaSweep { 0%,20% { left: -45%; } 65%,100% { left: 115%; } }

        /* ================= IMPACT ================= */
        .dcs-impact {
          position: relative;
          overflow: hidden;
          padding: 42px;
          margin: 46px 0;
          border-radius: 32px;
          background:
            radial-gradient(circle at 92% 12%, color-mix(in srgb, var(--study-accent) 30%, transparent), transparent 32%),
            radial-gradient(circle at 9% 92%, rgba(31,132,214,.18), transparent 31%),
            linear-gradient(135deg, #06101d 0%, #0b1d2e 55%, #122a41 100%);
          color: #fff;
          box-shadow: 0 30px 72px rgba(7,17,29,.25);
          border: 1px solid rgba(255,255,255,.08);
        }

        .dcs-impact::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255,255,255,.09) 1px, transparent 1px);
          background-size: 18px 18px;
          mask-image: radial-gradient(circle at 80% 50%, black, transparent 68%);
          pointer-events: none;
        }

        .dcs-impact-label {
          position: relative;
          color: #ffd391;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 9px;
        }

        .dcs-impact h2 {
          position: relative;
          font-size: clamp(1.5rem, 2.3vw, 2.08rem);
          font-weight: 800;
          letter-spacing: -.02em;
          margin-bottom: 22px;
        }

        .dcs-impact-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 13px;
        }

        .dcs-impact-item {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          color: rgba(255,255,255,.84);
          line-height: 1.62;
          font-size: 13px;
          font-weight: 500;
          padding: 14px 15px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,.09);
          background: linear-gradient(135deg, rgba(255,255,255,.065), rgba(255,255,255,.025));
          backdrop-filter: blur(8px);
          transition: transform .25s ease, background .25s ease, border-color .25s ease;
        }

        .dcs-impact-item:hover {
          transform: translateY(-4px);
          background: rgba(255,255,255,.09);
          border-color: color-mix(in srgb, var(--study-accent) 35%, rgba(255,255,255,.12));
        }

        .dcs-impact-item svg {
          color: color-mix(in srgb, var(--study-accent) 72%, #fff);
          margin-top: 3px;
          flex: 0 0 auto;
          filter: drop-shadow(0 0 10px color-mix(in srgb, var(--study-accent) 30%, transparent));
        }

        /* ================= PREVIOUS / NEXT ================= */
        .dcs-nav {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 54px;
        }

        .dcs-nav-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(7,17,29,.075);
          background: linear-gradient(145deg, #fff, #f8fafc);
          border-radius: 22px;
          padding: 22px 23px;
          cursor: pointer;
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
          box-shadow: 0 12px 28px rgba(7,17,29,.055);
        }

        .dcs-nav-card::after {
          content: "";
          position: absolute;
          width: 110px;
          height: 110px;
          border-radius: 50%;
          right: -60px;
          bottom: -60px;
          background: color-mix(in srgb, var(--study-accent) 8%, transparent);
          transition: transform .35s ease;
        }

        .dcs-nav-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 22px 44px rgba(7,17,29,.11);
          border-color: color-mix(in srgb, var(--study-accent) 24%, #e1e6ea);
        }
        .dcs-nav-card:hover::after { transform: scale(1.8); }

        .dcs-nav-card.next { text-align: right; }
        .dcs-nav-label {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--study-accent);
          font-size: 9.5px;
          font-weight: 900;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .dcs-nav-card.next .dcs-nav-label { justify-content: flex-end; }
        .dcs-nav-card strong {
          position: relative;
          z-index: 1;
          display: block;
          color: var(--dcs-dark);
          font-size: 14px;
          line-height: 1.45;
          font-weight: 760;
        }

        /* ================= CTA ================= */
        .dcs-cta {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          width: min(1380px, 92%);
          margin: 0 auto 64px;
          padding: 68px 34px;
          border-radius: 32px;
          text-align: center;
          color: #fff;
          background:
            radial-gradient(circle at 15% 50%, rgba(34,120,255,.20), transparent 34%),
            radial-gradient(circle at 85% 28%, color-mix(in srgb, var(--study-accent) 25%, transparent), transparent 33%),
            linear-gradient(135deg, #050d16 0%, #0b1c2d 52%, #06101d 100%);
          border: 1px solid rgba(255,255,255,.08);
          box-shadow: 0 34px 90px rgba(0,0,0,.33), inset 0 1px 0 rgba(255,255,255,.08);
        }

        .dcs-cta::before {
          content: "";
          position: absolute;
          z-index: -1;
          inset: 0;
          background-image: radial-gradient(rgba(255,255,255,.085) 1px, transparent 1px);
          background-size: 19px 19px;
          mask-image: radial-gradient(circle at 50% 50%, black, transparent 78%);
        }

        .dcs-cta h2 {
          font-size: clamp(1.75rem, 2.8vw, 2.55rem);
          font-weight: 800;
          letter-spacing: -.025em;
          margin-bottom: 13px;
        }

        .dcs-cta p {
          color: rgba(255,255,255,.7);
          max-width: 670px;
          margin: 0 auto 27px;
          line-height: 1.75;
          font-size: .98rem;
        }

        .dcs-cta button {
          position: relative;
          overflow: hidden;
          border: 0;
          border-radius: 999px;
          padding: 14px 26px;
          color: #fff;
          font-weight: 800;
          font-size: 13.5px;
          background: linear-gradient(135deg, var(--dcs-red), var(--dcs-orange));
          box-shadow: 0 14px 32px rgba(242,124,45,.27);
          transition: transform .3s ease, box-shadow .3s ease;
          cursor: pointer;
        }

        .dcs-cta button::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -35%;
          width: 28%;
          height: 200%;
          transform: rotate(20deg);
          background: rgba(255,255,255,.18);
          transition: left .45s ease;
        }

        .dcs-cta button:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 42px rgba(242,124,45,.4);
        }
        .dcs-cta button:hover::after { left: 120%; }

        /* ================= RESPONSIVE ================= */
        @media (max-width: 991px) {
          .dcs-hero { padding: 102px 0 62px; }
          .dcs-hero-shell { grid-template-columns: 1fr; gap: 34px; }
          .dcs-blueprint-board { justify-self: center; max-width: 620px; }
          .dcs-blueprint-main { min-height: 315px; }
          .dcs-list-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 768px) {
          .detail-case-study-page .container {
            width: 100%;
            max-width: 100%;
            padding-left: 18px;
            padding-right: 18px;
          }

          .dcs-hero { padding: 88px 0 46px; }
          .dcs-hero-shell { gap: 28px; }
          .dcs-back-btn { margin-bottom: 18px; font-size: 10.5px; }
          .dcs-case-identifier { font-size: 9px; letter-spacing: 1.5px; margin-bottom: 16px; }
          .dcs-kicker { font-size: 8.5px; letter-spacing: 1.3px; margin-bottom: 11px; }
          .dcs-hero h1 {
            width: 100%;
            max-width: 100%;
            font-size: clamp(1.85rem, 8.6vw, 2.5rem);
            line-height: 1.08;
            letter-spacing: -.025em;
            overflow-wrap: anywhere;
          }
          .dcs-hero-headline { font-size: .93rem; line-height: 1.66; margin-bottom: 20px; }
          .dcs-meta-wrap { grid-template-columns: 1fr; gap: 8px; width: 100%; }
          .dcs-meta-pill,
          .dcs-meta-pill:last-child:nth-child(odd) { grid-column: auto; width: 100%; }

          .dcs-blueprint-board { width: 100%; max-width: 100%; border-radius: 20px; }
          .dcs-blueprint-topbar { padding: 12px 13px; }
          .dcs-blueprint-topbar span { font-size: 7.5px; letter-spacing: 1px; }
          .dcs-blueprint-main { min-height: 288px; padding: 22px 16px 18px; }
          .dcs-blueprint-icon-shell { width: min(180px, 55vw); }
          .dcs-lottie { width: 136px; height: 136px; }
          .dcs-blueprint-node { min-width: 76px; max-width: 105px; padding: 7px 8px; }
          .dcs-blueprint-node b { font-size: 6.8px; }
          .dcs-blueprint-node span { font-size: 7.8px; }
          .dcs-blueprint-node.input { left: 9px; top: 36px; }
          .dcs-blueprint-node.core { right: 9px; top: 106px; }
          .dcs-blueprint-node.output { left: 12px; bottom: 22px; }
          .dcs-blueprint-number { font-size: 68px; right: 8px; }
          .dcs-blueprint-metric { padding: 11px 5px; }
          .dcs-blueprint-metric b { font-size: 8px; }
          .dcs-blueprint-metric span { font-size: 6.5px; letter-spacing: .45px; }

          .dcs-body { padding: 54px 0 76px; }
          .dcs-problem-solution { margin-bottom: 42px; }
          .dcs-ps-card { padding: 24px 20px 25px; border-radius: 22px; }
          .dcs-ps-card.problem { border-radius: 22px 22px 22px 34px; }
          .dcs-ps-card.solution { border-radius: 22px 34px 22px 22px; }
          .dcs-ps-card::after { font-size: 58px; right: 13px; top: 8px; }
          .dcs-ps-title { font-size: 1rem; }
          .dcs-ps-title svg { width: 32px; height: 32px; padding: 8px; }
          .dcs-ps-card p { font-size: .93rem; line-height: 1.72; }

          .dcs-flow-card,
          .dcs-content-card,
          .dcs-impact { padding: 24px 19px; border-radius: 22px; margin-bottom: 26px; max-width: 100%; }
          .dcs-flow-card h2,
          .dcs-content-card h2 { font-size: 1.35rem; margin-bottom: 22px; }
          .dcs-flow-wrap { flex-direction: column; align-items: stretch; gap: 4px; overflow-x: visible; padding-bottom: 4px; }
          .dcs-flow-node { max-width: 100%; width: 100%; min-height: 82px; flex: 0 0 auto; }
          .dcs-flow-arrow { width: 100%; height: 30px; transform: rotate(90deg); }
          .dcs-flow-arrow svg { animation: dcsArrowNudgeMobile 1.5s ease-in-out infinite; }
          @keyframes dcsArrowNudgeMobile { 0%,100% { transform: translateX(0); } 50% { transform: translateX(4px); } }
          .dcs-list-grid { grid-template-columns: 1fr; gap: 10px; }
          .dcs-list-item { min-height: 54px; font-size: 12px; min-width: 0; }
          .dcs-list-item > span:last-child { min-width: 0; overflow-wrap: anywhere; }
          .dcs-content-card p { font-size: .93rem; line-height: 1.72; }
          .dcs-formula { padding: 23px 16px; font-size: 1.08rem; overflow-wrap: anywhere; }
          .dcs-impact { margin: 34px 0; }
          .dcs-impact-grid { grid-template-columns: 1fr; }
          .dcs-impact-item { font-size: 12.5px; min-width: 0; }
          .dcs-nav { grid-template-columns: 1fr; margin-top: 36px; }
          .dcs-nav-card.next { text-align: left; }
          .dcs-nav-card.next .dcs-nav-label { justify-content: flex-start; }
          .dcs-cta { width: calc(100% - 28px); padding: 46px 20px; border-radius: 24px; margin-bottom: 42px; }
          .dcs-cta h2 { font-size: 1.65rem; }
          .dcs-cta p { font-size: .92rem; }
        }

        @media (max-width: 390px) {
          .detail-case-study-page .container { padding-left: 14px; padding-right: 14px; }
          .dcs-hero { padding-top: 82px; }
          .dcs-hero h1 { font-size: 1.72rem; }
          .dcs-hero-headline { font-size: .88rem; }
          .dcs-blueprint-main { min-height: 260px; }
          .dcs-blueprint-icon-shell { width: 150px; }
          .dcs-lottie { width: 112px; height: 112px; }
          .dcs-blueprint-node { min-width: 66px; max-width: 88px; padding: 6px 7px; }
          .dcs-blueprint-node span { font-size: 7px; }
          .dcs-blueprint-node.input { left: 7px; top: 30px; }
          .dcs-blueprint-node.core { right: 7px; top: 96px; }
          .dcs-blueprint-node.output { left: 8px; bottom: 18px; }
          .dcs-blueprint-number { font-size: 58px; }
          .dcs-blueprint-metric span { font-size: 5.8px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .dcs-hero::before,
          .dcs-hero::after,
          .dcs-kicker::before,
          .dcs-blueprint-board::before,
          .dcs-blueprint-icon-shell::before,
          .dcs-flow-arrow svg,
          .dcs-formula::after { animation: none !important; }
        }
      `}</style>

      {/* ================= UNIQUE CASE-DOSSIER HERO ================= */}
      <section className="dcs-hero">
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="dcs-hero-shell">
            <motion.div
              className="dcs-hero-copy-block"
              initial={{ opacity: 0, x: -34 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                className="dcs-back-btn"
                onClick={() => navigate("/case-studies")}
              >
                <FaArrowLeft /> Back to Case Studies
              </button>

              <div className="dcs-case-identifier">
                Manufacturing Case File / {study.number}
              </div>

              <div className="dcs-kicker">{study.cardTitle}</div>
              <h1>{study.title}</h1>
              <div className="dcs-hero-headline">{study.cardHeadline}</div>

              <div className="dcs-meta-wrap">
                <motion.div
                  className="dcs-meta-pill"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.2 }}
                >
                  <FaIndustry />
                  <span>{study.industry}</span>
                </motion.div>
                <motion.div
                  className="dcs-meta-pill"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.3 }}
                >
                  <FaLayerGroup />
                  <span>{study.solution}</span>
                </motion.div>
                {study.scope && (
                  <motion.div
                    className="dcs-meta-pill"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.4 }}
                  >
                    <FaNetworkWired />
                    <span>{study.scope}</span>
                  </motion.div>
                )}
              </div>
            </motion.div>

            <motion.div
              className="dcs-blueprint-board"
              initial={{ opacity: 0, y: 30, rotateY: -5 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="dcs-blueprint-topbar">
                <span>OperateX / Manufacturing Intelligence Blueprint</span>
                <div className="dcs-blueprint-leds" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
              </div>

              <div className="dcs-blueprint-main">
                <svg
                  className="dcs-blueprint-lines"
                  viewBox="0 0 460 290"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M65 68 H150 L200 112"
                    fill="none"
                    stroke="rgba(255,255,255,.27)"
                    strokeWidth="1.4"
                    strokeDasharray="5 6"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: .35 }}
                  />
                  <motion.path
                    d="M395 135 H315 L270 145"
                    fill="none"
                    stroke="rgba(255,255,255,.27)"
                    strokeWidth="1.4"
                    strokeDasharray="5 6"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: .55 }}
                  />
                  <motion.path
                    d="M72 242 H152 L202 184"
                    fill="none"
                    stroke="rgba(255,255,255,.27)"
                    strokeWidth="1.4"
                    strokeDasharray="5 6"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: .75 }}
                  />
                  {[ [65,68], [395,135], [72,242] ].map(([cx, cy], index) => (
                    <motion.circle
                      key={`${cx}-${cy}`}
                      cx={cx}
                      cy={cy}
                      r="3.5"
                      fill={study.accent}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: .3, delay: .85 + index * .15 }}
                    />
                  ))}
                </svg>

                <motion.div
                  className="dcs-blueprint-icon-shell"
                  initial={{ opacity: 0, scale: .86 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: .7, delay: .3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    className="dcs-lottie"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Lottie animationData={study.icon} loop />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="dcs-blueprint-node input"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: .45, delay: .55 }}
                >
                  <b>Input</b>
                  <span>Shop-floor data</span>
                </motion.div>

                <motion.div
                  className="dcs-blueprint-node core"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: .45, delay: .7 }}
                >
                  <b>Core</b>
                  <span>OperateX intelligence</span>
                </motion.div>

                <motion.div
                  className="dcs-blueprint-node output"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: .45, delay: .85 }}
                >
                  <b>Output</b>
                  <span>Actionable outcome</span>
                </motion.div>

                <div className="dcs-blueprint-number">{study.number}</div>
              </div>

              <div className="dcs-blueprint-footer">
                <div className="dcs-blueprint-metric">
                  <b>Connected</b>
                  <span>Data Layer</span>
                </div>
                <div className="dcs-blueprint-metric">
                  <b>Controlled</b>
                  <span>Process Layer</span>
                </div>
                <div className="dcs-blueprint-metric">
                  <b>Traceable</b>
                  <span>Outcome Layer</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= DETAILS ================= */}
      <main className="dcs-body">
        <div className="container">
          <div className="row g-4 dcs-problem-solution">
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: -65 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.68 }}
            >
              <div className="dcs-ps-card problem" data-number="01">
                <div className="dcs-ps-title">
                  <FaExclamationTriangle /> Challenge
                </div>
                {study.challenge.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: 65 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.68 }}
            >
              <div className="dcs-ps-card solution" data-number="02">
                <div className="dcs-ps-title">
                  <FaCheckCircle /> The OperateX Solution
                </div>
                {study.solutionIntro.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>

          {study.primaryFlow && (
            <FlowDiagram
              title={study.primaryFlow.title}
              steps={study.primaryFlow.steps}
              accent={study.accent}
            />
          )}

          {study.detailSections.map((section, index) => (
            <DetailSection
              key={`${study.slug}-${section.title}`}
              section={section}
              accent={study.accent}
              sectionIndex={index}
            />
          ))}

          {study.impact?.length > 0 && (
            <motion.section
              className="dcs-impact"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.72 }}
            >
              <div className="dcs-impact-label">Business Impact</div>
              <h2>What the Solution Delivers</h2>

              <div className="dcs-impact-grid">
                {study.impact.map((item, index) => (
                  <motion.div
                    className="dcs-impact-item"
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.3) }}
                    whileHover={{ y: -3 }}
                  >
                    <FaCheckCircle />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          <div className="dcs-nav">
            {previousStudy ? (
              <div
                className="dcs-nav-card"
                onClick={() => navigate(`/case-studies/${previousStudy.slug}`)}
              >
                <div className="dcs-nav-label">
                  <FaArrowLeft /> Previous Case Study
                </div>
                <strong>{previousStudy.cardTitle}</strong>
              </div>
            ) : (
              <div />
            )}

            {nextStudy && (
              <div
                className="dcs-nav-card next"
                onClick={() => navigate(`/case-studies/${nextStudy.slug}`)}
              >
                <div className="dcs-nav-label">
                  Next Case Study <FaArrowRight />
                </div>
                <strong>{nextStudy.cardTitle}</strong>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* ================= CTA ================= */}
      <motion.section
        className="dcs-cta"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.28 }}
        transition={{ duration: 0.72 }}
      >
        <h2>Let’s Engineer Your Next Transformation</h2>
        <p>
          Build or upgrade your manufacturing process with scalable automation,
          traceability and OperateX digital systems.
        </p>
        <button onClick={() => navigate("/contact")}>
          Talk to Our Engineers <FaArrowRight style={{ marginLeft: "8px" }} />
        </button>
      </motion.section>
    </div>
  );
};

export default DetailCaseStudies;
