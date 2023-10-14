import React, { useState } from 'react';
import styles from "@/styles/products.module.css";
import Image from "next/image";
import Link from "next/link";
import { Card, Row, Col, Breadcrumb } from "react-bootstrap";
import ModalProductDetail from "../Chaza/ModalProductRegister";

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

  const renderProducts = products.map((product, index) => {
    return (
      <Col sm={6} md={4} xl={3} className="mb-5" key={index}>
        <Card
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
              <Link href="/client/products"> Productos</Link>
            </li>
            <li className="breadcrumb-item active">Todo</li>
          </Breadcrumb>
        </div>
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
