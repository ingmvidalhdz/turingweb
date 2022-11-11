<template>
  <div class="container">
    <h2 class="title-section" :class="'title-section-' + breakpoint">
      HISTORIAS DE CLIENTES
    </h2>
    <div class="stories">
      <div v-for="i in 6" :key="i">
        <div
          class="storie"
          :class="[
            'storie-' + i,
            isMobile ? 'storie-mobile' : 'storie-desktop',
          ]"
        >
          <div class="storie-content">
            <h2 class="client-name">{{ stories[i - 1].name }}</h2>
            <p class="storie-desc">{{ stories[i - 1].desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useDisplay } from "vuetify";
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
const stories = [
  {
    name: "Grupo Petersen",
    desc: "Grupo Petersen crea una cultura de datos con Tablea",
  },
  {
    name: "Ret Hat",
    desc: "Red Hat adopta el Blueprint de Tableau y Tableau Online, y profundiza en la cultura de datos con más de 4500 empleados en menos de un año",
  },
  {
    name: "Verizoncard__image",
    desc: "Verizon usa Tableau para reducir las llamadas de soporte en un 43 % y así mejorar la experiencia del cliente",
  },
  {
    name: "Whole Foodscard",
    desc: "Whole Foods Market democratiza el acceso a los datos en sus 460 tiendas para 18 000 empleados gracias a Tableau",
  },
  {
    name: "Mondelez Internacional",
    desc: "Mondelez International digitaliza la adquisición para integrar más de 160 campos de datos, 28 000 proveedores y generar millones en ahorro de costos",
  },
  {
    name: "JPMorgan Chase & Co.",
    desc: "JPMorgan Chase elige Tableau para ofrecer análisis de autoservicio y seguir el vertiginoso ritmo de los cambios en el sector",
  },
];
</script>
<style scoped>
.container {
  background-size: cover;
}

.stories {
}

.storie {
  background-size: cover;
}

.storie-1 {
  background-image: url("@/assets/imgs/grupo-petersen.jpg");
}

.storie-2 {
  background-image: url("@/assets/imgs/red-hat.jpg");
}

.storie-3 {
  background-image: url("@/assets/imgs/verizon.jpg");
}

.storie-4 {
  background-image: url("@/assets/imgs/wholefoods.jpg");
}

.storie-5 {
  background-image: url("@/assets/imgs/mondelezteaser.jpg");
}

.storie-6 {
  background-image: url("@/assets/imgs/heade.jpg");
}

.storie-desktop {
  float: left;
  height: 300px;
  width: 16.66%;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}

.storie-mobile {
  display: inline-block;
  height: 300px;
  width: 100%;
  -webkit-filter: grayscale(0%);
  filter: grayscale(0%);
}

.storie-desktop:hover {
  cursor: pointer;
  transition: 0.3s all;
  -webkit-filter: grayscale(0%);
  filter: grayscale(0%);
}

.storie-desktop .storie-content {
  opacity: 0;
}

.storie-desktop:hover .storie-content {
  opacity: 1;
}

.storie-content {
  background: rgba(70, 113, 229, 0.5);
  margin-top: 30%;
  height: 50%;
}

.storie-content h2,
.storie-content p {
  color: white;
  text-align: center;
}
</style>