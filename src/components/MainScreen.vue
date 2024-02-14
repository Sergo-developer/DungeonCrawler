<script setup lang="ts">
import { computed, inject } from 'vue';
import type { State } from '@/types/map';

const { currentRoom, movePosition } = inject('state') as State;

const isMoveButtonsEnabled = computed(
  () => currentRoom.value.type !== 'enemy' || currentRoom.value.isDefeated,
);
</script>

<template>
  <div class="main-screen-wrapper">
    <div class="main-screen">
      <div v-if="isMoveButtonsEnabled" class="move-buttons">
        <button type="button" @click="movePosition(-1, 0)">Left</button>
        <button type="button" @click="movePosition(0, -1)">Up</button>
        <button type="button" @click="movePosition(0, 1)">Down</button>
        <button type="button" @click="movePosition(1, 0)">Right</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-screen-wrapper {
}
.main-screen {
  height: 600px;
  width: 1000px;
  background-color: aquamarine;
}
</style>
