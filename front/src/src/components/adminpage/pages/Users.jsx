import React,  { useState, useEffect } from "react";
import axios from "axios"
import Adminhead from "../Adminhead";
import changeUser from "../change/AdminChangeUser";

const Users = () => {
    function refresh() {
        window.location.reload()
    }
    const place = "users"
    const [data1, setData1] = useState("");
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetch("http://localhost:3005/api/data/users")
            .then(res => res.json())
            .then(data => setData1(data.res))
            setLoading(true)
    }, [])
    function deleteuser(event){
        const props = event.target.classList.value
        console.log(event.target.classList.value)
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
                        <th>Удаление</th>
                    </tr>
                </thead>
                <tbody>{loading ? Array.from(data2).map((elem) => (
                    <tr className={elem.idUser}>
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
                        <td><button onClick={deleteuser} className={elem.idUser}>Удалить</button>
                        </td>
                    </tr>
                )
                )
            : (<tr><td>Loading...</td></tr>)}</tbody></table>
            <div>
                <button onClick={refresh}>refresh</button>
            </div>
        </div>
    )
}
export default Users;