import React, { useEffect } from "react";
import { useState } from "react";
import api from "../Crud-Project/api/axios";
import toast from "react-hot-toast";

const useUser = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  //   FETCH USERS
  const fetchUser = async () => {
    try {
      const res = await api.get("/users");
      setUsers(res.data);
      setIsloading(false)
    } catch {
      toast.error("Failed to fetch users!");
    }
  };

  //  POST USERS
  const addUser = async (newUser) => {
    try {
      await api.post("/users",newUser);
      fetchUser();
      toast.success("User added successfully!");
    } catch {
      toast.error("Failed to add user!");
    }
  };

//   DELETE USER
 const deleteUser = async (id) => {
    try {
      await api.delete(`/users/${id}`);
      fetchUser();
      toast.success("User deleted successfully!");
    } catch {
      toast.error("Failed to delete user!");
    }
  };

//   UPDATE USER
 const updateUser = async (updatedUser) => {
    try {
      await api.put(`/users/${updatedUser.id}`,updatedUser);
      fetchUser();
      toast.success("User updated successfully!");
    } catch {
      toast.error("Failed to update user!");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return { users, isLoading,addUser,deleteUser,updateUser };
};

export default useUser;
