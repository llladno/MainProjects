import React, {useState, useEffect} from "react";
import axios from "axios"
import Adminhead from "../Adminhead";
import changeUser from "../change/AdminChangeUser";
import basketLogo from "../../img/basket.png";

const Order = () => {
    function refresh() {
        window.location.reload()
    }

    const place = "users"
    const [data1, setData1] = useState("");
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        async function fetchData() {
            await fetch("http://localhost:3005/api/data/order")
                .then(res => res.json())
                .then(data => setData1(data.res))
            setLoading(true)
        }
        fetchData()
        fetchData()
    }, [])

    function deleteuser(event) {
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
            <Adminhead place={place}></Adminhead>
            <div className="tablecenter">
                <table>
                    <thead>
                    <tr>
                        <th>IdUser</th>
                        <th>IdProduct</th>
                        <th>Удаление</th>
                    </tr>
                    </thead>
                    <tbody>{loading ? Array.from(data2).map((elem, y) => (
                                <tr className={elem.idUser}>
                                    <td className={"column" + y % 2}>
                                        {elem.user_id}
                                    </td>
                                    <td className={"column" + y % 2}>
                                        {elem.product_id}
                                    </td>
                                    <td className={"column" + y % 2}>
                                        <button onClick={deleteuser} className={elem.product_id + ' btn'}>
                                            <img src={basketLogo} style={{ width: 40 }} className={elem.user_id}></img>
                                        </button>
                                    </td>
                                </tr>
                            )
                        )
                        : (<tr>
                            <td>Loading...</td>
                        </tr>)}</tbody>
                </table>
            </div>
            <div>
                <button onClick={refresh}>refresh</button>
            </div>
        </div>
    )
}
export default Order;