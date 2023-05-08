import React from "react";
import Bar from "../Bar";



const Userhome = () => {
    function exit(){
        sessionStorage.clear()
        window.location="/auth/login"
    }
    return (
        <div>
            <Bar></Bar>
            <div>
                Привет, {sessionStorage.getItem("email")}!
                <button onClick={exit}>Выйти</button>
            </div>
        </div>
    )
}
export default Userhome;