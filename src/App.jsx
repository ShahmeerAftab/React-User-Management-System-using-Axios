import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./Crud-Project/Pages/UserList";
import AddEditUsers from "./Crud-Project/Pages/AddEditUsers";
import { useState } from "react";
import { Toaster } from "react-hot-toast";


function App() {
  const [user, setUser] = useState([]);

  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<UserList users={user} setUser={setUser} />} />
        <Route path="/add" element={<AddEditUsers />} />
        <Route path="/add/:id" element={<AddEditUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
