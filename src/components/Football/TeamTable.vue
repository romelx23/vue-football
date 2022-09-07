<script setup lang="ts">
import { usePlayersStore } from "../../store/players";

const { teams } = usePlayersStore();
console.log(teams);
</script>

<template>
  <h1 v-if="teams.length > 0" class="font-semibold text-xl mt-1 ml-2">
    Equipos Enfrentados
  </h1>
  <div v-if="teams.length > 0" class="relative flex justify-center gap-4">
    <div
      v-for="(team, index) in teams"
      :key="team.id"
      class="flex flex-col items-center"
    >
      <img
        :src="team.image"
        :alt="team.name"
        :class="[
          'w-24 h-24 rounded-full object-cover pointer-events-none border-4',
          index === 1 ? 'border-blue-500' : 'border-red-500',
        ]"
      />
      <p class="pt-2 font-semibold capitalize">{{ team.name }}</p>
    </div>
  </div>
</template>

<style scoped></style>
