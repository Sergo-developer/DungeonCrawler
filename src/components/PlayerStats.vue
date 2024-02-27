<script setup lang="ts">
import { computed, inject, watch } from 'vue';
import type { State } from '@/types/map';

const { player, pointsAddedByLevel } = inject('state') as State;

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

const intStatAdd = () => {
  player.value.intelligent += 1;
  pointsAddedByLevel.value.intelligent += 1;
  player.value.statsPoint -= 1;
};

const strengthStatAdd = () => {
  player.value.strength += 1;
  pointsAddedByLevel.value.strength += 1;
  player.value.statsPoint -= 1;
};

const agilityStatAdd = () => {
  player.value.agility += 1;
  pointsAddedByLevel.value.agility += 1;
  player.value.statsPoint -= 1;
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
    <div v-if="player.statsPoint" class="points">available points: {{ player.statsPoint }}</div>
    <div class="stats-wrapper stat">
      <div class="stats-wrapper">
        <div class="stat-ico intelligent" />
        intelligent: {{ player.intelligent }}
        <div v-if="player.statsPoint" class="stat-button" @click="intStatAdd()">+</div>
      </div>
      <div class="stats-wrapper">
        <div class="stat-ico strength" />
        Strength: {{ player.strength }}
        <div v-if="player.statsPoint" class="stat-button" @click="strengthStatAdd()">+</div>
      </div>
      <div class="stats-wrapper">
        <div class="stat-ico agility" />
        Agility: {{ player.agility }}
        <div v-if="player.statsPoint" class="stat-button" @click="agilityStatAdd()">+</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stat-button {
  transition: 0.1s;
  width: 20px;
  height: 20px;
  text-align: center;
  cursor: pointer;
  border: white 3px inset;
}
.stat-button:hover {
  transition: 0.1s;
  border: white 3px solid;
  background-color: white;
  color: #464646;
}
.points {
  text-align: center;
  color: white;
  font-size: 20px;
}
.player-level {
  border: solid 10px transparent;
  border-image: url('/textures/ui/borderGold.png') 2 round;
  background-color: #035900;
  height: 20px;
  width: 20px;
  text-align: center;
}
.stat-ico {
  background-size: 32px 32px;
  height: 32px;
  width: 32px;
}
.stat-ico.intelligent {
  background-image: url('/textures/ui/statsIcons/int.png');
}
.stat-ico.strength {
  background-image: url('/textures/ui/statsIcons/damageUI.png');
}
.stat-ico.agility {
  background-image: url('/textures/ui/statsIcons/mod.png');
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
