import type { EnemyRoom, Player } from '@/types/map';
import type { Ref } from 'vue';
import { wait } from '@/utils/wait';
import { computed, ref } from 'vue';
import { randomRange } from '@/utils/random-range';

export const useFight = (
  player: Ref<Player>,
  currentRoom: Ref<EnemyRoom>,
  openChest,
  addMessageToLog,
) => {
  const isFight = ref(false);
  const isCrit = ref(false);

  const totalPlayerDamage = () => {
    if (randomRange(0, 100) <= player.value.critChance) {
      isCrit.value = true;

      return Math.round(
        (player.value.damage + player.value.damage * (player.value.strength / 100)) *
          player.value.critMod,
      );
    } else {
      isCrit.value = false;

      return Math.round(player.value.damage + player.value.damage * (player.value.strength / 100));
    }
  };

  const totalPlayerDamageWatcher = ref();

  const fightStep = async () => {
    totalPlayerDamageWatcher.value = totalPlayerDamage();

    currentRoom.value.enemy.health -= totalPlayerDamageWatcher.value;

    addMessageToLog(
      'Player hit ' +
        currentRoom.value.enemy.name +
        ' with ' +
        totalPlayerDamageWatcher.value +
        ' damage',
    );

    if (currentRoom.value.enemy.health <= 0) {
      if (randomRange(0, 100) <= 30) {
        openChest(currentRoom.value.enemy.reward);
      }

      currentRoom.value.isDefeated = true;
      player.value.experience += currentRoom.value.enemy.xp;

      return;
    }

    isFight.value = true;
    await wait(1000);

    player.value.health -= Math.floor(
      currentRoom.value.enemy.damage - currentRoom.value.enemy.damage * (player.value.armor / 100),
    );

    addMessageToLog(
      currentRoom.value.enemy.name +
        ' hit Player with ' +
        Math.floor(
          currentRoom.value.enemy.damage -
            currentRoom.value.enemy.damage * (player.value.armor / 100),
        ) +
        ' damage',
    );

    isFight.value = false;
  };

  return { fightStep, isFight, isCrit, totalPlayerDamageWatcher };
};
