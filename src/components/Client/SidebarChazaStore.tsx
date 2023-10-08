import React from "react";
import styles from "@/styles/sidebar.chaza.store.module.css";
import { Card, Nav, Form } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { BiMap } from "react-icons/bi";
import { BsFillChatDotsFill } from "react-icons/bs";
interface categoriesProps {
  categories: string[];
}

function SidebarChazaStore({categories}: categoriesProps) {
  
  const renderCategories = categories.map((category, index) => {
    return (
        <Link className="nav-link" href="" key={index}>
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
            <h1>McDonald's</h1>
          </div>
        </div>
        <Card.Text className={styles.card}>
          Que esperas para probar nuestros McCombos Apetitosos combos desde
          $17.900, o deleita tu dia con el nuevo McFlurry Nucita
        </Card.Text>
          <Form.Label className="d-flex align-items-cente">
            <BiMap size={16}></BiMap>
            Ubicación:
          </Form.Label>
          <Form.Label className="d-flex align-items-center">
            <BsFillChatDotsFill size={16}></BsFillChatDotsFill>
            Telefono:
          </Form.Label>
          <Form.Label className="d-flex align-items-  ">
            <BiMap size={16}></BiMap>
            Ubicación
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
