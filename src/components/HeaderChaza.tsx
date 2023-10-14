import Image from "next/image";
import styles from "@/styles/navbar.module.css";
import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { BsFillFileBarGraphFill,BsFillGearFill}  from "react-icons/bs";
import { GrConfigure } from "react-icons/gr";
import { BsCartCheckFill } from "react-icons/bs";


// @ToDo hacer HeaderChaza

function HeaderChaza() {
  return (
    <>
      <Navbar fixed="top" expand="lg" className={`${styles.navbar}`}>
        <Container fluid>
          <Navbar.Brand href="home">
            <Image
              src="/images/logoUNFood.png"
              width={100}
              height={40}
              alt="logo"
            ></Image>
          </Navbar.Brand>

          <Nav className="ml-auto">
            <Nav.Link href="#action1" className="text-center">
              <BsFillFileBarGraphFill size={25} />
              <span className="ms-2">Estadisticas</span>
            </Nav.Link>
            <Nav.Link href="#action2" className="text-center">
                <BsFillGearFill size={25} />
                <span className="ms-2">Configuracion</span>

            </Nav.Link>
            <Nav.Link href="#" className="text-center">
              <BsCartCheckFill   size={25} />
              <span className="ms-2">Pedidos para preparar</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderChaza;
