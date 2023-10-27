import React, { useState, useEffect } from "react";
import styles from "@/styles/orders.module.css";
import { Card, Badge, Row, Col, ProgressBar, Accordion } from "react-bootstrap";
import Image from "next/image";

function Orders() {
  const [countProgress, setCountProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountProgress((countProgress) => countProgress + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={`${styles.orders}`}>
      <h1 className="p-3">Tus pedidos</h1>
      <div className="ms-5 me-5 mt-3">
        <Card className="w-100">
          <Card.Body>
            <Card.Header className="d-flex justify-content-between">
              <strong>20 de Octubre</strong>
              <Badge bg="info" pill>
                Pendiente
              </Badge>
            </Card.Header>
            <div className="ms-4 mt-2">
              <Row className="gx-0">
                <Col md={4}>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Ver pedido</Accordion.Header>
                      <Accordion.Body>
                        <div className="d-flex justify-content-between align-items-center">
                          <Image
                            src="/images/empanada.png"
                            alt="empanada"
                            width={66}
                            height={56}
                          ></Image>
                          <div>
                            <p className="m-auto">Empanada x3</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <Image
                            src="/images/empanada.png"
                            alt="empanada"
                            width={66}
                            height={56}
                          ></Image>
                          <div>
                            <p className="m-auto">Empanada x3</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <Image
                            src="/images/empanada.png"
                            alt="empanada"
                            width={66}
                            height={56}
                          ></Image>
                          <div>
                            <p className="m-auto">Empanada x3</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <Image
                            src="/images/empanada.png"
                            alt="empanada"
                            width={66}
                            height={56}
                          ></Image>
                          <div>
                            <p className="m-auto">Empanada x3</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <Image
                            src="/images/empanada.png"
                            alt="empanada"
                            width={66}
                            height={56}
                          ></Image>
                          <div>
                            <p className="m-auto">Empanada x3</p>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <div className="text-end">
                    <p>
                      Total: <strong>7500</strong>
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="d-flex m-auto mt-3">
                    <p className="text-secondary m-auto">
                      Tu pedido esta pendiente
                    </p>
                    <p className="text-warning d-none">
                      Tu pedido esta siendo preparado
                    </p>
                    <p className="text-success d-none">
                      Ya puedes recoger tu pedido
                    </p>
                    <p className="text-success d-none">
                      Has recogido tu pedido
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="mt-3">
                    <ProgressBar now={countProgress} animated></ProgressBar>
                  </div>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Orders;
