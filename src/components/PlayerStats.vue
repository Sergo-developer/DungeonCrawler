<script setup lang="ts">
import { computed, inject, watch } from 'vue';
import type { State } from '@/types/map';

const { player } = inject('state') as State;

const requiredXp = computed(() => {
  return player.value.level * 100;
});

watch(
  () => player.value.experience,
  () => {
    levelUp();
  },
);

const levelUp = () => {
  if (player.value.experience >= requiredXp.value) {
    player.value.experience = player.value.experience - requiredXp.value;
    player.value.level += 1;
    player.value.statsPoint += 1;
  }
};
</script>

<template>
  <div class="health-wrapper">
    <div class="health-bar">
      <div class="bar" :style="{ width: `${player.health}%` }">{{ player.health }}</div>
    </div>
    <div class="stats-wrapper">
      <div class="player-level">{{ player.level }}</div>
      <div class="xp-bar-wrapper">
        <div class="xp-bar" :style="{ width: `${(player.experience / requiredXp) * 100}%` }">
          {{ player.experience }}/{{ requiredXp }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.player-level {
  border: solid 10px transparent;
  border-image: url('/textures/ui/borderGold.png') 2 round;
  background-color: #035900;
  height: 20px;
  width: 20px;
  text-align: center;
}
.stats-wrapper {
  gap: 10px;
  font-size: 20px;
  color: white;
  display: flex;
  justify-content: space-around;
}
.stats-wrapper.stat {
  background-color: #464646;
  border: white solid 4px;
}
.bar {
  background-color: #ff0000;
}
.xp-bar {
  background-color: #0fff00;
  text-align: center;
}
.health-bar {
  color: #ffffff;
  background-color: #540000;
  width: 830px;
  font-size: 20px;
  border: solid 10px transparent;
  border-image: url('/textures/ui/borderGold.png') 2 round;
}
.xp-bar-wrapper {
  color: #ffffff;
  background-color: #1c311a;
  width: 780px;
  height: 20px;
  font-size: 20px;
  border: solid 10px transparent;
  border-image: url('/textures/ui/borderGold.png') 2 round;
}
.health-wrapper {
  display: grid;
  justify-content: space-evenly;
}
</style>
