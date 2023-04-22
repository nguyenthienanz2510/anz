'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Carousel } from 'flowbite-react'

type Props = {}

export default function WorkExperience({}: Props) {
  const workExperienceList = [1, 2, 3, 4, 5]
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
        className='flex flex h-full w-full items-center justify-center pb-5'
      >
        <Carousel slideInterval={5000} className='flex items-center justify-center'>
          {workExperienceList.map((_, index) => {
            return <ExperienceCard key={index} />
          })}
        </Carousel>
      </motion.div>
    </div>
  )
}
