<template>
  <v-card >
    <v-footer-padding
      v-bind="localAttrs"
      :padless="padless"
    >
      <v-card
        flat
        tile
        width="100%"
        class="red lighten-1 text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>M2CIM/Groupe 05</strong>
        </v-card-text>
      </v-card>
    </v-footer-padding>

     
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-home',
        'mdi-email',
        'mdi-calendar',
        'mdi-delete',
      ],
      items: [
        'default',
        'absolute',
        'fixed',
      ],
      padless: false,
      variant: 'default', // absolute, default, fixed
    }),
    computed: {
      localAttrs () {
        const attrs = {}
         if (this.variant === 'default') {
          attrs.absolute = false
          attrs.fixed = false
        } else {
          attrs[this.variant] = true
        }
        return attrs
      },
    },
  }
</script>