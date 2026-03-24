import React, { useState } from "react";
import PostForm from "../Components/PostForm";
import { useNavigate } from "react-router-dom";
import useUser from "../../Hook/UseUser";

const AddEditUsers = () => {
  const { addUser } = useUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    age: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await addUser(formData);
      if (res !== false) {
        navigate("/");
      }
    } catch {
      console.error("Error ading user");
    } finally {
      setLoading(false);
    }
  };
  const handleCancel = () => {
    navigate("/");
  };
  const handleChange = (e) => {
    const value =
      e.target.name === "age" ? Number(e.target.value) : e.target.value;
    setFormData((prev) => ({ ...prev, [e.target.name]: value }));
  };

  return (
    <PostForm
      handleChange={handleChange}
      formData={formData}
      handleCancel={handleCancel}
      handleSubmit={handleSubmit}
      loading={loading}
    />
  );
};

export default AddEditUsers;
