import About from '@/components/Portfolio/About'
import Contact from '@/components/Portfolio/Contact'
import Header from '@/components/Portfolio/Header.tsx'
import Hero from '@/components/Portfolio/Hero'
import Projects from '@/components/Portfolio/Projects'
import Skills from '@/components/Portfolio/Skills'
import WorkExperience from '@/components/Portfolio/WorkExperience'
import React from 'react'

export default function Home() {
  return (
    <div className='h-screen snap-y snap-mandatory overflow-y-auto bg-color-bg-dark-primary text-color-text-light-primary scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-700'>
      <Header />

      <section id='portfolioHero' className='snap-center'>
        <Hero />
      </section>

      <section id='portfolioAbout' className='snap-center'>
        <About />
      </section>

      <section id='portfolioExperience' className='snap-center'>
        <WorkExperience />
      </section>

      <section id='portfolioSkills' className='snap-center'>
        <Skills />
      </section>

      <section id='portfolioProjects' className='snap-center'>
        <Projects />
      </section>

      <section id='contactMe' className='snap-center'>
        <Contact />
      </section>
    </div>
  )
}
