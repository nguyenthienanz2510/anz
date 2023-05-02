import { defineType } from 'sanity'

export default defineType({
  name: 'portfolio-projects',
  title: 'Portfolio Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'projectImage',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text'
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'portfolio-skills' } }]
    },
    {
      title: 'detail',
      name: 'detail',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'linkSource',
      title: 'Link Source',
      type: 'url'
    },
    {
      name: 'linkToBuild',
      title: 'Link To Build',
      type: 'url'
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number'
    }
  ]
})
