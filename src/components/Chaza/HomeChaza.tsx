import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/home.chaza.module.css";
import { FiEdit } from "react-icons/fi";
import { Button, Form } from "react-bootstrap";
import { BiMap, BiSolidCategory } from "react-icons/bi";
import { BsFillChatDotsFill } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import Stars from "../Stars";
import { ChazaUpdate } from "@/types/chaza";
import metodosPago from "@/utils/paymentMethods";
import categorias from "@/utils/categories";
import { Chaza } from "@/types/chaza";

function HomeChaza({ chazaData }: { chazaData: Chaza }) {
  const [editable, setEditable] = useState(false);
  const [chaza, setChaza] = useState<ChazaUpdate>({
    description: chazaData.description,
    type: chazaData.type,
    address: chazaData.address,
    phone: chazaData.phone,
    payment_method: chazaData.payment_method,
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setChaza((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const renderPaymentMethods = Object.keys(metodosPago).map((key, index) => {
    return (
      <Form.Check
        className="text-primary ms-3"
        key={key}
        label={metodosPago[key]}
        disabled={!editable}
        value={metodosPago[key]}
        checked={chaza.payment_method.includes(parseInt(key))}
        onChange={(event: React.ChangeEvent) => {
          const isChecked = (event.target as HTMLInputElement).checked;
          const prevData = chaza;
          if (!isChecked) {
            if (prevData.payment_method.includes(parseInt(key))) {
              prevData.payment_method.splice(
                prevData.payment_method.indexOf(parseInt(key))
              );
              setChaza(prevData);
            }
            return;
          }
          prevData.payment_method.push(parseInt(key));
          setChaza(prevData);
        }}
      ></Form.Check>
    );
  });

  const renderCategories = Object.keys(categorias).map((key, index) => {
    return (
      <option key={key} value={key}>
        {categorias[key]}
      </option>
    );
  });
  return (
    <div className=" w-100 h-100">
      <div className={styles.img_container}>
        <Image src="/images/mcdonalds.png" alt="logo" fill></Image>
      </div>
      <div className="p-4">
        <div className="d-flex justify-content-between mb-3">
          <div className={`${styles.title}`}>
            <h1 className="me-3">{chazaData.name}</h1>
            <Stars number={chazaData.score}></Stars>
          </div>
          <Button variant="danger" onClick={() => setEditable(!editable)}>
            <FiEdit size={30}></FiEdit>
          </Button>
        </div>
        <Form className={`${styles.info} mb-3`}>
          <Form.Group className="mb-3">
            <Form.Control
              name="description"
              as="textarea"
              defaultValue={chazaData.description?.toString()}
              disabled={!editable}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 d-flex">
            <Form.Label className="d-flex align-items-center me-2">
              <BiMap size={25}></BiMap>
              Ubicación
            </Form.Label>
            <Form.Control
              name="address"
              type="text"
              defaultValue={chazaData.address?.toString()}
              disabled={!editable}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 d-flex">
            <Form.Label className="d-flex align-items-center me-2">
              <BsFillChatDotsFill size={25}></BsFillChatDotsFill>
              Telefono.
            </Form.Label>
            <Form.Control
              name="phone"
              type="text"
              defaultValue={chazaData.phone?.toString()}
              disabled={!editable}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 d-flex">
            <Form.Label className="d-flex align-items-center me-2">
              <BiSolidCategory size={25}></BiSolidCategory>
              Categoria
            </Form.Label>
            <Form.Select
              name="type"
              disabled={!editable}
              defaultValue={chazaData.type}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                const { name, value } = event.target;
                const prevData = chaza;
                prevData.type = parseInt(value);
                setChaza(prevData);
              }}
            >
              {renderCategories}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 d-flex">
            <Form.Label className="d-flex align-items-center me-2">
              <MdPayment size={25}></MdPayment>
              Med.Pago
            </Form.Label>
            <div className={`${styles.payment}`}>{renderPaymentMethods}</div>
          </Form.Group>
          <Button>Guardar</Button>
        </Form>
      </div>
    </div>
  );
}

export default HomeChaza;
