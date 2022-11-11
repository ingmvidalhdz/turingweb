<template>
  <div class="container">
    <div class="desc-container">
      <div class="numbers">
        <div class="inner-numbers d-flex justify-space-around mb-6">
          <div class="numbers-top">
            <h2 class="concept">+ DE CLIENTES</h2>
            <h2 class="figure">150</h2>
          </div>
          <div class="numbers-top">
            <h2 class="concept">+ DE CLIENTES</h2>
            <h2 class="figure">500</h2>
          </div>
        </div>
        <div class="inner-numbers d-flex justify-space-around mb-6">
          <div class="numbers-top">
            <h2 class="concept">+ DE PROYECTOS</h2>
            <h2 class="figure">100</h2>
          </div>
          <div class="numbers-top">
            <h2 class="concept">+ DE SECTORES INDUSTRIALES</h2>
            <h2 class="figure">15</h2>
          </div>
        </div>
      </div>
      <div class="info-bussines elevation-10">
        <h2 class="title-bussines">BUSSINES INTELIGENCE</h2>
        <h3 class="subtitle-bussines">
          Ayudamos a la toma de decisiones en todos los niveles de la empresa:
        </h3>
        <p class="desc-bussines">
          Construimos e implementamos las soluciones que se ajusta a la medida
          de los retos actuales y futuros, de las organizaciones lideres en el
          mercado. Nuestro objetivo es transformar tus datos en oportunidades de
          negocio. ayudamos a la toma de decisiones en todos los niveles de la
          empresa. Con nuestras soluciones seras capaz de identificar tendencias
          de mercado, potenciar los recursos de la empresa, y crear planes de
          acción anticipando errores y amenazas para tus estrategias
          corporativas.
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<style scoped>
.container {
  height: 550px;
  background-image: url("@/assets/imgs/bi-2.jpg");
  background-size: cover;
}

.desc-container {
  height: 100%;
  background: rgba(19, 27, 133, 0.4);
}

.numbers,
.info-bussines {
  width: 50%;
  float: left;
  height: 500px;
}

.info-bussines {
  margin-top: 100px;
  background: #3cddf3;
  padding: 100px;
}

.title-bussines {
  font-size: 25px;
}

.subtitle-bussines {
  font-size: 30px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.desc-bussines {
  font-size: 20px;
}

.numbers {
  display: inline-block;
  width: 50%;
}

.numbers-top {
  float: left;
}

.numbers-top .concept,
.numbers-bottom .concept {
  color: white;
  font-size: 30px;
}

.numbers-top .figure,
.numbers-bottom .figure {
  color: white;
  font-size: 50px;
  text-align: center;
  margin-top: 30px;
  opacity: 0;
}

.numbers-top:hover,
.numbers-bottom:hover {
  transition: 0.5s all;
  transform: scale(1.2);
  cursor: pointer;
}

.numbers-top:hover .figure,
.numbers-bottom:hover .figure {
  animation: 0.5s from-top ease-in-out;
  animation-fill-mode: forwards;
  color: #3cddf3;
}

@keyframes from-top {
  0% {
    opacity: 0;
    margin-top: -50px;
  }
  100% {
    opacity: 1;
    margin-top: 30px;
  }
}

.inner-numbers {
  margin-top: 10vh;
}
</style>