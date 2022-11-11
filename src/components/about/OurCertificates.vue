<template>
  <div class="container">
    <h2 class="title-section" :class="'title-section-' + breakpoint">
      NUESTRAS CERTIFICICACIONES
    </h2>
    <div class="certificates">
      <div class="img-cetificate-1 elevation-10">
        <div class="desc-certificate">
          <h2>Certificados por el (PMI® e IPMA® )</h2>
          <p>
            Profesionales con conocimientos y competencias acreditadas ante
            organismos nacionales (CONOCER) e internacionales (PMI® e IPMA®). -
            Aplicación e impacto inmediato en mejores prácticas para administrar
            proyectos dentro de las organizaciones. - Incremento en la capacidad
            para realizar más y mejores proyectos. - Líderes de equipos de
            trabajo altamente orientados a lograr los resultados que contribuyen
            a los objetivos estratégicos de la organización.
          </p>
        </div>
      </div>
      <div class="img-cetificate-2 elevation-10">
        <div class="desc-certificate">
          <h2>Certificados por (Tableau Plataform®)</h2>
          <p>
            Ayudamos en la toma de decisiones en todos los niveles de la
            empresa, comprender mejor los resultados de negocio, anticiparse a
            ellos, darles forma mediante la identificación de tendencias,
            modelos estadísticos, anomalías; analizarlos, comparar los casos
            “what-if” y predecir las amenazas, oportunidades potenciales, así
            como planificar, presupuestar y prever los recursos
          </p>
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
</script>
<style scoped>
.container {
  width: 100%;
  height: 700px;
}
.certificates {
  display: block;
  margin: 0px auto;
  width: 75%;
}

.img-cetificate-1,
.img-cetificate-2 {
  float: left;
}

.img-cetificate-1:hover,
.img-cetificate-2:hover {
  background: #131b85;
}

.img-cetificate-1,
.img-cetificate-2 {
  height: 500px;
  width: 700px;
}

.img-cetificate-1 {
  background-image: url("@/assets/imgs/empresa.jpg");
  clip-path: polygon(75% 0, 100% 50%, 75% 100%, 0 100%, 25% 50%, 0 0);
  background-size: cover;
}

.img-cetificate-2 {
  background-image: url("@/assets/imgs/tableau-office.jpg");
  clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
  background-size: cover;
}

.desc-certificate {
  width: 52%;
  display: block;
  margin: 10% auto;
}

.desc-certificate h2 {
  color: white;
  font-weight: bold;
  text-align: center;
  opacity: 0;
}

.desc-certificate p {
  color: white;
  font-weight: lighter;
  text-align: justify;
  opacity: 0;
}

.desc-certificate .desc-certificate,
.desc-certificate .desc-certificate {
  opacity: 0;
}

.img-cetificate-1:hover .desc-certificate,
.img-cetificate-2:hover .desc-certificate {
  animation: 0.5s from-bottom;
}

.img-cetificate-1:hover h2,
.img-cetificate-1:hover p,
.img-cetificate-2:hover h2,
.img-cetificate-2:hover p {
  opacity: 1;
}

@keyframes from-bottom {
  from {
    opacity: 0;
    margin-top: 100%;
  }
  to {
    opacity: 1;
    margin-top: 10%;
  }
}
</style>