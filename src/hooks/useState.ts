import { computed, ref } from 'vue';
import type { ComputedRef } from 'vue';
import type { Map, MapCoordinate, PlayableRoom, State } from '@/types/map';
import { createMap } from '@/utils/dungeon-map';

export const useState = (): State => {
  const mapWidth = 9;
  const mapHeight = 9;
  const roomsCount = 6;

  const map = ref<Map>(createMap(mapWidth, mapHeight, roomsCount));
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

  return { map, currentPosition, currentRoom, movePosition };
};
