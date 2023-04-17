'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircle from '../Common/BackgroundCircle'

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ['Hi, The Name Nguyen Thien An', 'Guy-who-loves-Coffee.tsx', '<ButLoveToCodeMore />'],
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
            src={
              'https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.6435-9/82192694_2588925624664525_5889774943192743936_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PF2mKk_PkQIAX-1q7Jw&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfBQkl7cZHG5PGpzI-lU5Ama0cSeAeNnTEp-quCFhIIDaQ&oe=64638F83'
            }
            alt={'avatar'}
            width={128}
            height={128}
            priority
          />
        </div>
        <div className='z-1 relative space-y-5'>
          <h2 className='text-xs uppercase tracking-[8px] md:text-sm md:tracking-[12px]'>Frontend Developer</h2>
          <h1 className='px-4 text-xl font-bold md:px-10 md:text-3xl'>
            <span className='text-color-text-dark-primary dark:text-color-text-light-primary'>{text}</span>
            <Cursor cursorColor='#F472B6' />
          </h1>
          <div className='z-1 relative mx-auto flex justify-center gap-6 text-xs md:gap-10 md:text-sm'>
            <a href='#portfolioAbout'>
              <button className='uppercase'>About</button>
            </a>
            <a href='#portfolioExperience'>
              <button className='uppercase'>Experience</button>
            </a>
            <a href='#portfolioSkills'>
              <button className='uppercase'>Skills</button>
            </a>
            <a href='#portfolioProjects'>
              <button className='uppercase'>Projects</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
