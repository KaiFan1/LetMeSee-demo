<template>
    <v-container grid-list-xl>
        <v-layout wrap>
            <v-flex xs12 sm6 >
                <v-container>
                    <v-card-media :src=product.image contain height="400px"></v-card-media>
                </v-container>
            </v-flex>
            <v-flex xs12 sm6>
                <v-container>
                    <v-flex xs12>
                        <h2>{{product.name}}</h2>
                        <h3>{{product.price}}</h3>
                        <p>{{product.description}}</p>
                        <v-text-field name="Quantity" label="Quantity" v-model="value"></v-text-field>
                    </v-flex>
                    <v-btn color="primary" dark :disabled="!product.inventory" @click="addProductToCart(product)">Buy It</v-btn>
                    <v-btn color="primary" dark>Maybe Later</v-btn>
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    props: ['product'],
    data(){
        return{
            value:1,
        }
    },
    methods:mapActions([
        'addProductToCart'
    ]),
};
</script>
