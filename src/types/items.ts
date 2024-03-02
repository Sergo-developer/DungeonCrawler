import type { Ref } from 'vue';
export interface Quality {
  common: '#ffffff';
  uncommon: '#00ff15';
  rare: '#0033ff';
  epic: '#8e00ff';
  legendary: '#ff8300';
}
export interface Items {
  name: string;
  description: string;
  isStackable: boolean;
  count: number;
  quality: string;
  type: ItemType;
  image: string;
}

interface Weapon {
  name: 'weapon';
  damage: number;
  critChance: number;
  critMod: number;
}
interface Armor {
  name: 'helmet' | 'body' | 'pants' | 'ring' | 'jewerly';
  armor: number;
  intelligent: number;
  strength: number;
  agility: number;
  critChance: number;
  critMod: number;
}

interface Potion {
  name: 'potion';
  healthRestore: number;
}

type ItemType = Weapon | Potion | Armor;

export type SlotCount = Items | null;
export type InventoryItem = Ref<SlotCount>;
