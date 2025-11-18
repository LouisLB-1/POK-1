<template>
  <div>
    <p :class="{ rouge: actif }">Texte coloré</p>
    <button @click="actif = !actif">Changer couleur</button>
  </div>
  <div>
    <router-link to="/">Retour à l’accueil</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return { actif: false }
  }
}
</script>

<style>
.rouge {
  color: red;
  font-weight: bold;
}
</style>
