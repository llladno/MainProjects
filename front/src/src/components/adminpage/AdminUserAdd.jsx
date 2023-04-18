import axios from "axios"
import React from "react"



const addUser = (props) => {
    console.log("suuuuuu")
    console.log(props)
    axios({
        method: 'post',
        url: 'http://localhost:3005/api/addUser',
        data: [{
            email:  props[2],
            passwd:  props[3],
            name:  props[1],
            login: props[0],
        }]
    }).then(response => {
        console.log(response)
    }).catch(err => {
        console.log(err)
    })
}
export default addUser;
