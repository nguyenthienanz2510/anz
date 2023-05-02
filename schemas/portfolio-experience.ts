import { defineType } from 'sanity'

export default defineType({
  name: 'portfolio-experience',
  title: 'Portfolio Experience',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string'
    },
    {
      name: 'companyImage',
      title: 'Company Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string'
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text'
    },
    {
      name: 'dateStarted',
      title: 'Date Started',
      type: 'date'
    },
    {
      name: 'dateEnded',
      title: 'date ended',
      type: 'date'
    },
    {
      name: 'isCurrentWorkingHere',
      title: 'Is Current Working Here',
      type: 'boolean'
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'portfolio-skills' } }]
    },
    {
      title: 'description',
      name: 'description',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
})
