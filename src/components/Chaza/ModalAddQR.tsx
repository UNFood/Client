import React, { useEffect, useState, useCallback } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Col, Row, Form } from "react-bootstrap";
import { qrCreate } from "@/types/chaza";
import { uploadQR } from "@/pages/api/chaza";

import { useMutation } from "react-query";

import styles from "../../styles/register.module.css";

function ModalAddQR({
  id,
  show,
  handleClose,
}: {
  id: String;
  show: boolean;
  handleClose: () => void;
}) {

  const [image, setImage] = useState<qrCreate>({
    _id: id,
    qr: "",
  });
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);

  const uploadQRMutation = useMutation({
    mutationFn: uploadQR,
    onSuccess: (response) => {
      setLoading(false);
      window.location.href = "home";
    },
    onError: (error: any) => {
      setLoading(false);
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    setLoading(true);
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === false) {
      setLoading(false);
      setValidated(true);
    } else {
      uploadQRMutation.mutate(image);
    }

    setValidated(true);
  };


  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      centered
      className={`${styles.GoogleMap}`}
    >
      <Modal.Header closeButton>Agregar QR Pagos</Modal.Header>
      <Modal.Body>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="w-100 text-center m-auto"
        >
        <Row>
          <Form.Group className="mb-3 ">
            <Form.Label>
              Agrega un código QR para que tus clientes puedan pagar con <span
              style={{ color: "#a63c6d" }}
              >Nequi</span>
            </Form.Label>
            <Form.Control
              required
              type="file"
              name="image"
              id="image"
              accept="image/*"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const selectedImage = event.target.files
                  ? event.target.files[0]
                  : null;
                console.log(selectedImage);

                setImage((prevFormData) => ({
                  ...prevFormData,
                  qr: selectedImage,
                }));
              }}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              Imagen no valida
            </Form.Control.Feedback>
            <Modal.Footer className="d-flex justify-content-center">
              <Button  type='submit'>
                Guardar
              </Button>
            </Modal.Footer>
          </Form.Group>
        </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalAddQR;
