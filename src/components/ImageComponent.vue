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
   width: calc(90%/3);
   margin: 15px 15px;
   cursor: pointer;

   img{
      width: 100%;
      transition: 200ms;
      display: block;
   }

   img:hover{
      scale: 1.05;
      -webkit-box-shadow: 0px 2px 12px 3px #000000; 
      box-shadow: 0px 2px 12px 3px #000000;
   }

}
</style>