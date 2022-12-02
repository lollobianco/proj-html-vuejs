<template>
   <div>

      <div id="headerNav-container">

         <div id="logo-container">
            <img src="../assets/gym_logo_1x.png" alt="gym-logo">
         </div>

         <div>
            <ul>
               <li v-for="(element, index) in headerNavArray" :key="index">
                  <a v-if="(element.active == true)" class="activeted" :href="element.link">{{element.name}}</a>
                  <a v-else class="non-active" :href="element.link">{{element.name}}</a>
               </li>
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
   margin-bottom: 90px;
}

.activeted{
   color: #F4635B;
   text-decoration: none;
}

.non-active{
   color: white;
   text-decoration: none;
}

ul{
   display: flex;
   align-items: center;

   li{
      list-style-type: none;
      margin: 0 13px;
      font-size: 0.8rem;
      font-weight: 500;
      cursor: pointer;
      
      a{
         text-decoration: none;
      }

      a:hover{
         text-decoration: underline;
         text-decoration-color: #F4635B;
      }
   
   }

}

</style>