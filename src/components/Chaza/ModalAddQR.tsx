import React, { useEffect, useState, useCallback } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Col, Row, Form } from "react-bootstrap";
import styles from "../../styles/register.module.css";

function ModalAddQR({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: () => void;
}) {
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
              }}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              Imagen no valida
            </Form.Control.Feedback>
            <Modal.Footer className="d-flex justify-content-center">
              <Button  onClick={handleClose}>
                Guardar
              </Button>
            </Modal.Footer>
          </Form.Group>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default ModalAddQR;
