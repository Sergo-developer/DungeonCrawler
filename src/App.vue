<script setup lang="ts">
import { provide } from 'vue';
import DungeonMap from '@/components/DungeonMap.vue';
import MainScreen from '@/components/MainScreen.vue';
import { useState } from '@/hooks/useState';
import type { State } from './types/map';
import PlayerInventory from '@/components/PlayerInventory.vue';

const state: State = useState();

provide('state', state);
</script>

<template>
  <div class="game-wrapper">
    <DungeonMap />
    <div class="center">
      <MainScreen />
      <PlayerInventory />
    </div>
  </div>
</template>

<style scoped>
.center {
  margin-left: 25%;
  margin-top: -10%;
  gap: 10px;
  display: flex;
  justify-content: center;
}
.game-wrapper {
  background-image: url('/textures/ui/bricks.png');
  height: 100vh;
  background-size: 80px;
  image-rendering: pixelated;
}
</style>
