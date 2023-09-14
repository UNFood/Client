import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Image from "next/image";
import Login from "./Login";
import Register from "./Register";

function ModalLoginRegister({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: () => void;
}) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-center">
          {showLogin ? "Ingresar" : "Registrarse"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-5 text-center">
        <div className="text-center">
          <Image
            src="/images/logoUNFood.png"
            width={327}
            height={200}
            alt="logo"
          ></Image>
        </div>

        <hr className="hr text-danger" />
        {showLogin ? <Login></Login> : <Register></Register>}
        <hr className="hr text-danger" />
        <Button variant="link" onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? "Crear una cuenta" : "Ingresar"}
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default ModalLoginRegister;