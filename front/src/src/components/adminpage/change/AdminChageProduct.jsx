import axios from "axios"

const changeProduct = (props) => {
    console.log(props)
    axios({
        method: 'post',
        url: 'http://localhost:3005/api/change/product',
        data: [{
            idProduct: props[0],
            title:  props[1],
            descript: props[2],
            price:  props[3],
            category: props[4],
            photoid: props[5],
        }]
    }).then(response => {
        console.log(response)
    }).catch(err => {
        console.log(err)
    })
}
export default changeProduct;