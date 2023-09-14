import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import Image from "next/image";
import styles from "../styles/navbar.module.css";
import { BiMap } from "react-icons/bi";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import ModalLoginRegister from "./ModalLoginRegister";

// @ToDo hacer header

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ModalLoginRegister
        show={show}
        handleClose={handleClose}
      ></ModalLoginRegister>
      <Navbar fixed="top" expand="lg" className={`${styles.navbar}`}>
        <Container fluid>
          <Navbar.Brand href="#">
            <Image
              src="/favicon.ico"
              width={200}
              height={50}
              alt="logo"
            ></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">
                <BiMap size={25} />
                <span className="ms-2">¿Donde te encuentras ubicado?</span>
              </Nav.Link>
            </Nav>
            <Form className="d-flex w-50 ms-3">
              <Button variant="light">
                <BsSearch size={20} />
              </Button>
              <Form.Control
                type="search"
                placeholder="Busca tus productos favoritos"
                aria-label="Search"
              />
            </Form>
            <Nav
              className="ms-3 my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action2" className="me-3">
                Productos
              </Nav.Link>
              <Button onClick={handleShow} className="me-3">
                <FaUserAlt size={20} />
                <span className="ms-2">Iniciar sesión</span>
              </Button>
              <Nav.Link href="#">
                <FaShoppingCart size={25} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
