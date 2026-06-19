export interface Project {
  title: string;
  category: 'Government' | 'Commercial' | 'Industrial' | 'Residential';
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
    title: "African Court of Human and Peoples' Rights - Arusha, Tanzania",
    category: "Government",
    client: "MINISTRY OF FOREIGN AFFAIRS",
    location: "Arusha, Tanzania",
    status: "ONGOING",
    img: "/hero1.jpg",
    value: "USD 62,968,086,187.78",
    description: "Proposed Construction Of Buildings For The Permanent Seat Of The African Court Of Human And Peoples' Rights",
    teamLead: "Eng. Peter John Mwamaso",
    year: "2024 - Present",
    highlights: [
      "Architectural designs and construction documentation",
      "Cost estimation, tender documentation, and construction cost control",
      "Data and Communication, Security Systems (CCTV) and Access Control",
      "Design and supervision of electrical systems",
      "Design and supervision of HVAC, plumbing, drainage, and fire fighting systems"
    ]
  },
  {
    title: "Multi-Storey Investment Building – Nairobi, Kenya",
    category: "Commercial",
    client: "MINISTRY OF FOREIGN AFFAIRS / ABECC",
    location: "Nairobi, Kenya",
    status: "ONGOING",
    img: "/hero2.jpg",
    value: "USD 38,461,538.46",
    description: "Proposed Construction of Multi-Storey Investment Building for Tanzania Embassy in Nairobi, Kenya.",
    teamLead: "QS. Dr. Mhenga Agneta",
    year: "2024 - Present",
    highlights: [
      "Design and supervision of Plumbing and Fire Fighting systems",
      "Design and supervision of Data and Communication systems, Security Systems (CCTV) and Access Control systems",
      "Design and supervision of Electrical systems and fire alarm system",
      "Design and supervision of Central Air-conditions systems"
    ]
  },
  {
    title: "Regional Registration Offices - RRO I & II in Tanzania",
    category: "Government",
    client: "NIDA / CIP INTERNATIONAL",
    location: "Tanzania (Multiple Sites)",
    status: "ONGOING",
    img: "/NIDA.jpeg",
    value: "USD 29,469,806.40",
    description: "Provision of Consultancy Services for National ID System Expansion Project Phase in Tanzania in These Two Projects Located at Different Locations Within Tanzania. Regional Registration Office: RRO-Type I: (Single Storey-6 Sites) Regional Regis Tration Office: RRO-Type II (Double Storey- 24 Sites) and RRO Type III (Three Storey- 1 Site)",
    teamLead: "Eng. Peter John Mwamaso",
    year: "2024 - Present",
    highlights: [
      "Architectural designs and construction documentation",
      "Cost estimation, tender documentation, and construction cost control",
      "Data and Communication, Security Systems (CCTV) and Access Control",
      "Design and supervision of electrical systems",
      "Design and supervision of HVAC, plumbing, drainage, and fire fighting systems"
    ]
  },
  {
    title: "Apartment Building & Ambassador's Residence – Burundi",
    category: "Government",
    client: "MINISTRY OF FOREIGN AFFAIRS / ABECC",
    location: "Bujumbura, Burundi",
    status: "ONGOING",
    img: "/hero3.jpg",
    value: "USD 25,000,000",
    description: "Proposed Construction of Multi-Storey Apartment Building and Ambassador’s Residence for Tanzania Embassy in Burundi.",
    teamLead: "Arch. Dorothea Gervas",
    year: "2024 - Present",
    highlights: [
      "Design and supervision of Plumbing and Fire Fighting systems",
      "Design and supervision of Data and Communication systems, Security Systems (CCTV) and Access Control systems",
      "Design and supervision of Electrical systems and fire alarm system",
      "Design and supervision of Central Air-conditions systems"
    ]
  },
  {
    title: "Office for Registrar of Political Parties - Dodoma, Tanzania",
    category: "Government",
    client: "OFFICE OF THE REGISTRAR OF POLITICAL PARTIES",
    location: "Mlimani Area, Dodoma, Tanzania",
    status: "ONGOING",
    img: "/Tanesco.jpg",
    value: "USD 25,000,000",
    description: "Proposed Construction of Office for Registrar of Political Parties to be Built at Mlimani Area, Dodoma.",
    teamLead: "QS. Dr. Mhenga Agneta",
    year: "2024 - Present",
    highlights: [
      "Design and supervision of Plumbing and Fire Fighting systems",
      "Design and supervision of Data and Communication systems, Security Systems (CCTV) and Access Control systems",
      "Design and supervision of Electrical systems and fire alarm system",
      "Design and supervision of Central Air-conditions systems"
    ]
  },
  {
    title: "Multi-Storey Apartment Building – Malawi",
    category: "Government",
    client: "MINISTRY OF FOREIGN AFFAIRS / ABECC",
    location: "Lilongwe, Malawi",
    status: "ONGOING",
    img: "/hero1.jpg",
    value: "USD 25,000,000",
    description: "Proposed Construction of Multi-Storey Apartment Building for Tanzania Embassy in Malawi",
    teamLead: "Eng. Peter John Mwamaso",
    year: "2024 - Present",
    highlights: [
      "Design and supervision of Plumbing and Fire Fighting systems",
      "Design and supervision of Data and Communication systems, Security Systems (CCTV) and Access Control systems",
      "Design and supervision of Electrical systems and fire alarm system",
      "Design and supervision of Central Air-conditions systems"
    ]
  },
  {
    title: "Chancery Building & Ambassador's Residence - Kigali Rwanda",
    category: "Government",
    client: "MINISTRY OF FOREIGN AFFAIRS / ABECC",
    location: "Kigali, Rwanda",
    status: "ONGOING",
    img: "/Rwanda.jpg",
    value: "USD 23,846,153.85",
    description: "Proposed Construction of Multi-Storey Chancery Building and Ambassador's Residence for Tanzania Embassy in Kigali, Rwanda",
    teamLead: "Eng. Peter John Mwamaso",
    year: "2023 - Present",
    highlights: [
      "Design and supervision of Plumbing and Fire Fighting systems",
      "Design and supervision of Data and Communication systems, Security Systems (CCTV) and Access Control systems",
      "Design and supervision of Electrical systems and fire alarm system",
      "Design and supervision of Central Air-conditions systems"
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
    description: "Proposed Construction of Chancery, Investment and Ambassador's Residence Building for Tanzania High Commission in Mozambique",
    teamLead: "Eng. Peter John Mwamaso",
    year: "2023 - Present",
    highlights: [
      "Design and supervision of Plumbing and Fire Fighting systems",
      "Design and supervision of Data and Communication systems, Security Systems (CCTV) and Access Control systems",
      "Design and supervision of Electrical systems and fire alarm system",
      "Design and supervision of Central Air-conditions systems"
    ]
  },
  {
    title: "Integrated Operations Center (IOC) – NIDA, Dodoma, Tanzania",
    category: "Government",
    client: "NIDA / CIP INTERNATIONAL",
    location: "Dodoma, Tanzania",
    status: "ONGOING",
    img: "/WEBSITE DEVELOPMENT/ioc1.png",
    value: "USD 19,067,434.05",
    description: "Proposed Integrated Operations Center (IOC) on Plot No. 9 Block 'D' NCC– Dodoma",
    teamLead: "Arch. Dorothea Gervas",
    year: "2024 - Present",
    highlights: [
      "Architectural designs and construction documentation",
      "Cost estimation, tender documentation, and construction cost control",
      "Data and Communication, Security Systems (CCTV) and Access Control",
      "Design and supervision of electrical systems",
      "Design and supervision of HVAC, plumbing, drainage, and fire fighting systems"
    ]
  },
  {
    title: "Multi-Storey Investment Building – Moroni, Comoro",
    category: "Government",
    client: "MINISTRY OF FOREIGN AFFAIRS / ABECC",
    location: "Moroni, Comoro",
    status: "ONGOING",
    img: "/hero1.jpg",
    value: "USD 17,307,692.31",
    description: "Proposed Construction of Multi-Storey Investment Building For Tanzania Embassy in Moroni, Comoro",
    teamLead: "Eng. Peter John Mwamaso",
    year: "2023 - Present",
    highlights: [
      "Design and supervision of Plumbing and Fire Fighting systems",
      "Design and supervision of Data and Communication systems, Security Systems (CCTV) and Access Control systems",
      "Design and supervision of Electrical systems and fire alarm system",
      "Design and supervision of Central Air-conditions systems"
    ]
  },
  {
    title: "Multi-Storey Investment Building – Kinshasa, DRC",
    category: "Government",
    client: "MINISTRY OF FOREIGN AFFAIRS / ABECC",
    location: "Kinshasa, DR Congo",
    status: "ONGOING",
    img: "/hero2.jpg",
    value: "USD 15,384,615.38",
    description: "Proposed Construction of Multi Storey Investment Building for Tanzania Embassy in Kinshasa, Congo.",
    teamLead: "Arch. Dorothea Gervas",
    year: "2023 - Present",
    highlights: [
      "Design and supervision of Plumbing and Fire Fighting systems",
      "Design and supervision of Data and Communication systems, Security Systems (CCTV) and Access Control systems",
      "Design and supervision of Electrical systems and fire alarm system",
      "Design and supervision of Central Air-conditions systems"
    ]
  },
  {
    title: "Passenger Waiting Lounge – Dar es Salaam Port",
    category: "Government",
    client: "TANZANIA PORT AUTHORITY",
    location: "Dar es Salaam Port",
    status: "ONGOING",
    img: "/hero3.jpg",
    value: "TZS 14,000,000,000",
    description: "Proposed Passenger Waiting Lounge to be Built at Dar es Salaam Port.",
    teamLead: "QS. Dr. Mhenga Agneta",
    year: "2025 - Present",
    highlights: [
      "Architectural designs and construction documentation",
      "Cost estimation, tender documentation, and construction cost control",
      "Data and Communication, Security Systems (CCTV) and Access Control",
      "Design and supervision of electrical systems",
      "Design and supervision of HVAC, plumbing, drainage, and fire fighting systems"
    ]
  },
  {
    title: "Chancery & Ambassador's Residence – Muscat, Oman",
    category: "Government",
    client: "MINISTRY OF FOREIGN AFFAIRS / ABECC",
    location: "Muscat, Oman",
    status: "ONGOING",
    img: "/hero2.jpg",
    value: "USD 4,230,769.23",
    description: "Proposed Construction of Multi-Storey Chancery Building & Ambassador Residence for Tanzania Embassy in Muscat, Oman",
    teamLead: "Arch. Dorothea Gervas",
    year: "2023 - Present",
    highlights: [
      "Design and supervision of Plumbing and Fire Fighting systems",
      "Design and supervision of Data and Communication systems, Security Systems (CCTV) and Access Control systems",
      "Design and supervision of Electrical systems and fire alarm system",
      "Design and supervision of Central Air-conditions systems"
    ]
  },
  {
    title: "ICT Service Center (ISC) – NIDA Kibaha",
    category: "Government",
    client: "NIDA / CIP INTERNATIONAL",
    location: "Kibaha, Coastal Region",
    status: "ONGOING",
    img: "/WEBSITE DEVELOPMENT/kibaha.png",
    value: "USD 3,868,245.50",
    description: "Proposed ICT Service Center (ISC) at NIDA Kibaha Offices - Coastal Region.",
    teamLead: "Arch. Dorothea Gervas",
    year: "2024 - Present",
    highlights: [
      "Architectural designs and construction documentation",
      "Cost estimation, tender documentation, and construction cost control",
      "Data and Communication, Security Systems (CCTV) and Access Control",
      "Design and supervision of electrical systems",
      "Design and supervision of HVAC, plumbing, drainage, and fire fighting systems"
    ]
  },
  {
    title: "Chancery, Investment & Ambassador's Residence – Riyadh, Saudi Arabia",
    category: "Government",
    client: "MINISTRY OF FOREIGN AFFAIRS / ABECC",
    location: "Riyadh, Saudi Arabia",
    status: "ONGOING",
    img: "/hero3.jpg",
    value: "USD 2,307,692.31",
    description: "Proposed Construction of Chancery, Investment and Ambassador's Residence Building for Tanzania High Commission in Riyadh, Saudi Arabia",
    teamLead: "Eng. Peter John Mwamaso",
    year: "2024 - Present",
    highlights: [
      "Design and supervision of Plumbing and Fire Fighting systems",
      "Design and supervision of Data and Communication systems, Security Systems (CCTV) and Access Control systems",
      "Design and supervision of Electrical systems and fire alarm system",
      "Design and supervision of Central Air-conditions systems"
    ]
  },
  {
    title: "TANESCO Head Office, Ihumwa in Dodoma, Tanzania",
    category: "Government",
    client: "TANESCO / NOSUTO ASSOCIATES",
    location: "Ihumwa Government City, Dodoma",
    status: "ONGOING",
    img: "/Tanesco.jpg",
    value: "TZS 4,920,350,000",
    description: "Proposed Provision of Consultancy Services for Design and Supervision of Construction of TANESCO Head Office at Ihumwa Government City Dodoma.",
    teamLead: "Eng. Peter John Mwamaso",
    year: "2024 - Present",
    highlights: [
      "Architectural designs and construction documentation",
      "Cost estimation, tender documentation, and construction cost control",
      "Data and Communication, Security Systems (CCTV) and Access Control",
      "Design and supervision of electrical systems",
      "Design and supervision of HVAC, plumbing, drainage, and fire fighting systems"
    ]
  },
  {
    title: "Hostel & Multipurpose Building – BOT Mwanza, Tanzania",
    category: "Government",
    client: "BANK OF TANZANIA / NOSUTO ASSOCIATES",
    location: "Mwanza, Tanzania",
    status: "ONGOING",
    img: "/hero2.jpg",
    value: "TZS 4,657,582,765",
    description: "Provision of Consultancy Services for Design Review and Supervision for Completion of Hostel and Multi Purpose Building at BOT Mwanza",
    teamLead: "QS. Dr. Mhenga Agneta",
    year: "2024 - Present",
    highlights: [
      "Design and supervision of Plumbing and Fire Fighting systems",
      "Design and supervision of Data and Communication systems, Security Systems (CCTV) and Access Control systems",
      "Design and supervision of Electrical systems and fire alarm system",
      "Design and supervision of Central Air-conditions systems"
    ]
  },
  {
    title: "Factory Scheme – Mkuranga, Tanzania",
    category: "Industrial",
    client: "PEACE SUCCESS TANZANIA LTD",
    location: "Kisemvule, Mkuranga, Coastal Region, Tanzania",
    status: "COMPLETED",
    img: "/hero1.jpg",
    value: "TZS 3,000,000,000",
    description: "Proposed Construction of Factory Scheme at Kisemvule, Mkuranga in Coastal Region Tanzania.",
    teamLead: "QS. Dr. Mhenga Agneta",
    year: "Completed 2024",
    highlights: [
      "Design and supervision of Plumbing and Fire Fighting systems",
      "Design and supervision of Data and Communication systems, Security Systems (CCTV) and Access Control systems",
      "Design and supervision of Electrical systems and fire alarm system",
      "Design and supervision of Central Air-conditions systems"
    ]
  },
  {
    title: "Bus Terminal at Kijangwani area, Zanzibar",
    category: "Government",
    client: "ZANZIBAR SOCIAL SECURITY FUND",
    location: "Kijangwani Area, Zanzibar",
    status: "ONGOING",
    img: "/hero3.jpg",
    value: "TZS 2,500,000,000",
    description: "Proposed Construction of Zanzibar Bus Terminal at Kijangwani Area Zanzibar.",
    teamLead: "QS. Dr. Mhenga Agneta",
    year: "2024 - Present",
    highlights: [
      "Architectural designs and construction documentation",
      "Cost estimation, tender documentation, and construction cost control",
      "Data and Communication, Security Systems (CCTV) and Access Control",
      "Design and supervision of electrical systems",
      "Design and supervision of HVAC, plumbing, drainage, and fire fighting systems"
    ]
  },
  {
    title: "NECTA Warehouse Building – Mbezi Wani, Dar es salaam in Tanzania",
    category: "Government",
    client: "NECTA",
    location: "Mbezi Wani, Dar es Salaam, Tanzania",
    status: "ONGOING",
    img: "/hero1.jpg",
    value: "TZS 865,000,000",
    description: "Proposed Design of Ware House Building for the National Examinations Council of Tanzania(NECTA) to be Built at Mbezi Wani Area, in Kinondoni Municipal, Dar es Salaam, Tanzania.",
    teamLead: "QS. Dr. Mhenga Agneta",
    year: "2024 - Present",
    highlights: [
      "Architectural designs and construction documentation",
      "Cost estimation, tender documentation, and construction cost control",
      "Data and Communication, Security Systems (CCTV) and Access Control",
      "Design and supervision of electrical systems",
      "Design and supervision of HVAC, plumbing, drainage, and fire fighting systems"
    ]
  },
  {
    title: "NECTA Printing Factory Building – Kinondoni, Dar es salaam in Tanzania",
    category: "Government",
    client: "NECTA",
    location: "Bamaga, Kinondoni Municipal, Dar es Salaam, Tanzania",
    status: "ONGOING",
    img: "/WEBSITE DEVELOPMENT/bamaga.jpg",
    value: "TZS 786,000,000",
    description: "Proposed Design of Printing Factory Building for the National Examinations Council of Tanzania (NECTA) to be Built at Bamaga, in Kinondoni Municipal, Dar es Salaam, Tanzania.",
    teamLead: "Arch. Dorothea Gervas",
    year: "2024 - Present",
    highlights: [
      "Architectural designs and construction documentation",
      "Cost estimation, tender documentation, and construction cost control",
      "Data and Communication, Security Systems (CCTV) and Access Control",
      "Design and supervision of electrical systems",
      "Design and supervision of HVAC, plumbing, drainage, and fire fighting systems"
    ]
  },
  {
    title: "WASH Facilities & Dormitories – Kigoma, Tanzania",
    category: "Government",
    client: "MINISTRY OF EDUCATION / ENABEL",
    location: "Kigoma Region, Tanzania",
    status: "ONGOING",
    img: "/hero3.jpg",
    value: "Euro 2,000,000",
    description: "Public Works Contract for the Construction of 25 Wash Facilities, of Which 5 Schools Include Dormitories in Kigoma Region.",
    teamLead: "Eng. Peter John Mwamaso",
    year: "2023 - Present",
    highlights: [
      "Architectural designs and construction documentation",
      "Cost estimation, tender documentation, and construction cost control",
      "Data and Communication, Security Systems (CCTV) and Access Control",
      "Design and supervision of electrical systems",
      "Design and supervision of HVAC, plumbing, drainage, and fire fighting systems"
    ]
  },
  {
    title: "Renovation of NSSF Benjamini William Mkapa Pension Towers - Dar es salaam Tanzania",
    category: "Government",
    client: "NATIONAL SOCIAL SECURITY FUND (NSSF)",
    location: "Dar es Salaam, Tanzania",
    status: "ONGOING",
    img: "/Nssf.jpg",
    value: "Confidential",
    description: "Provision of Consultancy Services for Renovation of NSSF Benjamin William Mkapa Pension Towers",
    teamLead: "QS. Dr. Mhenga Agneta",
    year: "2024 - Present",
    highlights: [
      "Architectural designs and construction documentation",
      "Cost estimation, tender documentation, and construction cost control",
      "Data and Communication, Security Systems (CCTV) and Access Control",
      "Design and supervision of electrical systems",
      "Design and supervision of HVAC, plumbing, drainage, and fire fighting systems"
    ]
  },
  {
    title: "City Council of Dodoma Head Office In Dodoma, Tanzania.",
    category: "Government",
    client: "DODOMA CITY COUNCIL",
    location: "Dodoma, Tanzania",
    status: "ONGOING",
    img: "/WEBSITE DEVELOPMENT/DODOMA JIJI.jpg",
    value: "Confidential",
    description: "Proposed Design and Construction Supervision of the City Council of Dodoma Head Office In Dodoma.",
    teamLead: "Arch. Dorothea Gervas",
    year: "2024 - Present",
    highlights: [
      "Architectural designs and construction documentation",
      "Cost estimation, tender documentation, and construction cost control",
      "Data and Communication, Security Systems (CCTV) and Access Control",
      "Design and supervision of electrical systems",
      "Design and supervision of HVAC, plumbing, drainage, and fire fighting systems"
    ]
  },
  {
    title: "Academic Complex Block for 200 Students at Kibondo, Kigoma in Tanzania",
    category: "Government",
    client: "MINISTRY OF EDUCATION / ENABEL",
    location: "Kibondo, Kigoma, Tanzania",
    status: "ONGOING",
    img: "/hero2.jpg",
    value: "Confidential",
    description: "Proposed Academic Complex Block for 200 Students to Be Built on Plot No.1 Block \"D\" at Nengo Kibondo District.",
    teamLead: "Eng. Peter John Mwamaso",
    year: "2024 - Present",
    highlights: [
      "Architectural designs and construction documentation",
      "Cost estimation, tender documentation, and construction cost control",
      "Data and Communication, Security Systems (CCTV) and Access Control",
      "Design and supervision of electrical systems",
      "Design and supervision of HVAC, plumbing, drainage, and fire fighting systems"
    ]
  },
  {
    title: "Residential Building To Be Built in Goba - Dar es Salaam, Tanzania",
    category: "Residential",
    client: "PRIVATE CLIENT",
    location: "Goba, Dar es Salaam, Tanzania",
    status: "ONGOING",
    img: "/WEBSITE DEVELOPMENT/GOBA RESIDENTIAL.jpg",
    value: "Confidential",
    description: "Proposed Residential Building to be Built on Plot No:...,      Block \".....\" at Goba, Kinondoni District Dar Es Salaam.",
    teamLead: "Arch. Dorothea Gervas",
    year: "2024 - Present",
    highlights: [
      "Architectural designs and construction documentation",
      "Cost estimation, tender documentation, and construction cost control",
      "Data and Communication, Security Systems (CCTV) and Access Control",
      "Design and supervision of electrical systems",
      "Design and supervision of HVAC, plumbing, drainage, and fire fighting systems"
    ]
  },
  {
    title: "Academic Complex Block For 600 Students at Rombo, Tanzania",
    category: "Government",
    client: "MINISTRY OF EDUCATION / ENABEL",
    location: "Rombo, Tanzania",
    status: "ONGOING",
    img: "/hero3.jpg",
    value: "Confidential",
    description: "Proposed Academic Complex Block for 600 Students to be Built on Plot No.2 Block \"A\" at Kiwanda Rombo District",
    teamLead: "Eng. Peter John Mwamaso",
    year: "2024 - Present",
    highlights: [
      "Architectural designs and construction documentation",
      "Cost estimation, tender documentation, and construction cost control",
      "Data and Communication, Security Systems (CCTV) and Access Control",
      "Design and supervision of electrical systems",
      "Design and supervision of HVAC, plumbing, drainage, and fire fighting systems"
    ]
  }
];
