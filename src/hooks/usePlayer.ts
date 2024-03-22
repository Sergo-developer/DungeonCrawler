import { ref } from 'vue';
import type { Player, PointsAddedByLevel } from '@/types/map';
import type { GameClasses } from '@/stores/gameClasses';
import { classes } from '@/stores/gameClasses';

export const usePlayer = () => {
  const isPlayerAuthorized = ref<boolean>(false);

  const player = ref<Player>({
    name: 'HuiBulijnikov2011',
    level: 1,
    experience: 0,
    statsPoint: 0,
    mana: 1,
    maxMana: 3,
    health: 100,
    maxHealth: 100,
    damage: 0,
    critChance: 0,
    critMod: 0,
    armor: 0,
    intelligent: 0,
    strength: 0,
    agility: 0,
    class: classes[0],
  });

  const pointsAddedByLevel = ref<PointsAddedByLevel>({
    intelligent: 0,
    strength: 0,
    agility: 0,
  });

  return { player, pointsAddedByLevel, isPlayerAuthorized };
};
