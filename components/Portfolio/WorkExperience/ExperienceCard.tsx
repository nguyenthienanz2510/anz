import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex w-full flex-shrink-0 snap-center flex-col items-center justify-center gap-5 rounded-lg bg-slate-800 p-5 transition-all hover:bg-slate-700 md:w-[500px] lg:w-[600px]'>
      <motion.img
        initial={{
          y: -100
        }}
        whileInView={{
          y: 0
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1
        }}
        className='relative mx-auto h-28 w-28 shrink-0 rounded-full object-cover md:h-36 md:w-36'
        src={
          'https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.6435-9/82192694_2588925624664525_5889774943192743936_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PF2mKk_PkQIAX-1q7Jw&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfBQkl7cZHG5PGpzI-lU5Ama0cSeAeNnTEp-quCFhIIDaQ&oe=64638F83'
        }
        alt={'avatar'}
      />
      <div className='space-y-5 text-16 text-color-text-dark-primary dark:text-color-text-light-primary md:text-18'>
        <h3 className='text-24 font-light md:text-28'>CEO VietnameseHistory</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sapiente!</p>
        <div className='flex gap-2'>
          <Image
            src='https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png'
            alt='icon'
            width={40}
            height={40}
            className='h-10 w-10 rounded-full'
          />
          <Image
            src='https://cdn.sanity.io/images/ltuexkre/production/fa5e6eeb3377a1601e181d0eeb9a60633090cff2-500x500.png'
            alt='icon'
            width={40}
            height={40}
            className='h-10 w-10 rounded-full'
          />
          <Image
            src='https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png'
            alt='icon'
            width={40}
            height={40}
            className='h-10 w-10 rounded-full'
          />
          <Image
            src='https://cdn.sanity.io/images/ltuexkre/production/fa5e6eeb3377a1601e181d0eeb9a60633090cff2-500x500.png'
            alt='icon'
            width={40}
            height={40}
            className='h-10 w-10 rounded-full'
          />
        </div>
        <p className='text-color-text-dark-secondary dark:text-color-text-light-secondary'>
          Started work... - Ended work...
        </p>
        <ul className='ml-5 list-disc space-y-4'>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>
    </article>
  )
}
