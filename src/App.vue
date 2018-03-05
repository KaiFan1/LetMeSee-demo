<template>
  <v-app>
    <lms-toolbar></lms-toolbar>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar';

export default {
  name: 'App',
  components:{
    'lms-toolbar': Toolbar,
  }
};
</script>

<style>

</style>
