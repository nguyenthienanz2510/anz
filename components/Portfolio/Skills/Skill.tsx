import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  directionLeft?: boolean
}

export default function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative flex h-24 w-24 cursor-pointer overflow-hidden rounded-full border border-slate-700 hover:bg-color-primary-light md:h-40 md:w-40'>
      <motion.img
        initial={{
          opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src='https://cdn.sanity.io/images/ltuexkre/production/fa5e6eeb3377a1601e181d0eeb9a60633090cff2-500x500.png'
        className='rounded-full object-cover duration-500 ease-in-out group-hover:grayscale-[0.5]'
      />
      <motion.div className='fixed left-1/2 top-1/2 z-10 min-w-[70vw] max-w-[70vw] -translate-y-1/2 translate-x-[120vw] space-y-3 rounded-lg bg-slate-800 p-5 opacity-0 transition-all  duration-500 group-hover:-translate-x-1/2 group-hover:opacity-100 md:min-w-[600px] md:space-y-4'>
        <h4>Detail description</h4>
        <ul className='list-disc space-y-3 pl-5 md:space-y-4'>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nemo.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nemo.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nemo.</li>
        </ul>
      </motion.div>
    </div>
  )
}
