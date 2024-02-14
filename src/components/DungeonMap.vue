<script setup lang="ts">
import type { State } from '@/types/map';
import { inject } from 'vue';

const { map, currentPosition } = inject('state') as State;

const checkIsCurrentRoom = (x: number, y: number) =>
  currentPosition.value.x === x && currentPosition.value.y === y;
</script>
<template>
  <div class="dungeon-map">
    <div v-for="(row, y) in map" :key="y" class="dungeon-map-row">
      <div
        v-for="(room, x) in row"
        :key="x"
        class="dungeon-map-room"
        :class="{ 'current-position': checkIsCurrentRoom(x, y) }"
      >
        {{ room?.type }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.dungeon-map {
  display: grid;
}

.dungeon-map-row {
  display: flex;
  width: fit-content;
}

.dungeon-map-room {
  width: 32px;
  height: 32px;
  background-color: #ffffff;
  border: solid 1px #66b5b7;
}

.dungeon-map-room.current-position {
  background-color: rgb(41, 15, 35);
}
</style>
