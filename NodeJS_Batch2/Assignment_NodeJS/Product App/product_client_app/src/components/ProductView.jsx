import React, { useEffect, useState } from "react";
export const PRODUCT_API_URL = "http://localhost:3000/product";
import { MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const ProductView = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  //fetch api for fetching products
  const getAllProducts = (product_api) => {
    fetch(product_api + "/all", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((serverResponse) => {
        if (serverResponse.ok) return serverResponse.json();
        else if (serverResponse.status === "404") return serverResponse.json();
        else throw Error(`Server Error ${serverResponse.status}`);
      })
      .then((data) => setProducts(data))
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getAllProducts(PRODUCT_API_URL);
  }, [products]);

  //delete product
  const deleteProduct = (prodID) => {
    const confirmation = confirm(`Are you sure you want to delete?`);
    if (confirmation) {
      fetch(PRODUCT_API_URL + "/delete-product/" + prodID, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
      })
        .then((serverResponse) => {
          if (serverResponse.ok) return serverResponse.json();
          else if (serverResponse.status === "404")
            return serverResponse.json();
          else throw Error(`Server Error ${serverResponse.status}`);
        })
        .then((data) => {
          console.log(data);
          getAllProducts(PRODUCT_API_URL);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <h1>Products</h1>
      <table className="table table-striped">
        <thead>
          <tr className="table-dark">
            <th>Product name</th>
            <th>Brand</th>
            <th>Price</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.brand}</td>
              <td>&#8377;{product.price}</td>
              <td>
                <button
                  className="btn btn-outline-warning"
                  title="edit"
                  onClick={() =>
                    navigate(
                      `/edit/${product._id}/${product.name}/${product.brand}/${product.price}`
                    )
                  }
                >
                  <MdEdit />
                </button>
                <button
                  className="btn btn-outline-danger mx-2"
                  title="delete"
                  onClick={() => deleteProduct(product._id)}
                >
                  <MdDelete />
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
