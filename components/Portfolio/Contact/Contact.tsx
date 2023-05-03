'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'

type Props = {}

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact({}: Props) {
  const { register, handleSubmit } = useForm<FormData>()
  const onSubmit: SubmitHandler<FormData> = (formData) => {
    window.location.href = `mailto:nguyenthienanz1998@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message} (${formData.email})`
  }

  return (
    <div className='relative mx-auto flex h-screen items-center justify-center px-4 pt-[50px] md:px-0'>
      <h2 className='absolute top-20 z-10 translate-x-3 text-16 uppercase tracking-[20px] md:text-20'>Contact Me</h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1.2
        }}
        className='space-y-7'
      >
        <h3 className='text-center text-18 font-bold md:text-24'>I have got just what you need</h3>
        <div className='space-y-3 text-14 md:space-y-4 md:text-16'>
          <div className='flex items-center gap-5'>
            <PhoneIcon className='h-6 w-6 animate-pulse text-color-primary-light' />
            <a className='transition-all hover:text-color-primary-light' href='tel:0363016xxx'>
              +84363016xxx
            </a>
          </div>
          <div className='flex items-center gap-5'>
            <EnvelopeIcon className='h-6 w-6 animate-pulse text-color-primary-light' />
            <a className='transition-all hover:text-color-primary-light' href='mailto:nguyenthienanz1998@gmail.com'>
              nguyenthienanz1998@gmail.com
            </a>
          </div>
          <div className='flex items-center gap-5'>
            <MapPinIcon className='h-6 w-6 animate-pulse text-color-primary-light' />
            <p>Tan Phu Ward, Thu Duc City, Ho Chi Minh City</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 text-14 md:min-w-[360px] md:text-16'>
          <div className='flex gap-3'>
            <input {...register('name')} className='contactInput' placeholder='Name' type='text' />
            <input {...register('email')} className='contactInput' placeholder='Email' type='email' />
          </div>
          <input {...register('subject')} className='contactInput' placeholder='Subject' type='text' />
          <textarea {...register('message')} className='contactInput' placeholder='Message' />
          <button
            type='submit'
            title='Submit'
            aria-label='Submit'
            className='w-full rounded bg-color-primary-light p-4 text-color-text-light-primary'
          >
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  )
}
