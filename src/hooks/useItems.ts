import type { Items, SlotCount } from '@/types/items';
import { ref } from 'vue';

export const useItems = () => {
  const slotCount: SlotCount[] = new Array(35).fill(null);

  const inventoryItems = ref(slotCount);
  const loadoutItems = ref([null, null, null, null, null, null]);

  const useItem = (i: number) => {
    if (inventoryItems.value[i] != null) {
      if (inventoryItems.value[i]?.type === 'weapon') {
        loadoutItems.value[5] = inventoryItems.value[i];
        inventoryItems.value[i] = null;
        console.log(loadoutItems.value);
      }
    }
  };

  const addItem = (itemToGet: Items[]) => {
    console.log(itemToGet);

    for (let e = 0; e < itemToGet.length; e++) {
      for (let i = 0; i < inventoryItems.value.length; i++) {
        if (inventoryItems.value[i]?.name === itemToGet[e].name && itemToGet[e].isStackable) {
          (inventoryItems.value[i] as Items).count += 1;

          break;
        } else if (inventoryItems.value[i] === null) {
          inventoryItems.value[i] = itemToGet[e];

          break;
        }
      }
    }
  };

  return { useItem, addItem, inventoryItems, loadoutItems };
};
