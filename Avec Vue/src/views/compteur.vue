<template>
  <div>
    <p>Compteur : {{ appState.compteur }}</p>
    <button @click="incrementer">+1</button>
  </div>
  <div>
    <router-link to="/">Retour à l’accueil</router-link>
  </div>
</template>

<script>
import { appState, incrementer } from '../state.js'

export default {
  setup() {
    return { appState, incrementer }
  }
}
</script>