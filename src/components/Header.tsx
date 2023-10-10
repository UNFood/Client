import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import Image from "next/image";
import styles from "@/styles/navbar.module.css";
import { BiMap } from "react-icons/bi";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

// @ToDo hacer header

function Header() {
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
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            className="justify-content-evenly h-25"
          >
            <Form className="d-flex w-md-50 w-sm-80    ms-3">
              <Form.Control
                type="search"
                placeholder="Busca tus productos favoritos"
                aria-label="Search"
              />
              <Button variant="light">
                <BsSearch size={20} />
              </Button>
            </Form>

            <Nav className="ms-3" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="#action1" className="text-center">
                <BiMap size={25} />
                <span className="ms-2">Ubicacion</span>
              </Nav.Link>
              <Nav.Link href="products" className="text-center me-3">
                Productos
              </Nav.Link>
              <Nav.Link href="chazas" className="text-center me-3">
                Chazas
              </Nav.Link>
              <Nav.Link href="#" className="text-center">
                <FaShoppingCart size={25} />
                <span className="ms-2">Carrito</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
