<script setup lang="ts">
import { ref } from "vue";
import { usePlayersStore } from "../../store/players";

const { footballData } = usePlayersStore();
const show = ref(false);
const showInfo = () => {
  show.value = !show.value;
};
</script>

<template>
  <div class="fixed top-16 right-4 z-20">
    <button
      @click="showInfo"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute right-0"
    >
      <i class="fa-solid fa-info"></i>
    </button>
    <div
      v-if="show"
      class="w-72 h-72 flex justify-center items-center bg-gray-700 rounded-md absolute top-4 right-12"
    >
      <p class="font-semibold" v-if="!footballData">No hay datos del Partido</p>
      <div
        class="flex flex-col gap-3 px-4 py-5 h-full font-semibold"
        v-if="footballData"
      >
        <div class="flex justify-center col-span-2">
          <p class="">Datos Generales del Partido</p>
        </div>
        <div class="flex justify-between gap-4">
          <p class="">Estadio:</p>
          <p class="">{{ footballData.stadium }}</p>
        </div>
        <div class="flex justify-between">
          <p class="">Referí:</p>
          <p class="">{{ footballData.referee }}</p>
        </div>
        <div class="flex justify-between">
          <p class="">ciudad:</p>
          <p class="">{{ footballData.city }}</p>
        </div>
        <div class="flex justify-between">
          <p class="">país:</p>
          <p class="">{{ footballData.country }}</p>
        </div>
        <div class="flex justify-between">
          <p class="">Fecha:</p>
          <p class="">{{ footballData.date }}</p>
        </div>
        <div class="flex justify-between">
          <p class="">{{ footballData.hour }}</p>
          <p class="">Hora:</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
