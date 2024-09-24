import { useEffect, useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { PRODUCT_API_URL } from "../App";

const ProductView = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch products from the backend
  useEffect(() => {
    fetch(PRODUCT_API_URL + "/all", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else if (res.status === 404) {
          throw new Error("Products not found");
        } else {
          throw new Error(`Server error: ${res.status}`);
        }
      })
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  // Handle product edit
  const handleEdit = (product) => {
    navigate(
      `/edit-product/${product.name}/${product.brand}/${product.model}/${product.price}`
    );
  };

  // Handle product delete
  const handleDelete = (product) => {
    fetch(PRODUCT_API_URL + "/delete-product", {
      method: "DELETE",
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
        // Update products state after successful deletion
        setProducts(products.filter((p) => p._id !== product._id)); // Filter out deleted product
        alert(responseData.message);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <table className="table table-primary bg-color-primary">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td>{p.name}</td>
              <td>{p.brand}</td>
              <td>{p.model}</td>
              <td>{p.price}</td>
              <td>
                <button
                  title="edit"
                  className="btn btn-warning"
                  onClick={() => handleEdit(p)}
                >
                  <FaRegEdit />
                </button>
                <button
                  title="delete"
                  className="btn btn-danger"
                  onClick={() => handleDelete(p)}
                >
                  <FaTrashCan />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductView;
