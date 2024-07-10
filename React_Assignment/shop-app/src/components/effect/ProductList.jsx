import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const PRODUCT_API_URL = "./product.json";

  //call useEffect to fetch data from backend
  useEffect(() => {
    //inside setup function

    //using fetch api (AJAX) of react
    //fetch api or AJAX is used to send http request to server
    //fetch api or AJAX call is asynchronous call
    fetch(PRODUCT_API_URL, {
      method: "GET", //http method GET
      headers: {
        //request header
        Accept: "application/json",
      },
    }) //used to provide server url and request header configuration and request data
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === "404") {
          return response.json();
        } else {
          throw Error("Server Error with response status ", response.status);
        }
      }) //used to obtain server response
      .then((data) => setProducts(data)) //used to obtain server response data ,if response is received successfully
      .catch((err) => console.log(err)); //used to handle server errors, if any
  }, [products]); //End of useEffect call
  return (
    <div className="container">
      <table className="table table-bordered mt-5">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td> <td>{product.brand}</td>
              <td>&#8377;{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
