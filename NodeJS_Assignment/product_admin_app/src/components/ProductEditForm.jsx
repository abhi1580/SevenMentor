import { useNavigate, useParams } from "react-router-dom";
import {
  Form,
  FormGroup,
  FormControl,
  Button,
  FormLabel,
  Container,
} from "react-bootstrap";
import { useState } from "react";
import { PRODUCT_API_URL } from "../App";

const ProductEditForm = () => {
  const { name, brand, model, price } = useParams();
  const [product, setProduct] = useState({
    name: name,
    brand: brand,
    model: model,
    price: price,
  });
  const [serverResponse, setServerResponse] = useState("");
  const navigate = useNavigate();
  //local method of component to update the product
  function updateProduct(product) {
    fetch(PRODUCT_API_URL + `/edit-product`, {
      method: "PUT",
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
          throw Error(`Server error: ${response.status}`);
        }
      })
      .then((responseData) => {
        setServerResponse(responseData);
        alert(responseData.message);
        // Navigate back to ProductView on success
        navigate("/"); // Replace with your ProductView path if different
      })
      .catch((err) => console.error(err));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(product);
  };
  return (
    <Container>
      <h2 className="text-center">Product Edit Form</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup className="mb-3">
          <FormLabel>Product Name</FormLabel>
          <FormControl
            type="text"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            readOnly
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>Brand</FormLabel>
          <FormControl
            type="text"
            value={product.brand}
            onChange={(e) => setProduct({ ...product, brand: e.target.value })}
            readOnly
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>Model</FormLabel>
          <FormControl
            type="text"
            value={product.model}
            onChange={(e) => setProduct({ ...product, model: e.target.value })}
            readOnly
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>Price</FormLabel>
          <FormControl
            type="text"
            value={product.price}
            required
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
        </FormGroup>
        <Button type="submit" variant="success">
          {" "}
          Update
        </Button>
      </Form>
      {/* <h2>{serverResponse}</h2> */}
    </Container>
  );
};

export default ProductEditForm;
