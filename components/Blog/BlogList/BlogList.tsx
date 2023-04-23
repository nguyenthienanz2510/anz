import urlFor from '@/lib/urlFor'
import Image from 'next/image'
import React from 'react'

type Props = {
  posts: Post[]
}

export default function BlogList({ posts }: Props) {
  console.log(posts.length)
  return (
    <section className='container'>
      <hr className='mb-10 border-color-primary-light dark:border-color-primary-dark' />
      <div className='grid grid-cols-1 gap-5 xl:grid-cols-2'>
        {posts.map((post) => {
          return (
            <div key={post._id} className='group relative cursor-pointer'>
              <div className='relative w-full overflow-hidden pt-[56.25%]'>
                <Image
                  className='duration-700 group-hover:scale-110'
                  alt={post.title}
                  title={post.title}
                  src={urlFor(post.mainImage).url()}
                  fill
                />
              </div>
              <div className='absolute bottom-0 flex w-full justify-between rounded bg-black bg-opacity-20 p-5 text-14 text-white drop-shadow-lg backdrop-blur-lg md:text-16'>
                <div className='space-y-2'>
                  <h3 className='font-bold'>{post.title}</h3>
                  <p>
                    {new Date(post._createdAt).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                </div>
                <div>Tag here</div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
