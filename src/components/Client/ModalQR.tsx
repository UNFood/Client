import React, { useEffect, useState, useCallback } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Col, Row, Form, Image} from "react-bootstrap";
import styles from "../../styles/register.module.css";

function ModalQR({
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
      <Modal.Header closeButton>
        QR Pagos
      </Modal.Header>
      <Modal.Body>
        <Image src="https://borealtech.com/wp-content/uploads/2018/10/codigo-qr-1024x1024-1.jpg" fluid></Image>
      </Modal.Body>
    </Modal>
  );
}

export default ModalQR;
