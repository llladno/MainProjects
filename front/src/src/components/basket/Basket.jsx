import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Bar from '../Bar';

const Basket = () => {
    const [data, setData] = useState([])
    const [allPrice, setAllPrice] = useState(0)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
            axios({
                method: 'get',
                url: 'http://localhost:3005/api/data/order',
            }).then(response => {
                response.data.res.map((elem, index)=>{
                    if(elem.user_id == sessionStorage.getItem("idUser")){
                        setData((arr)=>[...arr,{product_id:elem.product_id, product: elem.title, descri: elem.descript, price: elem.price}])
                        setAllPrice((arr)=> +arr+elem.price)
                    }
                    setLoading(true)
                })
                
            }).catch(err => {
                console.log(err)
            })
    }, [])
    
    function sell(){
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
    }
    let data2 = data
    
    return(
        <div>
            <Bar></Bar>
            <div style={{paddingLeft:200}}>
            <h1>Карзина</h1>
                {loading ? (data2.map((elem) => (
                        <div>
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
                <button onClick={sell}>Оплатить</button>
            </div>
                        </div>
        </div>
    )
}

export default Basket