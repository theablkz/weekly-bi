export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  server: {
    host: '0.0.0.0'
  },
  head: {
    title: 'Приобретайте недвижимость выгодно!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/s-logo.svg' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [{ src: '~/assets/style/main.scss', lang: 'scss' }],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/zoomImage'
  ],
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 500)
    })
  },
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/composition-api'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
      ['cookie-universal-nuxt', { alias: 'cookies' }],
    ['@nuxtjs/google-tag-manager', { id: 'GTM-TZNBPJX' }],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
