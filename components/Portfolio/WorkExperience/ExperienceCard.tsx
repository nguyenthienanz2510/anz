import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import urlFor from '@/lib/urlFor'

type Props = {
  experience: PortfolioExperience
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className='mx-auto flex h-full w-full items-center justify-center transition-all md:w-[600px] md:gap-4 lg:w-[800px]'>
      <div className='flex w-full flex-shrink-0 flex-col items-center justify-center gap-3 rounded-lg bg-slate-800 p-5 hover:bg-slate-700'>
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
          src={urlFor(experience?.companyImage).url()}
          alt={experience?.companyName}
        />
        <div className='space-y-3 text-14 text-color-text-light-primary md:space-y-4 md:text-16 2xl:text-18 2xl:text-18'>
          <h3 className='text-center text-16 font-light md:text-20 2xl:text-28'>{experience.jobTitle}</h3>
          <h4 className='text-center text-12 font-bold uppercase tracking-widest md:text-14 2xl:text-18'>
            {experience?.companyName}
          </h4>
          <p className='font-normal'>{experience?.summary}</p>
          <div className='flex gap-2'>
            {experience.technologies.map((technology, index) => {
              return (
                <Image
                  key={index}
                  src={urlFor(technology.image).url()}
                  alt={technology.title}
                  title={technology.title}
                  width={40}
                  height={40}
                  className='h-7 w-7 rounded-full md:h-10  md:w-10'
                />
              )
            })}
          </div>
          <p className='text-color-text-light-secondary'>
            {experience.dateStarted} - {experience.isCurrentWorkingHere ? 'Now' : experience.dateEnded}
          </p>
          <ul className='ml-5 list-disc space-y-2 md:space-y-3'>
            {experience.description.map((item, index) => {
              return <li key={index}>{item}</li>
            })}
          </ul>
        </div>
      </div>
    </article>
  )
}
