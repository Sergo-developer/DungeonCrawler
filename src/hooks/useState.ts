import type { EnemyRoom, State } from '@/types/map';
import { usePlayer } from '@/hooks/usePlayer';
import { useMap } from '@/hooks/useMap';
import { useFight } from '@/hooks/useFight';
import { useItems } from '@/hooks/useItems';
import type { ComputedRef, Ref } from 'vue';
import { useEnemy } from '@/hooks/useEnemy';
import { useReward } from '@/hooks/useReward';
import { useLog } from '@/hooks/useLog';
import { useAbilities } from '@/hooks/useAbilities';

export const useState = (): State => {
  const { player, pointsAddedByLevel, isPlayerAuthorized } = usePlayer();
  const { map, currentPosition, movePosition, currentRoom, mapRefresh, floorCount } = useMap();
  const { logMessages, addMessageToLog } = useLog();
  const { useAbility } = useAbilities(player, addMessageToLog);

  const {
    useItem,
    addItem,
    inventoryItems,
    loadoutItems,
    unequipItem,
    hoveredItem,
    getOnHoverItemInfo,
    getLootPool,
    toDestroy,
  } = useItems(player, pointsAddedByLevel, addMessageToLog);

  const {
    openChest,
    confirmEarnedItems,
    rewardItems,
    isReward,
    hoveredChest,
    getOnHoverChestInfo,
  } = useReward(currentRoom, addItem, getLootPool);

  const { fightStep, isFight, isCrit, totalPlayerDamageWatcher } = useFight(
    player,
    currentRoom as Ref<EnemyRoom>,
    openChest,
    addMessageToLog,
  );

  const { hoveredEnemy, getOnHoverEnemyInfo, enemyMaxHealth } = useEnemy(
    currentRoom as ComputedRef<EnemyRoom>,
  );

  return {
    useAbility,
    isPlayerAuthorized,
    addMessageToLog,
    logMessages,
    hoveredChest,
    getOnHoverChestInfo,
    isReward,
    rewardItems,
    openChest,
    confirmEarnedItems,
    enemyMaxHealth,
    hoveredEnemy,
    getOnHoverEnemyInfo,
    map,
    currentPosition,
    currentRoom,
    movePosition,
    fightStep,
    player,
    pointsAddedByLevel,
    isFight,
    isCrit,
    totalPlayerDamageWatcher,
    useItem,
    addItem,
    inventoryItems,
    loadoutItems,
    unequipItem,
    hoveredItem,
    getOnHoverItemInfo,
    getLootPool,
    mapRefresh,
    floorCount,
    toDestroy,
  };
};
