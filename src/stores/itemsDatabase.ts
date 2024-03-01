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
    quality: 'legendary',
    type: 'weapon',
    image: '/textures/items/knife.png',
  },
  {
    name: 'brokenSword',
    description: 'an item',
    isStackable: false,
    count: 1,
    quality: 'epic',
    type: 'weapon',
    image: '/textures/items/brokenSword.png',
  },
  {
    name: 'small potion',
    description: 'an item',
    isStackable: true,
    count: 1,
    quality: 'common',
    type: 'potion',
    image: '/textures/items/smallPotionBottle.png',
  },
];
