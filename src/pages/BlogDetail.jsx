import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiBookOpen,
  FiClock,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiActivity,
} from "react-icons/fi";
import { blogs } from "./Blog";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const normalizedSlug = decodeURIComponent(slug || "").trim().toLowerCase();
  const blog = blogs.find(
    (item) => item.slug.trim().toLowerCase() === normalizedSlug
  );
  const [progress, setProgress] = useState(0);

  const otherBlog = useMemo(
    () => blogs.find((item) => item.slug !== blog?.slug),
    [blog]
  );

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const onScroll = () => {
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      setProgress(Math.min(100, Math.max(0, (window.scrollY / max) * 100)));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug]);

  useEffect(() => {
    if (blog) document.title = `${blog.title} | Thetavega`;
  }, [blog]);

  useEffect(() => {
    if (!blog) return;

    const tables = document.querySelectorAll(
      ".opx-article-content table.compare"
    );

    tables.forEach((table) => {
      if (table.parentElement?.classList.contains("opx-table-scroll")) return;

      const wrapper = document.createElement("div");
      wrapper.className = "opx-table-scroll";

      table.parentNode?.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });
  }, [blog]);


  if (!blog) {
    return (
      <div className="opx-article-not-found">
        <h2>Blog not found</h2>
        <button onClick={() => navigate("/blogs")}>Back to Blogs</button>
      </div>
    );
  }

  const isMesArticle = blog.visual === "MES";

  return (
    <main className="opx-article-page">
      <div className="opx-article-progress">
        <motion.span animate={{ width: `${progress}%` }} />
      </div>

      <section className="opx-article-hero">
        <div className="opx-article-pattern" />
        <div className="opx-article-blob" />
        <motion.div className="opx-article-float-shape shape-one" animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="opx-article-float-shape shape-two" animate={{ y: [0, 9, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />

        <div className="opx-article-container opx-article-hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .68 }}
          >
            <button className="opx-article-back" onClick={() => navigate("/blogs")}>
              <FiArrowLeft /> Back to Insights
            </button>

            <div className="opx-article-label">
              <span>{blog.number}</span>
              {blog.eyebrow}
            </div>

            <h1>{blog.title}</h1>
            <p className="opx-article-dek">{blog.excerpt}</p>

            <div className="opx-article-meta">
              <span><FiClock /> {blog.readingTime}</span>
              <span><FiBookOpen /> {blog.category}</span>
            </div>
          </motion.div>

          <motion.div
            className="opx-topic-map"
            initial={{ opacity: 0, x: 28, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: .78, delay: .08 }}
          >
            <div className="opx-topic-map-ring ring-one" />
            <div className="opx-topic-map-ring ring-two" />

            <motion.div
              className="opx-topic-map-core"
              animate={{ opacity: [0.94, 1, 0.94] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
            >
              {isMesArticle ? <FiCpu /> : <FiLayers />}
              <strong>{isMesArticle ? "MES" : "IT ↔ OT"}</strong>
              <small>{isMesArticle ? "EXECUTION LAYER" : "SYSTEM ARCHITECTURE"}</small>
            </motion.div>

            {(isMesArticle
              ? [
                  ["ERP", "PLAN", FiLayers, "node-1"],
                  ["QUALITY", "VALIDATE", FiBookOpen, "node-2"],
                  ["SHOP FLOOR", "EXECUTE", FiActivity, "node-3"],
                  ["TRACEABILITY", "CONTEXT", FiDatabase, "node-4"],
                ]
              : [
                  ["ERP", "PLAN", FiLayers, "node-1"],
                  ["MES", "EXECUTE", FiCpu, "node-2"],
                  ["SCADA", "SUPERVISE", FiActivity, "node-3"],
                  ["SHOP FLOOR", "CONTROL", FiDatabase, "node-4"],
                ]
            ).map(([title, sub, Icon, className], index) => (
              <motion.div
                key={title}
                className={`opx-topic-map-node ${className}`}
                animate={{
                  y: index % 2 === 0 ? [0, -7, 0] : [0, 7, 0],
                  rotate: index % 2 === 0 ? [0, -1.5, 0] : [0, 1.5, 0],
                }}
                transition={{
                  duration: 4 + index * .35,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Icon />
                <span><strong>{title}</strong><small>{sub}</small></span>
              </motion.div>
            ))}

            <div className="opx-topic-map-caption">
              <span>{blog.number}</span>
              <div><small>READING MAP</small><strong>{blog.category}</strong></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="opx-article-body">
        <div className="opx-article-container opx-article-layout">
          <aside className="opx-article-aside">
            <div className="opx-article-toc">
              <div className="opx-toc-heading">IN THIS ARTICLE</div>
              {blog.toc.map((item, index) => (
                <a key={`${item.id}-${index}`} href={`#${item.id}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </aside>

          <article className="opx-article-column">
            <motion.div
              className="opx-article-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .62, delay: .12 }}
              dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
            />

            <motion.div
              className="opx-next-article"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .25 }}
            >
              <div>
                <span>CONTINUE THE SERIES</span>
                <h2>Keep building the connected-factory foundation.</h2>
              </div>

              {otherBlog && (
                <button onClick={() => navigate(`/blogs/${otherBlog.slug}`)}>
                  <small>NEXT ARTICLE</small>
                  <strong>{otherBlog.title}</strong>
                  <FiArrowRight />
                </button>
              )}
            </motion.div>
          </article>
        </div>
      </section>

      <motion.section
        className="opx-article-cta"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: .3 }}
      >
        <span>OPERATEX / THETAVEGA</span>
        <h2>Turn the architecture into a practical manufacturing roadmap.</h2>
        <p>Discuss your machines, production process, quality systems and ERP integration requirements.</p>
        <button onClick={() => navigate("/contact")}>
          Talk to Our Engineers <FiArrowRight />
        </button>
      </motion.section>

      <style>{`
        .opx-article-page,
        .opx-article-page * {
          box-sizing:border-box;
          font-family:"Montserrat",sans-serif !important;
        }

        .opx-article-page {
          --orange:#ee6d2d;
          --burnt:#b74621;
          --amber:#d99a49;
          --cream:#fff8f1;
          --ink:#20242a;
          --text:#4f5a66;
          --line:rgba(49,38,31,.10);
          width:100%;
          max-width:100%;
          overflow-x:hidden;
          background:#fff;
          color:var(--ink);
        }

        .opx-article-container {
          width:min(1260px,calc(100% - 64px));
          margin:0 auto;
          position:relative;
          z-index:2;
        }

        .opx-article-progress {
          position:fixed;
          top:0;left:0;width:100%;height:3px;
          z-index:9999;
          background:rgba(76,47,30,.07);
        }
        .opx-article-progress span {
          display:block;height:100%;
          background:linear-gradient(90deg,#b74621,#ee6d2d,#d99a49);
        }

        .opx-article-hero {
          position:relative;
          overflow:hidden;
          padding:92px 0 64px;
          background:
            radial-gradient(circle at 82% 20%,rgba(238,109,45,.20),transparent 27%),
            radial-gradient(circle at 10% 80%,rgba(217,154,73,.12),transparent 28%),
            linear-gradient(135deg,#fffaf5,#f8eadc 58%,#f2d9c5);
          border-bottom:1px solid rgba(91,61,42,.08);
        }

        .opx-article-pattern {
          position:absolute;inset:0;
          background-image:radial-gradient(rgba(77,53,39,.09) .8px,transparent .8px);
          background-size:19px 19px;
          opacity:.28;
          mask-image:linear-gradient(to bottom,#000,transparent 94%);
        }

        .opx-article-blob {
          position:absolute;
          width:300px;height:300px;
          border-radius:50%;
          right:-90px;top:-120px;
          border:1px dashed rgba(113,69,43,.15);
          box-shadow:0 0 0 34px rgba(238,109,45,.03),0 0 0 72px rgba(238,109,45,.02);
        }

        .opx-article-hero-grid {
          display:grid;
          grid-template-columns:minmax(0,1.08fr) minmax(390px,.82fr);
          gap:clamp(40px,6vw,76px);
          align-items:center;
        }

        .opx-article-back {
          border:0;
          padding:0;
          margin:0 0 22px;
          display:inline-flex;align-items:center;gap:7px;
          background:transparent;
          color:#7c6b60;
          font-size:10.5px;
          font-weight:550;
          cursor:pointer;
        }

        .opx-article-label {
          display:flex;align-items:center;gap:9px;
          color:#8a5840;
          font-size:9px;
          line-height:1.45;
          font-weight:620;
          letter-spacing:1.25px;
          text-transform:uppercase;
        }
        .opx-article-label span {
          width:31px;height:31px;
          display:grid;place-items:center;
          border-radius:50%;
          background:#292623;color:#fff7ef;
          font-size:8px;
        }

        .opx-article-hero h1 {
          max-width:780px;
          margin:15px 0 17px;
          color:#27221e;
          font-size:clamp(2.35rem,3.7vw,3.75rem);
          line-height:1.06;
          font-weight:620;
          letter-spacing:-.04em;
        }

        .opx-article-dek {
          max-width:730px;
          margin:0;
          color:#665e58;
          font-size:clamp(.94rem,1vw,1.02rem);
          line-height:1.72;
          font-weight:430;
        }

        .opx-article-meta {
          display:flex;flex-wrap:wrap;gap:8px;
          margin-top:22px;
        }
        .opx-article-meta span {
          display:inline-flex;align-items:center;gap:6px;
          padding:7px 10px;
          border-radius:999px;
          border:1px solid rgba(88,61,44,.11);
          background:rgba(255,255,255,.48);
          color:#75675e;
          font-size:9.5px;
          font-weight:550;
        }
        .opx-article-meta svg { color:var(--orange) }

        .opx-article-system {
          width:min(490px,100%);
          justify-self:center;
          min-width:0;
          padding:18px;
          border-radius:24px;
          background:#292724;
          color:#fff;
          box-shadow:0 26px 65px rgba(78,49,30,.18);
          overflow:hidden;
        }

        .opx-article-system::before {
          content:"";
          position:absolute;
        }

        .opx-system-caption {
          margin-bottom:13px;
          color:rgba(255,255,255,.42);
          font-size:7.8px;
          font-weight:650;
          letter-spacing:1.15px;
        }

        .opx-system-flow {
          display:grid;
          gap:0;
        }

        .opx-system-tile {
          min-width:0;
          display:flex;align-items:center;gap:11px;
          padding:13px;
          border-radius:13px;
          border:1px solid rgba(255,255,255,.08);
          background:#35322f;
        }
        .opx-system-tile.featured {
          border-color:rgba(238,109,45,.38);
          background:linear-gradient(135deg,#4a2d20,#392c26);
        }
        .opx-system-tile svg { flex:0 0 auto;color:#ef8450;font-size:19px }
        .opx-system-tile strong { display:block;font-size:10.5px;font-weight:600 }
        .opx-system-tile small { display:block;margin-top:2px;color:rgba(255,255,255,.38);font-size:7.5px }

        .opx-system-connector {
          position:relative;width:2px;height:27px;margin:0 auto;overflow:hidden;background:rgba(255,255,255,.1);
        }
        .opx-system-connector i {
          position:absolute;left:0;top:-10px;width:100%;height:10px;background:#ef8450;
        }

        .opx-system-grid {
          position:relative;
          min-height:290px;
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:90px 110px;
          align-items:center;
          padding:28px 18px;
        }
        .opx-system-grid::before,
        .opx-system-grid::after {
          content:"";position:absolute;left:50%;top:50%;background:rgba(238,109,45,.4);
        }
        .opx-system-grid::before { width:70%;height:1px;transform:translate(-50%,-50%) }
        .opx-system-grid::after { width:1px;height:72%;transform:translate(-50%,-50%) }

        .opx-system-node {
          position:relative;z-index:2;
          min-width:0;
          padding:12px;
          text-align:center;
          border-radius:13px;
          background:#35322f;
          border:1px solid rgba(255,255,255,.08);
        }
        .opx-system-node.featured { border-color:rgba(238,109,45,.42);background:#472d22 }
        .opx-system-node svg { color:#ef8450;font-size:18px }
        .opx-system-node strong { display:block;margin-top:5px;font-size:9.5px;font-weight:620 }
        .opx-system-node small { display:block;margin-top:2px;color:rgba(255,255,255,.38);font-size:6.5px;letter-spacing:.65px }

        .opx-system-center {
          position:absolute;left:50%;top:50%;
          width:92px;height:92px;
          transform:translate(-50%,-50%);
          z-index:4;
          display:flex;flex-direction:column;align-items:center;justify-content:center;
          border-radius:50%;
          background:#181716;
          border:1px solid rgba(255,255,255,.10);
          box-shadow:0 0 0 11px rgba(238,109,45,.04);
        }
        .opx-system-center svg { color:#ef8450;font-size:21px }
        .opx-system-center span { margin-top:5px;color:rgba(255,255,255,.68);font-size:6.5px;line-height:1.35;text-align:center;letter-spacing:.7px }

        .opx-article-body {
          padding:54px 0 90px;
          background:
            linear-gradient(90deg,rgba(238,109,45,.025),transparent 22%),
            #faf9f7;
        }

        .opx-article-layout {
          display:grid;
          grid-template-columns:220px minmax(0,1fr);
          gap:36px;
          align-items:start;
        }

        .opx-article-toc {
          position:sticky;
          top:90px;
          padding:16px 14px 16px 17px;
          border-left:2px solid rgba(183,70,33,.22);
        }
        .opx-toc-heading {
          margin-bottom:9px;
          color:var(--burnt);
          font-size:8px;
          font-weight:650;
          letter-spacing:1.2px;
        }
        .opx-article-toc a {
          min-width:0;
          display:grid;
          grid-template-columns:25px minmax(0,1fr);
          gap:5px;
          padding:7px 0;
          color:#6a7178;
          text-decoration:none;
          font-size:9.5px;
          line-height:1.4;
          font-weight:480;
        }
        .opx-article-toc a span { color:#b4aaa3;font-size:7.5px;font-weight:600 }
        .opx-article-toc a:hover { color:var(--burnt) }

        .opx-article-column { min-width:0 }

        .opx-article-content {
          min-width:0;
          padding:clamp(28px,3.5vw,48px);
          border-radius:22px;
          background:#fff;
          border:1px solid var(--line);
          box-shadow:0 14px 40px rgba(69,49,37,.045);
          overflow:hidden;
        }

        .opx-article-content h2 {
          scroll-margin-top:100px;
          margin:44px 0 13px;
          color:#252a30;
          font-size:clamp(1.45rem,2.1vw,1.95rem);
          line-height:1.24;
          letter-spacing:-.02em;
          font-weight:610;
        }
        .opx-article-content h2:first-child { margin-top:0 }

        .opx-article-content h3 {
          margin:28px 0 9px;
          color:#30363d;
          font-size:1.12rem;
          line-height:1.35;
          font-weight:600;
        }

        .opx-article-content h4 {
          margin:0 0 6px;
          color:#343b43;
          font-size:.93rem;
          line-height:1.4;
          font-weight:600;
        }

        .opx-article-content p,
        .opx-article-content li {
          color:var(--text);
          font-size:.91rem;
          line-height:1.76;
          font-weight:430;
        }
        .opx-article-content p { margin:0 0 17px }
        .opx-article-content .lead {
          color:#33404c !important;
          font-size:1rem !important;
          line-height:1.72 !important;
          font-weight:460 !important;
        }

        .opx-article-content ul,
        .opx-article-content ol {
          margin:10px 0 20px;
          padding-left:22px;
        }
        .opx-article-content li { margin:5px 0 }

        .opx-article-content strong,
        .opx-article-content b {
          color:#272e35;
          font-weight:620;
        }

        .opx-article-content .callout {
          margin:23px 0;
          padding:18px 20px;
          border-radius:13px;
          border:1px solid rgba(183,70,33,.13);
          border-left:3px solid var(--orange);
          background:#fff7f1;
          color:#49535e;
          font-size:.9rem;
          line-height:1.68;
        }
        .opx-article-content .callout.green {
          border-color:rgba(30,132,91,.14);
          border-left-color:#278b63;
          background:#f2faf6;
        }

        .opx-article-content .quote {
          margin:26px 0;
          padding:17px 20px;
          border-left:3px solid var(--burnt);
          background:#f7f5f2;
          color:#39434d;
          font-size:1rem;
          line-height:1.58;
          font-weight:580;
        }

        .opx-article-content .grid2 {
          display:grid;
          grid-template-columns:repeat(2,minmax(0,1fr));
          gap:11px;
          margin:20px 0;
        }

        .opx-article-content .mini,
        .opx-article-content .card {
          min-width:0;
          padding:16px;
          border-radius:13px;
          border:1px solid var(--line);
          background:#fbfaf8;
        }
        .opx-article-content .mini p,
        .opx-article-content .card p {
          margin:0;
          color:#66707a;
          font-size:.82rem;
          line-height:1.58;
        }

        .opx-article-content .architecture {
          display:grid;
          gap:8px;
          margin:22px 0;
        }
        .opx-article-content .arch-row {
          display:grid;
          grid-template-columns:100px minmax(0,1fr);
          gap:10px;
          align-items:center;
        }
        .opx-article-content .arch-label {
          color:#91867f;
          font-size:8px;
          font-weight:620;
          letter-spacing:.7px;
          text-transform:uppercase;
        }
        .opx-article-content .arch-box {
          min-width:0;
          padding:12px 14px;
          border-radius:11px;
          border:1px solid var(--line);
          background:#fff;
          color:#3d4853;
          font-size:.84rem;
          line-height:1.45;
          font-weight:540;
        }
        .opx-article-content .arch-box.mes {
          color:#fff;
          border:0;
          background:linear-gradient(135deg,#a83f1e,#e97437);
        }
        .opx-article-content .arrow {
          height:16px;
          color:var(--orange);
          text-align:center;
          font-size:16px;
        }

        .opx-article-content .flow {
          margin:22px 0;
          padding:18px;
          border-radius:13px;
          border:1px solid var(--line);
          background:#faf9f7;
        }
        .opx-article-content .flowgrid {
          display:grid;
          grid-template-columns:1fr auto 1fr auto 1fr;
          align-items:center;
          gap:8px;
        }
        .opx-article-content .step {
          min-width:0;
          padding:13px 10px;
          border-radius:10px;
          border:1px solid var(--line);
          background:#fff;
          color:#39444e;
          text-align:center;
          font-size:.83rem;
          line-height:1.35;
          font-weight:600;
        }
        .opx-article-content .step small {
          color:#7f8993;
          font-size:.68rem;
          font-weight:450;
        }

        .opx-article-content .arch {
          display:grid;
          grid-template-columns:repeat(3,minmax(0,1fr));
          gap:10px;
          margin:21px 0;
        }
        .opx-article-content .card small {
          color:var(--burnt);
          font-size:7.5px;
          font-weight:650;
          letter-spacing:.65px;
          text-transform:uppercase;
        }

        .opx-article-content .compare {
          display:block;
          width:100%;
          max-width:100%;
          overflow-x:auto;
          border-collapse:separate;
          border-spacing:0;
          margin:22px 0;
          -webkit-overflow-scrolling:touch;
        }
        .opx-article-content .compare thead,
        .opx-article-content .compare tbody { min-width:720px }
        .opx-article-content .compare tr {
          display:table;width:100%;table-layout:fixed;
        }
        .opx-article-content .compare th,
        .opx-article-content .compare td {
          padding:10px 11px;
          border-right:1px solid #e7e3df;
          border-bottom:1px solid #e7e3df;
          color:#4b5661;
          background:#fff;
          font-size:.79rem;
          line-height:1.5;
          vertical-align:top;
        }
        .opx-article-content .compare thead th {
          color:#fff;
          background:#2b2927;
          font-weight:560;
        }

        .opx-next-article {
          margin-top:22px;
          padding:22px;
          display:grid;
          grid-template-columns:minmax(0,1fr) minmax(250px,.7fr);
          gap:20px;
          align-items:center;
          border-radius:18px;
          border:1px solid var(--line);
          background:#fff;
        }
        .opx-next-article > div > span {
          color:var(--burnt);
          font-size:7.5px;font-weight:650;letter-spacing:1px;
        }
        .opx-next-article h2 {
          margin:6px 0 0;
          font-size:1.28rem;
          line-height:1.28;
          font-weight:600;
        }
        .opx-next-article button {
          min-width:0;
          display:grid;
          grid-template-columns:minmax(0,1fr) 20px;
          gap:6px 10px;
          align-items:center;
          padding:14px;
          border-radius:13px;
          border:1px solid rgba(183,70,33,.15);
          background:#fff8f3;
          color:#2d3238;
          text-align:left;
          cursor:pointer;
        }
        .opx-next-article button small {
          grid-column:1/-1;color:var(--burnt);font-size:7px;font-weight:650;letter-spacing:.8px;
        }
        .opx-next-article button strong {
          min-width:0;font-size:9.5px;line-height:1.4;font-weight:570;
        }
        .opx-next-article button svg { color:var(--orange) }

        .opx-article-cta {
          width:min(1260px,92%);
          margin:0 auto 58px;
          padding:42px 28px;
          text-align:center;
          border-radius:22px;
          background:linear-gradient(135deg,#2b2825,#3c3029);
          color:#fff;
        }
        .opx-article-cta > span { color:#f3a565;font-size:7.5px;font-weight:650;letter-spacing:1.1px }
        .opx-article-cta h2 {
          max-width:760px;margin:7px auto 9px;
          font-size:clamp(1.5rem,2.5vw,2.15rem);
          line-height:1.2;font-weight:600;
        }
        .opx-article-cta p {
          max-width:680px;margin:0 auto 19px;
          color:rgba(255,255,255,.62);
          font-size:.88rem;line-height:1.64;
        }
        .opx-article-cta button,
        .opx-article-not-found button {
          border:0;border-radius:999px;padding:12px 18px;
          display:inline-flex;align-items:center;gap:8px;
          background:linear-gradient(135deg,#b74621,#ee6d2d);
          color:#fff;font-size:10.5px;font-weight:620;cursor:pointer;
        }

        .opx-article-not-found {
          min-height:60vh;padding:120px 20px;
          display:grid;place-items:center;text-align:center;
          font-family:"Montserrat",sans-serif;
        }


        /* ============================================================
           DETAIL HERO V2 — OPEN TECHNICAL MAP / WARM OPERATEX THEME
        ============================================================ */

        .opx-article-hero {
          padding:88px 0 66px;
          background:
            radial-gradient(circle at 14% 18%,rgba(238,109,45,.075),transparent 25%),
            radial-gradient(circle at 80% 64%,rgba(217,154,73,.085),transparent 25%),
            linear-gradient(135deg,#fffdf9 0%,#fff8ed 50%,#f7f3ee 100%);
          border-bottom:1px solid rgba(47,41,36,.07);
        }

        .opx-article-pattern {
          background-image:
            linear-gradient(rgba(57,49,43,.05) 1px,transparent 1px),
            linear-gradient(90deg,rgba(57,49,43,.05) 1px,transparent 1px);
          background-size:44px 44px;
          opacity:.42;
          mask-image:radial-gradient(circle at 70% 40%,#000,transparent 78%);
        }

        .opx-article-blob {
          width:380px;height:380px;
          right:-155px;top:-175px;
          border-color:rgba(238,109,45,.15);
          box-shadow:0 0 0 42px rgba(238,109,45,.022),0 0 0 88px rgba(238,109,45,.012);
        }

        .opx-article-float-shape {
          position:absolute;
          z-index:1;
          pointer-events:none;
          opacity:.18;
        }

        .opx-article-float-shape.shape-one {
          left:4%;bottom:34px;
          width:58px;height:58px;
          border:2px solid var(--orange);
          border-radius:18px 4px 18px 4px;
        }

        .opx-article-float-shape.shape-two {
          right:43%;top:105px;
          width:22px;height:22px;
          background:#2b2927;
          border-radius:50%;
        }

        .opx-article-hero-grid {
          grid-template-columns:minmax(0,1.06fr) minmax(410px,.94fr);
          gap:clamp(44px,6vw,84px);
        }

        .opx-article-hero h1 {
          font-size:clamp(2.05rem,3.25vw,3.25rem);
          line-height:1.09;
          font-weight:610;
        }

        .opx-article-dek {
          font-size:clamp(.88rem,.96vw,.97rem);
          line-height:1.72;
        }

        .opx-topic-map {
          position:relative;
          width:min(520px,100%);
          min-height:430px;
          justify-self:center;
          min-width:0;
        }

        .opx-topic-map::before {
          content:"";
          position:absolute;
          left:50%;top:50%;
          width:67%;
          aspect-ratio:1;
          transform:translate(-50%,-50%);
          border-radius:50%;
          background:radial-gradient(circle,rgba(238,109,45,.11),rgba(238,109,45,.03) 50%,transparent 72%);
        }

        .opx-topic-map-ring {
          position:absolute;
          left:50%;top:50%;
          transform:translate(-50%,-50%);
          border-radius:50%;
          border:1px dashed rgba(54,46,40,.17);
          animation:opxTopicSpin 25s linear infinite;
        }

        .opx-topic-map-ring.ring-one { width:300px;height:300px }
        .opx-topic-map-ring.ring-two { width:390px;height:390px;animation-direction:reverse;animation-duration:36s }

        .opx-topic-map-ring::before {
          content:"";
          position:absolute;
          width:8px;height:8px;border-radius:50%;
          background:var(--orange);
          left:50%;top:-4px;
          box-shadow:0 0 0 6px rgba(238,109,45,.07);
        }

        .opx-topic-map-core {
          position:absolute;
          left:50%;top:50%;
          width:142px;height:142px;
          transform:translate(-50%,-50%);
          z-index:4;
          display:flex;flex-direction:column;align-items:center;justify-content:center;
          text-align:center;
          border-radius:50%;
          color:#fff;
          background:linear-gradient(145deg,#22211f,#37322e);
          box-shadow:0 22px 48px rgba(48,40,34,.17),0 0 0 13px rgba(238,109,45,.05);
        }

        .opx-topic-map-core svg { color:#f28a4e;font-size:28px;margin-bottom:6px }
        .opx-topic-map-core strong { font-size:13px;font-weight:650 }
        .opx-topic-map-core small { margin-top:4px;color:rgba(255,255,255,.43);font-size:6.5px;letter-spacing:.95px }

        .opx-topic-map-node {
          position:absolute;
          z-index:5;
          min-width:118px;
          display:flex;
          align-items:center;
          gap:8px;
          padding:10px 11px;
          border-radius:14px;
          border:1px solid rgba(51,44,38,.09);
          background:rgba(255,255,255,.94);
          box-shadow:0 13px 30px rgba(67,50,37,.085);
          backdrop-filter:blur(12px);
        }

        .opx-topic-map-node svg { flex:0 0 auto;color:var(--orange);font-size:17px }
        .opx-topic-map-node strong { display:block;color:#2b2927;font-size:9.5px;font-weight:620 }
        .opx-topic-map-node small { display:block;margin-top:2px;color:#8a817a;font-size:6px;letter-spacing:.65px }
        .opx-topic-map-node.node-1 { left:0;top:13% }
        .opx-topic-map-node.node-2 { right:0;top:17% }
        .opx-topic-map-node.node-3 { left:0;bottom:19% }
        .opx-topic-map-node.node-4 { right:0;bottom:22% }

        .opx-topic-map-caption {
          position:absolute;
          left:50%;bottom:0;
          transform:translateX(-50%);
          z-index:6;
          width:min(330px,82%);
          display:grid;
          grid-template-columns:38px minmax(0,1fr);
          gap:10px;
          align-items:center;
          padding:10px 12px;
          border-radius:13px;
          border:1px solid rgba(183,70,33,.13);
          background:rgba(255,251,246,.96);
          box-shadow:0 13px 30px rgba(67,50,37,.07);
        }

        .opx-topic-map-caption > span {
          width:34px;height:34px;
          display:grid;place-items:center;
          border-radius:10px;
          background:linear-gradient(135deg,var(--burnt),var(--orange));
          color:#fff;
          font-size:9px;font-weight:650;
        }

        .opx-topic-map-caption small {
          display:block;color:#a06d51;font-size:6.5px;letter-spacing:.9px;
        }

        .opx-topic-map-caption strong {
          display:block;margin-top:2px;color:#302c28;font-size:9px;font-weight:580;
        }

        @keyframes opxTopicSpin {
          from { transform:translate(-50%,-50%) rotate(0deg) }
          to { transform:translate(-50%,-50%) rotate(360deg) }
        }

        @media(max-width:1050px) {
          .opx-article-hero-grid { grid-template-columns:1fr }
          .opx-article-system { width:min(570px,100%);justify-self:start }
          .opx-article-layout { grid-template-columns:1fr;gap:20px }
          .opx-article-aside { display:none }
        }

        @media(max-width:760px) {
          .opx-article-container { width:calc(100% - 28px) }
          .opx-article-hero { padding:82px 0 50px }
          .opx-article-hero h1 { font-size:clamp(2rem,9.5vw,2.75rem) }
          .opx-article-dek { font-size:.9rem }
          .opx-system-grid { gap:70px 60px;min-height:260px }
          .opx-article-body { padding:40px 0 66px }
          .opx-article-content { padding:23px 18px;border-radius:18px }
          .opx-article-content h2 { margin-top:36px;font-size:1.43rem }
          .opx-article-content h3 { font-size:1.05rem }
          .opx-article-content p,
          .opx-article-content li { font-size:.87rem;line-height:1.72 }
          .opx-article-content .grid2,
          .opx-article-content .arch { grid-template-columns:1fr }
          .opx-article-content .arch-row { grid-template-columns:1fr;gap:5px }
          .opx-article-content .flowgrid { grid-template-columns:1fr;gap:5px }
          .opx-article-content .flowgrid .arrow { transform:rotate(90deg) }
          .opx-next-article { grid-template-columns:1fr;padding:18px }
          .opx-article-cta { width:94%;padding:34px 20px }
          .opx-article-cta button { width:100%;max-width:310px;justify-content:center;min-height:44px }
        }

        @media(max-width:390px) {
          .opx-article-container { width:calc(100% - 22px) }
          .opx-article-content { padding:20px 15px }
          .opx-system-grid { gap:64px 40px }
          .opx-system-node { padding:10px 7px }
        }


        @media(max-width:1050px) {
          .opx-topic-map { width:min(560px,100%);min-height:420px;justify-self:start }
        }

        @media(max-width:760px) {
          .opx-article-hero { padding:80px 0 54px }
          .opx-article-hero h1 { font-size:clamp(1.85rem,8.6vw,2.55rem) }
          .opx-topic-map { min-height:380px;width:min(500px,100%);justify-self:center }
          .opx-topic-map-ring.ring-one { width:250px;height:250px }
          .opx-topic-map-ring.ring-two { width:325px;height:325px }
          .opx-topic-map-core { width:120px;height:120px }
          .opx-topic-map-node { min-width:96px;padding:8px 9px;gap:6px }
          .opx-topic-map-node strong { font-size:8.3px }
          .opx-topic-map-node small { font-size:5.5px }
          .opx-topic-map-node.node-1 { left:0;top:14% }
          .opx-topic-map-node.node-2 { right:0;top:18% }
          .opx-topic-map-node.node-3 { left:0;bottom:20% }
          .opx-topic-map-node.node-4 { right:0;bottom:23% }
          .opx-topic-map-caption { width:88% }
        }

        @media(max-width:390px) {
          .opx-topic-map { min-height:350px }
          .opx-topic-map-ring.ring-one { width:220px;height:220px }
          .opx-topic-map-ring.ring-two { width:285px;height:285px }
          .opx-topic-map-core { width:108px;height:108px }
          .opx-topic-map-node { min-width:83px;padding:7px 8px }
          .opx-topic-map-node svg { font-size:14px }
          .opx-topic-map-node strong { font-size:7.7px }
          .opx-topic-map-node small { display:none }
          .opx-article-float-shape { display:none }
        }


        /* ============================================================
           FINAL TABLET + MOBILE RESPONSIVE HARDENING
           Keeps every article element inside its own content width.
        ============================================================ */

        .opx-article-page,
        .opx-article-page section,
        .opx-article-page article,
        .opx-article-page aside,
        .opx-article-page div {
          min-width:0;
        }

        .opx-article-content,
        .opx-article-content > *,
        .opx-article-content section,
        .opx-article-content .architecture,
        .opx-article-content .grid2,
        .opx-article-content .arch,
        .opx-article-content .flow {
          width:100%;
          max-width:100%;
          min-width:0;
        }

        .opx-article-content p,
        .opx-article-content li,
        .opx-article-content h2,
        .opx-article-content h3,
        .opx-article-content h4,
        .opx-article-content .callout,
        .opx-article-content .quote,
        .opx-article-content .mini,
        .opx-article-content .card,
        .opx-article-content .arch-box,
        .opx-article-content .step {
          overflow-wrap:anywhere;
          word-break:normal;
        }

        /* ============================================================
           RESPONSIVE TABLES — KEEP REAL TABLE STRUCTURE
           The wrapper scrolls horizontally on narrow screens.
           The table itself never turns into cards.
        ============================================================ */

        .opx-table-scroll {
          width:100%;
          max-width:100%;
          margin:22px 0;
          overflow-x:auto;
          overflow-y:hidden;
          border:1px solid #e7e3df;
          border-radius:13px;
          background:#fff;
          -webkit-overflow-scrolling:touch;
          scrollbar-width:thin;
          scrollbar-color:rgba(183,70,33,.38) #f5f1ed;
        }

        .opx-table-scroll::-webkit-scrollbar {
          height:8px;
        }

        .opx-table-scroll::-webkit-scrollbar-track {
          background:#f5f1ed;
        }

        .opx-table-scroll::-webkit-scrollbar-thumb {
          border-radius:999px;
          background:rgba(183,70,33,.34);
        }

        .opx-article-content table.compare {
          display:table;
          width:100%;
          min-width:680px;
          max-width:none;
          margin:0;
          table-layout:fixed;
          border-collapse:separate;
          border-spacing:0;
          overflow:visible;
        }

        .opx-article-content .compare thead {
          display:table-header-group;
        }

        .opx-article-content .compare tbody {
          display:table-row-group;
        }

        .opx-article-content .compare tr {
          display:table-row;
        }

        .opx-article-content .compare th,
        .opx-article-content .compare td {
          display:table-cell;
          white-space:normal;
          overflow-wrap:break-word;
          word-break:normal;
        }

        /* Tablet */
        @media(max-width:1050px) {
          .opx-article-container {
            width:min(100% - 40px, 900px);
          }

          .opx-article-hero-grid {
            grid-template-columns:1fr;
            gap:28px;
          }

          .opx-topic-map {
            width:min(520px,100%);
            justify-self:center;
            overflow:hidden;
          }

          .opx-article-body {
            padding:46px 0 72px;
          }

          .opx-article-layout {
            grid-template-columns:1fr;
            gap:0;
          }

          .opx-article-aside {
            display:none;
          }

          .opx-article-content {
            width:100%;
            max-width:100%;
          }

          .opx-next-article {
            grid-template-columns:1fr;
          }

          .opx-next-article button {
            width:100%;
          }
        }

        /* Mobile */

        @media(max-width:900px) {
          .opx-table-scroll {
            width:100%;
            max-width:100%;
            margin:18px 0 24px;
            border-radius:12px;
            overflow-x:hidden;
          }

          .opx-article-content table.compare {
            width:100%;
            min-width:0;
            max-width:100%;
            table-layout:fixed;
          }

          .opx-article-content .compare th,
          .opx-article-content .compare td {
            min-width:0;
            padding:9px 8px;
            font-size:.72rem;
            line-height:1.42;
            white-space:normal;
            overflow-wrap:anywhere;
            word-break:normal;
          }
        }

        @media(max-width:600px) {
          .opx-article-content .compare th,
          .opx-article-content .compare td {
            border-right:1px solid #e7e3df;
            border-bottom:1px solid #e7e3df;
          }

          .opx-article-content .compare th:last-child,
          .opx-article-content .compare td:last-child {
            border-right:0;
          }


          .opx-article-container {
            width:calc(100% - 24px);
          }

          .opx-article-hero {
            padding:72px 0 44px;
          }

          .opx-article-hero h1 {
            margin-top:13px;
            font-size:clamp(1.72rem,8.8vw,2.25rem);
            line-height:1.12;
            letter-spacing:-.025em;
          }

          .opx-article-dek {
            font-size:.88rem;
            line-height:1.68;
          }

          .opx-article-meta {
            gap:6px;
          }

          .opx-article-meta span {
            max-width:100%;
            white-space:normal;
          }

          .opx-topic-map {
            width:100%;
            min-height:340px;
            max-width:390px;
            overflow:hidden;
          }

          .opx-topic-map-ring.ring-one {
            width:218px;
            height:218px;
          }

          .opx-topic-map-ring.ring-two {
            width:286px;
            height:286px;
          }

          .opx-topic-map-core {
            width:106px;
            height:106px;
          }

          .opx-topic-map-core svg {
            font-size:22px;
          }

          .opx-topic-map-core strong {
            font-size:11px;
          }

          .opx-topic-map-node {
            min-width:0;
            width:88px;
            padding:7px;
            gap:5px;
            border-radius:11px;
          }

          .opx-topic-map-node svg {
            font-size:13px;
          }

          .opx-topic-map-node strong {
            font-size:7.5px;
            line-height:1.25;
          }

          .opx-topic-map-node small {
            display:none;
          }

          .opx-topic-map-node.node-1 {
            left:3px;
            top:14%;
          }

          .opx-topic-map-node.node-2 {
            right:3px;
            top:17%;
          }

          .opx-topic-map-node.node-3 {
            left:3px;
            bottom:22%;
          }

          .opx-topic-map-node.node-4 {
            right:3px;
            bottom:24%;
          }

          .opx-topic-map-caption {
            width:88%;
            bottom:4px;
          }

          .opx-article-body {
            padding:34px 0 58px;
          }

          .opx-article-content {
            padding:20px 15px;
            border-radius:16px;
          }

          .opx-article-content h2 {
            margin-top:34px;
            font-size:1.32rem;
            line-height:1.28;
          }

          .opx-article-content h3 {
            font-size:1rem;
          }

          .opx-article-content p,
          .opx-article-content li {
            font-size:.86rem;
            line-height:1.7;
          }

          .opx-article-content .lead {
            font-size:.92rem !important;
          }

          .opx-table-scroll {
            width:100%;
            max-width:100%;
            margin:16px 0 22px;
            border-radius:10px;
            overflow-x:hidden;
          }

          .opx-article-content table.compare {
            width:100%;
            min-width:0;
            max-width:100%;
            table-layout:fixed;
          }

          .opx-article-content .compare th,
          .opx-article-content .compare td {
            min-width:0;
            padding:7px 5px;
            font-size:.64rem;
            line-height:1.34;
            white-space:normal;
            overflow-wrap:anywhere;
            word-break:normal;
          }

          .opx-article-content .compare th {
            font-size:.62rem;
          }

          .opx-article-content .grid2,
          .opx-article-content .arch {
            grid-template-columns:1fr;
          }

          .opx-article-content .arch-row {
            grid-template-columns:1fr;
            gap:5px;
          }

          .opx-article-content .arch-label {
            margin-top:5px;
          }

          .opx-article-content .callout,
          .opx-article-content .quote,
          .opx-article-content .flow {
            padding:15px;
          }


          .opx-next-article {
            padding:16px;
            gap:14px;
          }

          .opx-next-article h2 {
            font-size:1.12rem;
          }

          .opx-next-article button {
            grid-template-columns:minmax(0,1fr) 18px;
          }

          .opx-article-cta {
            width:calc(100% - 24px);
            padding:30px 18px;
            border-radius:18px;
          }

          .opx-article-cta button {
            width:100%;
            max-width:none;
          }
        }

        @media(max-width:390px) {
          .opx-article-container {
            width:calc(100% - 18px);
          }

          .opx-topic-map {
            min-height:320px;
          }

          .opx-topic-map-ring.ring-one {
            width:200px;
            height:200px;
          }

          .opx-topic-map-ring.ring-two {
            width:258px;
            height:258px;
          }

          .opx-topic-map-core {
            width:98px;
            height:98px;
          }

          .opx-topic-map-node {
            width:80px;
          }

          .opx-topic-map-caption {
            width:92%;
          }

          .opx-article-content {
            padding:18px 13px;
          }

          .opx-article-content table.compare {
            width:100%;
            min-width:0;
            max-width:100%;
            table-layout:fixed;
          }

          .opx-article-content .compare th,
          .opx-article-content .compare td {
            padding:6px 4px;
            font-size:.59rem;
            line-height:1.3;
            overflow-wrap:anywhere;
          }

          .opx-article-content .compare th {
            font-size:.57rem;
          }
        }


        @media(prefers-reduced-motion:reduce) {
          .opx-article-page *,
          .opx-article-page *::before,
          .opx-article-page *::after {
            animation:none !important;
            transition:none !important;
          }
        }
      `}</style>
    </main>
  );
};

export default BlogDetail;
