<template>
   <div class="card-container">
      <div v-for="(element, index) in realWorldResultsData" :key="index" class="card">

         <div>
            <img :src="`./img/${element.imageUrl}`" alt="img">
         </div>

         <div>
            <p><i>{{element.description}}</i></p>
            <span><b>{{element.name}}</b></span>
         </div>
         
      </div>
   </div>
</template>

<script>
   export default {
      name: 'PeopleCard',
      props:{
         
      },
      data(){
         return{
            
            realWorldResultsData: [
               {
                  imageUrl: 'review_1-compressor.jpg',
                  description: '“The trainers at Avada Gym have helped me reach my fitness goals beyond anything I could of hoped for. I love it!”',
                  name: ' - Tara Smith'
               },
               {
                  imageUrl: 'review_3-compressor-2.jpg',
                  description: '“The atmosphere at Avada Gym is amazing, the people are even better. All in all, it is a great place to work out.”',
                  name: ' - Simon Chel'
               },
               {
                  imageUrl: 'review_2-compressor.jpg',
                  description: '“The facilities at Avada Gym stood out to me the most. They are well maintained and have high quality equipment.”',
                  name: ' - Jen Wirth'
               },
               {
                  imageUrl: 'review_4-compressor-2.jpg',
                  description: '“No bad things to say about Avada Gym, they are top notch at every corner and truly take care of their customers.”',
                  name: '- Jeff Glum' 
               },
            ],

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
   margin: 10px;
   text-align: left;
   transition: 300ms;
   cursor: pointer;

   p{
      margin-bottom: 20px;
      margin-left: 20px;
   }

   span{
      margin-left: 20px;
   }
}

.card-container{
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
}

img{
   transition: 300ms;
   margin-bottom: 0;
   display: block;
}

.card:hover img{
   scale: 1.1;
}

.card:hover{
   scale: 1.02;
   box-shadow: 0 0 10px #FFF;
}

</style>