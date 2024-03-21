<script setup lang="ts">
import { inject } from 'vue';
import type { State } from '@/types/map';

const { mapRefresh } = inject('state') as State;
</script>

<template>
  <div class="exit-wrapper">
    <div class="attack-button" @click="mapRefresh">Next floor</div>
  </div>
</template>

<style scoped>
.exit-wrapper {
  display: flex;
  align-items: flex-end;
}

.attack-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/textures/ui/2x1button.png');
  background-size: 240px 120px;
  height: 120px;
  width: 240px;
  font-size: 25px;
  color: darkred;
  cursor: pointer;
}
.attack-button:hover {
  background-image: none;
  background-color: #9e9e9e;
  color: red;
  box-sizing: border-box;
  border: solid 5px #ffffff;
}
</style>
