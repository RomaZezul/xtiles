export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'xtiles',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: "referrer", content: "strict-origin-when-cross-origin"
      }

    ],
    script: [
      {
        src: 'https://accounts.google.com/gsi/client',
      },
      {
        src: "https://cdn.quilljs.com/1.3.6/quill.js"
      }

    ],
    link: [
      {
        href: "//cdn.quilljs.com/1.3.6/quill.bubble.css",
        rel: "stylesheet"
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        as: 'style',
        rel: 'stylesheet preload prefetch',
        href: '/fonts/fonts.css',
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css',
    '@/assets/scss'
  ],
  styleResources: {
    scss: [
      './assets/scss/colors.scss',
      './assets/scss/size.scss',
      
    ]
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',

    '@nuxtjs/auth-next'

  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://localhost:44347',

    //baseURL: 'http://workspace.somee.com',
  },


  auth: {
    redirect: {
      login: '/user',
      logout: '/user',
      callback: false,
      home: '/personal'
    },

    strategies: {
      local1: {
        scheme: 'local', /* ... */
        token: {
          property: 'token',
          global: true,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: false,
          //autoFetch: false
        },
        endpoints: {
          login: { url: '/api/logingoogle', method: 'post' },
          logout: false, //{ url: '/api/auth/logout', method: 'post' },
          user: false// { url: '/api/account/username', method: 'get' }
        }

      },
      local2: {
        scheme: 'local', /* ... */
        token: {
          property: 'token',
          global: true,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: false,
          //autoFetch: false
        },
        endpoints: {
          login: { url: '/api/login', method: 'post' },
          logout: false, //{ url: '/api/auth/logout', method: 'post' },
          user: false// { url: '/api/account/username', method: 'get' }
        }
      }
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  router: {
    middleware: ['auth']
  }
}















