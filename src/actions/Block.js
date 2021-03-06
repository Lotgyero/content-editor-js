import {
  BLOCK_CREATE,
  BLOCK_SELECT,
  BLOCK_MOVE,
  BLOCK_RESIZE
} from '../constants/Blocks';

export const blockCreate = (type, block, geometry) => {
  return {
    type: BLOCK_CREATE,
    blockType: type,
    block: block,
    geometry: geometry
  };
};

export const blockSelect = (type, block) => {
  return {
    type: BLOCK_SELECT,
    blockType: type,
    block: block
  };
};

export const blockMove = (id, x, y) => {
  return {
    type: BLOCK_MOVE,
    block: { id, x, y }
  };
};

export const blockResize = (id, x, y, sizeX, sizeY, pointType) => {
  return {
    type: BLOCK_RESIZE,
    block: { id, x, y, sizeX, sizeY, pointType }
  };
};
