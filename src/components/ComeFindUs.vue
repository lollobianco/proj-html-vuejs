<template>
   <div>

      <span class="text">{{findUsObj.info}}</span>

   </div>
</template>

<script>
   export default {
      name: 'ComeFindUs',
      props:{
         findUsObj: Object
      }
   }
</script>

<style lang="scss" scoped>
.text{
   color: #A0A0A0;
   font-size: 0.8rem;
}
</style>