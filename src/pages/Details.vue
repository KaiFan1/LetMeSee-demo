<template>
  <div>
    <product-details :product="product"></product-details>
  </div>
</template>

<script>
import ProductDetail from '../components/product/ProductDetail';

export default {
  created() {
    this.$store.dispatch('getProductByID', this.$route.params.id);
  },
  computed: {
    product() {
      return this.$store.getters.getProductByID;
    },
  },
  components: {
    'product-details': ProductDetail,
  },
};
</script>