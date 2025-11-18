<template>
  <div>
    <h1>Accueil</h1>
    <ul>
      <li><router-link to="/if">If</router-link></li>
      <li><router-link to="/for">For</router-link></li>
      <li><router-link to="/model">Model</router-link></li>
      <li><router-link to="/compteur">Compteur</router-link></li>
      <li><router-link to="/watcher">Watcher</router-link></li>
      <li><router-link to="/dynamic">Dynamic</router-link></li>
      <li><router-link to="/pendu">Pendu</router-link></li>
    </ul>
  </div>
  <div>
    <p>Compteur : {{ appState.compteur }}</p>
    <button @click="incrementer">+1</button>
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