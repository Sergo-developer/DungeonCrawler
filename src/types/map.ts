import type { ComputedRef, Ref } from 'vue';

export interface MapCoordinate {
  x: number;
  y: number;
}

export interface Enemy {
  name: string;
  health: number;
  armor: number;
  damage: number;
  xp: number;
  image: string;
}
export interface Player {
  level: number;
  experience: number;
  health: number;
  maxHealth: number;
  strength: number;
  intelligent: number;
  statsPoint: number;
  critChance: number;
  critMod: number;
  damage: number;
  armor: number;
  agility: number;
}

export interface PointsAddedByLevel {
  intelligent: number;
  strength: number;
  agility: number;
}
export interface Type {
  name: string;
  image: string;
}

export interface EnemyRoom {
  type: Type;
  isDefeated?: boolean;
  enemy: Enemy;
}

export interface StartRoom {
  type: Type;
}

export type MapRoom = EnemyRoom | StartRoom | null;
export type PlayableRoom = EnemyRoom | StartRoom;
export type Map = MapRoom[][];

export interface State {
  map: Ref<Map>;
  currentPosition: Ref<MapCoordinate>;
  currentRoom: ComputedRef<PlayableRoom>;
  movePosition: (x: number, y: number) => void;
  fightStep: () => void;
  player: Ref<Player>;
  pointsAddedByLevel: Ref<PointsAddedByLevel>;
  isFight: Ref<boolean>;
  totalPlayerDamage: Ref<number>;
}
