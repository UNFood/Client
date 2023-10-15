import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import Image from "next/image";
import styles from "@/styles/navbar.module.css";
import { BiMap } from "react-icons/bi";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { BiStoreAlt, BiPackage } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import logout from "@/utils/logout";

// @ToDo hacer header

function Header() {
  return (
    <>
      <Navbar fixed="top" expand="lg" className={`${styles.navbar}`}>
        <Container fluid>
          <Navbar.Brand href="/client/home">
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
            className="justify-content-between"
          >
            <Form className="d-flex m-auto text-center">
              <Form.Control
                type="search"
                placeholder="Busca tus productos favoritos"
                aria-label="Search"
                className="m-auto"
              />
              <Button variant="light">
                <BsSearch size={20} />
              </Button>
            </Form>
            <Nav className="ms-3" navbarScroll>
              <Nav.Link href="#action1" className="text-center">
                <BiMap size={25} />
                <span className="ms-2">Ubicacion</span>
              </Nav.Link>
              <Nav.Link href="/client/products" className="text-center me-3">
                <BiPackage size={25} />
                <span> Productos</span>
              </Nav.Link>
              <Nav.Link href="/client/chazas" className="text-center me-3">
                <BiStoreAlt size={25} />
                <span>Chazas</span>
              </Nav.Link>
              <Nav.Link href="#" className="text-center me-3">
                <FaShoppingCart size={25} />
                <span className="ms-2">Carrito</span>
              </Nav.Link>
              <Button variant="danger" onClick={logout}>
                <FiLogOut size={20}></FiLogOut>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
