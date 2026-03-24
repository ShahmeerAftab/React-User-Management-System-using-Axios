import DataTable from "../Components/DataTable";
import { useState } from "react";

const UserList = ({ users, deleteUser, updateUser }) => {
  const [search, setSearch] = useState("");
  const [editingUser, setEditingUser] = useState(null);
  const filteredUsers = users.filter((item) => {
    if (!item.name) return false;
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <DataTable
        users={filteredUsers}
        totalUsers={users.length}
        search={search}
        setSearch={setSearch}
        editingUser={editingUser}
        setEditingUser={setEditingUser}
        deleteUser={deleteUser}
        updateUser={updateUser}
      />
    </div>
  );
};

export default UserList;
