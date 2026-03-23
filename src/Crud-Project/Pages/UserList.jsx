import { useNavigate} from "react-router-dom";
import DataTable from "../Components/DataTable";
import { useEffect, useState } from "react";
import api from "../api/axios";
import toast from "react-hot-toast";

const UserList = ({ users, setUser }) => {
  const [search, setSearch] = useState("");
  const [editingUser, setEditingUser] = useState(null);
  const navigate = useNavigate();
  const filteredUsers = users.filter((item) => {
    if (!item.name) return false;
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  const fetchUser = async () => {
    try {
      const res = await api.get("/users");
      setUser(res.data);
    } catch {
      toast.error("Failed to fetch users!");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/users/${id}`);
      fetchUser();
    } catch {
      toast.error("Failed to delete user!");
    }
  };

  const handleEditClick = (user) => {
    setEditingUser({ ...user });
  };

  const handleUpdate = async () => {
    try {
      await api.put(`/users/${editingUser.id}`, editingUser);
      fetchUser();
      setEditingUser(null);
      toast.success("User updated successfully!");
    } catch {
      toast.error("Failed to update user!");
    }
  };
  return (
    <div>
      <DataTable
        users={users}
        fetchUser={fetchUser}
        navigate={navigate}
        handleEditClick={handleEditClick}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
        search={search}
        setSearch={setSearch}
        filteredUsers={filteredUsers}
        editingUser={editingUser}
        setEditingUser={setEditingUser}
      />
    </div>
  );
};

export default UserList;
