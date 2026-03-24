import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddEditUsers from "./Crud-Project/Pages/AddEditUsers";
import Home from "./Crud-Project/Pages/Home";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/add" element={<AddEditUsers />} />
        <Route path="/add/:id" element={<AddEditUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
