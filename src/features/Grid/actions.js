import { ADD_TILE, REMOVE_TILE } from "./constants";

export const addTile = (color) => {
  return {
    type: ADD_TILE,
    create_at: Date.now(),
    color,
  };
};

export const removeTile = (id) => {
  return {
    type: REMOVE_TILE,
    id,
  };
};

export const addTileWithChecking = (color) => {
  return (dispatch, getState) => {
    if (getState().grid.length < 5) {
      dispatch(addTile(color));
    } else {
      alert("Terlalu banyak Tile yang ditambahkan, coba lagi nanti");
    }
  };
};
