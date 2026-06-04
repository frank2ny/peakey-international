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

// Sub-pages that show the branded loader (not the home page)
const SUB_PAGES = ['/projects', '/services', '/organization'];

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
    } else if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash, pathname]);

  return null;
}

/** Shows the branded PageLoader only for sub-page navigations, not the homepage. */
function SubPageSuspense({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isSubPage = SUB_PAGES.includes(location.pathname);
  const [isLoading, setIsLoading] = useState(isSubPage);

  // When pathname changes to a sub-page, briefly show the loader
  useEffect(() => {
    if (isSubPage) {
      setIsLoading(true);
      // Minimum display so it's visible, then defer hiding to Suspense resolution
      const t = setTimeout(() => setIsLoading(false), 600);
      return () => clearTimeout(t);
    } else {
      setIsLoading(false);
    }
  }, [location.pathname, isSubPage]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <PageLoader key="page-loader" />}
      </AnimatePresence>
      <Suspense fallback={isSubPage ? <PageLoader /> : null}>
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
              <Suspense fallback={null}>
                <>
                  <div id="home"><Home /></div>
                  <div id="about"><About /></div>
                  <div id="organization"><FeaturedOrganization /></div>
                  <div id="services"><Services /></div>
                  <div id="projects"><FeaturedProjects /></div>
                  <div id="sustainability"><Placeholder title={t('nav.sustainability')} subtitle="Our commitment to eco-friendly practices." /></div>
                  <div id="partners"><PartnersMarquee /></div>
                  <div id="gallery"><Placeholder title={t('nav.gallery')} subtitle="Visual highlights of our global operations." /></div>
                  <div id="blog"><Blog /></div>
                  <div id="contact"><Contact /></div>
                </>
              </Suspense>
            } />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<ServicesDetailed />} />
            <Route path="/organization" element={<Organization />} />
          </Routes>
        </SubPageSuspense>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
