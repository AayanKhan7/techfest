// src/data/index.js
// Extracted from "The Ultimate Techfest of KJEI.pptx"

export const SITE_CONFIG = {
  name: "GRAVITY 2K26",
  tagline: "The Ultimate Techfest of KJEI",
  date: "Feb 20, 2026",
  totalPrizePool: "₹4,00,000+",
  registerLink: "#register-portal", // Replace with Google Form/Link later
};

export const EVENT_CATEGORIES = [
  {
    id: "quadrant",
    title: "The Quadrant",
    subtitle: "Engineering Beyond Boundaries",
    themeColor: "cyan", // Tailwind color reference
    hex: "#29B6F6",     // For Three.js lights
    icon: "Cpu",        // Lucide-react icon name
    events: [
      {
        id: "bug2build",
        title: "Bug2Build",
        type: "Coding",
        shortDesc: "Debug, Code, Relay. A 3-round coding showdown.",
        fullDesc: "A team-based coding challenge focused on debugging, speed, and collaboration.",
        rounds: [
          "Round 1: Bug Fixing",
          "Round 2: Rapid Debugging",
          "Round 3: Code Relay"
        ],
        rules: [
          "Max 4 members per team.",
          "Strict time limits apply.",
          "Code quality and correctness matter."
        ],
        fee: "₹199",
        prizes: ["1st: ₹15,000", "2nd: ₹10,000", "3rd: ₹5,000"]
      },
      {
        id: "infrathon",
        title: "Infrathon",
        type: "Civil Engg",
        shortDesc: "Design smart infrastructure and stability models.",
        fullDesc: "Two-round design competition testing creativity and structural understanding.",
        rounds: [
          "Round 1: 3D residential model (Space planning)",
          "Round 2: Tower stability challenge (Load tests)"
        ],
        rules: ["Teams of 2 or Individual.", "Use organizer-provided materials only."],
        fee: "₹199",
        prizes: ["Pool: ₹30,000"]
      },
      {
        id: "frameforge",
        title: "Frame Forge",
        type: "Robotics",
        shortDesc: "Build a custom chassis and race it.",
        fullDesc: "Hands-on robotics challenge focusing on rapid design and assembly.",
        rules: ["Fabricate custom chassis using provided motors.", "Obstacle course testing."],
        fee: "₹199",
        prizes: ["Pool: ₹30,000"]
      },
      {
        id: "pharmtech",
        title: "PharmTech",
        type: "Pharmacy",
        shortDesc: "Innovation in Health Tech.",
        fullDesc: "Showcasing innovations in the pharmaceutical domain.",
        fee: "₹199",
        prizes: ["Pool: ₹30,000"]
      }
    ]
  },
  {
    id: "pitch",
    title: "Pitch Perfect",
    subtitle: "Launching Tomorrow's Startups",
    themeColor: "yellow",
    hex: "#FFE81F",
    icon: "Briefcase",
    events: [
      {
        id: "sharktank",
        title: "Shark Tank Style Pitch",
        type: "Business",
        shortDesc: "Pitch your startup vision to investors.",
        fullDesc: "Pitch your startup vision to investors and secure funding for your empire.",
        rounds: [
          "Round 1: Elimination (3 teams per thrust area)",
          "Round 2: Final Pitch (Top 3 of 15)"
        ],
        rules: [
          "Max 4 members.",
          "8-10 Slides PPT.",
          "5 Min Pitch + Q&A."
        ],
        fee: "₹499",
        prizes: ["1st: ₹70,000", "2nd: ₹50,000", "3rd: ₹30,000"]
      }
    ]
  },
  {
    id: "cineclash",
    title: "CineClash",
    subtitle: "Unleash Your Cinematic Vision",
    themeColor: "red",
    hex: "#FF3B3B",
    icon: "Clapperboard",
    events: [
      {
        id: "shortfilm",
        title: "Short Film Competition",
        type: "Creative",
        shortDesc: "Direct, edit, and showcase your saga.",
        fullDesc: "Create a short film on an open theme.",
        rounds: [
          "Round 1: Storytelling (Online)",
          "Round 2: 1-Min Short Film (Online)",
          "Round 3: Final Screening (Offline)"
        ],
        rules: ["Original content only.", "No offensive material."],
        fee: "₹499",
        prizes: ["1st: ₹30,000", "2nd: ₹20,000", "3rd: ₹10,000"]
      }
    ]
  },
  {
    id: "nexus",
    title: "Nexus",
    subtitle: "Battle. Survive. Dominate.",
    themeColor: "purple",
    hex: "#D500F9",
    icon: "Gamepad2",
    events: [
      {
        id: "valorant",
        title: "Valorant",
        type: "E-Sports",
        shortDesc: "5v5 Tactical Shooter Tournament.",
        rules: ["Max 4 members.", "Single Elimination -> Final Match."],
        fee: "₹200",
        prizes: ["1st: ₹10,000", "2nd: ₹5,000"]
      },
      {
        id: "bgmi",
        title: "BGMI",
        type: "Battle Royale",
        shortDesc: "Squad vs Squad Mobile Battle.",
        fee: "₹200",
        prizes: ["1st: ₹10,000", "2nd: ₹5,000"]
      },
      {
        id: "freefire",
        title: "Free Fire",
        type: "Battle Royale",
        shortDesc: "Survival of the fittest.",
        fee: "₹200",
        prizes: ["1st: ₹10,000", "2nd: ₹5,000"]
      }
    ]
  }
];
