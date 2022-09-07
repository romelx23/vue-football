<script setup lang="ts"></script>

<template>
  <div
    class="flex justify-between items-center px-2 py-1 w-full bg-gray-800 shadow-md shadow-gray-700 print:hidden"
  >
    <router-link to="/" class="text-white hover:text-white">
      <h1 class="font-semibold">Futbol Corner ⚽</h1>
    </router-link>
    <div class="flex">
      <router-link
        to="/"
        class="px-2 py-1 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
        >Home
      </router-link>
      <router-link
        to="/tabla-de-posiciones"
        class="px-2 py-1 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
        >Tabla de posiciones
      </router-link>
    </div>
    <button class="btn__into">Ingresar</button>
  </div>
</template>

<style scoped></style>
