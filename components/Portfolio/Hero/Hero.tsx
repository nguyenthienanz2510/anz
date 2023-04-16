'use client'

import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ['Hi, The Name Nguyen Thien An', 'Guy-who-loves-Coffee.tsx', '<ButLoveToCodeMore />'],
    loop: true,
    deleteSpeed: 20
  })

  return (
    <div className='container h-screen'>
      <span className='text-color-text-dark-primary dark:text-color-text-light-primary'>{text}</span>
      <Cursor cursorColor='#F472B6' />
    </div>
  )
}
