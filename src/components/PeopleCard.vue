<template>
   <div class="card">

      <div>
         <img :src="infosObject.image" alt="img">
      </div>

      <div>
         <p><i>{{infosObject.description}}</i></p>
         <span><b>{{infosObject.name}}</b></span>
      </div>
      
   </div>
</template>

<script>
   export default {
      name: 'PeopleCard',
      props:{
         infosObject: Object
      },
      data(){
         return{
            
         }
      }
   }
</script>

<style lang="scss" scoped>
.card{
   background-color: #1F2123;
   display: flex;
   width: calc(95%/2);
   color: #A6A6A6;
   padding: 20px;
   margin: 20px 0;
   text-align: left;

   p{
      margin-bottom: 20px;
      margin-left: 20px;
   }

   span{
      margin-left: 20px;
   }
}
</style>