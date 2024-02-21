import type { EnemyRoom, Player } from '@/types/map';
import type { Ref } from 'vue';
import { wait } from '@/utils/wait';
import { ref } from 'vue';

export const useFight = (player: Ref<Player>, currentRoom: Ref<EnemyRoom>) => {
  const fightStep = async () => {
    currentRoom.value.enemy.health -= player.value.damage;

    if (currentRoom.value.enemy.health <= 0) {
      currentRoom.value.isDefeated = true;
      player.value.experience += 150;

      return;
    }

    await wait(1000);
    player.value.health -= currentRoom.value.enemy.damage;
  };

  return { fightStep };
};
