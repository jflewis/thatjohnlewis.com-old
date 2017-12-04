<template>
  <div>
    <span id="text-typer"></span>{{typing}}<span id="cursor">_</span>
  </div>
</template>

<script>
export default {
  props: ['titles'],

  data () {
    return {
      myTitles: this.titles,
      typing: this.titles[0]
    }
  },
  mounted () {
    let titlesIndex = 1

    const deleteWord = () => {
      this.deleteInterval = setInterval(() => {
        this.typing = this.typing.substring(
          0,
          this.typing.length - 1
        )

        if (!this.typing) {
          clearInterval(this.deleteInterval)
          writeWord()
        }
      }, 80)
    }

    const writeWord = () => {
      if (titlesIndex >= this.myTitles.length) {
        titlesIndex = 0
      }

      let newWord = this.myTitles[titlesIndex]
      let newWordIndex = 0
      this.writeInterval = setInterval(() => {
        if (newWord === this.typing) {
          ++titlesIndex
          clearInterval(this.writeInterval)
          setTimeout(deleteWord, 3000)
          return
        }
        this.typing += newWord[newWordIndex]
        ++newWordIndex
      }, 100)
    }

    setTimeout(deleteWord, 2000)
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
