<template>
<v-flex xs12>
  <v-card :to="'/details/'+ product.id " hover>
    <v-card-media :src=product.image height="400px"></v-card-media>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{product.name}}</h3>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat color="orange">Share</v-btn>
      <v-btn flat color="orange">Explore</v-btn>
    </v-card-actions>
  </v-card>
</v-flex>
</template>

<script>
export default {
  name: 'product-item',
  props: ['product'],
};
</script>