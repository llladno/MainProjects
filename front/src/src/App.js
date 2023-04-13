import React from "react"
import Bar from "./components/Bar";
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import Shop from "./components/Shop";
import Admin from "./components/adminpage/Admin";
import Users from "./components/adminpage/pages/Users";
import Adminadd from "./components/adminpage/Adminadd";
import Products from "./components/adminpage/pages/Products";
import UserLogin from "./components/user/UserLogin";

function App() {

  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="bar" element={<Bar/>}/>
        <Route path="Shop" element={<Shop/>}/>
        <Route path="admin" element={<Admin/>}/>
        <Route path="admin/users" element={<Users/>}/>
        <Route path="admin/products" element={<Products></Products>}/>
        <Route path="admin/add" element={<Adminadd></Adminadd>}/>
        <Route path="/auth/login" element={<UserLogin></UserLogin>}/>
      </Routes>
    </div>
  );
}

export default App;
