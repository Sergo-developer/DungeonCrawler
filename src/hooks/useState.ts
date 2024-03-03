import type { EnemyRoom, State } from '@/types/map';
import { usePlayer } from '@/hooks/usePlayer';
import { useMap } from '@/hooks/useMap';
import { useFight } from '@/hooks/useFight';
import { useItems } from '@/hooks/useItems';
import type { Ref } from 'vue';

export const useState = (): State => {
  const { player, pointsAddedByLevel } = usePlayer();
  const { map, currentPosition, movePosition, currentRoom } = useMap();
  const { fightStep, isFight, totalPlayerDamage } = useFight(player, currentRoom as Ref<EnemyRoom>);

  const {
    useItem,
    addItem,
    inventoryItems,
    loadoutItems,
    unequipItem,
    hoveredItem,
    getOnHoverItemInfo,
  } = useItems(player);

  return {
    map,
    currentPosition,
    currentRoom,
    movePosition,
    fightStep,
    player,
    pointsAddedByLevel,
    isFight,
    totalPlayerDamage,
    useItem,
    addItem,
    inventoryItems,
    loadoutItems,
    unequipItem,
    hoveredItem,
    getOnHoverItemInfo,
  };
};
