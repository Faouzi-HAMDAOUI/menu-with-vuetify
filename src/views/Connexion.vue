<template>
 <div>
    <v-breadcrumbs :items="links">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
   <h1>Connectez-vous</h1>
  <v-card
    class="mx-auto"
    max-width="600"
    outlined
  >
  <div class="text-center mx-16">
    <v-img 
      src="https://aplustudents.com/images/user1.png"
      height="250px"
      width="250px"
      
    ></v-img>
   </div>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
       prepend-icon="mdi-email"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :counter="5"
      :rules="passwordRules"
      label="Mot de passe"
      prepend-icon="mdi-lock"
      required
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Connectez
    </v-btn>


    <v-btn
      color="warning"
      @click="reset"
    >
      Annuler
    </v-btn>
  </v-form>
  </v-card>
  <br />
   </div>
</template>

<script>
  export default {
    data: () => ({
     links: [{text: 'Home', to: '/'},{text: 'Connexion', to: '/connexion'}],
      valid: true,
      password: '',
      passwordRules: [
        v => !!v || 'password is required',
        v => (v && v.length <= 5) || 'password must be less than 5 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
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