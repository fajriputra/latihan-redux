import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTileWithChecking, removeTile } from "../../features/Grid/actions";

import Button from "../Button";
import Tile from "../Tile";

const colors = ["red", "blue", "pink", "yellow", "gray"];

export default function Grid() {
  const gridTiles = useSelector((state) => state.grid);
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ maxWidth: 400, overflow: "hidden" }}>
        {gridTiles.map((tile, index) => {
          return (
            <Tile
              {...tile}
              key={index}
              onDoubleClick={() => dispatch(removeTile(tile.id))}
            />
          );
        })}
      </div>
      <div>
        {colors.map((color, index) => {
          return (
            <Button
              color={color}
              key={index}
              onClick={() => dispatch(addTileWithChecking(color))}
            />
          );
        })}
      </div>
    </>
  );
}
