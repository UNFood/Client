import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Image from "next/image";
import styles from "@/styles/navbar.module.css";

// @ToDo hacer header

function Header() {
  return (
    <>
      <Navbar fixed="top" expand="lg" className={`${styles.navbar}`}>
        <Container fluid>
          <Navbar.Brand href="#">
            <Image
              src="/images/logoUNFood.png"
              width={150}
              height={50}
              alt="logo"
            ></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav
              className="my-2 my-lg-0 float-right"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#aboutus">
                <span className="ms-2">Quienes somos</span>
              </Nav.Link>
              <Nav.Link href="#benefits">
                <span className="ms-2">Beneficios</span>
              </Nav.Link>
              <Nav.Link href="#redes">
                <span className="ms-2">Redes</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
