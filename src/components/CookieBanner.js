import axios from "axios";
import React, {
  useEffect,
  useRef,
  useState,
} from "react";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL;

function CookieBanner() {
  const [showBanner, setShowBanner] =
    useState(false);

  const [showCustomize, setShowCustomize] =
    useState(false);

  const [preferences, setPreferences] =
    useState({
      analytics: false,
      marketing: false,
    });

  const submittedRef = useRef(false);

  /* =========================================================
     INITIAL LOAD
  ========================================================= */

  useEffect(() => {
    const savedConsent =
      localStorage.getItem("cookieConsent");

    if (!savedConsent) {
      setShowBanner(true);
    }
  }, []);

  /* =========================================================
     SAVE CONSENT
  ========================================================= */

  const saveConsent = async (data) => {
    /*
      Prevent accidental multiple taps/clicks
    */
    if (submittedRef.current) {
      return;
    }

    submittedRef.current = true;

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

    /* =====================================================
       SAVE TO LOCAL STORAGE IMMEDIATELY
    ===================================================== */

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

    /* =====================================================
       CLOSE BANNER IMMEDIATELY
    ===================================================== */

    setShowBanner(false);
    setShowCustomize(false);

    /* =====================================================
       SAVE TO BACKEND IN BACKGROUND
    ===================================================== */

    try {
      if (!API_BASE_URL) {
        console.warn(
          "REACT_APP_API_BASE_URL is not configured."
        );

        return;
      }

      const response = await axios.post(
        `${API_BASE_URL}/api/cookie-consent`,
        {
          consent_type: consentType,

          analytics:
            data.analytics,

          marketing:
            data.marketing,

          browser:
            getBrowser(),

          os:
            getOS(),

          device:
            getDevice(),
        }
      );

      console.log(
        "Cookie consent saved:",
        response.data
      );
    } catch (error) {
      console.error(
        "Cookie consent API error:",
        error.response?.data ||
          error.message
      );

      /*
        Do NOT display banner again.

        User consent is already saved
        successfully in localStorage.
      */
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

      analytics:
        preferences.analytics,

      marketing:
        preferences.marketing,
    });
  };

  /* =========================================================
     BROWSER
  ========================================================= */

  const getBrowser = () => {
    const ua =
      navigator.userAgent;

    if (ua.includes("Edg")) {
      return "Edge";
    }

    if (
      ua.includes("Chrome") &&
      !ua.includes("Edg")
    ) {
      return "Chrome";
    }

    if (ua.includes("Firefox")) {
      return "Firefox";
    }

    if (
      ua.includes("Safari") &&
      !ua.includes("Chrome")
    ) {
      return "Safari";
    }

    return "Other";
  };

  /* =========================================================
     OS
  ========================================================= */

  const getOS = () => {
    const ua =
      navigator.userAgent;

    if (ua.includes("Windows")) {
      return "Windows";
    }

    if (ua.includes("Android")) {
      return "Android";
    }

    if (
      ua.includes("iPhone") ||
      ua.includes("iPad")
    ) {
      return "iOS";
    }

    if (ua.includes("Mac")) {
      return "macOS";
    }

    if (ua.includes("Linux")) {
      return "Linux";
    }

    return "Other";
  };

  /* =========================================================
     DEVICE
  ========================================================= */

  const getDevice = () => {
    const width =
      window.innerWidth;

    if (width <= 767) {
      return "Mobile";
    }

    if (width <= 991) {
      return "Tablet";
    }

    return "Desktop";
  };

  /* =========================================================
     DON'T RENDER
  ========================================================= */

  if (!showBanner) {
    return null;
  }

  return (
    <>
      <div className="tv-cookie-wrapper">
        <div
          className={`tv-cookie-banner ${
            showCustomize
              ? "tv-cookie-custom-open"
              : ""
          }`}
        >
          {/* =============================================
              CONTENT
          ============================================= */}

          <div className="tv-cookie-content">
            <div className="tv-cookie-icon">
              <span />
            </div>

            <div className="tv-cookie-copy">
              <h2>
                We value your privacy
              </h2>

              <p>
                We use cookies to enhance
                your browsing experience,
                analyze our traffic, and
                improve our website. You can
                accept all cookies, reject
                optional cookies, or customize
                your preferences.
              </p>
            </div>
          </div>

          {/* =============================================
              NORMAL BUTTONS
          ============================================= */}

          {!showCustomize ? (
            <div className="tv-cookie-actions">
              <button
                type="button"
                className="tv-cookie-customize"
                onClick={() =>
                  setShowCustomize(true)
                }
              >
                Customize
              </button>

              <button
                type="button"
                className="tv-cookie-reject"
                onClick={rejectAll}
              >
                Reject All
              </button>

              <button
                type="button"
                className="tv-cookie-accept"
                onClick={acceptAll}
              >
                Accept All
              </button>
            </div>
          ) : (
            /* ===========================================
               CUSTOM SETTINGS
            =========================================== */

            <div className="tv-cookie-preferences">
              <div className="tv-cookie-options">
                {/* ESSENTIAL */}

                <label className="tv-cookie-check">
                  <input
                    type="checkbox"
                    checked
                    disabled
                  />

                  <span>
                    Essential
                  </span>
                </label>

                {/* ANALYTICS */}

                <label className="tv-cookie-check">
                  <input
                    type="checkbox"
                    checked={
                      preferences.analytics
                    }
                    onChange={(e) =>
                      setPreferences(
                        (previous) => ({
                          ...previous,

                          analytics:
                            e.target
                              .checked,
                        })
                      )
                    }
                  />

                  <span>
                    Analytics
                  </span>
                </label>

                {/* MARKETING */}

                <label className="tv-cookie-check">
                  <input
                    type="checkbox"
                    checked={
                      preferences.marketing
                    }
                    onChange={(e) =>
                      setPreferences(
                        (previous) => ({
                          ...previous,

                          marketing:
                            e.target
                              .checked,
                        })
                      )
                    }
                  />

                  <span>
                    Marketing
                  </span>
                </label>
              </div>

              <div className="tv-cookie-custom-actions">
                <button
                  type="button"
                  className="tv-cookie-cancel"
                  onClick={() =>
                    setShowCustomize(false)
                  }
                >
                  Cancel
                </button>

                <button
                  type="button"
                  className="tv-cookie-accept"
                  onClick={saveCustom}
                >
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`

        /* =====================================================
           COOKIE WRAPPER
        ===================================================== */

        .tv-cookie-wrapper {
          position: fixed;

          z-index: 99999;

          left: 50%;
          bottom: 20px;

          transform:
            translateX(-50%);

          width:
            calc(100% - 40px);

          max-width:
            1180px;
        }


        /* =====================================================
           MAIN BANNER
        ===================================================== */

        .tv-cookie-banner {
          width: 100%;

          padding:
            20px 22px;

          display: flex;

          align-items: center;

          justify-content:
            space-between;

          gap:
            24px;

          border-radius:
            18px;

          background:
            linear-gradient(
              135deg,
              #081425 0%,
              #10263f 50%,
              #081425 100%
            );

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.08
            );

          box-shadow:
            0 16px 45px
            rgba(
              0,
              0,
              0,
              0.28
            );

          box-sizing:
            border-box;
        }


        /* =====================================================
           LEFT CONTENT
        ===================================================== */

        .tv-cookie-content {
          min-width: 0;

          flex: 1;

          display: flex;

          align-items:
            center;

          gap:
            15px;
        }


        .tv-cookie-icon {
          width:
            38px;

          height:
            38px;

          flex:
            0 0 38px;

          border-radius:
            12px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          background:
            rgba(
              242,
              124,
              45,
              0.12
            );

          border:
            1px solid
            rgba(
              242,
              124,
              45,
              0.18
            );
        }


        .tv-cookie-icon span {
          width:
            11px;

          height:
            11px;

          border-radius:
            50%;

          background:
            #f27c2d;

          box-shadow:
            0 0 0 5px
            rgba(
              242,
              124,
              45,
              0.09
            );
        }


        .tv-cookie-copy {
          min-width:
            0;
        }


        .tv-cookie-copy h2 {
          margin:
            0 0 5px;

          color:
            #ffffff;

          font-size:
            18px;

          font-weight:
            800;

          line-height:
            1.25;
        }


        .tv-cookie-copy p {
          max-width:
            650px;

          margin:
            0;

          color:
            #c9d3df;

          font-size:
            13px;

          line-height:
            1.55;
        }


        /* =====================================================
           ACTION BUTTONS
        ===================================================== */

        .tv-cookie-actions {
          flex:
            0 0 auto;

          display:
            flex;

          align-items:
            center;

          justify-content:
            flex-end;

          gap:
            9px;
        }


        .tv-cookie-actions button,
        .tv-cookie-custom-actions button {
          min-height:
            42px;

          padding:
            9px 15px;

          border-radius:
            9px;

          font-size:
            13px;

          font-weight:
            700;

          cursor:
            pointer;

          white-space:
            nowrap;

          transition:
            transform .2s ease,
            box-shadow .2s ease,
            background .2s ease;
        }


        .tv-cookie-actions button:hover,
        .tv-cookie-custom-actions button:hover {
          transform:
            translateY(-2px);
        }


        /* CUSTOMIZE */

        .tv-cookie-customize {
          border:
            none;

          color:
            #f27c2d;

          background:
            transparent;
        }


        /* REJECT */

        .tv-cookie-reject {
          color:
            #07111D;

          background:
            #ffffff;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              .8
            );
        }


        /* ACCEPT */

        .tv-cookie-accept {
          color:
            #ffffff;

          background:
            linear-gradient(
              135deg,
              #f27c2d,
              #DB9941
            );

          border:
            none;

          box-shadow:
            0 8px 20px
            rgba(
              242,
              124,
              45,
              .22
            );
        }


        /* =====================================================
           CUSTOMIZATION
        ===================================================== */

        .tv-cookie-preferences {
          flex:
            0 0 auto;

          display:
            flex;

          align-items:
            center;

          gap:
            20px;
        }


        .tv-cookie-options {
          display:
            flex;

          align-items:
            center;

          flex-wrap:
            wrap;

          gap:
            14px;
        }


        .tv-cookie-check {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            7px;

          color:
            #ffffff;

          font-size:
            12px;

          font-weight:
            600;

          white-space:
            nowrap;

          cursor:
            pointer;
        }


        .tv-cookie-check input {
          width:
            16px;

          height:
            16px;

          accent-color:
            #f27c2d;

          cursor:
            pointer;
        }


        .tv-cookie-check input:disabled {
          cursor:
            default;
        }


        .tv-cookie-custom-actions {
          display:
            flex;

          align-items:
            center;

          gap:
            8px;
        }


        .tv-cookie-cancel {
          color:
            #ffffff;

          background:
            transparent;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              .32
            );
        }


        /* =====================================================
           TABLET
           <= 991px
        ===================================================== */

        @media (max-width: 991px) {

          .tv-cookie-wrapper {
            width:
              calc(100% - 32px);

            bottom:
              16px;
          }


          .tv-cookie-banner {
            padding:
              18px;

            flex-direction:
              column;

            align-items:
              stretch;

            gap:
              16px;
          }


          .tv-cookie-content {
            width:
              100%;
          }


          .tv-cookie-copy p {
            max-width:
              100%;
          }


          .tv-cookie-actions {
            width:
              100%;

            justify-content:
              flex-end;
          }


          .tv-cookie-preferences {
            width:
              100%;

            justify-content:
              space-between;

            flex-wrap:
              wrap;

            gap:
              14px;
          }


          .tv-cookie-options {
            flex:
              1 1 auto;
          }

        }


        /* =====================================================
           MOBILE
           <= 767px
        ===================================================== */

        @media (max-width: 767px) {

          .tv-cookie-wrapper {
            width:
              calc(100% - 20px);

            bottom:
              10px;
          }


          .tv-cookie-banner {
            padding:
              15px;

            border-radius:
              15px;

            gap:
              14px;
          }


          .tv-cookie-content {
            align-items:
              flex-start;

            gap:
              11px;
          }


          .tv-cookie-icon {
            width:
              32px;

            height:
              32px;

            flex:
              0 0 32px;

            border-radius:
              9px;
          }


          .tv-cookie-icon span {
            width:
              9px;

            height:
              9px;
          }


          .tv-cookie-copy h2 {
            font-size:
              15px;

            margin-bottom:
              5px;
          }


          .tv-cookie-copy p {
            font-size:
              11.5px;

            line-height:
              1.5;
          }


          /* BUTTONS */

          .tv-cookie-actions {
            display:
              grid;

            grid-template-columns:
              1fr 1fr;

            gap:
              8px;

            width:
              100%;
          }


          .tv-cookie-customize {
            grid-column:
              1 / -1;

            min-height:
              32px !important;

            padding:
              4px 8px !important;

            text-align:
              left;
          }


          .tv-cookie-reject,
          .tv-cookie-accept {
            width:
              100%;
          }


          .tv-cookie-actions button,
          .tv-cookie-custom-actions button {
            min-height:
              40px;

            padding:
              9px 10px;

            font-size:
              12px;
          }


          /* CUSTOM OPTIONS */

          .tv-cookie-preferences {
            display:
              block;

            width:
              100%;
          }


          .tv-cookie-options {
            width:
              100%;

            display:
              grid;

            grid-template-columns:
              repeat(
                3,
                minmax(0, 1fr)
              );

            gap:
              7px;

            margin-bottom:
              12px;
          }


          .tv-cookie-check {
            font-size:
              10px;

            gap:
              4px;

            justify-content:
              flex-start;
          }


          .tv-cookie-check input {
            width:
              14px;

            height:
              14px;
          }


          .tv-cookie-custom-actions {
            width:
              100%;

            display:
              grid;

            grid-template-columns:
              1fr 1fr;

            gap:
              8px;
          }

        }


        /* =====================================================
           SMALL MOBILE
           <= 390px
        ===================================================== */

        @media (max-width: 390px) {

          .tv-cookie-wrapper {
            width:
              calc(100% - 14px);

            bottom:
              7px;
          }


          .tv-cookie-banner {
            padding:
              13px;

            border-radius:
              13px;
          }


          .tv-cookie-icon {
            display:
              none;
          }


          .tv-cookie-copy h2 {
            font-size:
              14px;
          }


          .tv-cookie-copy p {
            font-size:
              11px;
          }


          .tv-cookie-options {
            grid-template-columns:
              1fr 1fr;
          }


          .tv-cookie-check:first-child {
            grid-column:
              1 / -1;
          }

        }

      `}</style>
    </>
  );
}

export default CookieBanner;