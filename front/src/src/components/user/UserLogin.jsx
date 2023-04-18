import React from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Bar from "../Bar";



const UserLogin = () => {
    let a = 0
    function sendlogin() {
        let email = document.getElementById("email")
        let passwd = document.getElementById("passwd")
        console.log(email.value)
        axios({
            method: 'post',
            url: 'http://localhost:3005/auth/login',
            data: [{
                email: email.value,
                passwd: passwd.value,
            }]
        }).then(response => {
            console.log(response.data)
            if (response.data == "ok") {
                window.location = "/user"
                sessionStorage.setItem("email", `${email.value}`)
                sessionStorage.setItem("passwd", `${passwd.value}`)
                console.log(response)
            }
            else if (response.data == "notlogin") {
                let logindiv = document.getElementsByClassName("login")[0]
                logindiv.innerHTML = `Неправильный логин или пароль`
            }

            a = 1
            console.log(a)
        })
        setTimeout(() => {
            console.log(a);
        }, 100);
    };


    return (
        <div>
            <Bar></Bar>
            <div>
                <div className="login">
                </div>
                <div >
                    <h1>Login</h1>
                    email
                    <input id="email"></input>
                    Passwd
                    <input id="passwd"></input>
                    <button onClick={sendlogin}>Letsgo</button>
                    </div>

            </div>
        </div>
    )
}
export default UserLogin;