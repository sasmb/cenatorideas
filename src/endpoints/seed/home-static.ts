import type { RequiredDataFromCollectionSlug } from 'payload'

// Used for pre-seeded content so that the homepage is not empty
export const homeStatic: RequiredDataFromCollectionSlug<'pages'> = {
  slug: 'home',
  _status: 'published',
  hero: {
    type: 'none',
  },
  meta: {
    description: 'Welcome to Cenetor Ideas - Creative solutions and innovative ideas.',
    title: 'Cenetor Ideas',
  },
  title: 'Home',
  layout: [
    {
      blockType: 'heroScrollAnimation',
      title: 'Hero Scroll Animation Section',
    },
  ],
}
