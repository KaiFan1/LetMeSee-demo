<template>
  <v-toolbar dark color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">LETMeSEE</v-toolbar-title>

    <v-spacer></v-spacer>
      <v-btn icon to="/">
            <v-icon>home</v-icon>   
        </v-btn>
        <v-btn icon to="/cart">
            <v-badge left color="red">
                <span slot="badge">{{products.length}}</span>
                <v-icon>shopping_cart</v-icon>
            </v-badge>
        </v-btn>
  </v-toolbar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      products: "cartProducts"
    }),
  },
};
</script>