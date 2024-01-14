import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  return (
    <div>
      {props.objArray.map((obj, index) => (
        <Tile key={index} name={obj.name} description={obj.description} />
      ))}
    </div>
  );
};
