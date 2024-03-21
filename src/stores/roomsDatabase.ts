import type { Enemy, RoomType } from '@/types/map';
import {
  commonChest,
  crusaderSkeletonLoot,
  dwarfLoot,
  PoisonSpiderLoot,
  skeletonLoot,
  spiderLoot,
  uncommonChest,
  undeadSoldierLoot,
} from '@/stores/lootPools';

export const types: RoomType[] = ['enemy', 'treasure', 'empty'];

export const mapImage = {
  enemy: '/textures/ui/mapIcons/enemy.png',
  treasure: '/textures/ui/mapIcons/chest.png',
  end: '/textures/ui/mapIcons/end.png',
  empty: '',
};

export const roomsDatabase: Enemy[] = [
  {
    name: 'Undead',
    description: 'Un dead.',
    health: 20,
    armor: 2,
    damage: 3,
    xp: 200,
    reward: commonChest,
    image: '/textures/enemies/ebaka.png',
  },
  {
    name: 'Undead soldier',
    description: 'I’ll rest in my next life, right?',
    health: 20,
    armor: 10,
    damage: 4,
    xp: 200,
    reward: undeadSoldierLoot,
    image: '/textures/enemies/undead2.png',
  },
  {
    name: 'Spider',
    description: 'Cool giant enemy spider',
    health: 10,
    armor: 2,
    damage: 5,
    xp: 50,
    reward: spiderLoot,
    image: '/textures/enemies/spider.png',
  },
  {
    name: 'Poisonous spider',
    description: 'Where have you seen non-poisonous spiders?',
    health: 15,
    armor: 2,
    damage: 9,
    xp: 150,
    reward: PoisonSpiderLoot,
    image: '/textures/enemies/spider2.png',
  },
  {
    name: 'Dwarf',
    description: 'Rock and stone',
    health: 20,
    armor: 2,
    damage: 10,
    xp: 250,
    reward: dwarfLoot,
    image: '/textures/enemies/dwarf.png',
  },
  {
    name: 'Skeleton',
    description: 'skeleton',
    health: 15,
    armor: 5,
    damage: 4,
    xp: 150,
    reward: skeletonLoot,
    image: '/textures/enemies/skeleton.png',
  },
  {
    name: 'Crusader skeleton',
    description: 'Before oil and the Nazis, it was God`s grace that helped start wars',
    health: 20,
    armor: 5,
    damage: 7,
    xp: 250,
    reward: crusaderSkeletonLoot,
    image: '/textures/enemies/skeleton2.png',
  },
];

export const chests = [
  {
    name: 'Common chest',
    description: 'obosanniy sunduk bez nihua',
    quality: 'common',
    image: '/textures/environment/chest.png',
    reward: commonChest,
  },
  {
    name: 'Uncommon chest',
    description: 'chika, chika, slim shady',
    quality: 'uncommon',
    image: '/textures/environment/chest2.png',
    reward: uncommonChest,
  },
  {
    name: 'Spider`s chest',
    description: 'S pider, blya budu',
    quality: 'rare',
    image: '/textures/environment/chest3.png',
    reward: spiderLoot,
  },
];
