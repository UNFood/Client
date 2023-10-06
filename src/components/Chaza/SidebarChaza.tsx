import React from "react";
import styles from "@/styles/sidebar.chaza.module.css";
import { Nav, Navbar } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

function SidebarChaza({ isRegister }: { isRegister: boolean }) {
  return (
    <Navbar expand="md" className="p-0">
      <div className={`${styles.sidebar_chaza} text-center`}>
        <Navbar.Brand href="home">
          <div className={`${styles.img_container}`}>
            <Image
              className={`${styles.fondo}`}
              src="/images/logoUNFood_4.png"
              alt="logo"
              fill
            ></Image>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle className="p-2 m-0 mb-3" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="w-100">
          <Nav navbarScroll className="w-100 d-flex flex-column">
            <Link className="nav-link" href="home">
              Administrar Chaza
            </Link>
            <Link className="nav-link" href="products">
              Productos
            </Link>
            <Link className="nav-link" href="orders">
              Pedidos
            </Link>
            <Link className="nav-link" href="analytics">
              Estadisticas
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default SidebarChaza;
