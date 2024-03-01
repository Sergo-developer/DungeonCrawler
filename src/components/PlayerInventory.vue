<script setup lang="ts">
import { items, quality } from '@/stores/itemsDatabase';
import { randomRange } from '@/utils/random-range';
import { inject, ref } from 'vue';
import type { InventoryItem, Items, SlotCount } from '@/types/items';
import type { State } from '@/types/map';

const { useItem, addItem, inventoryItems, loadoutItems } = inject('state') as State;

// const slotCount: SlotCount[] = new Array(35).fill(null);
//
// const inventoryItems = ref(slotCount);
// const loadoutItems = ref([null, null, null, null, null, null]);
//
// const useItem = (i: number) => {
//   if (inventoryItems.value[i] != null) {
//     if (inventoryItems.value[i]?.type === 'weapon') {
//       loadoutItems.value[5] = inventoryItems.value[i];
//       inventoryItems.value[i] = null;
//       console.log(loadoutItems.value);
//     }
//   }
// };

// const addItem = (itemToGet: Items[]) => {
//   console.log(itemToGet);
//
//   for (let e = 0; e < itemToGet.length; e++) {
//     for (let i = 0; i < inventoryItems.value.length; i++) {
//       if (inventoryItems.value[i]?.name === itemToGet[e].name && itemToGet[e].isStackable) {
//         inventoryItems.value[i].count += 1;
//
//         return;
//       } else if (inventoryItems.value[i] === null) {
//         inventoryItems.value[i] = itemToGet[e];
//
//         return;
//       }
//     }
//
//     alert('Ваш инвентарь полон... Вы проебали полученный предмет и вам должно быть стыдно за это!');
//
//     return;
//   }
// };
</script>

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
        <div
          class="item-slot"
          :class="{ 'with-item': loadoutItems[5], weapon: !loadoutItems[5], slot: loadoutItems[5] }"
          :style="{ borderColor: quality[loadoutItems[5]?.quality] }"
        >
          <div
            class="item-image"
            :style="{ backgroundImage: `url(${loadoutItems[5]?.image})` }"
          ></div>
        </div>
      </div>
    </div>
    <div class="use-bar">
      А тут взаимодействие с предметами, ну и их статы, имя и описание можно впихнуть
    </div>
    <div class="inventory-slots">
      <div
        v-for="(item, i) in inventoryItems"
        :key="i"
        class="item-slot slot"
        :class="{ 'with-item': item }"
        :style="{ borderColor: quality[item?.quality] }"
        @click="useItem(i)"
      >
        <div class="item-image" :style="{ backgroundImage: `url(${item?.image})` }">
          {{ item?.count }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item-image {
  color: white;
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  background-size: 64px 64px;
  filter: drop-shadow(5px 5px 5px #000000);
}
.inventory-slots {
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(7, 0fr);
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
  border: #646464 solid 4px;
}
.item-slot.with-item {
  cursor: pointer;
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
