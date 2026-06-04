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
        featuredTitle: "Featured Projects",
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
  },
  sw: {
    translation: {
      nav: {
        home: "Mwanzo",
        about: "Kuhusu Sisi",
        organization: "Viongozi Wetu",
        services: "Huduma Zetu",
        projects: "Miradi Yetu",
        sustainability: "Uendelevu",
        partners: "Wabia Wetu",
        gallery: "Matukio na Picha",
        blog: "Habari",
        contact: "Mawasiliano"
      },
      hero: {
        title: "Tunajenga Mustakabali Bora Duniani.",
        subtitle: "Utaalamu wa Kimataifa. Ufanisi wa Ndani. Sisi ni Peakey International, mshirika wako mwaminifu kwa suluhisho la uhandisi.",
        cta: "Gundua Huduma Zetu",
        badge: "Utaalamu wa Kimataifa",
        secondary_cta: "Profaili ya Kampuni"
      },
      footer: {
        rights: "Haki zote zimehifadhiwa.",
        description: "Kampuni inayoongoza kimataifa katika ubunifu, uhandisi na maendeleo endelevu.",
        company: "Kampuni",
        work: "Kazi Zetu",
        contact_info: "Wasiliana Nasi",
        privacy: "Sera ya Faragha",
        compliance: "Uzingatiaji na Kupinga Rushwa",
        terms: "Vigezo vya Huduma"
      },
      contact: {
        title: "Wasiliana Nasi",
        name: "Jina Kamili",
        email: "Barua Pepe",
        message: "Ujumbe Wako",
        submit: "Tuma Ujumbe",
        success: "Asante kwa kuwasiliana nasi. Tutakujibu hivi punde."
      },
      projects: {
        viewAll: "Angalia Miradi Yote",
        featuredTitle: "Miradi Iliyoangaziwa",
        featuredSubtitle: "Uteuzi maalum wa miradi yetu mashuhuri ya uhandisi na ushauri wa kimataifa.",
        searchPlaceholder: "Tafuta kwa jina, eneo, mteja...",
        categoryLabel: "Kundi",
        statusLabel: "Hali",
        sortBy: "Panga Kwa",
        sortAZ: "Jina (A-Z)",
        sortZA: "Jina (Z-A)",
        sortValueHigh: "Thamani (Juu hadi Chini)",
        sortValueLow: "Thamani (Chini hadi Juu)",
        value: "Thamani ya Mradi",
        client: "Mteja",
        location: "Mahali",
        teamLead: "Kiongozi wa Timu",
        year: "Muda wa Mradi",
        statusAll: "Hali Zote",
        ongoing: "Inayoendelea",
        completed: "Kukamilika",
        noProjects: "Hakuna Miradi Iliyopatikana",
        noProjectsDesc: "Hatukuweza kupata mradi wowote unaolingana na utafutaji au kundi ulilochagua.",
        detailsTitle: "Uchunguzi wa Mradi",
        close: "Funga Maelezo",
        highlights: "Matokeo Muhimu ya Mradi",
        inquire: "Ulizia Kuhusu Mradi",
        backToHome: "Rudi Mwanzo",
        dashboardTitle: "Dashibodi ya Miradi",
        dashboardSubtitle: "Chunguza orodha yetu kamili ya miradi ya uhandisi, ushauri, na miundombinu ya kimataifa."
      },
      services: {
        projectManagement: "Usimamizi wa Miradi",
        contractManagement: "Usimamizi wa Mikataba",
        architectural: "Uchoraji Majengo",
        quantitySurveying: "Ukadiriaji Majengo",
        electricalEngineering: "Uhandisi wa Umeme",
        mechanicalEngineering: "Uhandisi wa Mitambo",
        ictEngineering: "Uhandisi wa ICT"
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        about: "Sobre Nosotros",
        organization: "Nuestra Organización",
        services: "Nuestros Servicios",
        projects: "Nuestros Proyectos",
        sustainability: "Proyectos Sostenibles",
        partners: "Nuestros Socios",
        gallery: "Galería y Medios",
        blog: "Blog",
        contact: "Contactos"
      },
      footer: {
        rights: "Todos los derechos reservados.",
        description: "Un líder mundial en innovación y desarrollo sostenible.",
        company: "Compañía",
        work: "Trabajo",
        contact_info: "Contacto",
        privacy: "Política de privacidad",
        compliance: "Cumplimiento y Antisoborno",
        terms: "Términos de servicio"
      },
      hero: {
        title: "Construyendo un futuro mejor en todo el mundo.",
        subtitle: "Experiencia global. Impacto local. Somos Peakey International, su socio de confianza.",
        cta: "Explorar Nuestros Servicios",
        badge: "Experiencia Global",
        secondary_cta: "Perfil Corporativo"
      },
      contact: {
        title: "Ponerse en contacto",
        name: "Nombre completo",
        email: "Correo electrónico",
        message: "Mensaje",
        submit: "Enviar mensaje",
        success: "Gracias por comunicarse. Nos pondremos en contacto con usted en breve."
      },
      projects: {
        viewAll: "Ver todos los proyectos",
        featuredTitle: "Proyectos Destacados",
        featuredSubtitle: "Una selección curada de nuestros logros de ingeniería y consultoría global más destacados.",
        searchPlaceholder: "Buscar por título, ubicación, cliente...",
        categoryLabel: "Categoría",
        statusLabel: "Estado",
        sortBy: "Ordenar por",
        sortAZ: "Nombre (A-Z)",
        sortZA: "Nombre (Z-A)",
        sortValueHigh: "Valor (Mayor a Menor)",
        sortValueLow: "Valor (Menor a Mayor)",
        value: "Valor del proyecto",
        client: "Cliente",
        location: "Ubicación",
        teamLead: "Líder del equipo",
        year: "Cronograma del proyecto",
        statusAll: "Todos los estados",
        ongoing: "En curso",
        completed: "Completado",
        noProjects: "No se encontraron proyectos",
        noProjectsDesc: "No pudimos encontrar ningún proyecto activo en la categoría seleccionada o consulta de búsqueda.",
        detailsTitle: "Estudio de caso del proyecto",
        close: "Cerrar detalles",
        highlights: "Entregables clave del proyecto",
        inquire: "Preguntar sobre el proyecto",
        backToHome: "Volver al inicio",
        dashboardTitle: "Panel interactivo de proyectos",
        dashboardSubtitle: "Explore nuestra cartera completa de proyectos de ingeniería estructural, consultoría corporativa e infraestructura global."
      },
      services: {
        projectManagement: "Gestión de Proyectos",
        contractManagement: "Gestión de Contratos",
        architectural: "Servicios Arquitectónicos",
        quantitySurveying: "Aparejadores (Quantity Surveying)",
        electricalEngineering: "Ingeniería Eléctrica",
        mechanicalEngineering: "Ingeniería Mecánica",
        ictEngineering: "Ingeniería TIC"
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
