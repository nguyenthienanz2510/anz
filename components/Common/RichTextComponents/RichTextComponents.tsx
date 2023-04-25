import urlFor from '@/lib/urlFor'
import Image from 'next/image'
import Link from 'next/link'

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className='mx-auto my-7 w-full md:my-10 md:w-[80%]'>
          <Image className='rounded-lg' src={urlFor(value).url()} alt='Blog Post Image' width={1920} height={1080} />
        </div>
      )
    }
  },
  list: {
    bullet: ({ children }: any) => {
      return <ul className='mb-5 ml-6 list-disc space-y-4 md:ml-10'>{children}</ul>
    },
    number: ({ children }: any) => {
      return <ol className='mb-5 ml-6 list-decimal space-y-4 md:ml-10'>{children}</ol>
    }
  },
  block: {
    h1: ({ children }: any) => {
      return (
        <h1 className='mb-5 text-32 font-bold text-color-text-dark-primary dark:text-color-text-light-primary'>
          {children}
        </h1>
      )
    },
    h2: ({ children }: any) => {
      return (
        <h2 className='mb-5 text-28 font-bold text-color-text-dark-primary dark:text-color-text-light-primary'>
          {children}
        </h2>
      )
    },
    h3: ({ children }: any) => {
      return (
        <h3 className='mb-5 text-24 font-bold text-color-text-dark-primary dark:text-color-text-light-primary'>
          {children}
        </h3>
      )
    },
    h4: ({ children }: any) => {
      return (
        <h4 className='mb-5 text-20 font-bold text-color-text-dark-primary dark:text-color-text-light-primary'>
          {children}
        </h4>
      )
    },
    normal: ({ children }: any) => {
      return <p className='mb-5'>{children}</p>
    },
    blockquote: ({ children }: any) => {
      return <blockquote className='my-10 border-l-4 border-l-color-secondary-light py-2 pl-5'>{children}</blockquote>
    }
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <Link
          href={value.href}
          rel={rel}
          className='underline decoration-color-secondary-light transition-all hover:text-color-secondary-light'
        >
          {children}
        </Link>
      )
    }
  }
}
