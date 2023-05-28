import axios from "axios"


const changeOrder = (props) => {
    console.log(props)
    axios({
        method: 'post',
        url: 'http://localhost:3005/api/change/order',
        data: [{
            product_id:  props[0],
            user_id:  props[1],
        }]
    }).then(response => {
        console.log(response)
    }).catch(err => {
        console.log(err)
    })
}
export default changeOrder;
