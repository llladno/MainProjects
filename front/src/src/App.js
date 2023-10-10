import React, {useState} from "react"
import Bar from "./components/Bar";
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import Shop from "./components/Shop";
import Admin from "./components/adminpage/Admin";
import Users from "./components/adminpage/pages/Users";
import Adminadd from "./components/adminpage/Adminadd";
import Products from "./components/adminpage/pages/Products";
import UserLogin from "./components/user/UserLogin";
import Userhome from "./components/user/Userhome";
import AdminChange from "./components/adminpage/change/AdminChange";
import UserRegister from "./components/user/UserRegister";
import Order from "./components/adminpage/pages/Order";
import Basket from "./components/basket/Basket";
import OrderDeliv from "./components/adminpage/pages/OrderDeliv";
import Stat from "./components/adminpage/statistic/Stat";
import Error from "./components/Error";
import axios from "axios";

function App() {

  const [loading, setLoading] = useState(false)
    async function re () {
console.log('su')

let resp = ''
      await axios.get('http://localhost:3005/error').then(res => resp = res.data)
.catch((err)=>{
console.log(err)})
console.log('su')

	await axios.get('http://localhost:3005/noerror').then(res => resp = res.data)
	.catch((err)=>{
	console.log(err)})
console.log(resp)
      if(resp == 'notok'){
	setTimeout(()=>{
	re()},2500)
	console.log('re')
	
      } 
else if (resp == 'OK!'){
setLoading(true)}
    }
    re()

  return (
    <div className="App">
{loading ? <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="bar" element={<Bar/>}/>
        <Route path="shop/candle" element={<Shop/>}/>
        <Route path="admin" element={<Admin/>}/>
        <Route path="admin/users" element={<Users/>}/>
        <Route path="admin/products" element={<Products></Products>}/>
        <Route path="admin/add" element={<Adminadd></Adminadd>}/>
        <Route path="admin/change" element={<AdminChange></AdminChange>}/>
        <Route path="admin/order" element={<Order></Order>}/>
        <Route path="admin/deliv" element={<OrderDeliv></OrderDeliv>}/>
        <Route path="/auth/login" element={<UserLogin></UserLogin>}/>
        <Route path="/user" element={<Userhome></Userhome>}></Route>
        <Route path="shop/candle" element={<Shop/>}/>
        <Route path="/user/register" element={<UserRegister></UserRegister>}/>
        <Route path="/basket" element={<Basket></Basket>}/>
        <Route path="/admin/stat" element={<Stat></Stat>}/>
        <Route path="/error" element={<Error></Error>}/>
      </Routes>
: <p> </p>}
    </div>
  );
}

export default App;
