import React from "react";
import SidebarChaza from "./SidebarChaza";

function HomeChaza() {
  return (
    <div className="d-flex w-100 h-100">
      <SidebarChaza></SidebarChaza>
      <div>
        <div>imagen</div>
        <h1>McDonald's</h1>
        <p>Que esperas para probar nustros McCombos apetitosos desde 17.900</p>
      </div>
    </div>
  );
}

export default HomeChaza;
