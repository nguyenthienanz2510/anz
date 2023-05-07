import { RichTextComponents } from '@/components/Common/RichTextComponents/RichTextComponents'
import { client } from '@/lib/sanity.client'
import urlFor from '@/lib/urlFor'
import { PortableText } from '@portabletext/react'
import { Metadata } from 'next'
import { groq } from 'next-sanity'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

type Props = {
  params: {
    slug: string
  }
}

export const revalidate = 60

export async function generateStaticParams() {
  const query = groq`
  *[_type=='post']
  {
    slug
  }
`
  const slugs: Post[] = await client.fetch(query)
  const slugRoutes = slugs.map((slug) => {
    return slug.slug.current
  })

  return slugRoutes.map((slug) => ({
    slug: slug
  }))
}

export async function generateMetadata({ params: { slug } }: Props) {
  const query = groq`
        *[_type=='post' && slug.current == $slug][0]
        {
            ...,
            author->,
            categories[]->
        }
    `

  const post: Post = await client.fetch(query, { slug })

  if (post == null) {
    return null
  }

  return {
    openGraph: {
      images: urlFor(post.mainImage).url()
    },
    title: `${post.title} | Nguyen Thien An's Daily Blog`,
    description: post.description,
    keywords: [`${post.title}`, `Nguyen Thien An's Daily Blog`, `Nguyen Thien An`, `An's Blog`, `An's Daily Blog`],
    creator: post.author.name
  }
}

export default async function Post({ params: { slug } }: Props) {
  const query = groq`
        *[_type=='post' && slug.current == $slug][0]
        {
            ...,
            author->,
            categories[]->
        }
    `

  const post: Post = await client.fetch(query, { slug })

  if (post == null) {
    return null
  }

  return (
    <article>
      <section className='container'>
        <div className='relative rounded'>
          <div className='absolute top-0 -z-10 h-full w-full overflow-hidden rounded'>
            <div>
              <Image
                className='object-cover object-center blur-sm'
                alt={post.title}
                title={post.title}
                src={post.mainImage && urlFor(post.mainImage).url()}
                fill
              />
            </div>
          </div>
          <div className='flex flex-col justify-between gap-5 rounded bg-color-primary-light bg-opacity-80 p-5 text-white md:text-16'>
            <div className='flex flex-col justify-between gap-5 md:flex-row'>
              <div className='space-y-2'>
                <h3 className='text-24 font-bold md:text-36'>{post.title}</h3>
                <p className='text-color-text-light-primary'>
                  {new Date(post._createdAt).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </p>
              </div>
              <div className='flex flex-shrink-0 items-start gap-2 pt-2'>
                <Image
                  className='rounded-full object-cover object-center'
                  alt={post.author.name}
                  title={post.author.name}
                  src={post.mainImage && urlFor(post.author.image).url()}
                  width={40}
                  height={40}
                />
                <p className='text-18 font-bold leading-[40px]'>{post.author.name}</p>
              </div>
            </div>
            <div className='space-y-5'>
              <p className='italic'>{post.description}</p>
              <div className='flex w-full flex-wrap justify-end gap-2 text-12 leading-6 md:text-16 md:leading-8'>
                {post.categories?.map((category, index) => {
                  return (
                    <span
                      className='inline-block rounded border bg-color-secondary-light px-3 font-normal uppercase tracking-wide text-white md:px-4'
                      key={index}
                    >
                      {category.title}
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='blog-content'>
        <PortableText value={post.body} components={RichTextComponents} />
      </section>
    </article>
  )
}
