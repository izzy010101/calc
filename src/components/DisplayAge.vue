<script setup>
import { useCalcStore } from '@/stores/calcStore.js';
import ConfettiExplosion from "vue-confetti-explosion";


let store = useCalcStore();


</script>


<template>
    <div>
      <div v-if="store.age" class="text-xl">
        
        You are {{ store.age.years }} years, {{ store.age.months }} months, and {{ store.age.days }} days old.

        <ConfettiExplosion />
      </div>
      <div v-if="store.error" class="text-red-600 text-lg">
        {{ store.error }}
      </div>
    </div>
</template>


<style scoped>
</style>
  

  