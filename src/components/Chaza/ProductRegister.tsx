import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { BiMap, BiSolidCategory } from "react-icons/bi";
import categorias from "@/utils/categories";
import Image from "next/image";
import { ProductCreate } from "@/types/product";
import { useMutation } from "react-query";
import Loading from "../Loading";
import { createProduct } from "@/pages/api/product";


function ProductRegister() {
  const [formData, setFormData] = useState<ProductCreate>({
    name: "",
    description: "",
    price: "",
    category: "Comida",
    image: "",
    stock: 0,
    total_sales: 0,
  });

  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);

  const registerProductMutation = useMutation({
    mutationFn: createProduct,
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
      
      registerProductMutation.mutate(formData);
    }

    setValidated(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  
  return (
    <Form onSubmit={handleSubmit} className="w-50 text-center m-auto">
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Product Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Product Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="number"
          placeholder="Price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        </Form.Group>
        
        <Form.Group className="mb-3 ">
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

                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    image: selectedImage,
                  }));
                }}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Imagen no valida
              </Form.Control.Feedback>
            </Form.Group>

        <Form.Group className="mb-3">
        <Form.Control
          type="number"
          placeholder="Stock"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          required
        />
        </Form.Group>
        
        <Form.Group className="mb-3">
        <Form.Control
          as="select" 
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Comida">Comida</option>
          <option value="Bebida">Bebida</option>
          <option value="Producto">Producto</option>
        </Form.Control>
      </Form.Group>
        
      <Button type="submit">Register Product</Button>
    </Form>
  );
}

export default ProductRegister;