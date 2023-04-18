import axios from "axios"
import React from "react"



const addProduct = (props) => {
    console.log("suuuuuu")
    console.log(props)
    axios({
        method: 'post',
        url: 'http://localhost:3005/api/addProduct',
        data: [{
            title:  props[0],
            descript:  props[1],
            price:  props[2],
            category: props[3],
        }]
    }).then(response => {
        console.log(response)
    }).catch(err => {
        console.log(err)
    })
}
export default addProduct;
