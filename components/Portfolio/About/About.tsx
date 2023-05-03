'use client'
import React from 'react'
import { motion } from 'framer-motion'
import urlFor from '@/lib/urlFor'

type Props = {
  portfolioData: Portfolio
}

export default function About({ portfolioData }: Props) {
  return (
    <div className='relative mx-auto flex h-screen max-w-[1200px] items-center justify-center px-5 pt-[50px] text-center lg:text-left'>
      <h2 className='absolute top-20 z-10 translate-x-3 text-16 uppercase tracking-[20px] md:text-20'>About</h2>
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
        className='flex flex-col items-center justify-center gap-8 lg:flex-row'
      >
        <motion.img
          initial={{
            x: -200
          }}
          whileInView={{
            x: 0
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1
          }}
          className='relative mx-auto h-40 w-40 shrink-0 rounded-full object-cover lg:h-96 lg:w-96 lg:rounded-lg'
          src={urlFor(portfolioData.aboutMeImage).url()}
          alt={'about me'}
        />
        <div className='space-y-5'>
          <h3 className='text-22 font-bold md:text-36'>Here is a little background</h3>
          <p className='text-16 md:text-18'>{portfolioData.backgroundInformation}</p>
        </div>
      </motion.div>
    </div>
  )
}
