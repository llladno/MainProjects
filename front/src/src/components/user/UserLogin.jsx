import React from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Bar from "../Bar";
import "./loginStyle.css"



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
            else if (response.data = "admin"){
                window.location = "/admin"
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
            <div className="container">
                <div className="login">
                </div>
                <div className="loginplace">
                    <div className="styleLogin">
                        <h1 style={{ textAlign: "center" }}>Login</h1>
                        <div>
                            <p>Email/Login</p>
                            <input id="email"></input>
                        </div>
                        <div>
                            <p>Пароль</p>
                            <input id="passwd"></input>
                        </div>
                        <div className="btnStyle">
                            <button onClick={sendlogin}>Войти</button><div></div>
                            <a href="/user/register"><button>Зарегистрироваться</button></a>
                        </div>
                        <a>Забыли пароль?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserLogin;