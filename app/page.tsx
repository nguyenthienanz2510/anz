import About from '@/components/Portfolio/About'
import Header from '@/components/Portfolio/Header.tsx'
import Hero from '@/components/Portfolio/Hero'
import WorkExperience from '@/components/Portfolio/WorkExperience'
import React from 'react'

export default function Home() {
  return (
    <div className='h-screen snap-y snap-mandatory overflow-y-auto scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-700'>
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

      <section id='portfolioSkills' className='h-screen snap-center bg-yellow-500'></section>

      <section id='portfolioProjects' className='h-screen snap-center bg-orange-500'></section>
    </div>
  )
}
