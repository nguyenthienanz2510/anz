import About from '@/components/Portfolio/About'
import Contact from '@/components/Portfolio/Contact'
import Header from '@/components/Portfolio/Header.tsx'
import Hero from '@/components/Portfolio/Hero'
import Projects from '@/components/Portfolio/Projects'
import Skills from '@/components/Portfolio/Skills'
import WorkExperience from '@/components/Portfolio/WorkExperience'
import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'
import React from 'react'

const queryPortfolio = groq`
  *[_type == "portfolio"][0]{
    ...,
    socials[]->,
  }
`
const queryPortfolioSkills = groq`
  *[_type=='portfolio-skills']{
            ...
  } | order(order asc)
`
const queryPortfolioExperiences = groq`
  *[_type=='portfolio-experience']
    {
       ...,
       technologies[]->
    } | order(dateStarted desc)
`
const queryPortfolioProjects = groq`
  *[_type=='portfolio-projects']
    {
      ...,
      technologies[]->
    } | order(order asc)
`

export const revalidate = 60

export default async function Home() {
  const portfolioData = await client.fetch(queryPortfolio)
  const portfolioSkillsData = await client.fetch(queryPortfolioSkills)
  const portfolioExperiencesData = await client.fetch(queryPortfolioExperiences)
  const portfolioProjectsData = await client.fetch(queryPortfolioProjects)
  return (
    <div className='h-screen snap-y snap-mandatory overflow-y-auto bg-color-bg-dark-primary text-color-text-light-primary scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-700'>
      <Header portfolioData={portfolioData} />

      <section id='portfolioHero' className='snap-center'>
        <Hero portfolioData={portfolioData} />
      </section>

      <section id='portfolioAbout' className='snap-center'>
        <About portfolioData={portfolioData} />
      </section>

      <section id='portfolioExperience' className='snap-center'>
        <WorkExperience portfolioExperiencesData={portfolioExperiencesData}/>
      </section>

      <section id='portfolioSkills' className='snap-center'>
        <Skills portfolioSkillsData={portfolioSkillsData} />
      </section>

      <section id='portfolioProjects' className='snap-center'>
        <Projects portfolioProjectsData={portfolioProjectsData}/>
      </section>

      <section id='contactMe' className='snap-center'>
        <Contact />
      </section>
    </div>
  )
}
