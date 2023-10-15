import React, { useEffect, useState, useCallback } from "react";
import Modal from "react-bootstrap/Modal";
import { FaTrash } from 'react-icons/fa';
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
  
  const handleAddToCart = (count) => {
    // Implement your logic to add the product to the cart
    console.log("Agregado al carro",count);
  };
  
  const [count, setCount] = useState(1);
  
  const handleAddToCartAndBuy = (count) => {
    // Implement your logic to add the product to the cart
    console.log("Agregado al carro y comprando",count);
  };
  

  // Function to handle counter increment
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Function to handle counter decrement
  const handleDecrement = () => {
    if(count > 1) {
      setCount(count - 1);
    }
  };

    // Function to reset counter
    const handleReset = () => {
      setCount(0);
    };
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
      <Modal.Footer style={{ justifyContent: 'flex-start' }}>
  <Button style={{ backgroundColor: '#A63C6D', borderColor: '#A63C6D' }} size="sm" onClick={handleReset}>
    <FaTrash />
  </Button>
  <Button style={{ backgroundColor: '#A63C6D', borderColor: '#A63C6D' }} size="sm" onClick={handleDecrement}>-</Button>
  <span style={{ margin: '0 10px' }}>{count}</span>
  <Button style={{ backgroundColor: '#A63C6D', borderColor: '#A63C6D' }} size="sm" onClick={handleIncrement}>+</Button>
  <Button style={{ backgroundColor: '#A63C6D', borderColor: '#A63C6D' }} size="sm" onClick={() => handleAddToCart(count)}>Agregar y seguir comprando</Button>
  <Button style={{ backgroundColor: '#550A2D', borderColor: '#550A2D' }} size="sm" onClick={() => handleAddToCartAndBuy(count)}>Agregar y comprar</Button>
</Modal.Footer>

    </Modal>

//style={{ backgroundColor: "#550A2D" }}
  );
}

export default ModalProductDetail;
