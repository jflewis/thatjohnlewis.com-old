const contentful = require('contentful')
const contentfulConfig = require('../.contentful.json')

// these will be set via `env` property in nuxt.config.js
// or use the config file if runnning nuxt generate
const config = {
  space: process.env.CTF_SPACE_ID || contentfulConfig.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN || contentfulConfig.CTF_CDA_ACCESS_TOKEN
}

// export `createClient` to use it in page components
module.exports = {
  createClient () {
    return contentful.createClient(config)
  }
}
