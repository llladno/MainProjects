import axios from "axios"

const changeUser = (props) => {
    axios({
        method: 'post',
        url: 'http://localhost:3005/api/changeUser',
        data: [{
            idUser: props[0],
            email:  props[3],
            passwd: props[4],
            name:  props[2],
            login: props[1],
        }]
    }).then(response => {
        console.log(response)
    }).catch(err => {
        console.log(err)
    })
}
export default changeUser;
