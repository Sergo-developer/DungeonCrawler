import type { ComputedRef, Ref } from 'vue';
import type { Items, SlotCount } from '@/types/items';

export interface MapCoordinate {
  x: number;
  y: number;
}

export interface Enemy {
  name: string;
  description: string;
  health: number;
  armor: number;
  damage: number;
  xp: number;
  reward: string[];
  image: string;
}
export interface Chest {
  name: string;
  description: string;
  quality: string;
  reward: string[];
  image: string;
  isOpened?: boolean;
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

export type RoomType = 'enemy' | 'treasure' | 'empty';

export interface EnemyRoom {
  type: 'enemy';
  enemy: Enemy;
  isDefeated?: boolean;
}

export interface EmptyRoom {
  type: 'empty';
}
export interface TreasureRoom {
  type: 'treasure';
  treasure: Chest;
}

export type MapRoom = EnemyRoom | EmptyRoom | TreasureRoom | null;
export type PlayableRoom = EnemyRoom | EmptyRoom;
export type Map = MapRoom[][];

export interface State {
  logMessages: string[];
  addMessageToLog: (message: string) => void;
  rewardItems: [Items];
  openChest: (lootPool: [string]) => void;
  confirmEarnedItems: () => void;
  hoveredEnemy: Ref<Enemy | null>;
  getOnHoverEnemyInfo: (enemy: Enemy) => void;
  map: Ref<Map>;
  currentPosition: Ref<MapCoordinate>;
  currentRoom: ComputedRef<PlayableRoom>;
  movePosition: (x: number, y: number) => void;
  fightStep: () => void;
  player: Ref<Player>;
  pointsAddedByLevel: Ref<PointsAddedByLevel>;
  isFight: Ref<boolean>;
  isCrit: Ref<boolean>;
  totalPlayerDamageWatcher: Ref<number>;
  useItem: (i: number) => void;
  addItem: (itemToGet: Items[]) => void;
  inventoryItems: SlotCount;
  loadoutItems: SlotCount;
  unequipItem: (i: number) => void;
  hoveredItem: Ref<SlotCount>;
  getOnHoverItemInfo: (item: SlotCount) => void;
  getLootPool: (loot: string[]) => Items[];
  mapRefresh: () => void;
  floorCount: number;
}
