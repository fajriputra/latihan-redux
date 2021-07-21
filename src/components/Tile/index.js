import React from "react";
import { string, number, func } from "prop-types";

import "./style.css";

export default function Tile({ color, id, onDoubleClick }) {
  return (
    <div
      className="tile"
      style={{ backgroundColor: color }}
      id={id}
      onDoubleClick={onDoubleClick}
    ></div>
  );
}

Tile.defaultProps = {
  color: "gray",
};

Tile.propTypes = {
  id: number,
  color: string.isRequired,
  onDoubleClick: func.isRequired,
};
