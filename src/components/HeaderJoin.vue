<template>
   <div class="central-header"> 
      <h1 class="title">NO PAIN NO GAIN</h1>
      <span>Motivation is what gets you started. Habit is what keeps you going.</span>
      <button id="join-us">JOIN US TODAY</button>
   </div>
</template>

<script>
   export default {
      name: 'HeaderJoin'
   }
</script>

<style lang="scss" scoped>
.central-header{
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
   color: white;
   padding-bottom: 200px;
}

.title{
   font-size: 5rem;
   font-weight: 900;
}

#join-us{
   padding: 15px 30px;
   margin-top: 30px;
   background-color: rgba(0, 0, 0, 0);
   color: #A8A8A7;
   border: 1px solid #A8A8A7;
   cursor: pointer;
   transition: 0.5s;
}

#join-us:hover{
   background-color: #F4635B;
   color: black;
   border-color: #EE6059;
   box-shadow: 0 0 15px #EE6059;
   font-size: 0.9rem;
}
</style>