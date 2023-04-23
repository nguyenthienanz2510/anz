import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Banner({}: Props) {
  return (
    <section>
      <div className='container flex flex-col justify-between gap-5 py-10 xl:flex-row'>
        <div className='space-y-3 xl:flex-[7]'>
          <h2 className='text-5xl font-bold leading-[60px] text-color-text-dark-primary transition-colors duration-1000 hover:text-color-primary-light dark:text-color-text-light-primary dark:hover:text-color-primary-dark md:text-7xl md:leading-[84px]'>
            Nguyen Thien An&apos;s Daily Blog
          </h2>
          <p className='text-16 uppercase tracking-widest md:text-24'>
            Hi there, I am a{' '}
            <span className='underline-secondary text-color-text-dark-primary dark:text-color-text-light-primary'>
              developer
            </span>{' '}
            with an endless supply of energy for{' '}
            <span className='underline-secondary text-color-text-dark-primary dark:text-color-text-light-primary'>
              coding
            </span>
            .
          </p>
        </div>
        <div className='space-y-5 text-16 md:text-20 xl:flex-[5]'>
          <p className='font-bold text-color-text-dark-primary dark:text-color-text-light-primary'>
            New product features | The latest in technology | The weekly debugging nightmares & More!
          </p>
          <p className='font-normal'>
            Would you like to visit{' '}
            <Link href={'/'} className='text-highlight-primary'>
              My portfolio
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
