<template>
    <nav class="navbar is-fixed-top is-transparent" role="navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <h1 class="title">John Lewis</h1>
            </a>
            <span class="navbar-burger" data-target="navbar-menu" v-on:click="toggle" >
                <span></span>
                <span></span>
                <span></span>
            </span>
        </div>

        <div id="navbar-menu" class="navbar-menu" :class="{ 'is-active': isActive }">
            <div class="navbar-end">
                <nuxt-link to= "/" class="navbar-item is-active">
                    Home
                </nuxt-link>
                <nuxt-link to="/resume" class="navbar-item">
                    Resume
                </nuxt-link>
                <nuxt-link to="/blog" class="navbar-item">
                    Blog
                </nuxt-link>
                <div class="navbar-item has-dropdown is-hoverable">
                    <span class="navbar-link">Find me on...</span>
                    <div class="navbar-dropdown">
                        <a href="https://github.com/jflewis" class="navbar-item">
                            <i class="fa fa-github fa-2"></i>
                        </a>
                        <a href="https://gitlab.com/jflewis" class="navbar-item">
                            <i class="fa fa-gitlab fa-2"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/johnlewis93/" class="navbar-item">
                            <i class="fa fa-linkedin-square fa-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  data () {
    return { isActive: false }
  },
  methods: {
    toggle () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style>

</style>
