'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Carousel } from 'flowbite-react'

type Props = {
  portfolioExperiencesData: PortfolioExperience[]
}

export default function WorkExperience({ portfolioExperiencesData }: Props) {
  return (
    <div className='relative mx-auto flex h-screen items-center justify-center px-5 pt-[50px]'>
      <h2 className='absolute top-20 z-10 translate-x-3 text-16 uppercase tracking-[20px] md:text-20'>Experience</h2>
      <motion.div
        initial={{
          opacity: 0
        }}
        whileInView={{
          opacity: 1
        }}
        transition={{
          duration: 1.2
        }}
        className='flex h-full w-full items-center justify-center pb-5'
      >
        <Carousel slideInterval={5000} className='flex items-center justify-center'>
          {portfolioExperiencesData.map((experience) => {
            return <ExperienceCard key={experience._id} experience={experience}/>
          })}
        </Carousel>
      </motion.div>
    </div>
  )
}
