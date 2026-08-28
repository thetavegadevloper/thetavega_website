import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FiArrowRight,
  FiBookOpen,
  FiClock,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiActivity,
  FiZap,
} from "react-icons/fi";

/* ============================================================
   SINGLE BLOG DATA SOURCE
   Add future blogs here only.
============================================================ */
export const blogs = [
  {
    "number": "01",
    "slug": "what-is-mes-and-why-manufacturing-needs-it",
    "category": "MES Fundamentals",
    "visual": "MES",
    "eyebrow": "OperateX MES • Foundation Series",
    "title": "What Is MES and Why Does Manufacturing Need It?",
    "excerpt": "A practical guide to the digital layer that connects ERP, machines, people, quality and production—and turns shop-floor data into manufacturing intelligence.",
    "readingTime": "12 min read",
    "meta": [
      "By Thetavega",
      "12 min read",
      "Manufacturing Execution System"
    ],
    "toc": [
      {
        "id": "what",
        "label": "What is MES?"
      },
      {
        "id": "why",
        "label": "Why MES is needed"
      },
      {
        "id": "visibility",
        "label": "Production visibility"
      },
      {
        "id": "traceability",
        "label": "Traceability"
      },
      {
        "id": "quality",
        "label": "Quality & Poka-Yoke"
      },
      {
        "id": "oee",
        "label": "OEE & losses"
      },
      {
        "id": "connectivity",
        "label": "Machine connectivity"
      },
      {
        "id": "erp",
        "label": "ERP integration"
      },
      {
        "id": "ai",
        "label": "MES & AI"
      },
      {
        "id": "operatex",
        "label": "Where OperateX fits"
      }
    ],
    "contentHtml": "<p class=\"lead\">Modern manufacturing plants generate enormous amounts of data every second. PLCs know whether machines are running. CNCs know cycle information. Torque tools record tightening values. Vision systems inspect components. ERP systems hold production orders and material information.</p>\n<p>Yet in many factories these systems still operate as isolated islands.</p>\n<div class=\"quote\">The factory may have a lot of data, but very little connected manufacturing intelligence.</div>\n<p>This is where a <strong>Manufacturing Execution System (MES)</strong> becomes important.</p>\n<section id=\"what\">\n<h2>What is a Manufacturing Execution System?</h2>\n<p>An MES is a software platform used to monitor, track, control and manage manufacturing operations from the shop floor to the finished product. It sits between enterprise planning systems and the physical manufacturing layer.</p>\n<div class=\"architecture\">\n<div class=\"arch-row\"><div class=\"arch-label\">Enterprise</div><div class=\"arch-box\">ERP / SAP / Business Systems • Production Orders • Material • Inventory</div></div>\n<div class=\"arrow\">↓</div>\n<div class=\"arch-row\"><div class=\"arch-label\">Execution</div><div class=\"arch-box mes\">MES — Production • Traceability • Quality • OEE • Genealogy • Analytics</div></div>\n<div class=\"arrow\">↓</div>\n<div class=\"arch-row\"><div class=\"arch-label\">Shop Floor</div><div class=\"arch-box\">PLC • CNC • Robots • Vision • Torque Tools • Leak Testers • Scanners • Operators</div></div>\n</div>\n<p>ERP typically answers <strong>what needs to be manufactured</strong>. MES answers <strong>what is actually happening in production</strong>. PLCs and machine controllers execute the physical process.</p>\n<div class=\"callout\"><b>Think of MES as the operational intelligence layer of manufacturing.</b>It gives business systems real shop-floor context and gives shop-floor teams a unified digital workflow.</div>\n</section>\n<section id=\"why\">\n<h2>Why does modern manufacturing need MES?</h2>\n<p>Manufacturing is more complex than it was a decade ago. Plants now handle multiple variants, shorter delivery cycles, tighter quality requirements, automated equipment, customer traceability demands and increasingly connected supply chains.</p>\n<div class=\"grid2\">\n<div class=\"mini\"><h4>Without MES</h4><p>Paper production sheets, isolated machine data, manual OEE, separate quality records and delayed production reporting.</p></div>\n<div class=\"mini\"><h4>With MES</h4><p>Real-time production, connected quality, genealogy, machine status, interlocks, dashboards and digital history.</p></div>\n</div>\n</section>\n<section id=\"visibility\">\n<h2>1. Real-time production visibility</h2>\n<p>MES gives production teams visibility while manufacturing is actually happening—not only after the shift has ended.</p>\n<ul><li>Planned vs actual production</li><li>Current SKU / model</li><li>Machine and line status</li><li>Downtime and micro-stoppages</li><li>Cycle time and takt adherence</li><li>Rejection and rework</li><li>Shift and line performance</li></ul>\n<p>The question changes from <strong>“How did yesterday perform?”</strong> to <strong>“What is happening now, and where should we intervene?”</strong></p>\n</section>\n<section id=\"traceability\">\n<h2>2. End-to-end traceability and product genealogy</h2>\n<p>A modern MES can create a digital production record against each component, sub-assembly or finished product.</p>\n<div class=\"callout\"><b>Raw Material → Supplier Batch → Sub-Assembly → Process → Inspection → Testing → Final Product</b>Each step can be connected to the final serial number, creating complete manufacturing genealogy.</div>\n<p>Typical data may include machine ID, operator, timestamp, torque, pressure, force, displacement, vision result, leak-test result, gauge result, process parameters and rework history.</p>\n</section>\n<section id=\"quality\">\n<h2>3. Process confirmation, quality and digital Poka-Yoke</h2>\n<p>MES should do more than collect data. It can also ensure that the manufacturing sequence is followed correctly.</p>\n<ul><li>Wrong SKU → cycle blocked</li><li>Torque NOK → next station blocked</li><li>Vision NOK → part sent for rework</li><li>Previous operation incomplete → next process interlocked</li></ul>\n<p>Quality data can be captured directly from vision systems, servo presses, leak testers, torque tools, gauges, CMMs and process sensors.</p>\n<div class=\"quote\">The objective moves from detecting defects after production to preventing incorrect processing during production.</div>\n</section>\n<section id=\"oee\">\n<h2>4. OEE, downtime and manufacturing loss analysis</h2>\n<p>MES can automatically calculate OEE and, more importantly, expose the losses behind the number.</p>\n<div class=\"grid2\">\n<div class=\"mini\"><h4>Availability losses</h4><p>Breakdown, setup, waiting for material, tool change, operator delay.</p></div>\n<div class=\"mini\"><h4>Performance losses</h4><p>Minor stops, reduced machine speed, extended cycle time.</p></div>\n<div class=\"mini\"><h4>Quality losses</h4><p>Rejection, rework, startup loss and process deviations.</p></div>\n<div class=\"mini\"><h4>Decision support</h4><p>Downtime Pareto, MTBF, MTTR, shift trends and bottleneck identification.</p></div>\n</div>\n</section>\n<section id=\"connectivity\">\n<h2>5. Connecting machines from different generations</h2>\n<p>Most plants are brownfield environments. They may include machines from multiple OEMs, multiple PLC platforms and different technology generations.</p>\n<p>A properly designed MES can connect machines using industrial interfaces such as OPC UA, MQTT, Modbus TCP/RTU, Ethernet/IP, Profinet, MTConnect, CNC interfaces, REST APIs and serial communication.</p>\n<div class=\"callout\"><b>Industry 4.0 does not always mean replacing old machines.</b>It often means adding the right connectivity layer so existing machines become visible, measurable and integrated.</div>\n</section>\n<section id=\"erp\">\n<h2>6. ERP and MES integration</h2>\n<p>ERP and MES serve different but complementary roles.</p>\n<div class=\"architecture\">\n<div class=\"arch-row\"><div class=\"arch-label\">Step 1</div><div class=\"arch-box\">ERP creates production order</div></div>\n<div class=\"arrow\">↓</div>\n<div class=\"arch-row\"><div class=\"arch-label\">Step 2</div><div class=\"arch-box\">MES receives order, SKU, routing and production context</div></div>\n<div class=\"arrow\">↓</div>\n<div class=\"arch-row\"><div class=\"arch-label\">Step 3</div><div class=\"arch-box\">Line executes production; MES captures actual process and quality data</div></div>\n<div class=\"arrow\">↓</div>\n<div class=\"arch-row\"><div class=\"arch-label\">Step 4</div><div class=\"arch-box\">Production confirmation and relevant results return to ERP</div></div>\n</div>\n</section>\n<section>\n<h2>7. Paperless manufacturing and digital work execution</h2>\n<p>MES can replace many disconnected paper and spreadsheet processes with structured digital workflows for production sheets, quality check sheets, setup approvals, maintenance records, rework records and process parameters.</p>\n<p>The real goal is not simply removing paper. It is making manufacturing information <strong>structured, searchable, accountable and actionable.</strong></p>\n</section>\n<section id=\"ai\">\n<h2>8. MES is the foundation for AI-ready manufacturing</h2>\n<p>Artificial intelligence in manufacturing is useful only when the underlying data is reliable and contextualized.</p>\n<p>An AI system needs to know which machine generated a signal, which component was being produced, what SKU was active, what happened before a fault, and whether the part was ultimately accepted or rejected.</p>\n<div class=\"quote\">AI needs context. MES provides that manufacturing context.</div>\n<p>This opens the door to predictive downtime, process anomaly detection, quality intelligence, energy optimization and natural-language manufacturing analytics.</p>\n</section>\n<section id=\"operatex\">\n<h2>Where OperateX fits</h2>\n<p><strong>OperateX by Thetavega</strong> is designed as a modular Manufacturing Execution and Manufacturing Intelligence platform connecting shop-floor equipment with production, quality, traceability and enterprise systems.</p>\n<div class=\"grid2\">\n<div class=\"mini\"><h4>Production</h4><p>Production monitoring, SKU/model management, digital work execution and production confirmation.</p></div>\n<div class=\"mini\"><h4>Traceability</h4><p>Serial tracking, genealogy, process history, material and component linkage.</p></div>\n<div class=\"mini\"><h4>Quality</h4><p>Inspection data, test results, process limits, interlocks and digital Poka-Yoke.</p></div>\n<div class=\"mini\"><h4>Intelligence</h4><p>OEE, downtime, dashboards, analytics, utility data and AI-ready manufacturing information.</p></div>\n</div>\n<p>Manufacturers do not need to digitize the entire factory on day one. A modular rollout can begin with machine monitoring, then expand into OEE, traceability, quality, ERP integration and plant-wide MES.</p>\n</section>\n<section>\n<h2>Start small. Connect. Measure. Improve. Scale.</h2>\n<p>MES implementation should not be treated only as an IT software project. Successful deployments require an understanding of machines, controls, manufacturing processes, quality, IT, OT and people.</p>\n<div class=\"callout\"><b>Connect → Collect → Contextualize → Analyze → Control → Optimize</b>This is a practical path from isolated shop-floor data to a connected and intelligent factory.</div>\n</section>\n<section>\n<h2>Conclusion</h2>\n<p>ERP remains essential for business planning. PLCs remain essential for machine control. But between them lies the actual manufacturing operation—and that is where MES plays its most important role.</p>\n<p>A Manufacturing Execution System connects <strong>machines, people, process, quality, production and data</strong>, creating the operational foundation for traceability, continuous improvement and future manufacturing intelligence.</p>\n</section>"
  },
  {
    "number": "02",
    "slug": "erp-vs-mes-vs-scada",
    "category": "Manufacturing Systems",
    "visual": "IT / OT",
    "eyebrow": "OperateX MES · Smart Manufacturing",
    "title": "ERP vs MES vs SCADA: What’s the Difference?",
    "excerpt": "ERP plans the business. MES manages manufacturing execution. SCADA monitors and supervises the process. Understanding how these systems work together is fundamental to building a connected factory.",
    "readingTime": "12–14 min read",
    "meta": [
      "12–14 min read",
      "Manufacturing Systems",
      "Industry 4.0 Foundation"
    ],
    "toc": [
      {
        "id": "simple",
        "label": "The simple difference"
      },
      {
        "id": "erp",
        "label": "What is ERP?"
      },
      {
        "id": "scada",
        "label": "What is SCADA?"
      },
      {
        "id": "mes",
        "label": "What is MES?"
      },
      {
        "id": "comparison",
        "label": "Side-by-side comparison"
      },
      {
        "id": "together",
        "label": "How they work together"
      },
      {
        "id": "example",
        "label": "Automotive example"
      },
      {
        "id": "itot",
        "label": "MES as the IT/OT bridge"
      },
      {
        "id": "operatex",
        "label": "Where OperateX fits"
      },
      {
        "id": "start",
        "label": "Where to start"
      }
    ],
    "contentHtml": "<h2 id=\"simple\">ERP, MES and SCADA Solve Different Manufacturing Problems</h2>\n<p class=\"lead\">Many factories already have ERP, PLCs, SCADA, machine databases and quality systems but still struggle with real-time production visibility, product traceability and shop-floor decision making. The reason is that each system works at a different layer of manufacturing.</p>\n<div class=\"callout\"><strong>The simplest way to remember it:</strong><br/>\nERP decides <b>what the business plans to make</b>. MES manages <b>how manufacturing is executed</b>. SCADA shows and supervises <b>what the equipment and process are doing right now</b>.</div>\n<p>The objective is therefore not to choose ERP instead of MES, or MES instead of SCADA. A strong digital manufacturing architecture allows each layer to perform the role it is designed for while information moves cleanly from enterprise planning to shop-floor execution and back.</p>\n<h2 id=\"erp\">What Is ERP?</h2>\n<p><strong>ERP — Enterprise Resource Planning</strong> — primarily manages the business and planning side of manufacturing. It coordinates information across functions such as sales, purchasing, inventory, finance, material planning, production planning and supply chain.</p>\n<h3>Typical ERP functions in manufacturing</h3>\n<ul>\n<li>Customer orders and demand planning</li>\n<li>Production orders and material requirement planning</li>\n<li>Bill of materials and inventory</li>\n<li>Purchasing and supplier management</li>\n<li>Warehouse transactions</li>\n<li>Finance, costing and invoicing</li>\n<li>High-level production confirmations</li>\n</ul>\n<div class=\"callout green\"><strong>ERP typically answers:</strong> What should we produce? How much should we produce? What material is required? What inventory is available? What is the order status? What is the financial impact?</div>\n<p>ERP is excellent at enterprise planning, but it usually does not need to know every machine signal, every tightening cycle or every process value against an individual product serial number.</p>\n<h2 id=\"scada\">What Is SCADA?</h2>\n<p><strong>SCADA — Supervisory Control and Data Acquisition</strong> — operates much closer to machines, PLCs, controllers and instruments. It is used to monitor and supervise industrial processes in real time.</p>\n<h3>Typical SCADA functions</h3>\n<ul>\n<li>Real-time process visualization</li>\n<li>Machine and equipment status</li>\n<li>Alarm and event monitoring</li>\n<li>Historical trends</li>\n<li>Process values such as temperature, pressure, flow and level</li>\n<li>Setpoint supervision</li>\n<li>Utility and infrastructure monitoring</li>\n<li>Supervisory commands where permitted by the control architecture</li>\n</ul>\n<div class=\"callout\"><strong>SCADA typically answers:</strong> Is the machine running? What is the current pressure? Which motor is in alarm? What was the temperature trend? Which process tag changed?</div>\n<p>SCADA is therefore powerful for process supervision. But a process tag by itself does not necessarily tell the complete manufacturing story. It may not know which serial number was present, which production order was active or which child components were assembled into the finished product.</p>\n<h2 id=\"mes\">What Is MES?</h2>\n<p><strong>MES — Manufacturing Execution System</strong> — sits between enterprise planning and shop-floor control. Its job is to manage and contextualize the actual execution of manufacturing.</p>\n<p>MES understands that a particular serial number, production order, model or SKU is moving through a defined manufacturing route. It connects this production context with machine results, operator actions, process parameters and quality outcomes.</p>\n<h3>Typical MES functions</h3>\n<ul>\n<li>Production execution and order tracking</li>\n<li>SKU, model and recipe management</li>\n<li>Process confirmation and station interlocking</li>\n<li>Traceability and parent-child genealogy</li>\n<li>Quality data collection</li>\n<li>OEE, downtime and loss analysis</li>\n<li>Digital check sheets and work instructions</li>\n<li>Rework and deviation management</li>\n<li>Machine and OT connectivity</li>\n<li>Production dashboards and manufacturing analytics</li>\n<li>ERP integration and production confirmation</li>\n</ul>\n<div class=\"callout green\"><strong>MES typically answers:</strong> Which serial number is being produced? Has every required operation passed? Which components went into this product? What torque or test result was recorded? Why did the line miss its target? Can this part move to the next station?</div>\n<h2 id=\"comparison\">ERP vs MES vs SCADA — Side-by-Side</h2>\n<table class=\"compare\">\n<thead><tr><th>Area</th><th>ERP</th><th>MES</th><th>SCADA</th></tr></thead>\n<tbody>\n<tr><td><b>Primary purpose</b></td><td>Business planning and resource management</td><td>Manufacturing execution and operational intelligence</td><td>Process monitoring and supervisory control</td></tr>\n<tr><td><b>Main users</b></td><td>Planning, finance, procurement, supply chain, management</td><td>Production, quality, supervisors, manufacturing engineering</td><td>Operators, maintenance, utilities, process teams</td></tr>\n<tr><td><b>Typical time scale</b></td><td>Days, weeks and months</td><td>Shifts, hours, cycles and events</td><td>Real time: seconds or faster</td></tr>\n<tr><td><b>Typical data</b></td><td>Orders, inventory, BOM, costing, purchasing</td><td>Serials, genealogy, quality, production, OEE, downtime</td><td>Tags, alarms, states, process values and trends</td></tr>\n<tr><td><b>Connection level</b></td><td>Enterprise applications</td><td>ERP + people + quality + machines</td><td>PLCs, controllers and instruments</td></tr>\n<tr><td><b>Traceability</b></td><td>Usually order/batch oriented</td><td>Detailed product and process genealogy</td><td>Process history, not normally full product genealogy</td></tr>\n<tr><td><b>Production context</b></td><td>High-level</td><td>Detailed and contextual</td><td>Equipment/process oriented</td></tr>\n</tbody>\n</table>\n<h2 id=\"together\">How ERP, MES and SCADA Work Together</h2>\n<p>A well-designed manufacturing stack creates a continuous digital flow:</p>\n<div class=\"flow\">\n<div class=\"flowgrid\">\n<div class=\"step\">ERP<br/><small>Plan &amp; order</small></div>\n<div class=\"arrow\">→</div>\n<div class=\"step\">MES<br/><small>Execute &amp; contextualize</small></div>\n<div class=\"arrow\">→</div>\n<div class=\"step\">SCADA / PLC<br/><small>Monitor &amp; control</small></div>\n</div>\n</div>\n<ol>\n<li><strong>ERP</strong> creates or releases the production order.</li>\n<li><strong>MES</strong> receives the order, model, routing and execution requirements.</li>\n<li>MES provides the correct production context to the shop floor.</li>\n<li><strong>PLC/SCADA/machines</strong> execute and monitor the physical process.</li>\n<li>Machine results, alarms and process values are captured.</li>\n<li><strong>MES contextualizes the data</strong> against the actual serial number, station, operation and order.</li>\n<li>MES updates traceability, quality, production and performance information.</li>\n<li>Required confirmations are sent back to <strong>ERP</strong>.</li>\n</ol>\n<p>This closes the loop between <strong>planning → execution → process → result → business confirmation</strong>.</p>\n<h2 id=\"example\">Example: Automotive Assembly Line</h2>\n<p>Consider a mixed-model automotive assembly line producing several variants on the same line.</p>\n<h3>ERP may provide</h3>\n<ul><li>Production order</li><li>Model and planned quantity</li><li>BOM and material information</li><li>Inventory and business transactions</li></ul>\n<h3>MES may manage</h3>\n<ul>\n<li>VIN or serial-number indexing</li><li>SKU identification and routing</li><li>Station-by-station process confirmation</li>\n<li>Torque results</li><li>Vision and inspection results</li><li>Leak-test data</li><li>Product genealogy</li>\n<li>OK/NOK interlocking</li><li>Rework</li><li>Production and quality analytics</li>\n</ul>\n<h3>SCADA / PLC may manage</h3>\n<ul><li>Conveyor and machine sequences</li><li>Motors, actuators and sensors</li><li>Equipment status</li><li>Process values</li><li>Machine alarms</li></ul>\n<div class=\"callout\"><strong>The difference is manufacturing context.</strong><br/>\nA PLC may know that a torque tool completed a cycle at 42 Nm. MES knows that the 42 Nm result belongs to a specific product serial number, at a specific station, for a specific model and production order—and that the result must be accepted before the product moves forward.</div>\n<h2>Why Do These Systems Sometimes Appear to Overlap?</h2>\n<p>Modern ERP, MES and SCADA platforms continue to add capabilities. ERP products may include manufacturing modules. SCADA platforms may include reports, historians and analytics. MES platforms may include machine connectivity and dashboards.</p>\n<p>That makes feature lists look similar. The correct architecture should instead define:</p>\n<ul>\n<li>Which system owns each type of data?</li>\n<li>Which system owns the production order?</li>\n<li>Which system makes the quality or routing decision?</li>\n<li>What level of response time is required?</li>\n<li>Is unit-level genealogy required?</li>\n<li>Which system provides the source of truth for machine state?</li>\n</ul>\n<h2 id=\"itot\">MES Is the Bridge Between IT and OT</h2>\n<div class=\"arch\">\n<div class=\"card\"><small>IT Layer</small><h4>ERP &amp; Enterprise</h4><p>Orders, planning, materials, inventory, finance and enterprise systems.</p></div>\n<div class=\"card\"><small>IT + OT Bridge</small><h4>MES</h4><p>Execution, traceability, quality, production context, OEE and intelligence.</p></div>\n<div class=\"card\"><small>OT Layer</small><h4>SCADA &amp; Controls</h4><p>Machines, PLCs, tags, process values, alarms and physical control.</p></div>\n</div>\n<p>Enterprise systems work with business objects such as orders and materials. Industrial systems work with tags, registers, signals and machine states. MES turns those raw signals into manufacturing context.</p>\n<div class=\"callout green\"><strong>Raw signal:</strong> PLC register = 38.7<br/><strong>Manufacturing context:</strong> Press force = 38.7 kN for Product Serial X, Station 20, Variant B, Production Order Y, Cycle Result = OK.</div>\n<h2 id=\"operatex\">Where Does OperateX Fit?</h2>\n<p><strong>OperateX by Thetavega</strong> is designed for the manufacturing execution and manufacturing intelligence layer, connecting enterprise systems with shop-floor equipment and production processes.</p>\n<p>Depending on the application, OperateX can connect with ERP, PLCs, CNC machines, SCADA, scanners, torque tools, vision systems, leak testers, servo presses, gauging systems, energy meters and other third-party industrial applications.</p>\n<p>The objective is not to replace every existing system. It is to create a connected architecture where manufacturing data becomes <strong>traceable, contextual and actionable</strong>.</p>\n<h3>OperateX can support</h3>\n<ul>\n<li>Production monitoring</li><li>Machine monitoring</li><li>Traceability and genealogy</li><li>Process confirmation</li>\n<li>Quality data collection</li><li>OEE and downtime</li><li>SKU and recipe management</li><li>Digital check sheets</li>\n<li>ERP integration</li><li>Dashboards and manufacturing analytics</li>\n</ul>\n<h2 id=\"start\">Where Should a Manufacturer Start?</h2>\n<table class=\"compare\">\n<thead><tr><th>If the problem is...</th><th>Start with...</th></tr></thead>\n<tbody>\n<tr><td>No visibility of actual production</td><td>Production and machine monitoring</td></tr>\n<tr><td>Manual downtime reports</td><td>OEE and downtime management</td></tr>\n<tr><td>Difficult product investigation</td><td>Traceability and genealogy</td></tr>\n<tr><td>Missed or incorrect operations</td><td>Process confirmation and interlocking</td></tr>\n<tr><td>Disconnected quality equipment</td><td>Digital quality data collection</td></tr>\n<tr><td>ERP has limited shop-floor visibility</td><td>MES–ERP integration</td></tr>\n<tr><td>Legacy equipment is isolated</td><td>OT connectivity and brownfield integration</td></tr>\n</tbody>\n</table>\n<h2>Conclusion</h2>\n<p>ERP, MES and SCADA are not competing technologies. They are complementary layers of a connected manufacturing architecture.</p>\n<ul>\n<li><strong>ERP</strong> manages enterprise planning and business resources.</li>\n<li><strong>MES</strong> manages and contextualizes manufacturing execution.</li>\n<li><strong>SCADA</strong> monitors and supervises machines and industrial processes.</li>\n</ul>\n<div class=\"callout\"><strong>ERP tells the factory what to make.</strong><br/><strong>MES ensures it is executed correctly and traceably.</strong><br/><strong>SCADA and controls show and manage what the equipment is doing.</strong></div>\n<p>For manufacturers moving toward Industry 4.0, the objective should not be to collect more disconnected data. It should be to build an architecture where every piece of manufacturing data has the right context, ownership and purpose.</p>"
  }
];

const Blog = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(0);

  // Scroll to the requested section when the URL hash changes.
  // /blogs#insights -> hero section
  // /blogs#blogs    -> blog cards section
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!location.hash) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const sectionId = location.hash.replace("#", "");
      const element = document.getElementById(sectionId);

      if (element) {
        const navbarOffset = 90;
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
          top: elementPosition - navbarOffset,
          behavior: "smooth",
        });
      }
    }, 120);

    return () => clearTimeout(timer);
  }, [location.hash]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % blogs.length);
    }, 4400);
    return () => clearInterval(timer);
  }, []);

  const featured = blogs[active];

  return (
    <main className="opx-journal">
      <section id="insights" className="opx-journal-hero">
        <div className="opx-journal-noise" />
        <motion.div
          className="opx-journal-sun"
          animate={{ rotate: 360, scale: [1, 1.06, 1] }}
          transition={{ rotate: { duration: 28, repeat: Infinity, ease: "linear" }, scale: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
        />
        <motion.div className="opx-float-mark mark-o" animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>O</motion.div>
        <motion.div className="opx-float-mark mark-x" animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }} transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}>X</motion.div>
        <motion.div className="opx-float-dot dot-a" animate={{ scale: [1, 1.35, 1] }} transition={{ duration: 3.2, repeat: Infinity }} />
        <motion.div className="opx-float-dot dot-b" animate={{ scale: [1, .72, 1] }} transition={{ duration: 3.9, repeat: Infinity }} />

        <div className="opx-journal-container opx-journal-hero-grid">
          <motion.div
            className="opx-journal-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="opx-journal-overline">
              <span>OPERATEX JOURNAL</span>
              <i />
              MANUFACTURING, EXPLAINED
            </div>

            <h1>
              Practical ideas for
              <span> better factories.</span>
            </h1>

            <p>
              Clear, useful guides on MES, manufacturing systems, industrial
              connectivity and the digital architecture behind connected production.
            </p>

            <div className="opx-journal-meta-row">
              <div><strong>02</strong><span>Published Guides</span></div>
              <div><strong>MES</strong><span>Execution Systems</span></div>
              <div><strong>IT ↔ OT</strong><span>Factory Integration</span></div>
            </div>
          </motion.div>

          <motion.div
            className="opx-insight-visual"
            initial={{ opacity: 0, x: 34, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.82, delay: 0.08 }}
          >
            <div className="opx-insight-orbit orbit-one" />
            <div className="opx-insight-orbit orbit-two" />

            <motion.div
              className="opx-insight-core"
              animate={{ opacity: [0.94, 1, 0.94] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <FiBookOpen />
              <strong>INSIGHTS</strong>
              <small>FACTORY KNOWLEDGE</small>
            </motion.div>

            <motion.div
              className="opx-topic-float topic-mes"
              animate={{ y: [0, -9, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 4.1, repeat: Infinity, ease: "easeInOut" }}
            >
              <FiCpu />
              <span><strong>MES</strong><small>EXECUTION</small></span>
            </motion.div>

            <motion.div
              className="opx-topic-float topic-erp"
              animate={{ y: [0, 8, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <FiLayers />
              <span><strong>ERP</strong><small>PLANNING</small></span>
            </motion.div>

            <motion.div
              className="opx-topic-float topic-scada"
              animate={{ y: [0, -7, 0], x: [0, 4, 0] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <FiActivity />
              <span><strong>SCADA</strong><small>MONITORING</small></span>
            </motion.div>

            <motion.div
              className="opx-topic-float topic-data"
              animate={{ y: [0, 7, 0], x: [0, -4, 0] }}
              transition={{ duration: 4.9, repeat: Infinity, ease: "easeInOut" }}
            >
              <FiDatabase />
              <span><strong>DATA</strong><small>CONTEXT</small></span>
            </motion.div>

            <motion.button
              key={featured.slug}
              className="opx-featured-floating"
              onClick={() => navigate(`/blogs/${featured.slug}`)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.34 }}
            >
              <span>FEATURED / {featured.number}</span>
              <strong>{featured.title}</strong>
              <FiArrowRight />
            </motion.button>

            <div className="opx-story-switch opx-story-switch-open">
              {blogs.map((item, index) => (
                <button
                  key={item.slug}
                  className={active === index ? "active" : ""}
                  onClick={() => setActive(index)}
                  aria-label={`Show ${item.title}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="blogs" className="opx-journal-list">
        <div className="opx-journal-container">
          <motion.div
            className="opx-journal-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <span>FOUNDATION SERIES</span>
            <h2>Start with the systems that shape modern manufacturing.</h2>
            <p>
              Two practical guides covering the manufacturing execution layer and
              the relationship between ERP, MES and SCADA.
            </p>
          </motion.div>

          <div className="opx-journal-card-grid">
            {blogs.map((blog, index) => (
              <motion.article
                className="opx-journal-card"
                key={blog.slug}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => navigate(`/blogs/${blog.slug}`)}
              >
                <div className="opx-card-index">{blog.number}</div>
                <div className="opx-card-meta"><FiClock /> {blog.readingTime}</div>

                <div className={`opx-card-visual visual-${index + 1}`}>
                  {index === 0 ? (
                    <>
                      <div className="v-node top">ERP</div>
                      <motion.div className="v-pulse" animate={{ y: [0, 62, 124] }} transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }} />
                      <div className="v-node center">MES</div>
                      <div className="v-node bottom">SHOP FLOOR</div>
                    </>
                  ) : (
                    <>
                      <div className="sys sys-erp">ERP</div>
                      <motion.i animate={{ x: [-6, 6, -6] }} transition={{ duration: 1.7, repeat: Infinity }}><FiArrowRight /></motion.i>
                      <div className="sys sys-mes">MES</div>
                      <motion.i animate={{ x: [-6, 6, -6] }} transition={{ duration: 1.7, repeat: Infinity, delay: .2 }}><FiArrowRight /></motion.i>
                      <div className="sys sys-scada">SCADA</div>
                    </>
                  )}
                </div>

                <div className="opx-card-category">{blog.category}</div>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>

                <div className="opx-card-read">
                  Read article <FiArrowRight />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        className="opx-journal-cta"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: .3 }}
      >
        <div>
          <span>OPERATEX / THETAVEGA</span>
          <h2>Need a practical manufacturing digitalization roadmap?</h2>
          <p>Talk through your machines, production flow, quality systems and enterprise integration needs.</p>
        </div>
        <button onClick={() => navigate("/contact")}>
          Talk to Our Engineers <FiArrowRight />
        </button>
      </motion.section>

      <style>{`
        .opx-journal,
        .opx-journal * {
          box-sizing: border-box;
          font-family: "Montserrat", sans-serif !important;
        }

        .opx-journal {
          --orange:#ee6d2d;
          --burnt:#b74621;
          --amber:#d99a49;
          --cream:#fff8f1;
          --paper:#fffdf9;
          --ink:#20242a;
          --text:#5b6169;
          width:100%;
          max-width:100%;
          overflow-x:hidden;
          background:#fff;
          color:var(--ink);
        }

        .opx-journal-container {
          width:min(1300px,calc(100% - 64px));
          margin:0 auto;
          position:relative;
          z-index:2;
        }

        .opx-journal-hero {
          position:relative;
          overflow:hidden;
          padding:108px 0 0;
          background:
            radial-gradient(circle at 82% 18%,rgba(238,109,45,.22),transparent 26%),
            radial-gradient(circle at 15% 75%,rgba(217,154,73,.16),transparent 28%),
            linear-gradient(135deg,#fffaf5 0%,#f8e8d8 54%,#f5d8c0 100%);
          color:var(--ink);
          border-bottom:1px solid rgba(92,57,38,.08);
        }

        .opx-journal-noise {
          position:absolute;
          inset:0;
          opacity:.32;
          background-image:radial-gradient(rgba(75,47,32,.09) .8px,transparent .8px);
          background-size:18px 18px;
          mask-image:linear-gradient(to bottom,#000,transparent 92%);
        }

        .opx-journal-sun {
          position:absolute;
          width:360px;
          height:360px;
          right:-90px;
          top:-105px;
          border-radius:50%;
          border:1px dashed rgba(126,66,33,.15);
          box-shadow:
            0 0 0 38px rgba(238,109,45,.035),
            0 0 0 78px rgba(238,109,45,.025);
        }

        .opx-journal-hero-grid {
          display:grid;
          grid-template-columns:minmax(0,1fr) minmax(440px,.86fr);
          gap:clamp(42px,6vw,88px);
          align-items:center;
          padding-bottom:70px;
        }

        .opx-journal-overline {
          display:flex;
          align-items:center;
          flex-wrap:wrap;
          gap:9px;
          color:#7d5a44;
          font-size:10px;
          line-height:1.4;
          font-weight:650;
          letter-spacing:1.35px;
        }

        .opx-journal-overline span {
          padding:6px 9px;
          border-radius:999px;
          background:#2b2927;
          color:#fff7ef;
          font-size:9px;
          letter-spacing:1px;
        }

        .opx-journal-overline i {
          width:5px;height:5px;border-radius:50%;background:var(--orange);
        }

        .opx-journal-copy h1 {
          max-width:720px;
          margin:18px 0 18px;
          color:#23211f;
          font-size:clamp(2.65rem,4.4vw,4.25rem);
          line-height:1.04;
          font-weight:620;
          letter-spacing:-.045em;
        }

        .opx-journal-copy h1 span {
          display:block;
          color:var(--burnt);
        }

        .opx-journal-copy > p {
          max-width:650px;
          margin:0;
          color:#625b55;
          font-size:clamp(.94rem,1vw,1.03rem);
          line-height:1.72;
          font-weight:430;
        }

        .opx-journal-meta-row {
          display:grid;
          grid-template-columns:repeat(3,minmax(0,1fr));
          gap:10px;
          margin-top:30px;
          max-width:650px;
        }

        .opx-journal-meta-row > div {
          min-width:0;
          padding:14px 15px;
          border-top:1px solid rgba(65,48,38,.16);
        }

        .opx-journal-meta-row strong {
          display:block;
          color:#27231f;
          font-size:1.05rem;
          font-weight:620;
        }

        .opx-journal-meta-row span {
          display:block;
          margin-top:4px;
          color:#84786f;
          font-size:8.5px;
          line-height:1.35;
          font-weight:550;
          text-transform:uppercase;
          letter-spacing:.65px;
        }

        .opx-journal-board-wrap {
          width:min(550px,100%);
          justify-self:center;
          min-width:0;
        }

        .opx-journal-board {
          position:relative;
          padding:18px;
          border-radius:26px;
          background:#272522;
          color:#fff;
          box-shadow:0 30px 70px rgba(72,46,29,.2);
          overflow:hidden;
        }

        .opx-journal-board::before {
          content:"";
          position:absolute;
          inset:0;
          background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),
                           linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);
          background-size:30px 30px;
          opacity:.65;
        }

        .opx-board-top {
          position:relative;
          z-index:2;
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:12px;
          color:rgba(255,255,255,.48);
          font-size:8.5px;
          font-weight:650;
          letter-spacing:1.2px;
        }

        .opx-board-top b {
          display:flex;align-items:center;gap:6px;color:#f3a565;font-size:8px;
        }

        .opx-board-top b i {
          width:6px;height:6px;border-radius:50%;background:#49d89b;
          box-shadow:0 0 0 4px rgba(73,216,155,.09);
        }

        .opx-board-stage {
          position:relative;
          height:325px;
          margin-top:13px;
          border-radius:20px;
          overflow:hidden;
          background:
            radial-gradient(circle at center,rgba(238,109,45,.15),transparent 28%),
            rgba(255,255,255,.025);
          border:1px solid rgba(255,255,255,.07);
        }

        .opx-board-line {
          position:absolute;
          left:50%;
          top:50%;
          background:linear-gradient(90deg,transparent,#ee6d2d,transparent);
          transform-origin:center;
          opacity:.65;
        }
        .line-a { width:72%;height:1px;margin-left:-36%; }
        .line-b { width:1px;height:72%;margin-top:-36%;background:linear-gradient(180deg,transparent,#ee6d2d,transparent); }

        .opx-signal-card {
          position:absolute;
          z-index:3;
          width:112px;
          min-height:58px;
          display:flex;
          align-items:center;
          gap:8px;
          padding:10px;
          border-radius:14px;
          background:#34312e;
          border:1px solid rgba(255,255,255,.1);
          box-shadow:0 12px 30px rgba(0,0,0,.2);
        }
        .opx-signal-card svg { flex:0 0 auto;color:#f18a50;font-size:18px }
        .opx-signal-card strong { display:block;font-size:11px;font-weight:620 }
        .opx-signal-card small { display:block;margin-top:2px;color:rgba(255,255,255,.38);font-size:6.5px;letter-spacing:.8px }
        .opx-signal-card.erp { left:7%;top:10% }
        .opx-signal-card.mes { right:7%;top:42%;border-color:rgba(238,109,45,.38);background:linear-gradient(135deg,#4a2d20,#352b26) }
        .opx-signal-card.scada { left:7%;bottom:9% }

        .opx-board-core {
          position:absolute;
          left:50%;top:50%;
          width:105px;height:105px;
          transform:translate(-50%,-50%);
          display:flex;flex-direction:column;align-items:center;justify-content:center;
          border-radius:50%;
          background:#191817;
          border:1px solid rgba(255,255,255,.11);
          box-shadow:0 0 0 12px rgba(238,109,45,.04);
          z-index:4;
        }
        .opx-board-core svg { color:#ef7b3d;font-size:26px }
        .opx-board-core span { margin-top:6px;font-size:8px;font-weight:650;letter-spacing:1.2px;color:rgba(255,255,255,.7) }

        .opx-featured-story {
          position:relative;
          z-index:3;
          width:100%;
          margin-top:14px;
          display:grid;
          grid-template-columns:auto minmax(0,1fr) 22px;
          align-items:center;
          gap:10px;
          padding:12px 13px;
          border-radius:13px;
          border:1px solid rgba(255,255,255,.08);
          background:#302d2a;
          color:#fff;
          text-align:left;
          cursor:pointer;
        }
        .opx-featured-story > span { color:#f3995d;font-size:7.5px;font-weight:650;letter-spacing:.85px }
        .opx-featured-story strong { min-width:0;font-size:10.5px;line-height:1.4;font-weight:560 }
        .opx-featured-story svg { color:#f3995d }

        .opx-story-switch {
          position:relative;z-index:3;
          display:flex;justify-content:center;gap:6px;margin-top:12px;
        }
        .opx-story-switch button {
          width:7px;height:7px;padding:0;border:0;border-radius:999px;
          background:rgba(255,255,255,.18);cursor:pointer;transition:.25s ease;
        }
        .opx-story-switch button.active { width:24px;background:#ef7b3d }

        .opx-journal-ticker {
          position:relative;
          z-index:2;
          overflow:hidden;
          border-top:1px solid rgba(74,48,31,.09);
          border-bottom:1px solid rgba(74,48,31,.09);
          background:rgba(255,255,255,.42);
        }
        .opx-journal-ticker > div {
          width:max-content;
          display:flex;align-items:center;gap:22px;
          padding:12px 0;
          white-space:nowrap;
        }
        .opx-journal-ticker span {
          color:#755c4d;font-size:8.5px;font-weight:650;letter-spacing:1.1px;
        }
        .opx-journal-ticker i { width:4px;height:4px;border-radius:50%;background:#e8793c }

        .opx-journal-list {
          padding:88px 0 96px;
          background:linear-gradient(180deg,#fff,#faf7f3);
        }

        .opx-journal-heading {
          max-width:820px;
          margin-bottom:38px;
        }
        .opx-journal-heading > span {
          color:var(--burnt);
          font-size:9px;font-weight:650;letter-spacing:1.5px;
        }
        .opx-journal-heading h2 {
          margin:8px 0 12px;
          font-size:clamp(1.85rem,3vw,2.85rem);
          line-height:1.13;
          font-weight:610;
          letter-spacing:-.03em;
        }
        .opx-journal-heading p {
          max-width:700px;margin:0;color:var(--text);
          font-size:.93rem;line-height:1.68;font-weight:430;
        }

        .opx-journal-card-grid {
          display:grid;
          grid-template-columns:repeat(2,minmax(0,1fr));
          gap:20px;
        }

        .opx-journal-card {
          position:relative;
          min-width:0;
          padding:25px;
          border-radius:22px;
          border:1px solid rgba(70,50,38,.09);
          background:#fff;
          box-shadow:0 15px 42px rgba(65,45,31,.055);
          cursor:pointer;
          overflow:hidden;
        }
        .opx-journal-card::before {
          content:"";
          position:absolute;left:0;top:0;width:100%;height:4px;
          background:linear-gradient(90deg,var(--burnt),var(--orange),var(--amber));
          transform:scaleX(.22);transform-origin:left;transition:.3s ease;
        }
        .opx-journal-card:hover::before { transform:scaleX(1) }

        .opx-card-index {
          position:absolute;right:22px;top:17px;
          color:#eee8e2;font-size:2rem;font-weight:620;letter-spacing:-.05em;
        }
        .opx-card-meta {
          display:flex;align-items:center;gap:6px;
          color:#85796f;font-size:9.5px;font-weight:550;
        }
        .opx-card-meta svg { color:var(--orange) }

        .opx-card-visual {
          position:relative;
          height:130px;
          margin:20px 0 22px;
          border-radius:17px;
          overflow:hidden;
          background:#292724;
          color:#fff;
        }

        .visual-1 {
          display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;
        }
        .visual-1::before {
          content:"";position:absolute;left:50%;top:18px;bottom:18px;width:1px;
          background:linear-gradient(transparent,#f18045,transparent);
        }
        .v-node {
          position:relative;z-index:2;
          min-width:112px;padding:7px 12px;border-radius:999px;text-align:center;
          background:#35322f;border:1px solid rgba(255,255,255,.09);
          font-size:8px;font-weight:600;letter-spacing:.6px;
        }
        .v-node.center { background:linear-gradient(135deg,#a83e1e,#e97437);font-size:10px }
        .v-pulse {
          position:absolute;left:calc(50% - 3px);top:15px;
          width:6px;height:6px;border-radius:50%;background:#ffc18d;z-index:3;
          box-shadow:0 0 0 4px rgba(255,193,141,.08);
        }

        .visual-2 {
          display:flex;align-items:center;justify-content:center;gap:9px;padding:15px;
        }
        .visual-2 .sys {
          min-width:70px;padding:10px 8px;border-radius:11px;text-align:center;
          border:1px solid rgba(255,255,255,.09);background:#35322f;
          font-size:8px;font-weight:600;
        }
        .visual-2 .sys-mes { background:linear-gradient(135deg,#a83e1e,#e97437);font-size:9.5px }
        .visual-2 i { display:flex;color:#f18a50 }

        .opx-card-category {
          color:var(--burnt);
          font-size:8.5px;font-weight:650;letter-spacing:1.1px;text-transform:uppercase;
        }
        .opx-journal-card h3 {
          margin:7px 0 10px;
          padding-right:26px;
          color:#28241f;
          font-size:clamp(1.32rem,1.8vw,1.75rem);
          line-height:1.22;
          font-weight:610;
          letter-spacing:-.025em;
        }
        .opx-journal-card p {
          margin:0;
          color:#646a72;
          font-size:.9rem;
          line-height:1.66;
          font-weight:430;
        }
        .opx-card-read {
          display:flex;align-items:center;gap:7px;margin-top:18px;
          color:var(--burnt);font-size:10.5px;font-weight:620;
        }

        .opx-journal-cta {
          width:min(1280px,92%);
          margin:0 auto 62px;
          padding:36px 40px;
          display:grid;
          grid-template-columns:minmax(0,1fr) auto;
          align-items:center;
          gap:30px;
          border-radius:22px;
          background:linear-gradient(135deg,#2b2825,#3a302a);
          color:#fff;
        }
        .opx-journal-cta span { color:#f3a565;font-size:8.5px;font-weight:650;letter-spacing:1.25px }
        .opx-journal-cta h2 { margin:7px 0 8px;font-size:clamp(1.45rem,2.3vw,2rem);font-weight:600;line-height:1.25 }
        .opx-journal-cta p { max-width:700px;margin:0;color:rgba(255,255,255,.62);font-size:.9rem;line-height:1.65 }
        .opx-journal-cta button {
          border:0;border-radius:999px;padding:12px 18px;
          display:inline-flex;align-items:center;justify-content:center;gap:8px;
          background:linear-gradient(135deg,#b74621,#ee6d2d);
          color:#fff;font-size:10.5px;font-weight:620;cursor:pointer;
        }


        /* ============================================================
           HERO V2 — WARM INDUSTRIAL / OPEN CONSTELLATION
        ============================================================ */

        .opx-journal-hero {
          padding:104px 0 76px;
          background:
            radial-gradient(circle at 16% 18%, rgba(238,109,45,.085), transparent 24%),
            radial-gradient(circle at 78% 66%, rgba(217,154,73,.10), transparent 25%),
            linear-gradient(135deg,#fffdf9 0%,#fff8ed 48%,#f8f3ec 100%);
          border-bottom:1px solid rgba(48,42,37,.07);
        }

        .opx-journal-noise {
          opacity:.20;
          background-image:
            linear-gradient(rgba(63,53,45,.055) 1px,transparent 1px),
            linear-gradient(90deg,rgba(63,53,45,.055) 1px,transparent 1px);
          background-size:42px 42px;
          mask-image:radial-gradient(circle at 65% 40%,#000 0%,transparent 74%);
        }

        .opx-journal-sun {
          width:390px;
          height:390px;
          right:-150px;
          top:-155px;
          border-color:rgba(238,109,45,.16);
          box-shadow:
            0 0 0 42px rgba(238,109,45,.025),
            0 0 0 90px rgba(238,109,45,.014);
        }

        .opx-float-mark {
          position:absolute;
          z-index:1;
          color:rgba(183,70,33,.065);
          font-size:clamp(5rem,10vw,10rem);
          line-height:1;
          font-weight:700;
          pointer-events:none;
          user-select:none;
        }
        .opx-float-mark.mark-o { left:-24px;bottom:34px }
        .opx-float-mark.mark-x { right:3%;top:88px }

        .opx-float-dot {
          position:absolute;
          z-index:1;
          width:10px;height:10px;
          border-radius:50%;
          background:var(--orange);
          opacity:.3;
          pointer-events:none;
        }
        .opx-float-dot.dot-a { left:43%;top:118px }
        .opx-float-dot.dot-b { right:34%;bottom:84px;width:6px;height:6px;background:#2b2927 }

        .opx-journal-hero-grid {
          grid-template-columns:minmax(0,1.02fr) minmax(430px,.98fr);
          gap:clamp(44px,6vw,90px);
          padding-bottom:0;
        }

        .opx-journal-copy h1 {
          font-size:clamp(2.35rem,3.75vw,3.65rem);
          line-height:1.07;
          font-weight:610;
        }

        .opx-journal-copy > p {
          max-width:620px;
          color:#55514d;
          font-size:clamp(.9rem,.94vw,.98rem);
        }

        .opx-insight-visual {
          position:relative;
          width:min(560px,100%);
          min-height:470px;
          justify-self:center;
          min-width:0;
        }

        .opx-insight-visual::before {
          content:"";
          position:absolute;
          left:50%;
          top:50%;
          width:64%;
          aspect-ratio:1;
          transform:translate(-50%,-50%);
          border-radius:50%;
          background:radial-gradient(circle,rgba(238,109,45,.12),rgba(238,109,45,.035) 48%,transparent 70%);
        }

        .opx-insight-orbit {
          position:absolute;
          left:50%;
          top:50%;
          border-radius:50%;
          border:1px dashed rgba(64,53,45,.18);
          transform:translate(-50%,-50%);
          animation:opxInsightSpin 24s linear infinite;
        }
        .opx-insight-orbit.orbit-one { width:330px;height:330px }
        .opx-insight-orbit.orbit-two { width:430px;height:430px;animation-direction:reverse;animation-duration:34s }

        .opx-insight-orbit::after {
          content:"";
          position:absolute;
          width:9px;height:9px;
          border-radius:50%;
          background:var(--orange);
          top:-5px;left:50%;
          box-shadow:0 0 0 6px rgba(238,109,45,.08);
        }

        .opx-insight-core {
          position:absolute;
          left:50%;top:50%;
          width:150px;height:150px;
          transform:translate(-50%,-50%);
          display:flex;flex-direction:column;align-items:center;justify-content:center;
          text-align:center;
          border-radius:50%;
          color:#fff;
          background:linear-gradient(145deg,#22211f,#37322e);
          box-shadow:0 22px 50px rgba(44,37,32,.18),0 0 0 14px rgba(238,109,45,.055);
          z-index:3;
        }

        .opx-insight-core svg { color:#f28a4e;font-size:29px;margin-bottom:7px }
        .opx-insight-core strong { font-size:13px;font-weight:650;letter-spacing:.4px }
        .opx-insight-core small { margin-top:4px;color:rgba(255,255,255,.45);font-size:6.8px;letter-spacing:1px }

        .opx-topic-float {
          position:absolute;
          z-index:4;
          min-width:122px;
          display:flex;
          align-items:center;
          gap:8px;
          padding:10px 12px;
          border-radius:14px;
          border:1px solid rgba(48,42,37,.09);
          background:rgba(255,255,255,.93);
          box-shadow:0 13px 30px rgba(66,50,38,.09);
          backdrop-filter:blur(12px);
        }

        .opx-topic-float svg { flex:0 0 auto;color:var(--orange);font-size:17px }
        .opx-topic-float strong { display:block;color:#2b2927;font-size:10px;font-weight:620 }
        .opx-topic-float small { display:block;margin-top:2px;color:#8a817a;font-size:6.3px;letter-spacing:.7px }
        .opx-topic-float.topic-mes { left:2%;top:13% }
        .opx-topic-float.topic-erp { right:2%;top:16% }
        .opx-topic-float.topic-scada { left:1%;bottom:18% }
        .opx-topic-float.topic-data { right:0;bottom:21% }

        .opx-featured-floating {
          position:absolute;
          left:50%;
          bottom:2px;
          transform:translateX(-50%);
          z-index:5;
          width:min(430px,88%);
          display:grid;
          grid-template-columns:auto minmax(0,1fr) 20px;
          align-items:center;
          gap:9px;
          padding:12px 14px;
          border-radius:14px;
          border:1px solid rgba(183,70,33,.14);
          background:rgba(255,251,246,.96);
          color:#2b2927;
          text-align:left;
          cursor:pointer;
          box-shadow:0 16px 38px rgba(68,48,34,.10);
        }

        .opx-featured-floating > span { color:var(--burnt);font-size:7.5px;font-weight:650;letter-spacing:.8px }
        .opx-featured-floating strong { min-width:0;font-size:10px;line-height:1.4;font-weight:570 }
        .opx-featured-floating svg { color:var(--orange) }

        .opx-story-switch-open {
          position:absolute;
          left:50%;bottom:-24px;
          transform:translateX(-50%);
          margin:0;
          z-index:6;
        }

        .opx-story-switch-open button { background:rgba(49,42,36,.18) }
        .opx-story-switch-open button.active { background:var(--orange) }

        .opx-journal-ticker { display:none !important }

        @keyframes opxInsightSpin {
          from { transform:translate(-50%,-50%) rotate(0deg) }
          to { transform:translate(-50%,-50%) rotate(360deg) }
        }

        @media(max-width:1080px) {
          .opx-journal-hero-grid { grid-template-columns:1fr; }
          .opx-journal-copy { max-width:850px }
          .opx-journal-board-wrap { width:min(620px,100%) }
        }

        @media(max-width:760px) {
          .opx-journal-container { width:calc(100% - 28px) }
          .opx-journal-hero { padding-top:86px }
          .opx-journal-hero-grid { padding-bottom:52px;gap:35px }
          .opx-journal-copy h1 { font-size:clamp(2.25rem,10vw,3rem) }
          .opx-journal-copy > p { font-size:.9rem }
          .opx-journal-meta-row { gap:5px }
          .opx-journal-meta-row > div { padding:11px 8px }
          .opx-journal-meta-row strong { font-size:.9rem }
          .opx-journal-meta-row span { font-size:7px }
          .opx-board-stage { height:290px }
          .opx-signal-card { width:94px;min-height:52px;padding:8px }
          .opx-signal-card strong { font-size:9.5px }
          .opx-board-core { width:92px;height:92px }
          .opx-featured-story { grid-template-columns:1fr 20px }
          .opx-featured-story > span { grid-column:1/-1 }
          .opx-journal-list { padding:68px 0 76px }
          .opx-journal-card-grid { grid-template-columns:1fr }
          .opx-journal-card { padding:21px }
          .opx-journal-heading h2 { font-size:1.85rem }
          .opx-journal-cta { grid-template-columns:1fr;padding:28px 22px }
          .opx-journal-cta button { width:100%;min-height:44px }
        }

        @media(max-width:390px) {
          .opx-journal-container { width:calc(100% - 22px) }
          .opx-board-stage { height:270px }
          .opx-signal-card { width:82px }
          .opx-signal-card svg { font-size:15px }
          .opx-card-visual { height:118px }
        }


        @media(max-width:1080px) {
          .opx-insight-visual { width:min(600px,100%);min-height:455px }
        }

        @media(max-width:760px) {
          .opx-journal-hero { padding:84px 0 66px }
          .opx-journal-copy h1 { font-size:clamp(2.05rem,9vw,2.7rem) }
          .opx-insight-visual { min-height:400px;width:min(500px,100%) }
          .opx-insight-orbit.orbit-one { width:270px;height:270px }
          .opx-insight-orbit.orbit-two { width:350px;height:350px }
          .opx-insight-core { width:128px;height:128px }
          .opx-topic-float { min-width:100px;padding:8px 9px;gap:6px }
          .opx-topic-float strong { font-size:8.8px }
          .opx-topic-float small { font-size:5.7px }
          .opx-topic-float.topic-mes { left:0;top:13% }
          .opx-topic-float.topic-erp { right:0;top:16% }
          .opx-topic-float.topic-scada { left:0;bottom:20% }
          .opx-topic-float.topic-data { right:0;bottom:22% }
          .opx-featured-floating { width:94%;bottom:-2px;grid-template-columns:1fr 20px }
          .opx-featured-floating > span { grid-column:1/-1 }
          .opx-story-switch-open { bottom:-26px }
        }

        @media(max-width:390px) {
          .opx-insight-visual { min-height:365px }
          .opx-insight-orbit.orbit-one { width:235px;height:235px }
          .opx-insight-orbit.orbit-two { width:305px;height:305px }
          .opx-insight-core { width:116px;height:116px }
          .opx-topic-float { min-width:88px;padding:7px 8px }
          .opx-topic-float svg { font-size:14px }
          .opx-topic-float strong { font-size:8px }
          .opx-topic-float small { display:none }
          .opx-float-mark { display:none }
        }


        /* ============================================================
           FINAL TABLET + MOBILE RESPONSIVE HARDENING
        ============================================================ */

        .opx-journal,
        .opx-journal section,
        .opx-journal article,
        .opx-journal div {
          min-width:0;
        }

        .opx-journal-copy h1,
        .opx-journal-copy p,
        .opx-journal-card h2,
        .opx-journal-card h3,
        .opx-journal-card p,
        .opx-featured-floating strong {
          overflow-wrap:anywhere;
          word-break:normal;
        }

        @media(max-width:1080px) {
          .opx-journal-container {
            width:min(100% - 40px, 900px);
          }

          .opx-journal-hero-grid {
            grid-template-columns:1fr;
            gap:30px;
          }

          .opx-journal-copy {
            max-width:760px;
          }

          .opx-insight-visual {
            width:min(560px,100%);
            justify-self:center;
            overflow:hidden;
          }

          .opx-journal-card-grid {
            grid-template-columns:repeat(2,minmax(0,1fr));
          }

          .opx-journal-cta {
            width:min(100% - 40px,900px);
          }
        }

        @media(max-width:820px) {
          .opx-journal-container {
            width:calc(100% - 32px);
          }

          .opx-journal-hero {
            padding:82px 0 62px;
          }

          .opx-journal-hero-grid {
            gap:24px;
          }

          .opx-journal-copy h1 {
            font-size:clamp(2rem,7.4vw,2.75rem);
          }

          .opx-journal-copy > p {
            font-size:.91rem;
            line-height:1.68;
          }

          .opx-journal-meta-row {
            grid-template-columns:repeat(3,minmax(0,1fr));
            gap:6px;
          }

          .opx-journal-meta-row > div {
            padding:11px 8px;
          }

          .opx-journal-meta-row strong {
            font-size:.92rem;
          }

          .opx-journal-meta-row span {
            font-size:7.3px;
            overflow-wrap:anywhere;
          }

          .opx-insight-visual {
            width:min(500px,100%);
            min-height:405px;
          }

          .opx-insight-orbit.orbit-one {
            width:270px;
            height:270px;
          }

          .opx-insight-orbit.orbit-two {
            width:350px;
            height:350px;
          }

          .opx-insight-core {
            width:126px;
            height:126px;
          }

          .opx-topic-float {
            min-width:0;
            width:104px;
            padding:8px 9px;
          }

          .opx-topic-float strong {
            font-size:8.7px;
          }

          .opx-topic-float small {
            font-size:5.7px;
          }

          .opx-topic-float.topic-mes {
            left:3px;
          }

          .opx-topic-float.topic-erp {
            right:3px;
          }

          .opx-topic-float.topic-scada {
            left:3px;
          }

          .opx-topic-float.topic-data {
            right:3px;
          }

          .opx-featured-floating {
            width:92%;
          }

          .opx-journal-card-grid {
            grid-template-columns:1fr;
          }

          .opx-journal-list {
            padding:64px 0 72px;
          }

          .opx-journal-cta {
            width:calc(100% - 32px);
            grid-template-columns:1fr;
            gap:18px;
            padding:28px 24px;
          }

          .opx-journal-cta button {
            width:100%;
            min-height:46px;
          }
        }

        @media(max-width:600px) {
          .opx-journal-container {
            width:calc(100% - 24px);
          }

          .opx-journal-hero {
            padding:74px 0 58px;
          }

          .opx-journal-overline {
            flex-wrap:wrap;
            row-gap:5px;
          }

          .opx-journal-copy h1 {
            margin-top:14px;
            font-size:clamp(1.82rem,9vw,2.3rem);
            line-height:1.12;
          }

          .opx-journal-meta-row {
            margin-top:22px;
          }

          .opx-insight-visual {
            width:100%;
            max-width:390px;
            min-height:350px;
            overflow:hidden;
          }

          .opx-insight-orbit.orbit-one {
            width:218px;
            height:218px;
          }

          .opx-insight-orbit.orbit-two {
            width:286px;
            height:286px;
          }

          .opx-insight-core {
            width:106px;
            height:106px;
          }

          .opx-insight-core svg {
            font-size:23px;
          }

          .opx-insight-core strong {
            font-size:11px;
          }

          .opx-topic-float {
            width:86px;
            padding:7px;
            gap:5px;
            border-radius:11px;
          }

          .opx-topic-float svg {
            font-size:13px;
          }

          .opx-topic-float strong {
            font-size:7.6px;
          }

          .opx-topic-float small {
            display:none;
          }

          .opx-topic-float.topic-mes {
            left:3px;
            top:13%;
          }

          .opx-topic-float.topic-erp {
            right:3px;
            top:16%;
          }

          .opx-topic-float.topic-scada {
            left:3px;
            bottom:23%;
          }

          .opx-topic-float.topic-data {
            right:3px;
            bottom:25%;
          }

          .opx-featured-floating {
            width:92%;
            bottom:3px;
            grid-template-columns:1fr 18px;
            padding:10px 11px;
          }

          .opx-featured-floating > span {
            grid-column:1/-1;
          }

          .opx-featured-floating strong {
            font-size:9px;
          }

          .opx-story-switch-open {
            bottom:-22px;
          }

          .opx-journal-card {
            padding:18px;
            border-radius:18px;
          }

          .opx-card-visual {
            height:118px;
          }

          .opx-journal-heading h2 {
            font-size:1.65rem;
          }

          .opx-journal-heading p,
          .opx-journal-card p {
            font-size:.88rem;
            line-height:1.65;
          }

          .opx-journal-card h3 {
            font-size:1.25rem;
          }

          .opx-journal-cta {
            width:calc(100% - 24px);
            padding:25px 18px;
            border-radius:18px;
          }
        }

        @media(max-width:390px) {
          .opx-journal-container {
            width:calc(100% - 18px);
          }

          .opx-journal-meta-row > div {
            padding:9px 5px;
          }

          .opx-journal-meta-row strong {
            font-size:.82rem;
          }

          .opx-journal-meta-row span {
            font-size:6.5px;
          }

          .opx-insight-visual {
            min-height:325px;
          }

          .opx-insight-orbit.orbit-one {
            width:198px;
            height:198px;
          }

          .opx-insight-orbit.orbit-two {
            width:254px;
            height:254px;
          }

          .opx-insight-core {
            width:98px;
            height:98px;
          }

          .opx-topic-float {
            width:78px;
          }

          .opx-featured-floating {
            width:94%;
          }

          .opx-card-visual {
            height:110px;
          }
        }


        @media(prefers-reduced-motion:reduce) {
          .opx-journal *,
          .opx-journal *::before,
          .opx-journal *::after {
            animation:none !important;
            transition:none !important;
          }
        }
      `}</style>
    </main>
  );
};

export default Blog;
