import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function BackgroundCircle({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        scale: [1, 2, 2, 1],
        opacity: [0.5, 0.5, 1, 1]
      }}
      transition={{
        duration: 2
      }}
      className='relative flex items-center justify-center'
    >
      <div className='absolute h-[270px] w-[270px] animate-ping rounded-full border border-slate-800 md:h-[300px] md:w-[300px]' />
      <div className='absolute h-[540px] w-[540px] animate-pulse rounded-full border border-slate-800 md:h-[600px] md:w-[600px]' />
    </motion.div>
  )
}
