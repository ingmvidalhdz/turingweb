<template>
  <div class="container">
    <v-row no-gutters>
      <v-col cols="12" lg="4" xl="4" xxl="4">
        <div class="col-content">
          <h2 class="name-brand">Turing Inteligencia Artificial</h2>
          <p class="address">
            Av. Insurgentes 601 Col. Nápoles, Benito Juárez Ciudad de México,
            México
          </p>
          <p class="phone">
            <strong>Téfono de contacto:</strong> +52 (722) 936-96-65
          </p>
          <p class="email">
            <strong>Correo electrónico:</strong> contacto@turing-ia.com
          </p>
          <h2 class="name-brand">Síguenos en nuestras redes</h2>
          <div class="social-networks">
            <v-icon class="icon-network">mdi-linkedin</v-icon>
            <v-icon class="icon-network">mdi-instagram</v-icon>
            <v-icon class="icon-network">mdi-twitter</v-icon>
            <v-icon class="icon-network">mdi-facebook</v-icon>
          </div>
        </div>
      </v-col>
      <v-col cols="12" lg="4" xl="4" xxl="4">
        <div class="col-content">
          <h2 class="name-brand">Nuestros servicios</h2>
          <ul>
            <li>
              <a class="direct-link" href=""
                >Implementación de Proyectos (Business Analyst)</a
              >
            </li>
            <li><a class="direct-link" href="">Workshop (Blue Print)</a></li>
            <li><a class="direct-link" href="">Capacitación</a></li>
            <li><a class="direct-link" href="">Venta de Software</a></li>
            <li><a class="direct-link" href="">Venta de Hardware</a></li>
            <li>
              <a class="direct-link" href="">Desarrollo de Aplicaciones</a>
            </li>
            <li><a class="direct-link" href="">Balanced Scorecard</a></li>
          </ul>
        </div>
      </v-col>
      <v-col cols="12" lg="4" xl="4" xxl="4">
        <div class="col-content">
          <h2 class="name-brand">Inscríbete a nuestro newsletter</h2>
          <div class="suscribe">
            <v-text-field
              class="textfield"
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
              color="#fff"
            ></v-text-field>
            <v-btn>Suscribirse</v-btn>
          </div>
          <a class="privacy" href="">Aviso de privacidad</a>
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12">
        <p class="copyright">
          © Copyright Turing Inteligencia Artificial. Derechos reservados
        </p>
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
import { ref } from "vue";
const email = ref("");
const emailRules = [
  (v) => !!v || "E-mail is required",
  (v) => /.+@.+/.test(v) || "E-mail must be valid",
];
</script>
<style scoped>
.col-content {
  display: block;
  margin: 5vh auto;
  width: 60%;
}
.name-brand,
.address,
.phone,
.email {
  color: white;
  margin-top: 20px;
}

.direct-link {
  color: white;
  text-decoration: none;
}

ul {
  color: white;
}

li {
  margin-top: 10px;
}

.textfield {
  width: 90%;
}

.icon-network {
  color: white;
  font-size: 30px;
  margin-right: 10%;
  margin-top: 10px;
}

.icon-network:hover {
  cursor: pointer;
}

.privacy {
  text-decoration: none;
  color: white;
  font-size: 20px;
  line-height: 7;
}

.copyright {
  color: white;
  font-size: 20px;
  text-align: center;
  margin-bottom: 50px;
}
</style>

