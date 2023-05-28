import axios from "axios"
import React from "react"

const addOrder = (props) => {
    console.log(props)
    axios({
        method: 'post',
        url: 'http://localhost:3005/api/add/order',
        data: [{
            IdUser:  props[0],
            IdProduct:  props[1]
        }]
    }).then(response => {
        console.log(response)
    }).catch(err => {
        console.log(err)
    })
}
export default addOrder;