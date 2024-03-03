<script setup lang="ts">
import { quality } from '@/stores/itemsDatabase';
import { inject } from 'vue';
import type { State } from '@/types/map';

const { hoveredItem } = inject('state') as State;
</script>

<template>
  <div class="use-bar">
    <div v-if="hoveredItem" class="item-info">
      <div class="item-info-main">
        <div
          class="item-info-image"
          :style="{ backgroundImage: `url(${hoveredItem?.image})` }"
        ></div>
        <div>
          <div class="item-name" :style="{ color: quality[hoveredItem?.quality] }">
            {{ hoveredItem?.name }}
          </div>
          <div style="color: #464646">{{ hoveredItem?.quality }} {{ hoveredItem?.type.name }}</div>
        </div>
      </div>
      <div class="item-description">{{ hoveredItem?.description }}</div>
    </div>
    <div class="item-info stats">
      <div v-if="hoveredItem?.type.damage">Damage: {{ hoveredItem?.type.damage }}</div>
      <div v-if="hoveredItem?.type.critChance">
        Crit chance: {{ hoveredItem?.type.critChance }}%
      </div>
      <div v-if="hoveredItem?.type.critMod">Crit modificator: {{ hoveredItem?.type.critMod }}x</div>
      <div v-if="hoveredItem?.type.armor">Armor: {{ hoveredItem?.type.armor }}</div>
      <div v-if="hoveredItem?.type.intelligent">
        Intelligent: {{ hoveredItem?.type.intelligent }}
      </div>
      <div v-if="hoveredItem?.type.strength">Strength: {{ hoveredItem?.type.strength }}</div>
      <div v-if="hoveredItem?.type.agility">Agility: {{ hoveredItem?.type.agility }}</div>
      <div v-if="hoveredItem?.type.healthRestore">
        Health to restore: {{ hoveredItem?.type.healthRestore }} HP
      </div>
    </div>
  </div>
</template>

<style scoped>
.item-description {
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

.use-bar {
  display: flex;
  color: white;
  height: 140px;
  background-color: black;
  border: white inset 2px;
}
</style>
