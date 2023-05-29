import React, { useState, useEffect } from "react";
import axios from "axios"
import Adminhead from "../Adminhead";
import changeUser from "../change/AdminChangeUser";
import "./../styletable.css"
import basketLogo from "./../../img/basket.png"
import UserTable from "./UserTable";
import "./../styletable.css"

const Users = () => {
    const place = "users"
    const [data1, setData1] = useState("");
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        fetchData()
        fetchData()
    },[])
    async function fetchData() {
        const data = await axios.get("http://localhost:3005/api/data/users")
	if (data.data.res === undefined) window.location.reload()
setData1(data.data.res)
        console.log(data1)
        setLoading(true)
    }
 

    return (
        <div style={{display:"flex"}}>
            <Adminhead place={place}></Adminhead>
            <div className="tablecenter">
                <UserTable data={data1}></UserTable>
            </div>
        </div>
    )
}
export default Users;