import Link from 'next/link'
import React from 'react'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

export default function StudioNavbar(props: any) {
  return (
    <React.Fragment>
      <div className='flex justify-between p-3'>
        <Link href={'/'} className='flex items-center gap-2 text-[#38BDF8]'>
          <ArrowUturnLeftIcon className='h-6 w-6' /> Go to website
        </Link>
      </div>
      <React.Fragment>{props.renderDefault(props)}</React.Fragment>
    </React.Fragment>
  )
}
