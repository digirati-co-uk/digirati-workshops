import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Change this to workshop title',
  sidebar: [
     {
      text: 'What you need for the workshop',
      link: '/what-you-will-need',
    },
    {
      text: 'IIIF content to Explore',
      link: '/examples-of-iiif-to-explore',
    },
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Manifest Editor',
      link: '/manifest-editing',
    },
     {
      text: 'Exhibition building',
      link: '/exhibition-building',
    },
  ],
})
