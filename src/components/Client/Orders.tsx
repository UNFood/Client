import React, { useState, useEffect } from "react";
import styles from "@/styles/orders.module.css";
import { Card, Badge, Row, Col, ProgressBar, Accordion } from "react-bootstrap";
import Image from "next/image";
import { Order, ProductsOrderReader } from "@/types/order";
import { Product } from "@/types/product";
import currencyFormatter from "@/utils/currency";
import Link from "next/link";

function Orders({ orders }: { orders: Order[] }) {
  const [countProgress, setCountProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountProgress((countProgress) => countProgress + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const renderProducts = (products: ProductsOrderReader[]) =>
    products.map((product) => (
      <div className="d-flex justify-content-between align-items-center">
        <Image
          src={product.product.image.toString()}
          alt={product.product.name.toString()}
          width={66}
          height={56}
        ></Image>
        <div>
          <p className="m-auto">
            {product.product.name} x {product.quantity}
          </p>
        </div>
      </div>
    ));

  const renderOrders = orders.map((order, index) => {
    const date = new Date(order.createdAt);
    const date2 = new Date();
    const Datenow = new Date();
    return (
      <Card className="w-100" key={index}>
        <Card.Body>
          <Card.Header className="d-flex justify-content-between">
            <strong>{date.toDateString()}</strong>
            <Badge bg="info" pill>
              Pendiente
            </Badge>
          </Card.Header>
          <div className="ms-4 mt-2">
            <Row className="gx-0">
              <Col md={4}>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Ver pedido</Accordion.Header>
                    <Accordion.Body>
                      {renderProducts(order.products)}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <div className="text-end">
                  <p>
                    Total:{" "}
                    <strong> {currencyFormatter.format(order.total)} </strong>
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <div className="d-flex flex-column m-auto mt-3">
                  {order.state === 0 ? (
                    <p className="text-secondary m-auto">
                      {" "}
                      Tu pedido esta pendiente{" "}
                    </p>
                  ) : order.state === 1 ? (
                    <p className="text-warning m-auto">
                      {order.state} Tu pedido esta siendo preparado
                    </p>
                  ) : order.state === 2 ? (
                    <p className="text-success m-auto">
                      Ya puedes recoger tu pedido
                    </p>
                  ) : (
                    <p className="text-danger m-auto">Pedido entregado</p>
                  )}
                  <Link
                    href={`/client/chaza/${order.chaza}`}
                    className="m-auto nav-link text-success"
                  >
                    Ver chaza
                  </Link>
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
    );
  });

  return (
    <div className={`${styles.orders}`}>
      <h1 className="p-3">Tus pedidos</h1>
      <div>
        {orders.length === 0 ? (
          <>
            <h1>No tienes pedidos</h1>
            <Link href={`/client/products/`} className="btn btn-primary">
              Compra ahora
            </Link>
          </>
        ) : (
          renderOrders
        )}
      </div>
    </div>
  );
}

export default Orders;
