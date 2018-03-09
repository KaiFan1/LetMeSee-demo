<template>
  <v-container>
    <v-layout>
      <v-flex>
          <h1 v-show="!products.length">your cart is empty</h1>
      <v-card>
        <v-card-title>
          <v-container>
            <v-layout>
              <v-flex xs4></v-flex>
              <v-flex xs4>Name</v-flex>
              <v-flex xs2>Price</v-flex>
              <v-flex xs2>Quantity</v-flex>
            </v-layout>
            <v-divider></v-divider>
          </v-container>
        </v-card-title>
        <v-container fluid style="min-height: 0;" grid-list-lg>
          <v-layout row wrap v-for="product in products" :key="product.id"> 
              <cart-item :item="product"></cart-item> 
          </v-layout>
        </v-container>
      </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import cartItem from '../components/cart/CartItem';

export default {
  computed:{
    ...mapGetters({
      products: 'cartProducts',
      checkoutStatus: 'checkoutStatus',
    })
  },
  components:{
    'cart-item':cartItem,
  }
};
</script>