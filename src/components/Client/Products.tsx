import React, { useState } from "react";
import styles from "@/styles/products.module.css";
import Image from "next/image";
import Link from "next/link";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Product } from "@/types/product";
import currencyFormater from "@/utils/currency";
import { BsCartPlusFill } from "react-icons/bs";
import { addProductToCart } from "@/utils/cart";
import Message from "@/components/Message";

function Products({ products }: { products: Product[] }) {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handelAddProductToCart = (product: Product) => {
    if (addProductToCart(product.name_chaza.toString(), product, 1)) {
      setMessage("Producto agregado al carrito");
      setType("success");
      handleShow();
    } else {
      setMessage("Producto ya agregado al carrito");
      setType("warning");
      handleShow();
    }
  };

  const renderProducts = products.map((product, index) => {
    return (
      <Col sm={6} md={4} xl={3} className="mb-5" key={index}>
        <Card className={`${styles.product_card} m-auto`}>
          <div className="text-center">
            <Image
              src={product.image.toString()}
              alt={product.name.toString()}
              width={260}
              height={179}
            ></Image>
            <div className="position-absolute top-0">
              <Button
                className="btn btn-light  rounded-0"
                onClick={() => handelAddProductToCart(product)}
              >
                <BsCartPlusFill></BsCartPlusFill>
              </Button>
            </div>
          </div>

          <Card.Body className={styles.product_card_body}>
            <div>
              <h5>
                {product.name.length > 22
                  ? product.name.substring(0, 22).concat("...")
                  : product.name}
              </h5>
              <Card.Text>
                {product.description.length > 80
                  ? product.description.substring(0, 80).concat("...")
                  : product.description}
              </Card.Text>
            </div>

            <h1 className="mt-3">{currencyFormater.format(product.price)}</h1>
          </Card.Body>
          <div>
            <Link
              href={`chaza/${product.name_chaza}`}
              className="btn btn-light w-100 rounded-0 mb-0"
            >
              Ver tienda
            </Link>
          </div>
        </Card>
      </Col>
    );
  });

  return (
    <>
      <Message
        show={show}
        handleClose={handleClose}
        message={message}
        type={type}
      ></Message>
      <div className={`${styles.products} mt-5 w-100`}>
        <Row className="gx-0">{renderProducts}</Row>
      </div>
    </>
  );
}

export default Products;
