import axios from "axios";
import React, { useEffect, useState } from "react";

const Products2 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("/api/products")
      .then((result) => {
        setProducts(result.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
        <h1>Products</h1>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        products.map((item) => {
          return (
            <p key={item.id}>
              {" "}
              {item.title}-{item.price}
            </p>
          );
        })
      )}
    </div>
  );
};

export default Products2;
