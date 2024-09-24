import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { PRODUCT_API_URL } from "../App";

const ProductAddForm = () => {
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    model: "",
    price: "",
  });

  const navigate = useNavigate();

  const addNewProduct = (product) => {
    fetch(PRODUCT_API_URL + "/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: product.name,
        brand: product.brand,
        model: product.model,
        price: product.price,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === "404") {
          return response.json();
        } else {
          throw Error(`Server error ${response.status}`);
        }
      })
      .then((responseData) => {
        alert(responseData.message);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };
  //event handler for form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewProduct(product);
  };
  return (
    <Container className="border rounded mt-3 p-3 w-50">
      <h2 className="text-center">Product Add Form </h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup className="mb-3">
          <FormControl
            required
            placeholder="Enter product name"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </FormGroup>{" "}
        <FormGroup className="mb-3">
          <FormControl
            required
            placeholder="Enter product brand"
            value={product.brand}
            onChange={(e) => setProduct({ ...product, brand: e.target.value })}
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <FormControl
            required
            placeholder="Enter product model"
            value={product.model}
            onChange={(e) => setProduct({ ...product, model: e.target.value })}
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <FormControl
            required
            type="number"
            placeholder="Enter product price"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
        </FormGroup>
        <FormGroup className="text-center">
          <Button className="me-3" type="submit">
            Save
          </Button>
          <Button
            type="reset"
            variant="secondary"
            onClick={() => {
              setProduct({ name: "", brand: "", model: "", price: "" });
            }}
          >
            Reset
          </Button>
        </FormGroup>
      </Form>
    </Container>
  );
};

export default ProductAddForm;
