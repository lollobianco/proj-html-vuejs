<template>
   <div>

      <div class="text">{{daysObj.days}}</div>
      <div class="text hour">{{daysObj.hour}}</div>

   </div>
</template>

<script>
   export default {
      name: 'OpeningTimes',
      props:{
         daysObj: Object
      }
   }
</script>

<style lang="scss" scoped>
.text{
   color: #A0A0A0;
   font-size: 0.8rem;
}
.hour{
   margin-bottom: 10px;
   margin-top: 8px;
   color: #4C5255;
}

</style>