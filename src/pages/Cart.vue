<template>
  <v-container>
    <v-layout>
      <v-flex>
        <h1 v-show="!products.length">your cart is empty</h1>
        <div v-if="products.length > 0">
          <v-card>
          <v-container fluid style="min-height: 0;" grid-list-lg>
            <v-layout row>
              <v-flex sm4></v-flex>
              <v-flex sm4>Name</v-flex>
              <v-flex sm2>Price</v-flex>
              <v-flex sm2>Quantity</v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout row wrap v-for="product in products" :key="product.id"> 
              <cart-item :item="product"></cart-item>
            </v-layout>
            <v-layout>
              <v-card-text>
                <p class="text-xs-right">CART SUBTOTAL: {{subtotal}}</p>
              </v-card-text>
            </v-layout>
          </v-container>
        </v-card>
        <div>
            <v-btn large to="/">Cancel</v-btn>
            <v-btn large color="primary" to="/checkout">Checkout</v-btn>
        </div>
        </div>
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
    }),
    subtotal:function(){
      let total=0;
      this.products.forEach(element => {
        total = total + element.price * element.quantity;
      });
      return total;
    }
  },
  components:{
    'cart-item':cartItem,
  }
};
</script>