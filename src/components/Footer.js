import React from "react";

const Footer = () => {
  const products = [
    "OperateX MES",
    "OperateX Traceability",
    "OperateX Production Monitoring",
    "OperateX OEE & Analytics",
    "OperateX Quality Management",
    "OperateX Andon",
    "OperateX Maintenance Management",
    "OperateX Energy Management",
    "OperateX Building Management System",
    "OperateX Warehouse Management",
    "OperateX Yard Management",
    "OperateX AI & Industrial Analytics",
    "Industrial Automation",
    "Machine Building & SPM",
    "Vision & Inspection Systems",
    "Testing & Measurement Systems",
    "OT Connectivity & IIoT",
  ];

  const industries = [
    "Automotive OEM",
    "Automotive Tier 1 & Tier 2",
    "Electric Vehicles",
    "Heavy Engineering",
    "Steel & Metals",
    "Manufacturing",
    "Process Industries",
    "Warehousing & Logistics",
    "Infrastructure & Utilities",
    "MSME Manufacturing",
  ];

  const operateX = [
    "Why OperateX",
    "Platform Overview",
    "MES Platform",
    "Modules",
    "OT Connectivity",
    "IT / ERP Integration",
    "AI Layer",
    "Architecture",
    "Cybersecurity",
    "Deployment Options",
    "OperateX Lite for MSMEs",
    "Request a Demo",
  ];

  const resources = [
    "Case Studies",
    "Success Stories",
    "Brochures",
    "Downloads",
    "Knowledge Centre",
    "Industry 4.0 Insights",
    "Blogs",
    "FAQs",
  ];

  const company = [
    "About Thetavega",
    "Our Story",
    "Leadership",
    "Technology & Innovation",
    "Partners",
    "Customers",
    "Careers",
    "News & Events",
    "Contact Us",
  ];

  const support = [
    "Customer Support",
    "Technical Support",
    "Service Request",
    "Remote Support",
    "Training",
    "Documentation",
  ];

  const connect = [
    "Contact Sales",
    "Request a Demo",
    "Become a Partner",
    "Partner With Thetavega",
    "Careers",
    "LinkedIn",
    "YouTube",
  ];

  const legal = [
    "Privacy Policy",
    "Terms of Use",
    "Cookie Policy",
    "Information Security",
    "Responsible Disclosure",
    "Intellectual Property Notice",
    "Disclaimer",
    "Sitemap",
  ];

  const FooterLinks = ({ items }) => (
    <ul className="tv-footer-links">
      {items.map((item) => (
        <li key={item}>
          <a href="/">{item}</a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <footer className="tv-footer">
        <div className="container-fluid tv-footer-container">

          {/* MAIN FOOTER CONTENT */}
          <div className="tv-footer-grid">

            {/* PRODUCTS */}
            <div className="tv-footer-section tv-products-section">
              <h5 className="tv-footer-title">
                Products &amp; Solutions
              </h5>

              <div className="tv-product-columns">
                <FooterLinks items={products} />
              </div>
            </div>

            {/* INDUSTRIES */}
            <div className="tv-footer-section">
              <h5 className="tv-footer-title">Industries</h5>
              <FooterLinks items={industries} />
            </div>

            {/* OPERATEX */}
            <div className="tv-footer-section">
              <h5 className="tv-footer-title">OperateX</h5>
              <FooterLinks items={operateX} />
            </div>

            {/* RESOURCES */}
            <div className="tv-footer-section">
              <h5 className="tv-footer-title">Resources</h5>
              <FooterLinks items={resources} />
            </div>

            {/* COMPANY */}
            <div className="tv-footer-section">
              <h5 className="tv-footer-title">Company</h5>
              <FooterLinks items={company} />
            </div>

            {/* SUPPORT */}
            <div className="tv-footer-section">
              <h5 className="tv-footer-title">Support</h5>
              <FooterLinks items={support} />

              <h5 className="tv-footer-title tv-second-title">
                Connect
              </h5>

              <FooterLinks items={connect} />
            </div>

            {/* LEGAL */}
            <div className="tv-footer-section">
              <h5 className="tv-footer-title">Legal</h5>
              <FooterLinks items={legal} />
            </div>

          </div>

          {/* BOTTOM FOOTER */}
          <div className="tv-footer-bottom">
            <div className="tv-footer-bottom-left">
              <p>
                © 2026 Thetavega Tech Private Limited. All Rights Reserved.
              </p>

              <p className="tv-operatex-line">
                OperateX® | Industrial Intelligence. Connected Manufacturing.
              </p>
            </div>

            <div className="tv-footer-bottom-center">
              <a href="/">Privacy Policy</a>
              <span>·</span>
              <a href="/">Terms of Use</a>
              <span>·</span>
              <a href="/">Cookie Policy</a>
              <span>·</span>
              <a href="/">Sitemap</a>
            </div>

            <div className="tv-footer-bottom-right">
              <p>Thetavega Tech Private Limited</p>
              <p>Chhatrapati Sambhajinagar, Maharashtra, India</p>
            </div>
          </div>

        </div>
      </footer>

      <style>{`

        /* =====================================================
           FOOTER
        ===================================================== */

        .tv-footer {
          background: #07111d;
          color: #ffffff;
          padding: 35px 0 0;
          width: 100%;
        }

        .tv-footer-container {
          padding-left: 5%;
          padding-right: 5%;
        }


        /* =====================================================
           MAIN GRID
        ===================================================== */

        .tv-footer-grid {
          display: grid;

          grid-template-columns:
            minmax(270px, 1.8fr)
            repeat(6, minmax(135px, 1fr));

          gap: 28px;

          align-items: start;
        }


        /* =====================================================
           SECTION
        ===================================================== */

        .tv-footer-section {
          min-width: 0;
        }


        /* =====================================================
           TITLES
        ===================================================== */

        .tv-footer-title {
          color: #f27c2d;
          font-size: 14px;
          font-weight: 700;

          margin: 0 0 11px;

          letter-spacing: 0.5px;
          line-height: 1.3;
        }

        .tv-second-title {
          margin-top: 20px;
        }


        /* =====================================================
           LINKS
        ===================================================== */

        .tv-footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .tv-footer-links li {
          margin: 0 0 6px;
          line-height: 1.35;
        }

        .tv-footer-links a {
          color: rgba(255, 255, 255, 0.76);

          text-decoration: none;

          font-size: 12.5px;
          font-weight: 400;

          transition:
            color 0.2s ease,
            padding-left 0.2s ease;
        }

        .tv-footer-links a:hover {
          color: #f27c2d;
          padding-left: 2px;
        }


        /* =====================================================
           PRODUCTS
        ===================================================== */

        .tv-product-columns .tv-footer-links {
          columns: 2;
          column-gap: 24px;
        }

        .tv-product-columns .tv-footer-links li {
          break-inside: avoid;
          page-break-inside: avoid;
        }


        /* =====================================================
           BOTTOM BAR
        ===================================================== */

        .tv-footer-bottom {
          margin-top: 30px;

          padding: 17px 0;

          border-top: 1px solid rgba(255, 255, 255, 0.12);

          display: grid;

          grid-template-columns:
            1.25fr
            1fr
            1.05fr;

          gap: 20px;

          align-items: center;

          font-size: 11.5px;

          color: rgba(255, 255, 255, 0.65);
        }

        .tv-footer-bottom p {
          margin: 0;
          line-height: 1.6;
        }

        .tv-operatex-line {
          color: rgba(255, 255, 255, 0.82);
        }


        /* =====================================================
           BOTTOM LINKS
        ===================================================== */

        .tv-footer-bottom-center {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 7px;
        }

        .tv-footer-bottom-center a {
          color: rgba(255, 255, 255, 0.65);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .tv-footer-bottom-center a:hover {
          color: #f27c2d;
        }


        /* =====================================================
           COMPANY LOCATION
        ===================================================== */

        .tv-footer-bottom-right {
          text-align: right;
        }


        /* =====================================================
           LARGE TABLETS / SMALL LAPTOPS
        ===================================================== */

        @media (max-width: 1350px) {

          .tv-footer-grid {
            grid-template-columns:
              minmax(250px, 1.6fr)
              repeat(3, 1fr);

            gap: 28px 35px;
          }

          .tv-products-section {
            grid-row: span 2;
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 991px) {

          .tv-footer {
            padding-top: 30px;
          }

          .tv-footer-container {
            padding-left: 30px;
            padding-right: 30px;
          }

          .tv-footer-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }

          .tv-products-section {
            grid-column: span 2;
            grid-row: auto;
          }

          .tv-footer-bottom {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .tv-footer-bottom-center {
            justify-content: center;
          }

          .tv-footer-bottom-right {
            text-align: center;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 767px) {

          .tv-footer-container {
            padding-left: 22px;
            padding-right: 22px;
          }

          .tv-footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
          }

          .tv-products-section {
            grid-column: span 2;
          }

          .tv-product-columns .tv-footer-links {
            columns: 2;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {

          .tv-footer-grid {
            grid-template-columns: 1fr;
          }

          .tv-products-section {
            grid-column: auto;
          }

          .tv-product-columns .tv-footer-links {
            columns: 1;
          }

          .tv-footer-title {
            font-size: 15px;
          }

          .tv-footer-links a {
            font-size: 13px;
          }

        }

      `}</style>
    </>
  );
};

export default Footer;