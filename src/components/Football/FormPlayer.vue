<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { Player, FootballData } from "../../interfaces/player";
import { usePlayersStore } from "../../store/players";

// v-model inputs
const footballData = ref<FootballData>({
  date: "",
  hour: "",
  stadium: "",
  city: "",
  country: "",
  referee: "",
});

const footballTeams = ref([
  {
    team1: "",
    teamImage1: "",
  },
  {
    team2: "",
    teamImage2: "",
  },
]);

const show = ref(false);
const team1Players = ref<Player[]>([]);
const team2Players = ref<Player[]>([]);

const { setPlayers, setTeams, setFootballData } = usePlayersStore();
const showForm = () => {
  show.value = !show.value;
  console.log(show.value);
};
const addPlayer = (team: number) => {
  if (team === 1) {
    if (team1Players.value.length < 10)
      team1Players.value.push({
        name: "",
        number: "",
        image: "",
        team: 1,
        id: crypto.getRandomValues(new Uint8Array(4)).join(""),
      });
  } else {
    if (team2Players.value.length < 10)
      team2Players.value.push({
        name: "",
        number: "",
        image: "",
        team: 2,
        id: crypto.getRandomValues(new Uint8Array(4)).join(""),
      });
  }
};

const deletePlayer = (team: number, id: string) => {
  if (team === 1) {
    team1Players.value = team1Players.value.filter(
      (player) => player.id !== id
    );
  } else {
    team2Players.value = team2Players.value.filter(
      (player) => player.id !== id
    );
  }
};
const team1LocalStorage = JSON.parse(
  localStorage.getItem("team1Players") || "[]"
);
const team2LocalStorage = JSON.parse(
  localStorage.getItem("team2Players") || "[]"
);

const teamData = JSON.parse(localStorage.getItem("teamData") || "[]");
const footballDataLocalStorage = JSON.parse(
  localStorage.getItem("footballData") || "{}"
);

const savePlayers = (team: number) => {
  // guardando los jugadores en el localstorage y en el store
  if (team === 1) {
    localStorage.setItem("team1Players", JSON.stringify(team1Players.value));
  } else {
    localStorage.setItem("team2Players", JSON.stringify(team2Players.value));
  }
  setPlayers([...team1Players.value, ...team2Players.value]);
  // guardando los equipos en el store
  const [team1, team2] = footballTeams.value;
  localStorage.setItem("teamData", JSON.stringify(footballTeams.value));
  setTeams([
    {
      name: team1.team1 || "",
      image: team1.teamImage1 || "",
      id: crypto.getRandomValues(new Uint8Array(4)).join(""),
    },
    {
      name: team2.team2 || "",
      image: team2.teamImage2 || "",
      id: crypto.getRandomValues(new Uint8Array(4)).join(""),
    },
  ]);
  // guardando informacion del partido
  setFootballData(footballData.value);
  localStorage.setItem("footballData", JSON.stringify(footballData.value));
};

onMounted(() => {
  if (team1LocalStorage || team2LocalStorage) {
    team1Players.value = team1LocalStorage;
    team2Players.value = team2LocalStorage;
  }
  if (teamData.length > 0) {
    footballTeams.value = teamData;
    setTeams([
      {
        name: footballTeams.value[0].team1 || "",
        image: footballTeams.value[0].teamImage1 || "",
        id: crypto.getRandomValues(new Uint8Array(4)).join(""),
      },
      {
        name: footballTeams.value[1].team2 || "",
        image: footballTeams.value[1].teamImage2 || "",
        id: crypto.getRandomValues(new Uint8Array(4)).join(""),
      },
    ]);
  }
  if (footballDataLocalStorage) {
    console.log(footballDataLocalStorage, "footballDataLocalStorage");
    footballData.value = footballDataLocalStorage;
    setFootballData(footballData.value);
  }
});
</script>

<template>
  <div class="min-h-[80vh]">
    <h1 class="text-blue-500 font-semibold text-2xl">Ingrese los equipos</h1>
    <a href="" @click.prevent="showForm">Ingresar datos adicionales?</a>
    <p
      :class="[
        'font-semibold transition delay-100',
        show ? 'block h-full opacity-100' : 'h-0 overflow-hidden opacity-0',
      ]"
    >
      Datos Generales del partido:
    </p>
    <form action="" @submit.prevent="">
      <div
        :class="[
          'grid md:grid-cols-2 grid-cols-1 gap-2 transition delay-100',
          show ? 'block h-full opacity-100' : 'h-0 overflow-hidden opacity-0',
        ]"
      >
        <div class="content__input">
          <label for="date">Fecha</label>
          <input
            type="date"
            id="date"
            v-model="footballData.date"
            class="border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div class="content__input">
          <label for="hour">Hora</label>
          <input
            type="time"
            id="hour"
            v-model="footballData.hour"
            class="border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div class="content__input">
          <label for="stadium">Estadio</label>
          <input
            type="text"
            id="stadium"
            v-model="footballData.stadium"
            class="border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div class="content__input">
          <label for="city">Ciudad</label>
          <input
            type="text"
            id="city"
            v-model="footballData.city"
            class="border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div class="content__input">
          <label for="country">País</label>
          <input
            type="text"
            id="country"
            v-model="footballData.country"
            class="border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div class="content__input">
          <label for="referee">Árbitro</label>
          <input
            type="text"
            id="referee"
            v-model="footballData.referee"
            class="border border-gray-300 p-2 rounded-md"
          />
        </div>
      </div>
      <p class="font-semibold">Datos de los Equipos:</p>
      <div class="flex gap-2 flex-col md:flex-row">
        <div class="flex flex-grow flex-col md:w-1/2">
          <label for="team1">Equipo 1</label>
          <input
            type="text"
            id="team1"
            v-model="footballTeams[0].team1"
            class="border border-gray-300 p-2 rounded-md"
          />
          <label for="team1">Imagen del Equipo 1</label>
          <input
            type="text"
            id="teamImage1"
            v-model="footballTeams[0].teamImage1"
            class="border border-gray-300 p-2 rounded-md"
          />
          <img
            class="w-36 mt-2 rounded-md sm:max-w-[200px] h-36 object-cover"
            :src="
              footballTeams[0].teamImage1
                ? footballTeams[0].teamImage1
                : 'https://teddytennis.com/cyprus/wp-content/uploads/sites/76/2017/11/placeholder-150x150.png'
            "
            alt="foto-equipo"
            title="foto-del-equipo"
          />
          <button @click="addPlayer(1)" class="btn__added">
            Agregar Jugador
            <i class="fa-solid fa-person-circle-plus"></i>
          </button>
          <p class="font-semibold mt-1">Jugadores del equipo 1:</p>
          <p>cantidad:{{ team1Players.length }}</p>
          <div class="flex flex-col md:flex-row md:overflow-auto w-full">
            <div
              v-for="(player, index) in team1Players"
              :key="index"
              class="flex flex-col gap-2 w-full min-w-full md:flex-row mt-1"
            >
              <div class="flex flex-col flex-1">
                <label for="team1">Nombre del Jugador</label>
                <input
                  type="text"
                  v-model="player.name"
                  class="border border-gray-300 p-2 rounded-md"
                />
                <label for="team1">Número del Jugador</label>
                <input
                  type="text"
                  v-model="player.number"
                  class="border border-gray-300 p-2 rounded-md"
                />
                <label for="team1">Imagen del Jugador</label>
                <input
                  type="text"
                  v-model="player.image"
                  class="border border-gray-300 p-2 rounded-md"
                />
              </div>
              <div class="flex flex-col relative">
                <button @click="deletePlayer(1, player.id)" class="btn__delete">
                  X
                </button>
                <p class="font-semibold pt-3">jugador {{ index + 1 }}</p>
                <img
                  class="w-full mt-2 rounded-md max-w-[200px] md:w-32 h-32 object-cover"
                  :src="
                    player.image
                      ? player.image
                      : 'https://teddytennis.com/cyprus/wp-content/uploads/sites/76/2017/11/placeholder-150x150.png'
                  "
                  alt="foto-jugador"
                  title="foto-del-jugador"
                />
              </div>
            </div>
          </div>
          <button
            v-if="team1Players.length !== 0"
            @click="savePlayers(1)"
            class="btn__added"
          >
            Guardar Equipo 1
            <i class="fa-solid fa-floppy-disk"></i>
          </button>
        </div>
        <div class="flex flex-grow flex-col md:w-1/2">
          <label for="team2">Equipo 2</label>
          <input
            type="text"
            id="team2"
            v-model="footballTeams[1].team2"
            class="border border-gray-300 p-2 rounded-md"
          />
          <label for="team2">Imagen del Equipo 2</label>
          <input
            type="text"
            id="teamImage2"
            v-model="footballTeams[1].teamImage2"
            class="border border-gray-300 p-2 rounded-md"
          />
          <img
            class="w-36 mt-2 rounded-md md:max-w-[200px] h-36 object-cover"
            :src="
              footballTeams[1].teamImage2
                ? footballTeams[1].teamImage2
                : 'https://teddytennis.com/cyprus/wp-content/uploads/sites/76/2017/11/placeholder-150x150.png'
            "
            alt="foto-equipo"
            title="foto-del-equipo"
          />
          <button @click="addPlayer(2)" class="btn__added2">
            Agregar Jugador <i class="fa-solid fa-person-circle-plus"></i>
          </button>
          <p class="font-semibold mt-1">Jugadores del equipo 2:</p>
          <p>cantidad:{{ team2Players.length }}</p>
          <div class="flex flex-col md:flex-row md:overflow-auto w-full">
            <div
              v-for="(player, index) in team2Players"
              :key="index"
              class="flex flex-col gap-2 w-full min-w-full md:flex-row mt-1"
            >
              <div class="flex flex-col flex-1">
                <label for="team1">Nombre del Jugador</label>
                <input
                  type="text"
                  v-model="player.name"
                  class="border border-gray-300 p-2 rounded-md"
                />
                <label for="team1">Número del Jugador</label>
                <input
                  type="text"
                  v-model="player.number"
                  class="border border-gray-300 p-2 rounded-md"
                />
                <label for="team1">Imagen del Jugador</label>
                <input
                  type="text"
                  v-model="player.image"
                  class="border border-gray-300 p-2 rounded-md"
                />
              </div>
              <div class="flex flex-col relative">
                <button class="btn__delete" @click="deletePlayer(2, player.id)">
                  X
                </button>
                <p class="font-semibold pt-3">jugador {{ index + 1 }}</p>
                <img
                  class="w-full mt-2 rounded-md max-w-[200px] md:w-32 h-32 object-cover"
                  :src="
                    player.image
                      ? player.image
                      : 'https://teddytennis.com/cyprus/wp-content/uploads/sites/76/2017/11/placeholder-150x150.png'
                  "
                  alt="foto-jugador"
                  title="foto-del-jugador"
                />
              </div>
            </div>
          </div>
          <button
            v-if="team2Players.length !== 0"
            @click="savePlayers(2)"
            class="btn__added2"
          >
            Guardar Equipo 2
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
