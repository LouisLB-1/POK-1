<template>
  <div>
    <h2>Biographie Watcher</h2>

    <textarea v-model="appState.bio" placeholder="Écris ta biographie..."></textarea>
    <p>{{ statut }}</p>
  </div>
  <div>
    <router-link to="/">Retour à l’accueil</router-link>
  </div>
</template>

<script>
import { appState } from '../state.js'
import { ref, watch } from 'vue'

export default {
  setup() {
    const statut = ref("Aucune modification.")
    const timer = ref(null)

    watch(
      () => appState.bio,
      (nouvelleBio) => {
        statut.value = "Modifications détectées... ⏳"
        clearTimeout(timer.value)
        timer.value = setTimeout(() => {
          statut.value = "Sauvegardée ✅"
          console.log("Bio sauvegardée :", nouvelleBio)
        }, 2000)
      }
    )

    return { appState, statut }
  }
}
</script>

<style>
textarea {
  width: 100%;
  height: 100px;
  margin-top: 10px;
  font-size: 1em;
}
</style>
