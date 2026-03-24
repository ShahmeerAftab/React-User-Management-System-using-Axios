import React from "react";
import useUser from "../../Hook/UseUser";
import UserList from "../Pages/UserList";

const Home = () => {
  const { users, isLoading, deleteUser, updateUser } = useUser();
  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-400 text-sm font-medium">Loading users...</p>
        </div>
      </div>
    );
  }
  return (
    <UserList users={users} deleteUser={deleteUser} updateUser={updateUser} />
  );
};

export default Home;
