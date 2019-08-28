<template>
  <v-app dark>
    <router-view></router-view>
    <app-footer></app-footer>
    <app-header></app-header>          
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
  }
}
</script>
<style>
</style>
