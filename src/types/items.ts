import type { Ref } from 'vue';
export interface Quality {
  common: '#ffffff';
  uncommon: '#00ff15';
  rare: '#0033ff';
  epic: '#8e00ff';
  legendary: '#ff8300';
}
export interface Items {
  name: ItemsName;
  description: string;
  isStackable: boolean;
  count: number;
  quality: string;
  type: ItemType;
  image: string;
  feature?: string;
}

type ItemsName =
  | 'Oblivion potion'
  | 'Knife'
  | 'Pickaxe'
  | 'Battle axe'
  | 'Broken sword'
  | 'Antique sword'
  | 'Falshion'
  | 'Spider`s torn'
  | 'Rune sword'
  | 'Сlaymore'
  | 'Small potion'
  | 'Medium potion'
  | 'Huge potion'
  | 'Leather helmet'
  | 'Leather pants'
  | 'Leather jacket'
  | 'Spider helmet'
  | 'Spider pants'
  | 'Spider jacket'
  | 'Bowler hat'
  | 'Torn pants'
  | 'Metal chest plate'
  | 'Armored helmet'
  | 'Armored jacket'
  | 'Armored pants'
  | 'Redstone necklace'
  | 'Bluestone necklace'
  | 'Purplestone necklace'
  | 'M249-para'
  | 'Purplestone ring'
  | 'Bone amulet'
  | 'Spider`s heart'
  | 'Rusty tophelm'
  | 'Worn gorget'
  | 'Spider`s eye'
  | 'Poison saber';

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
export type LoadoutItems = Array<SlotCount>;
export type InventoryItem = Ref<SlotCount>;
