<script setup lang="ts">
import { provide } from 'vue';
import DungeonMap from '@/components/DungeonMap.vue';
import MainScreen from '@/components/MainScreen.vue';
import { useState } from '@/hooks/useState';
import type { State } from './types/map';

const state: State = useState();

provide('state', state);
</script>

<template>
  <div class="game-wrapper">
    <DungeonMap />
    <MainScreen />
  </div>
</template>

<style scoped>
.game-wrapper {
  background-image: url('/textures/ui/bricks.png');
  height: 100vh;
  background-size: 80px;
  image-rendering: pixelated;
}
</style>
