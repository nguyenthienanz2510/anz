'use client'

import urlFor from '@/lib/urlFor'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircle from '../Common/BackgroundCircle'

type Props = {
  portfolioData: Portfolio
}

export default function Hero({ portfolioData }: Props) {
  const [text, count] = useTypewriter({
    words: portfolioData.slogan,
    loop: true,
    deleteSpeed: 20,
    typeSpeed: 50
  })

  return (
    <div className='container flex h-screen flex-col items-center justify-center overflow-hidden pt-[100px] text-center'>
      <div className='space-y-5'>
        <div className='relative z-0'>
          <div className='absolute left-1/2 top-1/2'>
            <BackgroundCircle />
          </div>
          <Image
            className='relative mx-auto h-32 w-32 rounded-full object-cover'
            src={urlFor(portfolioData.avatar).url()}
            alt={'avatar'}
            width={128}
            height={128}
            priority
          />
        </div>
        <div className='z-1 relative space-y-5'>
          <h2 className='text-xs uppercase tracking-[8px] md:text-sm md:tracking-[12px]'>Frontend Developer</h2>
          <h1 className='px-4 text-xl font-bold md:px-10 md:text-3xl'>
            <span>{text}</span>
            <Cursor cursorColor='#F472B6' />
          </h1>
          <div className='z-1 relative mx-auto flex justify-center gap-6 text-xs md:gap-10 md:text-sm'>
            <a href='#portfolioAbout'>
              <button className='uppercase' title='About' aria-label='About'>
                About
              </button>
            </a>
            <a href='#portfolioExperience'>
              <button className='uppercase' title='Experience' aria-label='Experience'>
                Experience
              </button>
            </a>
            <a href='#portfolioSkills'>
              <button className='uppercase' title='Skills' aria-label='Skills'>
                Skills
              </button>
            </a>
            <a href='#portfolioProjects'>
              <button className='uppercase' title='Projects' aria-label='Projects'>
                Projects
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
