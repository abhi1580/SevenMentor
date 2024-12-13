import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const PRODUCT_API_URL = "http://localhost:3000/product";

const ProductEdit = () => {
  const { id, nm, br, pr } = useParams();
  const [product, setProduct] = useState({
    id: id,
    name: nm,
    brand: br,
    price: Number(pr),
  });
  const navigate = useNavigate();

  const editProduct = async (product_api_url) => {
    try {
      const serverResponse = await fetch(
        `${product_api_url}/update-product/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: product.name,
            brand: product.brand,
            price: product.price,
          }),
        }
      );

      if (serverResponse.ok) {
        const responseData = await serverResponse.json();
        alert(responseData.message);
        return true;
      } else if (serverResponse.status === 404) {
        throw Error("Product not found.");
      } else {
        throw Error(`Server Error ${serverResponse.status}`);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to update product. Please try again.");
      throw err;
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await editProduct(PRODUCT_API_URL);
      navigate(-1); // Redirect to the previous page after successful update
    } catch (err) {
      console.error("Navigation halted due to update failure.");
    }
  };

  return (
    <div className="container border rounded m-3 p-3 w-50 mx-auto">
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          className="form-control mb-2"
          name="name"
          id="name"
          readOnly
          value={product.name}
          required
        />
        <input
          type="text"
          className="form-control mb-2"
          name="brand"
          id="brand"
          readOnly
          value={product.brand}
          required
        />
        <input
          type="number"
          className="form-control mb-2"
          name="price"
          id="price"
          placeholder="Enter product price"
          value={product.price}
          onChange={(e) =>
            setProduct({ ...product, price: Math.max(0, e.target.value) })
          }
          required
        />
        <div className="d-flex gap-2 justify-content-center">
          <button className="btn btn-primary mx-2" type="submit">
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductEdit;
