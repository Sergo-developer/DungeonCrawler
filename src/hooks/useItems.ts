import type { Items, SlotCount } from '@/types/items';
import { ref } from 'vue';
import type { Player, State } from '@/types/map';
import type { Ref } from 'vue';

export const useItems = (player: Ref<Player>) => {
  const slotCount: SlotCount[] = new Array(35).fill(null);

  const inventoryItems = ref(slotCount);
  const loadoutItems = ref([null, null, null, null, null, null]);
  const itemTypesToEquip = ['helmet', 'body', 'pants', 'ring', 'jewerly', 'weapon'];

  const hoveredItem = ref<SlotCount>();

  const getOnHoverItemInfo = (item: SlotCount) => {
    hoveredItem.value = item;
  };

  const useItem = (i: number) => {
    if (inventoryItems.value[i] != null) {
      for (let j = 0; j < itemTypesToEquip.length; j++) {
        if (inventoryItems.value[i]?.type.name === itemTypesToEquip[j]) {
          equipItems(i, j);
        }
      }

      if (inventoryItems.value[i]?.type.name === 'potion') {
        usePotion(i);
      }
    }
  };

  const usePotion = (inventorySlot: number) => {
    if (
      player.value.health + inventoryItems.value[inventorySlot]?.type.healthRestore >
      player.value.maxHealth
    ) {
      player.value.health = player.value.maxHealth;
    } else {
      player.value.health += inventoryItems.value[inventorySlot]?.type.healthRestore;
    }

    inventoryItems.value[inventorySlot].count -= 1;

    if (inventoryItems.value[inventorySlot]?.count <= 0) {
      inventoryItems.value[inventorySlot] = null;
    }
  };

  const equipItems = (inventorySlot: number, loadoutSlot: number) => {
    const invItem = inventoryItems.value[inventorySlot];

    inventoryItems.value[inventorySlot] = null;

    if (loadoutItems.value[loadoutSlot] != null) {
      addItem([loadoutItems.value[loadoutSlot]]);
    }

    loadoutItems.value[loadoutSlot] = invItem;
  };

  const unequipItem = (i: number) => {
    if (loadoutItems.value[i] != null) {
      addItem([loadoutItems.value[i]]);
      loadoutItems.value[i] = null;
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

  return {
    useItem,
    addItem,
    inventoryItems,
    loadoutItems,
    unequipItem,
    hoveredItem,
    getOnHoverItemInfo,
  };
};
