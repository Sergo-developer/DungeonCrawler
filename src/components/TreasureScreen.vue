<script setup lang="ts">
import { inject, ref } from 'vue';
import { items, quality } from '@/stores/itemsDatabase';
import { randomRange } from '@/utils/random-range';
import type { State } from '@/types/map';

const { currentRoom, addItem, getOnHoverItemInfo } = inject('state') as State;
const rewardItems = ref([]);

const openChest = () => {
  for (let i = 0; i < randomRange(1, 3); i++) {
    rewardItems.value[i] = structuredClone(items[randomRange(0, items.length) - 1]);
  }

  currentRoom.value.treasure.isOpened = true;
};

const confirmEarnedItems = () => {
  addItem(rewardItems.value);
  currentRoom.value.type = 'empty';
};
</script>

<template>
  <div class="treasure-wrapper">
    <div v-if="!currentRoom.treasure.isOpened" class="chest-image" @click="openChest"></div>
    <div v-if="currentRoom.treasure.isOpened" class="reward-window">
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
  border: white solid 6px;
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

.treasure-wrapper {
  display: flex;
  align-items: flex-end;
}

.chest-image {
  background-image: url('/textures/environment/chest.png');
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
