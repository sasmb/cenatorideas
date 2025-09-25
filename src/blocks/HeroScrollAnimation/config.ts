import type { Block } from 'payload'

export const HeroScrollAnimationBlock: Block = {
  slug: 'heroScrollAnimation',
  labels: {
    singular: 'Hero Scroll Animation',
    plural: 'Hero Scroll Animations',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Block Title',
      admin: {
        description: 'Optional title for this block in the admin interface',
      },
    },
  ],
}
