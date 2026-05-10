import { DocumentTextIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'resourceSection',
      title: 'Resource section',
      description:
        'Controls which Resource Centre page lists this item. Required for new content.',
      type: 'string',
      initialValue: 'blog',
      options: {
        list: [
          { title: 'Blog', value: 'blog' },
          { title: 'Insights & articles', value: 'insights' },
          { title: 'Whitepapers', value: 'whitepapers' },
          { title: 'Customer stories', value: 'customer-stories' },
          { title: 'Videos', value: 'videos' },
          { title: 'Newsroom', value: 'newsroom' },
          { title: 'Product updates', value: 'product-updates' },
          { title: 'Glossary', value: 'glossary' },
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'verticals',
      title: 'Vertical tags',
      description: 'Optional filters (Lending, Travel, etc.)',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'Lending', value: 'lending' },
              { title: 'Travel', value: 'travel' },
              { title: 'ECE', value: 'ece' },
              { title: 'SME / Business', value: 'sme' },
              { title: 'Accountants', value: 'accountants' },
              { title: 'Brand', value: 'brand' },
            ],
            layout: 'dropdown',
          },
        },
      ],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      rows: 3,
      description: 'Short summary shown on the post list.',
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt text',
        }),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
  preview: {
    select: { title: 'title', media: 'mainImage', section: 'resourceSection' },
    prepare({ title, media, section }) {
      return {
        title: title || 'Untitled',
        subtitle: section ? section.replace(/-/g, ' ') : undefined,
        media,
      }
    },
  },
})
