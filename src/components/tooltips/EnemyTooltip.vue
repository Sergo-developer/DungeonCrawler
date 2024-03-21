<script setup lang="ts">
import { quality } from '@/stores/itemsDatabase';
import { inject } from 'vue';
import type { State } from '@/types/map';

const { hoveredEnemy, enemyMaxHealth } = inject('state') as State;
</script>

<template>
  <div v-if="hoveredEnemy" class="item-info">
    <div class="item-info-main">
      <div
        class="item-info-image"
        :style="{ backgroundImage: `url(${hoveredEnemy?.image})` }"
      ></div>
      <div>
        <div class="item-name">
          {{ hoveredEnemy?.name }}
        </div>
      </div>
    </div>
    <div class="item-description">{{ hoveredEnemy?.description }}</div>
  </div>
  <div v-if="hoveredEnemy" class="item-info stats">
    <div v-if="hoveredEnemy?.health">Health: {{ hoveredEnemy?.health }} / {{ enemyMaxHealth }}</div>
    <div v-if="hoveredEnemy?.damage">Damage: {{ hoveredEnemy?.damage }}</div>
    <div v-if="hoveredEnemy?.armor">Armor: {{ hoveredEnemy?.armor }}</div>
  </div>
</template>

<style scoped>
.item-description {
  text-align: center;
  height: 100%;
  border: white inset 2px;
}
.item-name {
  text-align: center;
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
