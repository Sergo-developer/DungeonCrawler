import { ref } from 'vue';
import type { Player, PointsAddedByLevel } from '@/types/map';

export const usePlayer = () => {
  const player = ref<Player>({
    level: 1,
    experience: 0,
    statsPoint: 0,
    health: 100,
    maxHealth: 100,
    damage: 0,
    critChance: 0,
    critMod: 0,
    armor: 0,
    intelligent: 0,
    strength: 0,
    agility: 0,
  });

  const pointsAddedByLevel = ref<PointsAddedByLevel>({
    intelligent: 0,
    strength: 0,
    agility: 0,
  });

  return { player, pointsAddedByLevel };
};
