<template>
  <v-app>
   
    <Navbar />
    <v-main class="mx-4 mt-4 ">
     <router-view></router-view>
    </v-main>
    <Foothers/>
  </v-app>
</template>


<script>
import Foothers from './views/Foothers.vue'
import Navbar from './views/Navbar.vue'

  export default {
  
  name: 'App',
  components: {
    Foothers,
    Navbar
  },

    data: () => ({ 
    drawer: null,
    link: '',
    obj: {},
     items: [
          { title: 'Home', to:'/', icon: 'mdi-home-flood' },
          { title: 'About', to:'/about', icon: 'mdi-information' },
          { title: 'Pop', to:'/pop', icon: 'mdi-view-dashboard' },
          { title: 'Carte', to:'/carte', icon: 'mdi-map-marker-radius' },
          
        ],
    rules: [
        value => !!value ,
        value => (value && value.length >= 4) || 'Min 4 characters',
      ],
       
    
     }),
     
     methods: {
       addLink: function () {
        this.obj = { title: this.link, to:'/default', icon: 'mdi-help-box' }
        this.items.push(this.obj);
        this.link = '';
       }
     },
  }
</script>