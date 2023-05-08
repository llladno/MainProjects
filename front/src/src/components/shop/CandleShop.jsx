import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Bar from "../Bar";
import Group from "./Group";
import "./shop.css"
import base64 from "react-native-base64"



const CandleShop = () => {
    const [products, setProducts] = useState("")
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const getProd = async () => {
            const res = await axios.get("http://localhost:3005/api/data/shop/candle")
            setProducts(res.data.res)
            setLoading(false)
        }
        getProd()
    }, [])
    console.log("Uuu")
    return (
        <div>
            <div>
            </div>
            <div className="container">
                <div className="grid-body">
                    {Loading ? <p>Loading...</p>
                        : products.map((x, y) => {
                            return <div className="grid-item"><Group products={products[y]}></Group></div>
                        })}
                </div>
            </div>
        </div>
    )
}
export default CandleShop;