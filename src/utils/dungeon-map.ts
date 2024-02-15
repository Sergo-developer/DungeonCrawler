import { roomsDatabase, types } from '@/stores/roomsDatabase';
import { randomRange } from '@/utils/random-range';

const possibleSteps = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

export const createMap = (mapWidth: number, mapHeight: number, roomsCount: number) => {
  const row = new Array(mapWidth).fill(null);
  const map = Array.from({ length: mapHeight }, () => structuredClone(row));
  let currentX = Math.floor(mapWidth / 2);
  let currentY = Math.floor(mapHeight / 2);
  let currentRoomsCount = 1;

  map[currentY][currentX] = { type: 'start' };

  while (currentRoomsCount < roomsCount) {
    const randomDirection = possibleSteps[Math.floor(Math.random() * 4)];
    const tempX = currentX + randomDirection[0];
    const tempY = currentY + randomDirection[1];

    if (!map[tempY][tempX]) {
      map[tempY][tempX] = {
        type: types[randomRange(0, types.length - 1)],
        enemies: roomsDatabase[randomRange(0, roomsDatabase.length - 1)],
      };

      currentX = tempX;
      currentY = tempY;
      currentRoomsCount += 1;
    }
  }

  return map;
};
