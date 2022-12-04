<template>
   <div>

      <div class="red-parallax">

         <div class="red-section">

            <div>

               <h1>Achieve Your Fitness Goals</h1>
   
               <span> <b>Flexible membership packages to suit all levels of athlete and achive your fitness goals</b> </span>

            </div>

           

               <button class="button-red-section">JOIN US</button>

            
            

         </div>

      </div>

   </div>
</template>

<script>
   export default {
      name: 'FooterSection'
   }
</script>

<style lang="scss" scoped>

.red-parallax{
   background-image: url(../assets/home-parallax.jpg);
   background-repeat: no-repeat;
   background-position: center;
   background-attachment: fixed;
   background-size: cover;
   padding: 60px;
}

.red-section{
   width: 65%;
   margin: 0 auto;  
   text-align: left;
   color: white;
   display: flex;
   justify-content: space-between;
}

.button-red-section{
   align-self: center;
   padding: 10px 25px;
   background-color: rgba(0, 0, 0, 0);
   color: white;
   border: 1px solid #A8A8A7;
   cursor: pointer;
   transition: 0.5s;
}

.button-red-section:hover{
   background-color: #25292B;
   border-color: #25292B;
   box-shadow: 0 0 15px white;
   font-size: 0.9rem;
}
</style>