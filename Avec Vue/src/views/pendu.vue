<template>
  <div>
    <h1>Jeu du pendu</h1>

    <p>
      <span v-for="(lettre, index) in motAffiche" :key="index">{{ lettre }} </span>
    </p>

    <input
      v-model="lettreProposee"
      @keyup.enter="proposerLettre"
      maxlength="1"
      placeholder="Propose une lettre"
      :disabled="jeuTermine"
    />
    <button @click="proposerLettre" :disabled="jeuTermine">Proposer</button>

    <p>Lettres déjà proposées : {{ lettresProposees.join(', ') }}</p>

    <p>Tentatives restantes : {{ tentatives }}</p>

    <p v-if="gagne"> Bravo ! Tu as gagné !</p>
    <p v-if="perdu"> Perdu ! Le mot était : {{ motSecret }}</p>

    <button @click="reinitialiser">Recommencer</button>
  </div>
  <div>
    <router-link to="/">Retour à l’accueil</router-link>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'

export default {
  setup() {
    const mots = [
      "POMME","CHAT","CHIEN","LIVRE","MAISON","VOITURE","ECOLE","TABLE","FLEUR","ARBRE",
      "ORDINATEUR","BIBLIOTHEQUE","AVENTURE","VACANCES","MUSIQUE","SPORTIF","CINÉMA","MONTAGNE","ETOILE","CUISINE",
      "DEVELOPPEMENT","COMPOSABLE","TRANSITION","REACTIVITE","PROGRAMMATION","CONSTRUCTION","NAVIGATION","SPECTACULAIRE","EXTRAORDINAIRE","ORGANISATION"
      ]

    const motSecret = ref('')

    motSecret.value = mots[Math.floor(Math.random() * mots.length)]
    
    const lettresProposees = ref([])

    const lettretapee = ref('')

    const tentatives = ref(6)

    const motAffiche = computed(() => {
      return motSecret.value.split('').map(l => 
        lettresProposees.value.includes(l.toUpperCase()) ? l : '_'
      )
    })

    const gagne = computed(() => !motAffiche.value.includes('_'))
    const perdu = computed(() => tentatives.value <= 0 && !gagne.value)
    const jeuTermine = computed(() => gagne.value || perdu.value)

    function proposerLettre() {
      const lettre = lettretapee.value.toUpperCase()
      if (!lettre || lettresProposees.value.includes(lettre)) {
        lettretapee.value = ''
        return
      }

      lettresProposees.value.push(lettre)

      if (!motSecret.value.includes(lettre)) {
        tentatives.value--
      }

      lettretapee.value = ''
    }

    watch(lettresProposees, (nouvelles) => {
      console.log('Lettres proposées :', nouvelles.join(', '))
    })

    function reinitialiser() {
      lettresProposees.value = []
      tentatives.value = 6
      lettretapee.value = ''
      motSecret.value = mots[Math.floor(Math.random() * mots.length)]
    }

    return {
      motSecret,
      motAffiche,
      lettresProposees,
      lettreProposee: lettretapee,
      tentatives,
      gagne,
      perdu,
      jeuTermine,
      proposerLettre,
      reinitialiser
    }
  }
}
</script>

<style>
input {
  margin-right: 10px;
  text-transform: uppercase;
  font-size: 1em;
}
button {
  margin-top: 10px;
}
p {
  font-size: 1.2em;
}
span {
  margin-right: 0.5em;
  font-size: 1.5em;
  font-weight: bold;
}
</style>
