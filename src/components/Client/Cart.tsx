import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Offcanvas,
  Accordion,
  Col,
  Row,
  Button,
  ProgressBar,
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { getCart } from "@/utils/cart";
import CartProducts from "./CartProducts";
import { Cart } from "@/types/cart";

function Cart({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: () => void;
}) {
  const [cart, setCart] = useState<Cart>({});

  useEffect(() => {
    setCart(getCart());
  }, [show]);

  const renderCartChaza = Object.keys(cart).map((key, index) => {
    return (
      <Accordion.Item eventKey={index.toString()} key={index}>
        <Accordion.Header>
          <strong>{key}</strong>
        </Accordion.Header>
        <Accordion.Body>
          <Link
            href="/client/chaza/mcdonals"
            className="nav-link text-secondary border-bottom"
          >
            Volver a la tienda
          </Link>

          <CartProducts products={cart[key]} chaza={key}></CartProducts>
        </Accordion.Body>
      </Accordion.Item>
    );
  });

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <FaShoppingCart></FaShoppingCart> Carrito
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Accordion>{renderCartChaza}</Accordion>
        <div className="position-absolute bottom-0 mb-2 w-100">
          <Button
            variant="link"
            className="nav-link m-auto"
            onClick={() => localStorage.removeItem("cart")}
          >
            <FaTrash size={20}></FaTrash>
            <span className="ms-2">Vaciar todo</span>
          </Button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Cart;
