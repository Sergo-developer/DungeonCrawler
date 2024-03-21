import { ref, watch } from 'vue';
import type { Enemy, EnemyRoom } from '@/types/map';
import type { ComputedRef } from 'vue';

export const useEnemy = (currentRoom) => {
  const enemyMaxHealth = ref(0);

  watch(currentRoom as ComputedRef<EnemyRoom>, (value) => {
    if (value.enemy != null) {
      enemyMaxHealth.value = value.enemy.health;
    }
  });

  const hoveredEnemy = ref();

  const getOnHoverEnemyInfo = (enemy: Enemy) => {
    hoveredEnemy.value = enemy;
  };

  return { hoveredEnemy, getOnHoverEnemyInfo, enemyMaxHealth };
};
