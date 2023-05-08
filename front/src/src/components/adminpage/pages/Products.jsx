import React, { useState, useEffect } from "react";
import axios from "axios"
import Adminhead from "../Adminhead";
import "./../styletable.css"
import basketLogo from "./../../img/basket.png"
import ProductsTable from "./ProductsTable";

const Products = () => {
    const place = "users"
    const [data1, setData1] = useState("");
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        fetchData()
        fetchData()
    },[])
    async function fetchData() {
        const data = await axios.get("http://localhost:3005/api/data/products")
        setData1(data.data.res)
        console.log(data1)
        setLoading(true)
    }
    console.log(data1)
    return (
        <div>
            <Adminhead></Adminhead>
            <div className="tablecenter">
                {loading ? <ProductsTable data={data1} loading={loading}></ProductsTable>
                    : <p>Loading...</p>}
            </div>
        </div>
    )
}
export default Products;