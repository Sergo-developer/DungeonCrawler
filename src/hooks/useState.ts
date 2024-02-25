import type { EnemyRoom, State } from '@/types/map';
import { usePlayer } from '@/hooks/usePlayer';
import { useMap } from '@/hooks/useMap';
import { useFight } from '@/hooks/useFight';
import type { Ref } from 'vue';

export const useState = (): State => {
  const { player, pointsAddedByLevel } = usePlayer();
  const { map, currentPosition, movePosition, currentRoom } = useMap();
  const { fightStep, isFight, totalPlayerDamage } = useFight(player, currentRoom as Ref<EnemyRoom>);

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
  };
};
