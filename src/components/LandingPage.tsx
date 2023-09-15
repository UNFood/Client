import React from "react";
import Image from "next/image";
import styles from "../styles/ladingpage.module.css";
import { Row, Col } from "react-bootstrap";

function LandingPage() {
  return (
    <div className={`${styles.landingpage}`}>
      <section className={`${styles.landing}  pb-5`}>
        <div className="p-5">
          <div>
            <h1 className="mt-5">UNFood</h1>
            <p>Comprar en la Nacho nunca fue tan facil . . .</p>
          </div>
          <div className="d-flex justify-content-around mt-5 ">
            <div
              className={`${styles.landingbtn} rounded rounded-4 d-flex justify-content-evenly align-items-center cursor-pointer`}
            >
              <Image
                src="/images/tienda.png"
                alt="tienda"
                width={120}
                height={62}
              ></Image>
              CHAZA
            </div>
            <div className="vr text-light opacity-100"></div>
            <div
              className={`${styles.landingbtn} rounded rounded-4 d-flex justify-content-evenly align-items-center `}
            >
              CLIENTE
              <Image
                src="/images/donut.png"
                alt="donut"
                width={90}
                height={87}
              ></Image>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.aboutus} p-5`}>
        <Row className="gx-0">
          <Col>
            <h1 className="mt-5">¿Quienes somos?</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque gravida nulla nec libero tincidunt, sit amet
              ultricies nulla posuere. Aenean porttitor sagittis vulputate.
              Nulla blandit justo in elit venenatis gravida. Morbi pretium non
              sem ut pretium. Aenean sodales quam a ex sodales, sed imperdiet
              nisi porta. Sed erat ligula, luctus in viverra blandit, iaculis ut
              orci. Duis feugiat mi eleifend, rhoncus mi in, consequat mi. Sed
              id commodo risus.
            </p>
          </Col>
          <Col className="text-center m-auto">
            <Image
              src="/images/logoUNFood_3.png"
              width={457}
              height={279}
              alt="logo"
            ></Image>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default LandingPage;
