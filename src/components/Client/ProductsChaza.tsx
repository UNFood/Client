import React from "react";
import styles from "@/styles/products.module.css";
import Link from "next/link";
import { Card, Row, Col, Breadcrumb } from "react-bootstrap";
import ModalProductDetail from "./ModalProductDetail";
import HorizontalSlider from "./HorizontalSlider";



const productsByCat = [
  {
    categoria: "Comida rapida",
    productos: [
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
    ]
  },
  {
    categoria: "Bebidas",
    productos: [
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
    ]
  }
]
function ProductsChaza() {
  const renderCat = productsByCat.map((cat, index) => {
    return (
      <div key={index}>
        <HorizontalSlider cat={cat} />
      </div>
    );
  });
  return (
    <>
      <div className={`${styles.products}`}>
        <div className="mb-5 mt-3">
          <Breadcrumb>
            <li className="breadcrumb-item">
              <Link href="/client/home"> UNFood</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/client/products"> Chazas</Link>
            </li>
            <li className="breadcrumb-item active">Todo</li>
          </Breadcrumb>
          <div>
          {renderCat}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsChaza;
