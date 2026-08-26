import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Styles/global.css";

// ✅ ADD THESE 2 LINES HERE
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";

// ✅ REGISTER LORDICON (THIS IS THE IMPORTANT LINE)
defineElement(lottie.loadAnimation);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);