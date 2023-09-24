import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { useMutation } from "react-query";
import { login } from "../pages/api/auth";
import cookie from "js-cookie";
import Loading from "./Loading";

function Login({ loginMode }: { loginMode: "chaza" | "cliente" | "" }) {
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      setShowError(false);
      setLoading(false);
      cookie.set("user-token", response.data);
      if (loginMode === "chaza") {
        window.location.href = "/chaza/home";
      } else {
        window.location.href = "/client/home";
      }
    },
    onError: (error: any) => {
      setShowError(true);
      setLoading(false);
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    console.log(loginMode);
    setLoading(true);
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
      setLoading(false);
      setValidated(true);
    } else {
      loginMutation.mutate({ username, password });
    }
  };
  return (
    <>
      {loading ? <Loading></Loading> : null}
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
        {showError ? (
          <p className="text-danger">Usuario o contraseña incorrectos</p>
        ) : null}
        <Button type="submit">Ingresar</Button>
      </Form>
    </>
  );
}

export default Login;
