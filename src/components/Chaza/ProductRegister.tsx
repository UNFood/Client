import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { BiMap, BiSolidCategory } from "react-icons/bi";
import categorias from "@/utils/categories";

function ProductRegister() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "Comida",
    stock:"",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
   

    console.log("Product Registration Data:", formData);

  
    setFormData({
      name: "",
      description: "",
      price: "",
      image: "",
      category: "Comida",
      stock:"",
    });
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