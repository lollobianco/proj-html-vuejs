<template>
  <div id="app">
    
    <HeaderSection/>

  </div>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue'

export default {
  name: 'App',
  components: {
    HeaderSection
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
