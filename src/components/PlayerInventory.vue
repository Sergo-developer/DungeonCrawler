<script setup lang="ts">
import { quality } from '@/stores/itemsDatabase';
import { inject, ref } from 'vue';
import type { State } from '@/types/map';
import PlayerInventoryTooltip from '@/components/PlayerInventoryTooltip.vue';

const { player, useItem, inventoryItems, loadoutItems, unequipItem, getOnHoverItemInfo } = inject(
  'state',
) as State;
</script>

<template>
  <div class="inventory-wrapper">
    <div class="loadout-wrapper">
      <div>
        <div
          class="item-slot"
          :class="{ 'with-item': loadoutItems[0], helmet: !loadoutItems[0], slot: loadoutItems[0] }"
          :style="{ borderColor: quality[loadoutItems[0]?.quality] }"
          @click="unequipItem(0)"
          @mouseover="getOnHoverItemInfo(loadoutItems[0])"
          @mouseleave="getOnHoverItemInfo(null)"
        >
          <div
            class="item-image"
            :style="{ backgroundImage: `url(${loadoutItems[0]?.image})` }"
          ></div>
        </div>
        <div
          class="item-slot"
          :class="{ 'with-item': loadoutItems[1], body: !loadoutItems[1], slot: loadoutItems[1] }"
          :style="{ borderColor: quality[loadoutItems[1]?.quality] }"
          @click="unequipItem(1)"
          @mouseover="getOnHoverItemInfo(loadoutItems[1])"
          @mouseleave="getOnHoverItemInfo(null)"
        >
          <div
            class="item-image"
            :style="{ backgroundImage: `url(${loadoutItems[1]?.image})` }"
          ></div>
        </div>
        <div
          class="item-slot"
          :class="{ 'with-item': loadoutItems[2], pants: !loadoutItems[2], slot: loadoutItems[2] }"
          :style="{ borderColor: quality[loadoutItems[2]?.quality] }"
          @click="unequipItem(2)"
          @mouseover="getOnHoverItemInfo(loadoutItems[2])"
          @mouseleave="getOnHoverItemInfo(null)"
        >
          <div
            class="item-image"
            :style="{ backgroundImage: `url(${loadoutItems[2]?.image})` }"
          ></div>
        </div>
      </div>
      <div class="stats-wrapper">
        <div>Damage: {{ player.damage }}</div>
        <div>Crit chance: {{ player.critChance }}</div>
        <div>Crit modificator: {{ player.critMod }}</div>
        <div>Armor: {{ player.armor }}</div>
        <div>Intelligent: {{ player.intelligent }}</div>
        <div>Strength: {{ player.strength }}</div>
        <div>Agility: {{ player.agility }}</div>
      </div>
      <div>
        <div
          class="item-slot"
          :class="{ 'with-item': loadoutItems[3], ring: !loadoutItems[3], slot: loadoutItems[3] }"
          :style="{ borderColor: quality[loadoutItems[3]?.quality] }"
          @click="unequipItem(3)"
          @mouseover="getOnHoverItemInfo(loadoutItems[3])"
          @mouseleave="getOnHoverItemInfo(null)"
        >
          <div
            class="item-image"
            :style="{ backgroundImage: `url(${loadoutItems[3]?.image})` }"
          ></div>
        </div>
        <div
          class="item-slot"
          :class="{
            'with-item': loadoutItems[4],
            jewerly: !loadoutItems[4],
            slot: loadoutItems[4],
          }"
          :style="{ borderColor: quality[loadoutItems[4]?.quality] }"
          @click="unequipItem(4)"
          @mouseover="getOnHoverItemInfo(loadoutItems[4])"
          @mouseleave="getOnHoverItemInfo(null)"
        >
          <div
            class="item-image"
            :style="{ backgroundImage: `url(${loadoutItems[4]?.image})` }"
          ></div>
        </div>
        <div
          class="item-slot"
          :class="{ 'with-item': loadoutItems[5], weapon: !loadoutItems[5], slot: loadoutItems[5] }"
          :style="{ borderColor: quality[loadoutItems[5]?.quality] }"
          @click="unequipItem(5)"
          @mouseover="getOnHoverItemInfo(loadoutItems[5])"
          @mouseleave="getOnHoverItemInfo(null)"
        >
          <div
            class="item-image"
            :style="{ backgroundImage: `url(${loadoutItems[5]?.image})` }"
          ></div>
        </div>
      </div>
    </div>
    <PlayerInventoryTooltip />
    <div class="inventory-slots">
      <div
        v-for="(item, i) in inventoryItems"
        :key="i"
        class="item-slot slot"
        :class="{ 'with-item': item }"
        :style="{ borderColor: quality[item?.quality] }"
        @click="useItem(i)"
        @mouseover="getOnHoverItemInfo(item)"
        @mouseleave="getOnHoverItemInfo(null)"
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

.loadout-wrapper {
  display: flex;
  justify-content: space-around;
}

.stats-wrapper {
  display: grid;
  text-align: center;
  color: white;
  background-color: black;
  width: 100%;
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
