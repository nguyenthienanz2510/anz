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
      <div className='absolute  h-[300px] w-[300px] animate-ping rounded-full border border-slate-800' />
      <div className='absolute  h-[600px] w-[600px] animate-pulse rounded-full border border-slate-800' />
    </motion.div>
  )
}
