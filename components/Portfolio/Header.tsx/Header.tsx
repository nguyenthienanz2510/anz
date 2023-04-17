'use client'

import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 z-50 flex items-start justify-between'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 0.7
        }}
        className='flex items-center'
      >
        <SocialIcon url='https://www.facebook.com/anz2510/' fgColor='gray' bgColor='transparent' />
        <SocialIcon
          url='https://www.youtube.com/channel/UCOpY5DyHAb7cqbBbVkxenjw'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.linkedin.com/in/nguy%E1%BB%85n-thi%C3%AAn-%C3%A2n-4a2857244/'
          fgColor='gray'
          bgColor='transparent'
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 0.7
        }}
        className='flex items-center text-gray-500'
      >
        <SocialIcon network='email' className='cursor-pointer' fgColor='gray' bgColor='transparent' />
        <p className='hidden pr-2 uppercase md:inline-flex'>Get in touch</p>
      </motion.div>
    </header>
  )
}
