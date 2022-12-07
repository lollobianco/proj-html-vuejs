<template>

   <div class="card-container">

        <div v-for="(element, index) in newsCardData" :key="index" class="card">

         <div>
            <img :src="`./img/${element.image}`" alt="">      
         </div>
   
   
         <div class="text">
   
            <div class="title">{{element.title}}</div>
   
            <div class="description">{{element.description}}</div>
   
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
                  image: 'blog4.jpg',
                  title: 'To be number one, train like you’re number two',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]'
               },              
               {
                  image: 'blog6.jpg',
                  title: 'Nutritional advice that will keep you training',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]'
               },
               {
                  image: 'trainer3.jpg',
                  title: 'Top 5 mistakes every gym member makes',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]'
               },        
               {
                  image: 'trainer4.jpg',
                  title: 'Simple principles for your next workout',
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

.card-container{
 width: 100%;
 columns: 3;
}
.card{
   cursor: pointer;
   padding: 20px 10px;
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