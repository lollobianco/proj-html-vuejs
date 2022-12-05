<template>

   <div class="flex">

      <div class="newsCard">
   
         <div class="card">
   
            <img :src="`./img/${newsCardData[0].image}`" alt="">      
   
            <div class="text">
   
               <div class="title">{{newsCardData[0].title}}</div>
   
               <div class="description">{{newsCardData[0].description}}</div>
   
            </div> 
   
         </div>
   
         <div class="card">
   
            <img :src="`./img/${newsCardData[3].image}`" alt="">      
   
            <div class="text">
   
               <div class="title">{{newsCardData[3].title}}</div>
   
               <div class="description">{{newsCardData[3].description}}</div>
   
            </div> 
   
         </div>
   
      </div>

      <div class="newsCard">
   
         <div class="card">

            <img :src="`./img/${newsCardData[1].image}`" alt="">      

            <div class="text">

               <div class="title">{{newsCardData[1].title}}</div>

               <div class="description">{{newsCardData[1].description}}</div>

            </div> 

         </div>

         <div class="card">

            <img :src="`./img/${newsCardData[4].image}`" alt="">      

            <div class="text">

               <div class="title">{{newsCardData[4].title}}</div>

               <div class="description">{{newsCardData[4].description}}</div>

            </div> 

         </div>

      </div>

      <div class="newsCard">

         <div class="card">
   
            <img :src="`./img/${newsCardData[2].image}`" alt="">      
   
            <div class="text">
   
               <div class="title">{{newsCardData[2].title}}</div>
   
               <div class="description">{{newsCardData[2].description}}</div>
   
            </div> 
   
         </div>
   
         <div class="card">
   
            <img :src="`./img/${newsCardData[5].image}`" alt="">     
   
            <div class="text">
   
               <div class="title">{{newsCardData[5].title}}</div>
   
               <div class="description">{{newsCardData[5].description}}</div>

   
            </div> 
   
         </div>
   

      </div>

   </div>

</template>

<script>
   export default {
      name: 'NewsCard',

      data(){
         return{
            newsCardData: [
               {
                  image: 'blog1.jpg',
                  title: 'Train with free weights or your body weight?',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]'
               },
               {
                  image: 'blog6.jpg',
                  title: 'Nutritional advice that will keep you training',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]'
               },
               {
                  image: 'trainer4.jpg',
                  title: 'Simple principles for your next workout',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]'
               },
               {
                  image: 'blog4.jpg',
                  title: 'To be number one, train like you’re number two',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]'
               },
               {
                  image: 'trainer3.jpg',
                  title: 'Top 5 mistakes every gym member makes',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]'
               },
               {
                  image: 'trainer1.jpg',
                  title: 'The myths of shedding body fat explored',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]'
               },
            ]
         }
      }
   }
</script>

<style lang="scss" scoped>

.flex{
   display: flex;
   flex-wrap: wrap;
   align-items: flex-start;
}

.newsCard{
   padding: 20px;
   width: calc(100%/3);
}

.card{
   margin-top: 40px;
   cursor: pointer;
}

.text{
   text-align: left;
   padding: 20px;
   background-color: #1F2123;
}

.title{
   font-weight: bold;
   font-size: 1.5rem;
   color: white;
   transition: 300ms;
}

.description{
   margin-top: 20px;
   line-height: 30px;
   font-size: 0.9rem;
   color: #A8A8A8;
}

img{
   width: 100%;
   display: block;
   cursor: pointer;
   transition: 300ms;
}
.card:hover img {
	transform: scale(1.02);
   opacity: 0.4
}

.card:hover .title{
   color: rgba(238, 96, 89, 0.7);

}
</style>