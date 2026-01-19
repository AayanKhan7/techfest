export const EVENTS = [
  // =================================================================================
  // 1. PITCH PERFECT (Shark Tank)
  // =================================================================================
  {
    id: 'pitch-perfect',
    title: 'PITCH PERFECT',
    type: 'Startup Pitching (Shark Tank)',
    planetType: 'mercury',
    planetAccent: '#9e9e9e', // Grey
    path: '/pitch-perfect',
    // Header Info
    description: "Pitch your startup vision to investors and secure funding for your empire. Domains: Fintech, HealthTech, Agri-Tech, Sustainable Solutions, & EdTech.",
    prizePool: '₹1,50,000 Total', 
    registrationFee: '₹499 per team',
    teamSize: 'Up to 4 members',
    
    // IMPORTANT: This 'subEvents' array is required for the content to show up!
    subEvents: [
      {
        title: "Pitch Perfect Main Event",
        description: "Present your business model to a panel of investors. Focus on innovation, feasibility, and market impact. (PPT Deadline: 18th Feb).",
        image: "/assets/images/pitchperfect.png", // Ensure this PNG exists
        fee: "₹499 / Team",
        date: "18 Feb 2026",
        rounds: "PPT Submission -> Final Pitch",
        prize: "1st: ₹70k | 2nd: ₹50k | 3rd: ₹30k"
      }
    ]
  },

  // =================================================================================
  // 2. CINECLASH (Short Film)
  // =================================================================================
  {
    id: 'cineclash',
    title: 'CINECLASH',
    type: 'Short Film Competition',
    planetType: 'moon',
    planetAccent: '#cfcfcf', // Moon White
    path: '/cineclash',
    description: "Direct, edit, and showcase your cinematic saga. A digital marketing–oriented competition to encourage storytelling and branding.",
    prizePool: '₹6,00,000 Total', 
    registrationFee: '₹499 per team',
    teamSize: 'Individual or Team',

    subEvents: [
      {
        title: "CineClash Competition",
        description: "Create a short film aligning with the theme. Round 1 focuses on promotion (trailer), Round 2 on content quality.",
        image: "/assets/images/cineclash.png", 
        fee: "₹499 / Team",
        date: "8 Feb (Trailer) | 18 Feb (Film)",
        rounds: "2 Rounds",
        prize: "1st: ₹3L | 2nd: ₹2L | 3rd: ₹1L"
      }
    ]
  },

  // =================================================================================
  // 3. THE QUADRANT (Technical)
  // =================================================================================
  {
    id: 'quadrant',
    title: 'THE QUADRANT',
    type: 'Technical Event',
    planetType: 'neptune',
    planetAccent: '#3f8cff', // Blue
    path: '/quadrant',
    description: "Engineer solutions and decode challenges. Choose your battlefield: Robotics, Coding, DevOps, or PharmaTech.",
    prizePool: '₹50,000+',
    registrationFee: 'Varies',
    teamSize: 'Varies',

    subEvents: [
      {
        title: "FrameForge (Robotics)",
        description: "Design a line-following vehicle with a modular cage (20x20cm limit). No glue/welding allowed—only mechanical locking.",
        image: "/assets/images/frameforge.png",
        fee: "₹200 / Team", 
        date: "11 April", 
        rounds: "Single Round Race",
        prize: "₹15,000 Pool"
      },
      {
        title: "Enigma (Coding Arena)",
        description: "Solve algorithmic challenges, debug fast, and compete against the best minds. 5 Rounds of intense coding.",
        image: "/assets/images/bug2build.png",
        fee: "Free Registration",
        date: "11 April",
        rounds: "5 Rounds",
        prize: "1st: ₹7k | 2nd: ₹5k | 3rd: ₹3k"
      },
      {
        title: "Infrathon (DevOps)",
        description: "Showcase your cloud infrastructure skills. Build, deploy, and scale in this hackathon-style event.",
        image: "/assets/images/infrathon.png",
        fee: "₹300 / Team",
        date: "12 April",
        rounds: "Build & Deploy",
        prize: "₹10,000 Pool"
      },
      {
        title: "PharmaTech",
        description: "Innovate at the intersection of technology and medicine. Present solutions for real-world healthcare problems.",
        image: "/assets/images/pharmatech.png",
        fee: "₹250 / Team",
        date: "12 April",
        rounds: "Presentation",
        prize: "₹8,000 Pool"
      }
    ]
  },

  // =================================================================================
  // 4. NEXUS (Gaming)
  // =================================================================================
  {
    id: 'nexus',
    title: 'NEXUS',
    type: 'Gaming Event',
    planetType: 'uranus',
    planetAccent: '#66d1c1', // Cyan
    path: '/nexus',
    description: "Battle through virtual arenas in this high-intensity esports tournament. Prove your dominance.",
    prizePool: '₹20,000+',
    registrationFee: 'Varies',
    teamSize: 'Squad Based',

    subEvents: [
      {
        title: "Havoc (BGMI)",
        description: "Adrenaline-fueled battleground. Map toss determines side. Best of 1 elimination.",
        image: "/assets/images/bgmi.png",
        fee: "₹200 / Squad",
        date: "20 FEB",
        rounds: "Custom Match",
        prize: "₹5,000 Pool"
      },
      {
        title: "Araxys (Valorant)",
        description: "5v5 Tactical Shooter. Team up, strategize, and dominate. Single match elimination.",
        image: "/assets/images/valorant.png",
        fee: "₹400 / Team",
        date: "20 FEB",
        rounds: "Single Match",
        prize: "₹12,000 Pool"
      },
      {
        title: "Free Fire",
        description: "Fast-paced survival shooter on mobile. Be the last squad standing. Knockout format.",
        image: "/assets/images/freefire.png",
        fee: "₹150 / Squad",
        date: "20 FEB",
        rounds: "Knockout",
        prize: "₹3,000 Pool"
      }
    ]
  },
]