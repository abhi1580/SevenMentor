import React, { useState } from "react";
import { PRODUCT_API_URL } from "./ProductView";
import { useNavigate } from "react-router-dom";

const ProductAdd = () => {
  const [product, setProduct] = useState({ name: "", brand: "", price: "" });
  const navigate = useNavigate();
  //fetch api call to add product to database here
  const addNewProduct = (product_api_url) => {
    fetch(product_api_url + "/add-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: product.name,
        brand: product.brand,
        price: product.price,
      }),
    })
      .then((serverResponse) => {
        if (serverResponse.ok) {
          return serverResponse.json();
        } else if (serverResponse.status === 404) {
          return serverResponse.json();
        } else {
          throw Error(`Server Error ${serverResponse.status}`);
        }
      })
      .then((responseData) => {
        alert(responseData.message);
      })
      .catch((err) => console.error(err));
  };
  //event handler for form submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewProduct(PRODUCT_API_URL);
    navigate("/");
  };

  return (
    <div className="container border rounded m-3 p-3 w-50 mx-auto">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          name="name"
          id="name"
          placeholder="Enter Product name"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          required
        />
        <input
          type="text"
          className="form-control mb-2"
          name="brand"
          id="brand"
          placeholder="Enter product brand"
          value={product.brand}
          onChange={(e) => setProduct({ ...product, brand: e.target.value })}
          required
        />
        <input
          type="number"
          className="form-control mb-2"
          name="price"
          id="price"
          placeholder="Enter product price"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          required
        />
        <div className="d-flex gap-2 justify_content-center">
          <button className="btn btn-primary mx-2" type="submit">
            Add Product
          </button>
          <button
            onClick={() => setProduct({ name: "", brand: "", price: "" })}
            className="btn btn-danger"
            type="reset"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductAdd;
