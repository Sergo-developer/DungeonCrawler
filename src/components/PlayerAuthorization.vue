<script setup lang="ts">
import { classes } from '@/stores/gameClasses.js';
import { inject, ref } from 'vue';
import type { State } from '@/types/map';

const { isPlayerAuthorized, player } = inject('state') as State;

const selectedClass = ref();
const selectedAbility = ref();
const playerName = ref();

const selectClass = (gameClass) => {
  selectedClass.value = structuredClone(gameClass);
};

const selectAbility = (gameAbility) => {
  selectedAbility.value = gameAbility;
};

const login = () => {
  player.value.name = playerName.value ? playerName.value : 'Player';
  player.value.class = selectedClass.value;
  isPlayerAuthorized.value = true;
};
</script>

<template>
  <div class="au-wrapper">
    <div class="au-card">
      <div class="name-wrapper">
        <div>Player`s name</div>
        <input v-model="playerName" class="input" />
      </div>
      <div>{{ playerName ? playerName : 'Player' }}`s class</div>
      <div class="class-wrapper">
        <div v-for="(unit, i) in classes" :key="i" class="class-frame" @click="selectClass(unit)">
          <div class="class-image" :style="{ backgroundImage: `url(${unit?.image})` }"></div>
        </div>
      </div>
      <div v-if="selectedClass" class="classInfo">
        <div class="class-name">{{ selectedClass?.name }}</div>
        <div class="class-description">{{ selectedClass?.description }}</div>
        <div class="abilities-wrapper">
          <div
            class="class-frame"
            v-for="(ability, i) in selectedClass?.abilities"
            :key="i"
            @mouseover="selectAbility(ability)"
            @mouseleave="selectedAbility = null"
          >
            <div class="class-image" :style="{ backgroundImage: `url(${ability?.image})` }"></div>
          </div>
        </div>
        <div class="class-name ability">
          {{ selectedAbility?.name }}
          <div class="class-type">{{ selectedAbility?.type }}</div>
        </div>
        <div class="class-description">{{ selectedAbility?.description }}</div>
        <div class="confirm-button" @click="login">Create</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.confirm-button {
  color: darkred;
  font-size: 26px;
  cursor: pointer;
}
.confirm-button:hover {
  color: red;
}
.abilities-wrapper {
  gap: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.class-description {
  height: 50px;
}
.class-name {
  font-size: 20px;
}
.class-name.ability {
  margin-top: 20px;
  border-top: transparent solid 10px;
  border-image: url('/textures/ui/paperBorder.png') 2 round;
}
.class-type {
  font-size: 15px;
  color: #464646;
}
.class-image {
  width: 96px;
  height: 96px;
  background-size: 96px;
  filter: drop-shadow(5px 5px 5px #000000);
}
.classInfo {
  color: black;
  margin-top: 15px;
  display: block;
  height: 49%;
  border: transparent solid 10px;
  border-image: url('/textures/ui/paperBorder.png') 2 round;
  background-size: 96px;
  background-image: url('/textures/ui/paper.png');
  width: auto;
}
.class-wrapper {
  gap: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.class-frame {
  width: 96px;
  height: 96px;
  background-size: 96px;
  background-image: url('/textures/ui/planks.png');
  filter: drop-shadow(5px 5px 5px #000000);
  border: solid transparent 10px;
  border-image: url('/textures/ui/borderGold.png') 2 round;
  cursor: pointer;
}
.input {
  width: 180px;
  height: 32px;
  border: solid transparent 10px;
  color: white;
  background-color: #3b2817;
  border-image: url('/textures/ui/borderGold.png') 2 round;
}
.name-wrapper {
}
.au-card {
  color: white;
  border: 25px solid transparent;
  border-image: url('/textures/ui/border.png') 4 round;
  text-align: center;
  margin-top: 5%;
  width: 500px;
  height: 700px;
  background-image: url('/textures/ui/rock.png');
  background-size: 80px;
  justify-content: center;
}
.au-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
}
</style>
