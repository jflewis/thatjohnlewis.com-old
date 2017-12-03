<template>
  <div>
    <navbar></navbar>
    <nuxt/>
    <footer class="footer">
      <div class="container">
          <div class="content has-text-centered">
              <p>
                  Site built by me, John Lewis, using the following projects...
              </p>
              <a href="https://bulma.io">
                  <img src="https://bulma.io/images/made-with-bulma--semiblack.png" alt="Made with Bulma" width="128" height="24">
              </a>
          </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import Navbar from '~/components/Header.vue'

  export default {
    components: {
      Navbar
    }
  }
</script>
<style>
</style>
