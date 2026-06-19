import React, { Suspense, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { BackgroundFx } from './components/BackgroundFx';
import { PageLoader } from './components/PageLoader';
import { Home } from './pages/Home';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';

const About = React.lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Organization = React.lazy(() => import('./pages/Organization').then(module => ({ default: module.Organization })));
const FeaturedOrganization = React.lazy(() => import('./components/FeaturedOrganization').then(module => ({ default: module.FeaturedOrganization })));
const Contact = React.lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const Blog = React.lazy(() => import('./pages/Blog').then(module => ({ default: module.Blog })));
const Services = React.lazy(() => import('./pages/Services').then(module => ({ default: module.Services })));
const Projects = React.lazy(() => import('./pages/Projects').then(module => ({ default: module.Projects })));
const FeaturedProjects = React.lazy(() => import('./components/FeaturedProjects').then(module => ({ default: module.FeaturedProjects })));
const ServicesDetailed = React.lazy(() => import('./pages/ServicesDetailed').then(module => ({ default: module.ServicesDetailed })));
const Placeholder = React.lazy(() => import('./pages/Placeholder').then(module => ({ default: module.Placeholder })));
const PartnersMarquee = React.lazy(() => import('./components/PartnersMarquee').then(module => ({ default: module.PartnersMarquee })));
const NotFound = React.lazy(() => import('./pages/NotFound').then(module => ({ default: module.NotFound })));

// Sub-pages that show the branded loader (not the home page)
const SUB_PAGES = ['/projects', '/services', '/organization', '/blog'];

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        const timer = setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 350);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [hash, pathname]);

  return null;
}

/** Shows the branded PageLoader only for sub-page navigations, not the homepage. */
function SubPageSuspense({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  // Show the loader only on initial site mount, waiting for critical images to load
  useEffect(() => {
    const criticalImages = [
      '/pklogo_backup.png',
      '/WEBSITE DEVELOPMENT/DODOMA JIJI.jpg'
    ];

    let loadedCount = 0;
    const totalImages = criticalImages.length;

    // Safety timeout: dismiss the loader after max 2.5s to prevent hanging on slow connections
    const safetyTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    const checkImageLoaded = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        clearTimeout(safetyTimeout);
        // Slightly delay the fade out for smooth transition
        setTimeout(() => setIsLoading(false), 200);
      }
    };

    criticalImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      if (img.complete) {
        checkImageLoaded();
      } else {
        img.onload = checkImageLoaded;
        img.onerror = checkImageLoaded; // continue even if an image fails to load
      }
    });

    return () => clearTimeout(safetyTimeout);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <PageLoader key="page-loader" />}
      </AnimatePresence>
      <Suspense fallback={<PageLoader />}>
        {children}
      </Suspense>
    </>
  );
}

export default function App() {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="flex flex-col min-h-screen bg-transparent bg-[linear-gradient(to_bottom,theme(colors.slate.50/90),theme(colors.slate.100/90))] relative font-sans text-slate-800 selection:bg-red-500/20 selection:text-red-900">
      <BackgroundFx />
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-red-600 origin-left z-[60] shadow-[0_0_10px_rgba(220,38,38,0.8)]"
      />
      <Navbar />
      <ScrollToHash />
      <main className="flex-1 w-full overflow-x-hidden">
        <SubPageSuspense>
          <Routes>
            <Route path="/" element={
              <Suspense fallback={<PageLoader />}>
                <>
                  <div id="home"><Home /></div>
                  <div id="about"><About /></div>
                  <div id="organization"><FeaturedOrganization /></div>
                  <div id="services"><Services /></div>
                  <div id="projects"><FeaturedProjects /></div>
                  <div id="partners"><PartnersMarquee /></div>
                  <div id="gallery"><Placeholder title={t('nav.gallery')} subtitle="Visual highlights of our global operations." /></div>
                  <div id="contact"><Contact /></div>
                </>
              </Suspense>
            } />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<ServicesDetailed />} />
            <Route path="/organization" element={<Organization />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SubPageSuspense>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
