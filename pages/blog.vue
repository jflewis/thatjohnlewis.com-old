<template>
  <!-- Heder of blog page -->
  <div>
    <section class="section">
      <div class="container">
        <div class="content has-text-centered">
          <vue-markdown>{{ header.fields.header }}</vue-markdown>
        </div>
      </div>
    </section>

    <div class="container has-text-centered">
      <article class="jl-blogpost" v-for="post in posts" :key="post.fields.slug">
            <header class="title is-2">
              <nuxt-link class="jl-blog-link" :to="'posts/' + post.fields.slug">
                {{post.fields.title}}
              </nuxt-link>
            </header>
            <section class="subtitle is-4">
              {{post.fields.subTitle}}
            </section>
      </article>
    </div>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import VueMarkdown from 'vue-markdown'

const client = createClient()

export default {
  // `env` is available in the context object
  asyncData ({ env }) {
    return Promise.all([
      client.getEntry('1j6KL0KO1sAyqO0imi6iqO'),
      client.getEntries({
        'content_type': 'post',
        order: '-sys.createdAt'
      })
    ])
      .then(([header, posts]) => {
        return {
          header,
          posts: posts.items
        }
      })
      .catch(console.error)
  },
  components: {
    VueMarkdown
  }
}
</script>

<style lang="scss" scoped>
.jl-blogpost {
  margin-bottom: 1em;
}

.jl-blog-link {
  color: inherit;
}
</style>


