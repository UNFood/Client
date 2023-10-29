import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  Dropdown,
} from "react-bootstrap";
import Image from "next/image";
import styles from "@/styles/navbar.module.css";
import { BiMap } from "react-icons/bi";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { BiStoreAlt, BiPackage, BiReceipt } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import logout from "@/utils/logout";
import Location from "./Location";
import Cart from "./Client/Cart";
import { MdAccountCircle } from "react-icons/md";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Cart show={show} handleClose={handleClose}></Cart>
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
              <Location></Location>
              <Nav.Link href="/client/products" className="text-center me-3">
                <BiPackage size={25} />
                <span> Productos</span>
              </Nav.Link>
              <Nav.Link href="/client/chazas" className="text-center me-3">
                <BiStoreAlt size={25} />
                <span>Chazas</span>
              </Nav.Link>
              <hr />
              <Button variant="success" onClick={handleShow}>
                <FaShoppingCart size={25} />
              </Button>
              <Dropdown>
                <Dropdown.Toggle variant="light" className="w-100">
                  <MdAccountCircle size={25}></MdAccountCircle>
                </Dropdown.Toggle>
                <Dropdown.Menu className={`${styles.dropdown}`}>
                  <Dropdown.Item>
                    <FaUserAlt size={20}></FaUserAlt>
                    <span>Perfil</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="/client/orders">
                    <BiReceipt size={20}></BiReceipt>
                    <span>Ordenes</span>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={logout}>
                    <FiLogOut size={20}></FiLogOut>
                    <span>Salir</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
