<template>
  <div id="site">
    <navbar></navbar>
    <nuxt id="site-content"/>
    <footer class="footer">
      <div class="container">
          <div class="content has-text-centered">
              <p>
                  Site built by me, John Lewis.
              </p>
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
<style lang="scss" scoped>
  #site {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  #site-content {
    flex: 1;
  }
</style>
