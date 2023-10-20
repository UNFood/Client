import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Offcanvas,
  Accordion,
  Col,
  Row,
  Button,
  ProgressBar,
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

function Cart({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: () => void;
}) {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <FaShoppingCart></FaShoppingCart> Carrito
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <strong>McDonals</strong>
            </Accordion.Header>
            <Accordion.Body>
              <Link
                href="/client/chaza/mcdonals"
                className="nav-link text-secondary"
              >
                Volver a la tienda
              </Link>
              <Row className="mt-3 pb-2 border-top">
                <Col sm={4} className="border-bottom text-center p-2">
                  <Image
                    src="/images/empanada.png"
                    alt="image"
                    width={66}
                    height={56}
                  ></Image>
                </Col>
                <Col sm={8} className="border-bottom p-2">
                  <div className="d-flex justify-content-between">
                    <div>
                      <p>Empanada</p>
                    </div>
                    <div>
                      <Button variant="danger" size="sm">
                        <FaTrash />
                      </Button>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet</p>
                  <div className="d-flex justify-content-between">
                    <p>2.000</p>
                    <div>
                      <Button
                        size="sm"
                        variant="light"
                        className="p-1 rounded-start border"
                      >
                        -
                      </Button>
                      <span className="me-2 ms-2">2</span>
                      <Button
                        size="sm"
                        variant="light"
                        className="p-1 rounded-end border"
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col sm={4} className="border-bottom text-center p-2">
                  <Image
                    src="/images/empanada.png"
                    alt="image"
                    width={66}
                    height={56}
                  ></Image>
                </Col>
                <Col sm={8} className="border-bottom p-2">
                  <div className="d-flex justify-content-between">
                    <div>
                      <p>Empanada</p>
                    </div>
                    <div>
                      <Button variant="danger" size="sm">
                        <FaTrash />
                      </Button>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet</p>
                  <div className="d-flex justify-content-between">
                    <p>2.000</p>
                    <div>
                      <Button
                        size="sm"
                        variant="light"
                        className="p-1 rounded-start border"
                      >
                        -
                      </Button>
                      <span className="me-2 ms-2">2</span>
                      <Button
                        size="sm"
                        variant="light"
                        className="p-1 rounded-end border"
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>

              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="m-auto">Total: 4.000</p>
                </div>
                <Button variant="success">Confirmar compra</Button>
                <Button variant="danger">
                  <FaTrash size={16}></FaTrash>
                </Button>
              </div>
              <div className="d-none">
                <p className="m-auto">Tu pedido esta en proceso</p>
                <ProgressBar variant="success" now={60} animated />
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <strong>McDonals</strong>
            </Accordion.Header>
            <Accordion.Body>
              <Link
                href="/client/chaza/mcdonals"
                className="nav-link text-secondary"
              >
                Volver a la tienda
              </Link>
              <Row className="mt-3 pb-2 border-top">
                <Col sm={4} className="border-bottom text-center p-2">
                  <Image
                    src="/images/empanada.png"
                    alt="image"
                    width={66}
                    height={56}
                  ></Image>
                </Col>
                <Col sm={8} className="border-bottom p-2">
                  <div className="d-flex justify-content-between">
                    <div>
                      <p>Empanada</p>
                    </div>
                    <div>
                      <Button variant="danger" size="sm">
                        <FaTrash />
                      </Button>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet</p>
                  <div className="d-flex justify-content-between">
                    <p>2.000</p>
                    <div>
                      <Button
                        size="sm"
                        variant="light"
                        className="p-1 rounded-start border"
                      >
                        -
                      </Button>
                      <span className="me-2 ms-2">2</span>
                      <Button
                        size="sm"
                        variant="light"
                        className="p-1 rounded-end border"
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col sm={4} className="border-bottom text-center p-2">
                  <Image
                    src="/images/empanada.png"
                    alt="image"
                    width={66}
                    height={56}
                  ></Image>
                </Col>
                <Col sm={8} className="border-bottom p-2">
                  <div className="d-flex justify-content-between">
                    <div>
                      <p>Empanada</p>
                    </div>
                    <div>
                      <Button variant="danger" size="sm">
                        <FaTrash />
                      </Button>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet</p>
                  <div className="d-flex justify-content-between">
                    <p>2.000</p>
                    <div>
                      <Button
                        size="sm"
                        variant="light"
                        className="p-1 rounded-start border"
                      >
                        -
                      </Button>
                      <span className="me-2 ms-2">2</span>
                      <Button
                        size="sm"
                        variant="light"
                        className="p-1 rounded-end border"
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>

              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="m-auto">Total: 4.000</p>
                </div>
                <Button variant="success">Confirmar compra</Button>
                <Button variant="danger">
                  <FaTrash size={16}></FaTrash>
                </Button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="position-absolute bottom-0 mb-2 w-100">
          <Button variant="link" className="nav-link m-auto">
            <FaTrash size={20}></FaTrash>
            <span className="ms-2">Vaciar todo</span>
          </Button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Cart;
