<template>
  <!-- main article -->
  <article class="container section">
    <header>
      <p class="title is-1">{{ post.fields.title }}</p>
      <p class="subtitle is-3">{{ post.fields.subTitle }}</p>
    </header>
    <section class="tags">
      <span class="tag is-rounded" v-for="(tag, index) in post.fields.tags" :key="`tag-${index}`">{{tag}}</span>
    </section>

    <!-- Body section -->
    <section class="jl-postbody">
      <article>
        <div class="content">
          <vue-markdown>{{post.fields.body}}</vue-markdown>
        </div>
      </article>
    </section>
    <!-- publish date -->
    <section class="has-text-centered section">
      <p>Published on - {{post.fields.publishDate}}</p>
    </section>
  </article>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import VueMarkdown from 'vue-markdown'

export default {
  asyncData ({ params, error, payload, env }) {
    if (payload) {
      return {
        post: payload
      }
    } else {
      const client = createClient()
      return client.getEntries({
        content_type: 'post',
        'fields.slug': params.slug
      })
        .then(({items: [post, ...rest]}) => {
          return { post }
        })
        .catch((error) => {
          console.log('something has gone wrong')
          error({ message: 'post not found', statusCode: 404 })
        })
    }
  },
  components: {
    VueMarkdown
  }
}
</script>

<style lang="scss" scoped>
.jl-postbody{
  margin-top: 1em;
}
</style>


