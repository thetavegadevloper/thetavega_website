import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowRight,
  FaChevronRight,
  FaIndustry,
  FaNetworkWired,
} from "react-icons/fa";

import mesAnim from "../assets/json/Digital Manufacturing.json";
import traceAnim from "../assets/json/Traceability  Quality Systems.json";
import machineAnim from "../assets/json/Industrial IoT.json";
import automationAnim from "../assets/json/Factory Automation.json";
import infraAnim from "../assets/json/Smart Infrastructure.json";
import iotAnim from "../assets/json/IIOT Integration.json";
import automotiveAnim from "../assets/json/Automotive  EV.json";
import processAnim from "../assets/json/Metals  Process Industries.json";
import spmAnim from "../assets/json/Machine Building.json";
import digitalFactoryAnim from "../assets/json/Digital Factory.json";

/* ============================================================
   SINGLE DATA SOURCE
   ------------------------------------------------------------
   Keep ALL case-study content in this file.
   DetailCaseStudies.jsx imports this exported array.
============================================================ */
export const caseStudies = [
  {
    id: "automotive-mes",
    number: "01",
    slug: "automotive-mes",
    cardTitle: "Automotive MES",
    cardHeadline: "One MES. From Machine Shop to Final Assembly.",
    title: "End-to-End MES for Automotive Assembly & Manufacturing",
    category: "MES",
    industry: "Automotive Manufacturing",
    solution: "OperateX MES",
    scope:
      "Assembly | Sub-Assemblies | Machine Shop | Quality | Utilities | Traceability | Production Monitoring",
    icon: mesAnim,
    accent: "#f27c2d",
    challenge: [
      "A large automotive manufacturing operation required a unified digital manufacturing platform connecting multiple production areas that were operating with different PLCs, machines, inspection equipment and standalone applications.",
      "Production information was distributed across assembly lines, sub-assembly stations, machining operations, testing equipment and utility systems, making plant-wide visibility and genealogy difficult.",
    ],
    solutionIntro: [
      "OperateX was implemented as the manufacturing digital backbone connecting production processes from component preparation through final assembly.",
      "The platform integrated shop-floor equipment directly with production, quality and traceability workflows.",
    ],
    primaryFlow: {
      title: "Architecture",
      steps: [
        "Machines / PLC / Controllers / Sensors / DC Tools / Vision / Testers",
        "OperateX OT Connectivity Layer",
        "OperateX MES Platform",
        "Production | Quality | Traceability | Maintenance | Utility | Analytics",
        "ERP / SAP / Enterprise Systems",
      ],
    },
    detailSections: [
      {
        title: "Solution Coverage",
        type: "list",
        items: [
          "Main assembly line digitalization",
          "Multiple sub-assembly lines",
          "SPM and workstation integration",
          "Machine shop connectivity",
          "SKU/model-based production control",
          "Production order management",
          "Operator process confirmation",
          "Station-wise interlocking",
          "Torque and tightening data",
          "Leak-test and inspection results",
          "Vision inspection integration",
          "Barcode/QR/RFID-based identification",
          "Rework management",
          "Quality parameter recording",
          "Complete product genealogy",
          "Utility monitoring",
          "OEE and downtime monitoring",
          "Production dashboards",
          "Andon and escalation",
          "Historical analytics",
        ],
      },
    ],
    impact: [
      "The implementation created a single digital thread across manufacturing, enabling management, production and quality teams to work from the same real-time manufacturing data.",
      "The solution provides the foundation for a paperless, traceable and increasingly autonomous manufacturing operation.",
    ],
  },
  {

     id: "vendor-oem-traceability",
    number: "02",
    slug: "vendor-oem-traceability",
    cardTitle: "Vendor–OEM Traceability",
    cardHeadline: "Trace Every Component Across the Supply Chain.",
    title: "Vendor-to-OEM Traceability & Product Genealogy",
    category: "Traceability",
    industry: "Automotive / Tier-1 / Tier-2",
    solution: "OperateX Distributed Traceability",
    scope: "Supplier Manufacturing → OEM Receiving → Assembly → Final Product",
    icon: traceAnim,
    accent: "#00A99D",
    challenge: [
      "Critical components manufactured at supplier facilities needed to remain traceable throughout their lifecycle at the OEM.",
      "Traditional traceability often ends when material leaves the supplier, creating disconnected datasets between supplier manufacturing processes and OEM assembly operations.",
    ],
    solutionIntro: [
      "OperateX created a distributed traceability architecture connecting manufacturing data generated at the vendor with subsequent processes at the OEM.",
      "A unique QR/DataMatrix/serial identity is associated with the component during production. Every subsequent manufacturing operation adds information to the component's digital genealogy.",
    ],
    primaryFlow: {
      title: "Distributed Traceability Architecture",
      steps: [
        "Vendor Machines",
        "Vendor OperateX Edge/MES",
        "Vendor Local Database",
        "Secure Data Exchange/API",
        "OEM OperateX / MES",
        "Vehicle / Product Genealogy",
      ],
    },
    detailSections: [
      {
        title: "Data Captured",
        type: "list",
        items: [
          "Supplier identity",
          "Component serial number",
          "Batch/lot",
          "Material details",
          "Machine identity",
          "Process parameters",
          "Torque values",
          "Inspection results",
          "Runout measurements",
          "Vision results",
          "Testing data",
          "Operator/station details",
          "Timestamp",
          "OK/NOK status",
          "Rework history",
          "Dispatch information",
          "OEM receiving information",
          "Assembly relationship",
          "Finished product serial number",
        ],
      },
      {
        title: "Key Differentiator",
        type: "text",
        text: [
          "OperateX doesn't simply record whether a component passed inspection. It creates the relationship across the complete product lifecycle.",
        ],
      },
      {
        title: "Digital Genealogy",
        type: "flow",
        items: [
          "Raw Material",
          "Component",
          "Process",
          "Sub-Assembly",
          "Assembly",
          "Finished Product",
        ],
      },
    ],
    impact: [
      "Vendor process accountability",
      "End-to-end genealogy",
      "Faster root-cause analysis",
      "Targeted recall capability",
      "Reduced quality investigation effort",
      "Supplier quality visibility",
      "Digital compliance records",
    ],
  },
  {
      id: "software-defined-servo-control",
    number: "03",
    slug: "software-defined-servo-control",
    cardTitle: "Servo Controls",
    cardHeadline: "Software-Defined Motion for Precision Manufacturing.",
    title: "Software-Defined Multi-Axis Servo Control Using OperateX",
    category: "Automation",
    industry: "Automotive | Special Purpose Machinery | Precision Manufacturing",
    solution: "OperateX Motion Control",
    icon: automationAnim,
    accent: "#DB9941",
    challenge: [
      "A precision manufacturing application required automated positioning across multiple servo axes based on engineering drawing information.",
      "Manual coordinate programming increased setup time and created dependency on machine-specific programming.",
    ],
    solutionIntro: [
      "OperateX was used as the supervisory engineering and control platform.",
      "Engineering data from a drawing is interpreted by OperateX and converted into machine coordinates. The required positions are transferred to the PLC, which coordinates the servo motion system.",
    ],
    primaryFlow: {
      title: "Example Workflow",
      steps: [
        "Engineering Drawing / DWG",
        "OperateX Drawing Processing",
        "Coordinate Generation",
        "PLC Communication",
        "Multi-Axis Servo Positioning",
        "Machine Operation",
        "Production & Process Data Logging",
      ],
    },
    detailSections: [
      {
        title: "Capabilities",
        type: "list",
        items: [
          "Drawing-driven positioning",
          "Multi-axis servo control",
          "Automatic coordinate transfer",
          "Recipe management",
          "Model/SKU changeover",
          "Position validation",
          "Sequence control",
          "Alarm management",
          "Production logging",
          "User access control",
          "Historical operation records",
        ],
      },
    ],
    impact: [
      "OperateX transforms a conventional PLC/servo system into a software-defined manufacturing system, making complex machine operations easier to configure, monitor and scale.",
    ],
  },
  {
    number: "04",
    slug: "machine-shop-mes",
    cardTitle: "Machine Shop MES",
    cardHeadline: "Turn Every Machine into a Connected Manufacturing Asset.",
    title: "Machine Shop MES & Machine Monitoring",
    category: "MES",
    industry: "Automotive | Heavy Engineering | Precision Manufacturing",
    solution: "OperateX Machine Shop MES",
    icon: machineAnim,
    accent: "#1597d4",
    challenge: [
      "Machine shops frequently operate with CNCs and controllers from different manufacturers.",
      "Production counts, machine status, alarms, cycle times, tool information and quality records remain fragmented across machines. Management therefore lacks a reliable real-time view of the complete machine shop.",
    ],
    solutionIntro: [
      "OperateX connects heterogeneous CNC machines, PLC-controlled machines and SPMs into one machine-shop MES platform.",
    ],
    primaryFlow: {
      title: "Component Traceability",
      steps: [
        "Component ID",
        "Machine",
        "Program",
        "Cycle",
        "Process Parameters",
        "Inspection",
        "Result",
      ],
    },
    detailSections: [
      {
        title: "Connectivity",
        type: "list",
        items: [
          "OPC UA",
          "MTConnect",
          "FANUC FOCAS",
          "Modbus TCP",
          "Ethernet/IP",
          "Profinet",
          "Mitsubishi protocols",
          "PLC interfaces",
          "Machine APIs",
          "Edge gateways",
        ],
      },
      {
        title: "Parameters Monitored",
        type: "list",
        items: [
          "Machine ON/OFF",
          "Running",
          "Idle",
          "Cycle",
          "Alarm",
          "Setup",
          "Breakdown",
          "Cycle time",
          "Part count",
          "Program number",
          "Machine mode",
          "Spindle information",
          "Feed information",
          "Tool information",
          "Production order",
          "Component serial number",
          "Rejection",
          "Quality results",
          "Energy consumption",
        ],
      },
      {
        title: "OperateX Analytics",
        type: "list",
        items: [
          "OEE",
          "Availability",
          "Performance",
          "Quality",
          "Machine utilization",
          "Downtime Pareto",
          "Alarm analysis",
          "Cycle-time deviation",
          "Production vs plan",
          "Shift performance",
          "Machine-wise comparison",
          "Historical trends",
        ],
      },
      {
        title: "Traceability",
        type: "text",
        text: [
          "Every machined component can be associated with its machine, program, cycle, process parameters, inspection and result.",
          "This creates a digital manufacturing history for each critical component.",
        ],
      },
    ],
  },
  
  {
    number: "05",
    slug: "plant-utility-management",
    cardTitle: "Utility Management",
    cardHeadline: "Make Every Unit of Utility Consumption Visible.",
    title: "Plant Utility Management System",
    category: "Utilities",
    industry: "Automotive | Steel | Chemical | Pharma | General Manufacturing",
    solution: "OperateX Utility Management",
    icon: infraAnim,
    accent: "#00A99D",
    challenge: [
      "Utilities are often monitored independently even though they collectively represent a significant portion of manufacturing operating costs.",
      "Lack of centralized monitoring makes abnormal consumption, leakage and inefficient equipment difficult to identify.",
    ],
    solutionIntro: [
      "OperateX integrates electrical, compressed air, water, gas and other utility systems into a unified monitoring platform.",
    ],
    detailSections: [
      {
        title: "Utilities Covered",
        type: "list",
        items: [
          "Electricity",
          "Compressed air",
          "Water",
          "Natural gas",
          "Steam",
          "Chilled water",
          "Cooling towers",
          "DG sets",
          "Transformers",
          "Pumps",
          "Boilers",
          "Compressors",
          "HVAC",
          "Renewable energy",
        ],
      },
      {
        title: "Analytics",
        type: "list",
        items: [
          "Consumption trends",
          "Shift/day/month analysis",
          "Specific energy consumption",
          "Cost allocation",
          "Department-wise consumption",
          "Equipment-wise consumption",
          "Maximum demand",
          "Peak demand analysis",
          "Utility efficiency",
          "Leakage/anomaly identification",
          "Alerts and notifications",
          "Historical comparison",
        ],
      },
      {
        title: "Key KPI",
        type: "formula",
        formula: "Energy / Utility Consumption ÷ Production Output",
        text: [
          "This provides management with a much more meaningful measure than simple meter readings.",
        ],
      },
    ],
  },
  {
    number: "06",
    slug: "operatex-bms",
    cardTitle: "BMS",
    cardHeadline: "One Digital Command Center for Your Facility.",
    title: "Building Management System – OperateX BMS",
    category: "Infrastructure",
    industry: "Hospitals | Industrial Buildings | Commercial Infrastructure | Laboratories",
    solution: "OperateX BMS",
    icon: infraAnim,
    accent: "#2F80ED",
    challenge: [
      "Large facilities contain multiple independent building systems with limited centralized visibility.",
      "Facility teams need one platform to monitor environmental conditions, HVAC equipment, electrical systems and critical infrastructure.",
    ],
    solutionIntro: [
      "OperateX BMS provides centralized monitoring and control across building infrastructure.",
    ],
    detailSections: [
      {
        title: "Integrated Systems",
        type: "list",
        items: [
          "AHU",
          "HVAC",
          "Chillers",
          "Cooling towers",
          "Pumps",
          "Ventilation",
          "Temperature",
          "Humidity",
          "CO₂",
          "Indoor air-quality parameters",
          "Electrical panels",
          "Energy meters",
          "DG",
          "UPS",
          "Water systems",
          "Tank levels",
          "Fire-system status integration",
          "Critical room monitoring",
        ],
      },
      {
        title: "Platform Functions",
        type: "list",
        items: [
          "Central command dashboard",
          "Floor/area-wise visualization",
          "Alarm management",
          "Equipment runtime monitoring",
          "Trend analysis",
          "Preventive maintenance inputs",
          "Energy monitoring",
          "Environmental monitoring",
          "Historical reporting",
          "User-based access",
        ],
      },
    ],
    impact: [
      "OperateX provides facility teams with one operational view of the entire building, while simultaneously creating the data foundation for energy optimization and predictive maintenance.",
    ],
  },
  {
    number: "07",
    slug: "operatex-ems",
    cardTitle: "EMS",
    cardHeadline: "Turn Energy Data into Operational Intelligence.",
    title: "Energy Management System – OperateX EMS",
    category: "Utilities",
    industry: "Manufacturing | Infrastructure | Hospitals | Commercial Facilities",
    solution: "OperateX EMS",
    icon: iotAnim,
    accent: "#9B51E0",
    challenge: [
      "Energy bills alone cannot identify where energy is being consumed inefficiently.",
      "Organizations need equipment-level and process-level energy intelligence.",
    ],
    solutionIntro: [
      "OperateX EMS connects meters, equipment and production data into one energy analytics platform.",
    ],
    primaryFlow: {
      title: "Monitoring Levels",
      steps: ["Enterprise", "Plant", "Shop", "Line", "Machine", "Utility", "Meter"],
    },
    detailSections: [
      {
        title: "Major Capabilities",
        type: "list",
        items: [
          "Real-time energy monitoring",
          "Electricity consumption",
          "Maximum demand",
          "Power factor",
          "Voltage/current",
          "Frequency",
          "kW",
          "kVA",
          "kVAR",
          "kWh",
          "Harmonics where available",
          "Energy cost calculation",
          "TOU/tariff analysis",
          "Production-normalized energy",
          "Baseline analysis",
          "Energy performance indicators",
          "Carbon reporting",
          "Abnormal consumption alerts",
        ],
      },
      {
        title: "The OperateX Advantage",
        type: "formula",
        formula: "Production + Machine State + Utilities + Energy + Cost",
        text: ["This combination provides actionable energy intelligence."],
      },
    ],
  },
  {
    number: "08",
    slug: "paint-shop-digitalization",
    cardTitle: "Paint Shop",
    cardHeadline: "Digital Process Intelligence for the Complete Paint Shop.",
    title: "Paint Shop Management & Digitalization",
    category: "Process",
    industry: "Automotive | Components | Industrial Coating",
    solution: "OperateX Paint Shop Management",
    icon: automotiveAnim,
    accent: "#EB5757",
    challenge: [
      "Paint shops combine complex process parameters, conveyor movement, ovens, pretreatment, utilities and production sequencing.",
      "Quality issues may only become visible much later in the manufacturing process, making historical process traceability critical.",
    ],
    solutionIntro: [
      "OperateX integrates the complete paint process into a centralized production and process monitoring system.",
    ],
    primaryFlow: {
      title: "Product Traceability",
      steps: [
        "Product ID",
        "Entry Time",
        "Process Stages",
        "Process Parameters",
        "Oven Profile",
        "Inspection",
        "Final Status",
      ],
    },
    detailSections: [
      {
        title: "Typical Areas Covered",
        type: "list",
        items: [
          "Pretreatment",
          "Degreasing",
          "Phosphating",
          "Washing stages",
          "ED / coating",
          "Spray booths",
          "Ovens",
          "Conveyor",
          "Baking",
          "Cooling",
          "Paint circulation",
          "Utilities",
        ],
      },
      {
        title: "Parameters Captured",
        type: "list",
        items: [
          "Temperature",
          "Pressure",
          "Flow",
          "Conductivity",
          "pH",
          "Tank parameters",
          "Oven zone temperatures",
          "Conveyor speed",
          "Booth conditions",
          "Cycle times",
          "Alarm history",
          "Equipment status",
          "Product/SKU",
        ],
      },
      {
        title: "Management Dashboards",
        type: "list",
        items: [
          "Paint shop production",
          "Process parameter compliance",
          "Oven trends",
          "Conveyor status",
          "Equipment alarms",
          "Utility consumption",
          "Quality trends",
          "Downtime",
          "Production vs plan",
        ],
      },
    ],
  },
  {
    number: "09",
    slug: "isa-88-process-management",
    cardTitle: "S88 Process Management",
    cardHeadline: "Recipe-Driven Manufacturing Built on ISA-88 Principles.",
    title: "ISA-88 / S88 Process Management",
    category: "Process",
    industry: "Pharma | Chemical | Steel | Specialty Chemicals | Process Manufacturing",
    solution: "OperateX Batch & Process Management",
    icon: processAnim,
    accent: "#DB9941",
    challenge: [
      "Process industries need consistent recipe execution while maintaining flexibility between products, batches and equipment.",
      "Hard-coded PLC sequences become difficult to modify, validate and scale as product portfolios grow.",
    ],
    solutionIntro: [
      "OperateX provides structured process management using principles based on ISA-88 / S88 batch-control architecture.",
    ],
    primaryFlow: {
      title: "Process Model",
      steps: [
        "Enterprise",
        "Site",
        "Area",
        "Process Cell",
        "Unit",
        "Equipment Module",
        "Control Module",
      ],
    },
    detailSections: [
      {
        title: "Recipe Structure",
        type: "flow",
        items: ["Procedure", "Unit Procedure", "Operation", "Phase"],
      },
      {
        title: "OperateX Capabilities",
        type: "list",
        items: [
          "Master recipe management",
          "Batch creation",
          "Parameterized recipes",
          "Batch scheduling",
          "Equipment allocation",
          "Sequence management",
          "Phase execution",
          "Interlocks",
          "Set-point management",
          "Batch monitoring",
          "Alarm management",
          "Electronic batch records",
          "Operator actions",
          "Process history",
          "Audit trails",
          "Batch genealogy",
          "Process analytics",
        ],
      },
    ],
    impact: [
      "S88-based design separates what to manufacture from how equipment executes the process, creating a scalable and maintainable automation architecture.",
    ],
  },
  {
    number: "10",
    slug: "automated-leak-test-spm",
    cardTitle: "Leak Test SPM",
    cardHeadline: "Automated Leak Testing with Built-In Digital Traceability.",
    title: "Specialized Automated Leak Test SPM",
    category: "Automation",
    industry: "Automotive | EV | Precision Components",
    solution: "Customized Leak Test Automation",
    icon: spmAnim,
    accent: "#F2994A",
    challenge: [
      "Critical cast and assembled components require reliable leakage validation while maintaining production cycle time and complete quality traceability.",
      "Manual or semi-automatic testing creates variation and limited test history.",
    ],
    solutionIntro: [
      "Thetavega develops customized automatic leak-testing SPMs combining precision mechanical fixtures, automation controls, leak-testing equipment and OperateX quality data management.",
    ],
    primaryFlow: {
      title: "Machine Architecture",
      steps: [
        "Component Loading",
        "Part Identification",
        "Automatic Clamping",
        "Port Sealing",
        "Pressurization",
        "Stabilization",
        "Leak Measurement",
        "OK/NOK Decision",
        "Data Logging",
        "Marking / Traceability",
      ],
    },
    detailSections: [
      {
        title: "System Capabilities",
        type: "list",
        items: [
          "Pneumatic/hydraulic clamping",
          "Controlled sealing",
          "Pressure decay or flow-based testing",
          "Programmable test recipes",
          "Multiple component models",
          "Automatic SKU selection",
          "Barcode/QR integration",
          "Test curve visualization",
          "Leak-value recording",
          "OK/NOK interlocking",
          "Laser marking integration",
          "PLC safety interlocks",
          "OperateX data logging",
          "Historical test records",
          "Quality reports",
        ],
      },
      {
        title: "Value Proposition",
        type: "text",
        text: [
          "The solution combines SPM engineering + automation + test instrumentation + manufacturing software, eliminating multiple disconnected systems.",
        ],
      },
    ],
  },
  {
    number: "11",
    slug: "servo-press-signature-analysis",
    cardTitle: "Servo Press",
    cardHeadline: "Capture the Entire Pressing Signature—not Just the Final Force.",
    title: "Precision Servo Press with High-Speed Signature Analysis",
    category: "Automation",
    industry: "Automotive | EV | Precision Assembly",
    solution: "Servo Press + OperateX Signature Analytics",
    icon: automationAnim,
    accent: "#AE2C11",
    challenge: [
      "For precision press-fit operations, knowing only the final pressing force is insufficient.",
      "Defective components may produce an acceptable final force while having an abnormal force-displacement profile during the pressing operation.",
    ],
    solutionIntro: [
      "A high-precision servo press was integrated with OperateX for high-speed capture and analysis of the entire pressing signature.",
    ],
    detailSections: [
      {
        title: "Parameters Captured",
        type: "list",
        items: [
          "Force",
          "Position",
          "Displacement",
          "Time",
          "Pressing velocity",
          "Peak force",
          "Final position",
          "Contact point",
          "Force at specified position",
          "Position at specified force",
          "Complete force-displacement curve",
        ],
      },
      {
        title: "Signature Analysis",
        type: "formula",
        formula: "Force vs Displacement Signature",
        text: [
          "OperateX evaluates the complete force-displacement signature rather than relying only on a final value.",
          "Configurable acceptance windows can identify abnormal assembly behavior during different stages of pressing.",
        ],
      },
      {
        title: "System Functions",
        type: "list",
        items: [
          "Recipe management",
          "Part identification",
          "Automatic servo positioning",
          "High-speed data acquisition",
          "Signature visualization",
          "Envelope/window monitoring",
          "OK/NOK decision",
          "Traceability",
          "Historical curve retrieval",
          "Quality analytics",
          "Rework management",
        ],
      },
      {
        title: "Digital Genealogy",
        type: "text",
        text: [
          "Each press signature can be associated with the unique component serial number, providing a permanent digital quality record.",
        ],
      },
    ],
  },
  {
    number: "12",
    slug: "weld-press-shop-mes",
    cardTitle: "Weld & Press Shop",
    cardHeadline: "Connected Production Intelligence for Body Manufacturing.",
    title: "Weld Shop & Press Shop MES",
    category: "MES",
    industry: "Automotive | Sheet Metal | Vehicle Manufacturing",
    solution: "OperateX Weld Shop & Press Shop MES",
    icon: digitalFactoryAnim,
    accent: "#1B75BB",
    challenge: [
      "Press and weld shops contain high-speed equipment, robots, presses, dies, fixtures, conveyors and inspection systems.",
      "Production losses can originate from micro-stoppages, die changes, robot faults, welding issues or upstream material constraints.",
    ],
    solutionIntro: [
      "OperateX connects press-shop and weld-shop operations to provide real-time production visibility and manufacturing traceability.",
    ],
    primaryFlow: {
      title: "Body / Component Genealogy",
      steps: [
        "Coil / Material Lot",
        "Stamped Part",
        "Welded Sub-Assembly",
        "Body / Final Assembly",
      ],
    },
    detailSections: [
      {
        title: "Press Shop",
        type: "list",
        items: [
          "Press running status",
          "Stroke count",
          "Production count",
          "Model",
          "Die identification",
          "Die changeover",
          "Cycle rate",
          "Tonnage where available",
          "Press alarms",
          "Downtime",
          "Rejection",
          "Production plan",
          "Material lot",
          "Tool/die life",
        ],
      },
      {
        title: "Weld Shop Integration",
        type: "list",
        items: [
          "Welding robots",
          "PLCs",
          "Weld controllers",
          "Fixtures",
          "Conveyors",
          "Scanners",
          "Vision systems",
          "Inspection stations",
        ],
      },
      {
        title: "Welding Data",
        type: "list",
        items: [
          "Weld program",
          "Weld current",
          "Weld time",
          "Weld force",
          "Weld status",
          "Robot status",
          "Station cycle",
          "Fault",
          "Component identity",
          "Quality result",
        ],
      },
      {
        title: "Management Visibility",
        type: "list",
        items: [
          "Production vs plan",
          "OEE",
          "Machine/robot utilization",
          "Downtime Pareto",
          "Fault analysis",
          "Cycle-time analytics",
          "Changeover analysis",
          "Quality trends",
          "Die/tool monitoring",
          "WIP status",
        ],
      },
    ],
  },
];

const categories = [
  "All",
  "MES",
  "Traceability",
  "Automation",
  "Utilities",
  "Infrastructure",
  "Process",
];

const CaseStudies = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [heroIndex, setHeroIndex] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);

  /* ============================================================
     SCROLL PAGE TO TOP WHEN OPENED
  ============================================================ */
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  useEffect(() => {
    if (heroPaused) return;

    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % caseStudies.length);
    }, 3400);

    return () => clearInterval(timer);
  }, [heroPaused]);

  const visibleStudies = useMemo(() => {
    if (activeCategory === "All") return caseStudies;
    return caseStudies.filter((study) => study.category === activeCategory);
  }, [activeCategory]);

  const activeHeroStudy = caseStudies[heroIndex];

  const handleHeroSelect = (index) => {
    setHeroIndex(index);
    setHeroPaused(true);
  };

  return (
    <div className="case-studies-page">
      <style>{`
        .case-studies-page {
          --cs-red: #AE2C11;
          --cs-orange: #f27c2d;
          --cs-gold: #DB9941;
          --cs-ink: #0B0F14;
          --cs-paper: #FBFAF8;
          --cs-line: rgba(11,15,20,.1);
          --cs-slate: #5B6672;
          --cs-steel: #7A828B;
          font-family: Montserrat, sans-serif;
          background: var(--cs-paper);
          color: var(--cs-ink);
          overflow-x: hidden;
          width: 100%;
        }

        .case-studies-page,
        .case-studies-page * {
          box-sizing: border-box;
        }

        .case-studies-page img,
        .case-studies-page svg {
          max-width: 100%;
        }

        /* ================= HERO ================= */

        .cs-hero {
          position: relative;
          padding: 132px 0 70px;
          background: var(--cs-ink);
          overflow: hidden;
        }

        .cs-hero-watermark {
          position: absolute;
          top: 6%;
          left: 50%;
          transform: translateX(-50%);
          font-size: clamp(90px, 14vw, 220px);
          font-weight: 800;
          letter-spacing: -.03em;
          color: rgba(255,255,255,.035);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
        }

        .cs-hero-inner {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          gap: 56px;
          align-items: center;
        }

        .cs-hero-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--cs-gold);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2.4px;
          text-transform: uppercase;
          margin-bottom: 22px;
        }

        .cs-hero-kicker::before {
          content: "";
          width: 26px;
          height: 1px;
          background: var(--cs-gold);
        }

        .cs-hero h1 {
          color: #fff;
          font-size: clamp(2.2rem, 4.4vw, 3.9rem);
          line-height: 1.06;
          font-weight: 750;
          letter-spacing: -.015em;
          margin-bottom: 20px;
          max-width: 620px;
        }

        .cs-gradient-text {
          background: linear-gradient(90deg, var(--cs-orange), var(--cs-gold));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cs-hero-copy {
          color: rgba(255,255,255,.62);
          font-size: 1rem;
          line-height: 1.8;
          max-width: 480px;
          margin: 0 0 34px;
        }

        .cs-hero-stats {
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
          border-top: 1px solid rgba(255,255,255,.12);
          padding-top: 22px;
        }

        .cs-stat b {
          display: block;
          color: #fff;
          font-size: 1.5rem;
          font-weight: 800;
        }

        .cs-stat span {
          display: block;
          margin-top: 3px;
          color: rgba(255,255,255,.5);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: .4px;
          text-transform: uppercase;
        }

        /* Hero right: centered visual column */

        .cs-hero-visual {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .cs-hero-frame {
          position: relative;
          width: 100%;
          border-radius: 22px;
          padding: 34px;
          min-height: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: linear-gradient(160deg, rgba(255,255,255,.06), rgba(255,255,255,.015));
          border: 1px solid rgba(255,255,255,.12);
          box-shadow: 0 30px 70px rgba(0,0,0,.35);
          overflow: hidden;
        }

        .cs-hero-frame::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 20%, color-mix(in srgb, var(--study-accent, #f27c2d) 22%, transparent), transparent 60%);
          transition: background .4s ease;
          pointer-events: none;
        }

        .cs-hero-lottie {
          width: 168px;
          height: 168px;
          position: relative;
          z-index: 2;
        }

        .cs-hero-frame-number {
          position: relative;
          z-index: 2;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--study-accent, #f27c2d);
          margin-bottom: 4px;
        }

        .cs-hero-frame-title {
          position: relative;
          z-index: 2;
          color: #fff;
          font-size: 1.05rem;
          font-weight: 750;
          line-height: 1.4;
          max-width: 340px;
        }

        .cs-hero-tabs {
          margin-top: 20px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 7px;
          width: 100%;
        }

        .cs-hero-tab {
          width: 34px;
          height: 34px;
          border-radius: 9px;
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(255,255,255,.03);
          color: rgba(255,255,255,.55);
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          transition: all .2s ease;
        }

        .cs-hero-tab:hover {
          border-color: rgba(255,255,255,.35);
          color: #fff;
        }

        .cs-hero-tab.active {
          background: var(--study-accent, #f27c2d);
          border-color: transparent;
          color: #fff;
        }

        .cs-hero-progress {
          position: relative;
          width: 100%;
          height: 2px;
          border-radius: 2px;
          background: rgba(255,255,255,.1);
          margin-top: 18px;
          overflow: hidden;
        }

        .cs-hero-progress span {
          position: absolute;
          inset: 0;
          background: var(--study-accent, #f27c2d);
          transform-origin: left;
        }

        @media (max-width: 991px) {
          .cs-hero-inner {
            grid-template-columns: 1fr;
          }
          .cs-hero h1,
          .cs-hero-copy {
            max-width: 100%;
          }
          .cs-hero-visual {
            margin-top: 8px;
          }
        }

        /* ================= SECTION HEADER + FILTERS ================= */

        .cs-section {
          padding: 74px 0 100px;
        }

        .cs-section-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
          flex-wrap: wrap;
          margin-bottom: 34px;
          padding-bottom: 24px;
          border-bottom: 2px solid var(--cs-ink);
          position: relative;
        }

        .cs-section-head::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 64px;
          height: 2px;
          background: linear-gradient(90deg, var(--cs-red), var(--cs-orange));
        }

        .cs-section-tag {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--cs-steel);
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .cs-section-tag::before {
          content: "";
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, var(--cs-red), var(--cs-orange));
        }

        .cs-section-title {
          color: var(--cs-ink);
          font-size: clamp(1.55rem, 2.6vw, 2.2rem);
          font-weight: 750;
          letter-spacing: -.01em;
          margin: 0;
        }

        .cs-section-subtitle {
          max-width: 380px;
          color: var(--cs-slate);
          line-height: 1.7;
          font-size: .92rem;
          margin: 0;
        }

        .cs-filter-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          align-items: center;
          margin-bottom: 4px;
          width: 100%;
        }

        .cs-filter-btn {
          position: relative;
          border: 1px solid rgba(11,15,20,.12);
          border-radius: 999px;
          background: rgba(255,255,255,.92);
          color: var(--cs-slate);
          padding: 10px 17px;
          font-size: 11.5px;
          font-weight: 750;
          letter-spacing: .35px;
          text-transform: uppercase;
          cursor: pointer;
          line-height: 1;
          min-height: 38px;
          white-space: nowrap;
          box-shadow: 0 6px 18px rgba(7,17,29,.045);
          transition: transform .2s ease, box-shadow .2s ease, color .2s ease,
            background .2s ease, border-color .2s ease;
        }

        .cs-filter-btn:hover {
          color: var(--cs-ink);
          background: #fff;
          border-color: rgba(242,124,45,.32);
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(7,17,29,.08);
        }

        .cs-filter-btn.active {
          color: #fff;
          border-color: transparent;
          background: linear-gradient(135deg, var(--cs-red), var(--cs-orange));
          box-shadow: 0 10px 24px rgba(174,44,17,.18);
        }

        /* ================= EDITORIAL ROWS — with orange accents ================= */

        .cs-rows {
          display: flex;
          flex-direction: column;
          border-top: 2px solid var(--cs-ink);
        }

        .cs-row {
          --study-accent: #f27c2d;
          position: relative;
          display: grid;
          grid-template-columns: 74px 1fr 210px 68px 48px;
          align-items: center;
          gap: 22px;
          padding: 26px 20px;
          background: #fff;
          border-bottom: 1px solid var(--cs-line);
          cursor: pointer;
          transition: background .2s ease;
        }

        .cs-row:hover {
          background: #fbf4ee;
        }

        .cs-row-index {
          font-size: 1.9rem;
          font-weight: 800;
          line-height: 1;
          color: var(--cs-line);
          font-variant-numeric: tabular-nums;
          transition: color .2s ease;
        }

        .cs-row:hover .cs-row-index {
          color: var(--cs-orange);
        }

        .cs-row-main {
          min-width: 0;
        }

        .cs-row-eyebrow {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 7px;
        }

        .cs-row-tag {
          width: 8px;
          height: 8px;
          border-radius: 2px;
          background: var(--study-accent);
          flex: 0 0 auto;
        }

        .cs-row-category {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          color: var(--cs-steel);
        }

        .cs-row-title {
          color: var(--cs-ink);
          font-size: 1.1rem;
          font-weight: 800;
          margin: 0 0 5px;
          line-height: 1.3;
        }

        .cs-row-headline {
          color: var(--cs-slate);
          font-size: .87rem;
          font-weight: 500;
          margin: 0 0 12px;
          line-height: 1.55;
          max-width: 560px;
        }

        .cs-row-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .cs-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: 3px;
          background: #f2f1ee;
          border: 1px solid var(--cs-line);
          color: var(--cs-slate);
          font-size: 10px;
          font-weight: 650;
          white-space: nowrap;
        }

        .cs-pill svg {
          color: var(--cs-orange);
          font-size: 9px;
        }

        .cs-row-spec {
          border-left: 1px dashed var(--cs-line);
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .cs-row-spec label {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--cs-orange);
        }

        .cs-row-spec span {
          font-size: 11px;
          font-weight: 650;
          color: var(--cs-ink);
        }

        .cs-row-icon {
          width: 56px;
          height: 56px;
          border-radius: 4px;
          background: #f2f1ee;
          border: 1px solid var(--cs-line);
          display: flex;
          align-items: center;
          justify-content: center;
          filter: grayscale(1) contrast(1.05);
          opacity: .82;
          transition: filter .25s ease, opacity .25s ease, border-color .25s ease;
        }

        .cs-row:hover .cs-row-icon {
          filter: grayscale(0);
          opacity: 1;
          border-color: color-mix(in srgb, var(--study-accent) 45%, var(--cs-line));
        }

        .cs-row-icon-lottie {
          width: 36px;
          height: 36px;
        }

        .cs-row-arrow {
          width: 36px;
          height: 36px;
          border: 1px solid var(--cs-line);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--cs-steel);
          transition: all .25s ease;
          justify-self: end;
        }

        .cs-row:hover .cs-row-arrow {
          background: linear-gradient(135deg, var(--cs-red), var(--cs-orange));
          border-color: transparent;
          color: #fff;
          transform: translateX(3px);
        }

        @media (max-width: 1100px) {
          .cs-row {
            grid-template-columns: 56px 1fr 56px 44px;
          }
          .cs-row-spec {
            display: none;
          }
        }


        /* ================= CTA ================= */

        .cs-cta {
          position: relative;
          margin: 0 auto 70px;
          width: min(1300px, 92%);
          border-radius: 26px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1.3fr .7fr;
          background: var(--cs-ink);
          border: 1px solid rgba(255,255,255,.08);
        }

        .cs-cta-left {
          padding: 60px 56px;
          position: relative;
          z-index: 1;
        }

        .cs-cta-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255,255,255,.08) 1px, transparent 1px);
          background-size: 16px 16px;
          mask-image: radial-gradient(circle at 30% 50%, black, transparent 75%);
        }

        .cs-cta h2 {
          position: relative;
          z-index: 1;
          color: #fff;
          font-size: clamp(1.5rem, 2.4vw, 2.15rem);
          font-weight: 750;
          margin-bottom: 14px;
          max-width: 480px;
        }

        .cs-cta p {
          position: relative;
          z-index: 1;
          color: rgba(255,255,255,.6);
          max-width: 440px;
          line-height: 1.7;
          margin-bottom: 26px;
          font-size: .93rem;
        }

        .cs-cta button {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 0;
          border-radius: 999px;
          color: #fff;
          font-weight: 750;
          font-size: 13.5px;
          padding: 13px 22px;
          background: linear-gradient(135deg, var(--cs-red), var(--cs-orange));
          cursor: pointer;
          transition: transform .25s ease;
        }

        .cs-cta button:hover {
          transform: translateY(-2px);
        }

        .cs-cta-right {
          position: relative;
          border-left: 1px solid rgba(255,255,255,.08);
          background: linear-gradient(160deg, rgba(242,124,45,.16), rgba(219,153,65,.06));
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
        }

        .cs-cta-metric {
          text-align: center;
        }

        .cs-cta-metric b {
          display: block;
          color: #fff;
          font-size: 3rem;
          font-weight: 800;
          line-height: 1;
        }

        .cs-cta-metric span {
          display: block;
          margin-top: 8px;
          color: rgba(255,255,255,.55);
          font-size: 11.5px;
          font-weight: 650;
          letter-spacing: .4px;
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .cs-hero {
            padding: 94px 0 42px;
          }

          .cs-hero .container,
          .cs-section .container {
            width: 100%;
            max-width: 100%;
            padding-left: 16px;
            padding-right: 16px;
          }

          .cs-hero-watermark {
            top: 4%;
            font-size: clamp(56px, 21vw, 92px);
            opacity: .75;
          }

          .cs-hero-inner {
            gap: 30px;
          }

          .cs-hero-kicker {
            width: 100%;
            justify-content: center;
            gap: 8px;
            margin-bottom: 16px;
            font-size: 10.5px;
            letter-spacing: 1.8px;
          }

          .cs-hero-kicker::before {
            width: 20px;
          }

          .cs-hero h1 {
            max-width: 100%;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 16px;
            text-align: center;
            font-size: clamp(1.85rem, 8.6vw, 2.35rem);
            line-height: 1.08;
            overflow-wrap: anywhere;
          }

          .cs-hero-copy {
            max-width: 100%;
            margin: 0 auto 24px;
            text-align: center;
            font-size: .9rem;
            line-height: 1.65;
            padding: 0 2px;
          }

          /* Keep all three hero tags/stats in ONE ROW on mobile. */
          .cs-hero-stats {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 7px;
            width: 100%;
            flex-wrap: nowrap;
            padding-top: 14px;
          }

          .cs-stat {
            min-width: 0;
            padding: 10px 5px;
            text-align: center;
            border: 1px solid rgba(255,255,255,.09);
            border-radius: 12px;
            background: rgba(255,255,255,.035);
          }

          .cs-stat b {
            font-size: 1.18rem;
            line-height: 1;
          }

          .cs-stat span {
            margin-top: 5px;
            font-size: 7.7px;
            line-height: 1.25;
            letter-spacing: .2px;
            white-space: normal;
            overflow-wrap: anywhere;
          }

          .cs-hero-visual {
            width: 100%;
            min-width: 0;
            margin-top: 0;
          }

          .cs-hero-frame {
            width: 100%;
            max-width: 100%;
            padding: 20px 16px;
            min-height: 218px;
            border-radius: 18px;
          }

          .cs-hero-lottie {
            width: 112px;
            height: 112px;
          }

          .cs-hero-frame-number {
            font-size: 9px;
            letter-spacing: 1.3px;
          }

          .cs-hero-frame-title {
            width: 100%;
            max-width: 280px;
            font-size: .9rem;
            line-height: 1.35;
            overflow-wrap: anywhere;
          }

          .cs-hero-tabs {
            display: grid;
            grid-template-columns: repeat(6, minmax(0, 1fr));
            gap: 6px;
            width: 100%;
            margin-top: 14px;
          }

          .cs-hero-tab {
            width: 100%;
            min-width: 0;
            height: 32px;
            border-radius: 8px;
            padding: 0;
            font-size: 10px;
          }

          .cs-hero-progress {
            margin-top: 12px;
          }

          .cs-section {
            padding: 48px 0 66px;
          }

          .cs-section-head {
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
            margin-bottom: 22px;
            padding-bottom: 18px;
          }

          .cs-section-tag {
            font-size: 10px;
            letter-spacing: 1.5px;
          }

          .cs-section-title {
            font-size: 1.55rem;
            line-height: 1.15;
          }

          .cs-section-subtitle {
            max-width: 100%;
            font-size: .86rem;
            line-height: 1.55;
          }

          /* Separate filter pills - no touching, no horizontal overflow. */
          .cs-filter-row {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 9px;
            width: 100%;
            margin-bottom: 2px;
          }

          .cs-filter-btn {
            width: 100%;
            min-width: 0;
            min-height: 42px;
            padding: 10px 8px;
            border-radius: 12px;
            font-size: 10px;
            line-height: 1.15;
            white-space: normal;
            overflow-wrap: anywhere;
            text-align: center;
          }

          .cs-filter-btn:first-child {
            grid-column: 1 / -1;
          }

          .cs-rows {
            gap: 12px;
            border-top: none;
          }

          .cs-row {
            width: 100%;
            min-width: 0;
            grid-template-columns: 40px 1fr 44px;
            grid-template-areas:
              "index icon arrow"
              "main main main";
            row-gap: 12px;
            column-gap: 10px;
            padding: 16px;
            border: 1px solid var(--cs-line);
            border-radius: 18px;
            box-shadow: 0 10px 26px rgba(7,17,29,.045);
            overflow: hidden;
          }

          .cs-row-index {
            grid-area: index;
            font-size: 1.25rem;
            align-self: center;
          }

          .cs-row-icon {
            grid-area: icon;
            justify-self: center;
            width: 44px;
            height: 44px;
            border-radius: 12px;
          }

          .cs-row-icon-lottie {
            width: 28px;
            height: 28px;
          }

          .cs-row-arrow {
            grid-area: arrow;
            justify-self: end;
            width: 34px;
            height: 34px;
            border-radius: 10px;
          }

          .cs-row-main {
            grid-area: main;
            min-width: 0;
            width: 100%;
          }

          .cs-row-title {
            font-size: 1.02rem;
            overflow-wrap: anywhere;
          }

          .cs-row-headline {
            max-width: 100%;
            margin-bottom: 10px;
            font-size: .82rem;
            line-height: 1.48;
            overflow-wrap: anywhere;
          }

          .cs-row-meta {
            display: grid;
            grid-template-columns: 1fr;
            gap: 6px;
            width: 100%;
          }

          .cs-pill {
            width: 100%;
            min-width: 0;
            white-space: normal;
            overflow-wrap: anywhere;
            line-height: 1.35;
            padding: 7px 9px;
            border-radius: 9px;
          }

          .cs-row-spec {
            display: none;
          }

          .cs-cta {
            width: calc(100% - 32px);
            max-width: none;
            grid-template-columns: 1fr;
            border-radius: 20px;
            margin-bottom: 44px;
          }

          .cs-cta-left {
            padding: 34px 20px;
          }

          .cs-cta h2,
          .cs-cta p {
            max-width: 100%;
          }

          .cs-cta button {
            max-width: 100%;
            justify-content: center;
          }

          .cs-cta-right {
            border-left: none;
            border-top: 1px solid rgba(255,255,255,.08);
            padding: 26px 20px;
          }

          .cs-cta-metric b {
            font-size: 2.35rem;
          }

          .cs-cta-metric span {
            font-size: 10px;
            line-height: 1.35;
          }
        }

        @media (max-width: 390px) {
          .cs-hero .container,
          .cs-section .container {
            padding-left: 13px;
            padding-right: 13px;
          }

          .cs-hero h1 {
            font-size: 1.78rem;
          }

          .cs-stat {
            padding-left: 3px;
            padding-right: 3px;
          }

          .cs-stat span {
            font-size: 7px;
          }

          .cs-hero-tab {
            height: 30px;
            font-size: 9px;
          }

          .cs-filter-row {
            gap: 7px;
          }

          .cs-filter-btn {
            min-height: 40px;
            font-size: 9.5px;
          }

          .cs-row {
            padding: 14px;
          }

          .cs-cta {
            width: calc(100% - 26px);
          }
        }
      `}</style>

      {/* ================= HERO ================= */}
      <section className="cs-hero">
        <div className="cs-hero-watermark">CASE STUDIES</div>

        <div className="container">
          <div className="cs-hero-inner">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="cs-hero-kicker">Case Studies</div>
              <h1>
                Manufacturing Challenges.
                <br />
                <span className="cs-gradient-text">Engineered Outcomes.</span>
              </h1>
              <p className="cs-hero-copy">
                Explore how OperateX, automation, traceability and industrial
                intelligence are applied across real manufacturing use cases —
                from machine connectivity to complete digital manufacturing.
              </p>

              <div className="cs-hero-stats">
                <div className="cs-stat">
                  <b>10+</b>
                  <span>Domains Covered</span>
                </div>
                <div className="cs-stat">
                  <b>1</b>
                  <span>Connected Platform</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="cs-hero-visual"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              <div
                className="cs-hero-frame"
                style={{ "--study-accent": activeHeroStudy.accent }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeHeroStudy.slug}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                  >
                    <Lottie
                      animationData={activeHeroStudy.icon}
                      loop
                      className="cs-hero-lottie"
                    />
                    <div className="cs-hero-frame-number">
                      Case Study {activeHeroStudy.number}
                    </div>
                    <div className="cs-hero-frame-title">
                      {activeHeroStudy.cardHeadline}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="cs-hero-tabs">
                {caseStudies.map((study, index) => (
                  <button
                    key={study.slug}
                    className={`cs-hero-tab ${index === heroIndex ? "active" : ""}`}
                    style={index === heroIndex ? { "--study-accent": study.accent } : undefined}
                    onClick={() => handleHeroSelect(index)}
                  >
                    {study.number}
                  </button>
                ))}
              </div>

              {!heroPaused && (
                <div className="cs-hero-progress" style={{ "--study-accent": activeHeroStudy.accent }}>
                  <motion.span
                    key={activeHeroStudy.slug}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 3.4, ease: "linear" }}
                  />
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CASE STUDY ROWS ================= */}
      <section className="cs-section">
        <div className="container">
          <div className="cs-section-head">
            <div>
              <span className="cs-section-tag">Explore Our Work</span>
              <h2 className="cs-section-title">Digital Manufacturing in Action</h2>
            </div>
            <p className="cs-section-subtitle">
              Each case study shows the challenge, engineering approach, system
              architecture and manufacturing data flow behind the solution.
            </p>
          </div>

          <div className="cs-filter-row">
            {categories.map((category) => (
              <button
                key={category}
                className={`cs-filter-btn ${activeCategory === category ? "active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div style={{ height: 30 }} />

          <motion.div layout className="cs-rows">
            <AnimatePresence mode="popLayout">
              {visibleStudies.map((study, index) => (
                <motion.div
                  layout
                  key={study.slug}
                  className="cs-row"
                  style={{ "--study-accent": study.accent }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.2) }}
                  onClick={() => navigate(`/case-studies/${study.slug}`)}
                >
                  <div className="cs-row-index">{study.number}</div>

                  <div className="cs-row-main">
                    <div className="cs-row-eyebrow">
                      <span className="cs-row-tag" />
                      <span className="cs-row-category">{study.category}</span>
                    </div>
                    <h3 className="cs-row-title">{study.cardTitle}</h3>
                    <div className="cs-row-headline">{study.cardHeadline}</div>
                    <div className="cs-row-meta">
                      <span className="cs-pill">
                        <FaIndustry /> {study.industry}
                      </span>
                      {study.scope && (
                        <span className="cs-pill">
                          <FaNetworkWired /> {study.scope}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="cs-row-spec">
                    <label>Solution</label>
                    <span>{study.solution}</span>
                  </div>

                  <div className="cs-row-icon">
                    <Lottie
                      animationData={study.icon}
                      loop
                      className="cs-row-icon-lottie"
                    />
                  </div>

                  <div className="cs-row-arrow">
                    <FaChevronRight />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <motion.section
        className="cs-cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65 }}
      >
        <div className="cs-cta-left">
          <div className="cs-cta-dots" />
          <h2>Have a Manufacturing Challenge Like These?</h2>
          <p>
            We can design the automation, data architecture and OperateX layer
            around your actual production process.
          </p>
          <button onClick={() => navigate("/contact")}>
            Talk to Our Engineers <FaArrowRight />
          </button>
        </div>
        <div className="cs-cta-right">
          <div className="cs-cta-metric">
            <b>300+</b>
            <span>Live Manufacturing Deployments</span>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default CaseStudies;