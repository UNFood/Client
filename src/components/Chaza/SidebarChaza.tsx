import React from "react";
import styles from "@/styles/sidebar.chaza.module.css";
import { Nav } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

function SidebarChaza() {
  return (
    <Nav
      className={`${styles.sidebar_chaza} d-flex flex-column  justify-content-between text-center`}
    >
      <div>
        <Link className="nav-link" href="/home">
          Administrar Chaza
        </Link>
        <Link className="nav-link" href="/pedidos">
          Pedidos
        </Link>
        <Link className="nav-link" href="/analytics">
          Estadisticas
        </Link>
      </div>
      <div className="mb-5">
        <Image
          src="/images/logoUNFood_4.png"
          alt="logo"
          width={200}
          height={249}
        ></Image>
      </div>
    </Nav>
  );
}

export default SidebarChaza;
