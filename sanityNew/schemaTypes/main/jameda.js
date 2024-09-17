export default {
  name: 'jameda',
  title: 'Jameda',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titel Review',
      type: 'string',
      description: 'The title of the review',
      validation: (Rule) =>
        Rule.required().min(5).max(100).warning('Title should be between 5 and 100 characters'),
    },
    {
      name: 'date',
      title: 'Datum Review',
      type: 'string',
      description: 'Name of the person who wrote the review',
      validation: (Rule) =>
        Rule.required().min(2).max(50).warning('Name should be between 2 and 50 characters'),
    },
    {
      name: 'text',
      title: 'Review Text',
      type: 'text',
      description: 'The main text of the review',
      validation: (Rule) =>
        Rule.required().min(10).warning('Review text should be at least 10 characters long'),
    },
  ],
}
