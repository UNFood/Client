<<<<<<< HEAD
import React, { useState } from 'react';
import styles from "@/styles/products.module.css";
=======
import React, { useState } from "react";
>>>>>>> origin/develop
import Image from "next/image";
import Link from "next/link";
import { Card, Row, Col, Breadcrumb } from "react-bootstrap";
import ModalProductDetail from "./ModalProductDetail";
import styles from "@/styles/products.module.css";
import { Product } from "@/types/product";
import currencyFormater from "@/utils/currency";
import { BsCartPlusFill, BsCartCheckFill } from "react-icons/bs";

<<<<<<< HEAD
const products = [
  {
    name: "Empanada de pollo y champiñon",
    description: "Empanada rellena de pollo desmechado, arroz y champiñones.",
    price: "$2.800",
    category: "Comida rapida",
    image: "/images/empanada.png",
    stock: 10,
    total_sales: 0,
  },
  {
    name: "Empanada de pollo y champiñon",
    description: "Empanada rellena de pollo desmechado, arroz y champiñones.",
    price: "$2.800",
    category: "Comida rapida",
    image: "/images/empanada.png",
    stock: 10,
    total_sales: 0,
  },
  {
    name: "Empanada de pollo y champiñon",
    description: "Empanada rellena de pollo desmechado, arroz y champiñones.",
    price: "$2.800",
    category: "Comida rapida",
    image: "/images/empanada.png",
    stock: 10,
    total_sales: 0,
  },
  {
    name: "Empanada de pollo y champiñon",
    description: "Empanada rellena de pollo desmechado, arroz y champiñones.",
    price: "$2.800",
    category: "Comida rapida",
    image: "/images/empanada.png",
    stock: 10,
    total_sales: 0,
  },
  {
    name: "Empanada de pollo y champiñon",
    description: "Empanada rellena de pollo desmechado, arroz y champiñones.",
    price: "$2.800",
    category: "Comida rapida",
    image: "/images/empanada.png",
    stock: 10,
    total_sales: 0,
  },
  {
    name: "Empanada de pollo y champiñon",
    description: "Empanada rellena de pollo desmechado, arroz y champiñones.",
    price: "$2.800",
    category: "Comida rapida",
    image: "/images/empanada.png",
    stock: 10,
    total_sales: 0,
  },
  {
    name: "Empanada de pollo y champiñon",
    description: "Empanada rellena de pollo desmechado, arroz y champiñones.",
    price: "$2.800",
    category: "Comida rapida",
    image: "/images/empanada.png",
    stock: 10,
    total_sales: 0,
  },
  {
    name: "Empanada de pollo y champiñon",
    description: "Empanada rellena de pollo desmechado, arroz y champiñones.",
    price: "$2.800",
    category: "Comida rapida",
    image: "/images/empanada.png",
    stock: 10,
    total_sales: 0,
  },
  {
    name: "Empanada de pollo y champiñon",
    description: "Empanada rellena de pollo desmechado, arroz y champiñones.",
    price: "$2.800",
    category: "Comida rapida",
    image: "/images/empanada.png",
    stock: 10,
    total_sales: 0,
  },
  {
    name: "Empanada de pollo y champiñon",
    description: "Empanada rellena de pollo desmechado, arroz y champiñones.",
    price: "$2.800",
    category: "Comida rapida",
    image: "/images/empanada.png",
    stock: 10,
    total_sales: 0,
  },
  {
    name: "Empanada de pollo y champiñon",
    description: "Empanada rellena de pollo desmechado, arroz y champiñones.",
    price: "$2.800",
    category: "Comida rapida",
    image: "/images/empanada.png",
    stock: 10,
    total_sales: 0,
  },
];
function Products({ showOverlay, setShowOverlay }: ProductsProps  ) {
  const [showInfoIndex, setShowInfoIndex] = useState<number | null>(null);
  const [showDetails, setShowDetails] = useState(false); // Nuevo estado para el modal

  const handleSHowDetails = () => {  // Definición de la función
    setShowDetails(true);
  };

  const handleCloseDetails = () => {  // Definición de la función para cerrar el modal
    setShowDetails(false);
  };
=======
function Products({ products }: { products: Product[] }) {
  const [showDetails, setShowDetails] = useState(false);
  const handleCloseDetails = () => setShowDetails(false);
  const handleSHowDetails = (product: Product) => {
    setProductSelected(product);
    setShowDetails(true);
  };
  const [productSelected, setProductSelected] = useState<Product>();
>>>>>>> origin/develop

  const renderProducts = products.map((product, index) => {
    return (
      <Col sm={6} md={4} xl={3} className="mb-5" key={index}>
        <Card
<<<<<<< HEAD
          className={`${styles.product_card} m-auto`}
          onClick={handleSHowDetails}
          onMouseEnter={() => setShowInfoIndex(index)}  // Actualizado
          onMouseLeave={() => setShowInfoIndex(null)}   // Actualizado
        >
          <Image
            src={product.image}
            alt="Empanada"
            width={260}
            height={179}
          ></Image>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <h1>{product.price}</h1>
            {showInfoIndex === index && <div>Información adicional del producto</div>}  // Actualizado
=======
          className={`${styles.product_card} ${styles.pointer} m-auto `}
          onClick={() => handleSHowDetails(product)}
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
>>>>>>> origin/develop
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
        product={productSelected}
      ></ModalProductDetail>
      <div className={`${styles.products}`}>
        <Row className="gx-0">{renderProducts}</Row>
      </div>
    </>
  );
}
interface ProductsProps {
  showOverlay: boolean;
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}

export default Products;
