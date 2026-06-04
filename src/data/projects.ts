export interface Project {
  title: string;
  category: 'Government' | 'Commercial' | 'Infrastructure' | 'Residential';
  client: string;
  location: string;
  status: 'ONGOING' | 'COMPLETED';
  img: string;
  value: string;
  description: string;
  teamLead: string;
  year: string;
  highlights: string[];
}

export const projectsData: Project[] = [
  {
    title: "TANESCO Head Office",
    category: "Government",
    client: "TANESCO / NOSUTO ASSOCIATES",
    location: "Ihumwa Government City, Dodoma",
    status: "ONGOING",
    img: "/Tanesco.jpg",
    value: "TZS 4,920,350,000",
    description: "Flagship energy authority headquarters. Features high architectural symmetry, thermal insulated facade walls, and wide open-plan executive chambers designed to support state-of-the-art administrative functions.",
    teamLead: "Eng. Peter John Mwamaso",
    year: "2024 - Present",
    highlights: [
      "Large span composite floor trusses",
      "Thermal mass insulation building skin",
      "Integrated electrical substation foundation"
    ]
  },
  {
    title: "Renovation of NSSF Benjamini William Mkapa Pension Towers",
    category: "Commercial",
    client: "NATIONAL SOCIAL SECURITY FUND (NSSF)",
    location: "Dar es Salaam",
    status: "ONGOING",
    img: "/Nssf.jpg",
    value: "Confidential",
    description: "Comprehensive structural retrofitting, interior load reorganization, and external glass-curtain wall modernization of the Benjamini William Mkapa Pension Towers to support modern commercial activities in Dar es Salaam's central business district.",
    teamLead: "QS. Dr. Mhenga Agneta",
    year: "2024 - Present",
    highlights: [
      "Structural integrity inspection and reinforcement scanning",
      "Exterior facade structural framing installation",
      "High-stress load redistribution planning"
    ]
  },
  {
    title: "ICT Service Center (ISC) – NIDA Kibaha",
    category: "Infrastructure",
    client: "NIDA / CIP INTERNATIONAL",
    location: "Kibaha, Coastal Region",
    status: "ONGOING",
    img: "/NIDA.jpeg",
    value: "USD 3,868,245.50",
    description: "Engineering consultation and structural design for the National Identification Authority's main ICT service node. Focuses on heavy floor load capacities for server units, backup power room safety, and robust security walls.",
    teamLead: "Arch. Dorothea Gervas",
    year: "2024 - Present",
    highlights: [
      "High-load-bearing structural slab engineering",
      "Integration of specialized HVAC cable paths",
      "Secure perimeter structural protection design"
    ]
  },
  {
    title: "Chancery Building & Ambassador's Residence",
    category: "Government",
    client: "MINISTRY OF FOREIGN AFFAIRS / ABECC",
    location: "Kigali, Rwanda",
    status: "ONGOING",
    img: "/Rwanda.jpg",
    value: "USD 23,846,153.85",
    description: "Designing the new chancery building and ambassador's private residence in Kigali. Styled with unique architectural aesthetics representing Tanzanian heritage while utilizing local materials and advanced terrain terracing.",
    teamLead: "Eng. Peter John Mwamaso",
    year: "2023 - Present",
    highlights: [
      "Diplomatic-grade security boundary wall structures",
      "Terraced foundation design for Rwanda's hilly landscape",
      "Integrated natural cooling ventilation pathways"
    ]
  },
  {
    title: "Multi-Storey Investment Building – Moroni",
    category: "Government",
    client: "MINISTRY OF FOREIGN AFFAIRS / ABECC",
    location: "Moroni, Comoro",
    status: "ONGOING",
    img: "/hero1.jpg",
    value: "USD 17,307,692.31",
    description: "A multi-storey commercial and investment property designed to support Tanzania's diplomatic assets in Comoro. Engineered to withstand maritime conditions, featuring high-durability concrete and energy-efficient building systems.",
    teamLead: "Eng. Peter John Mwamaso",
    year: "2023 - Present",
    highlights: [
      "Corrosion-resistant concrete reinforcement detailing",
      "Large span retail and office floor layout design",
      "Solar grid integration structural support"
    ]
  },
  {
    title: "Multi-Storey Investment Building – Nairobi",
    category: "Government",
    client: "MINISTRY OF FOREIGN AFFAIRS / ABECC",
    location: "Nairobi, Kenya",
    status: "ONGOING",
    img: "/hero2.jpg",
    value: "USD 38,461,538.46",
    description: "A flagship commercial investment tower for the Tanzania High Commission in Nairobi. Includes luxury office spaces, conference centers, and high-end security amenities in Nairobi's commercial zone.",
    teamLead: "QS. Dr. Mhenga Agneta",
    year: "2024 - Present",
    highlights: [
      "Seismic-resistant frame designs to Kenyan building codes",
      "Multi-level underground parking structural excavation",
      "Green-star energy building certification compliance"
    ]
  },
  {
    title: "Apartment Building & Ambassador's Residence – Burundi",
    category: "Residential",
    client: "MINISTRY OF FOREIGN AFFAIRS / ABECC",
    location: "Bujumbura, Burundi",
    status: "ONGOING",
    img: "/hero3.jpg",
    value: "USD 25,000,000",
    description: "Residential complex consisting of multiple staff apartment suites and the primary residence of the Tanzanian Ambassador. Features sustainable local landscaping, reinforced foundation pads, and high-security access gates.",
    teamLead: "Arch. Dorothea Gervas",
    year: "2024 - Present",
    highlights: [
      "Diplomatic security zone planning",
      "Reinforced frame design for residential units",
      "Sustainable drainage and stormwater management systems"
    ]
  },
  {
    title: "Chancery, Investment & Ambassador's Residence – Mozambique",
    category: "Government",
    client: "MINISTRY OF FOREIGN AFFAIRS / ABECC",
    location: "Maputo, Mozambique",
    status: "ONGOING",
    img: "/hero1.jpg",
    value: "USD 23,846,153.85",
    description: "A large-scale project encompassing the official chancery, investment spaces, and the diplomat residence. Built along coastal Maputo, incorporating high wind-load engineering and advanced moisture insulation systems.",
    teamLead: "Eng. Peter John Mwamaso",
    year: "2023 - Present",
    highlights: [
      "High wind-resistant roof framing systems",
      "Anti-saline concrete mixture formulation",
      "Diplomatic security access checkpoints"
    ]
  },
  {
    title: "Office for Registrar of Political Parties",
    category: "Government",
    client: "OFFICE OF THE REGISTRAR OF POLITICAL PARTIES",
    location: "Mlimani, Dodoma",
    status: "ONGOING",
    img: "/Tanesco.jpg",
    value: "USD 25,000,000",
    description: "New administrative office block in Dodoma. Designed with classic government building proportions, modern office interior structures, and high energy efficiency for the scorching Dodoma climate.",
    teamLead: "QS. Dr. Mhenga Agneta",
    year: "2024 - Present",
    highlights: [
      "Passive cooling building shell engineering",
      "Modern layout planning for political registries",
      "Dodoma government city structural compliance"
    ]
  },
  {
    title: "Integrated Operations Center (IOC) – NIDA",
    category: "Government",
    client: "NIDA / CIP INTERNATIONAL",
    location: "Dodoma",
    status: "ONGOING",
    img: "/NIDA.jpeg",
    value: "USD 19,067,434.05",
    description: "The command center for national identification data collection and security operations in Dodoma. Engineered for disaster resilience, server column storage, and 24/7 power supply continuity.",
    teamLead: "Arch. Dorothea Gervas",
    year: "2024 - Present",
    highlights: [
      "Blast-resistant foundation walls",
      "Integrated underground bunker structure",
      "Continuous power backup facility containment"
    ]
  },
  {
    title: "National ID System Expansion",
    category: "Infrastructure",
    client: "NIDA / CIP INTERNATIONAL",
    location: "Tanzania (Multiple Sites)",
    status: "ONGOING",
    img: "/NIDA.jpeg",
    value: "USD 29,469,806.40",
    description: "Civil works and structural adjustments across 31 regional NIDA offices (RRO Type I & II) nationwide. Focuses on upgrading regional server hubs, installing solar power frames, and organizing secure biometric registration zones.",
    teamLead: "Eng. Peter John Mwamaso",
    year: "2024 - Present",
    highlights: [
      "Distributed server room load reinforcements",
      "Structural steel frames for large solar arrays",
      "Rapid deployment modular building design"
    ]
  },
  {
    title: "Hostel & Multipurpose Building – BOT Academy",
    category: "Government",
    client: "BANK OF TANZANIA / NOSUTO ASSOCIATES",
    location: "Mwanza",
    status: "ONGOING",
    img: "/hero2.jpg",
    value: "TZS 4,657,582,765",
    description: "Developing modern hostel accommodations and a multipurpose hall for the Bank of Tanzania (BOT) Academy. Focuses on large span structures, lake-shore soil dynamics, and aesthetic educational campus integration.",
    teamLead: "QS. Dr. Mhenga Agneta",
    year: "2024 - Present",
    highlights: [
      "High stability column foundation for lake-shore clay",
      "Acoustically insulated multipurpose auditorium roof",
      "Eco-friendly natural lighting designs"
    ]
  },
  {
    title: "Passenger Waiting Lounge – Dar es Salaam Port",
    category: "Infrastructure",
    client: "TANZANIA PORT AUTHORITY",
    location: "Dar es Salaam Port",
    status: "ONGOING",
    img: "/hero3.jpg",
    value: "TZS 14,000,000,000",
    description: "A state-of-the-art transit hub for ferry and ship passengers at the Dar es Salaam Port. Engineered to support high foot traffic, featuring premium architectural detailing and sea-spray corrosion protection.",
    teamLead: "QS. Dr. Mhenga Agneta",
    year: "2025 - Present",
    highlights: [
      "Marine grade anti-corrosive structure coatings",
      "High traffic flow open layout engineering",
      "Energy efficient LED and HVAC pathways"
    ]
  },
  {
    title: "African Court of Human and Peoples' Rights",
    category: "Government",
    client: "MINISTRY OF FOREIGN AFFAIRS",
    location: "Arusha",
    status: "ONGOING",
    img: "/hero1.jpg",
    value: "USD 62,968,086,187.78",
    description: "The new official headquarters of the continental African Court in Arusha. Built to house chambers, judicial records archives, and administrative halls with highest accessibility standards.",
    teamLead: "Eng. Peter John Mwamaso",
    year: "2024 - Present",
    highlights: [
      "Grand court chamber large span ceiling trusses",
      "High-security executive wings",
      "Accessibility ramp and elevator structural framing"
    ]
  },
  {
    title: "Multi-Storey Investment Building – Kinshasa",
    category: "Government",
    client: "MINISTRY OF FOREIGN AFFAIRS / ABECC",
    location: "Kinshasa, DR Congo",
    status: "ONGOING",
    img: "/hero2.jpg",
    value: "USD 15,384,615.38",
    description: "Commercial and office investment complex supporting diplomatic efforts in DRC. Built to secure standards with high performance concrete frameworks.",
    teamLead: "Arch. Dorothea Gervas",
    year: "2023 - Present",
    highlights: [
      "High-strength concrete framework",
      "Advanced security access controls",
      "Modular floor plans for commercial renting"
    ]
  },
  {
    title: "Zanzibar Bus Terminal",
    category: "Infrastructure",
    client: "ZANZIBAR SOCIAL SECURITY FUND",
    location: "Kijangwani, Zanzibar",
    status: "ONGOING",
    img: "/hero3.jpg",
    value: "TZS 2,500,000,000",
    description: "Designing a high-capacity terminal for local bus routes. Features modular passenger boarding bays, heavy-duty bus lane road beds, and retail spaces.",
    teamLead: "QS. Dr. Mhenga Agneta",
    year: "2024 - Present",
    highlights: [
      "Heavy vehicle asphalt and slab design",
      "Modular pedestrian boarding bay steel roofs",
      "Integrated drainage system for heavy Zanzibar rain"
    ]
  },
  {
    title: "Multi-Storey Apartment Building – Malawi",
    category: "Residential",
    client: "MINISTRY OF FOREIGN AFFAIRS / ABECC",
    location: "Lilongwe, Malawi",
    status: "ONGOING",
    img: "/hero1.jpg",
    value: "USD 25,000,000",
    description: "Multi-family residential complex for embassy staff. Built with modern residential amenities, shared gardens, and energy-conserving thermal shields.",
    teamLead: "Eng. Peter John Mwamaso",
    year: "2024 - Present",
    highlights: [
      "Staff apartment layouts with thermal shields",
      "Seismic analysis and block design",
      "Eco-friendly landscaping water recycling system"
    ]
  },
  {
    title: "Chancery & Ambassador's Residence – Muscat",
    category: "Government",
    client: "MINISTRY OF FOREIGN AFFAIRS / ABECC",
    location: "Muscat, Oman",
    status: "ONGOING",
    img: "/hero2.jpg",
    value: "USD 4,230,769.23",
    description: "A custom designed chancery building in Muscat. Emphasizes modern architecture blended with Islamic visual cues, built with heat-reflecting cladding.",
    teamLead: "Arch. Dorothea Gervas",
    year: "2023 - Present",
    highlights: [
      "Heat-reflecting marble facade structures",
      "Secure perimeter zoning",
      "Diplomatic reception hall frame engineering"
    ]
  },
  {
    title: "Chancery, Investment & Ambassador's Residence – Riyadh",
    category: "Government",
    client: "MINISTRY OF FOREIGN AFFAIRS / ABECC",
    location: "Riyadh, Saudi Arabia",
    status: "ONGOING",
    img: "/hero3.jpg",
    value: "USD 2,307,692.31",
    description: "Diplomatic complex in Riyadh featuring official chancery offices, investment floors, and ambassadorial residence. Optimized for extreme desert climates.",
    teamLead: "Eng. Peter John Mwamaso",
    year: "2024 - Present",
    highlights: [
      "High efficiency HVAC layout integration",
      "Desert thermal protection facade design",
      "Integrated security screening structures"
    ]
  },
  {
    title: "NECTA Warehouse Building – Mbezi Wani",
    category: "Infrastructure",
    client: "NECTA",
    location: "Mbezi Wani, Dar es Salaam",
    status: "ONGOING",
    img: "/hero1.jpg",
    value: "TZS 865,000,000",
    description: "Heavy-duty secure storage warehouse for national examination materials. Features thick reinforced concrete walls, specialized locking mechanisms, and fireproofing.",
    teamLead: "QS. Dr. Mhenga Agneta",
    year: "2024 - Present",
    highlights: [
      "Fire-rated structural wall assembly",
      "Industrial load bearing slab engineering",
      "Advanced security ventilation protection"
    ]
  },
  {
    title: "NECTA Printing Factory Building – Bamaga",
    category: "Commercial",
    client: "NECTA",
    location: "Bamaga, Dar es Salaam",
    status: "ONGOING",
    img: "/hero2.jpg",
    value: "TZS 786,000,000",
    description: "Developing structural systems to house heavy examination printing machines. The building is engineered to damp heavy industrial machinery vibrations.",
    teamLead: "Arch. Dorothea Gervas",
    year: "2024 - Present",
    highlights: [
      "Vibration damping foundation structure design",
      "Industrial ventilation layout integration",
      "Heavy power cabling channels in slab"
    ]
  },
  {
    title: "WASH Facilities & Dormitories – Kigoma Region",
    category: "Infrastructure",
    client: "MINISTRY OF EDUCATION / ENABEL",
    location: "Kigoma Region",
    status: "ONGOING",
    img: "/hero3.jpg",
    value: "Euro 2,000,000",
    description: "Large-scale community infrastructure project. Constructing modern water, sanitation, and hygiene facilities alongside safe student dormitories in Kigoma.",
    teamLead: "Eng. Peter John Mwamaso",
    year: "2023 - Present",
    highlights: [
      "Eco-friendly modular sanitation designs",
      "Reinforced masonry dorm construction in rural areas",
      "Rainwater catchment structure integration"
    ]
  },
  {
    title: "Factory Scheme – Kisemvule",
    category: "Commercial",
    client: "PEACE SUCCESS TANZANIA LTD",
    location: "Kisemvule, Mkuranga, Coastal Region",
    status: "COMPLETED",
    img: "/hero1.jpg",
    value: "TZS 3,000,000,000",
    description: "A comprehensive industrial factory complex completed at Kisemvule. Features large clear-span warehouses, administrative office block, and heavy vehicle logistics roads.",
    teamLead: "QS. Dr. Mhenga Agneta",
    year: "Completed 2024",
    highlights: [
      "Portal steel framing with 30m clear spans",
      "Heavy loading bay layouts and structural roads",
      "Efficient warehouse ventilation systems"
    ]
  }
];
