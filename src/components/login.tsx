import React from "react";
import { Modal, Button } from "react-bootstrap";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

function login({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: () => void;
}) {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="p-5 text-center">
        <div className="text-center">
          <Image src="/favicon.ico" width={300} height={300} alt="logo"></Image>
          <h1 className="mt-5 mb-5">Ingresar en UNFood</h1>
        </div>

        <div className="mb-5"> Haz login con</div>
        <div className="">
          <Button
            size="lg"
            variant="light"
            className="ps-5 pe-5 border border-2  "
          >
            <FcGoogle size={30} />
            <span className="ms-3">Google</span>
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default login;
