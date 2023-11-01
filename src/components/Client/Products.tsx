
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "@/styles/products.module.css";
import Image from "next/image";
import Link from "next/link";
import { Card, Row, Col, Form } from "react-bootstrap";
import { Product } from "@/types/product";
import currencyFormater from "@/utils/currency";
import { ordenPrecio, rangoPrecio } from "@/utils/filtrosProductos";
import categorias from "@/utils/categoriesProduct";
import { BsCartPlusFill, BsCartCheckFill } from "react-icons/bs";
import { addProductToCart } from "@/utils/cart";
import Message from "@/components/Message";

function Products({ products }: { products: Product[] }) {
  const router = useRouter();
  const [priceSort, setPriceSort] = useState<string>("0");
  const [categories, setCategories] = useState<string>("");
  const [priceRange, setPriceRange] = useState<number>(0);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    let query = {}
    if (priceSort !== "0") {
      query = {
        ...query,
        priceOrder: priceSort,
      }
    }
    if (categories !== "") {
      query = {
        ...query,
        categories: categories,
      }
    }
    if (priceRange !== 0) {
      query = {
        ...query,
        priceRange: `${rangoPrecio[priceRange].split('-')[0]},${rangoPrecio[priceRange].split('-')[1]}`,
      }
    }
    router.push({
      pathname: router.pathname,
      query: query,
    });
  }, [categories, priceRange, priceSort]);

  const renderPriceSort = Object.keys(ordenPrecio).map((key, index) => {
    return (
      <option key={key} value={key}>
        {ordenPrecio[key]}
      </option>
    );
  });

  const renderCategories = Object.keys(categorias).map((key, index) => {
    return (
      <Form.Check
        label={categorias[key]}
        key={index}
        onChange={(event: React.ChangeEvent) => {
          const isChecked = (event.target as HTMLInputElement).checked;
          let prevData =
            categories.split(",").length > 0 ? categories.split(",") : [];
          if (!isChecked) {
            prevData = prevData.filter((item) => item !== key);
          } else {
            prevData.push(key);
          }
          prevData = prevData.filter((item) => item !== "");
          setCategories(prevData.join(","));
        }}
      ></Form.Check>
    );
  });

  const renderRangoPrecio = Object.keys(rangoPrecio).map((key, index) => {
    return (
      <option key={key} value={key}>
        {`${currencyFormater.format(rangoPrecio[key].split('-')[0])} - ${currencyFormater.format(rangoPrecio[key].split('-')[1])}`}
        
      </option>
    );
  });
  
  const handelAddProductToCart = (product: Product) => {
    if (addProductToCart(product.name_chaza.toString(), product, 1)) {
      setMessage("Producto agregado al carrito");
      setType("success");
      handleShow();
    } else {
      setMessage("Producto ya agregado al carrito");
      setType("warning");
      handleShow();
    }
  };
  
  const renderProducts = products.map((product, index) => {
    return (
      <Col sm={6} md={4} xl={3} className="mb-5" key={index}>
        <Card className={`${styles.product_card} m-auto`}>
          <div className="text-center">
            <Image
              src={product.image.toString()}
              alt={product.name.toString()}
              width={260}
              height={179}
            ></Image>
            <div className="position-absolute top-0">
              <Button
                className="btn btn-light  rounded-0"
                onClick={() => handelAddProductToCart(product)}
              >
                <BsCartPlusFill></BsCartPlusFill>
              </Button>
            </div>
          </div>

          <Card.Body className={styles.product_card_body}>
            <div>
              <h5>
                {product.name.length > 22
                  ? product.name.substring(0, 22).concat("...")
                  : product.name}
              </h5>
              <Card.Text>
                {product.description.length > 80
                  ? product.description.substring(0, 80).concat("...")
                  : product.description}
              </Card.Text>
            </div>

            <h1 className="mt-3">{currencyFormater.format(product.price)}</h1>
          </Card.Body>
          <div>
            <Link
              href={`chaza/${product.name_chaza}`}
              className="btn btn-light w-100 rounded-0 mb-0"
            >
              Ver tienda
            </Link>
          </div>
        </Card>
      </Col>
    );
  });

  return (
    <>
    <Message
        show={show}
        handleClose={handleClose}
        message={message}
        type={type}
    ></Message>
    <div className={`${styles.products} mt-5 w-100`}>
      <div className={`${styles.home_chaza}`}>
        <div className={`${styles.sidebar_filters} d-grid gap-3`}>
          <div className={`${styles.filter_type}`}>
            <span className="mb-1">ORDENAR POR</span>
            <Form.Select defaultValue={0}
              onChange={(event: React.ChangeEvent) => {
                const value = (event.target as HTMLInputElement).value;
                setPriceSort(value.toString());
              }
              }
            >
              <option value={0}>Todos</option>
              {renderPriceSort}
            
            </Form.Select>
          </div>
          <div className={`${styles.filter_type}`}>
            <span className="mb-1">CATEGORIAS</span>
            {renderCategories}
          </div>
          <div className={`${styles.filter_type}`}>
            <span className="mb-1">RANGO DE PRECIOS</span>
              <Form.Select defaultValue={0}
                onChange={(event: React.ChangeEvent) => {
                  const value = (event.target as HTMLInputElement).value;
                  setPriceRange(parseInt(value));
                }}
              >
                <option value={0}>Todos</option>
                {renderRangoPrecio}
              </Form.Select>

          </div>
          <div className={styles.info}></div>
        </div>
        <div className="p-5 w-100">
          <Row className="gx-0">{renderProducts}</Row>
        </div>
      </div>
    </div>
     </>
  );
}

export default Products;
