'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Carousel } from 'flowbite-react'
import urlFor from '@/lib/urlFor'
import Image from 'next/image'

type Props = {
  portfolioProjectsData: PortfolioProject[]
}

export default function Projects({ portfolioProjectsData }: Props) {
  return (
    <div className='relative mx-auto flex h-screen items-center justify-center pt-[50px]'>
      <h2 className='absolute top-20 z-10 translate-x-3 text-16 uppercase tracking-[20px] md:text-20'>Projects</h2>
      <div className='absolute top-[30%] z-0 h-[50%] w-full -skew-y-12 bg-color-primary-light/20 md:-skew-y-6'></div>
      <div className='h-full w-full px-4 md:px-0'>
        <Carousel slideInterval={5000}>
          {portfolioProjectsData.map((project, index) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1.2
                }}
                key={index}
                className='flex h-full flex-col justify-center space-y-3 text-center md:space-y-4'
              >
                <motion.img
                  initial={{ translateY: -100 }}
                  whileInView={{ translateY: 0 }}
                  transition={{
                    duration: 0.7
                  }}
                  src={urlFor(project.projectImage).url()}
                  alt={project.title}
                  title={project.title}
                  className='mx-auto block w-3/4 flex-shrink-0 rounded-lg md:w-1/2'
                />
                <motion.div
                  initial={{ translateY: 100 }}
                  whileInView={{ translateY: 0 }}
                  transition={{
                    duration: 0.7
                  }}
                  className='space-y-3 md:space-y-4'
                >
                  <h2 className='upercase text-18 font-bold md:text-24'>
                    <span className='underline decoration-color-secondary-light/50'>
                      Case Study {index + 1} of {portfolioProjectsData.length}:
                    </span>{' '}
                    {project.title}
                  </h2>
                  <p className='mx-auto w-full text-justify text-14 md:w-3/4 md:text-center md:text-16'>
                    {project.summary}
                  </p>
                  <div className='mx-auto flex w-full flex-wrap justify-center gap-2 text-14 md:text-16'>
                    {project.technologies?.map((technology, index) => {
                      return (
                        <Image
                          key={index}
                          src={urlFor(technology.image).url()}
                          alt={technology.title}
                          title={technology.title}
                          width={40}
                          height={40}
                          className='h-7 w-7 rounded-full bg-color-bg-dark-secondary md:h-10  md:w-10'
                        />
                      )
                    })}
                  </div>
                  <ul className='mx-auto w-full list-disc space-y-2 pl-4 text-justify text-14 md:w-3/4 md:space-y-3 md:text-16'>
                    {project.detail?.map((item, index) => {
                      return <li key={index}>{item}</li>
                    })}
                    {project.linkSource && (
                      <li>
                        Link source:{' '}
                        <a
                          title={project.title}
                          className='underline decoration-color-secondary-dark transition-all hover:text-color-primary-dark hover:decoration-color-primary-dark'
                          target='_blank'
                          rel='noreferrer'
                          href={project.linkSource}
                        >
                          {project.linkSource}
                        </a>
                      </li>
                    )}
                    {project.linkToBuild && (
                      <li>
                        Link project:{' '}
                        <a
                          title={project.title}
                          className='underline decoration-color-secondary-dark transition-all hover:text-color-primary-dark hover:decoration-color-primary-dark'
                          target='_blank'
                          rel='noreferrer'
                          href={project.linkToBuild}
                        >
                          {project.linkToBuild}
                        </a>
                      </li>
                    )}
                  </ul>
                </motion.div>
              </motion.div>
            )
          })}
        </Carousel>
      </div>
    </div>
  )
}
