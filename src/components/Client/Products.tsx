import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, Row, Col, Breadcrumb } from "react-bootstrap";
import ModalProductDetail from "./ModalProductDetail";
import styles from "@/styles/products.module.css";
import { Product } from "@/types/product";
import currencyFormater from "@/utils/currency";
import { BsCartPlusFill, BsCartCheckFill } from "react-icons/bs";

function Products({ products }: { products: Product[] }) {
  const [showDetails, setShowDetails] = React.useState(false);
  const handleCloseDetails = () => setShowDetails(false);
  const handleSHowDetails = () => setShowDetails(true);

  const renderProducts = products.map((product, index) => {
    return (
      <Col sm={6} md={4} xl={3} className="mb-5" key={index}>
        <Card
          className={`${styles.product_card} ${styles.pointer} m-auto `}
          onClick={handleSHowDetails}
        >
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
        </Card>
      </Col>
    );
  });

  return (
    <>
      <ModalProductDetail
        show={showDetails}
        handleClose={handleCloseDetails}
      ></ModalProductDetail>
      <div className={`${styles.products}`}>
        <div className="mb-5 mt-3">
          <Breadcrumb>
            <li className="breadcrumb-item">
              <Link href="/client/home"> UNFood</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/client/chazas"> Chazas</Link>
            </li>
            <li className="breadcrumb-item">
              <Link onClick={()=>window.location.reload()} href="#"> {name}</Link>
            </li>
            <li className="breadcrumb-item active">{category}</li>
          </Breadcrumb>
        </div>
        <Row className="gx-0">{renderProducts}</Row>
      </div>
    </>
  );
}

export default Products;
