<script setup>
import CalcAge from '@/components/CalcAge.vue'
import DisplayAge from './components/DisplayAge.vue';
</script>

<template>
  <header>
    <div class="wrapper bg-[#c9a7cf]">
      
    </div>
  </header>
    
  <main>
    <CalcAge />
    <DisplayAge />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
