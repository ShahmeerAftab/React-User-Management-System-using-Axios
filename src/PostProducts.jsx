import axios from "axios";
import React, { useEffect, useState } from "react";

const PostProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newProducts, setNewProducts] = useState({ title: "", price: "" });

  const fetchProducts = () => {
    axios
      .get("/api/products")
      .then((result) => {
        setProducts(result.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const value =
      e.target.name === "price" ? parseInt(e.target.value) : e.target.value;
    setNewProducts({ ...newProducts, [e.target.name]: value });
  };
  const handleAdd = () => {
    if (!newProducts.title || !newProducts.price) {
      return alert("Fill all fields");
    }
    setIsLoading(false);
    axios
      .post("/api/products", newProducts)
      .then((result) => {
        console.log(result.data);
        fetchProducts();
        setNewProducts({ title: "", price: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDelete = (id) => {
    axios
      .delete(`/api/products/${id}`)
      .then(() => {
        console.log(`Deleted ${id} `);
        fetchProducts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Products</h1>
      <input
        type="text"
        name="title"
        placeholder="title"
        value={newProducts.title}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="price"
        value={newProducts.price}
        onChange={handleChange}
      />

      <button onClick={handleAdd}>Add Products</button>

      {isLoading
        ? "loading..."
        : products.map((item) => {
            return (
              <p key={item.id}>
                {item.title}-{item.price}
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </p>
            );
          })}
    </div>
  );
};

export default PostProducts;
