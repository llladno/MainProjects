import React, { useEffect, useState } from "react";
import Bar from "../Bar";
import axios from 'axios';

const Userhome = () => {
    const [userinfo, setUserinfo] = useState()
    const [loading, setLoading] = useState(false)
    function exit(){
        sessionStorage.clear()
        window.location="/auth/login"
    }
    useEffect(()=>{
        const getFn = async () => {
            const res = await axios.post("http://localhost:3005/user/order",{
                IdUser:sessionStorage.getItem("idUser")
            }).then((res)=> setUserinfo(res.data.res))
            .then(setLoading(true))
        }
        getFn()
        
    },[])
    
    console.log(userinfo)
    return (
        <div>
            <Bar></Bar>
            <div>{loading ? 
            <p>
            Привет, {sessionStorage.getItem("email")}!
                <button onClick={()=>exit}>Выйти</button></p>
            : <p>loading....</p>}
                
            </div>
        </div>
    )
}
export default Userhome;