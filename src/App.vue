<template>
  <v-app>
    <header-desktop />
    <main :class="'page-content-' + breakpoint">
      <router-view></router-view>
    </main>
  </v-app>
</template>
<script setup>
import HeaderDesktop from "./components/layout/HeaderDesktop.vue";
</script>
<style>
.center-text {
  text-align: center;
}

.justify-text {
  text-align: justify;
}
</style>
