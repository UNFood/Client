import React from "react";
import { Modal, Button } from "react-bootstrap";
import Image from "next/image";
import ProductRegister from "./ProductRegister"; // Import your custom ProductRegister component

function ModalProductRegister({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: () => void;
}) {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-center">Registro de Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-5 text-center">
        <div className="text-center">
          <Image
            src="/images/logoUNFood.png"
            width={327}
            height={200}
            alt="logo"
          />
        </div>

        <hr className="hr text-danger" />
        
        {/* Render the ProductRegister component here */}
        <ProductRegister />

        <hr className="hr text-danger" />
        <Button variant="link" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default ModalProductRegister;