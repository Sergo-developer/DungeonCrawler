<script setup lang="ts">
import { quality } from '@/stores/itemsDatabase';
import { inject } from 'vue';
import type { State } from '@/types/map';

const { hoveredChest } = inject('state') as State;
</script>

<template>
  <div v-if="hoveredChest" class="item-info">
    <div class="item-info-main">
      <div
        class="item-info-image"
        :style="{ backgroundImage: `url(${hoveredChest?.image})` }"
      ></div>
      <div class="name-wrapper">
        <div class="item-name" :style="{ color: quality[hoveredChest?.quality] }">
          {{ hoveredChest?.name }}
        </div>
        <div style="color: #464646">{{ hoveredChest?.quality }} chest</div>
      </div>
    </div>
    <div class="item-description">{{ hoveredChest?.description }}</div>
  </div>
</template>

<style scoped>
.name-wrapper {
}

.item-description {
  text-align: center;
  height: 100%;
  border: white inset 2px;
}
.item-name {
  font-size: 22px;
}
.item-info-main {
  display: flex;
  border: white inset 2px;
}

.item-info-image {
  background-repeat: no-repeat;
  background-size: 64px 64px;
  height: 64px;
  width: 64px;
}

.item-info {
  width: 100%;
}

.item-info.stats {
  color: greenyellow;
  font-size: 20px;
  text-align: center;
  width: 100%;
}
</style>
