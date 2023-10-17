import React, { useEffect, useState, useCallback } from "react";
import Modal from "react-bootstrap/Modal";
import { FaTrash } from "react-icons/fa";
import { Product } from "@/types/product";
import categoriasChaza from "@/utils/categoriesChaza";
import { Button, Col, Row } from "react-bootstrap";
import styles from "@/styles/products.module.css";
import currencyFormatter from "@/utils/currency";
import Image from "next/image";

function ModalProductDetail({
  show,
  handleClose,
  product,
}: {
  show: boolean;
  handleClose: () => void;
  product: Product;
}) {
  const [count, setCount] = useState(1);

  // Static Information
  const staticInfo = {
    rating: "4.5",
    reviews: "250 Reviews",
    deliveryTime: "30-45 mins",
  };

  const handleAddToCart = (id: String) => {
    // Implement your logic to add the product to the cart
    console.log("Agregado al carro", id);
  };

  const handleAddToCartAndBuy = (id: String) => {
    // Implement your logic to add the product to the cart
    console.log("Agregado al carro y comprando", id);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="xl"
      centered
      className={`${styles.product_detail}`}
    >
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={6} lg={6}>
            <div className={styles.img_container}>
              <Image
                src={product.image.toString()}
                alt={`${product.name} image`}
                fill
              ></Image>
            </div>
          </Col>
          <Col md={6} lg={6}>
            <p>
              <strong>Descripción: </strong>
              {product.description}
            </p>

            <p>
              Ubicado en: <strong>{product.name_chaza}</strong>
            </p>
            <p>
              <strong>Precio:</strong> {currencyFormatter.format(product.price)}
            </p>
            <p>
              <strong>Unidades Disponibles:</strong> {product.stock.toString()}
            </p>
            <p>
              <strong>Tiempo estimado de entrega:</strong>{" "}
              {staticInfo.deliveryTime}
            </p>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer style={{ justifyContent: "flex-start" }}>
        <Button size="sm" onClick={() => setCount(1)}>
          <FaTrash />
        </Button>
        <Button size="sm" onClick={() => setCount(count - 1)}>
          -
        </Button>
        <span style={{ margin: "0 10px" }}>{count}</span>
        <Button size="sm" onClick={() => setCount(count + 1)}>
          +
        </Button>
        <Button size="sm" onClick={() => handleAddToCart(product._id)}>
          Agregar y seguir comprando
        </Button>
        <Button
          style={{ backgroundColor: "#550A2D", borderColor: "#550A2D" }}
          size="sm"
          onClick={() => handleAddToCartAndBuy(product._id)}
        >
          Agregar y comprar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalProductDetail;
