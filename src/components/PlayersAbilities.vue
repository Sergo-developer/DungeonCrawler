<script setup lang="ts"></script>

<template>
  <div class="abilities-wrapper">
    <div class="ability-frame"></div>
    <div class="ability-frame"></div>
    <div class="ability-frame"></div>
    <div class="ability-frame"></div>
  </div>
</template>

<style scoped>
.ability-frame {
  border: white solid 3px;
  height: 96px;
  width: 96px;
}
.abilities-wrapper {
  display: flex;
  justify-content: space-evenly;
}
</style>
