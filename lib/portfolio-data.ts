export const profile = {
  name: "Sunya Afrasiabi",
  initials: "SA",
  major: "Mechanical Engineering & Philosophy",
  tagline: "Mechanical Engineering and Philosophy student at the University of Pennsylvania.",
  location: "Philadelphia",
  school: "University of Pennsylvania '28",
  email: "sunyaafr@engineering.upenn.edu",
  resume: "/Sunya-Afrasiabi-Resume.pdf",
  socials: {
    linkedin: "https://www.linkedin.com/in/sunya-afrasiabi",
    github: "https://github.com/sunya-afrasiabi",
  },
}

export type Project = {
  slug: string
  year: string
  title: string
  description: string
  longDescription: string[]
  tags: string[]
  image: string
  featured: boolean
  href?: string
  role?: string
  outcomes?: string[]
}

export const projects: Project[] = [
{
    slug: "butane-rocket-targeting",
    year: "Spring 2026",
    title: "Multi-Phase Butane Rocket & Numerical Simulation",
    description: "Designed, simulated, and experimentally validated a variable-mass water rocket using iterative thermodynamic modeling for precise trajectory prediction and target acquisition.",
    longDescription: [
      "Designed and optimized a butane-powered water rocket capable of navigating constrained flight paths and engaging targets under strict spatial clearance requirements, given as part of an engineering lab. This project used aerodynamic design, thermodynamic modeling, numerical simulation, and experimental validation to predict and optimize rocket trajectories.",
      "A custom Python simulation was developed to model the rocket as a variable-mass dynamic system, coupling temperature-dependent butane vaporization, pressure-driven fluid expulsion, aerodynamic drag, and ballistic flight. The solver employed multi-stage Euler integration to simulate thrust generation and trajectory evolution in real time. Experimental launches were used to calibrate drag coefficients, thermal efficiency factors, and propellant-loading models through iterative comparison between simulated and measured flight data.",
      "To improve predictive accuracy, flight trajectories were reconstructed from video recordings using perspective-corrected kinematic tracking. Analysis of apex height, velocity decay, and range performance revealed previously unmodeled freeze-out behavior caused by insufficient thermal mass during butane vaporization. These findings informed the development of empirical correction factors and optimization routines that significantly improved targeting consistency.",
      "The final system incorporated a multi-parameter search algorithm that evaluated launch angle, water mass, butane loading, and thermal buffering effects to identify launch configurations capable of clearing spatial obstacles while minimizing target error.",    
    ],
    tags: ["Fluid Mechanics", "Thermodynamics", "Python (SciPy)", "Numerical Integration"],
    image: "/projects/butane-rocket.jpg",
    featured: true,
    role: "MechE Lab Sophomore Final Project",
    href: "", 
    outcomes: [
      "Developed a custom variable-mass rocket flight simulator in Python using multi-stage Euler integration with a 5 ms timestep to model coupled thermodynamic and ballistic flight behavior.",
      "Implemented a multidimensional optimization framework evaluating launch angle, propellant loading, and thermal buffering parameters against a weighted target-acquisition cost function.",
      "Reconstructed full flight trajectories from perspective-corrected video data to calibrate drag coefficients, quantify thrust decay, and identify thermodynamic freeze-out effects.",
      "Integrated Antoine-equation vapor pressure modeling and empirical efficiency corrections to improve prediction accuracy under real-world operating conditions.",
      "Designed and fabricated a low-drag rocket airframe featuring an elliptical ABS nose cone and passively stabilized canted ASA fins for improved flight stability and range.",
    ],
    links: [
      { label: "Google Colab Codebase", url: "https://colab.research.google.com/drive/1Ibv-5OsyrvuQJYkHpkiBurK4cnaGsRCC?usp=sharing" },
      { label: "Launch Demonstration Footage", url: "/projects/rocket.launch.MOV" },
      { label: "Experimental & Calibration Logs", url: "https://docs.google.com/spreadsheets/d/1GZ_oA8uZZpWpOq7V8PbKMCz3gbvjFobtUqlkufEcfhU/edit?usp=sharing" }
    ]
  },
  
  {
    slug: "rover-chassis",
    year: "Spring 2026",
    title: "Rover Chassis Prototype",
    description: "Created under University Rover Challenge constraints, as part of Mars Rover Club.",
    longDescription: [
      "As part of a three-person engineering team, we designed and modeled a structural chassis prototype for a Mars rover optimized around University Rover Challenge (URC) competition constraints. Using SolidWorks, we created detailed CAD assemblies and integrated individual components into a cohesive rover architecture. We applied Finite Element Analysis (FEA) to evaluate dynamic load paths and iteratively refined bracket placement, wall thicknesses, and ribbed pocket geometries to reduce mass while maintaining structural integrity under simulated operating conditions.",
      "To manage high-impact loading scenarios, we developed a material strategy tailored to component-specific requirements. High-strength Grade 5 titanium rods and 3/8-inch threaded rods were incorporated to withstand peak tensile and bending stresses, while lightweight 3D-printed lattice structures were used for non-structural enclosures and rapid prototyping.",
    ],
    tags: ["Kinematics", "Stress/ Strain Optimization", "SolidWorks", "3D Printing"],
    image: "/projects/chassis.jpg",
    featured: true,
    role: "Chassis Team, UPenn Mars Rover Club",
    outcomes: [
      "Designed precise SolidWorks suspension assemblies to eliminate kinematic interference throughout the full range of angular motion.",
      "Conducted stress, strain, and material analyses on suspension brackets to reduce weight while maintaining structural integrity under high-impact loading.",
      "Engineered multi-axis suspension linkages using 3/8-inch left-hand threaded ball joint sockets and bearings to enable smooth articulation across uneven terrain.",
      "Improved chassis integration and serviceability through lightweight PVC support structures secured with flange-mounted shaft collars to resist torsional deformation.",
    ],
  },
  {
    slug: "seed-cleaner",
    year: "Fall 2025",
    title: "Vacuum-powered Seed Cleaner",
    description: "Created for Novick Urban Farm with automating seed-chaff separation to improve post-harvest efficiency, as part of Engineers without Borders.",
    longDescription: [
      "Manual seed-chaff separation is a labor-intensive bottleneck in urban agriculture. To automate this process for Novick Urban Farm, our team designed and fabricated a custom vertical aspirator that uses fluid dynamics and material density differences to separate seeds from lightweight debris. The primary design challenge was creating a controlled, uniform negative-pressure environment that lifted chaff while allowing heavier seeds to settle.",
      "We engineered a rigid vertical separation column featuring a zig-zag internal flow path and custom swirl chamber beneath the vacuum outlet. The geometry increased particle residence time and promoted repeated exposure to cross-flowing air, improving separation efficiency during each pass. Laser-cut acrylic viewing panels enabled visual tuning of airflow behavior, while 3D-printed inlet nozzles allowed rapid iteration of the fluid delivery system.",
    ],
    tags: ["Fluid Mechanics", "Rapid Prototyping", "SolidWorks", "3D Printing"],
    image: "/projects/seed-cleaner.jpg",
    featured: true,
    role: "Farm Committee, Engineers without Borders",
    outcomes: [
      "Automated post-harvest processing by separating viable seeds from lightweight chaff through vacuum-powered aspiration.",
      "Fabricated the system using rapid prototyping methods, combining wood framing, custom fasteners, and acrylic panels.",
      "Collaborated on a five-person team to deploy the machinery and construct a winter greenhouse enabling year-round crop cultivation.",
    ],
  },
]

export type Writing = {
  slug: string
  title: string
  date: string
  excerpt: string
  href: string
  tag: string
  featured: boolean
}

export const writing: Writing[] = [
  {
    slug: "neural-networks",
    title: "Linear Algebra Foundations of Neural Networks",
    date: "August 2025",
    excerpt: "An expository research paper linking advanced linear algebra concepts to neural network architectures, training algorithms, and real-world robotics applications. Written for MATH 3120, a theory-based linear algebra course.",
    href: "https://drive.google.com/file/d/1qKJMd1UthNnXQKS5OtD8bKFdRR9bpLSl/view?usp=sharing",
    tag: "Research",
    featured: true,
  },
  {
    slug: "wildlife-prevention",
    title: "Aviation Solutions for Wildlife Prevention",
    date: "May 2025",
    excerpt: "Investor-oriented whitepaper on UAVs, AI wildfire prediction, and aerospace innovations, framing $6.4B+ market opportunities and potential $5B annual cost savings. Co-authored as part of Wharton Undergraduate Aerospace Club.",
    href: "https://drive.google.com/file/d/1mxdoEXoXRByKiuIf6_fvRVWCfc1j1aYx/view?usp=sharing",
    tag: "Whitepaper",
    featured: true,
  },
  {
    slug: "ai-companions",
    title: "Monetizing Loneliness: A Kantian and Utilitarian Critique of AI Companions",
    date: "July 2026",
    excerpt: "A philosophy paper written to examine the ethics of AI companion platforms, arguing that current designs profit by intentionally cultivating emotional dependency. Written for PHIL 1330, an ethics course.",
    href: "https://drive.google.com/file/d/1WLfoTyidHOX-sz_UpWj1sylbDtit8kmY/view?usp=sharing",
    tag: "Philosophy",
    featured: true,
  },
]

export type Role = {
  period: string
  title: string
  org: string
  description: string
}

export const roles: Role[] = [
  {
    period: "May 2026 - Present",
    title: "Undergraduate Researcher",
    org: "University of Pennsylvania, Li Group",
    description: "Conduct research on the design and fabrication of insect wing-inspired morphing structures, drawing on principles of bio-inspired engineering and adaptive systems. Design and model bio-inspired morphing geometries using Rhino and Grasshopper.",
  },
  {
    period: "Sept 2025 - Dec 2025",
    title: "Radiation Subteam Lead",
    org: "NASA Proposal Writing and Evaluation Experience, L’SPACE Program",
    description: "Developed innovative solution to the limitation of radiation-resistant materials in HDPE composites to enhance material performance under lunar radiation conditions. Contributed to technical proposal development and NASA mission review process. Ranked top 6 proposal out of 40+ teams.",
  },
  {
    period: "Jan 2026 - Present",
    title: "Outreach and Marketing Director",
    org: "Penn Astronomical Student Association (PASA)",
    description: "Led outreach initiatives and external partnerships to grow student engagement in astronomy programming. Secured $200 in external funding, developed telescope operation skills for weekly telescope observation nights, and coordinated cross-organizational events with campus groups.",
  },
  {
    period: "Jan 2021 - Aug 2024",
    title: "Founder and Project Manager",
    org: "#MyStory Program",
    description: "Founded an initiative that aims to increase cultural awareness through a combination of oral history, narrative therapy, and portrait exhibition. Secured $24k+ through donations, fundraisers, and grant funding, including funding from Riley's Way Foundation, Prudential, Ashoka, and Peter&Elizabeth Tower Foundation. Collaborated with 20+ community partners and oversaw 40+ volunteers.",
  },
  {
    period: "Sept 2024 - Present",
    title: "University Mascot",
    org: "University of Pennsylvania, Athletics",
    description: "Perform at athletics, alumni, and community events; engage large audiences through nonverbal communication, improvisation, and high-energy public engagement in fast-paced, high-visibility environments.",
  },
]

export type SkillGroup = {
  heading: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    heading: "Design & Machining",
    items: ["SolidWorks", "Rhino & Grasshopper", "GD&T", "3D Printing & Rapid Prototyping"],
  },
  {
    heading: "Code",
    items: ["MATLAB", "Python", "Arduino", "NumPy & SciPy"],
  },
  {
    heading: "Analysis",
    items: ["Finite Element Analysis", "Stress & Strain Analysis", "Cost & Risk Analysis", "Data Visualization"],
  },
  {
    heading: "Other",
    items: ["Logic & Argumentation", "Project Management", "Proposal & Grant Writing", "Microsoft Office"],
  },
]

export const interests: string[] = [
  "AI & Robotics",
  "Compliant Mechanisms",
  "Ethics of Technology",
  "Machining",
  "Sketching Linkages",
]
