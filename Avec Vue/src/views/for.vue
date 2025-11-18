<template>
  <ul>
    <li v-for="eleve in eleveList" :key="eleve">{{ eleve }}</li>
  </ul>
  <div>
    <router-link to="/">Retour à l’accueil</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eleveList: ["Paul", "Jean", "Thomas"]
    }
  }
}
</script>
