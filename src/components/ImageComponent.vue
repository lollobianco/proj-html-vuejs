<template>
   <div class="img-container">
      <img :src="`./img/${imgUrls.url}`" alt="">
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
.img-container{
   margin: 15px 20px;
   cursor: pointer;

   img{
      transition: 200ms;
   }

   img:hover{
      scale: 1.05;
      -webkit-box-shadow: 0px 2px 12px 3px #000000; 
      box-shadow: 0px 2px 12px 3px #000000;
   }

}
</style>