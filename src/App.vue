<template>
  <div id="app">
    
    <HeaderSection/>
    <MainSection/>

  </div>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue'
import MainSection from './components/MainSection.vue'

export default {
  name: 'App',
  components: {
    HeaderSection,
    MainSection
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
