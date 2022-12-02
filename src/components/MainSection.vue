<template>
   <div>

      <!-- World class fitness -->

      <div class="bg-dark">
         
         <div class="container">

            <h1>WORLD CLASS Fitness</h1>
            <img src="../assets/divider-xx-red.png" alt="xx">
            <span>At Avada Gym, everything we do from top to bottom is of the highest quality to ensure we're equipped to help yuou reach your goals of a healty and fit lifestyle.</span>

         </div>

      </div>

      <!-- Free training section -->

      <div>

         <div class="bg-dark2">

            <div class="container2">

               <div class="bgimg">
                  <img class="free-training-img" src="../assets/home_img-compressor.jpg" alt="img">
               </div>

               <div class="form">

                  <h3>Sign Up For A Free Training Session!</h3>

                  <form action="" id="free-training-form">
                     <label for="fname">Name:</label><br>
                     <input type="text" id="fname" name="fname"><br>
                     <label for="mail">Email:</label><br>
                     <input type="email" id="mail" name="mail">
                     <button type="submit" onclick="return false">START NOW!</button>
                  </form>
                  
               </div>

            </div>

         </div>

         <div class="img-bg">

            <div>
               <TrialCard/>
            </div>

         </div>

      </div>

   </div>
</template>

<script>
   export default {
      name: 'MainSection',

      data(){

         return{

            iconsAndText: [
               {
                  icon: 'fa-solid fa-link-slash',
                  title: 'Strenght & Conditioning',
                  description: ''
               },
               {
                  icon: 'fa-solid fa-bicycle',
                  title: 'Fitness & Cardio',
                  description: ''
               },
               {
                  icon: 'fa-brands fa-skyatlas',
                  title: 'Flexibility & Rest',
                  description: ''
               },
               {
                  icon: 'fa-solid fa-heart-pulse',
                  title: 'Health & Diet',
                  description: ''
               },
            ]

         }

      }
      
   }
</script>

<style lang="scss" scoped>
.bg-dark{
   background-color: #25292B;
}

.bg-dark2{
   background-color: #1F2123;
}

.bgimg{
   width: 48%;
}

.container{
   width: 50%;
   margin: 0 auto;
   padding: 90px 0;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   color: white;

   img{
      margin: 30px 0;
   }

   span{
      color: #AAA9A9;
      line-height: 25px;
   }
}

.container2{
   width: 60%;
   margin: 0 auto;
   padding: 90px 0;
   display: flex;
   justify-content: space-between;
}

.free-training-img{
   width: 100%;
}

.form{
   color: white;
   width: 48%;
   h3{
      margin-bottom: 25px;
   }
}

#free-training-form{
   width: 100%;

   label{
      font-size: 0.8rem;
      color: #AAA9A9;
   }

   input{
      width: 100%;
      margin: 5px 0 20px 0;
      height: 35px;
      background-color: #212325;
      border: 1px solid #3E4346;
   }

   button{
      margin-top: 12px;
      width: 100%;
      padding: 12px 0;
      background-color: #EE6059;
      border: none;
      color: white;
      font-weight: 600;
      cursor: pointer;
      transition: 0.5s;
   }

   button:hover{
      background-color: rgb(218, 218, 218);
      color: #212325;
   }
}

</style>