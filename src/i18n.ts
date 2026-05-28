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
