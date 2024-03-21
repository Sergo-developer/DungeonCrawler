<script setup lang="ts">
import DungeonMap from '@/components/DungeonMap.vue';
import { items, itemTypeSortPriority, quality, qualityRarity } from '@/stores/itemsDatabase';
import { inject, ref } from 'vue';
import type { State } from '@/types/map';
import PlayerInventoryTooltip from '@/components/tooltips/PlayerInventoryTooltip.vue';

const { addItem, getOnHoverItemInfo } = inject('state') as State;

const itemsClone = structuredClone(items);
const cheatMenuItems = ref();

const initialize = () => {
  cheatMenuItems.value = itemsClone
    .sort((a, b) =>
      itemTypeSortPriority[a.type.name] < itemTypeSortPriority[b.type.name] ? -1 : 1,
    )
    .sort((a, b) => (qualityRarity[a.quality] > qualityRarity[b.quality] ? -1 : 1));
};

initialize();
</script>

<template>
  <div class="cheat-menu-wrapper">
    <div class="cheat-menu">
      <div
        v-for="(item, i) in cheatMenuItems"
        :key="i"
        class="item-slot slot"
        :class="{ 'with-item': item }"
        :style="{ borderColor: quality[item?.quality] }"
        @click="addItem([item])"
        @mouseover="getOnHoverItemInfo(item)"
        @mouseleave="getOnHoverItemInfo(null)"
      >
        <div class="item-image" :style="{ backgroundImage: `url(${item?.image})` }"></div>
      </div>
    </div>
  </div>
  <div class="tooltip"><PlayerInventoryTooltip /></div>
</template>

<style scoped>
.tooltip {
  display: flex;
  color: white;
  height: 140px;
  background-color: black;
  border: white inset 2px;
}
.cheat-menu-wrapper {
  display: flex;
  justify-content: center;
}
.item-slot.slot {
  background-image: url('/textures/ui/slotUI.png');
}

.item-slot {
  height: 64px;
  width: 64px;
  cursor: pointer;
  background-size: 64px, 64px;
  background-repeat: no-repeat;
  border: #646464 inset 4px;
}

.cheat-menu {
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(25, 0fr);
  background-image: url('/textures/ui/planksTexture.png');
  background-size: 64px, 64px;
  height: 256px;
  width: 100%;
  border: solid 10px transparent;
  border-image: url('/textures/ui/borderGold.png') 2 round;
  overflow: auto;
  scrollbar-color: #b49a0b rgba(70, 70, 70, 0);
}

.item-image {
  color: white;
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  background-size: 64px 64px;
  filter: drop-shadow(5px 5px 5px #000000);
}
</style>
