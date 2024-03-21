import { chests, roomsDatabase, types } from '@/stores/roomsDatabase';
import { randomRange } from '@/utils/random-range';

const possibleSteps = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const getRandomRoomByType = () => {
  const type = types[randomRange(0, types.length - 1)];

  if (type === 'enemy') {
    return {
      type: type,
      enemy: structuredClone(roomsDatabase[randomRange(0, roomsDatabase.length - 1)]),
    };
  } else if (type === 'treasure') {
    return {
      type: type,
      treasure: structuredClone(chests[randomRange(0, chests.length - 1)]),
    };
  } else if (type === 'empty') {
    return {
      type: type,
    };
  }
};

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
      map[tempY][tempX] = getRandomRoomByType();

      currentX = tempX;
      currentY = tempY;
      currentRoomsCount += 1;
    }
  }

  map[currentY][currentX] = { type: 'end' };

  return map;
};
