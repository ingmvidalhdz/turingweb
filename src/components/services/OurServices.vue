<template>
  <div class="container">
    <div class="services">
      <h2 class="title-services">Servicios</h2>
      <div class="services-1">
        <h4 class="title-service-1">Project - PMI</h4>
        <ul class="list-services">
          <li>BI & BA</li>
          <li>Big Data</li>
          <li>Tableau Blueprint</li>
        </ul>
      </div>
      <div class="services-2">
        <h4 class="title-service-1">Training</h4>
        <ul class="list-services">
          <li>Tableau</li>
          <li>Altery</li>
          <li>R Studio</li>
          <li>Data Mining Weka</li>
          <li>Insight</li>
          <li>BI</li>
        </ul>
      </div>
    </div>
    <div class="model elevation-10">
      <h3 class="title-model">MODELO DE NOGOCIOS</h3>
      <h2 class="subtitle-model">A que nos dedicamos</h2>
      <p class="desc-model">
        Nosotros somos expertos creación de proyectos de Big Data, mediante la
        metodología PMI. A su vez también nos dedicamos al desarrollo de
        software hecho a la medida utilizando distintas herramientas. Tenemos
        distintas cursos y capacitaciones para ti y tu empresa. Adicionalmente
        nos encargamos de vender licenciamiento de software y equipos hardware.
        Todo en conjunto forma el modelo de negocios de Turing-IA.
      </p>
    </div>
  </div>
</template>

<script setup>
</script>
<style scoped>
.container {
  background-image: url("@/assets/imgs/modelo.jpg");
  height: 700px;
}

.services,
.model {
  width: 50%;
  float: left;
}

.title-services {
  color: white;
  font-size: 50px;
  text-align: center;
  margin-top: 3%;
}

.model {
  height: 100%;
  background: #1d84be;
  margin-top: 3%;
  padding: 100px;
}

.title-model,
.desc-model {
  font-size: 20px;
  color: white;
}

.subtitle-model {
  font-size: 30px;
  color: white;
}

.services-1,
.services-2 {
  width: 50%;
  height: 30%;
  padding: 40px;
  float: left;
}

.services-1 {
  background: #be1d76;
}

.services-2 {
  background: #1dbe2a;
}

.title-service-1 {
  color: white;
  font-size: 30px;
}

.list-services {
  color: white;
  font-size: 20px;
}
</style>