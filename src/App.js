import React from "react";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./components/AddEditUser";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<AddUser />}></Route>
        <Route path="/editUser/:id" element={<AddUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
