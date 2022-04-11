<template>
  <div>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <h1 class="title is-spaced">
                  <text-typer v-bind:titles="['Software Developer', 'Maker', 'Data Driven', 'Software Guru', 'Buzz Word Aficionado']"></text-typer>
                </h1>
                <h2 class="subtitle">
                    <img class="picture" src="/images/profile.JPG" alt="Portrait" />
                </h2>
            </div>
        </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="content">
          <h1 class="title">Who Am I?</h1>
          <p>
              Software developer @ <a href="https://h1.co">H1.co</a>
          </p>
          <p>
              I graduated from Millersville University of Pennsylvania in 2015 with a degree in Computer Science.
              Since then I have done a multitude of exciting things including building large scale e-commerece APIs, consulting for international pharmaceutical companies, and restructuring
              large systems for cloud platforms (DevOps).
          </p>
          <p>
              Making bad software great software since 2015
          </p>
            </div>
      </div>
    </section>

     <!-- what -->
     <!-- what I've done/doing -->
    <section class="section">
        <div class="container">
            <div class="content">
                <h1 class="title">What I do</h1>
                <p>
                  I have extensive experience developing and maintaining medium to large size Node.js, Rails, and Java projects.
                </p>
                <p>
                   I currently enjoy working on and playing with data driven applications, self improvment, Internet privacy, virtual reality, cooking and my awesome family.
                </p>
                <p>
                    I believe in following best practices. Unit and functional testing, TDD, code reviews, and CI/CD to name a few. The stubbern may believe this slows down time to deliverable but I believe, in the end,
                    following these best practices leads to a better end product that users will love. These practices also make the developers job easier which leads to happier developers.
                </p>
                <p>Happy developers ❤️❤️ Better code.</p>
            </div>
        </div>
    </section>

    <!-- how -->
    <!-- how to reach me -->
    <section class="section">
        <div class="container">
            <div class="content">
                <h1 class="title">Contact Me</h1>
                <p>Feel free to reach out to me at <a href="mailto:lewisjnerd@gmail.com">lewisjnerd@gmail.com</a> or using any of the sites above.
                </p>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import TextTyper from '~/components/TextTyper.vue'

export default {
  components: {
    TextTyper
  }
}
</script>

<style lang="scss" scoped>

</style>
