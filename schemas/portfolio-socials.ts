import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'portfolio-socials',
  title: 'Portfolio Socials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'platform for social media',
      type: 'string'
    },
    {
      name: 'url',
      title: 'Url',
      type: 'url'
    }
  ]
})
