import Header from '@/components/Portfolio/Header.tsx'
import Hero from '@/components/Portfolio/Hero'
import React from 'react'

export default function Home() {
  return (
    <div className='h-screen snap-y snap-mandatory overflow-y-auto'>
      <Header />

      <section id='portfolioHero' className='snap-center'>
        <Hero />
      </section>

      <section id='portfolioAbout' className='h-screen snap-center bg-blue-500'></section>

      <section id='portfolioExperience' className='h-screen snap-center bg-red-500'></section>

      <section id='portfolioSkills' className='h-screen snap-center bg-yellow-500'></section>

      <section id='portfolioProjects' className='h-screen snap-center bg-orange-500'></section>
    </div>
  )
}
