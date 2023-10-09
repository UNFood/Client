import React from "react";
import { Card, Carousel, Col, Row } from "react-bootstrap";
import Image from "next/image";
import styles from "@/styles/products.module.css";
import products from "@/pages/client/products";

interface Product {
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  stock: number;
  total_sales: number;
}

interface Category {
  categoria: string;
  productos: Product[];
}

interface HorizontalSliderProps {
  cat: Category;
}

function HorizontalSlider({ cat }: HorizontalSliderProps) {
  const [showDetails, setShowDetails] = React.useState(false);
  const handleCloseDetails = () => setShowDetails(false);
  const handleShowDetails = () => setShowDetails(true);
  const products = cat.productos;

  const renderProducts = products.map((product, index) => {
    return (
      <Col sm={6} md={4} xl={3} className="mb-5" key={index}>
        <Card
          className={`${styles.product_card} m-5`}
          onClick={handleShowDetails}
        >
          <Image src={product.image} alt="empanada" width={260} height={179}></Image>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <h1>{product.price}</h1>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  const createCarouselItems = () => {
    const carouselItems = [];
    for (let i = 0; i < products.length; i += 4) {
      const productsSlice = products.slice(i, i + 4);
      carouselItems.push(
        <Carousel.Item key={i}>
          <Row>{renderProducts.slice(i, i + 4)}</Row>
        </Carousel.Item>
      );
    }
    return carouselItems;
  };

  return (
    <>
      <section className="slider">
        <h2>{cat.categoria}</h2>
        <Carousel>{createCarouselItems()}</Carousel>
      </section>
    </>
  );
}

export default HorizontalSlider;