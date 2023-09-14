import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Register() {
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      alert(
        `Usuario: ${username} \nNombre: ${name} \nApellido: ${lastname} \nEmail: ${email} \nContraseña: ${password}`
      );
    }

    setValidated(true);
  };

  return (
    <>
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
            type="text"
            placeholder="Nombre"
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Nombre no valido
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3 ">
          <Form.Control
            required
            type="text"
            placeholder="Apellido"
            onChange={(e) => setLastname(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Apellido no valido
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 ">
          <Form.Control
            required
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Email no valido
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
        <Button type="submit">Registrarse</Button>
      </Form>
    </>
  );
}

export default Register;
