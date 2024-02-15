<script setup lang="ts">
import { computed, inject } from 'vue';
import type { State } from '@/types/map';
import EnemyScreen from '@/components/EnemyScreen.vue';

const { currentRoom, movePosition } = inject('state') as State;

const isMoveButtonsEnabled = computed(
  () => currentRoom.value.type !== 'enemy' || currentRoom.value.isDefeated,
);
</script>

<template>
  <div class="main-screen-wrapper">
    <div class="main-screen">
      <EnemyScreen v-if="!isMoveButtonsEnabled" />
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
</template>

<style scoped>
.main-screen-wrapper {
  display: flex;
  justify-content: space-around;
}
.move-buttons {
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 60px);
  align-items: end;
}
.move-button-element {
  background-repeat: no-repeat;
  height: 60px;
  width: 60px;
  background-size: 60px;
  background-image: url('/textures/ui/arrow.png');
  &.button-left {
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
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  margin-top: -10%;
  height: 600px;
  width: 800px;
  background-color: #66b5b7;
  border: 25px solid transparent;
  border-image: url('/textures/ui/border.png') 4 round;
}
</style>
