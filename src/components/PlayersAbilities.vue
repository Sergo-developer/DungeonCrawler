<script setup lang="ts">
import { inject } from 'vue';
import type { State } from '@/types/map';

const { player, useAbility } = inject('state') as State;
</script>

<template>
  <div class="abilities-wrapper">
    <div class="ability-frame info">
      <div class="health-bar">
        <div class="bar" :style="{ width: `${(player.mana * 100) / player.maxMana}%` }">
          {{ player.mana }}/{{ player.maxMana }}
        </div>
      </div>
    </div>
    <div
      class="ability-frame"
      v-for="(ability, i) in player.class.abilities"
      :key="i"
      @click="useAbility(ability)"
    >
      <div class="ability-image" :style="{ backgroundImage: `url(${ability?.image})` }"></div>
    </div>
  </div>
</template>

<style scoped>
.bar {
  background-color: #003cff;
}
.health-bar {
  color: #ffffff;
  background-color: #0c0c21;
  width: 100%;
  font-size: 20px;
  border: solid 10px transparent;
  border-image: url('/textures/ui/borderGold.png') 2 round;
}
.ability-image {
  width: 80px;
  height: 80px;
  background-size: 80px;
  filter: drop-shadow(5px 5px 5px #000000);
}
.ability-frame {
  width: 80px;
  height: 80px;
  background-size: 80px;
  background-image: url('/textures/ui/planks.png');
  filter: drop-shadow(5px 5px 5px #000000);
  cursor: pointer;
  border: solid transparent 10px;
  border-image: url('/textures/ui/borderGold.png') 2 round;
}
.ability-frame.info {
  background-image: url('/textures/ui/planksTexture.png');
  width: 430px;
}
.abilities-wrapper {
  display: flex;
  justify-content: center;
}
</style>
