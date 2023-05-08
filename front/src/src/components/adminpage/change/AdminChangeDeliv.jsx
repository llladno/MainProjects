import axios from "axios"
import React from "react"

const changeDeliv = (props) => {
    console.log(props)
    axios({
        method: 'post',
        url: 'http://localhost:3005/api/change/deliv',
        data: [{
            idOrder:  props[0],
            dateOrder:  props[1],
            dateDeliv: props[2],
            idShop: props[3],
            CustomerId: props[4]
        }]
    }).then(response => {
        console.log(response)
    }).catch(err => {
        console.log(err)
    })
}
export default changeDeliv;
