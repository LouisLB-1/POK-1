<template>
  <div>
    <p v-if="connecté">Bienvenue, utilisateur !</p>
    <p v-else>Veuillez vous connecter.</p>
    <button @click="connecté = !connecté">Changer l'état</button>
  </div>
  <div>
    <router-link to="/">Retour à l’accueil</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      connecté: false
    }
  }
}
</script>