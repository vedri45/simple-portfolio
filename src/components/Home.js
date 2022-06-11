import React from 'react'
import Appbar from './Appbar'
import Contact from './Contact'
import FooterSection from './FooterSection'
import Hero from './Hero'
import Projects from './Projects'
import Skills from './Skills'

export default function Home() {
  return (
    <div>
      <Appbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <FooterSection />
    </div>
  )
}
