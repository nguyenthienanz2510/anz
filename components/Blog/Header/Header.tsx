import ThemeSwitcher from '@/components/Common/ThemeSwitcher'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Header({}: Props) {
  return (
    <header>
      <div className='container flex h-20 items-center justify-between'>
        <div className='flex items-end gap-3'>
          <div className='group relative text-32 font-bold text-color-text-dark-primary dark:text-color-text-light-primary'>
            <Link href={'/'} className='duration-500 hover:text-color-primary-light dark:hover:text-color-primary-dark'>
              <span className='text-color-primary-light dark:text-color-primary-dark'>Anz&apos;s</span> Blog
            </Link>
            <div className='absolute bottom-[6px] left-0 h-1 w-1/2 bg-color-primary-light duration-500 group-hover:w-[88%] dark:bg-color-primary-dark'></div>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <ThemeSwitcher />
          <button className='btn-primary'>Subscribe</button>
        </div>
      </div>
    </header>
  )
}
