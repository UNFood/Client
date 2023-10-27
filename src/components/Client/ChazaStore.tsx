import React from "react";
import Products from "@/components/Client/ProductsChaza";
import Image from "next/image";
import styles from "@/styles/chaza.store.module.css";
import { Button, Form, Card, Nav, Breadcrumb } from "react-bootstrap";
import { BiMap, BiSolidCategory } from "react-icons/bi";
import { BsFillChatDotsFill } from "react-icons/bs";
import { Chaza } from "@/types/chaza";
import categorias from "@/utils/categoriesProduct";
import categoriasChaza from "@/utils/categoriesChaza";
import { useState } from "react";
import { Product } from "@/types/product";
import Link from "next/link";
import ModalMapDirections from "@/components/Client/ModalMapDirections";

let dictCategorias: { [key: string]: string } = {};

function ChazaStore({ chaza }: { chaza: Chaza }) {
  const currentLocation = { lat: 4.636312349308707, lng: -74.08334255218506};
  const destination = { lat: 4.639312349308707, lng: -74.08324255218506 };
  const [products, setProducts] = useState(chaza.products);
  const [category, setCategory] = useState(-1);
  const [showMap, setShowMap] = useState(false);
  const [directionResponse, setDirectionResponse] = useState<any>(null);

  products.forEach((product) => {
    dictCategorias[product.category.toString()] =
      categorias[product.category.toString()];
  });

  const handleCategory = (products: Product[], category: number) => {
    const newProducts = products.filter(
      (product) => product.category === category
    );
    setProducts(newProducts);
    setCategory(category);
  };

  const handleCloseMap = () => setShowMap(false);
  const handleShowMap = () => {
    calculateRoute();
    setShowMap(true);
  };
  const calculateRoute = async () => {
    const directionsService = new google.maps.DirectionsService();
    console.log(currentLocation);
    console.log(destination);
    const result = await directionsService.route({
      origin: new google.maps.LatLng(
        currentLocation?.lat,
        currentLocation?.lng
      ),
      destination: new google.maps.LatLng(destination?.lat, destination?.lng),
      travelMode: google.maps.TravelMode.WALKING,
    });
    console.log(result);
    setDirectionResponse(result);
  };
  //Extract categories from products
  let categories = chaza.products.map((product) => product.category);
  categories = categories.filter((category, index) => {
    return categories.indexOf(category) === index;
  });

  const renderCategories = Object.keys(dictCategorias).map((key, index) => {
    return (
      <Button
        key={index}
        variant="link"
        className="nav-link border-bottom pt-2 pb-2"
        onClick={() => handleCategory(chaza.products, parseInt(key))}
      >
        {categorias[key]}
      </Button>
    );
  });

  return (
    <>
      <ModalMapDirections
        show={showMap}
        handleClose={handleCloseMap}
        directionResponse={directionResponse}
      ></ModalMapDirections>
      <div className={`${styles.home_chaza}`}>
        <div className={`${styles.sidebar_chaza_store} d-flex flex-column`}>
          <div>
            <div className={styles.img_container}>
              <Image
                src="/images/mcdonalds.png"
                alt="imageChazaStore"
                fill
              ></Image>
            </div>

            <div className={styles.info}>
              <div className="p-4">
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <h1>{chaza.name}</h1>
                  </div>
                </div>
                <Card.Text className={styles.card}>
                  {chaza.description}
                </Card.Text>
                <Form.Label className="d-flex align-items-cente">
                  <BiMap size={16}></BiMap>
                  Ubicación:{" "}
                  <Nav.Link
                    className="text-secondary ms-2"
                    onClick={handleShowMap}
                  >
                    {chaza.address}
                  </Nav.Link>
                </Form.Label>
                <Form.Label className="d-flex align-items-center">
                  <BsFillChatDotsFill size={16}></BsFillChatDotsFill>
                  Telefono:{" "}
                  <span className="text-secondary ms-2">{chaza.phone}</span>
                </Form.Label>
                <Form.Label className="d-flex align-items-  ">
                  <BiSolidCategory size={16}></BiSolidCategory>
                  Categoría:{" "}
                  <span className="text-secondary ms-2">
                    {categoriasChaza[chaza.type]}
                  </span>
                </Form.Label>
              </div>
            </div>
          </div>
          <div className={styles.categories}>{renderCategories}</div>
        </div>
        <div className="p-5 w-100">
          <div className="mb-5 mt-3">
            <Breadcrumb>
              <li className="breadcrumb-item">
                <Link href="/client/home"> UNFood</Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/client/chazas"> Chazas</Link>
              </li>
              <li className="breadcrumb-item">
                <a onClick={() => window.location.reload()} href="#">
                  {chaza.name}
                </a>
              </li>
              <li className="breadcrumb-item active">{categorias[category]}</li>
            </Breadcrumb>
          </div>
          <Products products={products}></Products>
        </div>
      </div>
    </>
  );
}

export default ChazaStore;
