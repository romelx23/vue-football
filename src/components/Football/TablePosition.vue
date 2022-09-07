<script setup lang="ts">
import { reactive, ref } from "vue";
import { Player, PlayerSelected, Position } from "../../interfaces/player";
import { usePlayersStore } from "../../store/players";
// const position=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
const positionPlayers = reactive<Position[]>([
  {
    id: crypto.getRandomValues(new Uint8Array(4)).join(""),
    item: null,
  },
  {
    id: crypto.getRandomValues(new Uint8Array(4)).join(""),
    item: null,
  },
  {
    id: crypto.getRandomValues(new Uint8Array(4)).join(""),
    item: null,
  },
  {
    id: crypto.getRandomValues(new Uint8Array(4)).join(""),
    item: null,
  },
  {
    id: crypto.getRandomValues(new Uint8Array(4)).join(""),
    item: null,
  },
  {
    id: crypto.getRandomValues(new Uint8Array(4)).join(""),
    item: null,
  },
  {
    id: crypto.getRandomValues(new Uint8Array(4)).join(""),
    item: null,
  },
  {
    id: crypto.getRandomValues(new Uint8Array(4)).join(""),
    item: null,
  },
  {
    id: crypto.getRandomValues(new Uint8Array(4)).join(""),
    item: null,
  },
  {
    id: crypto.getRandomValues(new Uint8Array(4)).join(""),
    item: null,
  },
  {
    id: crypto.getRandomValues(new Uint8Array(4)).join(""),
    item: null,
  },
  {
    id: crypto.getRandomValues(new Uint8Array(4)).join(""),
    item: null,
  },
  {
    id: crypto.getRandomValues(new Uint8Array(4)).join(""),
    item: null,
  },
  {
    id: crypto.getRandomValues(new Uint8Array(4)).join(""),
    item: null,
  },
  {
    id: crypto.getRandomValues(new Uint8Array(4)).join(""),
    item: null,
  },
  {
    id: crypto.getRandomValues(new Uint8Array(4)).join(""),
    item: null,
  },
  {
    id: crypto.getRandomValues(new Uint8Array(4)).join(""),
    item: null,
  },
  {
    id: crypto.getRandomValues(new Uint8Array(4)).join(""),
    item: null,
  },
]);
// const playersSelected = ref<Player[]>([]);
const { players } = usePlayersStore();

const onDrop = (e: DragEvent, id: string) => {
  e.preventDefault();
  const data = e.dataTransfer?.getData("text");
  if (data) {
    const player = JSON.parse(data);
    console.log(player);
    const playerSelected = players.find((p) => p.id === player.itemId);
    if (playerSelected) {
      // if (playersSelected.value.includes(playerSelected)) {
      //   const playerRepeat = playersSelected.value.filter(
      //     (p) => p.id !== playerSelected.id
      //   );
      //   playersSelected.value.slice(position, 1);
      // }
      // playersSelected.value[position] = playerSelected;
      const playerPosition = positionPlayers.find((p) => p.id === id);
      if (playerPosition) {
        const playerRepeat = positionPlayers.filter(
          (p) => p.id !== playerPosition.id
        );
        if (playerRepeat.length > 0) {
          console.log("repeat");
          playerPosition.item = playerSelected;
        }
        playerPosition.item = playerSelected;
      }
      console.log(playerPosition);
    }
  }
};

// const deletePlayer = (player: Player) => {
const deletePlayer = (id: string) => {
  // const playerRepeat = playersSelected.value.filter((p) => {
  //   console.log(p.id, player.id);
  //   return p.id !== player.id;
  // });
  // playersSelected.value = playerRepeat;
  // playersSelected.value.splice(position, 1);
  // console.log(playersSelected.value);
  const playerPosition = positionPlayers.find((p) => p.id === id);
  if (playerPosition) {
    playerPosition.item = null;
  }
  console.log(playerPosition);
};

// const startDrag = (e: DragEvent, player: Player) => {
const startDrag = (e: DragEvent, id: string) => {
  e.dataTransfer?.setData(
    "text/plain",
    JSON.stringify({
      itemId: id,
    })
  );
  console.log(id);
};
</script>

<template>
  <h1 class="font-semibold text-xl mt-1">Tablero de pocisiones</h1>
  <div class="md:flex print:flex justify-center print:scale-90 hidden">
    <div
      class="w-full md:w-[600px] md:min-w-[600px] grid grid-cols-3 md:grid-cols-6 print:grid-cols-6 gap-y-8 gap-x-2 absolute pt-[78px] place-items-center"
    >
      <div
        v-for="pos in positionPlayers"
        :key="pos.id"
        @drop="onDrop($event, pos.id)"
        @dragover.prevent
        @dragenter.prevent
        class="border-8 border-gray-800 rounded-full w-24 h-24"
      >
        <div
          v-if="pos.item"
          class="flex flex-col items-center justify-center relative"
        >
          <div @dragstart="startDrag($event, pos.item!.id)">
            <button
              @click="deletePlayer(pos.id)"
              class="w-8 h-8 absolute rounded-full bg-red-500 text-white right-0 transition hover:scale-90 print:hidden"
            >
              <i class="fas fa-times"></i>
            </button>
            <img
              :src="pos.item?.image"
              :class="[
                'w-20 h-20 rounded-full border-4',
                pos.item.team === 1 ? 'border-blue-600' : 'border-red-600',
              ]"
            />
            <h1
              class="text-gray-800 text-sm text-center font-semibold pt-2 capitalize"
            >
              N°{{ pos.item.number }} {{ pos.item?.name }}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pb-10 print:block md:h-[500px] h-auto">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1936 1199"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="10"
        y="10"
        width="1916"
        height="1179"
        rx="269"
        fill="#6AAC4B"
        stroke="white"
        stroke-width="20"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1742.58 175.202C1734.29 174.681 1725.94 174.417 1717.52 174.417C1492.04 174.417 1309.25 364.061 1309.25 598C1309.25 831.939 1492.04 1021.58 1717.52 1021.58C1725.94 1021.58 1734.29 1021.32 1742.58 1020.8V995.742C1734.3 996.3 1725.94 996.583 1717.52 996.583C1506.71 996.583 1334.25 819.007 1334.25 598C1334.25 376.993 1506.71 199.417 1717.52 199.417C1725.94 199.417 1734.3 199.7 1742.58 200.257V175.202Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M193.416 1020.8C201.705 1021.32 210.061 1021.58 218.477 1021.58C443.96 1021.58 626.75 831.939 626.75 598C626.75 364.062 443.96 174.417 218.477 174.417C210.061 174.417 201.705 174.681 193.416 175.202V200.258C201.703 199.7 210.059 199.417 218.477 199.417C429.293 199.417 601.75 376.993 601.75 598C601.75 819.007 429.293 996.584 218.477 996.584C210.059 996.584 201.703 996.301 193.416 995.743V1020.8Z"
        fill="white"
      />
      <rect
        x="159"
        y="101"
        width="1618"
        height="995.083"
        rx="177"
        stroke="white"
        stroke-width="20"
      />
      <circle
        cx="967.999"
        cy="598"
        r="118.583"
        stroke="white"
        stroke-width="25"
      />
      <rect x="957.168" y="91" width="21.6667" height="1015.08" fill="white" />
    </svg>
  </div>
</template>

<style scoped></style>
