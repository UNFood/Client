import React from "react";

import styles from "../styles/home.module.css";

function Counter() {
  return (
    <div
      className={`${styles.counter} d-flex justify-content-center text-light p-2`}
    >
      <div>
        <p className="text-light">
          Mas de <span className="fs-1">0</span> Chazas
        </p>
      </div>

      <div className="vr"></div>
      <div>
        <p className="text-light">
          {" "}
          <span className="fs-1">0</span> Productos{" "}
        </p>
      </div>
    </div>
  );
}

export default Counter;
