const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  base: '/pinetree-mobile/'
} : {}
const publicPath = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  publicPath: 'js'
} : {}
const baseUrl = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  base: {
    href: "https://kooco-co.github.io/pinetree-mobile/"
  }
} : {}

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    ...baseUrl,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/modernizr-plugin',
    '@/plugins/element-ui',
    '@/plugins/i18n',
    // '@/plugins/detectizr'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    ...publicPath
  },
  router: {
    ...routerBase
  }
  

}
