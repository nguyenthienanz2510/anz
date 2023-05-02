'use client'

import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import urlFor from '@/lib/urlFor'

type Props = { portfolioData: Portfolio }

export default function Header({ portfolioData }: Props) {
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
        {portfolioData.socials.map((social, index) => {
          return <SocialIcon key={index} url={social.url} fgColor='gray' bgColor='transparent' />
        })}
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
        <SocialIcon href='#contactMe' network='email' className='cursor-pointer' fgColor='gray' bgColor='transparent' />
        <p className='hidden pr-2 uppercase md:inline-flex'>
          <a href='#contactMe'>Get in touch</a>
        </p>
      </motion.div>
    </header>
  )
}
