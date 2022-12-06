<template>
  <!-- Es lo mismo que el <a></a> tag pero envez de canviar de pagina te mantienes en la misma a nivel interno, como SPA que es VEU. 
  El :to equivaldria al href -->
  <router-link :to="route">{{ buttonText }}</router-link> 

</template>

<script setup>
import { useLink } from 'vue-router';

defineProps({
  route: String,
  buttonText: String,
});

</script>

<!-- 
router -> Define las rutas
router-link -> Me dirije al componente, es decir,  Carga y renderiza el componente asociado para mostrarlo por una salida de router-view por defecto o por la salida con su mismo nombre.
router-view -> Me enseña el componente
 -->

<style></style>
