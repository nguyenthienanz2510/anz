import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex w-full flex-shrink-0 snap-center flex-col items-center justify-center gap-3 rounded-lg bg-slate-800 p-5 transition-all hover:bg-slate-700 md:w-[500px] md:gap-4 lg:w-[600px]'>
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
        className='relative mx-auto h-24 w-24 shrink-0 rounded-full object-cover 2xl:h-36 2xl:w-36'
        src={
          'https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.6435-9/82192694_2588925624664525_5889774943192743936_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PF2mKk_PkQIAX-1q7Jw&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfBQkl7cZHG5PGpzI-lU5Ama0cSeAeNnTEp-quCFhIIDaQ&oe=64638F83'
        }
        alt={'avatar'}
      />
      <div className='space-y-3 text-14 text-color-text-light-primary md:space-y-4 md:text-16 2xl:text-18 2xl:text-18'>
        <h3 className='text-center text-16 font-light md:text-20 2xl:text-28'>Frontend Developer</h3>
        <h4 className='text-center text-12 font-bold uppercase tracking-widest md:text-14 2xl:text-18'>Company Name</h4>
        <p className='font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sapiente!</p>
        <div className='flex gap-2'>
          <Image
            src='https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png'
            alt='icon'
            width={40}
            height={40}
            className='h-7 w-7 rounded-full md:h-10  md:w-10'
          />
          <Image
            src='https://cdn.sanity.io/images/ltuexkre/production/fa5e6eeb3377a1601e181d0eeb9a60633090cff2-500x500.png'
            alt='icon'
            width={40}
            height={40}
            className='h-7 w-7 rounded-full md:h-10  md:w-10'
          />
          <Image
            src='https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png'
            alt='icon'
            width={40}
            height={40}
            className='h-7 w-7 rounded-full md:h-10  md:w-10'
          />
          <Image
            src='https://cdn.sanity.io/images/ltuexkre/production/fa5e6eeb3377a1601e181d0eeb9a60633090cff2-500x500.png'
            alt='icon'
            width={40}
            height={40}
            className='h-7 w-7 rounded-full md:h-10  md:w-10'
          />
        </div>
        <p className='text-color-text-light-secondary'>Started work... - Ended work...</p>
        <ul className='ml-5 list-disc space-y-2 md:space-y-3'>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae ea iste ipsam, unde optio impedit cum
            incidunt perspiciatis possimus!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae ea iste ipsam, unde optio impedit cum
            incidunt perspiciatis possimus!
          </li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>
    </article>
  )
}
