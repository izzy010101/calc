<script setup>

const props = defineProps({
  buttonText: String,
  calculateAge: Function
});


</script>

<template>
    <button @click="calculateAge" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-[300px] dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">{{ buttonText }}</button>
</template>

<style scoped>

</style>