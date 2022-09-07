export interface Player {
  name: string;
  number: string;
  image: string;
  team: number;
  id: string;
}

export interface Team {
  name: string;
  image: string;
  id: string;
}

export interface PlayerSelected {
  name: string;
  number: string;
  image: string;
  team: number;
  id: string;
  position: number;
}

export interface Position {
  id: string;
  item: null | Player;
}

export interface FootballData {
  date: "";
  hour: "";
  stadium: "";
  city: "";
  country: "";
  referee: "";
}
