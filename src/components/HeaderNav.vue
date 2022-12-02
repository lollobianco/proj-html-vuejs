<template>
   <div>

      <div id="headerNav-container">

         <div id="logo-container">
            <img src="../assets/gym_logo_1x.png" alt="gym-logo">
         </div>

         <div>
            <ul>
               <li v-for="(element, index) in headerNavArray" :key="index">{{element.name}}</li>
            </ul>
         </div>

      </div>

   </div>
</template>

<script>
   export default {
      name: 'HeaderNav',
      
      props:{

         headerNavArray: Array,

      }
   }
</script>

<style lang="scss" scoped>
#headerNav-container{
   padding: 40px 75px;
   display: flex;
   justify-content: space-between;
   align-items: center;
}

ul{
   display: flex;
   align-items: center;
   color: white;

   li{
      list-style-type: none;
      margin: 0 13px;
      font-size: 0.8rem;
      font-weight: 500;
      cursor: pointer;
   }

}

</style>