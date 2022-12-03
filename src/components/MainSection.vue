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
                     <input type="text" id="fname" name="fname" v-model="name" ><br>
                     <label for="mail">Email:</label><br>
                     <input type="email" id="mail" name="mail" v-model="mail" >
                     <button type="submit" onclick="return false" @click="send()" :class="clickedButton">{{buttonText}}</button>
                  </form>
                  
               </div>

            </div>

         </div>

         <div class="img-bg">

            <div class='bgimg2'>
               <div class="container3">

                  <TrialCard v-for="(element, index) in iconsAndText" :key="index" :infosObject="element"/>

               </div>
            </div>

         </div>

      </div>

      <!-- Real world results -->

      <div class="bg-dark real-results">

         <h1>REAL WORLD RESULTS</h1>

         <img src="../assets/divider-xx-red.png" alt="xx divider">

         <div class="people-container">
            <PeopleCard v-for="(element, index) in realWorldResultsData" :key="index" :infosObject="element"/>
         </div>

      </div>

      <!-- High performance Facilities -->

      <div class="bg-dark high-performance">

         <h1>HIGH PERFORMANCE FACILITIES</h1>

         <img src="../assets/divider-xx-red.png" alt="xx divider">

         <div class="images-container">

            <ImageComponent v-for="(element,index) in ImageComponentUrls" :key="index" :imgUrls="element"/>
            <!-- <img v-for="(element, index) in ImageComponentUrls" :key="index" :src="element" alt=""> -->

         </div>

      </div>

      <!-- Bruce Lee -->

      <div class="bgimg3">

         <div class="bruce-container">

            <h1>“ I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times ”</h1>

            <img src="../assets/divider-white-xx.png" alt="">

            <h2>BRUCE LEE • QUOTE OF THE DAY</h2>

         </div>

      </div>

   </div>
</template>

<script>
import TrialCard from './TrialCard'
import PeopleCard from './PeopleCard'
import ImageComponent from './ImageComponent.vue'

   export default {
      name: 'MainSection',

      components:{
         TrialCard,
         PeopleCard,
         ImageComponent
      },

      data(){

         return{

            name: '',
            mail: '',
            buttonText: 'START NOW!',
            registered: false,

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
            ],

            realWorldResultsData: [
               {
                  image: '../assets/review_1-compressor.jpg',
                  description: '“The trainers at Avada Gym have helped me reach my fitness goals beyond anything I could of hoped for. I love it!”',
                  name: ' - Tara Smith'
               },
               {
                  image: '../assets/review_3-compressor-2.jpg',
                  description: '“The atmosphere at Avada Gym is amazing, the people are even better. All in all, it is a great place to work out.”',
                  name: ' - Simon Chel'
               },
               {
                  image: '../assets/review_2-compressor.jpg',
                  description: '“The facilities at Avada Gym stood out to me the most. They are well maintained and have high quality equipment.”',
                  name: ' - Jen Wirth'
               },
               {
                  image: '../assets/review_4-compressor-2.jpg',
                  description: '“No bad things to say about Avada Gym, they are top notch at every corner and truly take care of their customers.”',
                  name: '- Jeff Glum' 
               },
            ],

            ImageComponentUrls: [
               {
                  url: '../assets/home-image1.jpg'
               },
               {
                  url: '../assets/home-image2.jpg'
               },
               {
                  url: '../assets/home-image3.jpg'
               },
               {
                  url: '../assets/home-image4.jpg'
               },
               {
                  url: '../assets/home-image54.jpg'
               },
               {
                  url: '../assets/home-image6.jpg'
               },
            ]

         }

      },
      methods:{
         send(){

            if(this.registered == false){

               if(this.name != '' && this.mail != ''){

                  this.buttonText = 'THANK YOU FOR REGISTERING!'
                  this.registered = true

                  this.name = ''
                  this.mail = ''

               } else if (this.name == '' && this.mail == '' || this.name != '' && this.mail == '' || this.name == '' && this.mail != ''){

                  this.buttonText = 'FILL IN ALL THE FIELDS!'

               }

            }  else {

                  this.buttonText = 'YOU HAVE ALREADY REGISTERED!'

               }

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

.bgimg2{
   background-image: url(../assets/gym_bkgd_bw-compressor.jpg);
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
}

.bgimg3{
   background-image: url(../assets/home-testimonial-bg.jpg);
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
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

.container3{
   width: 70%;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   padding: 100px 0;
}

.bruce-container{
   padding: 140px;
   width: 50%;
   margin: 0 auto;
   text-align: center;
   color: white;
   h1{
      font-weight: 500;
      line-height: 60px;
   }
   img{
      margin: 40px 0;
   }
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
      padding: 5px;
      color: #EE6059;
      height: 35px;
      background-color: #212325;
      border: 1px solid #3E4346;
   }

   input:focus { 
      outline: none !important;
      border-color: #EE6059;
      box-shadow: 0 0 10px #EE6059;
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

.real-results{
   text-align: center;
   padding: 70px;
   h1{
      color: white;
      margin-bottom: 20px;
   }
   img{
      margin-bottom: 20px;
   }
}


.people-container{
   width: 75%;
   margin: 0 auto;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
}

.high-performance{
   text-align: center;
   padding: 70px;
   h1{
      color: white;
      margin-bottom: 20px;
   }
   img{
      margin-bottom: 20px;
   }
}

.images-container{
   display: flex;
   flex-wrap: wrap;
}

</style>