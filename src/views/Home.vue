<template>
  <div class="home">

  <!-- ------------------- Add a book ------------------------ -->

  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
     <v-fab-transition>
                <v-btn
                 color="pink"
                  fab
                   dark
               v-bind="attrs"
                   v-on="on"
                  small
                  absolute
                left
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-fab-transition>
       
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Ajouter un livre</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
              >
                <v-text-field
                v-model="author"
                  label="votre nom*"
                  hint="un nom d'une personne adulte est obligatoire"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                v-model="title"
                  label="titre de votre livre*"
                  hint="penser a un titre court!"
                ></v-text-field>
              </v-col>

              <v-text-field
              v-model="src"
                  label="Image de livre"
                   clear-icon="mdi-close-circle"
                  
                  hint="penser a un titre court!"
                ></v-text-field>
              </v-col>

              <template>
              <v-container fluid>
                 <v-textarea
                 v-model="description"
                clearable
                  clear-icon="mdi-close-circle"
                 label="Description de votre livre"
                  
                  ></v-textarea>
                  </v-container>
                  </template>

              
            </v-row>
          </v-container>
          <small>*indique un champ obligatoire!</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
      tile
      color="error"
      @click="dialog = false"
    >
      <v-icon left>
        mdi-close
      </v-icon>
      Annuler
    </v-btn>
         

    <v-btn
      tile
      color="success"
      @click="addBook"
    >
      <v-icon left>
        mdi-plus
      </v-icon>
      Enregistrer
    </v-btn>

    <v-btn
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>


  <!-- ------------------- End Add a book ------------------------ -->

  <!-- ------------------- My card ------------------------ -->
   <v-container>
      <v-row dense>
        
        <v-col
          v-for="(card, index) in cards"
          :key="card.title"
          cols="4"
        >
  <v-card
    class=""
    max-width="344"
  >
    <v-img
      :src="card.img"
      height="200px"
    ></v-img>

    <v-card-title>
      {{ card.title }}
    </v-card-title>

    <v-card-subtitle>
     Proposer par:
      {{ card.author }}
    </v-card-subtitle>

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

    <v-expansion-panels accordion>
      <v-expansion-panel
      >
        <v-expansion-panel-header  color="orange lighten-2">
        Explorer
        </v-expansion-panel-header>
        <v-expansion-panel-content>
           {{ card.description }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  



  </v-card>
     </v-col>

      </v-row>
       </v-container>
       <!-- ------------------- End My card ------------------------ -->
  </div>
</template>

<script>

export default {

  name: 'Home',
   data: () => ({
      
      show: false,
      dialog: false,
      title: '',
      img: 'https://laradiostation.fr/wp-content/uploads/2018/03/LIVRES-ILLUSTRATION-@-RTL.FR_.jpg',
      author: '',
      description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux',
      book: {},
      cards: [
        { title: 'Améliorer votre UX ', img: 'https://img.aws.la-croix.com/2019/12/11/1201065880/Retrouvez-selection-litteraire-Croixles-fetes-dannee_0_729_486.jpg', author: 'Axel Pupier', description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux' },
        { title: 'Devenir chef de projet', img: 'https://cdn.radiofrance.fr/s3/cruiser-production/2020/09/cfb832b0-d9fd-4348-9955-78386ecc6a80/1200x680_masque-plume-livres-critiques-amelie-nothomb.jpg', author: 'Cloé Pham-Van', description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux' },
        { title: 'Débuter avec VueJs 3', img: 'https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/loisirs/livres/dossiers/livre-fait-divers/74793089-1-fre-FR/Faits-divers-les-livres-qui-vont-vous-happer.jpg', author: 'Faouzi HAMDAOUI', description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux' },
      ],
    }),
     methods: {
       addBook: function () {
        this.book = { title: this.title, img: this.img, author: this.author, description: this.description  }
        this.cards.push(this.book);
        this.dialog = false;
       }
     },
}
</script>
