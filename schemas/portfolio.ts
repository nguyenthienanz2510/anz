import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'aboutMeImage',
      title: 'aboutMeImage',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'slogan',
      title: 'Slogan',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'backgroundInformation',
      title: 'Background Information',
      type: 'text'
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string'
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'portfolio-socials' } }]
    }
  ]
})
