// https://nuxt.com/docs/api/configuration/nuxt-config

import MyPreset from './assets/theme.js'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-29',
  devtools: { enabled: false },

  app: {
    head: {
      title: 'DearestJack.com - Paging the Real Jack Ciattarelli', // default fallback title
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'msapplication-TileColor', content: '#0a84ff' },
        { name: 'theme-color', content: '#0a84ff' }
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ff3904' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        }
      ],
      // script: [
      //   { src: 'https://www.tiktok.com/embed.js' }
      // ]
    }
  },

  css: ['primeicons/primeicons.css', '~/assets/scss/main.scss'],

  modules: ['@primevue/nuxt-module', '@nuxtjs/tailwindcss'],

  imports: {
    global: true,
    presets: [
      {
        from: 'vue-router',
        imports: ['RouterLink']
      }
    ]
  },

  tailwindcss: {
    exposeConfig: true,
  },

  primevue: {
    options: {
      ripple: true,
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: ".dark-mode",
        }
      }
    }
  },

  runtimeConfig: {
    public: {
      environment: process.env.environment ?? 'local',
      gtagId: 'G-FVMBBHKXC5',
    }
  }
})