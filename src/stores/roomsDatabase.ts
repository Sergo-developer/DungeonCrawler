import type { Enemy, RoomType } from '@/types/map';

export const types: RoomType[] = ['enemy', 'treasure', 'empty'];

export const mapImage = {
  enemy: '/textures/ui/mapIcons/enemy.png',
  treasure: '/textures/ui/mapIcons/chest.png',
  empty: '',
};

export const roomsDatabase: Enemy[] = [
  {
    name: 'Ebaka',
    health: 65,
    armor: 10,
    damage: 15,
    xp: 200,
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
    health: 55,
    armor: 5,
    damage: 10,
    xp: 150,
    image: '/textures/enemies/skeleton.png',
  },
];
