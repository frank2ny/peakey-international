import React, { Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { BackgroundFx } from './components/BackgroundFx';
import { Home } from './pages/Home';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useSpring } from 'motion/react';

const About = React.lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Organization = React.lazy(() => import('./pages/Organization').then(module => ({ default: module.Organization })));
const Contact = React.lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const Blog = React.lazy(() => import('./pages/Blog').then(module => ({ default: module.Blog })));
const Services = React.lazy(() => import('./pages/Services').then(module => ({ default: module.Services })));
const Projects = React.lazy(() => import('./pages/Projects').then(module => ({ default: module.Projects })));
const Placeholder = React.lazy(() => import('./pages/Placeholder').then(module => ({ default: module.Placeholder })));

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
      <main className="flex-1 w-full overflow-x-hidden">
        <div id="home"><Home /></div>
        <Suspense fallback={<div className="h-40 flex items-center justify-center font-bold text-slate-400">Loading...</div>}>
          <div id="about"><About /></div>
          <div id="organization"><Organization /></div>
          <div id="services"><Services /></div>
          <div id="projects"><Projects /></div>
          <div id="sustainability"><Placeholder title={t('nav.sustainability')} subtitle="Our commitment to eco-friendly practices." /></div>
          <div id="partners"><Placeholder title={t('nav.partners')} subtitle="Trusted by industry leaders worldwide." /></div>
          <div id="gallery"><Placeholder title={t('nav.gallery')} subtitle="Visual highlights of our global operations." /></div>
          <div id="blog"><Blog /></div>
          <div id="contact"><Contact /></div>
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
