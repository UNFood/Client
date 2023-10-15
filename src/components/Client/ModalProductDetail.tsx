import React, { useEffect, useState, useCallback } from "react";
import Modal from "react-bootstrap/Modal";
import { Product } from "@/types/product";
import categoriasChaza from "@/utils/categoriesChaza";
import { Button } from "react-bootstrap";

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
  
  // Static Information
  const staticInfo = {
    rating: "4.5",
    reviews: "250 Reviews",
    deliveryTime: "30-45 mins"
  };
  const categoryName = categoriasChaza[product?.category];
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{product?.name}</Modal.Title>

      </Modal.Header>
      <Modal.Body>
      <img src={product?.image} alt={`${product?.name} image`} style={{width: '200px', height: '200px'}} />
        
          <p> <strong>Descripción: </strong>{product?.description}</p>
        
        <p style={{fontSize: 'smaller', opacity: 0.6}}>
          Ubicado en: <strong>{product?.name_chaza}</strong>
        </p>
        <hr />
        <p><strong>Precio:</strong> {product?.price} $</p>
        <p><strong>Unidades Disponibles:</strong> {product?.stock}</p>
        <p><strong>Tiempo estimado de entrega:</strong> {staticInfo.deliveryTime}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalProductDetail;
