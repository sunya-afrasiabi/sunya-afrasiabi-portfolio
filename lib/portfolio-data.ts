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
  links?: { label: string; url: string }[]
}

export const projects: Project[] = [
  {
    slug: "butane-rocket-targeting",
    year: "Spring 2026",
    title: "Multi-Phase Butane Rocket Targeting & Numerical Simulation",
    description: "Iterative thermodynamic modeling and experimental calibration of a variable-mass water rocket for precise spatial target acquisition.",
    longDescription: [
      "To clear strict spatial clearance obstacles and hit targets up to 30m away, our team engineered a high-velocity butane-powered 2L projectile system optimized via custom external aerodynamics, including an elliptical ABS nose cone and passively stabilized canted ASA fins.",
      "We transitioned from an introductory Random Forest machine learning pipeline to a deterministic physics integration engine. Our final codebase runs a multi-stage Euler time-integration solver linking temperature-dependent vaporization profiles (Antoine Equation) with gas-phase isentropic nozzle flow expansions to predict optimal launch trajectories.",
      "Through 2D kinematics tracking reconstruction, we isolated thrust decay anomalies from atmospheric drag curves. This analysis proved that lower fluid configurations fell into endothermic freeze-out thresholds, prompting a grid-search penalty function to maximize targeted flight consistency."
    ],
    tags: ["Fluid Mechanics", "Thermodynamics", "Python (SciPy)", "Numerical Integration"],
    image: "/projects/butane-rocket.jpg",
    featured: true,
    outcomes: [
      "Designed a custom variable-mass multi-stage Euler integration solver in Python running at a 0.005-second timestep. [Code Architecture: https://colab.research.google.com/drive/1Ibv-5OsyrvuQJYkHpkiBurK4cnaGsRCC?usp=sharing]",
      "Developed a multi-variable grid search routine optimizing launch angles, propellant loading, and thermal buffering functions against a heavily weighted cost matrix.",
      "Reconstructed full ballistic flight arcs via digital perspective video tracking to isolate transient fluid loss variables and adjust active aerodynamic drag coefficients.",
      "Launch Demonstration Video Link: /projects/rocket.launch.MOV",
      "Complete Experimental Trials & Calibration Logs Data Matrix: https://docs.google.com/spreadsheets/d/1GZ_oA8uZZpWpOq7V8PbKMCz3gbvjFobtUqlkufEcfhU/edit?usp=sharing"
    ]
  },
  {
    slug: "rover-chassis",
    year: "Spring 2026",
    title: "Rover Chassis",
    description: "Created under University Rover Challenge constraints, as part of Mars Rover Club.",
    longDescription: [
      "As part of a three-person engineering team, we designed and modeled a structural chassis prototype for a Mars rover optimized around University Rover Challenge (URC) competition constraints. Using SolidWorks, we created detailed CAD assemblies and integrated individual components into a cohesive rover architecture. We applied Finite Element Analysis (FEA) to evaluate dynamic load paths and iteratively refined bracket placement, wall thicknesses, and ribbed pocket geometries to reduce mass while maintaining structural integrity under simulated operating conditions.",
      "To manage high-impact loading scenarios, we developed a material strategy tailored to component-specific requirements. High-strength Grade 5 titanium rods and 3/8-inch threaded rods were incorporated to withstand peak tensile and bending stresses, while lightweight 3D-printed lattice structures were used for non-structural enclosures and rapid prototyping."
    ],
    tags: ["Kinematics", "Stress/ Strain Optimization", "SolidWorks", "3D Printing"],
    image: "/projects/chassis.jpg",
    featured: true,
    role: "Chassis Team | UPenn Mars Rover Club",
    outcomes: [
      "Designed precise SolidWorks suspension assemblies to eliminate kinematic interference throughout the full range of angular motion.",
      "Conducted stress, strain, and material analyses on suspension brackets to reduce weight while maintaining structural integrity under high-impact loading.",
      "Engineered multi-axis suspension linkages using 3/8-inch left-hand threaded ball joint sockets and bearings to enable smooth articulation across uneven terrain.",
      "Improved chassis integration and serviceability through lightweight PVC support structures secured with flange-mounted shaft collars to resist torsional deformation."
    ],
  },
  {
    slug: "npwee",
    year: "Fall 2026",
    role: "Radiation Subteam Lead | NASA L'Space Program",
    title: "NASA L'SPACE Proposal Writing & Evaluation Experience",
    description: "Led the radiation research effort as radiation subteam lead for our team's proposed lunar technology, contributing to technical research, systems engineering, proposal development, and NASA-style peer proposal evaluation.",
    longDescription: [
      "The NASA Proposal Writing and Evaluation Experience (NPWEE) Academy is a competitive engineering program sponsored by NASA's Marshall Space Flight Center that immerses students in developing technology proposals addressing real NASA mission needs. As the radiation subteam lead on an interdisciplinary team, I contributed to the development of a concept for advanced radiation shielding intended for future lunar applications. The project culminated in the submission of a complete NASA-style research proposal and technology development plan.",
      "Rather than focusing solely on design, the program emphasized the complete engineering development process. Our team evaluated existing technologies, conducted literature reviews, compared design alternatives, considered manufacturing constraints, developed testing and validation plans, estimated project costs, assessed technical risks, and created a phased project schedule. My role focused on radiation shielding research, technical writing, and collaborating with teammates specializing in thermal analysis, CAD, simulations, and project management.",
      "One of the most valuable aspects of the experience was learning how engineering ideas are communicated. We produced a professional proposal modeled after those submitted to NASA, requiring us to justify our concept, align it with NASA technology priorities, define measurable objectives, develop work packages, estimate budgets, and communicate complex technical ideas to reviewers. This significantly strengthened my technical writing and engineering communication skills.",
      "After submitting our proposal, participants were trained as proposal reviewers and served on a NASA-style peer review panel. Evaluating competing proposals using structured scoring criteria provided valuable insight into how engineering projects are assessed for technical merit, feasibility, innovation, and execution. Experiencing both the proposal development and evaluation processes fundamentally changed how I approach engineering communication and project planning.",
      "Beyond the technical work, the program strengthened my ability to collaborate within a multidisciplinary engineering team operating in a virtual environment. Working alongside students with backgrounds in aerospace, mechanical engineering, materials science, and simulation reinforced the importance of interdisciplinary collaboration in solving complex engineering challenges."
    ],
    tags: ["Proposal Writing", "Systems Engineering", "Materials Science"],
    image: "/projects/lspace.png",
    featured: true,
    outcomes: [
      "Developed skills in: technical proposal writing, project planning and risk assessment, and scientific and technical documentation.",
      "Final proposal scored in top 6 out of 40+ national teams."
    ]
  },
  {
    slug: "seed-cleaner",
    year: "Fall 2025",
    title: "Vacuum-powered Seed Cleaner",
    description: "Created for Novick Urban Farm with automating seed-chaff separation to improve post-harvest efficiency, as part of Engineers without Borders.",
    longDescription: [
      "Manual seed-chaff separation is a labor-intensive bottleneck in urban agriculture. To automate this process for Novick Urban Farm, our team designed and fabricated a custom vertical aspirator that uses fluid dynamics and material density differences to separate seeds from lightweight debris. The primary design challenge was creating a controlled, uniform negative-pressure environment that lifted chaff while allowing heavier seeds to settle.",
      "We engineered a rigid vertical separation column featuring a zig-zag internal flow path and custom swirl chamber beneath the vacuum outlet. The geometry increased particle residence time and promoted repeated exposure to cross-flowing air, improving separation efficiency during each pass. Laser-cut acrylic viewing panels enabled visual tuning of airflow behavior, while 3D-printed inlet nozzles allowed rapid iteration of the fluid delivery system."
    ],
    tags: ["Fluid Mechanics", "Rapid Prototyping", "SolidWorks", "3D Printing"],
    image: "/projects/seed-cleaner.jpg",
    featured: false,
    role: "Farm Committee | Engineers without Borders",
    outcomes: [
      "Automated post-harvest processing by separating viable seeds from lightweight chaff through vacuum-powered aspiration.",
      "Fabricated the system using rapid prototyping methods, combining wood framing, custom fasteners, and acrylic panels.",
      "Collaborated on a five-person team to deploy the machinery and construct a winter greenhouse enabling year-round crop cultivation."
    ],
  },
  {
    slug: "dragonfly-wing",
    year: "Current",
    title: "Bio-Inspired Dragonfly Wing Morphing",
    description: "Designing and modeling a bio-inspired wing morphing structure using Grasshopper and Rhino for powder-based 3D printing.",
    longDescription: [
      "I explored how insects deploy and control ultralight wings to develop bio-inspired structures for soft robotics and micro aerial vehicles. Beginning with an interdisciplinary literature review spanning insect physiology, aerodynamics, soft robotics, and additive manufacturing, I identified the biological mechanisms that make insect wings both lightweight and structurally efficient (including hydraulic hemolymph expansion, graded stiffness, corrugated geometries, and vein-membrane architectures) and translated these concepts into engineering design principles for deployable morphing wings.",
      "I then transformed those principles into a fully parametric CAD workflow using Rhino and Grasshopper. By deriving analytical relationships for vein taper, corrugation amplitude, cell-density gradients, and inertial mass distribution, I developed a configurable wing-generation framework that enabled rapid design iteration while preserving the structural characteristics observed in biological wings.",
      "I am currently working on ensuring the design can be physically manufactured. I am incorporating the constraints of powder-bed TPU additive manufacturing directly into the modeling process by iteratively optimizing hollow vein geometries, channel diameters, wall thicknesses, and overall wing dimensions to balance printability, structural integrity, and powder evacuation."
    ],
    tags: ["Grasshopper", "Rhino", "3D Printing", "Biomimicry"],
    image: "/projects/dragonfly.jpg",
    featured: false,
    outcomes: [
      "Conducted an interdisciplinary review of insect wing biomechanics, soft robotics, and deployable aerospace structures to establish engineering design principles for morphing wings.",
      "Derived parametric equations governing vein taper, corrugation amplitude, cell spacing, and mass distribution for bio-inspired wing geometries.",
      "Developed fully parametric Rhino/Grasshopper models capable of generating biologically inspired wing architectures with configurable structural features.",
      "Optimized designs for powder-bed TPU additive manufacturing by evaluating minimum feature sizes, hollow channel dimensions, wall thicknesses, and powder evacuation constraints."
    ]
  },
  {
    slug: "bubble-tea-awning",
    year: "Current",
    role: "Mechanical Engineer",
    title: "Structural Hardware for Automated Vending",
    description: "Currently designing and manufacturing the exterior framework, awning, and high-visibility signage for deployment at 30th Street Station using a hybrid workflow of 3D printing, laser-cut acrylics, and custom mounting solutions.",
    longDescription: [
      "As a Mechanical Engineer for Munch Industries Inc., I am currently designing and manufacturing the structural framework, awning, and signage for Orble, an automated boba tea vending machine startup. Because the machines are slated for high-visibility public deployments, such as Philadelphia's 30th Street Station, the structural components require a clean, professional aesthetic while maintaining robust structural integrity. To ensure readability from over 10 feet away, I optimized the typography and layout for high visual contrast, sizing the text between 1.75 and 4.5 inches tall depending on the specific machine constraints. The primary engineering challenge involves adapting the mounting hardware to varying environments, ranging from securing heavy components to wooden posts using L-brackets and wood screws, to designing custom 3D-printed slot channels secured with 3M VHB tape for direct chassis integration.",
      "I modeled the custom 3D-printed bases, signage, and structural clearances in CAD before moving to physical assembly. To navigate the maximum dimensional limits of our available laser cutters and 3D printers, I utilized a carefully planned hybrid manufacturing approach. This workflow included laser-cutting 1/4-inch black acrylic panels, applying permanent adhesive vinyl for branding, and integrating rubber washers to safely distribute torque and prevent the acrylic from cracking under concentrated stress from the mounting fasteners."
    ],
    tags: ["SolidWorks", "DFM (Design for Manufacture)", "3D Printing", "Laser Cutting"],
    image: "", 
    featured: false,
    outcomes: [
      "Designed and fabricated high-contrast acrylic signage and awning components for public-facing automated vending machines deployed at 30th Street Station.",
      "Engineered location-specific mounting solutions, including heavy-duty L-bracket structural supports and custom 3D-printed slot-channel clamps secured with 3M VHB tape, to prevent heavy acrylic panels from shearing off the machine.",
      "Calculated strict spatial clearances—such as ensuring a 66-inch bottom clearance at the 30th Street Station deployment—and adapted CAD models to fit the specific build volume constraints of available university fabrication labs.",
      "Implemented a robust assembly workflow combining 1/4-inch laser-cut black acrylic, permanent vinyl lettering, custom 3D-printed brackets, and rubber load-distributing washers to mitigate fracture risks."
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
    slug: "wildfire-prevention",
    title: "Aviation Solutions for Wildfire Prevention",
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
    period: "July 2026 - Present",
    title: "Mechanical Engineer",
    org: "Munch Industries Inc",
    description: "Design and fabricate the awning and structural framework for Orble, an automated boba tea vending machine startup, using SolidWorks, laser cutting, 3D printing, and PVC fabrication.",
  },
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
    heading: "Design & CAD",
    items: ["SolidWorks", "Fusion 360", "GD&T", "Design for Manufacture"],
  },
  {
    heading: "Analysis & Code",
    items: ["MATLAB", "Python", "FEA / Ansys", "NumPy & SciPy"],
  },
  {
    heading: "Fabrication",
    items: ["CNC Milling", "Lathe Work", "3D Printing", "Rapid Prototyping"],
  },
  {
    heading: "Thinking & Writing",
    items: ["Ethics of Technology", "Logic", "Long-form Essays", "Argument Design"],
  },
]

export const interests: string[] = [
  "AI & Robotics",
  "Compliant Mechanisms",
  "Ethics of Technology",
  "Machining",
  "Hannah Arendt",
  "Sketching Linkages",
]
