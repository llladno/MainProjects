import React,  { useState, useEffect } from "react";
import axios from "axios"
import Adminhead from "../Adminhead";

const Users = () => {
    const place = "users"
    const [data1, setData1] = useState("");
    useEffect(() => {
        fetch("http://localhost:3005/api/data/users")
            .then(res => res.json())
            .then(data => setData1(data.res))
    }, [])
    let data2 = data1
    return (
        <div>
            <Adminhead place = {place}></Adminhead>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>email</th>
                        <th>Пароль</th>
                        <th>Имя</th>
                        <th>Логин</th>
                    </tr>
                </thead>
                <tbody>{Array.from(data2).map((elem) => (
                    <tr>
                        <td>
                            {elem.idUser}
                        </td>
                        <td>
                            {elem.email}
                        </td>
                        <td>
                            {elem.passwd}
                        </td>
                        <td>
                            {elem.name}
                        </td>
                        <td>
                            {elem.login}
                        </td>
                    </tr>
                )
                )}</tbody></table>
        </div>
    )
}
export default Users;