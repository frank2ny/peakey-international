import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Organization } from './pages/Organization';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { Placeholder } from './pages/Placeholder';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 bg-[linear-gradient(to_bottom,theme(colors.slate.50),theme(colors.slate.100))] font-sans text-slate-800 selection:bg-red-500/20 selection:text-red-900">
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-red-600 origin-left z-[60] shadow-[0_0_10px_rgba(220,38,38,0.8)]"
      />
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden">
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="organization"><Organization /></div>
        <div id="services"><Services /></div>
        <div id="projects"><Projects /></div>
        <div id="sustainability"><Placeholder title={t('nav.sustainability')} subtitle="Our commitment to eco-friendly practices." /></div>
        <div id="partners"><Placeholder title={t('nav.partners')} subtitle="Trusted by industry leaders worldwide." /></div>
        <div id="gallery"><Placeholder title={t('nav.gallery')} subtitle="Visual highlights of our global operations." /></div>
        <div id="blog"><Blog /></div>
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
