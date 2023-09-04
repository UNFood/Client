import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Login from "./login";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="w-100 ">
      <div>
        <Button onClick={handleShow}>Iniciar sesion</Button>
        <Login show={show} handleClose={handleClose}></Login>
      </div>
    </div>
  );
}

export default Header;
