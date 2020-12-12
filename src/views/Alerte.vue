<template>
  <div heigth="800">

    <v-breadcrumbs :items="links">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>

    <div class="text-center mb-4">
      <v-btn
        color="primary"
        @click="alert = !alert"
      >
        Afficher/Masquer la page
      </v-btn>
    </div>
    <v-alert
      :value="alert"
      
      transition="scale-transition"
    >
      <template>
  <v-card
    class="mx-auto"
    max-width="850"
  >
    

    <v-toolbar
      color="indigo"
      dark
    >
     <v-btn icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-toolbar-title>Ma Bibliothéque en ligne</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
    </v-alert>
  </div>
</template>

<script>
  export default {
    data: () => ({
    alert: true,
      cards: [
        { title: 'Un livre au choix ', src: 'https://p7.storage.canalblog.com/73/53/796110/59127859.jpg', flex: 12 },
        { title: 'Un livre prés de chez vous', src: 'https://images.ladepeche.fr/api/v1/images/view/5c2eb1ad3e454667e50c376c/large/image.jpg', flex: 6 },
        { title: 'Lire gratuitement', src: 'https://images.ladepeche.fr/api/v1/images/view/5c29fcb08fe56f49d50c5c3b/large/image.jpg', flex: 6 },
      ],
      links: [{text: 'Home', to: '/'},{text: 'Alerte', to: '/alerte'}],
    }),
  }
</script>