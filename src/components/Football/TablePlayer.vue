<script setup lang="ts">
import { reactive, watch, onMounted } from "vue";
import { Player } from "../../interfaces/player";
import { usePlayersStore } from "../../store/players";
const { players, setPlayers } = usePlayersStore();

const team1 = JSON.parse(localStorage.getItem("team1Players") || "[]");
const team2 = JSON.parse(localStorage.getItem("team2Players") || "[]");
onMounted(() => {
  if (team1 || team2) {
    console.log(team1, team2);
    setPlayers([...team1, ...team2]);
  }
});
watch(
  () => players,
  (players) => {
    console.log(players);
    setPlayers(players);
  }
);
const startDrag = (e: DragEvent, player: Player) => {
  e.dataTransfer?.setData(
    "text/plain",
    JSON.stringify({
      itemId: player.id,
    })
  );
  console.log(player);
};
</script>

<template>
  <h1 class="font-semibold text-xl mt-1 print:hidden">Tablero de jugadores</h1>
  <div class="relative flex justify-center print:hidden">
    <div
      class="md:min-w-[710px] md:w-[710px] flex w-full justify-start overflow-x-auto md:grid grid-cols-5 md:gap-y-1.5 md:absolute gap-2 md:pt-[68px] pt-5"
    >
      <div
        v-for="player in players"
        :key="player.id"
        @dragstart="startDrag($event, player)"
        class="flex flex-col items-center flex-shrink-0 w-20 md:w-auto"
        draggable="true"
      >
        <img
          :src="player.image"
          :alt="player.name"
          :class="[
            'w-20 h-20 rounded-full object-cover pointer-events-none border-4',
            player.team === 1 ? ' border-blue-500' : ' border-red-500',
          ]"
        />
        <p class="pt-2 font-semibold capitalize">{{ player.name }}</p>
        <p class="font-semibold">N° {{ player.number }}</p>
      </div>
    </div>
    <div class="md:block hidden">
      <svg
        width="100%"
        height="500px"
        viewBox="0 0 1936 1199"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="10"
          y="10"
          width="1916"
          height="1179"
          rx="110"
          fill="#263238"
          stroke="white"
          stroke-width="20"
        />
        <circle cx="290" cy="259" r="108.5" stroke="white" stroke-width="25" />
        <circle cx="290" cy="599" r="108.5" stroke="white" stroke-width="25" />
        <circle cx="290" cy="939" r="108.5" stroke="white" stroke-width="25" />
        <circle cx="634" cy="259" r="108.5" stroke="white" stroke-width="25" />
        <circle cx="634" cy="599" r="108.5" stroke="white" stroke-width="25" />
        <circle cx="634" cy="939" r="108.5" stroke="white" stroke-width="25" />
        <circle cx="978" cy="259" r="108.5" stroke="white" stroke-width="25" />
        <circle cx="978" cy="599" r="108.5" stroke="white" stroke-width="25" />
        <circle cx="978" cy="939" r="108.5" stroke="white" stroke-width="25" />
        <circle cx="1322" cy="259" r="108.5" stroke="white" stroke-width="25" />
        <circle cx="1322" cy="599" r="108.5" stroke="white" stroke-width="25" />
        <circle cx="1322" cy="939" r="108.5" stroke="white" stroke-width="25" />
        <circle cx="1666" cy="259" r="108.5" stroke="white" stroke-width="25" />
        <circle cx="1666" cy="599" r="108.5" stroke="white" stroke-width="25" />
        <circle cx="1666" cy="939" r="108.5" stroke="white" stroke-width="25" />
      </svg>
    </div>
  </div>
</template>

<style scoped></style>
