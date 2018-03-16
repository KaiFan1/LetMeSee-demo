<template>
    <v-container fluid grid-list-lg>
            <v-layout row>
                <v-flex xs4 > 
                    <v-card-media :src=item.image height="125px" contain></v-card-media>
                </v-flex>
                <v-flex xs4 align-baseline>
                    <div class="headline">{{item.name}}</div>
                    <h3>something</h3>
                    <a @click="removeProductFromCart(item)">
                        <v-icon>delete</v-icon> Delete
                    </a>
                </v-flex>
                <v-flex xs2>
                    <div>{{item.price}}</div>
                </v-flex>
                <v-flex xs2>
                    <div>{{item.quantity}}</div>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: ['item'],
  methods:mapActions([
      'removeProductFromCart'
    ])
};
</script>

