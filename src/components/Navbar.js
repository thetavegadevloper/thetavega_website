import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const navItems = [
    ["Home", "/"],
    ["About", "/about"],
    ["Solutions", "/solutions"],
    ["OperateX", "/product"],
    ["Industries", "/industries"],
    ["Contact", "/contact"],
  ];

  return (
    <>
      <nav
        className="navbar navbar-expand-lg tv-navbar"
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 9999,

          // Always same white navbar
          backgroundColor: "#ffffff",

          paddingTop: "14px",
          paddingBottom: "14px",

          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <div className="container">
          {/* LOGO */}
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
            }}
          >
            <img
              src={logo}
              alt="ThetaVega Logo"
              style={{
                height: "40px",
                width: "40px",
                objectFit: "contain",
              }}
            />

            <div
              style={{
                fontWeight: 800,
                color: "#07111D",
                fontSize: "1.3rem",
                letterSpacing: "0.5px",
              }}
            >
              THETA
              <span style={{ color: "#f27c2d" }}>
                VEGA
              </span>
            </div>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{
              border: "1px solid rgba(7,17,29,0.25)",
              boxShadow: "none",
            }}
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* NAVIGATION LINKS */}
          <div
            className="collapse navbar-collapse"
            id="mainNavbar"
          >
            <ul className="navbar-nav ms-auto align-items-lg-center">
              {navItems.map(([label, path]) => (
                <li
                  className="nav-item"
                  key={path}
                >
                  <NavLink
                    to={path}
                    end={path === "/"}
                    className="nav-link tv-nav-link"
                    style={({ isActive }) => ({
                      color: isActive
                        ? "#f27c2d"
                        : "#07111D",
                      fontWeight: 600,
                    })}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <style>{`
        .tv-navbar {
          transition: none;
        }

        .tv-navbar .tv-nav-link {
          position: relative;
          padding-left: 20px !important;
          padding-right: 20px !important;
          transition: color 0.25s ease;
        }

        .tv-navbar .tv-nav-link:hover {
          color: #f27c2d !important;
        }

        /* Active link underline */
        .tv-navbar .tv-nav-link.active {
          color: #f27c2d !important;
        }

        .tv-navbar .tv-nav-link.active::after {
          content: "";
          position: absolute;
          left: 20px;
          right: 20px;
          bottom: -14px;
          height: 2px;
          background: #f27c2d;
        }

        @media (max-width: 991px) {
          .tv-navbar .navbar-collapse {
            margin-top: 15px;
            padding: 15px 20px;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.12);
          }

          .tv-navbar .tv-nav-link {
            color: #07111D !important;
            padding: 12px 0 !important;
          }

          .tv-navbar .tv-nav-link.active {
            color: #f27c2d !important;
          }

          .tv-navbar .tv-nav-link.active::after {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;