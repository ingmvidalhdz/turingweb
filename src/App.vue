<template>
  <v-app>
    <header-mobile v-if="isMobile" />
    <header-desktop v-else />
    <main :class="'page-content-' + breakpoint">
      <router-view></router-view>
    </main>
    <div class="footer">
      <footer-component />
    </div>
  </v-app>
</template>
<script setup>
import { computed } from "vue";
import { useDisplay } from "vuetify";
import HeaderDesktop from "./components/layout/HeaderDesktop.vue";
import HeaderMobile from "@/components/layout/HeaderMobile.vue";
import FooterComponent from "@/components/layout/FooterComponent.vue";
const { name } = useDisplay();
const breakpoint = computed(() => name.value);
const isMobile = computed(() => {
  if (
    breakpoint.value === "xs" ||
    breakpoint.value === "sm" ||
    breakpoint.value === "md"
  )
    return true;
  else return false;
});
</script>
<style>
.center-text {
  text-align: center;
}

.justify-text {
  text-align: justify;
}

.title-section {
  color: #4671e5;
  text-align: center;
  padding: 5vh;
}

.title-section-xxl,
.title-section-xl,
.title-section-lg {
  font-size: 50px;
}

.title-section-md {
  font-size: 40px;
}

.title-section-sm,
.title-section-xs {
  font-size: 30px;
}

.desc-section {
  font-size: 25px;
}

.center {
  display: block;
  margin: 0px auto;
  background: orange;
}

.footer {
  background: #131b85;
  width: 100%;
  margin-top: 5vh;
}
</style>
