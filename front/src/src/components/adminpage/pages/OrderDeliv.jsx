import React,  { useState, useEffect } from "react";
import axios from "axios"
import Adminhead from "../Adminhead";
import changeUser from "../change/AdminChangeUser";
import basketLogo from "../../img/basket.png";

const OrderDeliv = () => {
    function refresh() {
        window.location.reload()
    }
    const place = "users"
    const [data1, setData1] = useState("");
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        function fetchData() {
            fetch("http://localhost:3005/api/data/orderDeliv")
                .then(res => res.json())
                .then(data => setData1(data.res))
            setLoading(true)
        }
        fetchData()
        fetchData()
    }, [])
    function deleteuser(event){
        const props = event.target.parentElement.classList[0]
        console.log(event.target.parentElement.classList)
        console.log(event.target)
        axios({
            method: 'post',
            url: 'http://localhost:3005/api/deleteorder',
            data: [{
                orderId: props
            }]
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err)
        })

    }
    let data2 = data1
    console.log(data2)
    return (
        <div>
            <Adminhead place = {place}></Adminhead>
            <div className="tablecenter">
            <table>
                <thead>
                    <tr>
                        <th>IdUser</th>
                        <th>IdProduct</th>
                        <th>Дата заказа</th>
                        <th>Дата доставки</th>
                        <th>ID магазина</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody>{loading ? Array.from(data2).map((elem,y) => (
                    <tr className={elem.idUser}>
                        <td className={"column" + y % 2}>
                            {elem.idOrder}
                        </td>
                        <td className={"column" + y % 2}>
                            {elem.dateOrder}
                        </td>
                        <td className={"column" + y % 2}>
                            {elem.dateDeliv}
                        </td>
                        <td className={"column" + y % 2}>
                            {elem.idShop}
                        </td>
                        <td className={"column" + y % 2}>
                            {elem.CustomerId}
                        </td>
                        <td className={"column" + y % 2}>
                            <button onClick={deleteuser} className={elem.idOrder + ' btn'}>
                                <img src={basketLogo} style={{ width: 40 }} className={elem.idUser}></img>
                            </button>
                        </td>
                    </tr>
                )
                )
            : (<tr><td>Loading...</td></tr>)}</tbody></table> </div>
            <div>
                <button onClick={refresh}>refresh</button>
            </div>
        </div>
    )
}
export default OrderDeliv;