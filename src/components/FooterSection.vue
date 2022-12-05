<template>
   <div>

      <!-- Red section -->

      <div class="red-parallax">

         <div class="red-section">

            <div>

               <h1>Achieve Your Fitness Goals</h1>
   
               <span> <b>Flexible membership packages to suit all levels of athlete and achive your fitness goals</b> </span>

            </div>

            <button class="button-red-section">JOIN US</button>

         </div>

      </div>

      <!-- Footer 1 -->

      <div class="footer-1">

         <div class="footer1-container">

            <div class="section">

               <span class="title">COME FIND US</span>

               <ComeFindUs v-for="(element, index) in comeFindUs" :key="index" :findUsObj="element" />

            </div>
            
            <div class="section">

               <span class="title">RECENT POSTS</span>

               <RecentPosts v-for="(element, index) in recentPosts" :key="index" :postObj="element" />

            </div>

            <div class="section">

               <span class="title">OPENING TIMES</span>

               <OpeningTimes v-for="(element, index) in openingTimes" :key="index" :daysObj="element" />

            </div>

            <div class="section">

               <img src="../assets/gym_ad-compressor.jpg" alt="">

            </div>


         </div>

      </div>

      <!-- Footer 2 -->

      <div class="footer-2">

         <div class="footer2-container">

            <div class="ul-container">
               <ul class="footer-ul">
                  <li><a href="#">© Copyright 2012 - 2022</a></li>
                  <li>|</li>
                  <li><a href="#">Avada Theme by Lorenzo Bianconi</a></li>
                  <li> | </li>
                  <li><a href="#">All Rights Reserved</a></li>
                  <li> | </li>
                  <li><a href="#">Powered by Lorenzo Bianconi</a></li>
               </ul>
            </div>

            <div>
               <div class="social-container">

                  <div class="logo-container"><font-awesome-icon icon="fa-brands fa-facebook-f" /></div>
                  <div class="logo-container"><font-awesome-icon icon="fa-brands fa-twitter" /></div>
                  <div class="logo-container"><font-awesome-icon icon="fa-brands fa-instagram" /></div>

               </div>
            </div>

         </div>

      </div>

   </div>
</template>

<script>
import ComeFindUs from './ComeFindUs.vue'
import RecentPosts from './RecentPosts.vue'
import OpeningTimes from './OpeningTimes.vue'

   export default {
      name: 'FooterSection',
      components:{
         ComeFindUs,
         RecentPosts,
         OpeningTimes
      },

      data(){
         return{
            comeFindUs: [
               {
                  info: '12345 North Main Street',
               },
               {
                  info: 'New York, NY 555555',
               },
               {
                  info: 'Phone: 1.800.555.6789',
               },
               {
                  info: 'Mail: loreb2002@gmail.com'
               }
            ],

            recentPosts: [
               {
                  title: 'Train with free weights or your body weight?',
               },
               {
                  title: 'Nutritional advice that will keep you training'
               }
            ], 

            openingTimes: [
               {
                  days: 'Weekdays Monday - Friday',
                  hour: '09:00 - 19:00',
               },
               {
                  days: 'Weekends Saturday - Sunday',
                  hour: '09:00 - 21:00'
               }
            ],
            
            
         }

      }
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

.footer-1{
   background-color: #1F2123;
   padding: 80px 0;
}

.footer1-container{
   width: 70%;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
}


.title{
   margin-bottom: 20px;
   display: block;
   color: #687277;
   font-size: 0.9rem;
}

.section{
   width: calc(100%/4);
   padding: 20px;
}
.footer-2{
   background-color: #1A1C1E;
   padding: 30px 0;
}

.footer2-container{
   width: 65%;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
}

.ul-container{
   display: flex;
   align-items: center;
}
.footer-ul{
   display: flex;
   align-items: center;
   li{
      list-style-type: none;
      color: #A0A0A0;
      font-size: 0.7rem;
      margin: 0 5px;
      a{
         text-decoration: none;
         color: #A0A0A0;
         font-size: 0.7rem;
      }
   }
}

.social-container{
   display: flex;
}

.logo-container{
   font-size: 1.3rem;
   width: 45px;
   height: 45px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 10px;
   background-color: #EE6059;
   border-radius: 3px;
   cursor: pointer;
   transition: 300ms;
   color: white;
}

.logo-container:hover{
   color: #F4635B;
   background-color: #fff;
   scale: 1.2;
   box-shadow: 0 0 5px white;
}

</style>