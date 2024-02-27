import type { Enemy, Type } from '@/types/map';

export const types: Type[] = [
  { name: 'enemy', image: '/textures/ui/mapIcons/enemy.png' },
  { name: 'treasure', image: '/textures/ui/mapIcons/chest.png' },
  { name: 'empty', image: '' },
];
export const roomsDatabase: Enemy[] = [
  {
    name: 'Ebaka',
    health: 100,
    armor: 10,
    damage: 15,
    xp: 100,
    image: '/textures/enemies/skeleton.png',
  },
  {
    name: 'Spider',
    health: 45,
    armor: 2,
    damage: 5,
    xp: 50,
    image: '/textures/enemies/spider.png',
  },
  {
    name: 'Skeleton',
    health: 100,
    armor: 5,
    damage: 10,
    xp: 150,
    image: '/textures/enemies/skeleton.png',
  },
];
