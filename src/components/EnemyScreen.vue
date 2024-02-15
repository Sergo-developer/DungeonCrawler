<script setup lang="ts">
import { computed, ref, inject } from 'vue';
import type { State } from '@/types/map';

const { currentRoom } = inject('state') as State;
const currentHealth = ref(currentRoom.value.enemies.health);
const isHasEnemy = computed<boolean>(() => currentRoom.value.enemies !== null);

const damage = () => {
  currentHealth.value -= 10;

  if (currentHealth.value <= 0) {
    currentRoom.value.isDefeated = true;
  }
};
</script>

<template>
  <div v-if="isHasEnemy">
    {{ currentRoom.enemies.name }}
    <div>{{ currentHealth }} / {{ currentRoom.enemies.health }}</div>
    <div
      class="enemy-image"
      :style="{ backgroundImage: `url(${currentRoom.enemies.image})` }"
    ></div>
    <div class="attack-button" @click="damage">атаковать</div>
  </div>
</template>
<style scoped>
.enemy-image {
  background-size: 160px;
  height: 160px;
  width: 160px;
}
.attack-button {
  border: 3px solid blueviolet;
  height: 60px;
  width: 120px;
}
</style>
