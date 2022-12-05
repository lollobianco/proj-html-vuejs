<template>
   <div>
      <span class="text">{{postObj.title}}</span>
      <div class="divider"></div>
   </div>
</template>

<script>
   export default {
      name: 'RecentPosts',
      props:{
         postObj: Object
      }
   }
</script>

<style lang="scss" scoped>
.text{
   color: #A0A0A0;
   font-size: 0.8rem;
}

.divider{
   border-bottom: 1px solid #4C5255;
   margin: 10px 0;
}
</style>