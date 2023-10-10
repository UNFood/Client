import React from "react";
import Products from "./Products";
import Image from "next/image";
import styles from "@/styles/chaza.store.module.css";
import { Button, Form, Card, Nav } from "react-bootstrap";
import { BiMap, BiSolidCategory } from "react-icons/bi";
import { BsFillChatDotsFill } from "react-icons/bs";
import {Chaza} from "@/types/chaza";
import categorias from "@/utils/categories";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { Product } from "@/types/product";

function ChazaStore({chaza}: {chaza:Chaza}) {

  const [products, setProducts] = useState(chaza.products);
  const [category, setCategory] = useState("");

  const handleCategory = (products:Product[], category:string) => {
    const newProducts = products.filter((product) => product.category === category);
    setProducts(newProducts);
    setCategory(category);
  };

  //Extract categories from products
  let categories=chaza.products.map((product) => product.category);
  categories = categories.filter((category, index) => {
    return categories.indexOf(category) === index;
  }
  );

  const renderCategories = categories.map((category, index) => {
    return (
        <Button key={index} variant="link" className="nav-link" onClick={()=>handleCategory(chaza.products, category)}>
          {category}
        </Button>
    );
  });

  return (
    <div className={`${styles.home_chaza}`}>
      <Nav
      className={`${styles.sidebar_chaza_store} d-flex flex-column`}
    >
      <Image src="/images/mcdonalds.png" alt="imageChazaStore" height={384} width={384}></Image>
      <div className={styles.info}>
        <div className="p-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <h1>{chaza.name}</h1>
          </div>
        </div>  
        <Card.Text className={styles.card}>
          {chaza.description}
        </Card.Text>
          <Form.Label className="d-flex align-items-cente">
            <BiMap size={16}></BiMap>
            Ubicación: <span className="text-secondary ms-2">{chaza.address}</span>
          </Form.Label>
          <Form.Label className="d-flex align-items-center">
            <BsFillChatDotsFill size={16}></BsFillChatDotsFill>
            Telefono: <span className="text-secondary ms-2">{chaza.phone}</span>
          </Form.Label>
          <Form.Label className="d-flex align-items-  ">
            <BiSolidCategory size={16}></BiSolidCategory>
            Categoría: <span className="text-secondary ms-2">{categorias[chaza.type]}</span>
          </Form.Label>
        </div>
      </div> 
      <div className={styles.categories}>
        {renderCategories}
      </div>
    </Nav>
    <Products products={products} category={category}></Products>
    </div>
  );
}


export default ChazaStore;
