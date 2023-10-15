import React, { useEffect, useState, useCallback } from "react";
import Modal from "react-bootstrap/Modal";
<<<<<<< HEAD
import Button from "react-bootstrap/Button";

interface ModalProductDetailProps {
  show: boolean;
  handleClose: () => void;
  productId: string;
  token: string;
}

// Utility function for HTTP options
const getHTTPOptions = (token: string) => {
  return {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
};

const ModalProductDetail: React.FC<ModalProductDetailProps> = ({ show, handleClose, productId, token }) => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    imageSrc: "",
  });

  // Asynchronous function to fetch product details
  const fetchProductDetails = useCallback(async () => {
    try {
      const requestOptions = getHTTPOptions(token);
      const response = await fetch(`api/v1/product/${productId}`, requestOptions);

      if (!response.ok) {
        return Promise.reject(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();

      // Validate data structure
      if (data && data.name && data.description && data.image) {
        setProductData({
          name: data.name,
          description: data.description,
          imageSrc: data.image,
        });
      } else {
        console.error("Invalid data structure:", data);
      }

    } catch (error) {
      console.error("Error fetching product data from the backend:", error);
    }
  }, [productId, token]);

  useEffect(() => {
    if (show && productId) {
      fetchProductDetails();
    }
  }, [show, productId, fetchProductDetails]);

=======
import { Product } from "@/types/product";

function ModalProductDetail({
  show,
  handleClose,
  product,
}: {
  show: boolean;
  handleClose: () => void;
  product: Product | undefined;
}) {
  console.log(product);
>>>>>>> origin/develop
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{productData.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
<<<<<<< HEAD
        <div>
          <img src={productData.imageSrc} alt={productData.name} style={{ maxWidth: "100%" }} />
        </div>
        <h4>Detalles del Producto</h4>
        <p>{productData.description}</p>
=======
        <h4>Centered Modal</h4>
        <p>
          {product?.description}
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
>>>>>>> origin/develop
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalProductDetail;
