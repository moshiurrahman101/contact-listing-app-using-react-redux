import React from "react";
import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddContact from "./components/AddContact";

function App() {
  return (
    <div className="App">
        {/* /add  /edit/:id  */}
      <ToastContainer />
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add"  element={<AddContact />}> 
          </Route>
        </Routes>
      </div>
  );
}

export default App;
