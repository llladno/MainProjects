import React, { useState, useEffect } from "react";
import axios from "axios"
import Adminhead from "../Adminhead";
import changeUser from "../change/AdminChangeUser";
import "./../styletable.css"
import basketLogo from "./../../img/basket.png"


const UserTable = (props) => {

    function deleteuser(event) {
        const props = event.target.classList.value
        console.log(event.target)
        axios({
            method: 'post',
            url: 'http://localhost:3005/api/deleteUser',
            data: [{
                idUser: props
            }]
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err)
        })
    }

    let data1 = Array.from(props.data)
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>email</th>
                        <th>Пароль</th>
                        <th>Имя</th>
                        <th>Логин</th>
                        <th>Удаление</th>
                    </tr>
                </thead>
                <tbody>{data1.map((elem, y) => (
                    <tr className={elem.idUser}>
                        <td className={"column" + y % 2}>
                            {elem.idUser}
                        </td>
                        <td className={"column" + y % 2}>
                            {elem.email}
                        </td>
                        <td className={"column" + y % 2}>
                            {elem.passwd}
                        </td>
                        <td className={"column" + y % 2}>
                            {elem.name}
                        </td>
                        <td className={"column" + y % 2}>
                            {elem.login}
                        </td>
                        <td className={"column" + y % 2}>
                            <div>
                                <button onClick={deleteuser} className={elem.idUser + " btn"}>
                                    <img src={basketLogo} style={{ width: 40 }} className={elem.idUser}></img>
                                </button>
                            </div>
                        </td>
                    </tr>
                )
                )}</tbody></table>
        </div>
    )
}
export default UserTable;