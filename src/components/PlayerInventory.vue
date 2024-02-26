<script setup lang="ts"></script>

<template>
  <div class="inventory-wrapper">
    <div class="loadout-wrapper">
      <div>
        <div class="item-slot helmet"></div>
        <div class="item-slot body"></div>
        <div class="item-slot pants"></div>
      </div>
      <div class="stats-wrapper">Тут типа будут статы</div>
      <div>
        <div class="item-slot ring"></div>
        <div class="item-slot jewerly"></div>
        <div class="item-slot weapon"></div>
      </div>
    </div>
    <div class="use-bar">
      А тут взаимодействие с предметами, ну и их статы, имя и описание можно впихнуть
    </div>
    <div class="inventory-slots">
      <div class="item-slot slot"></div>
      <div class="item-slot slot"></div>
      <div class="item-slot slot"></div>
      <div class="item-slot slot"></div>
      <div class="item-slot slot"></div>
      <div class="item-slot slot"></div>
      <div class="item-slot slot"></div>
    </div>
    <div class="inventory-slots">
      <div class="item-slot slot"></div>
      <div class="item-slot slot"></div>
      <div class="item-slot slot"></div>
      <div class="item-slot slot"></div>
      <div class="item-slot slot"></div>
      <div class="item-slot slot"></div>
      <div class="item-slot slot"></div>
    </div>
    <div class="inventory-slots">
      <div class="item-slot slot"></div>
      <div class="item-slot slot"></div>
      <div class="item-slot slot"></div>
      <div class="item-slot slot"></div>
      <div class="item-slot slot"></div>
      <div class="item-slot slot"></div>
      <div class="item-slot slot"></div>
    </div>
    <div class="inventory-slots">
      <div class="item-slot slot"></div>
      <div class="item-slot slot"></div>
      <div class="item-slot slot"></div>
      <div class="item-slot slot"></div>
      <div class="item-slot slot"></div>
      <div class="item-slot slot"></div>
      <div class="item-slot slot"></div>
    </div>
  </div>
</template>

<style scoped>
.inventory-slots {
  display: flex;
  justify-content: space-around;
}
.use-bar {
  color: white;
  height: 120px;
  background-color: black;
  border: white solid 2px;
}
.loadout-wrapper {
  display: flex;
  justify-content: space-around;
}
.stats-wrapper {
  color: white;
  background-color: black;
  width: 100%;
  height: 200px;
  border: white solid 2px;
}
.item-slot {
  height: 64px;
  width: 64px;
  background-size: 64px, 64px;
  background-repeat: no-repeat;
  border: white solid 2px;
}
.item-slot.slot {
  background-image: url('/textures/ui/slotUI.png');
}
.item-slot.helmet {
  background-image: url('/textures/ui/helmetUI.png');
}
.item-slot.body {
  background-image: url('/textures/ui/bodyUI.png');
}
.item-slot.pants {
  background-image: url('/textures/ui/pantsUI.png');
}
.item-slot.jewerly {
  background-image: url('/textures/ui/JewerlyUI.png');
}
.item-slot.weapon {
  background-image: url('/textures/ui/weaponUI.png');
}
.item-slot.ring {
  background-image: url('/textures/ui/ringUI.png');
}
.inventory-wrapper {
  height: fit-content;
  width: 500px;
  border: 25px solid transparent;
  border-image: url('/textures/ui/border.png') 4 round;
}
</style>
