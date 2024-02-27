import type { EnemyRoom, Player } from '@/types/map';
import type { Ref } from 'vue';
import { wait } from '@/utils/wait';
import { computed, ref } from 'vue';

export const useFight = (player: Ref<Player>, currentRoom: Ref<EnemyRoom>) => {
  const isFight = ref(false);

  const totalPlayerDamage = computed(() => {
    return player.value.damage + player.value.damage * (player.value.strength / 100);
  });

  const fightStep = async () => {
    currentRoom.value.enemy.health -= totalPlayerDamage.value;

    if (currentRoom.value.enemy.health <= 0) {
      currentRoom.value.isDefeated = true;
      player.value.experience += currentRoom.value.enemy.xp;

      return;
    }

    isFight.value = true;
    await wait(1000);

    player.value.health -= currentRoom.value.enemy.damage;
    isFight.value = false;
  };

  return { fightStep, isFight, totalPlayerDamage };
};
