import { fileURLToPath } from 'node:url'

const defaultAppBaseURL = process.env.NODE_ENV === 'development' ? '/' : '/seletkov-test/'
const appBaseURL = process.env.NUXT_APP_BASE_URL || defaultAppBaseURL
const withAppBase = (path: string) => `${appBaseURL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`
const appManifestMockPath = fileURLToPath(new URL('./node_modules/unenv/dist/runtime/mock/empty.mjs', import.meta.url))

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  nitro: {
    prerender: {
      routes: ['/404']
    }
  },
  hooks: {
    'vite:extendConfig'(config, { isClient }) {
      if (!isClient) {
        return
      }

      config.resolve ||= {}
      config.resolve.alias ||= {}

      if (Array.isArray(config.resolve.alias)) {
        config.resolve.alias.push({ find: '#app-manifest', replacement: appManifestMockPath })
      } else {
        config.resolve.alias['#app-manifest'] = appManifestMockPath
      }
    }
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  css: ['~/assets/styles/main.css'],
  app: {
    baseURL: appBaseURL,
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Методология диссертационного исследования',
      meta: [
        {
          name: 'theme-color',
          content: '#0F223B'
        },
        {
          name: 'description',
          content:
            'Курс Сергея Григорьевича Селеткова по методологии диссертационного исследования, подготовке диссертации и учебным материалам для магистрантов, аспирантов и докторантов.'
        },
        {
          name: 'keywords',
          content:
            'методология диссертационного исследования, Селетков Сергей Григорьевич, диссертация, аспирантам, докторантам, учебные материалы'
        },
        {
          name: 'author',
          content: 'Селетков Сергей Григорьевич'
        },
        {
          name: 'robots',
          content: 'index, follow'
        },
        {
          property: 'og:site_name',
          content: 'Методология диссертационного исследования'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:locale',
          content: 'ru_RU'
        },
        {
          property: 'og:title',
          content: 'Методология диссертационного исследования'
        },
        {
          property: 'og:description',
          content:
            'Курс и учебные материалы Сергея Григорьевича Селеткова по методологии диссертационного исследования.'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: withAppBase('/images/logo-header.svg')
        },
        {
          rel: 'shortcut icon',
          type: 'image/svg+xml',
          href: withAppBase('/images/logo-header.svg')
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;600;700&family=Montserrat:wght@600;700&display=swap'
        }
      ]
    }
  },
  typescript: {
    strict: true
  }
})
