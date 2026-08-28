import axios from "axios";
import React, { useEffect, useState } from "react";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);

  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 768
  );

  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
  });

  /* =========================================================
     INITIAL LOAD
  ========================================================= */
  useEffect(() => {
    const savedConsent =
      localStorage.getItem("cookieConsent");

    if (!savedConsent) {
      setShowBanner(true);
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  /* =========================================================
     SAVE CONSENT
  ========================================================= */
  const saveConsent = async (data) => {
    try {
      let consentType = "customized";

      if (
        data.analytics === true &&
        data.marketing === true
      ) {
        consentType = "accepted";
      } else if (
        data.analytics === false &&
        data.marketing === false
      ) {
        consentType = "rejected";
      }

      /* -----------------------------------------
         SAVE IN LOCAL STORAGE
      ----------------------------------------- */
      const localConsent = {
        essential: true,
        analytics: data.analytics,
        marketing: data.marketing,
        consent_type: consentType,
        saved_at: new Date().toISOString(),
      };

      localStorage.setItem(
        "cookieConsent",
        JSON.stringify(localConsent)
      );

      /* -----------------------------------------
         SAVE IN MONGODB THROUGH BACKEND
      ----------------------------------------- */
      const response = await axios.post(
        `${API_BASE_URL}/api/cookie-consent`,
        {
          consent_type: consentType,
          analytics: data.analytics,
          marketing: data.marketing,

          /* Optional information */
          browser: getBrowser(),
          os: getOS(),
          device: isMobile ? "Mobile" : "Desktop",
        }
      );

      console.log(
        "Cookie consent saved:",
        response.data
      );

      setShowBanner(false);
      setShowCustomize(false);
    } catch (error) {
      console.error(
        "Cookie consent API error:",
        error.response?.data || error.message
      );

      /*
        IMPORTANT:
        Consent is already saved locally.

        So even if API temporarily fails,
        don't continuously show the banner.
      */
      setShowBanner(false);
      setShowCustomize(false);
    }
  };

  /* =========================================================
     ACCEPT ALL
  ========================================================= */
  const acceptAll = () => {
    saveConsent({
      essential: true,
      analytics: true,
      marketing: true,
    });
  };

  /* =========================================================
     REJECT ALL
  ========================================================= */
  const rejectAll = () => {
    saveConsent({
      essential: true,
      analytics: false,
      marketing: false,
    });
  };

  /* =========================================================
     SAVE CUSTOM
  ========================================================= */
  const saveCustom = () => {
    saveConsent({
      essential: true,
      analytics: preferences.analytics,
      marketing: preferences.marketing,
    });
  };

  /* =========================================================
     BROWSER DETECTION
  ========================================================= */
  const getBrowser = () => {
    const userAgent = navigator.userAgent;

    if (userAgent.includes("Edg")) {
      return "Edge";
    }

    if (
      userAgent.includes("Chrome") &&
      !userAgent.includes("Edg")
    ) {
      return "Chrome";
    }

    if (userAgent.includes("Firefox")) {
      return "Firefox";
    }

    if (
      userAgent.includes("Safari") &&
      !userAgent.includes("Chrome")
    ) {
      return "Safari";
    }

    return "Other";
  };

  /* =========================================================
     OS DETECTION
  ========================================================= */
  const getOS = () => {
    const userAgent = navigator.userAgent;

    if (userAgent.includes("Windows")) {
      return "Windows";
    }

    if (userAgent.includes("Android")) {
      return "Android";
    }

    if (
      userAgent.includes("iPhone") ||
      userAgent.includes("iPad")
    ) {
      return "iOS";
    }

    if (userAgent.includes("Mac")) {
      return "macOS";
    }

    if (userAgent.includes("Linux")) {
      return "Linux";
    }

    return "Other";
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div
      style={{
        ...styles.overlay,
        width: isMobile ? "94%" : "80%",
        bottom: isMobile ? "10px" : "20px",
      }}
    >
      <div
        style={{
          ...styles.banner,

          flexDirection:
            isMobile || showCustomize
              ? "column"
              : "row",

          padding: isMobile
            ? "16px"
            : "20px",
        }}
      >
        {/* ===================================================
            LEFT TEXT
        =================================================== */}
        <div
          style={{
            ...styles.leftSection,

            flexDirection: isMobile
              ? "column"
              : "row",

            textAlign: isMobile
              ? "center"
              : "left",
          }}
        >
          <div>
            <h2
              style={{
                ...styles.heading,

                fontSize: isMobile
                  ? "18px"
                  : "24px",
              }}
            >
              We value your privacy
            </h2>

            <p
              style={{
                ...styles.text,

                fontSize: isMobile
                  ? "13px"
                  : "16px",
              }}
            >
              We use cookies to enhance your
              browsing experience, serve
              personalized content, and analyze
              our traffic.
            </p>
          </div>
        </div>

        {/* ===================================================
            NORMAL BUTTONS
        =================================================== */}
        {!showCustomize ? (
          <div
            style={{
              ...styles.buttonGroup,

              width: isMobile
                ? "100%"
                : "auto",

              justifyContent: "center",
              flexWrap: isMobile
                ? "wrap"
                : "nowrap",
            }}
          >
            <button
              type="button"
              style={styles.linkBtn}
              onClick={() =>
                setShowCustomize(true)
              }
            >
              Customize
            </button>

            <button
              type="button"
              style={{
                ...styles.outlineBtn,

                flex: isMobile
                  ? "1 1 45%"
                  : "unset",
              }}
              onClick={rejectAll}
            >
              Reject All
            </button>

            <button
              type="button"
              style={{
                ...styles.acceptBtn,

                flex: isMobile
                  ? "1 1 45%"
                  : "unset",
              }}
              onClick={acceptAll}
            >
              Accept All
            </button>
          </div>
        ) : (
          /* =================================================
             CUSTOM SETTINGS
          ================================================= */
          <div
            style={{
              ...styles.customBox,

              width: isMobile
                ? "100%"
                : "auto",

              justifyContent: isMobile
                ? "center"
                : "flex-end",
            }}
          >
            {/* ESSENTIAL */}
            <label style={styles.checkLabel}>
              <input
                type="checkbox"
                checked
                disabled
              />

              <span>Essential</span>
            </label>

            {/* ANALYTICS */}
            <label style={styles.checkLabel}>
              <input
                type="checkbox"
                checked={
                  preferences.analytics
                }
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    analytics:
                      e.target.checked,
                  })
                }
              />

              <span>Analytics</span>
            </label>

            {/* MARKETING */}
            <label style={styles.checkLabel}>
              <input
                type="checkbox"
                checked={
                  preferences.marketing
                }
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    marketing:
                      e.target.checked,
                  })
                }
              />

              <span>Marketing</span>
            </label>

            <button
              type="button"
              style={styles.cancelBtn}
              onClick={() =>
                setShowCustomize(false)
              }
            >
              Cancel
            </button>

            <button
              type="button"
              style={styles.acceptBtn}
              onClick={saveCustom}
            >
              Save Preferences
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   STYLES
========================================================= */

const styles = {
  overlay: {
    position: "fixed",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 9999,
  },

  banner: {
    background:
      "linear-gradient(135deg, #081425 0%, #10263f 50%, #081425 100%)",

    borderRadius: "20px",

    boxShadow:
      "0 12px 40px rgba(0,0,0,0.30)",

    display: "flex",

    justifyContent: "space-between",

    alignItems: "center",

    gap: "20px",

    border:
      "1px solid rgba(255,255,255,0.08)",
  },

  leftSection: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    flex: 1,
  },

  heading: {
    margin: 0,
    fontWeight: 700,
    color: "#ffffff",
  },

  text: {
    marginTop: "6px",
    marginBottom: 0,
    color: "#c9d3df",
    maxWidth: "600px",
    lineHeight: 1.6,
  },

  buttonGroup: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },

  linkBtn: {
    border: "none",
    background: "transparent",
    color: "#ff7a00",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 600,
    padding: "8px 10px",
  },

  outlineBtn: {
    padding: "10px 16px",
    background: "#ffffff",
    color: "#07111D",
    border: "1px solid #cccccc",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 600,
    whiteSpace: "nowrap",
  },

  acceptBtn: {
    padding: "10px 16px",
    background: "#ff7a00",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 600,
    whiteSpace: "nowrap",
  },

  cancelBtn: {
    padding: "10px 16px",
    background: "transparent",
    color: "#ffffff",
    border:
      "1px solid rgba(255,255,255,0.35)",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 600,
  },

  customBox: {
    display: "flex",
    gap: "16px",
    alignItems: "center",
    flexWrap: "wrap",
  },

  checkLabel: {
    display: "flex",
    alignItems: "center",
    gap: "7px",
    color: "#ffffff",
    fontSize: "14px",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
};

export default CookieBanner;