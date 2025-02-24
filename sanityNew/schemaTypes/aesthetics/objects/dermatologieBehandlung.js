import {FaRegImage} from 'react-icons/fa'

export default {
  name: 'dermatologieBehandlung',
  type: 'object',
  title: 'Dermatologie Behandlung',
  icon: FaRegImage,
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
    {
      title: 'Titel',
      name: 'title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title', // Automatically generate slug from title
        maxLength: 96, // Limit length
      },
      description: "Click 'Generate' to create a slug based on the title.",
      validation: (Rule) => Rule.required(), // Make sure slug is filled
    },
    {
      title: 'Text',
      name: 'text',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'image',
      title: 'Bild',
      type: 'image',
      fields: [
        {
          title: 'Alt Text',
          name: 'alt',
          type: 'string',
        },
      ],
    },
    {
      title: 'Full Description',
      name: 'fullDescription',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
