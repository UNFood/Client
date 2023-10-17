import React from "react";
import styles from "../../styles/home.module.css";
import Image from "next/image";
import { Col, Row, Button } from "react-bootstrap";
import Counter from "../Counter";
import Link from "next/link";

function Home() {
  return (
    <div className={`${styles.home} h-100`}>
      <section className="p-5">
        <h1>
          UNFood <span>Clientes</span>
        </h1>
        <Row>
          <Col md={12} lg={4}>
            <div className={styles.promotion}>
              <p className="text-light">Pide</p>
              <p>Paga</p>
              <p className="text-light">Recoge</p>
            </div>
            <div className={`${styles.homebtn}`}>
              <Link className="btn btn-success btn-lg" href="chazas">
                {" "}
                ! Compra ahora !
              </Link>
            </div>
          </Col>
          <Col md={12} lg={8}>
            <div className={`${styles.fondo} text-center`}>
              <Image
                src="/images/fondo1.png"
                alt="fondo"
                fill
                className={`${styles.fondo}`}
              ></Image>
            </div>
          </Col>
        </Row>
      </section>
      <Counter></Counter>
    </div>
  );
}

export default Home;
