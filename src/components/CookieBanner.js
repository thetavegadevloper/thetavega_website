import axios from "axios";
import React, { useEffect, useState } from "react";

function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem("cookieConsent");
    if (!savedConsent) setShowBanner(true);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const saveConsent = async (data) => {
    try {
      localStorage.setItem("cookieConsent", JSON.stringify(data));

      const consentType =
        data.analytics && data.marketing
          ? "accepted"
          : !data.analytics && !data.marketing
          ? "rejected"
          : "customized";

      const response = await axios.post(
        "http://localhost:5000/api/cookies",
        {
          consentType,
          analytics: data.analytics,
          marketing: data.marketing,
        }
      );

      console.log("Saved in DB:", response.data);
      setShowBanner(false);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  const acceptAll = () => {
    saveConsent({
      essential: true,
      analytics: true,
      marketing: true,
    });
  };

  const rejectAll = () => {
    saveConsent({
      essential: true,
      analytics: false,
      marketing: false,
    });
  };

  const saveCustom = () => {
    saveConsent({
      essential: true,
      analytics: preferences.analytics,
      marketing: preferences.marketing,
    });
  };

  if (!showBanner) return null;

  return (
    <div
      style={{
        ...styles.overlay,
        width: isMobile ? "95%" : "80%",
      }}
    >
      <div
        style={{
          ...styles.banner,
          flexDirection: isMobile ? "column" : "row",
          padding: isMobile ? "16px" : "20px",
        }}
      >
        <div
          style={{
            ...styles.leftSection,
            flexDirection: isMobile ? "column" : "row",
            textAlign: isMobile ? "center" : "left",
          }}
        >
         

          <div>
            <h2
              style={{
                ...styles.heading,
                fontSize: isMobile ? "18px" : "24px",
              }}
            >
              We value your privacy
            </h2>

            <p
              style={{
                ...styles.text,
                fontSize: isMobile ? "14px" : "16px",
              }}
            >
              We use cookies to enhance your browsing experience, serve
              personalized content, and analyze our traffic.
            </p>
          </div>
        </div>

        {!showCustomize ? (
          <div
            style={{
              ...styles.buttonGroup,
              width: isMobile ? "100%" : "auto",
              justifyContent: "center",
            }}
          >
            {!isMobile && (
              <button style={styles.linkBtn}>Cookie Policy</button>
            )}

            <button
              style={{
                ...styles.outlineBtn,
                flex: isMobile ? 1 : "unset",
              }}
              onClick={rejectAll}
            >
              Reject All
            </button>

            <button
              style={{
                ...styles.acceptBtn,
                flex: isMobile ? 1 : "unset",
              }}
              onClick={acceptAll}
            >
              Accept All
            </button>
          </div>
        ) : (
          <div style={styles.customBox}>
            <label>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    analytics: e.target.checked,
                  })
                }
              />
              Analytics
            </label>

            <label>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    marketing: e.target.checked,
                  })
                }
              />
              Marketing
            </label>

            <button style={styles.acceptBtn} onClick={saveCustom}>
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 9999,
  },

  banner: {
    background:
      "linear-gradient(135deg, #081425 0%, #10263f 50%, #081425 100%)",
    borderRadius: "20px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
  },

  leftSection: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    flex: 1,
  },

  icon: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "#ffe7cc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
  },

  heading: {
    margin: 0,
    fontWeight: "bold",
    color: "#ffffff",
  },

  text: {
    marginTop: "5px",
    color: "#c9d3df",
    maxWidth: "600px",
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
    fontSize: "16px",
  },

  outlineBtn: {
    padding: "10px 16px",
    background: "#fff",
    border: "1px solid #ccc",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
  },

  acceptBtn: {
    padding: "10px 16px",
    background: "#ff7a00",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
  },

  customBox: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    flexWrap: "wrap",
  },
};

export default CookieBanner;