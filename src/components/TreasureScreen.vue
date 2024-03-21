<script setup lang="ts">
import { inject } from 'vue';
import type { State } from '@/types/map';
import { commonChest } from '@/stores/lootPools';
import RewardScreen from '@/components/RewardScreen.vue';
import { quality } from '@/stores/itemsDatabase';

const { currentRoom, openChest, getOnHoverChestInfo, hoveredChest } = inject('state') as State;
</script>

<template>
  <div class="treasure-wrapper">
    <div
      v-if="!currentRoom.treasure.isOpened"
      class="chest-image"
      @mouseover="getOnHoverChestInfo(currentRoom.treasure)"
      @mouseleave="hoveredChest = null"
      @click="openChest(currentRoom.treasure.reward), (hoveredChest = null)"
      :style="{
        backgroundImage: `url(${currentRoom.treasure.image})`,
        filter: `drop-shadow(0px 0px 15px ${quality[currentRoom.treasure.quality]})`,
      }"
    ></div>
    <RewardScreen v-if="currentRoom.treasure.isOpened"></RewardScreen>
  </div>
</template>

<style scoped>
.treasure-wrapper {
  display: flex;
  align-items: flex-end;
}

.chest-image {
  background-repeat: no-repeat;
  height: 200px;
  width: 200px;
  background-size: 200px 200px;
  filter: drop-shadow(0px 0px 15px #ffffff);
  cursor: pointer;
}

.chest-image:hover {
  animation: hoverRotation 0.5s;
}

@keyframes hoverRotation {
  0% {
    rotate: 0deg;
  }
  25% {
    rotate: 9deg;
  }
  50% {
    rotate: -9deg;
  }
  75% {
    rotate: 9deg;
  }
  100% {
    rotate: 0deg;
  }
}
</style>
