const axios = require('axios');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Maownime | Portal Download Anime Subtitle Indo",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'JavaScript, rails and other engineering related blogs by Viral' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Inconsolata:400,700' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Generates static files for the dynamic pages
  */
  generate: {
    routes () {
      return axios.get('https://meownime.com/wp-json/wp/v2/posts')
        .then((res) => {
          var rts = []
          res.data.forEach((d) => {
            rts.push('/blog/' + d.id)
          })
          return rts
        })
    }
  },
  plugins: [
    { src: '~plugins/ga.js', ssr: false },
    { src: '~plugins/typeform.js', ssr: false }
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

