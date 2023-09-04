import React from "react";
import { Modal, Button } from "react-bootstrap";
import Image from "next/image";

function login({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: () => void;
}) {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Body>
        <div className="text-center">
          <h1>Ingresar en UNFood</h1>
        </div>

        <div className="text-center"> Haz login con</div>
        <div className="text-center">
          <Button>Continuar con Google</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default login;
