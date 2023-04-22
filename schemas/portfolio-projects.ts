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
      type: 'string'
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'portfolio-skills' } }]
    },
    {
      name: 'linkToBuild',
      title: 'Link To Build',
      type: 'url'
    }
  ]
})
