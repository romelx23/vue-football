import { defineStore } from "pinia";
import { FootballData, Player, Team } from "../interfaces/player";

export const usePlayersStore = defineStore("players", {
  state: () => ({
    players: [] as Player[],
    teams: [] as Team[],
    footballData: null as FootballData | null,
    loading: false,
    error: null as string | null,
  }),
  getters: {
    getPlayers(state) {
      return state.players;
    },
  },
  actions: {
    setPlayers(players: Player[]) {
      this.players = players;
    },
    setTeams(teams: Team[]) {
      this.teams = teams;
    },
    setFootballData(footballData: FootballData) {
      this.footballData = footballData;
    },
    async fetchPlayers() {
      // this.loading=true
      // try{
      //     const response=await fetch('https://api.jsonbin.io/b/60d3b3f3b3e5577e824d4d4e')
      //     const data=await response.json()
      //     this.players=data
      // }catch(err){
      //     this.error=err.message
      // }finally{
      //     this.loading=false
      // }
    },
  },
});
