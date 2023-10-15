import React from "react";
import styles from "@/styles/products.module.css";
import Image from "next/image";
import Link from "next/link";
import { Card, Row, Col, Breadcrumb } from "react-bootstrap";
import { Product } from "@/types/product";
import currencyFormater from "@/utils/currency";
import { BsCartPlusFill, BsCartCheckFill } from "react-icons/bs";

function Products({ products }: { products: Product[] }) {
  const renderProducts = products.map((product, index) => {
    return (
      <Col sm={6} md={4} xl={3} className="mb-5" key={index}>
        <Card className={`${styles.product_card} m-auto`}>
          <div>
            <Image
              src="/images/empanada.png"
              alt="emapanada"
              width={260}
              height={179}
            ></Image>
            <div className="position-absolute top-0">
              <button className="btn btn-light  rounded-0">
                <BsCartPlusFill></BsCartPlusFill>
              </button>
            </div>
          </div>

          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <h1>{currencyFormater.format(product.price)}</h1>
          </Card.Body>
          <Link
            href={`chaza/${product.name_chaza}`}
            className="btn btn-light mb-3 w-100 rounded-0"
          >
            Ver tienda
          </Link>
        </Card>
      </Col>
    );
  });

  return (
    <div className={`${styles.products}`}>
      <div className="mb-5 mt-3">
        <Breadcrumb>
          <li className="breadcrumb-item">
            <Link href="/client/home"> UNFood</Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/client/products"> Productos</Link>
          </li>
          <li className="breadcrumb-item active">Todo</li>
        </Breadcrumb>
      </div>
      <Row className="gx-0">{renderProducts}</Row>
    </div>
  );
}

export default Products;
