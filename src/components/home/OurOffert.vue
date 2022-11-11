<template>
  <div class="container">
    <h2 class="title-section" :class="'title-section-' + breakpoint">
      ¿QUE TE OFRECEMOS?
    </h2>
    <div class="carousel">
      <v-carousel
        show-arrows="hover"
        color="white"
        height="600"
        interval="5000"
        cycle
      >
        <v-carousel-item
          v-for="item in items"
          :key="item"
          :src="item.img"
          cover
        >
          <div class="item">
            <h2
              class="title-item center-text"
              :class="'title-item-' + breakpoint"
            >
              {{ item.title }}
            </h2>
            <div class="desc-item center" :class="'desc-item-' + breakpoint">
              <p class="center-text">{{ item.desc }}</p>
            </div>
            <v-btn class="btn-item center">Ver más</v-btn>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>
<script setup>
import data2 from "@/assets/imgs/data-2.jpg";
import data4 from "@/assets/imgs/data-4.jpg";
import development from "@/assets/imgs/development.jpg";
import training from "@/assets/imgs/training.jpg";
import software from "@/assets/imgs/data-5.jpg";
import hardware from "@/assets/imgs/hardware.jpg";
import { computed } from "vue";
import { useDisplay } from "vuetify";
const { name } = useDisplay();
const breakpoint = computed(() => name.value);
const items = [
  {
    title: "IMPLEMENTACIÓN DE PROYECTOS (BUSINESS ANALYST)",
    desc: "Nuestra metodología de servicios se encuentra orientada en los estándares del Project Management Institute (PMI) ® e International Project Management Association (IPMA). Esto nos permite contar con las competencias para coordinar equipos de trabajo en el inicio, planeación, construcción, monitoreo y control de las actividades y recursos involucrados en un proyecto a partir de los objetivos y requerimientos de nuestro cliente.",
    route: "",
    img: data2,
  },
  {
    title: "DESARROLLO DE APLICACIONES",
    desc: "En un mundo moderno, con la cantidad de problemas y su complejidad cada vez es mayor, el desarrollo de aplicaciones, una herramienta para obtener soluciones precisas, dándole tareas repetitivas a la computadora y logrando así la 'automatización' de procesos que todavía requieren la intervención de las personas en tareas repetitivas.",
    route: "",
    img: development,
  },
  {
    title: "WORKSHOP (BLUE PRINT)",
    desc: "Su estrategia debe abarcar la gestión de personas, procesos y cambios, incluida la identificación de casos de uso comercial inmediatos, la definición de roles, responsabilidades, el establecimiento de medidas para evaluar el éxito y el impacto.",
    route: "",
    img: data4,
  },
  {
    title: "CAPACITACIÓN",
    desc: "Nuestra gama de cursos de Tableau incluye: Tableau Prep Tableau Desktop Visual Analytics Tableau Server Adicionalmente ofrecemos cursos sobre: Business Intelligence, Data Mining, Big Data, Data to Insight.",
    route: "",
    img: training,
  },
  {
    title: "VENTA DE SOFTWARE",
    desc: "Nos dedicamos a la venta de licencias de software, podemos recomendarle los sistemas que de acuerdo a sus necesidades son más adecuados.",
    route: "",
    img: software,
  },
  {
    title: "VENTA DE HARDWARE",
    desc: "Trabajamos con los mejores proveedores de México y tenemos la capacidad de cubrir cualquier necesidad que tenga de hardware. Redes, computadoras, impresoras y accesorios.",
    route: "",
    img: hardware,
  },
];
</script>
<style scoped>
.container {
  background-size: cover;
}

.carousel {
  display: block;
  margin: 0px auto;
}

.item {
  display: block;
  margin: 10vh auto;
  height: 400px;
  width: 80%;
  backdrop-filter: blur(2px);
  background: rgba(108, 108, 109, 0.5);
  border-radius: 10px;
}

.title-item {
  color: white;
  padding-top: 50px;
  padding-bottom: 20px;
}

.title-item-xxl,
.title-item-xl,
.title-item-lg {
  font-size: 40px;
}

.title-item-md,
.title-item-sm,
.title-item-xs {
  font-size: 20px;
}

.desc-item {
  color: white;
  background: none;
  width: 80%;
}

.desc-item-xxl,
.desc-item-xl,
.desc-item-lg {
  font-size: 20px;
}

.desc-item-md,
.desc-item-sm,
.desc-item-xs {
  font-size: 15px;
}

.btn-item {
  display: block;
  margin: 40px auto;
  background: #4671e5;
  color: white;
  font-size: 20px;
}
</style>