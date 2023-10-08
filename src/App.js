import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Roles from "./pages/Roles";
import User from "./pages/User";
import Category from "./pages/Category";
import Subcategory from "./pages/Subcategory";
import Retailers from "./pages/Retailers";
import Customer from "./pages/Customer";
import Offer from "./pages/Offer";
import Thirdpartyproduct from "./pages/Thirdpartyproduct";

import Header from "./components/Header";

const App = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            {/* <Route path="/" element={<Dashboard/>}/> */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/user" element={<User />} />
            <Route path="/category" element={<Category />} />
            <Route path="/subcategory" element={<Subcategory />} />
            <Route path="/retailers" element={<Retailers />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/thirdpartyproduct" element={<Thirdpartyproduct />} />
            {/* <Route path="/addroles" element={<Addroles/>}/> */}
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
};

export default App;
