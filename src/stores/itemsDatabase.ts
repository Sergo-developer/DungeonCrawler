import type { Items, Quality } from '@/types/items';

export const quality: Quality = {
  common: '#ffffff',
  uncommon: '#00ff15',
  rare: '#0033ff',
  epic: '#8e00ff',
  legendary: '#ff8300',
};

export const items: Items[] = [
  {
    name: 'knife',
    description: 'an item',
    isStackable: false,
    count: 1,
    quality: 'common',
    type: {
      name: 'weapon',
      damage: 3,
      critChance: 15,
      critMod: 1.5,
    },
    image: '/textures/items/weapons/knife.png',
  },
  {
    name: 'Broken sword',
    description: 'an item',
    isStackable: false,
    count: 1,
    quality: 'common',
    type: {
      name: 'weapon',
      damage: 4,
      critChance: 10,
      critMod: 1.5,
    },
    image: '/textures/items/weapons/brokenSword.png',
  },
  {
    name: 'Ordinary sword',
    description: 'A sword',
    isStackable: false,
    count: 1,
    quality: 'uncommon',
    type: {
      name: 'weapon',
      damage: 5,
      critChance: 7,
      critMod: 2,
    },
    image: '/textures/items/weapons/sword1.png',
  },
  {
    name: 'Сlaymore',
    description: 'Balanced sword, slightly bent, slightly rusty.',
    isStackable: false,
    count: 1,
    quality: 'rare',
    type: {
      name: 'weapon',
      damage: 8,
      critChance: 7,
      critMod: 2,
    },
    image: '/textures/items/weapons/sword2.png',
  },
  {
    name: 'Small potion',
    description: 'If there is a small potion, then there must be a large one somewhere?',
    isStackable: true,
    count: 1,
    quality: 'common',
    type: {
      name: 'potion',
      healthRestore: 15,
    },
    image: '/textures/items/smallPotionBottle.png',
  },
  {
    name: 'Medium potion',
    description: '0.480 milliliters of selected carcinogens',
    isStackable: true,
    count: 1,
    quality: 'uncommon',
    type: {
      name: 'potion',
      healthRestore: 30,
    },
    image: '/textures/items/potionBottle.png',
  },
  {
    name: 'Huge potion',
    description: 'Optimal size for 1 person',
    isStackable: true,
    count: 1,
    quality: 'rare',
    type: {
      name: 'potion',
      healthRestore: 60,
    },
    image: '/textures/items/hugePotionBottle.png',
  },
  {
    name: 'Leather helmet',
    description: 'an item',
    isStackable: false,
    count: 1,
    quality: 'common',
    type: {
      name: 'helmet',
      armor: 1,
      intelligent: 0,
      strength: 0,
      agility: 0,
      critChance: 0,
      critMod: 0,
    },
    image: '/textures/items/armor/helmets/helmet1.png',
  },
  {
    name: 'Armored helmet',
    description: 'an item',
    isStackable: false,
    count: 1,
    quality: 'common',
    type: {
      name: 'helmet',
      armor: 2,
      intelligent: 0,
      strength: 0,
      agility: 0,
      critChance: 0,
      critMod: 0,
    },
    image: '/textures/items/armor/helmets/helmet2.png',
  },
  {
    name: 'Leather pants',
    description: 'Everyone has a moment in their life when they walked through the wrong door.',
    isStackable: false,
    count: 1,
    quality: 'common',
    type: {
      name: 'pants',
      armor: 2,
      intelligent: 0,
      strength: 0,
      agility: 0,
      critChance: 0,
      critMod: 0,
    },
    image: '/textures/items/armor/pants/pants1.png',
  },
  {
    name: 'Leather jacket',
    description: 'an old jacket taken from a homeless person',
    isStackable: false,
    count: 1,
    quality: 'common',
    type: {
      name: 'body',
      armor: 2,
      intelligent: 0,
      strength: 0,
      agility: 0,
      critChance: 0,
      critMod: 0,
    },
    image: '/textures/items/armor/body/body1.png',
  },
  {
    name: 'Redstone necklace',
    description: 'Red means strong',
    isStackable: false,
    count: 1,
    quality: 'uncommon',
    type: {
      name: 'jewerly',
      armor: 0,
      intelligent: 0,
      strength: 1,
      agility: 0,
      critChance: 5,
      critMod: 0,
    },
    image: '/textures/items/armor/jewelry/jewelry1.png',
  },
  {
    name: 'Bluestone necklace',
    description: 'Blue means... erm..',
    isStackable: false,
    count: 1,
    quality: 'uncommon',
    type: {
      name: 'jewerly',
      armor: 0,
      intelligent: 1,
      strength: 0,
      agility: 0,
      critChance: 5,
      critMod: 0,
    },
    image: '/textures/items/armor/jewelry/jewelry2.png',
  },
  {
    name: 'Purplestone necklace',
    description: 'I dont know',
    isStackable: false,
    count: 1,
    quality: 'uncommon',
    type: {
      name: 'jewerly',
      armor: 0,
      intelligent: 0,
      strength: 0,
      agility: 1,
      critChance: 5,
      critMod: 0,
    },
    image: '/textures/items/armor/jewelry/jewelry3.png',
  },
];
