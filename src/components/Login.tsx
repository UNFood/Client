import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      alert(`Usuario: ${username} \nContraseña: ${password}`);
    }

    setValidated(true);
  };
  return (
    <>
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
      <div className="mb-4 mt-4">Ó</div>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="w-50 text-center m-auto"
      >
        <Form.Group className="mb-3">
          <Form.Control
            required
            type="text"
            placeholder="Nombre de usuario"
            onChange={(e) => setUsername(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Nombre de usuario no valido
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3 ">
          <Form.Control
            required
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Contraseña no valida
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit">Ingresar</Button>
      </Form>
    </>
  );
}

export default Login;
