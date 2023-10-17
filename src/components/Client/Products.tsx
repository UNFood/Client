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
          <div className="text-center">
            <Image
              src={product.image.toString()}
              alt={product.name.toString()}
              width={260}
              height={179}
            ></Image>
            <div className="position-absolute top-0">
              <button className="btn btn-light  rounded-0">
                <BsCartPlusFill></BsCartPlusFill>
              </button>
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
    <div className={`${styles.products} mt-5 w-100`}>
      <Row className="gx-0">{renderProducts}</Row>
    </div>
  );
}

export default Products;
