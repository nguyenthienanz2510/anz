import urlFor from '@/lib/urlFor'
import Image from 'next/image'
import Link from 'next/link'

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div>
          <Image src={urlFor(value).url()} alt='Blog Post Image' width={1920} height={1080} />
        </div>
      )
    }
  },
  list: {
    bullet: ({ children }: any) => {
      return <ul>{children}</ul>
    },
    number: ({ children }: any) => {
      return <ol>{children}</ol>
    }
  },
  block: {
    h1: ({ children }: any) => {
      return <h1>{children}</h1>
    },
    h2: ({ children }: any) => {
      return <h2>{children}</h2>
    },
    h3: ({ children }: any) => {
      return <h3>{children}</h3>
    },
    h4: ({ children }: any) => {
      return <h4>{children}</h4>
    },
    normal: ({ children }: any) => {
      return <p>{children}</p>
    },
    blockquote: ({ children }: any) => {
      return <blockquote>{children}</blockquote>
    }
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <Link href={value.href} rel={rel}>
          {children}
        </Link>
      )
    }
  }
}
