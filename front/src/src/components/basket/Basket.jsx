import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Bar from '../Bar';
import "./style.css"

const Basket = () => {
    const [data2, setData] = useState([])
    const [allPrice, setAllPrice] = useState(0)
    const [loading, setLoading] = useState(false)
    const user = sessionStorage.getItem("idUser")
    console.log(user)
    useEffect(() => {
        const collectData= async ()=>{
            const res = await axios({
                method: 'get',
                url: 'http://localhost:3005/api/data/order',
            })
            console.log(res.data.res)
            res.data.res.map((elem, index) => {
                console.log(elem)
                if (elem.user_id === user) {
                    setData((arr) => [...arr, { product_id: elem.product_id, product: elem.title, descri: elem.descript, price: elem.price }])
                    setAllPrice((arr) => +arr + elem.price)
                    console.log(2)
                    setLoading(true)
                }
                else{
                    window.location.reload()
                }})
        }
        collectData()
    }, [])
    
        console.log(3)
    function sell(event) {
        console.log(data2)
        axios({
            method: 'post',
            url: 'http://localhost:3005/api/deleteBasket2',
            data: [{
                IdProduct: data2,
                user_id: sessionStorage.getItem("idUser")
            }]
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err)
        })
        event.target.textContent = "Обработка..."
        event.target.style.width = "200px"
        console.log(event.target)
        event.target.disabled = "disabled"
        setTimeout(()=>{
            event.target.textContent = "Оплачено"
            event.target.style.width = "160px"
            
        },2000)
    }
    let data3 = data2

    return (
        <div>
            <Bar></Bar>
            <div style={{ paddingLeft: 200 }}>
                <h1>Корзина</h1>
                {loading ? (data3.map((elem) => (
                    <div className='basketcard'>
                        <p>Код товара: {elem.product_id}<br></br>
                            {elem.product}<br></br>
                            Описание: {elem.descri}<br></br>
                            Цена:{elem.price}</p>
                    </div>
                ))
                )
                    : (<p>Loading...</p>)}
                <div>
                    Итого: {allPrice}
                    <div>
                        <button className="btn" onClick={sell}>Оплатить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket