<script setup lang="ts">
import type { State } from '@/types/map';
import { inject } from 'vue';
import { mapImage } from '@/stores/roomsDatabase';

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
        :class="{ 'playable-room': room, 'current-position': checkIsCurrentRoom(x, y) }"
        :style="{ backgroundImage: `url(${mapImage[room?.type || 'empty']})` }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.dungeon-map {
  display: grid;
  width: fit-content;
  background-image: url('/textures/ui/planksTexture.png');
  background-size: 64px, 64px;
  border: solid 10px transparent;
  border-image: url('/textures/ui/borderGold.png') 2 round;
}

.dungeon-map-row {
  display: flex;
  width: fit-content;
}

.dungeon-map-room {
  width: 32px;
  height: 32px;
  background-size: 22px, 22px;
  background-repeat: no-repeat;
}
.dungeon-map-room.playable-room {
  box-sizing: border-box;
  border: ridge 5px #d3b000;
}
.dungeon-map-room.current-position {
  box-sizing: border-box;
  border: ridge 5px #ffffff;
}
</style>
