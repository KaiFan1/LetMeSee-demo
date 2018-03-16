<template>
  <div>
    <v-toolbar dark color="primary">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">LETMeSEE</v-toolbar-title>
    <v-spacer></v-spacer>
      <v-btn icon to="/">
            <v-icon>home</v-icon>   
        </v-btn>
        <v-btn icon to="/cart">
            <v-badge left color="red" v-model="show">
                <span slot="badge">{{products.length}}</span>
                <v-icon>shopping_cart</v-icon>
            </v-badge>
        </v-btn>
  </v-toolbar>
      <v-navigation-drawer temporary v-model="drawer" :mini-variant="mini" absolute >
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" >
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider light></v-divider>
        <v-list-tile v-for="item in infos" :key="item.title" @click="">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      drawer: null,
      infos: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ],
      mini: false,
      right: null
    };
  },
  computed: {
    ...mapGetters({
      products: "cartProducts"
    }),
    show: function() {
      return this.products.length > 0 ? true : false;
    }
  }
};
</script>