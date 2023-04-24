import urlFor from '@/lib/urlFor'
import Image from 'next/image'
import React from 'react'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import ClientSideRoute from '@/components/Common/ClientSideRoute'

type Props = {
  posts: Post[]
}

export default function BlogList({ posts }: Props) {
  return (
    <section className='container'>
      <hr className='mb-10 border-color-primary-light dark:border-color-primary-dark' />
      <div className='grid grid-cols-1 gap-x-7 gap-y-10 xl:grid-cols-2'>
        {posts?.map((post) => {
          return (
            <ClientSideRoute route={`/post/${post.slug.current}`} key={post._id}>
              <div key={post._id} className='group cursor-pointer '>
                <div className='relative shadow-xl'>
                  <div className='relative w-full overflow-hidden rounded pt-[56.25%]'>
                    <Image
                      className='object-cover object-center duration-700 group-hover:scale-110'
                      alt={post.title}
                      title={post.title}
                      src={post.mainImage && urlFor(post.mainImage).url()}
                      fill
                    />
                  </div>
                  <div className='absolute bottom-0 w-full space-y-2 rounded bg-black bg-opacity-20 p-5 text-14 text-white drop-shadow-lg backdrop-blur-lg md:text-16'>
                    <h3 className='line-clamp-1 font-bold'>{post.title}</h3>
                    <p>
                      {new Date(post._createdAt).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                  <div className='absolute left-0 top-0 flex w-full flex-wrap gap-2 p-5 text-12 leading-6 md:text-16 md:leading-8'>
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
                <div className='space-y-3 pt-4'>
                  <h3 className='font-bold text-color-text-dark-primary underline dark:text-color-text-light-primary'>
                    {post.title}
                  </h3>
                  <p className='line-clamp-2'>{post.description}</p>
                  <span className='inline-block font-medium text-color-text-dark-primary duration-500 group-hover:text-color-primary-light group-hover:underline dark:text-color-text-light-primary dark:hover:text-color-primary-dark'>
                    Read more <ArrowUpRightIcon className='inline h-4 w-4' />
                  </span>
                </div>
              </div>
            </ClientSideRoute>
          )
        })}
      </div>
    </section>
  )
}
