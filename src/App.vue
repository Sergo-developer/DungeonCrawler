<script setup lang="ts">
import { inject, provide, ref } from 'vue';
import DungeonMap from '@/components/DungeonMap.vue';
import MainScreen from '@/components/MainScreen.vue';
import { useState } from '@/hooks/useState';
import type { State } from './types/map';
import PlayerInventory from '@/components/PlayerInventory.vue';
import CheatMenu from '@/components/CheatMenu.vue';
import GameLog from '@/components/GameLog.vue';
import PlayerAuthorization from '@/components/PlayerAuthorization.vue';

const state: State = useState();
const curentScreen = ref('dungeon');

const switchCurrentScreen = (screen: 'dungeon' | 'stats' | 'achievements' | 'cheat') => {
  curentScreen.value = screen;
};

provide('state', state);

const { addItem, getLootPool, isPlayerAuthorized } = state as State;

addItem(getLootPool(['Knife']));
</script>

<template>
  <PlayerAuthorization v-if="!isPlayerAuthorized" />
  <div v-if="isPlayerAuthorized">
    <div class="menu">
      <div @click="switchCurrentScreen('dungeon')" class="menu-button">Dungeon</div>
      <div @click="switchCurrentScreen('stats')" class="menu-button">Stats</div>
      <div @click="switchCurrentScreen('achievements')" class="menu-button">Achievements</div>
      <div @click="switchCurrentScreen('cheat')" class="menu-button">Cheat-menu</div>
    </div>
    <div class="game-wrapper">
      <div v-if="curentScreen === 'dungeon'" class="game-main-area">
        <div class="left-menu">
          <DungeonMap />
          <GameLog />
        </div>
        <div class="center">
          <MainScreen />
          <PlayerInventory />
        </div>
      </div>
      <div v-if="curentScreen === 'stats'">Stats here</div>
      <div v-if="curentScreen === 'achievements'">achievements</div>
      <div v-if="curentScreen === 'cheat'"><CheatMenu /></div>
    </div>
  </div>
  <div v-if="!isPlayerAuthorized" class="copyright">SergoJpg`s autistic labs 2024 © all rights reserved</div>
</template>

<style scoped>
.left-menu {
  border: 25px solid transparent;
  border-right: 0px;
  border-image: url('/textures/ui/border.png') 4 round;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.menu-button {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
  border: transparent 10px solid;
  border-image: url('/textures/ui/borderGold.png') 2 round;
  background-color: #3b2817;
  width: 100px;
}
.menu-button:hover {
  color: #3b2817;
  background-color: white;
}
.menu {
  width: 100%;
  height: 50px;
  background-image: url('/textures/ui/rock.png');
  background-size: 50px 50px;
  display: flex;
  justify-content: center;
}
.center {
  display: flex;
}

.game-main-area {
  display: grid;
  grid-template-columns: repeat(2, 0fr);
  justify-content: center;
}

.game-wrapper {
  height: 100%;
  image-rendering: pixelated;
}
.copyright {
  position: absolute;
  color: white;
  bottom: 0px;
}
</style>
