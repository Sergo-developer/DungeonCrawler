import { items } from '@/stores/itemsDatabase';

export const commonChest = ['knife', 'Claymore', 'Ordinary sword'];

export const getLootPool = (loot: string[]) => {
  const lootpool = [];

  for (let i = 0; i < loot.length; i++) {
    lootpool[i] = structuredClone(items).find((it) => (it.name = loot[i]));
  }

  return lootpool;
};
