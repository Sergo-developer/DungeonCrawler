import { computed, ref } from 'vue';
import type { ComputedRef } from 'vue';
import type { Map, MapCoordinate, PlayableRoom } from '@/types/map';
import { createMap } from '@/utils/dungeon-map';

export const useMap = () => {
  const mapWidth = 9;
  const mapHeight = 9;
  const roomsCount = 6;
  const floorCount = ref<number>(1);

  const map = ref<Map>(createMap(mapWidth, mapHeight, roomsCount));

  const mapRefresh = () => {
    currentPosition.value = { x: 4, y: 4 };
    map.value = createMap(mapWidth, mapHeight, roomsCount);
    floorCount.value += 1;
  };

  const currentPosition = ref<MapCoordinate>({ x: 4, y: 4 });

  const currentRoom = computed(
    () => map.value[currentPosition.value.y][currentPosition.value.x],
  ) as ComputedRef<PlayableRoom>;

  const movePosition = (deltaX: number, deltaY: number) => {
    const x = currentPosition.value.x + deltaX;
    const y = currentPosition.value.y + deltaY;

    if (map.value[y][x]) {
      currentPosition.value = { x, y };
    }
  };

  return { map, currentPosition, currentRoom, movePosition, mapRefresh, floorCount };
};
