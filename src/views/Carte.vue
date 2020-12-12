<template>
  <div>

    <v-breadcrumbs :items="links">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    </div>
</template>
  

  <script>
  export default {
    data: () => ({
      links: [{text: 'Home', to: '/'},{text: 'Carte', to: '/carte'}],
    }),
  }
</script>