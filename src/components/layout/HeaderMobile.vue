<template>
  <div class="header">
    <v-app-bar-nav-icon
      class="menu-icon"
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-toolbar-title class="title-turing">TURING-IA</v-toolbar-title>
  </div>
  <v-navigation-drawer
    v-model="drawer"
    location="start"
    temporary
    color="#131b85"
  >
    <div class="menu">
      <v-btn class="item-menu" @click="goTo('Inicio')">Inicio</v-btn>
      <v-btn class="item-menu" @click="goTo('Nosotros')">Nosotros</v-btn>
      <v-btn class="item-menu" @click="goTo('Servicios')">Servicios</v-btn>
      <v-btn class="item-menu">Tableau</v-btn>
      <v-btn class="item-menu">Portal</v-btn>
      <v-btn class="item-menu">Blog</v-btn>
      <v-btn class="item-menu">Contacto</v-btn>
    </div>
  </v-navigation-drawer>
</template>
<script setup>
import { ref } from "vue";
const drawer = ref(false);
import { useRouter } from "vue-router";
const router = useRouter();
const goTo = (to) => {
  if (typeof to === "string") {
    router.push({
      name: to,
      params: {},
    });
  }
};
</script>
<style scoped>
.header {
  position: fixed;
  z-index: 2000;
  width: 100%;
  height: 45px;
  background: #131b85;
}

.title-turing {
  text-align: center;
  color: white;
  margin-top: -35px;
}

.menu-icon {
  position: relative;
  z-index: 1;
  margin-left: 5%;
  color: white;
}

.item-menu {
  display: block;
  margin: 3vh auto;
  background: none;
  box-shadow: none;
  color: white;
}

.item-menu:first-child {
  margin-top: 50px;
}
</style>