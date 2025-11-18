<template>
  <div>
    <input v-model="nom" placeholder="Entre ton nom">
    <p>Bonjour {{ nom }}</p>
  </div>
  <div>
    <router-link to="/">Retour à l’accueil</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nom: ""
    }
  }
}
</script>