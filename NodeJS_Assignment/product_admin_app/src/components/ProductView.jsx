import { useEffect, useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PRODUCT_API_URL = "http://localhost:4000/api/products";

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
    fetch(`${PRODUCT_API_URL}/delete/${product._id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          // After deletion, remove the product from the state
          setProducts(products.filter((p) => p._id !== product._id));
        } else {
          throw new Error(`Failed to delete product ${product.name}`);
        }
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
                  className="btn btn-warning"
                  onClick={() => handleEdit(p)}
                >
                  <FaRegEdit />
                </button>
                <button
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
