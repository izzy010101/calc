<script setup>
import { ref } from 'vue';
import CalcButton from '@/components/CalcButton.vue'
import { useCalcStore } from '@/stores/calcStore.js'

const store = useCalcStore();

const year = ref('');
const month = ref('');
const day = ref('');



const calculateAge = () => {

            if (!day.value || !month.value || !year.value) {
            store.setError( 'Please enter valid day, month, and year.');
            return
            } 


            // Convert input values to numbers
            const inputDay = parseInt(day.value);
            const inputMonth = parseInt(month.value);
            const inputYear = parseInt(year.value);

            const birthDate = new Date(inputYear + '-' + inputMonth + '-' + inputDay);

            if(inputYear < 1920 || inputYear > 2024) {
                store.setError("Year must be between 1920 and 2024.")
                return
            }

            if (isNaN(birthDate.getTime()) ) {
                store.setError( 'Invalid date. Please enter a valid date.');                
                return
            } 
  

            // Get current date
            const currentDate = new Date();

            // Calculate differences
            let years = currentDate.getFullYear() - birthDate.getFullYear();

            let months = currentDate.getMonth() - birthDate.getMonth();

            let days = currentDate.getDate() - birthDate.getDate();

            if (days < 0) {
                months -= 1;
                const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
                days += prevMonth.getDate();
            }

            // Adjust if the birth month is greater than the current month
            if (months < 0) {
                years -= 1;
                months += 12;
            }


            store.setAge({years, months, days})  
            store.clearError(); 

    
   
};



</script>

<template>
    <h1 class="mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Age Calculator</h1>
    <div class="flex flex-col gap-4">
        <input 
            type="number" 
            v-model="year" 
            name="year" 
            placeholder="Write year of your birth!" 
            class="mb-2 text-sm font-medium text-gray-900 w-[300px] h-[40px] border-4 rounded-xl"
        >

        <input 
            type="number" 
            v-model="month" 
            name="month" 
            placeholder="Write month of your birth!" 
            class="mb-2 text-sm font-medium text-gray-900 w-[300px] h-[40px] border-4 rounded-xl"
        >

        <input 
            type="number" 
            v-model="day" 
            name="day" 
            placeholder="Write day of your birth!" 
            class="mb-2 text-sm font-medium text-gray-900 w-[300px] h-[40px] border-4 rounded-xl"
        >
      

        <CalcButton 
            :buttonText="'Display Your Age'" 
            :calculateAge="calculateAge" 
        />
   
    </div>
</template>

<style scoped>

</style>