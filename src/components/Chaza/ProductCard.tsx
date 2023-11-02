import React, { useState, useEffect } from "react";
import { Col, Card, Button, Form } from "react-bootstrap";
import Image from "next/image";
import styles from "@/styles/products.module.css";
import { FiEdit } from "react-icons/fi";
import { Product } from "@/types/product";
import Loading from "../Loading";
import { useMutation } from "react-query";
import { updateProduct } from "@/pages/api/product";

function ProductCard({ product }: { product: Product }) {
  const [productData, setProductData] = useState<Product>({
    _id: product._id.toString(),
    name: product.name.toString(),
    name_chaza: product.name_chaza.toString(),
    description: product.description.toString(),
    price: product.price,
    image: product.image.toString(),
    category: product.category,
    stock: product.stock,
    total_sales: product.total_sales,
  });
  const [editable, setEditable] = useState(false);
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProductData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const updateProductMutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: (response) => {
      console.log(response);
      setLoading(false);
      setEditable(false);
    },
    onError: () => {
      setLoading(false);
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    setLoading(true);
    event.preventDefault();
    event.stopPropagation();
    form.reportValidity();
    if (form.checkValidity() === false) {
      setValidated(true);
      setLoading(false);
    } else {
      updateProductMutation.mutate(productData);
    }
    setValidated(true);
  };

  return (
    <>
      {loading && <Loading></Loading>}
      <Col sm={6} md={4} xl={3} className="mb-5">
        <Card className={`${styles.product_card} m-auto`}>
          <div className="text-center">
            <Image
              src={product.image.toString()}
              alt={product.name.toString()}
              width={260}
              height={179}
            ></Image>
            <div className="position-absolute top-0">
              <Button variant="success" onClick={() => setEditable(!editable)}>
                <FiEdit size={30}></FiEdit>
              </Button>
            </div>
          </div>

          <Card.Body>
            <div>
              <Form
                onSubmit={handleSubmit}
                noValidate={false}
                validated={validated}
              >
                <Form.Group className="mb-1">
                  <Form.Control
                    required
                    name="name"
                    type="text"
                    defaultValue={product.name.toString()}
                    disabled={!editable}
                    onChange={handleChange}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Nombre no valido
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Control
                    required
                    name="description"
                    as="textarea"
                    defaultValue={product.description.toString()}
                    disabled={!editable}
                    onChange={handleChange}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Descripción no valida
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Control
                    required
                    name="price"
                    type="number"
                    defaultValue={product.price.toString()}
                    disabled={!editable}
                    min={50}
                    onChange={handleChange}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Precio no valido
                  </Form.Control.Feedback>
                </Form.Group>
                {editable ? (
                  <Button
                    type="submit"
                    variant="success"
                    className="w-100 mt-3"
                  >
                    Guardar
                  </Button>
                ) : (
                  <Button variant="danger" className="w-100 rounded-0 mb-0">
                    Eliminar
                  </Button>
                )}
              </Form>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default ProductCard;
