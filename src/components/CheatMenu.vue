<script setup lang="ts">
import DungeonMap from '@/components/DungeonMap.vue';
import { items, quality } from '@/stores/itemsDatabase';
import { inject } from 'vue';
import type { State } from '@/types/map';

const { addItem, getOnHoverItemInfo } = inject('state') as State;
</script>

<template>
  <div class="cheat-menu">
    <div
      v-for="(item, i) in items"
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
</template>

<style scoped>
.item-slot.slot {
  background-image: url('/textures/ui/slotUI.png');
}

.item-slot {
  height: 64px;
  width: 64px;
  background-size: 64px, 64px;
  background-repeat: no-repeat;
  border: #646464 solid 4px;
}

.cheat-menu {
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(6, 0fr);
  position: absolute;
  background-image: url('/textures/ui/planksTexture.png');
  background-size: 64px, 64px;
  height: 300px;
  width: fit-content;
  border: solid 10px transparent;
  border-image: url('/textures/ui/borderGold.png') 2 round;
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
