<template>
  <div class="container header">
    <div class="title-page">
      <h2 class="title-turing">TURING-IA</h2>
    </div>
    <div class="menu">
      <a href="" class="item-menu" @click="goTo('Inicio')">Inicio</a>
      <a href="" class="item-menu" @click="goTo('Nosotros')">Nosotros</a>
      <a href="" class="item-menu">Servicios</a>
      <a href="" class="item-menu">Tableau</a>
      <a href="" class="item-menu">Portal</a>
      <a href="" class="item-menu">Blog</a>
      <a href="" class="item-menu">Contacto</a>
    </div>
  </div>
</template>
<script setup>
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
  height: 75px;
  background: rgba(19, 27, 133,0.5);
}

.container {
  width: 100%;
  height: 70px;
}

.title-page {
  width: 50%;
}

.title-turing {
  margin-left: 10%;
  font-size: 30px;
  line-height: 2;
  color: white;
}

.menu {
  width: 50%;
}

.title-page,
.menu {
  height: 100%;
  display: inline-block;
}

.item-menu {
  text-decoration: none;
  margin: 50% 3%;
  font-size: 20px;
  font-weight: bold;
  color: white;
}
</style>;
