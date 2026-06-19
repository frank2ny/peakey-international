import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About Us",
        organization: "Our Organization",
        services: "Our Services",
        projects: "Our Projects",
        sustainability: "Sustainability Projects",
        partners: "Our Partners",
        gallery: "Gallery and Media",
        blog: "Blog",
        contact: "Contacts"
      },
      footer: {
        rights: "All rights reserved.",
        description: "A global leader in innovation and sustainable development.",
        company: "Company",
        work: "Work",
        contact_info: "Contact",
        privacy: "Privacy Policy",
        compliance: "Compliance & Anti-Bribery",
        terms: "Terms of Service"
      },
      hero: {
        title: "Building a Better Future Worldwide.",
        subtitle: "Global expertise. Local impact. We are Peakey International, your trusted partner for innovative solutions.",
        cta: "Explore Our Services",
        badge: "Global Expertise",
        secondary_cta: "Corporate Profile"
      },
      contact: {
        title: "Get in Touch",
        name: "Full Name",
        email: "Email Address",
        message: "Message",
        submit: "Send Message",
        success: "Thank you for reaching out. We will get back to you shortly."
      },
      projects: {
        viewAll: "View All Projects",
        featuredTitle: "Our Projects",
        featuredSubtitle: "A curated selection of our most prominent global engineering and consulting accomplishments.",
        searchPlaceholder: "Search by title, location, client...",
        categoryLabel: "Category",
        statusLabel: "Status",
        sortBy: "Sort By",
        sortAZ: "Name (A-Z)",
        sortZA: "Name (Z-A)",
        sortValueHigh: "Value (High to Low)",
        sortValueLow: "Value (Low to High)",
        value: "Project Value",
        client: "Client",
        location: "Location",
        teamLead: "Team Lead",
        year: "Project Timeline",
        statusAll: "All Statuses",
        ongoing: "Ongoing",
        completed: "Completed",
        noProjects: "No Projects Found",
        noProjectsDesc: "We couldn't find any active projects in the selected category or search query.",
        detailsTitle: "Project Case Study",
        close: "Close Details",
        highlights: "Key Project Deliverables",
        inquire: "Inquire About Project",
        backToHome: "Back to Home",
        dashboardTitle: "Interactive Projects Dashboard",
        dashboardSubtitle: "Explore our complete portfolio of structural engineering, corporate consultancy, and global infrastructure projects."
      },
      services: {
        projectManagement: "Project Management",
        contractManagement: "Contract Management",
        architectural: "Architectural Services",
        quantitySurveying: "Quantity Surveying",
        electricalEngineering: "Electrical Engineering",
        mechanicalEngineering: "Mechanical Engineering",
        ictEngineering: "ICT Engineering"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
