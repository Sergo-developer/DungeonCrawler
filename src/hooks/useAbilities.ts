import type { Abilities } from '@/stores/gameClasses';
import type { Player } from '@/types/map';
import type { Ref } from 'vue';
import { computed, ref, } from 'vue';

export const useAbilities = (player: Ref<Player>, addMessageToLog) => {
  const abilitiesName = computed(() => player.value.class.abilities.map((val) => val.name));

  const useAbility = (ability: Abilities) => {
    console.log(abilitiesName.value);

    if (player.value.mana > 0 && ability.type === 'instant') {
      player.value.mana -= 1;
      addMessageToLog('it`s' + ability.name);
    }
  };

  return { useAbility };
};
