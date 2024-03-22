<script setup lang="ts">
import { inject } from 'vue';
import type { State } from '@/types/map';

const { logMessages } = inject('state') as State;
</script>
<template>
  <div class="log-area">
    <div v-for="(message, i) in logMessages" :key="i">{{ message }}</div>
  </div>
</template>

<style scoped>
.log-area {
  border-top: 25px solid transparent;
  border-image: url('/textures/ui/border.png') 4 round;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: black;
  overflow: auto;
}
</style>
