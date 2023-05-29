import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Bar from "../Bar";
import Group from "./Group";
import "./shop.css"
import base64 from "react-native-base64"



const CandleShop = (props) => {
    const [products, setProducts] = useState("")
    const [Loading, setLoading] = useState(true)
    const selected = document.getElementsByClassName("selected")[0]
    let category = "All"
    if (selected){
        if(selected.id == "Vosk") category = "Восковая"
        else if(selected.id == "Soy") category = "Соевая"
        else if(selected.id == "Paraf") category = "Парафиновая"
        else if(selected.id == "ather") category = "Другое"
    }

    useEffect(() => {
        const getProd = async () => {
            const res = await axios.get("http://localhost:3005/api/data/shop/candle")
            if (res.data.res === undefined || res.data.length == 0) window.location.reload()
            setProducts(res.data.res)
            if(res.data.res.length == 0) window.location.reload()
	    setLoading(false)
        }
        getProd()
    }, [])
console.log(category)
console.log(props)
    return (
        <div>
            <div>
            </div>
            <div className="containershop">
                <div className="grid-body">
                    {Loading ? <p>Loading...</p>
                        : products.map((x, y) => {
                            if(category == products[y].category)
                            { 
                            return <div className="grid-item"><Group products={products[y]}></Group></div>}
                            else if(category == "All") {
                                console.log("yyyy")
                                return <div className="grid-item"><Group products={products[y]}></Group></div>}
                        })}
                </div>
            </div>
        </div>
    )
}
export default CandleShop;