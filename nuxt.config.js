
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
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
    { src: 'mavon-editor/dist/css/index.css' },
    { src: 'github-markdown-css/github-markdown.css' }
    
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/vue-markdown.js', ssr: false },
    { src: '~plugins/highlight.js'}
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/markdownit',
  ],
  markdownit: {
     injected: true
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
