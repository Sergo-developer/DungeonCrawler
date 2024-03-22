import type { Items, LoadoutItems, SlotCount } from '@/types/items';
import { inject, ref, watch } from 'vue';
import type { Player, PointsAddedByLevel, State } from '@/types/map';
import type { Ref } from 'vue';
import { items } from '@/stores/itemsDatabase';

export const useItems = (
  player: Ref<Player>,
  pointsAddedByLevel: Ref<PointsAddedByLevel>,
  addMessageToLog,
) => {
  const slotCount: SlotCount[] = new Array(35).fill(null);

  const inventoryItems = ref(slotCount);
  const loadoutItems = ref<LoadoutItems>([null, null, null, null, null, null]);
  const itemTypesToEquip = ['helmet', 'body', 'pants', 'ring', 'jewerly', 'weapon'];
  const toDestroy = ref(false);

  const statsNames = [
    'armor',
    'damage',
    'critChance',
    'critMod',
    'intelligent',
    'strength',
    'agility',
  ];

  const hoveredItem = ref<SlotCount>();

  const getLootPool = (loot: string[]) => {
    return loot.map((el) => structuredClone(items.find((item) => item.name === el)));
  };

  watch(loadoutItems.value, () => {
    const itemsStats = {
      damage: 0,
      critChance: 0,
      critMod: 0,
      armor: 0,
      intelligent: 0,
      strength: 0,
      agility: 0,
    };

    for (let j = 0; j < loadoutItems.value.length; j++) {
      for (let i = 0; i < statsNames.length; i++) {
        if ((loadoutItems.value[j]?.type[statsNames[i]] as Items) != null) {
          itemsStats[statsNames[i]] += loadoutItems.value[j]?.type[statsNames[i]];
        }
      }
    }

    for (let i = 0; i < statsNames.length; i++) {
      itemsStats[statsNames[i]] += pointsAddedByLevel.value[statsNames[i]] | 0;
    }

    for (let i = 0; i < statsNames.length; i++) {
      player.value[statsNames[i]] = itemsStats[statsNames[i]];
    }
  });

  const getOnHoverItemInfo = (item: SlotCount) => {
    hoveredItem.value = item;
  };

  const useItem = (i: number) => {
    if (inventoryItems.value[i] != null) {
      if (toDestroy.value) {
        inventoryItems.value[i] = null;
      }

      for (let j = 0; j < itemTypesToEquip.length; j++) {
        if (inventoryItems.value[i]?.type.name === itemTypesToEquip[j]) {
          equipItems(i, j);
        }
      }

      if (inventoryItems.value[i]?.type.name === 'potion') {
        if (inventoryItems.value[i]?.feature === 'Resets upgraded skills') {
          useResetSkills();
          addMessageToLog('You forgot all the skills');
        }

        usePotion(i);
      }
    }
  };

  const useResetSkills = () => {
    player.value.intelligent -= pointsAddedByLevel.value.intelligent;
    player.value.strength -= pointsAddedByLevel.value.strength;
    player.value.agility -= pointsAddedByLevel.value.agility;

    pointsAddedByLevel.value = {
      intelligent: 0,
      strength: 0,
      agility: 0,
    };

    player.value.statsPoint = player.value.level - 1;
  };

  const usePotion = (inventorySlot: number) => {
    if (
      player.value.health + inventoryItems.value[inventorySlot]?.type.healthRestore >
      player.value.maxHealth
    ) {
      addMessageToLog(
        player.value.name +
          ' restore ' +
          (player.value.maxHealth - player.value.health) +
          ' HP by ' +
          inventoryItems.value[inventorySlot]?.name,
      );

      player.value.health = player.value.maxHealth;
    } else {
      addMessageToLog(
        player.value.name +
          ' restore ' +
          inventoryItems.value[inventorySlot]?.type.healthRestore +
          ' HP by ' +
          inventoryItems.value[inventorySlot]?.name,
      );

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
    getLootPool,
    toDestroy,
  };
};
