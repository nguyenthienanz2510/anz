'use client'

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {
  portfolioSkillsData: PortfolioSkill[]
}

export default function Skills({ portfolioSkillsData }: Props) {
  return (
    <div className='relative mx-auto flex h-screen items-center justify-center px-5 pt-[50px]'>
      <h2 className='absolute top-20 z-10 translate-x-3 text-16 uppercase tracking-[20px] md:text-20'>Skills</h2>
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
        className='grid grid-cols-3 gap-5 md:grid-cols-4 md:gap-10'
      >
        {portfolioSkillsData.map((skill) => {
          return <Skill key={skill._id} skill={skill} />
        })}
      </motion.div>
    </div>
  )
}
