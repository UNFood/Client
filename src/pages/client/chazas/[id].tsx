import React from "react";
import Header from "@/components/Header";
import ChazaStore from "@/components/Client/ChazaStore";
import {Chaza} from "@/types/chaza";
import {Product} from "@/types/product"

const products:Product[] = [
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
    category: "Bebidas",
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
    category: "Bebidas",
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
    category: "Bebidas",
    image: "/images/empanada.png",
    stock: 10,
    total_sales: 0,
  },
  {
    name: "Empanada de pollo y champiñon",
    description: "Empanada rellena de pollo desmechado, arroz y champiñones.",
    price: "$2.800",
    category: "Bebidas",
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

const chaza:Chaza={
  _id: "An id",
  owner: "string",
  name: "SexChaza",
  description: "String",
  type: 0,
  address: "Alguna direccion",
  phone: "String",
  products: products,
  score: 100,
  image: "String",
  payment_method: [
    0,
    0,
    0,
  ],
}

interface chazaProps {
  chaza: Chaza;
}

function chazaStore(/*{chaza}: chazaProps*/) {
  return (
    <>
      <Header></Header>
      <ChazaStore chaza={chaza}></ChazaStore>
    </>
  );
}

export default chazaStore;