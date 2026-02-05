import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Loading from '@/components/Loading';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import GitHubGraph from '@/components/GitHubGraph';
import Footer from '@/components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <AnimatePresence mode="wait">
        {loading ? (
          <Loading key="loader" />
        ) : (
          <main key="main">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
              <GitHubGraph />
            </section>
            <Experience />
            <Contact />
            <Footer />
          </main>
        )}
      </AnimatePresence>
    </>
  );
}
