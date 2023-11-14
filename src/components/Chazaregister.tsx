import React, { useState } from "react";
import styles from "../styles/register.module.css";
import { Form, Button } from "react-bootstrap";
import Image from "next/image";

function Chazaregister() {
  const [validated, setValidated] = useState(false);
  const [Chazatipo, setChazatipo] = useState("");
  const [username, setUsername] = useState("");
  const [Chazaname, setChazaName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Direccion, setDireccion] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      alert(
        `Usuario: ${username} \nNombre: ${Chazaname} \nApellido: ${Phone} \nDireccion: ${Direccion} \nContraseña: ${Chazatipo} \nDescription: ${description}`
      );
    }

    setValidated(true);
  };

  return (
    <div className={styles["form-container"]}>
      <>
        <img
          src="images/chazafondo.PNG"
          alt="Background"
          className={styles["background-image"]}
        />

        <div className={styles["form-box"]}>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="w-10 text-center m-auto"
          >
            <Image
              src="/images/logoUNFood.png"
              alt="logoUNFood"
              width={327}
              height={200}
            ></Image>
            <h1>Registro de Chaza</h1>

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
                placeholder="Nombre de Chaza"
                onChange={(e) => setChazaName(e.target.value)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Nombre no valido
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Control
                required
                type="text"
                placeholder="Tipo de Chaza"
                onChange={(e) => setPhone(e.target.value)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Tipo de chaza no valido
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Control
                required
                type="Direccion"
                placeholder="Telefono"
                onChange={(e) => setDireccion(e.target.value)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Direccion no valido
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Control
                required
                type="text"
                placeholder="Direccion"
                onChange={(e) => setChazatipo(e.target.value)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Contraseña no valida
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Control
                required
                type="text"
                placeholder="Descripcion"
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Descripcion no valida
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit">Registrarse</Button>
          </Form>
        </div>
      </>
    </div>
  );
}

export default Chazaregister;
