'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Carousel } from 'flowbite-react'

type Props = {}

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5]
  return (
    <div className='relative mx-auto flex h-screen items-center justify-center pt-[50px]'>
      <h2 className='absolute top-20 z-10 translate-x-3 text-16 uppercase tracking-[20px] md:text-20'>Projects</h2>
      <div className='absolute top-[30%] z-0 h-[50%] w-full -skew-y-12 bg-color-primary-light/20 md:-skew-y-6'></div>
      <div className='h-full w-full px-4 md:px-0'>
        <Carousel slideInterval={5000}>
          {projects.map((_, index) => {
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
                  src='https://d1ubwt7z1ubyyw.cloudfront.net/uploads/best-places-to-visit-for-christmas-season-meta-1673593447.jpg'
                  alt='project image'
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
                      Case Study {index + 1} of {projects.length}:
                    </span>{' '}
                    MugsKOK
                  </h2>
                  <p className='w-full text-justify text-14 md:w-3/4 md:text-center md:text-16 mx-auto'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit magni assumenda corporis. Dolores
                    aliquam voluptatum quae. Fuga aliquid nam inventore unde tempore itaque dolorum quas, commodi
                    numquam provident quibusdam nulla suscipit nostrum, eligendi mollitia reiciendis eveniet consectetur
                    odio voluptatibus ipsam voluptates. In sequi quisquam repellendus nihil, minus nemo! Corrupti
                    nesciunt dicta, blanditiis perspiciatis perferendis dolore, porro nisi at aut veritatis eveniet
                    aspernatur vel velit voluptas impedit soluta? Dolores eveniet dolorum quaerat repudiandae, facilis
                    magni rem sunt porro maiores obcaecati nam, necessitatibus fuga, distinctio assumenda perspiciatis!
                    Consequatur voluptates libero illum nisi molestiae at eligendi? Reiciendis saepe aperiam dolorum
                    omnis laborum ut!
                  </p>
                </motion.div>
              </motion.div>
            )
          })}
        </Carousel>
      </div>
    </div>
  )
}
