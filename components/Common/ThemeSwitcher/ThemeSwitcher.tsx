'use client'

import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

type Props = {}

export default function ThemeSwitcher({}: Props) {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const currentTheme = theme === systemTheme ? systemTheme : theme

  return (
    <div className='duration-500'>
      {currentTheme === 'dark' ? (
        <SunIcon
          className='h-7 w-7'
          onClick={() => {
            console.log(currentTheme, theme)
            setTheme('light')
          }}
        />
      ) : (
        <MoonIcon
          className='h-7 w-7'
          onClick={() => {
            console.log(currentTheme, theme)
            setTheme('dark')
          }}
        />
      )}
    </div>
  )
}
