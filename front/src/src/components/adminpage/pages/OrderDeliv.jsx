import React,  { useState, useEffect } from "react";
import axios from "axios"
import Adminhead from "../Adminhead";
import changeUser from "../change/AdminChangeUser";

const OrderDeliv = () => {
    function refresh() {
        window.location.reload()
    }
    const place = "users"
    const [data1, setData1] = useState("");
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetch("http://localhost:3005/api/data/orderDeliv")
            .then(res => res.json())
            .then(data => setData1(data.res))
            setLoading(true)
    }, [])
    function deleteuser(event){
        const props = event.target.classList.value
        console.log(event.target)
        axios({
            method: 'post',
            url: 'http://localhost:3005/api/deletebasket',
            data: [{
                product_id: props
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
                        <th>IdUser</th>
                        <th>IdProduct</th>
                        <th>Удаление</th>
                        <th>Удаление</th>
                        <th>Удаление</th>
                        <th>Удаление</th>
                    </tr>
                </thead>
                <tbody>{loading ? Array.from(data2).map((elem) => (
                    <tr className={elem.idUser}>
                        <td>
                            {elem.idOrder}
                        </td>
                        <td>
                            {elem.dateOrder}
                        </td>
                        <td>
                            {elem.dateDeliv}
                        </td>
                        <td>
                            {elem.idShop}
                        </td>
                        <td>
                            {elem.CustomerId}
                        </td>
                        <td><button onClick={deleteuser} className={elem.product_id}>Удалить</button>
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
export default OrderDeliv;