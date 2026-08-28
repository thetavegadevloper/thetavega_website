import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Product from "./pages/Products";
import Industries from "./pages/Industries";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import OperateXPlatform from "./pages/OperateXPlatform";
import CaseStudies from "./pages/CaseStudies";
import DetailCaseStudies from "./pages/DetailCaseStudies";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Careers from "./pages/Careers";
function App() {
  return (
    <Router>
      <Navbar />
       

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/product" element={<Product />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route
  path="/operatex-platform"
  element={<OperateXPlatform />}

  
/>
<Route
  path="/case-studies"
  element={<CaseStudies />}
/>
<Route
  path="/case-studies/:slug"
  element={<DetailCaseStudies />}
/>
<Route
  path="/careers"
  element={<Careers />}
/>
  <Route
            path="/blogs"
            element={<Blog />}
          />

          <Route
            path="/blogs/:slug"
            element={<BlogDetail />}
          />
        </Routes>
      </main>
      <CookieBanner />

      <Footer />
    </Router>
  );
}

export default App;