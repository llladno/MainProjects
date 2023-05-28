import axios from "axios"


const addDelivery = (props) => {
    console.log(props)
    axios({
        method: 'post',
        url: 'http://localhost:3005/api/add/Delivery',
        data: [{
            dateOrder:  props[0],
            dateDeliv:  props[1],
            idShop: props[2],
            CustomerId: props[3]
        }]
    }).then(response => {
        console.log(response)
    }).catch(err => {
        console.log(err)
    })
}
export default addDelivery;
