<template>
  <div>
    <span id="text-typer"></span>{{type}}<span id="cursor">_</span>
  </div>
</template>

<script>
export default {
  props: ['titles'],

  data () {
    return {
      myTitles: this.titles
    }
  },
  computed: {
    type () {
      if (typeof document !== 'undefined') {
        let titlesIndex = 0

        const deleteWord = () => {
          this.deleteInterval = setInterval(() => {
            const element = document.querySelector('#text-typer')
            element.textContent = element.textContent.substring(
              0,
              element.textContent.length - 1
            )

            if (!element.textContent) {
              clearInterval(this.deleteInterval)
              writeWord(element)
            }
          }, 80)
        }

        const writeWord = element => {
          if (titlesIndex >= this.myTitles.length) {
            titlesIndex = 0
          }

          let newWord = this.myTitles[titlesIndex]
          let newWordIndex = 0
          this.writeInterval = setInterval(() => {
            if (!element) {
              // todo: come back and fix this
              // If used in a SPA this breaks when a second component
              clearInterval(this)
              return
            }

            if (newWord === element.textContent) {
              ++titlesIndex
              clearInterval(this.writeInterval)
              setTimeout(deleteWord, 3000)
              return
            }
            element.textContent += newWord[newWordIndex]
            ++newWordIndex
          }, 100)
        }

        deleteWord()
      }
    }
  },
  mounted () {
    const element = document.querySelector('#text-typer')
    element.textContent = ''
  },

  beforeDestroy () {
    if (this.deleteInterval) {
      clearInterval(this.deleteInterval)
    }

    if (this.writeInterval) {
      clearInterval(this.writeInterval)
    }
  }
}
</script>

<style lang="scss" scoped>
#cursor {
  animation: blinker 1s step-end infinite
}

@keyframes blinker {
  50% {
    opacity: 0
  }
}
</style>
