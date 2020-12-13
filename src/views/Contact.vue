<template>
  <div>
    <v-breadcrumbs :items="links">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
   <h1>Contactez-nous</h1>

  <v-form 
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="20"
      :rules="nameRules"
      label="Nom"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

   <v-text-field
      v-model="sujet"
      :counter="30"
      :rules="sujetRules"
      label="Sujet"
      required
    ></v-text-field>

   <v-textarea
      background-color="grey lighten-2"
      color="cyan"
      label="Message"
    ></v-textarea>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Envoyer
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Réinitialiser
    </v-btn>

  </v-form>
  <br />
  </div>
  
</template>


<script>
  export default {
    data: () => ({
      links: [{text: 'Home', to: '/'},{text: 'Contact', to: '/contact'}],
    valid: true,
      name: '',
      nameRules: [
        v => !!v || 'le nom est obligatoire!',
        v => (v && v.length <= 20) || 'Le nom doit comporter moins de 20 caractères',
      ],
      sujet: '',
       
      email: '',
      emailRules: [
        v => !!v || 'un email est obligatoire!',
        v => /.+@.+\..+/.test(v) || 'E-mail Doit être valide',
      ],
      
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>