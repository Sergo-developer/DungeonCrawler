import { inject, ref } from 'vue';
import type { Chest, Enemy, State } from '@/types/map';
import { randomRange } from '@/utils/random-range';
import { qualityRarity } from '@/stores/itemsDatabase';

export const useReward = (currentRoom, addItem, getLootPool) => {
  const rewardItems = ref([]);
  const isReward = ref(false);
  const hoveredChest = ref();

  const getOnHoverChestInfo = (chest: Chest) => {
    hoveredChest.value = chest;
  };

  const openChest = (lootPool: [string]) => {
    const loot = getLootPool(lootPool);
    let inChestLootCount = 0;

    rewardItems.value = [];

    while (inChestLootCount <= randomRange(0, 2)) {
      const randomLootToGet = loot[randomRange(0, loot.length - 1)];

      if (randomRange(0, 100) <= qualityRarity[randomLootToGet.quality]) {
        rewardItems.value[inChestLootCount] = randomLootToGet;
        inChestLootCount += 1;
      }
    }

    if (currentRoom.value.treasure != null) {
      currentRoom.value.treasure.isOpened = true;
    }

    isReward.value = true;
  };

  const confirmEarnedItems = () => {
    isReward.value = false;
    addItem(rewardItems.value);

    if (currentRoom.value.type === 'treasure') {
      currentRoom.value.type = 'empty';
    }
  };

  return { openChest, confirmEarnedItems, rewardItems, isReward, hoveredChest, getOnHoverChestInfo };
};
