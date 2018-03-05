<template>
    <v-container>
        <v-layout>
            <v-flex xs4>
                <h1>here is a product picture</h1>
            </v-flex>
            <v-flex xs8>
                <h3>name</h3>
                <h4>price</h4>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    props: ['product'], 
  }
</script>
