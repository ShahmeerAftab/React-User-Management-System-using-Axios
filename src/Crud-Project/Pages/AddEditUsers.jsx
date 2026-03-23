import React, { useState } from "react";
import PostForm from "../Components/PostForm";
import api from "../api/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const AddEditUsers = ({ fetchUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    age: "",
    email: "",
  });
  const handleCancel = () => {
    navigate("/");
  };
  const handleChange = (e) => {
    const value = e.target.name === "age" ? Number(e.target.value) : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/users", formData);
      fetchUser();
      navigate("/");
    } catch  {
      toast.error("Failed to add user!");
    }
  };
  return (
    <PostForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      formData={formData}
      handleCancel={handleCancel}
    />
  );
};

export default AddEditUsers;
