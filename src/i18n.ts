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
      hero: {
        title: "Building a Better Future Worldwide.",
        subtitle: "Global expertise. Local impact. We are Peakey International, your trusted partner for innovative solutions.",
        cta: "Explore Our Services"
      },
      footer: {
        rights: "All rights reserved.",
        description: "A global leader in innovation and sustainable development."
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
        organization: "Shirika Letu",
        services: "Huduma Zetu",
        projects: "Miradi Yetu",
        sustainability: "Miradi Endelevu",
        partners: "Washirika Wetu",
        gallery: "Picha na Vyombo",
        blog: "Tathmini",
        contact: "Mawasiliano"
      },
      hero: {
        title: "Kujenga Mustakabali Bora Duniani Kote.",
        subtitle: "Utaalamu wa kimataifa. Athari za ndani. Sisi ni Peakey International, mshirika wako wa kuaminika kwa suluhisho bunifu.",
        cta: "Gundua Huduma Zetu"
      },
      footer: {
        rights: "Haki zote zimehifadhiwa.",
        description: "Kiongozi wa kimataifa katika ubunifu na maendeleo endelevu."
      },
      contact: {
        title: "Wasiliana Nasi",
        name: "Jina Kamili",
        email: "Barua Pepe",
        message: "Ujumbe",
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
      hero: {
        title: "Construyendo un futuro mejor en todo el mundo.",
        subtitle: "Experiencia global. Impacto local. Somos Peakey International, su socio de confianza.",
        cta: "Explorar Nuestros Servicios"
      },
      footer: {
        rights: "Todos los derechos reservados.",
        description: "Un líder mundial en innovación y desarrollo sostenible."
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
