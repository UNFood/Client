import React from "react";
import SidebarChazaStore from "./SidebarChazaStore";
import Image from "next/image";
import styles from "@/styles/home.chaza.module.css";
import { FiEdit } from "react-icons/fi";
import { Button, Form } from "react-bootstrap";
import { BiMap, BiSolidCategory } from "react-icons/bi";
import { BsFillChatDotsFill } from "react-icons/bs";
import Stars from "../Stars";

function ChazaStore() {
  return (
    <div className={`${styles.home_chaza}`}>
      <SidebarChazaStore></SidebarChazaStore>
      <div className=" w-100">
        <div className={styles.img_container}>
          <Image src="/images/mcdonalds.png" alt="logo" fill></Image>
        </div>
        <div className="p-4">
          <div className="d-flex justify-content-between mb-3">
            <div className="d-flex align-items-center">
              <h1 className="me-3">McDonald's</h1>
              <Stars number={4}></Stars>
            </div>
            <Button variant="danger">
              <FiEdit size={40}></FiEdit>
            </Button>
          </div>
          <Form className={`${styles.info}`}>
            <Form.Group className="mb-3">
              <Form.Control
                type="textarea"
                defaultValue="Que esperas para probar nustros McCombos apetitosos desde 17.900 o
            deleita tu dia con el nuevo mcflurry y nucita"
                disabled
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3 d-flex">
              <Form.Label className="d-flex align-items-center me-2">
                <BiMap size={25}></BiMap>
                Ubicación
              </Form.Label>
              <Form.Control
                type="text"
                defaultValue="Plaza Che"
                disabled
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3 d-flex">
              <Form.Label className="d-flex align-items-center me-2">
                <BsFillChatDotsFill size={25}></BsFillChatDotsFill>
                Telefono.
              </Form.Label>
              <Form.Control
                type="text"
                defaultValue="6666666"
                disabled
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3 d-flex">
              <Form.Label className="d-flex align-items-center me-2">
                <BiSolidCategory size={25}></BiSolidCategory>
                Categoria
              </Form.Label>
              <Form.Control
                type="text"
                defaultValue="Comida Rapida"
                disabled
              ></Form.Control>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ChazaStore;
