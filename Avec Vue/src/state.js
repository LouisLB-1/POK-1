import { reactive, watch } from 'vue'

export const appState = reactive({
  compteur: 0,
  bio: localStorage.getItem('bio') || ""
})

export function incrementer() {
  appState.compteur++
}

watch(
  () => appState.bio,
  (nouvelleBio) => {
    localStorage.setItem('bio', nouvelleBio)
  }
)