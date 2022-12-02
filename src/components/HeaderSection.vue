<template>
  <div>

      <div id="header-background">

        <HeaderNav :headerNavArray="headerNav"/>

        <HeaderJoin/>

      </div>

  </div>
</template>

<script>
import HeaderNav from './HeaderNav.vue';
import HeaderJoin from './HeaderJoin.vue';

export default {
  name: 'HeaderSection',
  components:{
    HeaderNav,
    HeaderJoin
  },
  props: {
    
  },
  data(){

    return{

      headerNav: [

        {
          name: 'HOME',
          link: 'HomeLink',
          active: true
        },
        {
          name: 'ABOUT US',
          link: 'AboutUsLink',
          active: false
        },
        {
          name: 'FACILITIES',
          link: 'FacilitiesLink',
          active: false
        },
        {
          name: 'MEMBERSHIP',
          link: 'MembershipLink',
          active: false
        },
        {
          name: 'TESTIMONIALS',
          link: 'TestimonialsLink',
          active: false
        },
        {
          name: 'BLOG',
          link: 'BlogLink',
          active: false
        },

      ]

  }


  },
}
</script>


<style scoped lang="scss">

#header-background{
  background-image: url(../assets/home-banner.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
}

</style>
