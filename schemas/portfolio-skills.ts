import { defineType, validation } from 'sanity'

export default defineType({
  name: 'portfolio-skills',
  title: 'Portfolio Skills',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'string'
    },
    {
      name: 'progress',
      title: 'Progress',
      type: 'number',
      description: 'Progress of skill from 0 to 100%',
      validation: (Rule) => Rule.min(0).max(100)
    },
    {
      name: 'detail',
      title: 'Detail',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number'
    }
  ]
})
