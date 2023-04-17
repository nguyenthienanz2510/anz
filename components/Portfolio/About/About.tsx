'use client'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
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
          src={
            'https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.6435-9/82192694_2588925624664525_5889774943192743936_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PF2mKk_PkQIAX-1q7Jw&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfBQkl7cZHG5PGpzI-lU5Ama0cSeAeNnTEp-quCFhIIDaQ&oe=64638F83'
          }
          alt={'avatar'}
        />
        <div className='space-y-5'>
          <h3 className='text-22 font-bold text-color-text-light-primary md:text-36'>Here is a little background</h3>
          <p className='text-16 text-color-text-light-primary md:text-18'>
            My name is Nguyen Thien An ⚽️, and I was born in 1998 in Tien Giang province. I have been working as a
            Frontend developer 🖥 for a year now. Prior to this, I worked in the automotive industry for 2 years. I enjoy
            the creativity and problem-solving aspects of my current role, and I am always looking to improve my skills
            and stay up-to-date with the latest technologies in the field.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
