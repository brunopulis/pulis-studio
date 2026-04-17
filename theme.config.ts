import { defineThemeConfig } from '@utils/defineThemeConfig'
import previewImage from '@assets/images/social-preview-image.png'
import logoImage from '@assets/images/logo.svg'

export default defineThemeConfig({
  name: 'Bruno Pulis',
  id: 'bp',
  logo: logoImage,
  seo: {
    title: 'Bruno Pulis',
    description: 'Engenheiro de acessibilidade digital',
    author: 'Bruno Pulis',
    image: previewImage, // Can also be a string e.g. '/social-preview-image.png',
  },
  colors: {
    primary: '#610404',
    secondary: '#849cdb',
    neutral: '#171e1e',
    outline: '#d9d9d9',
  },
  navigation: {
    darkmode: false,
    items: [
      {
        type: 'link',
        label: 'Serviços',
        href: '/servicos',
      },
      {
        type: 'link',
        label: 'Sobre',
        href: '/sobre',
      },
      {
        type: 'link',
        label: 'Portfolio',
        href: '/portfolio',
      },
      {
        type: 'link',
        label: 'Palestras',
        href: '/palestras',
      },
      {
        label: 'Features',
        type: 'dropdown',
        items: [
          {
            label: 'Accessibility statement',
            href: '/accessibility-statement',
          },
          {
            label: 'Accessible components',
            href: '/accessible-components',
          },
          {
            label: 'Accessible launcher',
            href: '/accessible-launcher',
          },
          {
            label: 'Color contrast checker',
            href: '/color-contrast-checker',
          },
          {
            label: 'Markdown page',
            href: '/markdown-page',
          },
          {
            label: 'MDX page',
            href: '/mdx-page',
          },
          {
            label: '404 page',
            href: '/404',
          },
          {
            label: 'Sitemap',
            href: '/sitemap',
          },
        ],
      },
      {
        type: 'link',
        label: 'Contato',
        href: '/contato',
      },
    ],
  },
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/brunopulis/',
      icon: 'lucide:github',
    },
    {
      label: 'Bluesky',
      href: 'https://bsky.app/profile/brunopulis.com',
      icon: 'lucide:bot-message-square',
    },
    {
      label: 'Open Collective',
      href: 'https://opencollective.com/incluud',
      icon: 'lucide:hand-heart',
    },
  ],
})
