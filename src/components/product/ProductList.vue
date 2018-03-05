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
import ProductItem from './ProductItem';

export default {
  name: 'product-list',
  created() {
    if (this.products.length === 0) {
      this.$store.dispatch('allProducts');
    }
  },
  computed: {
    products() {
      return this.$store.getters.allProducts;
    },
  },
  components: {
    'product-item': ProductItem,
  },
};
</script>

<style>
</style>