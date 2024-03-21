<script setup lang="ts">
import { computed, inject } from 'vue';
import type { EnemyRoom, State } from '@/types/map';
import EnemyScreen from '@/components/EnemyScreen.vue';
import PlayerStats from '@/components/PlayerStats.vue';
import TreasureScreen from '@/components/TreasureScreen.vue';
import ExitScreen from '@/components/ExitScreen.vue';
import { items } from '@/stores/itemsDatabase';
import PlayersAbilities from '@/components/PlayersAbilities.vue';

const { currentRoom, movePosition } = inject('state') as State;

const isMoveButtonsEnabled = computed(
  () => currentRoom.value.type !== 'enemy' || (currentRoom.value as EnemyRoom).isDefeated,
);

console.log(items.map((val) => val.name));
</script>

<template>
  <div class="border">
    <div class="main-screen-wrapper">
      <div class="main-screen">
        <EnemyScreen v-if="currentRoom.type === 'enemy'" />
        <TreasureScreen v-if="currentRoom.type === 'treasure'" />
        <ExitScreen v-if="currentRoom.type === 'end'" />
        <div v-if="isMoveButtonsEnabled" class="move-buttons">
          <div class="move-button-element button-left" @click="movePosition(-1, 0)"></div>
          <div>
            <div class="move-button-element button-up" @click="movePosition(0, -1)"></div>
            <div class="move-button-element button-down" @click="movePosition(0, 1)"></div>
          </div>
          <div class="move-button-element button-right" @click="movePosition(1, 0)"></div>
        </div>
      </div>
    </div>
    <PlayerStats />
    <PlayersAbilities />
  </div>
</template>

<style scoped>
.border {
  border: 25px solid transparent;
  border-image: url('/textures/ui/border.png') 4 round;
}
.main-screen-wrapper {
  display: flex;
  justify-content: space-around;
  width: 1000px;
}
.move-buttons {
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 60px);
  align-items: end;
}
.move-button-element {
  cursor: pointer;
  background-repeat: no-repeat;
  height: 60px;
  width: 60px;
  background-size: 60px;
  background-image: url('/textures/ui/arrow.png');
  &.button-left {
    transform: rotate(0deg);
  }
  &.button-up {
    transform: rotate(90deg);
  }
  &.button-down {
    transform: rotate(270deg);
  }
  &.button-right {
    transform: rotate(180deg);
  }
}
.main-screen {
  display: grid;
  justify-items: center;
  height: 600px;
  width: 100%;
  background-image: url('/textures/ui/dungeonBg.png');
  background-position: center;
}
.main-screen:hover {
  transition: 1s;
  background-color: black;
}
</style>
