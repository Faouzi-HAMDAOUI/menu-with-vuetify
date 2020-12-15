<template>
  <div>

    <v-breadcrumbs :items="links">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>

    <h1>Ma page par défaut</h1>
    </div>
</template>
  

  <script>
  export default {
    data: () => ({
      links: [{text: 'Home', to: '/'},{text: 'Default', to: '/default'}],
    }),
  }
</script>