<template>
  <div id="app">
    
    <HeaderSection/>
    <MainSection/>
    <FooterSection/>

  </div>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue'
import MainSection from './components/MainSection.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    HeaderSection,
    MainSection,
    FooterSection
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

body::-webkit-scrollbar {
   width: 5px;
}
 
body::-webkit-scrollbar-thumb {
  background-color: #EE6059;    
  border-radius: 50px;       
}

body{
  overflow: overlay;
}
</style>
