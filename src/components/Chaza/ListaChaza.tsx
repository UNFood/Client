import React from "react";
import styles from "@/styles/lista.chaza.module.css";
import Image from "next/image";
import Link from "next/link";
import { Button, Card, Row, Col, Breadcrumb } from "react-bootstrap";




const chazaList = [
  {
    name: "MCDonalds",
    description: "Hamburguesa, papitas, nuggies y  maquina de helados funcional.",
    category: "Comida rapida",
    image: "/images/mcdonalds.png",
    numerocel: 3234234234,
  },
  {
    name: "MCDonalds",
    description: "Hamburguesa, papitas, nuggies y  maquina de bruhs funcional.",
    category: "Comida rapida",
    image: "/images/mcdonalds.png",
    numerocel: 23423525234,
  },
  {
    name: "MCDonalds",
    description: "Hamburguesa, papitas, nuggies y  maquina de heladossss funcional.",
    category: "Comida rapida",
    image: "/images/mcdonalds.png",
    numerocel: 23423423542534,
  },
  {
    name: "MCDonalds",
    description: "Hamburguesa, papitas, nuggies y  maquina de helados funcional.",
    category: "Comida rapida",
    image: "/images/mcdonalds.png",
    numerocel: 234234234234,
  },
  {
    name: "MCDonalds",
    description: "Hamburguesa, papitas, nuggies y  maquina de helados funcional.",
    category: "Comida rapida",
    image: "/images/mcdonalds.png",
    numerocel: 23423423523424,
  },
];
function Chazas() {
  const [showDetails, setShowDetails] = React.useState(false);
  const handleCloseDetails = () => setShowDetails(false);
  const handleSHowDetails = () => setShowDetails(true);


  const renderchazaList = chazaList.map((chaza, index) => {
    return (
      <div>
      
      <Row sm={1} md={1} xl={1} className="mb-3" key={index}>
        <Card
          className={`${styles.chaza_card} m-auto`}
          onClick={handleSHowDetails}
        >
          
          <Card.Body>
            <div><Image
            src={chaza.image}
            alt="emapanada"
            width={300}
            height={300}
          ></Image></div>
            <Card.Title>{chaza.name}</Card.Title>
            <Card.Text>
            <div className="flex flex-col gap-0">
                <h3 className=" text-foreground/90">Descripcion :{chaza.description}</h3>
                <h2 className="text-medium text-foreground/80">Tipo de Chaza: {chaza.category}</h2>
                <h3 className="text-small font-medium mt-2">Numero de Celular {chaza.numerocel}</h3>
              </div>
            </Card.Text>
            <Button variant="primary">Editar chaza</Button> <Button variant="primary">Eliminar Chaza</Button>
          </Card.Body>
        </Card>
      </Row>
      </div>
    );
  });

  return (
    <>
      
      <div className={`${styles.chazaList}`}>
      
        <div className={`mb-5 mt-3`}>
          
          <Breadcrumb>
            <li className="breadcrumb-item">
              <Link href="/client/home"> UNFood</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/client/chazaList"> Chaza</Link>
            </li>
            <li className="breadcrumb-item active">Todo</li>
          </Breadcrumb>
        </div>
        <h1>Lista de chazas</h1>
        <Row className="gx-0">{renderchazaList}</Row>
      </div>
    </>
  );
}

export default Chazas;
