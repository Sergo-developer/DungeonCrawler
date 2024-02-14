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
}

export interface EnemyRoom {
  type: 'enemy';
  isDefeated?: boolean;
  enemies: Enemy[];
}

export interface StartRoom {
  type: 'start';
}

export type MapRoom = EnemyRoom | StartRoom | null;
export type PlayableRoom = EnemyRoom | StartRoom;
export type Map = MapRoom[][];

export interface State {
  map: Ref<Map>;
  currentPosition: Ref<MapCoordinate>;
  currentRoom: ComputedRef<PlayableRoom>;
  movePosition: (x: number, y: number) => void;
}
