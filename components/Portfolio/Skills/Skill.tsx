import React from 'react'
import { motion } from 'framer-motion'
import urlFor from '@/lib/urlFor'

type Props = {
  directionLeft?: boolean
  skill: PortfolioSkill
}

export default function Skill({ skill }: Props) {
  return (
    <div className='group relative flex h-24 w-24 cursor-pointer overflow-hidden rounded-full border border-slate-700 hover:bg-color-primary-light md:h-40 md:w-40'>
      <motion.img
        initial={{
          opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill.image).url()}
        className='rounded-full object-cover duration-500 ease-in-out group-hover:grayscale-[0.5]'
        alt={skill.title}
        title={skill.title}
      />
      <motion.div className='fixed left-1/2 top-1/2 z-10 min-w-[70vw] max-w-[70vw] -translate-y-1/2 translate-x-[120vw] space-y-3 rounded-lg bg-slate-800 p-5 opacity-0 transition-all  duration-500 group-hover:-translate-x-1/2 group-hover:opacity-100 md:min-w-[600px] md:space-y-4'>
        <h4>{skill.title}</h4>
        <p>{skill.summary}</p>
        <ul className='list-disc space-y-3 pl-5 md:space-y-4'>
          {skill.detail?.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </motion.div>
    </div>
  )
}
