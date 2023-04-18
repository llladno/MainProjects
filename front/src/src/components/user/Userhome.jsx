import React from "react";
import Bar from "../Bar";



const Userhome = () => {
    return (
        <div>
            <Bar></Bar>
            <div>
                Привет, {sessionStorage.getItem("email")}!
            </div>
        </div>
    )
}
export default Userhome;