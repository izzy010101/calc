import { defineStore } from "pinia";
import { ref } from 'vue'

export let useCalcStore = defineStore('calc', () => {
  const age = ref(null)
  const error = ref(null)

  const setAge = ({ years, months, days }) => {
    age.value = { years, months, days }
  }

  const clearError = () => {
    error.value = null
  }

  const setError = (message) => {
    error.value = message
  }

  return {
    age,
    error,
    setAge,
    clearError,
    setError
  }
})

