<template>
  <v-toolbar dark color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">LetMeSee</v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link to="/">
        <v-btn icon>
            <v-icon>home</v-icon>
        </v-btn>
    </router-link>
    <router-link to="/cart">
        <v-btn icon>
            <v-icon>shopping_cart</v-icon>
        </v-btn>
    </router-link>
  </v-toolbar>
</template>