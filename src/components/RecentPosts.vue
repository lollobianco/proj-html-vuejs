<template>
   <div class="recent-post">
      <div>
         <font-awesome-icon icon="fa-solid fa-angle-down" class="angle"/>
      </div>
      <div>
         <span class="text">{{postObj.title}}</span>
         <div class="divider"></div>
      </div>
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
   transition: 300ms;
}

.divider{
   border-bottom: 1px solid #4C5255;
   margin: 10px 0;
}

.angle{
   color: #A0A0A0;
   font-size: 0.8rem;
   margin-right: 5px;
   transition: 300ms;
   transform: rotate(-90deg);
}

.recent-post{
   cursor: pointer;
   display: flex;
   margin-top: 10px;
}

.recent-post:hover .angle{
   scale: 1.1;
   transform: rotate(0deg);
   color: #F4635B;
}

</style>