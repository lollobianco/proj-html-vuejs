<template>

   <div class="card">

      <div class="icon">
         <font-awesome-icon :icon="infosObject.icon"/>
      </div>
      
      <span>{{infosObject.title}}</span>

      <img class="x-divider" src="../assets/divider-x-red.png" alt="x">

      <p>{{infosObject.description}}</p>

   </div>

</template>

<script>
   export default {
      name: 'TrialCard',
      props:{
         infosObject: Object
      }
   }
</script>

<style lang="scss" scoped>

.card{

   display: flex;
   flex-direction: column;
   text-align: center;
   align-items: center;
   justify-content: center;
   width: calc(90%/4);
   color: white;
   p{
      color: #AAA9A9;
      font-size: 0.9rem;
   }
}

.icon{
   height: 80px;
   width: 80px;
   border: 1px solid #EE6059;
   border-radius: 50%;
   font-size: 2.5rem;
   color: #EE6059;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-bottom: 20px;
   cursor: pointer;
   transition: 300ms;
}

.icon:hover{
   scale: 1.2;
}

.x-divider{
   margin: 20px 0;
}
</style>