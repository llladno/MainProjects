import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Bar from "../Bar";
import Group from "./Group";
import "./shop.css"
import base64 from "react-native-base64"



const CandleShop = () => {
    const [products, setProducts] = useState("")
    const [Loading, setLoading] = useState(false)
    const [img, setImg] = useState()
    let candle
    useEffect(() => {
        const getProd = async () => {
            const res = await axios.get("http://localhost:3005/api/data/shop/candle")
            setProducts(res.data.res)
            setLoading(true)
        }
        const getProd2 = async () => {
            const res = await axios.get("http://localhost:3005/api/photo",{responseType: "blob"})
            
            console.log(res.data)
            setImg(URL.createObjectURL(res.data))
            console.log(img)
        }
        getProd()
        getProd2()

    }, [])
    console.log("Uuu")
    return (
        <div>
            <div>
            </div>
            <div className="grid-body">
                {Loading ? products.map((x, y) => {
                    return <div className="grid-item"><Group products={products[y]}></Group></div>
                })
                    : <p>Loading...</p>}
            </div>
        </div>
    )
}
export default CandleShop;