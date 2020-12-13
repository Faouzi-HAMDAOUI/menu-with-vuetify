<template>
<nav>
     <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Ma Bibliothèque Idéale</v-toolbar-title>
      </v-app-bar>

   <v-navigation-drawer v-model="drawer"app >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            GROUPE 05
          </v-list-item-title>
          <v-list-item-subtitle>
            M2CIM
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item link
          v-for="item in items"
          :key="item.title"
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

       <v-list-item v-if="link">
         <v-list-item-icon>
            <v-icon>mdi-help-box</v-icon>
         </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ link }}</v-list-item-title>
          </v-list-item-content>

      </v-list-item>

        <v-text-field v-model="link"
          @keyup.enter="addLink"
          label="Ajouter un lien"
          :rules="rules"
          hide-details="auto"
       >
       </v-text-field>
      </v-list>
    </v-navigation-drawer>
 </nav>
</template>

<script>
  export default {

    data: () => ({ 
    drawer: null,
    link: '',
    obj: {},
     items: [
          { title: 'Home', to:'/', icon: 'mdi-home-flood' },
          { title: 'About', to:'/about', icon: 'mdi-information' },
          { title: 'Contact', to:'/contact', icon: 'mdi-information' },
          { title: 'Alerte', to:'/alerte', icon: 'mdi-view-dashboard' },
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