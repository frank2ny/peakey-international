import React, { useEffect, useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Briefcase, 
  Building2, 
  Calculator, 
  Cpu, 
  Zap, 
  Settings, 
  FileText, 
  ArrowLeft, 
  Download, 
  CheckCircle2, 
  ArrowRight,
  Shield,
  Layers,
  Thermometer,
  Droplets,
  HardDrive
} from 'lucide-react';

interface ServiceDetail {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  subCategories?: {
    title: string;
    icon?: React.ElementType;
    items: string[];
  }[];
  bullets?: string[];
}
export function ServicesDetailed() {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState('project-management');

  useEffect(() => {
    document.title = "Our Services - Peakey International Group";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Discover Peakey International Group\'s corporate services, including Project Management, Quantity Surveying, Mechanical & Electrical Engineering, and Contract Management.');
    }
  }, []);

  const services: ServiceDetail[] = [
    {
      id: "project-management",
      title: "Project Management",
      icon: Briefcase,
      description: "We align project execution with client objectives through value-driven designs, cost containment, and rigorous progress monitoring, ensuring successful lifecycle management from concept to commissioning.",
      bullets: [
        "Aligning with client objectives through value-driven designs",
        "Maintaining cost control through comprehensive risk management and straightforward reporting",
        "Monitoring and verifying project progress to meet contract standards",
        "Ensuring effective communication and resource utilization throughout the project lifecycle"
      ]
    },
    {
      id: "contract-management",
      title: "Contract Management",
      icon: FileText,
      description: "Managing project contracts to prevent risks, verify contract standards compliance, and resolve complex procurement and project claims.",
      bullets: [
        "Contract administration and project change control",
        "Preparation and reviewing of project contract documents",
        "Amicable dispute resolution and mediation consulting",
        "Claims management, evaluation, and assessments",
        "Tender evaluations, bid negotiation, and award consulting",
        "Rigorous monitoring of compliance with contract standards"
      ]
    },
    {
      id: "architectural",
      title: "Architectural Services",
      icon: Building2,
      description: "Delivering context-responsive designs for diverse commercial, residential, educational, retail, civic, and recreational spaces. We manage a strict workflow from initial condition surveys to physical drawings and inspections.",
      subCategories: [
        {
          title: "Design Types",
          icon: Layers,
          items: [
            "Commercial Buildings",
            "Residential Buildings",
            "Educational Buildings",
            "Retail Buildings",
            "Civic & Institutional Buildings",
            "Recreational & Leisure Buildings"
          ]
        },
        {
          title: "Comprehensive Workflow & Scope",
          icon: FileText,
          items: [
            "Initial site visit and consultative meetings to confirm client requirements",
            "Preparation of condition survey reports & conducting physical measurements",
            "Preparation of structural/architectural drawings & cost analysis with BOQ specs",
            "Preparation, reviewing, and responding to contract documents and correspondences",
            "Conducting periodic site inspections and site meetings, including minutes preparation",
            "Quality control enforcement through materials testing monitoring",
            "Issuing payment certificates, and reviewing contractor progress reports & programs of work"
          ]
        }
      ]
    },
    {
      id: "quantity-surveying",
      title: "Quantity Surveying Services",
      icon: Calculator,
      description: "Providing data-driven cost management, value engineering, claims analysis, and final account settlements across pre-contract and post-contract stages.",
      subCategories: [
        {
          title: "Pre-Contract Services",
          items: [
            "Feasibility studies & budget validation",
            "Detailed cost planning & estimates",
            "Preparation of bills of quantities & tender documents",
            "Contractor selection & procurement consulting"
          ]
        },
        {
          title: "Post-Contract Services",
          items: [
            "Active project cost monitoring & valuations",
            "Claims management & dispute mitigation",
            "Value engineering & cost-reduction analysis",
            "Final accounts settlement & project closeout"
          ]
        },
        {
          title: "Core Methodologies",
          items: [
            "Data-driven cost management & forecasting",
            "Benchmarking against industry index rates",
            "Value engineering & sustainability cost analyses"
          ]
        }
      ]
    },
    {
      id: "mechanical-engineering",
      title: "Mechanical Engineering",
      icon: Settings,
      description: "Engineering advanced building utility systems including HVAC airflows, automatic fire suppression systems, vertical elevators, and green water treatment facilities.",
      subCategories: [
        {
          title: "HVAC & Thermal Systems",
          icon: Thermometer,
          items: [
            "Air-conditioning design & mechanical ventilation",
            "Industrial extraction & laboratory cleanroom airflow",
            "Cold & freezer room structural systems",
            "Thermal energy & heat-recovery solutions"
          ]
        },
        {
          title: "Fire Protection & Safety",
          icon: Shield,
          items: [
            "Automatic fire sprinkler systems",
            "Smoke control & pressurization systems",
            "Clean-agent suppression & alarm systems",
            "Life-safety code reviews & compliance audits"
          ]
        },
        {
          title: "Water Supply & Sustainability",
          icon: Droplets,
          items: [
            "Borehole water systems & pumping sets",
            "Reverse osmosis & specialized water treatment",
            "Rainwater harvesting & grey-water recycling",
            "Swimming pool filtration & heating systems"
          ]
        },
        {
          title: "Utilities & Transportation",
          items: [
            "Compressed air & steam/condensate piping networks",
            "Industrial laundry & commercial kitchen extracts",
            "Vertical transportation (passenger/bed lifts, escalators)",
            "Mobility & elevator modernization studies"
          ]
        }
      ]
    },
    {
      id: "electrical-engineering",
      title: "Electrical Engineering",
      icon: Zap,
      description: "Delivering design and supervision of electrical power systems, sub-stations, transmission paths, lighting, and lightning protection systems.",
      subCategories: [
        {
          title: "Power Systems (LV, MV, HV)",
          items: [
            "Construction and supervision of HV substations",
            "Installation of MV underground cables & overhead lines",
            "MV/LV substation design & distribution networks",
            "Assembling of MV switchboards & distribution panels"
          ]
        },
        {
          title: "Building Services",
          items: [
            "Electrical designs for commercial & public buildings",
            "Industrial power supply layouts & load establishments",
            "Electrical installations for residential complexes",
            "Lightning protection systems and earthing designs"
          ]
        },
        {
          title: "Consulting & Quality Assurance",
          items: [
            "Project identification & feasibility studies",
            "Preparation of technical specs & bidding documents",
            "Testing, commissioning, QA/QC and inspections",
            "Fault diagnostics and maintenance of equipment",
            "Specialized electrical designs for oil & gas facilities"
          ]
        }
      ]
    },
    {
      id: "ict-engineering",
      title: "ICT Engineering",
      icon: Cpu,
      description: "Designing advanced, secure electronic security networks, emergency evacuation systems, integrated communications, and intelligent automation systems.",
      subCategories: [
        {
          title: "Electronic Security Systems",
          icon: Shield,
          items: [
            "CCTV Surveillance Systems & Video Analytics",
            "Advanced Access Control Systems",
            "Intruder Alarm & Perimeter Intrusion Detection Systems"
          ]
        },
        {
          title: "Emergency & Safety Systems",
          icon: HardDrive,
          items: [
            "Emergency Evacuation & Voice Alarm Systems",
            "High-security Screening & Metal Detection Equipment"
          ]
        },
        {
          title: "Data & Communication Systems",
          icon: Cpu,
          items: [
            "High-speed Data & Communication Networks",
            "Telecommunications & IP PBX Systems",
            "Congress & Digital Translation Systems",
            "Public Address (PA) and Intercom Systems"
          ]
        },
        {
          title: "Intelligent Systems",
          items: [
            "Smart building automation integrations",
            "Integrated command center control consoles"
          ]
        }
      ]
    }
  ];

  // Set up scroll listener to highlight current active ID
  useEffect(() => {
    const handleScroll = () => {
      const threshold = 180;
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

      let foundActive = '';

      if (isAtBottom) {
        foundActive = services[services.length - 1].id;
      } else if (window.scrollY < 200) {
        foundActive = services[0].id;
      } else {
        for (const service of services) {
          const el = document.getElementById(service.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= threshold && rect.bottom > threshold) {
              foundActive = service.id;
              break;
            }
          }
        }
      }

      if (foundActive) {
        setActiveId(foundActive);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      const absoluteTop = rect.top + window.scrollY;
      const offset = absoluteTop - 120;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
      setActiveId(id);
    }
  };

  return (
    <div className="flex flex-col w-full bg-[linear-gradient(to_bottom,theme(colors.slate.50),theme(colors.slate.100)_50%,theme(colors.slate.50))] relative z-10 min-h-screen">
      <PageHeader title="Our Services" subtitle="A breakdown of Peakey International's consulting, engineering, and quantity surveying competencies." />

      <div className="max-w-[1280px] mx-auto w-full px-6 sm:px-12 pb-24">
        
        {/* Navigation back and header details */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-red-600 transition-colors text-xs font-black uppercase tracking-widest group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {t('projects.backToHome')}
          </Link>
        </div>

        {/* Services Page Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative items-start">
          
          {/* Sticky Left Sidebar Index */}
          <aside className="hidden lg:block lg:col-span-1 sticky top-28 bg-white border border-slate-200/60 rounded-3xl p-6 shadow-xl shadow-slate-200/50">
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Service Divisions</h4>
            <nav className="flex flex-col gap-1">
              {services.map((service) => {
                const Icon = service.icon;
                const isActive = activeId === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => scrollToId(service.id)}
                    className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-2xl text-xs font-bold transition-all duration-300 ${
                      isActive 
                        ? 'bg-red-50 text-red-700 shadow-[inset_3px_0_0_rgba(220,38,38,1)]'
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <Icon className={`w-4.5 h-4.5 flex-shrink-0 ${isActive ? 'text-red-600' : 'text-slate-400'}`} />
                    <span>{service.title}</span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Right Detailed Services Panels */}
          <main className="col-span-1 lg:col-span-3 space-y-12">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.section
                  id={service.id}
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="bg-white rounded-3xl border border-slate-200/60 p-8 sm:p-10 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/30 hover:border-red-100 transition-all duration-500 relative overflow-hidden group"
                >
                  {/* Backdrop glowing logo effect on hover */}
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-red-500/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-red-500/10 transition-colors duration-500"></div>

                  <header className="flex items-start gap-5 mb-8 pb-6 border-b border-slate-100">
                    <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 flex-shrink-0 shadow-sm border border-red-100/50">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">Division 0{idx + 1}</span>
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 leading-snug">
                        {service.title}
                      </h3>
                    </div>
                  </header>

                  <div className="space-y-8">
                    <p className="text-slate-500 font-light text-base sm:text-lg leading-relaxed">
                      {service.description}
                    </p>

                    {/* Render plain bullet highlights if exist */}
                    {service.bullets && (
                      <div className="space-y-4">
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Capabilities</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.bullets.map((b, i) => (
                            <div key={i} className="flex gap-3 bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                              <CheckCircle2 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm font-light text-slate-700 leading-relaxed">{b}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Render Subcategories with titles if exist */}
                    {service.subCategories && (
                      <div className="space-y-8">
                        {service.subCategories.map((sub, i) => {
                          const SubIcon = sub.icon || CheckCircle2;
                          return (
                            <div key={i} className="space-y-4">
                              <h4 className="text-[10px] font-black text-red-600/80 uppercase tracking-widest flex items-center gap-2">
                                <SubIcon className="w-4 h-4 text-red-600 flex-shrink-0" />
                                <span>{sub.title}</span>
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {sub.items.map((item, key) => (
                                  <div 
                                    key={key} 
                                    className="flex items-start gap-3 bg-slate-50/60 p-4 rounded-2xl border border-slate-100/80 hover:bg-slate-50 transition-colors duration-300"
                                  >
                                    <span className="text-red-500 font-black mt-0.5">•</span>
                                    <span className="text-xs sm:text-sm font-light text-slate-700 leading-relaxed">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </motion.section>
              );
            })}

            {/* Profile Download section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hidden bg-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden flex-col md:flex-row items-center justify-between gap-8"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black z-0 opacity-40"></div>
              <div className="absolute right-0 bottom-0 w-80 h-80 bg-red-600/10 rounded-full blur-[80px] pointer-events-none"></div>
              
              <div className="relative z-10 max-w-xl">
                <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Get The Complete Profile</span>
                <h3 className="text-2xl sm:text-4xl font-serif font-black tracking-tight mt-2 mb-4">
                  Peakey International 2026
                </h3>
                <p className="text-slate-400 font-light text-sm sm:text-base leading-relaxed">
                  Download our official company profile brochure containing complete architectural blueprints, certifications, corporate guidelines, and organizational capacities.
                </p>
              </div>

              <div className="relative z-10 w-full md:w-auto">
                <a 
                  href="/PEAKEY INTERNATIONAL - GENERAL COMPANY PROFILE 2026.pdf"
                  download
                  className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white rounded-2xl px-8 py-4 font-black tracking-widest text-xs sm:text-sm uppercase transition-all shadow-xl shadow-red-950/30"
                >
                  <span>Download PDF Booklet</span>
                  <Download className="w-4.5 h-4.5" />
                </a>
              </div>
            </motion.div>
          </main>

        </div>
      </div>
    </div>
  );
}
