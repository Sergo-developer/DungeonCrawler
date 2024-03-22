<script setup lang="ts">
import { itemTypeSortPriority, quality, qualityRarity } from '@/stores/itemsDatabase';
import { computed, inject, onBeforeMount, onMounted, ref } from 'vue';
import type { State } from '@/types/map';
import PlayerInventoryTooltip from '@/components/tooltips/PlayerInventoryTooltip.vue';
import EnemyTooltip from '@/components/tooltips/EnemyTooltip.vue';
import ChestTooltip from '@/components/tooltips/ChestTooltip.vue';

const {
  player,
  useItem,
  inventoryItems,
  loadoutItems,
  unequipItem,
  getOnHoverItemInfo,
  addItem,
  getLootPool,
  toDestroy,
  pointsAddedByLevel,
} = inject('state') as State;

const sortInventory = () => {
  if (inventoryItems.value != null) {
    inventoryItems.value = inventoryItems.value
      .sort((a, b) => (a != null && b === null ? -1 : 1))
      .sort((a, b) =>
        itemTypeSortPriority[a?.type.name] < itemTypeSortPriority[b?.type.name] ? -1 : 1,
      )
      .sort((a, b) => (qualityRarity[a?.quality] > qualityRarity[b?.quality] ? -1 : 1));
  }
};

const sortInventoryByType = () => {
  if (inventoryItems.value != null) {
    inventoryItems.value = inventoryItems.value
      .sort((a, b) => (a != null && b === null ? -1 : 1))
      .sort((a, b) => (qualityRarity[a?.quality] > qualityRarity[b?.quality] ? -1 : 1))
      .sort((a, b) =>
        itemTypeSortPriority[a?.type.name] < itemTypeSortPriority[b?.type.name] ? -1 : 1,
      );
  }
};

const toDestroyItems = () => {
  toDestroy.value = !toDestroy.value;
};

const intStatAdd = () => {
  player.value.intelligent += 1;
  pointsAddedByLevel.value.intelligent += 1;
  player.value.statsPoint -= 1;
};

const strengthStatAdd = () => {
  player.value.strength += 1;
  pointsAddedByLevel.value.strength += 1;
  player.value.statsPoint -= 1;
};

const agilityStatAdd = () => {
  player.value.agility += 1;
  pointsAddedByLevel.value.agility += 1;
  player.value.statsPoint -= 1;
};
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
        <div>Crit chance: {{ player.critChance }}%</div>
        <div>Crit modificator: {{ player.critMod }}x</div>
        <div>Armor: {{ player.armor }}</div>
        <div class="stats-with-button">
          Intelligent: {{ player.intelligent }}
          <div v-if="player.statsPoint" class="stats-button" @click="intStatAdd">+</div>
        </div>
        <div class="stats-with-button">
          Strength: {{ player.strength }}
          <div v-if="player.statsPoint" class="stats-button" @click="strengthStatAdd">+</div>
        </div>
        <div class="stats-with-button">
          Agility: {{ player.agility }}
          <div v-if="player.statsPoint" class="stats-button" @click="agilityStatAdd">+</div>
        </div>
        <div v-if="player.statsPoint" style="color: yellow">
          Available points: {{ player.statsPoint }}
        </div>
        <div style="color: transparent" v-if="!player.statsPoint">p</div>
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
    <div class="use-bar">
      <PlayerInventoryTooltip />
      <EnemyTooltip />
      <ChestTooltip />
    </div>
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
          {{ item?.count > 1 ? item?.count : '' }}
        </div>
      </div>
    </div>
    <div class="bottom-wrapper">
      <div class="sort-button" @click="sortInventory">Sort by quality</div>
      <div class="sort-button" @click="sortInventoryByType">Sort by type</div>
      <div class="sort-button" @click="toDestroyItems" :class="{ destroy: toDestroy }">
        Destroy item
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats-button {
  cursor: pointer;
  border: white solid 2px;
  height: 15px;
  width: 15px;
}
.stats-with-button {
  display: flex;
  justify-content: center;
}
.bottom-wrapper {
  background-color: rgba(70, 70, 70, 0.65);
  display: flex;
  justify-content: space-between;
}
.sort-button {
  background-color: #464646;
  border: white solid 2px;
  width: 120px;
  color: white;
  cursor: pointer;
}

.sort-button:hover {
  background-color: white;
  color: #464646;
  border: #464646 solid 2px;
}
.sort-button.destroy {
  background-color: red;
  border: #620a15 solid 2px;
}

.use-bar {
  display: flex;
  color: white;
  height: 140px;
  background-color: black;
  border: white inset 2px;
}
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
  border: #646464 inset 4px;
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
  width: 100%;
  border: 25px solid transparent;
  border-image: url('/textures/ui/border.png') 4 round;
  border-left: transparent;
}
</style>
