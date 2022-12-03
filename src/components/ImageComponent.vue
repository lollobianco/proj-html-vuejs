<template>
   <div>
      <img class="w-100" :src="imgUrls.url" alt="">
   </div>
</template>

<script>
   export default {
      name: 'ImageComponent',
      props:{
         imgUrls: Object
      }
   }
</script>

<style lang="scss" scoped>
.w-100{
   width: 100%;
}
</style>