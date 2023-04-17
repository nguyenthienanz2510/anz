'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

export default function WorkExperience({}: Props) {
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
        className='flex w-full snap-x snap-mandatory flex-row space-x-5 overflow-x-scroll pb-5 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-700'
      >
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </motion.div>
    </div>
  )
}
