<template>
  <div>
    <product-list></product-list>
  </div>
</template>

<script>
import ProductList from '../components/product/ProductList';

export default {
  name: 'Home',
  components: {
    'product-list': ProductList,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>