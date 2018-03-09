<template>
  <v-container grid-list-sm text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 sm6 md3 v-for="product in products" :key="product.id">
        <product-item :product='product'></product-item>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductItem from "./ProductItem";

export default {
  name: "product-list",
  created() {
    this.$store.dispatch('getAllProducts')
  },
  computed: mapGetters({
    products: 'allProducts',
  }),
  components: {
    'product-item': ProductItem,
  }
};
</script>

<style>

</style>