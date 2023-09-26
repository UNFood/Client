import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { useMutation } from "react-query";
import { loginData } from "@/types/user";
import { login } from "../pages/api/auth";
import cookie from "js-cookie";
import Loading from "./Loading";

function Login({ loginMode }: { loginMode: "chaza" | "cliente" | "" }) {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState<loginData>({
    username: "",
    password: "",
  });

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
    setLoading(true);
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
      setLoading(false);
      setValidated(true);
    } else {
      loginMutation.mutate(formData);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleGoogleLogin = async () => {
    try {
      const auth2 = gapi.auth2.getAuthInstance();
      const googleUser = await auth2.signIn();
      const id_token = googleUser.getAuthResponse().id_token;

      const response = await fetch('http://localhost:8080/api/v1/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: id_token }),
      });

      const data = await response.json();
      if (data.success) {
        console.log('Backend response:', data);
      } else {
        console.log('Error:', data.message);
      }
    } catch (error) {
      console.log('Google Login Failed:', error);
    }
  };

  return (
    <>
      {loading ? <Loading></Loading> : null}
      <div className="">
        <Button
          size="lg"
          variant="light"
          className="ps-5 pe-5 border border-2"
          onClick={handleGoogleLogin}
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
            name="username"
            onChange={handleChange}
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
            name="password"
            onChange={handleChange}
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
