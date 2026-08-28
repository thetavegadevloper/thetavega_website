import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  /* =========================================================
     OPERATEX
  ========================================================= */

  const operateX = [
    {
      label: "Platform",
      path: "/product#platform",
    },
    {
      label: "OperateX Modules",
      path: "/product#operatex-modules",
    },
    {
      label: "OperateX Traceability",
      path: "/product#traceability",
    },
    {
      label: "OperateX MES",
      path: "/product#mes",
    },
    {
      label: "OperateX Utility ",
      path: "/product#utility-management",
    },
    {
      label: "Proprietary Hardware / Edge Systems",
      path: "/product#ot-connectivity",
    },
    
    {
      label: "Vision Systems / AI Modules",
      path: "/product#ai-analytics",
    },
    {
      label: "Request a Demo",
      path: "/product#request-demo",
    },
  ];

  /* =========================================================
     SOLUTIONS
  ========================================================= */

  const solutions = [
    {
      label: "Factory Automation",
      path: "/solutions#factory-automation",
    },
    {
      label: "MES & Digital Manufacturing",
      path: "/solutions#mes",
    },
    {
      label: "Machine Building & SPM",
      path: "/solutions#machine-building",
    },
    {
      label: "Vision Inspection",
      path: "/solutions#vision-inspection",
    },
    {
      label: "Traceability & Quality Systems",
      path: "/solutions#traceability",
    },
    {
      label: "Utility & Smart Infrastructure",
      path: "/solutions#smart-infrastructure",
    },
    {
      label: "IIoT & Data Integration",
      path: "/solutions#iot",
    },
  ];

  /* =========================================================
     INDUSTRIES
  ========================================================= */

  const industries = [
    {
      label: "Automotive & EV",
      path: "/industries#automotive-ev",
    },
    {
      label: "Auto Ancillaries",
      path: "/industries#auto-ancillaries",
    },
    {
      label: "Consumer Durables",
      path: "/industries#consumer-durables",
    },
    {
      label: "Food & Beverage",
      path: "/industries#food-beverage",
    },
     {
      label: "Steel & Metals",
      path: "/industries#metals-mining",
    },
    {
      label: "Pharma & Life Sciences",
      path: "/industries#pharma-life-sciences",
    },
    {
      label: "Process Industries",
      path: "/industries#process-industries",
    },
  ];

  /* =========================================================
     COMPANY
  ========================================================= */

  const company = [
    {
      label: "About Us",
      path: "/about",
    },
    {
      label: "Careers",
      path: "/careers",
    },
    {
      label: "Insights",
      path: "/blogs#insights",
    },
    {
      label: "Blogs",
      path: "/blogs#blogs",
    },
    {
      label: "Contact/Customer Support",
      path: "/contact",
    },
  ];

  /* =========================================================
     RESOURCES
  ========================================================= */

  const resources = [
    {
      label: "Case Studies",
      path: "/case-studies",
    },
    {
      label: "Success Stories",
      path: "/case-studies",
    },
    {
      label: "Brochure",
      href: "/brochure/ThetaVega%20Profile.pdf",
      download: true,
    },
    {
      label: "Knowledge Center",
      path: "/resources",
    },
   
  ];

  /* =========================================================
     FOOTER SECTIONS
  ========================================================= */

  const sections = [
    {
      title: "OperateX",
      items: operateX,
    },
    {
      title: "Solutions",
      items: solutions,
    },
    {
      title: "Industries",
      items: industries,
    },
    {
      title: "Company",
      items: company,
    },
    {
      title: "Resources",
      items: resources,
    },
  ];

  return (
    <>
      <footer className="tv-footer">
        <div className="tv-footer-container">
          {/* =================================================
              FOOTER COLUMNS
          ================================================= */}

          <div className="tv-footer-grid">
            {sections.map((section) => (
              <div
                className="tv-footer-column"
                key={section.title}
              >
                <h4 className="tv-footer-title">
                  {section.title}
                </h4>

                <div className="tv-footer-line" />

                <ul className="tv-footer-links">
                  {section.items.map((item, index) => (
                    <li key={`${section.title}-${index}`}>
                      {item.download ? (
                        <a
                          href={item.href}
                          download="ThetaVega Profile.pdf"
                          className="tv-footer-link"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          to={item.path}
                          className="tv-footer-link"
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* =================================================
              BOTTOM
          ================================================= */}

          <div className="tv-footer-bottom">
            <div className="tv-footer-bottom-second-line">
              <span>
                © 2026 Thetavega Tech Private Limited. All rights reserved.
              </span>

              <span className="tv-footer-separator">|</span>

              <Link
                to="/privacy-policy"
                className="tv-footer-bottom-link"
              >
                Privacy Policy
              </Link>

              <span className="tv-footer-bottom-dot">·</span>

              <Link
                to="/terms"
                className="tv-footer-bottom-link"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <style>
        {`
/* =========================================================
   FOOTER
========================================================= */

.tv-footer {
  width: 100%;
  background: #07111d;
  color: #ffffff;
  padding: 54px 0 0;
  box-sizing: border-box;
}


/* =========================================================
   CONTAINER
========================================================= */

.tv-footer-container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  padding-left: 45px;
  padding-right: 45px;

  box-sizing: border-box;
}


/* =========================================================
   DESKTOP - FIVE COLUMNS
========================================================= */

.tv-footer-grid {
  display: grid;

  grid-template-columns:
    repeat(
      5,
      minmax(0, 1fr)
    );

  column-gap: 55px;

  align-items: start;
}


/* =========================================================
   COLUMN
========================================================= */

.tv-footer-column {
  min-width: 0;
}


/* =========================================================
   TITLE
========================================================= */

.tv-footer-title {
  margin: 0;

  color: #ffffff;

  font-size: 14px;

  font-weight: 700;

  line-height: 1.3;

  text-transform: none;

  letter-spacing: 0;
}


/* REMOVE GLOBAL HEADING DECORATION */

.tv-footer-title::before,
.tv-footer-title::after {
  content: none !important;
  display: none !important;
}


/* =========================================================
   ORANGE LINE
========================================================= */

.tv-footer-line {
  width: 36px;

  height: 2px;

  margin-top: 8px;

  margin-bottom: 17px;

  background: #d9953b;

  border-radius: 2px;
}


/* =========================================================
   LINKS
========================================================= */

.tv-footer-links {
  margin: 0;

  padding: 0;

  list-style: none;
}


.tv-footer-links li {
  margin: 0 0 9px;

  padding: 0;
}


.tv-footer-link {
  display: inline-block;

  color:
    rgba(
      255,
      255,
      255,
      0.72
    );

  text-decoration: none;

  font-size: 12.5px;

  font-weight: 400;

  line-height: 1.4;

  cursor: pointer;

  transition:
    color 0.2s ease,
    transform 0.2s ease;
}


.tv-footer-link:hover {
  color: #d9953b;

  transform:
    translateX(2px);
}


/* =========================================================
   BOTTOM COPYRIGHT
========================================================= */

.tv-footer-bottom {
  margin-top: 42px;

  padding:
    17px 0 18px;

  border-top:
    1px solid
    rgba(
      255,
      255,
      255,
      0.13
    );

  text-align: center;

  color:
    rgba(
      255,
      255,
      255,
      0.62
    );

  font-size: 11px;

  font-weight: 400;

  line-height: 1.6;
}


/* =========================================================
   COPYRIGHT + PRIVACY + TERMS
========================================================= */

.tv-footer-bottom-second-line {
  display: flex;

  align-items: center;

  justify-content: center;

  flex-wrap: wrap;

  gap: 7px;
}


.tv-footer-bottom-link {
  color:
    rgba(
      255,
      255,
      255,
      0.68
    );

  text-decoration: none;

  transition:
    color 0.2s ease;
}


.tv-footer-bottom-link:hover {
  color: #d9953b;
}


.tv-footer-separator {
  color:
    rgba(
      255,
      255,
      255,
      0.3
    );
}


.tv-footer-bottom-dot {
  color:
    rgba(
      255,
      255,
      255,
      0.3
    );
}


/* =========================================================
   LAPTOP
========================================================= */

@media (max-width: 1200px) {

  .tv-footer-container {
    padding-left: 28px;
    padding-right: 28px;
  }


  .tv-footer-grid {
    column-gap: 35px;
  }


  .tv-footer-title {
    font-size: 13px;
  }


  .tv-footer-link {
    font-size: 11px;
  }
}


/* =========================================================
   TABLET
   3 COLUMNS
========================================================= */

@media (max-width: 900px) {

  .tv-footer-container {
    padding-left: 24px;
    padding-right: 24px;

    overflow: visible;
  }


  .tv-footer-grid {
    width: 100%;

    min-width: 0;

    grid-template-columns:
      repeat(
        3,
        minmax(0, 1fr)
      );

    column-gap: 32px;

    row-gap: 36px;
  }


  .tv-footer-title {
    font-size: 13px;
  }


  .tv-footer-link {
    font-size: 11px;
  }
}


/* =========================================================
   MOBILE
   3 COLUMNS × 2 ROWS
========================================================= */

@media (max-width: 600px) {

  .tv-footer {
    padding-top: 32px;
  }


  .tv-footer-container {
    width: 100%;

    padding-left: 15px;
    padding-right: 15px;

    overflow-x: hidden;
  }


  /* =============================================
     THREE COLUMNS
  ============================================= */

  .tv-footer-grid {
    width: 100%;

    min-width: 0;

    display: grid;

    grid-template-columns:
      repeat(
        3,
        minmax(0, 1fr)
      );

    column-gap: 12px;

    row-gap: 30px;

    align-items: start;
  }


  .tv-footer-column {
    width: 100%;

    min-width: 0;
  }


  /* =============================================
     TITLE
  ============================================= */

  .tv-footer-title {
    margin: 0;

    font-size: 11.5px;

    line-height: 1.3;

    font-weight: 700;
  }


  /* =============================================
     ORANGE LINE
  ============================================= */

  .tv-footer-line {
    width: 27px;

    height: 2px;

    margin-top: 6px;

    margin-bottom: 12px;
  }


  /* =============================================
     LINKS
  ============================================= */

  .tv-footer-links {
    margin: 0;

    padding: 0;

    width: 100%;
  }


  .tv-footer-links li {
    margin: 0 0 7px;

    padding: 0;
  }


  .tv-footer-link {
    display: block;

    width: 100%;

    font-size: 9.5px;

    line-height: 1.45;

    white-space: normal;

    word-break: normal;

    overflow-wrap: break-word;
  }


  /* =============================================
     REMOVE HOVER MOVEMENT ON MOBILE
  ============================================= */

  .tv-footer-link:hover {
    transform: none;
  }


  /* =============================================
     BOTTOM COPYRIGHT
  ============================================= */

  .tv-footer-bottom {
    width: 100%;

    min-width: 0;

    margin-top: 30px;

    padding: 15px 0 16px;

    font-size: 9px;

    line-height: 1.6;
  }


  .tv-footer-bottom-second-line {
    width: 100%;

    display: flex;

    align-items: center;

    justify-content: center;

    flex-wrap: wrap;

    gap: 5px 7px;

    text-align: center;
  }
}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 380px) {

  .tv-footer-container {
    padding-left: 11px;
    padding-right: 11px;
  }


  .tv-footer-grid {
    column-gap: 9px;

    row-gap: 26px;
  }


  .tv-footer-title {
    font-size: 10.5px;
  }


  .tv-footer-line {
    width: 24px;

    margin-bottom: 10px;
  }


  .tv-footer-link {
    font-size: 8.8px;

    line-height: 1.4;
  }


  .tv-footer-bottom {
    font-size: 8.5px;
  }
}
        `}
      </style>
    </>
  );
};

export default Footer;