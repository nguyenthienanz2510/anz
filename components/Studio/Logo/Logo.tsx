import Image from 'next/image'
import React from 'react'

export default function Logo(props: any) {
  return (
    <div className='flex items-center'>
      <Image className='rounded object-cover' alt='logo' height={40} width={50} src='/logo-anz.png' />
      <React.Fragment>{props.renderDefault(props)}</React.Fragment>
    </div>
  )
}
