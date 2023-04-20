import React,  { useState, useEffect } from "react";
import axios from "axios"
import Adminhead from "../Adminhead";
import "./../styletable.css"
import basketLogo from "./../../img/basket.png"
const Products = () => {
    const place = "users"
    const [data1, setData1] = useState("");
    useEffect(() => {
        fetch("http://localhost:3005/api/data/products")
            .then(res => res.json())
            .then(data => setData1(data.res))
    }, [])
    function deleteuser(event){
        const props = event.target.classList.value
        console.log(event.target)
        axios({
            method: 'post',
            url: 'http://localhost:3005/api/deleteProduct',
            data: [{
                idProduct: props
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
            <Adminhead></Adminhead>
            <div style={{display:"flex",justifyContent:"center"}}>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Название</th>
                        <th>Описание</th>
                        <th>Цена</th>
                        <th>Категория</th>
                        <th>Удаление</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from(data2).map((elem,y) => (
                    <tr>
                        <td className={"column"+y%2}>
                            {elem.idProduct}
                        </td>
                        <td className={"column"+y%2}>
                            {elem.title}
                        </td>
                        <td className={"column"+y%2}>
                            {elem.descript}
                        </td>
                        <td className={"column"+y%2}>
                            {elem.price+"₽"}
                        </td>
                        <td className={"column"+y%2}>
                            {elem.category}
                        </td>
                        <td className={"column"+y%2}>
                            <div>
                                <button onClick={deleteuser} className={elem.idProduct+" btn"}>
                                    <img src={basketLogo}  style={{width:40}} className={elem.idProduct}></img>
                                </button>
                            </div>
                        </td>
                    </tr>
                )
                )}</tbody></table>
                </div>
        </div>
    )
}
export default Products;