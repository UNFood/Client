import React from "react";
import styles from "@/styles/sidebar.chaza.store.module.css";
import { Card, Nav, Form } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { BiMap } from "react-icons/bi";
import { BsFillChatDotsFill } from "react-icons/bs";
import { Chaza } from "@/types/chaza";


interface chazaProps {
  chaza: Chaza;
}

function SidebarChazaStore({chaza}: chazaProps) {

  let categories=chaza.products.map((product) => product.category);

  categories = categories.filter((category, index) => {
    return categories.indexOf(category) === index;
  }
  );
    
  const renderCategories = categories.map((category, index) => {
    return (
        <Link className="nav-link" href={`/client/chazas/${chaza.name}?category=${category}`} key={index}>
          {category}
        </Link>
    );
  });

  return (
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
            Ubicación: {chaza.address}
          </Form.Label>
          <Form.Label className="d-flex align-items-center">
            <BsFillChatDotsFill size={16}></BsFillChatDotsFill>
            Telefono: {chaza.phone}
          </Form.Label>
          <Form.Label className="d-flex align-items-  ">
            <BiMap size={16}></BiMap>
            Ubicación: {chaza.address}
          </Form.Label>
        </div>
      </div> 
      <div className={styles.categories}>
        {renderCategories}
      </div>
    </Nav>
  );
}

export default SidebarChazaStore;
