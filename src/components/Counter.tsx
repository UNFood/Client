import React from "react";
import Image from "next/image";
import styles from "@/styles/home.module.css";

function Counter() {
  return (
    <div
      className={`${styles.counter} position-absolute w-100  d-flex justify-content-center text-light p-2 bottom-0`}
    >
      <div>
        <Image
          src="/images/tienda.png"
          alt="tienda"
          width={60}
          height={42}
        ></Image>
        <p className="fs-3 text-light ms-3 me-3">
          Más de <span className="fs-1">0</span> Chazas
        </p>
      </div>

      <div className="vr opacity-100"></div>
      <div>
        <Image
          className="ms-3"
          src="/images/donut.png"
          alt="dona"
          width={60}
          height={42}
        ></Image>
        <p className="fs-3 text-light ms-3">
          Más de <span className="fs-1">0</span> Productos{" "}
        </p>
      </div>
    </div>
  );
}

export default Counter;
