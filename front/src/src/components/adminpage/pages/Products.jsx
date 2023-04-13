import React,  { useState, useEffect } from "react";
import axios from "axios"
import Adminhead from "../Adminhead";
const Products = () => {
    const place = "users"
    const [data1, setData1] = useState("");
    useEffect(() => {
        fetch("http://localhost:3005/api/data/products")
            .then(res => res.json())
            .then(data => setData1(data.res))
    }, [])
    let data2 = data1

    return (
        <div>
            <Adminhead></Adminhead>
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
                <tbody>
                    {Array.from(data2).map((elem) => (
                    <tr>
                        <td>
                            {elem.idProduct}
                        </td>
                        <td>
                            {elem.title}
                        </td>
                        <td>
                            {elem.descript}
                        </td>
                        <td>
                            {elem.price}
                        </td>
                        <td>
                            {elem.category}
                        </td>
                    </tr>
                )
                )}</tbody></table>
        </div>
    )
}
export default Products;