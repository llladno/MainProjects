import React, { useState, useEffect } from "react";
import "../style/admin.css"
import Users from "./pages/Users";
import Adminhead from "./Adminhead";


const Admin = () => {
    let component
    let suu = "suu"
    let user = "Users"
    function page (event) {
        console.log("suu")
        const divelem = document.getElementById("pages")
        const eventvalue = event.target.textContent
        console.log(eventvalue)
        
        if (event.target.textContent == "Users"){
            console.log(event.target.textContent)
        }
        else {
            console.log("eeee")
        }
        console.log(event.target.textContent)
    }  
    const data = sessionStorage.getItem("first")
    console.log(data)

    return (
        <div>
            <Adminhead></Adminhead>
            <div>
            <div id="pages">
                {component == "Users" ? <Users></Users>
                :null}
                {console.log(component)}
            </div>
            </div>
        </div>
    )
}
export default Admin;