const contentfulConfig = require('./.contentful.json')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'John Lewis',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'John Lewis -- Developer' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '~assets/scss/main.scss'
  ],

  /* ** Customize the progress bar color
  */
  loading: {
    color: '#3B8070'
  },

  plugins: [
    '~/plugins/contentful'
  ],

  modules: [
    '@nuxtjs/font-awesome'
  ],

  env: {
    CTF_SPACE_ID: contentfulConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: contentfulConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: contentfulConfig.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: contentfulConfig.CTF_BLOG_POST_TYPE_ID
  },

  generate: {
    // Generate post pages dynamically from contentful.
    routes () {
      const { createClient } = require('./plugins/contentful.js')

      const client = createClient()
      return client.getEntries({
        'content_type': 'post',
        order: '-sys.createdAt'
      })
        .then((posts) => {
          return posts.items.map((post) => {
            return {
              route: `/posts/${post.fields.slug}`,
              payload: post
            }
          })
        })
        .catch(console.error)
    }
  },

  /*
  ** Build configuration
  */
  build: {

    vendor: [
      'contentful',
      '~/plugins/contentful.js'
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
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
