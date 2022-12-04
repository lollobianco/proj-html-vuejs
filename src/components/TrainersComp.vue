<template>

   <div class="trainerCardContainer">

      <div class="trainerCard">

         <img :src="`./img/${trainerObj.image}`" alt="">         

         <div class="text">

            <div class="nameRole">{{trainerObj.name}}</div>
            
            <div class="nameRole">{{trainerObj.role}}</div>

            <div class="description">{{trainerObj.description}}</div>

            <div class="social-container">

               <div class="logo-container"><font-awesome-icon icon="fa-brands fa-facebook-f" /></div>
               <div class="logo-container"><font-awesome-icon icon="fa-brands fa-twitter" /></div>
               <div class="logo-container"><font-awesome-icon icon="fa-brands fa-instagram" /></div>

            </div>

         </div> 
         
      </div>

   </div>

</template>

<script>
   export default {
      name: 'TrainersComp',
      
      props:{
         trainerObj: Object
      }

   }
</script>

<style lang="scss" scoped>

.text{
   text-align: left;
   color: white;
   padding: 35px 40px;
}

.nameRole{
   font-weight: bold;
   font-size: 1rem;
}

.description{
   margin-top: 40px;
   line-height: 30px;
   font-size: 0.9rem;
   color: #A8A8A8;
}

.trainerCardContainer{
   width: calc(100%/3);
   padding: 10px;
}

.trainerCard{
   background-color: #25292B;
}

img:hover{
   scale: 1.05;
   box-shadow: 0 0 10px #FFF;
}

img{
   width: 100%;
   transition: 300ms;
   cursor: pointer;
}

.social-container{
   display: flex;
   margin-top: 40px;
}

.logo-container{
   font-size: 1.3rem;
   width: 45px;
   height: 45px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 10px;
   background-color: #1F2123;
   border-radius: 3px;
   cursor: pointer;
   transition: 300ms;
}

.logo-container:hover{
   color: #F4635B;
   scale: 1.2;
   box-shadow: 0 0 5px #25292B;
}
</style>