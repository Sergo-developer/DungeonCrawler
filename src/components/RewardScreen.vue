<script setup lang="ts">
import { quality } from '@/stores/itemsDatabase';
import { inject } from 'vue';
import type { State } from '@/types/map';

const { getOnHoverItemInfo, confirmEarnedItems, rewardItems } = inject('state') as State;
</script>

<template>
  <div class="reward-window">
    You took out from the chest:
    <div class="reward-item-wrapper">
      <div
        v-for="(item, i) in rewardItems"
        :key="i"
        class="reward-item"
        :style="{ borderColor: quality[item?.quality] }"
        @mouseover="getOnHoverItemInfo(item)"
        @mouseleave="getOnHoverItemInfo(null)"
      >
        <div :style="{ backgroundImage: `url(${item?.image})` }" class="reward-item-image"></div>
      </div>
    </div>
    <div class="confirm-button" @click="confirmEarnedItems">ok</div>
  </div>
</template>

<style scoped>
.confirm-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/textures/ui/2x1button.png');
  background-size: 120px 60px;
  height: 60px;
  width: 120px;
  font-size: 25px;
  color: #000000;
  cursor: pointer;
}

.confirm-button:hover {
  color: #ffffff;
  box-sizing: border-box;
  border: solid 5px #ffffff;
}

.reward-item-image {
  background-repeat: no-repeat;
  background-size: 128px 128px;
  height: 128px;
  width: 128px;
}

.reward-item-wrapper {
  gap: 20px;
  display: flex;
  justify-content: space-evenly;
}

.reward-item {
  background-color: rgba(0, 0, 0, 0.58);
  border: white inset 6px;
  height: 128px;
  width: 128px;
}

.reward-window {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 300px;
  width: 600px;
  color: white;
  background-image: url('/textures/ui/planksTexture.png');
  background-size: 64px, 64px;
  border: solid 10px transparent;
  border-image: url('/textures/ui/borderGold.png') 2 round;
}
</style>
