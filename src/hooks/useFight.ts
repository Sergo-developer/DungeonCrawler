import type { EnemyRoom, Player } from '@/types/map';
import type { Ref } from 'vue';
import { wait } from '@/utils/wait';
import { computed, ref } from 'vue';
import { randomRange } from '@/utils/random-range';

export const useFight = (player: Ref<Player>, currentRoom: Ref<EnemyRoom>) => {
  const isFight = ref(false);

  const totalPlayerDamage = computed(() => {
    if (randomRange(0, 100) <= player.value.critChance) {
      return Math.round(
        player.value.damage +
          player.value.damage * (player.value.strength / 100) * player.value.critMod,
      );
    } else {
      return Math.round(player.value.damage + player.value.damage * (player.value.strength / 100));
    }
  });

  const fightStep = async () => {
    console.log(randomRange(0, 100));

    currentRoom.value.enemy.health -= totalPlayerDamage.value;

    if (currentRoom.value.enemy.health <= 0) {
      currentRoom.value.isDefeated = true;
      player.value.experience += currentRoom.value.enemy.xp;

      return;
    }

    isFight.value = true;
    await wait(1000);

    player.value.health -= Math.floor(
      currentRoom.value.enemy.damage - currentRoom.value.enemy.damage * (player.value.armor / 100),
    );

    isFight.value = false;
  };

  return { fightStep, isFight, totalPlayerDamage };
};
