import React from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Bar from "../Bar";
import "./loginStyle.css"
import addUser from "../adminpage/AdminUserAdd";



const UserRegister = () => {
    let data = []
    function click(){
        let email = document.getElementById("email")
        let name = document.getElementById("name")
        let login = document.getElementById("login")
        let passwd = document.getElementsByClassName("passwd")
        if (passwd[0].value == passwd[1].value){
            if(email.value && name.value && login.value && passwd.value != ""){
                data.push(login.value,name.value,email.value,passwd[0].value)
                console.log(data)
                addUser(data)
		setTimeout(()=>{
		window.location.href='/auth/login'
},800)
                //window.location.href = "/auth/login"
                data.length = 0
            }
            else{
                console.log("not ok")
            }
        }
        else{
            let uncorrect = document.getElementsByClassName("uncorrect")[0]
            uncorrect.innerHTML = `<p>Пароли не совпадают</p>`
        }
    }
    return (
        <div>
            <Bar></Bar>
            <div className="container2">
                <div className="loginplace">
                    <div className="styleLogin2">
                        <h1 style={{ textAlign: "center" }}>Регистрация</h1>
                        <div style={{ display: "flex" }}>
                            <div>
                                <p>Email</p>
                                <input id="email"></input>
                            </div>
                            <div style={{width:20}}></div>
                            <div>
                                <p>Имя</p>
                                <input id="name"></input>
                            </div>
                        </div>
                        <div>
                            <p>Логин</p>
                            <input id="login"></input>
                        </div>
                        <div style={{ display: "flex" }}>
                            <div>
                                <p>Пароль</p>
                                <input className="passwd"></input>
                            </div>
                            <div style={{width:20}}></div>
                            <div>
                                <p>Повторите пароль</p>
                                <input className="passwd"></input>
                            </div>
                        </div>
                    <div className="btnStyle">
                        <button onClick={click}>Зарегистрироваться</button>
                    </div>
                    <div className="uncorrect"></div>
                </div>
            </div>
        </div>
        </div >
    )
}
export default UserRegister;