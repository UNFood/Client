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
  <div className="flex items-center">
    <div className="relative">
      <Image
        src={chaza.image}
        alt="chazadesumadre"
        width={200}
        height={200}
      ></Image>
    </div>
    <div className="flex flex-col ml-4">
      <h2 className="text-foreground/90">Nombre de Chaza: {chaza.name}</h2>
      <h3 className="text-foreground/90">Descripcion: {chaza.description}</h3>
      <h3 className="text-medium text-foreground/80">Tipo de Chaza: {chaza.category}</h3>
      <h4 className="text-small font-medium mt-2">Numero de Celular: {chaza.numerocel}</h4>
    </div>
  </div>
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
            <li className="breadcrumb-item active">Lista</li>
          </Breadcrumb>
        </div>
        <div>
        <h1>
        <Image
          src="/images/logoUNFood_4.png"
          alt="logo"
          width={200}
          height={260}
        ></Image>
        Lista de chazas: 
        </h1>
        </div>
        
        <Row className="gx-0">{renderchazaList}</Row>
      </div>
    </>
  );
}

export default Chazas;
