import { ComposeIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const landingPageType = defineType({
  name: 'landingPage',
  title: 'Landing page',
  type: 'document',
  icon: ComposeIcon,
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
      name: 'description',
      title: 'Summary',
      type: 'text',
      rows: 4,
      description: 'Lead paragraph under the title (shown in the hero and for SEO).',
    }),
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      initialValue: 'Case study',
      description: 'Small label above the headline (e.g. Case study, Guide).',
    }),
    defineField({
      name: 'clientLogo',
      title: 'Client / partner logo',
      type: 'image',
      description: 'Optional logo in the hero (e.g. customer mark).',
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
      name: 'mainImage',
      title: 'Hero image',
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
      name: 'stats',
      title: 'Key metrics',
      type: 'array',
      description: 'Highlight figures (e.g. 3–4x, 50%). Up to four cards in a row.',
      of: [
        {
          type: 'object',
          name: 'stat',
          fields: [
            defineField({
              name: 'value',
              title: 'Figure',
              type: 'string',
              validation: (Rule) => Rule.required(),
              description: 'e.g. 3–4x, 99.9%, £60bn+',
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
              description: 'Short caption under the figure.',
            }),
          ],
          preview: {
            select: { value: 'value', label: 'label' },
            prepare({ value, label }) {
              return { title: value || 'Stat', subtitle: label }
            },
          },
        },
      ],
      validation: (Rule) => Rule.max(4),
    }),
    defineField({
      name: 'featuredQuote',
      title: 'Featured quote',
      type: 'object',
      fields: [
        defineField({
          name: 'quote',
          title: 'Quote',
          type: 'text',
          rows: 5,
        }),
        defineField({
          name: 'attribution',
          title: 'Attribution',
          type: 'string',
          description: 'e.g. Name, role, company',
        }),
      ],
    }),
    defineField({
      name: 'productsUsed',
      title: 'Products used',
      type: 'array',
      description: 'Shown as pills under the story (like modulrfinance.com case studies).',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'Pay ins', value: 'Pay ins' },
              { title: 'Pay outs', value: 'Pay outs' },
              { title: 'Integrations', value: 'Integrations' },
              { title: 'Cards', value: 'Cards' },
              { title: 'Accounts', value: 'Accounts' },
              { title: 'Accounts payable', value: 'Accounts payable' },
            ],
            layout: 'dropdown',
          },
        },
      ],
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA button label',
      type: 'string',
      description: 'Optional call-to-action under the story.',
    }),
    defineField({
      name: 'ctaUrl',
      title: 'CTA link',
      type: 'url',
      description: 'Destination for the CTA (https://…).',
    }),
    defineField({
      name: 'body',
      title: 'Page content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
  preview: {
    select: { title: 'title', slug: 'slug.current' },
    prepare({ title, slug }) {
      return {
        title: title || 'Untitled',
        subtitle: slug ? `/p/${slug}` : 'Set a slug',
      }
    },
  },
})
