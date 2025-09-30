const titleProject = 'Nusapay'
const descriptionProject = 'Fast, low-cost, and secure Web3 payments platform for Indonesia. Join the DeFi revolution.'
const thumbnailProject = '/thumbnail.png'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxt/eslint'
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      titleTemplate: `%s - ${titleProject}`,

      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        {
          name: 'robots',
          content: 'index, follow'
        },
        {
          name: 'description',
          content: descriptionProject,
        },
        {
          name: 'keywords',
          content:
            'Nusapay,Nusa pay,NusaPay,Nusapay Indonesia,Nusapay Web3 payments,DeFi Indonesia,cryptocurrency payments,blockchain payments,crypto wallet,Nusapay platform,Web3 technology,secure payments,low-cost transactions,fast payments,Indonesia crypto,Nusapay app,Nusapay features,Nusapay benefits',
        },
        {
          name: 'author',
          content: titleProject,
        },

        // Open Graph Meta
        {
          property: 'og:title',
          content: titleProject,
        },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:url',
          content: 'https://nusapay.com',
        },
        { property: 'og:image', content: thumbnailProject },
        { property: 'og:description', content: descriptionProject },
        {
          property: 'og:site_name',
          content: titleProject,
        },
        // Twitter Meta
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content: titleProject,
        },
        { name: 'twitter:description', content: descriptionProject },
        { name: 'twitter:image', content: thumbnailProject },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },
})