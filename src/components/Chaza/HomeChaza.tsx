import React, { useState } from "react";
import SidebarChaza from "./SidebarChaza";
import Image from "next/image";
import styles from "@/styles/home.chaza.module.css";
import { FiEdit } from "react-icons/fi";
import { Button, Form } from "react-bootstrap";
import { BiMap, BiSolidCategory } from "react-icons/bi";
import { BsFillChatDotsFill } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import Stars from "../Stars";
import { ChazaUpdate } from "@/types/chaza";

function HomeChaza() {
  const [editable, setEditable] = useState(false);
  const [chaza, setChaza] = useState<ChazaUpdate>({
    description: "",
    type: -1,
    address: "",
    phone: "",
    payment_method: [],
  });

  return (
    <div className={`${styles.home_chaza} h-100`}>
      <SidebarChaza></SidebarChaza>
      <div className=" w-100 h-100">
        <div className={styles.img_container}>
          <Image src="/images/mcdonalds.png" alt="logo" fill></Image>
        </div>
        <div className="p-4">
          <div className="d-flex justify-content-between mb-3">
            <div className={`${styles.title}`}>
              <h1 className="me-3">McDonald's</h1>
              <Stars number={4}></Stars>
            </div>
            <Button variant="danger" onClick={() => setEditable(!editable)}>
              <FiEdit size={30}></FiEdit>
            </Button>
          </div>
          <Form className={`${styles.info} mb-3`}>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                defaultValue="Que esperas para probar nustros McCombos apetitosos desde 17.900 o
            deleita tu dia con el nuevo mcflurry y nucita"
                disabled={!editable}
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
                disabled={!editable}
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
                disabled={!editable}
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
                disabled={!editable}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3 d-flex">
              <Form.Label className="d-flex align-items-center me-2">
                <MdPayment size={25}></MdPayment>
                Med.Pago
              </Form.Label>
              <Form.Control
                type="text"
                defaultValue="Nequi"
                disabled={!editable}
              ></Form.Control>
            </Form.Group>
            <Button>Guardar</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default HomeChaza;
