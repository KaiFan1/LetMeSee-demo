<template>
<v-flex xs12>
  <v-card :to="'/product/'+ product.id " hover>
    <v-card-media :src=product.image height="400px" contain></v-card-media>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0 text-md-center">{{product.name}}</h3>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat color="blue darken-1">Detail</v-btn>
    </v-card-actions>
  </v-card>
</v-flex>
</template>

<script>
export default {
  name: 'product-item',
  props: ['product']
};
</script>