import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    axios
      .get("/api/products")
      .then((result) => {
        setProducts(result.data);
        setLoading(false)
      })
      .catch((err) => console.log(err));
      
  }, []);
   

  return (
    <div>
      <h1>Products</h1>
      {loading?"loading...":products.map((item) => (
        <p key={item.id}>
          {item.title} - {item.price}
        </p>
      ))}
     
      
    </div>
  );
};

export default Products;