import React from 'react';
import Appbar from '../components/Appbar';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Controls from '../components/Controls';
import FooterSection from '../components/FooterSection';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div>
      <Appbar />
      <Controls />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <FooterSection />
    </div>
  )
}
