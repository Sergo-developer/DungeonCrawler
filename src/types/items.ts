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
  type: string;
  image: string;
}

export type SlotCount = Items | null;
export type InventoryItem = Ref<SlotCount>;
