<script setup lang="ts">
import { inject } from 'vue';
import type { State } from '@/types/map';

const { currentRoom, fightStep } = inject('state') as State;

const enemyMaxHealth = currentRoom.value.enemy.health;
</script>

<template>
  <div class="enemy-wrapper" v-if="'enemy' in currentRoom">
    <div class="enemy-name">{{ currentRoom.enemy.name }}</div>
    <div class="enemy-bar-wrapper" v-if="!currentRoom.isDefeated">
      <div class="enemy-level">1</div>
      <div class="enemy-health-bar">
        <div
          class="enemy-bar"
          :style="{ width: `${(currentRoom.enemy.health / enemyMaxHealth) * 100}%` }"
        >
          {{ currentRoom.enemy.health }}
        </div>
      </div>
    </div>
    <div class="enemy-image" :style="{ backgroundImage: `url(${currentRoom.enemy.image})` }"></div>
    <div v-if="!currentRoom.isDefeated" class="attack-button" @click="fightStep">attack</div>
  </div>
</template>
<style scoped>
.enemy-bar-wrapper {
  display: flex;
  gap: 10px;
  align-content: space-around;
}
.enemy-level {
  background-color: #ff6e00;
  color: #ffffff;
  height: 20px;
  width: 20px;
  border: solid 10px transparent;
  border-image: url('/textures/ui/borderGold.png') 2 round;
  text-align: center;
}
.enemy-name {
  display: grid;
  justify-items: center;
}
.enemy-health-bar {
  width: 300px;
  height: 20px;
  background-color: darkred;
  border: solid 10px transparent;
  border-image: url('/textures/ui/borderGold.png') 2 round;
}
.enemy-bar {
  height: 20px;
  background-image: url('/textures/ui/healthbar.png');
  background-size: 32px 32px;
  color: white;
}
.enemy-wrapper {
  color: white;
  font-size: 20px;
  display: grid;
  gap: 2px;
  justify-items: center;
}
.enemy-image {
  background-size: 320px;
  height: 320px;
  width: 320px;
  filter: drop-shadow(5px 5px 5px #000000);
}
.enemy-image.attacked {
  transition: 1s;
  transform: rotate(9deg);
}
.attack-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/textures/ui/2x1button.png');
  background-size: 120px 60px;
  height: 60px;
  width: 120px;
  font-size: 25px;
  color: darkred;
  cursor: pointer;
}
.attack-button:hover {
  color: red;
  box-sizing: border-box;
  border: solid 5px #ffffff;
}
</style>
