import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

import logo from "../assets/images/logo.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  /* =========================================================
     NAVIGATION DATA
  ========================================================= */

  const operateX = [
   
    {
      label: "OperateX Modules",
      path: "/product#operatex-modules",
    },
    {
      label: "OperateX MES ",
      path: "/product#mes",
    },
    {
      label: "OperateX Traceability",
      path: "/product#traceability",
    },
     {
      label: "OperateX Utility",
      path: "/product#utility-management",
    },
    {
      label: "Vision Systems / AI Modules ",
      path: "/product#ai-analytics",
    },
    {
      label: "Proprietary Hardware / Edge Systems",
      path: "/product#ot-connectivity",
    },
   
    
  ];

  const solutions = [
    {
      label: "Factory Automation & Control Systems",
      path: "/solutions#factory-automation",
    },
    
    {
      label: "Machine Building & SPM",
      path: "/solutions#machine-building",
    },
    {
      label: "Panel Building & Electrical Systems",
      path: "/solutions#panel-control",
    },
    {
      label: "MES & Digital Manufacturing ",
      path: "/solutions#mes",
    },
    {
      label: "Traceability & Quality Systems",
      path: "/solutions#traceability",
    },
    {
      label: "Vision Inspection",
      path: "/solutions#vision-inspection",
    },
     {
      label: "IIoT & Data Integration",
      path: "/solutions#iot",
    },
   
   
  
     {
      label: "Utility & Smart Infrastructure",
      path: "/solutions#smart-infrastructure",
    },
  ];

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
      label: "Pharma & Life Sciences",
      path: "/industries#pharma-life-sciences",
    },
    {
      label: "Metals & Mining",
      path: "/industries#metals-mining",
    },
    {
      label: "Process Industries",
      path: "/industries#process-industries",
    },
    {
      label: "Infrastructure & Utilities",
      path: "/industries#infrastructure-utilities",
    },
  ];

  const navItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Solutions",
      path: "/solutions",
      dropdown: solutions,
    },
    {
      label: "OperateX",
      path: "/product",
      dropdown: operateX,
    },
    {
      label: "Industries",
      path: "/industries",
      dropdown: industries,
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];

  /* =========================================================
     CLOSE MOBILE MENU WHEN PAGE CHANGES
  ========================================================= */

  useEffect(() => {
    setMenuOpen(false);
    setMobileDropdown(null);
  }, [location.pathname, location.hash]);

  /* =========================================================
     HASH SCROLL
     Handles /page#section correctly in React Router
  ========================================================= */

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");

    const scrollToSection = () => {
      const element = document.getElementById(id);

      if (element) {
        const navbarHeight = 75;

        const elementPosition =
          element.getBoundingClientRect().top +
          window.pageYOffset;

        const offsetPosition =
          elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    const timer = setTimeout(scrollToSection, 120);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  /* =========================================================
     CLOSE MENU WHEN SCREEN CHANGES TO DESKTOP
  ========================================================= */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setMenuOpen(false);
        setMobileDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* =========================================================
     NAV CLICK
  ========================================================= */

  const handleNavClick = () => {
    setMenuOpen(false);
    setMobileDropdown(null);
  };

  /* =========================================================
     HASH LINK CLICK
     Also works when user clicks another section
     on the SAME page
  ========================================================= */

  const handleHashNavigation = (event, path) => {
    event.preventDefault();

    const [pathname, hash] = path.split("#");

    /* Different page */

    if (location.pathname !== pathname) {
      navigate(`${pathname}${hash ? `#${hash}` : ""}`);
      setMenuOpen(false);
      setMobileDropdown(null);
      return;
    }

    /* Same page */

    if (hash) {
      const element = document.getElementById(hash);

      if (element) {
        const navbarHeight = 75;

        const elementPosition =
          element.getBoundingClientRect().top +
          window.pageYOffset;

        window.scrollTo({
          top: elementPosition - navbarHeight,
          behavior: "smooth",
        });

        navigate(`${pathname}#${hash}`, {
          replace: false,
        });
      }
    }

    setMenuOpen(false);
    setMobileDropdown(null);
  };

  /* =========================================================
     MOBILE SUBMENU
  ========================================================= */

  const toggleMobileDropdown = (label) => {
    setMobileDropdown((previous) =>
      previous === label ? null : label
    );
  };

  /* =========================================================
     ACTIVE PAGE
  ========================================================= */

  const isPageActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname === path;
  };

  return (
    <>
      <nav className="tv-navbar">
        <div className="tv-navbar-container">

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            to="/"
            className="tv-navbar-brand"
            onClick={handleNavClick}
          >
            <img
              src={logo}
              alt="ThetaVega Logo"
              className="tv-navbar-logo"
            />

            <div className="tv-navbar-name">
              THETA
              <span>VEGA</span>
            </div>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <div className="tv-desktop-navigation">
            {navItems.map((item) => {

              /* ---------------------------------------------
                 NORMAL MENU ITEM
              --------------------------------------------- */

              if (!item.dropdown) {
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      `tv-desktop-link ${
                        isActive ? "active" : ""
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                );
              }

              /* ---------------------------------------------
                 DROPDOWN MENU ITEM
              --------------------------------------------- */

              return (
                <div
                  key={item.label}
                  className="tv-desktop-dropdown-wrapper"
                >
                  <Link
                    to={item.path}
                    className={`tv-desktop-link tv-dropdown-parent ${
                      isPageActive(item.path)
                        ? "active"
                        : ""
                    }`}
                  >
                    <span>{item.label}</span>

                    <span className="tv-dropdown-chevron">
                      ▾
                    </span>
                  </Link>

                  {/* DROPDOWN */}

                  <div className="tv-desktop-dropdown">
                    <div className="tv-dropdown-content">

                      {item.dropdown.map(
                        (subItem) => (
                          <a
                            key={`${subItem.label}-${subItem.path}`}
                            href={subItem.path}
                            className={`tv-dropdown-item ${
                              location.pathname +
                                location.hash ===
                              subItem.path
                                ? "active"
                                : ""
                            }`}
                            onClick={(event) =>
                              handleHashNavigation(
                                event,
                                subItem.path
                              )
                            }
                          >
                            <span className="tv-dropdown-item-dot" />

                            <span className="tv-dropdown-item-label">
                              {subItem.label}
                            </span>

                            <span className="tv-dropdown-item-arrow">
                              →
                            </span>
                          </a>
                        )
                      )}

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            className={`tv-menu-button ${
              menuOpen ? "open" : ""
            }`}
            onClick={() =>
              setMenuOpen(
                (previous) => !previous
              )
            }
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

        </div>

        {/* ===================================================
            MOBILE DROPDOWN
        =================================================== */}

        <div
          className={`tv-mobile-menu ${
            menuOpen ? "open" : ""
          }`}
        >
          <div className="tv-mobile-menu-inner">

            {navItems.map((item) => {

              /* ---------------------------------------------
                 NORMAL MOBILE ITEM
              --------------------------------------------- */

              if (!item.dropdown) {
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/"}
                    onClick={handleNavClick}
                    className={({ isActive }) =>
                      `tv-mobile-link ${
                        isActive
                          ? "active"
                          : ""
                      }`
                    }
                  >
                    <span className="tv-mobile-page-name">
                      {item.label}
                    </span>

                    <span className="tv-mobile-arrow">
                      →
                    </span>
                  </NavLink>
                );
              }

              /* ---------------------------------------------
                 MOBILE ITEM WITH SUBMENU
              --------------------------------------------- */

              const dropdownOpen =
                mobileDropdown === item.label;

              return (
                <div
                  className="tv-mobile-dropdown-wrapper"
                  key={item.label}
                >
                  <div
                    className={`tv-mobile-link tv-mobile-dropdown-parent ${
                      isPageActive(item.path)
                        ? "active"
                        : ""
                    }`}
                  >
                    <Link
                      to={item.path}
                      onClick={handleNavClick}
                      className="tv-mobile-parent-link"
                    >
                      {item.label}
                    </Link>

                    <button
                      type="button"
                      className={`tv-mobile-dropdown-button ${
                        dropdownOpen
                          ? "open"
                          : ""
                      }`}
                      onClick={() =>
                        toggleMobileDropdown(
                          item.label
                        )
                      }
                      aria-label={`Open ${item.label} menu`}
                    >
                      <span>
                        ▾
                      </span>
                    </button>
                  </div>

                  {/* MOBILE SUBMENU */}

                  <div
                    className={`tv-mobile-submenu ${
                      dropdownOpen
                        ? "open"
                        : ""
                    }`}
                  >
                    {item.dropdown.map(
                      (subItem) => (
                        <a
                          key={`${subItem.label}-${subItem.path}`}
                          href={subItem.path}
                          onClick={(event) =>
                            handleHashNavigation(
                              event,
                              subItem.path
                            )
                          }
                          className={`tv-mobile-submenu-link ${
                            location.pathname +
                              location.hash ===
                            subItem.path
                              ? "active"
                              : ""
                          }`}
                        >
                          <span className="tv-mobile-submenu-dot" />

                          <span>
                            {subItem.label}
                          </span>

                          <span className="tv-mobile-submenu-arrow">
                            →
                          </span>
                        </a>
                      )
                    )}
                  </div>
                </div>
              );
            })}

          </div>
        </div>

      </nav>

      {/* =====================================================
          CSS
      ===================================================== */}

      <style>
        {`

/* =========================================================
   NAVBAR
========================================================= */

.tv-navbar {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;

  background: rgba(255, 255, 255, 0.98);

  border-bottom:
    1px solid rgba(7, 17, 29, 0.07);

  box-shadow:
    0 2px 12px rgba(0, 0, 0, 0.07);
}


/* =========================================================
   NAVBAR CONTAINER
========================================================= */

.tv-navbar-container {
  width: 100%;
  max-width: 1320px;
  min-height: 68px;

  margin: 0 auto;

  padding: 0 22px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 30px;
}


/* =========================================================
   BRAND
========================================================= */

.tv-navbar-brand {
  display: inline-flex;

  align-items: center;

  gap: 10px;

  text-decoration: none;

  flex-shrink: 0;
}


.tv-navbar-logo {
  width: 40px;
  height: 40px;

  object-fit: contain;

  display: block;
}


.tv-navbar-name {
  display: flex;

  align-items: center;

  color: #07111D;

  font-size: 1.25rem;

  font-weight: 800;

  line-height: 1;

  letter-spacing: 0.5px;
}


.tv-navbar-name span {
  color: #f27c2d;

  margin-left: 4px;
}


/* =========================================================
   DESKTOP NAVIGATION
========================================================= */

.tv-desktop-navigation {
  display: flex;

  align-items: center;

  justify-content: flex-end;

  gap: 2px;
}


.tv-desktop-link {
  position: relative;

  display: inline-flex;

  align-items: center;

  justify-content: center;

  min-height: 68px;

  padding: 0 18px;

  color: #07111D;

  text-decoration: none;

  font-size: 14px;

  font-weight: 600;

  transition:
    color 0.25s ease;
}


.tv-desktop-link:hover {
  color: #f27c2d;
}


.tv-desktop-link.active {
  color: #f27c2d;
}


/* ACTIVE UNDERLINE */

.tv-desktop-link::after {
  content: "";

  position: absolute;

  left: 18px;

  right: 18px;

  bottom: 0;

  height: 2px;

  background: #f27c2d;

  transform: scaleX(0);

  transform-origin: center;

  transition:
    transform 0.25s ease;
}


.tv-desktop-link.active::after {
  transform: scaleX(1);
}


/* =========================================================
   DESKTOP DROPDOWN WRAPPER
========================================================= */

.tv-desktop-dropdown-wrapper {
  position: relative;
}


/* =========================================================
   DROPDOWN PARENT
========================================================= */

.tv-dropdown-parent {
  gap: 7px;
}


.tv-dropdown-chevron {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  font-size: 11px;

  margin-top: 1px;

  transition:
    transform 0.25s ease;
}


.tv-desktop-dropdown-wrapper:hover
.tv-dropdown-chevron {
  transform: rotate(180deg);
}


/* =========================================================
   DESKTOP DROPDOWN
========================================================= */

.tv-desktop-dropdown {
  position: absolute;

  top: calc(100% - 1px);

  left: 50%;

  transform:
    translateX(-50%)
    translateY(10px);

  min-width: 285px;

  padding-top: 10px;

  opacity: 0;

  visibility: hidden;

  pointer-events: none;

  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    visibility 0.2s ease;
}


.tv-desktop-dropdown-wrapper:hover
.tv-desktop-dropdown {
  opacity: 1;

  visibility: visible;

  pointer-events: auto;

  transform:
    translateX(-50%)
    translateY(0);
}


/* =========================================================
   DROPDOWN BOX
========================================================= */

.tv-dropdown-content {
  position: relative;

  background: #ffffff;

  border:
    1px solid rgba(7, 17, 29, 0.08);

  border-radius: 14px;

  padding: 8px;

  box-shadow:
    0 18px 45px
    rgba(7, 17, 29, 0.14);
}


/* SMALL TOP ARROW */

.tv-dropdown-content::before {
  content: "";

  position: absolute;

  top: -6px;

  left: 50%;

  width: 12px;

  height: 12px;

  background: #ffffff;

  border-left:
    1px solid rgba(7, 17, 29, 0.08);

  border-top:
    1px solid rgba(7, 17, 29, 0.08);

  transform:
    translateX(-50%)
    rotate(45deg);
}


/* =========================================================
   DROPDOWN ITEM
========================================================= */

.tv-dropdown-item {
  position: relative;

  min-height: 44px;

  padding:
    0 12px;

  display: grid;

  grid-template-columns:
    10px 1fr 20px;

  align-items: center;

  gap: 9px;

  color: #07111D;

  text-decoration: none;

  border-radius: 9px;

  font-size: 13.5px;

  font-weight: 550;

  transition:
    color 0.2s ease,
    background 0.2s ease,
    padding-left 0.2s ease;
}


.tv-dropdown-item:hover {
  color: #f27c2d;

  background:
    rgba(242, 124, 45, 0.07);

  padding-left: 16px;
}


.tv-dropdown-item.active {
  color: #f27c2d;

  background:
    rgba(242, 124, 45, 0.08);
}


/* DOT */

.tv-dropdown-item-dot {
  width: 5px;

  height: 5px;

  border-radius: 50%;

  background:
    rgba(7, 17, 29, 0.25);

  transition:
    background 0.2s ease,
    transform 0.2s ease;
}


.tv-dropdown-item:hover
.tv-dropdown-item-dot,
.tv-dropdown-item.active
.tv-dropdown-item-dot {
  background: #f27c2d;

  transform: scale(1.3);
}


/* ARROW */

.tv-dropdown-item-arrow {
  color:
    rgba(7, 17, 29, 0.3);

  font-size: 14px;

  transition:
    color 0.2s ease,
    transform 0.2s ease;
}


.tv-dropdown-item:hover
.tv-dropdown-item-arrow {
  color: #f27c2d;

  transform:
    translateX(3px);
}


/* =========================================================
   MOBILE MENU BUTTON
========================================================= */

.tv-menu-button {
  width: 40px;

  height: 40px;

  border:
    1px solid
    rgba(7, 17, 29, 0.13);

  border-radius: 10px;

  background: #ffffff;

  display: none;

  align-items: center;

  justify-content: center;

  flex-direction: column;

  gap: 4px;

  padding: 0;

  cursor: pointer;

  box-shadow:
    0 4px 14px
    rgba(7, 17, 29, 0.06);

  transition:
    all 0.25s ease;
}


.tv-menu-button span {
  display: block;

  width: 18px;

  height: 2px;

  border-radius: 5px;

  background: #07111D;

  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}


/* HAMBURGER TO X */

.tv-menu-button.open span:nth-child(1) {
  transform:
    translateY(6px)
    rotate(45deg);
}


.tv-menu-button.open span:nth-child(2) {
  opacity: 0;
}


.tv-menu-button.open span:nth-child(3) {
  transform:
    translateY(-6px)
    rotate(-45deg);
}


/* =========================================================
   MOBILE MENU
========================================================= */

.tv-mobile-menu {
  display: none;
}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 1100px) {

  .tv-navbar-container {
    padding-left: 24px;
    padding-right: 24px;
  }


  .tv-desktop-link {
    padding-left: 13px;
    padding-right: 13px;
    font-size: 13.5px;
  }


  .tv-desktop-link::after {
    left: 13px;
    right: 13px;
  }


  .tv-desktop-dropdown {
    min-width: 260px;
  }

}


/* =========================================================
   MOBILE / TABLET NAVIGATION
========================================================= */

@media (max-width: 991px) {

  .tv-navbar-container {
    min-height: 60px;

    padding: 0 18px;
  }


  /* HIDE DESKTOP */

  .tv-desktop-navigation {
    display: none;
  }


  /* SHOW HAMBURGER */

  .tv-menu-button {
    display: flex;
  }


  /* BRAND */

  .tv-navbar-logo {
    width: 34px;
    height: 34px;
  }


  .tv-navbar-name {
    font-size: 1.08rem;
  }


  /* =======================================================
     MOBILE DROPDOWN
  ======================================================= */

  .tv-mobile-menu {
    display: block;

    width: 100%;

    max-height: 0;

    overflow-x: hidden;
    overflow-y: auto;

    opacity: 0;

    visibility: hidden;

    background: #ffffff;

    border-top:
      1px solid
      rgba(7, 17, 29, 0.06);

    box-shadow:
      0 12px 25px
      rgba(7, 17, 29, 0.09);

    transition:
      max-height 0.4s ease,
      opacity 0.25s ease,
      visibility 0.25s ease;
  }


  .tv-mobile-menu.open {
    max-height:
      calc(100vh - 60px);

    opacity: 1;

    visibility: visible;
  }


  .tv-mobile-menu-inner {
    padding:
      8px 18px 14px;
  }


  /* =======================================================
     MOBILE MAIN LINK
  ======================================================= */

  .tv-mobile-link {
    width: 100%;

    min-height: 48px;

    display: grid;

    grid-template-columns:
      1fr 30px;

    align-items: center;

    gap: 7px;

    color: #07111D;

    text-decoration: none;

    border-bottom:
      1px solid
      rgba(7, 17, 29, 0.07);

    transition:
      color 0.2s ease,
      padding-left 0.2s ease,
      background 0.2s ease;
  }


  .tv-mobile-link:last-child {
    border-bottom: none;
  }


  .tv-mobile-page-name {
    font-size: 18px;

    font-weight: 550;

    letter-spacing: 0.2px;
  }


  .tv-mobile-arrow {
    display: flex;

    align-items: center;

    justify-content: flex-end;

    color:
      rgba(7, 17, 29, 0.35);

    font-size: 16px;

    transition:
      transform 0.2s ease,
      color 0.2s ease;
  }


  .tv-mobile-link:hover {
    color: #f27c2d;

    padding-left: 4px;
  }


  .tv-mobile-link:hover
  .tv-mobile-arrow {
    color: #f27c2d;

    transform:
      translateX(3px);
  }


  .tv-mobile-link.active {
    color: #f27c2d;

    font-weight: 700;
  }


  .tv-mobile-link.active
  .tv-mobile-arrow {
    color: #f27c2d;
  }


  /* =======================================================
     MOBILE DROPDOWN PARENT
  ======================================================= */

  .tv-mobile-dropdown-wrapper {
    width: 100%;
  }


  .tv-mobile-dropdown-parent {
    padding: 0;

    grid-template-columns:
      1fr 42px;
  }


  .tv-mobile-dropdown-parent:hover {
    padding-left: 0;
  }


  .tv-mobile-parent-link {
    min-height: 48px;

    display: flex;

    align-items: center;

    color: inherit;

    text-decoration: none;

    font-size: 18px;

    font-weight: inherit;
  }


  .tv-mobile-dropdown-button {
    width: 36px;

    height: 36px;

    border: none;

    border-radius: 8px;

    background:
      rgba(7, 17, 29, 0.045);

    color: #07111D;

    cursor: pointer;

    display: flex;

    align-items: center;

    justify-content: center;

    transition:
      background 0.2s ease,
      color 0.2s ease;
  }


  .tv-mobile-dropdown-button span {
    display: block;

    font-size: 14px;

    transition:
      transform 0.3s ease;
  }


  .tv-mobile-dropdown-button.open {
    background:
      rgba(242, 124, 45, 0.1);

    color: #f27c2d;
  }


  .tv-mobile-dropdown-button.open span {
    transform:
      rotate(180deg);
  }


  /* =======================================================
     MOBILE SUBMENU
  ======================================================= */

  .tv-mobile-submenu {
    max-height: 0;

    overflow: hidden;

    opacity: 0;

    background:
      rgba(7, 17, 29, 0.018);

    transition:
      max-height 0.35s ease,
      opacity 0.25s ease;
  }


  .tv-mobile-submenu.open {
    max-height: 500px;

    opacity: 1;
  }


  .tv-mobile-submenu-link {
    min-height: 41px;

    padding:
      0 8px
      0 18px;

    display: grid;

    grid-template-columns:
      10px 1fr 25px;

    align-items: center;

    gap: 7px;

    color:
      rgba(7, 17, 29, 0.76);

    text-decoration: none;

    font-size: 13px;

    font-weight: 500;

    border-bottom:
      1px solid
      rgba(7, 17, 29, 0.055);

    transition:
      color 0.2s ease,
      background 0.2s ease,
      padding-left 0.2s ease;
  }


  .tv-mobile-submenu-link:last-child {
    border-bottom: none;
  }


  .tv-mobile-submenu-link:hover {
    color: #f27c2d;

    background:
      rgba(242, 124, 45, 0.05);

    padding-left: 22px;
  }


  .tv-mobile-submenu-link.active {
    color: #f27c2d;

    font-weight: 650;

    background:
      rgba(242, 124, 45, 0.065);
  }


  .tv-mobile-submenu-dot {
    width: 4px;

    height: 4px;

    border-radius: 50%;

    background:
      rgba(7, 17, 29, 0.25);
  }


  .tv-mobile-submenu-link:hover
  .tv-mobile-submenu-dot,
  .tv-mobile-submenu-link.active
  .tv-mobile-submenu-dot {
    background: #f27c2d;
  }


  .tv-mobile-submenu-arrow {
    display: flex;

    justify-content: flex-end;

    color:
      rgba(7, 17, 29, 0.28);

    transition:
      color 0.2s ease,
      transform 0.2s ease;
  }


  .tv-mobile-submenu-link:hover
  .tv-mobile-submenu-arrow {
    color: #f27c2d;

    transform:
      translateX(2px);
  }

}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 576px) {

  .tv-navbar-container {
    min-height: 56px;

    padding-left: 14px;
    padding-right: 14px;
  }


  .tv-navbar-logo {
    width: 31px;
    height: 31px;
  }


  .tv-navbar-name {
    font-size: 0.96rem;

    letter-spacing: 0.3px;
  }


  .tv-navbar-name span {
    margin-left: 3px;
  }


  .tv-menu-button {
    width: 37px;
    height: 37px;

    border-radius: 9px;
  }


  .tv-menu-button span {
    width: 17px;
  }


  .tv-mobile-menu.open {
    max-height:
      calc(100vh - 56px);
  }


  .tv-mobile-menu-inner {
    padding:
      6px 15px 12px;
  }


  .tv-mobile-link {
    min-height: 44px;

    grid-template-columns:
      1fr 28px;
  }


  .tv-mobile-page-name {
    font-size: 12px;
  }


  .tv-mobile-arrow {
    font-size: 14px;
  }


  .tv-mobile-parent-link {
    min-height: 44px;

    font-size: 12px;
  }


  .tv-mobile-dropdown-parent {
    grid-template-columns:
      1fr 38px;
  }


  .tv-mobile-dropdown-button {
    width: 32px;
    height: 32px;

    border-radius: 7px;
  }


  .tv-mobile-submenu-link {
    min-height: 38px;

    font-size: 11.5px;

    padding-left: 14px;
  }

}


/* =========================================================
   VERY SMALL MOBILE
========================================================= */

@media (max-width: 360px) {

  .tv-navbar-name {
    font-size: 0.88rem;
  }


  .tv-navbar-logo {
    width: 29px;
    height: 29px;
  }


  .tv-mobile-page-name {
    font-size: 11.5px;
  }


  .tv-mobile-parent-link {
    font-size: 11.5px;
  }


  .tv-mobile-submenu-link {
    font-size: 11px;
  }

}

        `}
      </style>
    </>
  );
};

export default Navbar;