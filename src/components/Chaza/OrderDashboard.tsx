import React, { useState } from "react";
import styles from "@/styles/chaza.orderdashboard.module.css";
import { Card, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { IoLogoWhatsapp } from "react-icons/io5";

const orderlist = [
  {
    clientname: "Pepito Juarez",
    ordernumber: 3,
    paymentmethod: "Efectivo",
    arrivaltime: 24,
  },
  {
    clientname: "Pepito Juarez",
    ordernumber: 3,
    paymentmethod: "Efectivo",
    arrivaltime: 24,
  },
  {
    clientname: "Pepito Juarez",
    ordernumber: 3,
    paymentmethod: "Efectivo",
    arrivaltime: 24,
  },
  {
    clientname: "Pepito Juarez",
    ordernumber: 3,
    paymentmethod: "Efectivo",
    arrivaltime: 24,
  },
  {
    clientname: "Pepito Juarez",
    ordernumber: 3,
    paymentmethod: "Efectivo",
    arrivaltime: 24,
  },
];
const currentOrder = [
  "Hamburguesa Carne Ranchera           $35.900",
  "Papas casco Mediana                   $6000",
  "Salsa Ketchup                         $0",
  "Salsa Mostaza                         $0",
  "Salsa Piña                            $0",
  "Helado Oreo                           $8900",
  "Hamburguesa Carne Ranchera           $35.900",
  "Papas casco Mediana                   $6000",
  "Salsa Ketchup                         $0",
  "Salsa Mostaza                         $0",
  "Salsa Piña                            $0",
  "Helado Oreo                           $8900",
  "Hamburguesa Carne Ranchera           $35.900",
  "Papas casco Mediana                   $6000",
  "Salsa Ketchup                         $0",
  "Salsa Mostaza                         $0",
  "Salsa Piña                            $0",
  "Helado Oreo                           $8900",
  "Hamburguesa Carne Ranchera           $35.900",
  "Papas casco Mediana                   $6000",
  "Salsa Ketchup                         $0",
  "Salsa Mostaza                         $0",
  "Salsa Piña                            $0",
  "Helado Oreo                           $8900",
];

const renderorderList = orderlist.map((order, index) => {
  return (
    <Card
      className={`${styles.order_card}`}
      key={index}
      style={{ minWidth: "200px" }}
    >
      <Card.Header>
        <div className="d-flex justify-content-between">
          <Card.Title className="text-foreground/90">
            {order.clientname}
          </Card.Title>
          <Card.Title className="text-foreground/90"># 987987</Card.Title>
        </div>
      </Card.Header>
      <Card.Body>
        <h4 className="text-warning">Pendiente</h4>
        <h5 className="text-medium text-foreground/80 color: #979797">
          05 de Octubre
        </h5>
      </Card.Body>
    </Card>
  );
});

const rendercurrentorder = currentOrder.map((item, index) => {
  return (
    <p key={index} className={`${styles.itemorder} fs-4 `}>
      x1 {item}
    </p>
  );
});

function OrderDashboard() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Row className="w-100 gx-0 ">
      <Col md={5} className={`${styles.navbar} overflow-auto`}>
        {renderorderList}
      </Col>

      <Col md={7}>
        <Card
          className={`${styles.currentorder_card}  mt-3  h-90 w-90 ms-2 me-2`}
        >
          <Card.Header>
            <div className="d-flex justify-content-between align-items-center">
              <Card.Title className="m-0"> Pepito Juarez</Card.Title>
              <Button variant="outline-success">
                <IoLogoWhatsapp size={30}></IoLogoWhatsapp>
              </Button>
            </div>
            <Card.Title></Card.Title>
          </Card.Header>
          <Card.Body className="overflow-auto">{rendercurrentorder}</Card.Body>

          <Card.Footer className="mt-4 mb-4 h-90 w-90 ms-4 me-3 ">
            <h1>Total $52800</h1>
            <p className="fs-4">
              Estado actual: <span>Pendiente</span>
            </p>
            <ProgressBar animated variant="warning" now={60}></ProgressBar>
            <div className="d-flex justify-content-end align-items-center mt-3">
              <p className="fs-3 m-0">Actualizar estado a:</p>
              <Button variant="success" className="ms-3">
                En preparación
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
}

export default OrderDashboard;
