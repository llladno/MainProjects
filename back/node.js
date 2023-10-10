const express = require("express");
const path = require("path");
const mysql2 = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const postLogin = require("./login");
const {addProduct} = require("./addProduct");
const deleteU = require("./delete");
const change = require("./change");
const add = require("./add");
const {getUser, getProductShop, getProduct, getOrder, getDelivery} = require("./getdata");
const {getStat} = require("./login");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const config = {
    host: "192.168.0.1",
    // host: "192.168.0.2",
    user: "a5",
    database: "sql_website",
    // password: "Qwerty12!",
    password: "Qwerty123!",
}
setTimeout(()=>{
function recon (){
const connection = mysql2.createConnection(config)
connection.connect((err)=>{

if(err){
app.get('/error', (req,res)=>{
console.log('su1')
res.send('notok')
})
console.log('err')
	setTimeout(()=>{
recon()}, 100)
    }
else{
app.get('/noerror', (req,res)=>{
console.log('su')
res.send('OK!')
})
}
exports.connection = connection
})
}
recon()
 
let stat = 'noerror'



let data;

app.listen(3005, () => {
    console.log("Server started");
});

console.log(stat)

    //Получение данных
    app.get("/api/data/users", getUser);

    app.get("/api/data/shop/candle", getProductShop);

    app.get("/api/data/products", getProduct);

    app.get("/api/data/order", getOrder);

    app.post(`/api/addUser`, postLogin.createUser);

    app.get(`/api/data/orderDeliv`, getDelivery);
//

    app.post("/auth/login", postLogin.login);
    app.get('/getstat', getStat)

    app.post(`/api/deleteUser`, deleteU.deleteUser)

    app.post(`/api/deleteProduct`, (req, res) => {
        console.log(+req.body[0].idProduct)
        connection.query(
            `DELETE FROM product
       WHERE idProduct=${+req.body[0].idProduct};`,
            (err, respon) => {
                if (err) console.log(err);
                console.log(respon);
                console.log("OK")
            }
        );
        res.send("ok");
    });


    app.post(`/api/addBasketShop`, (req, res) => {
        connection.query(
            `INSERT INTO basket (user_id, product_id) VALUES ("${+req.body[0].IdUser}", 
       "${+req.body[0].IdProduct}")`,
            (err, respon) => {
                if (err) console.log(err);
                console.log(respon);
            }
        );

        res.send("ok");
    })

    app.post(`/api/deletebasket`, (req, res) => {
        connection.query(
            `DELETE FROM basket 
     WHERE product_id=${+req.body[0].product_id};`,
            (err, respon) => {
                if (err) console.log(err);
                console.log(respon);
            }
        );
        res.send("ok");
    });

    app.post(`/api/deleteBasket2`, deleteU.deleteBasket2)

    app.post(`/api/deleteorder`, (req, res) => {
        connection.query(`DELETE FROM orderdeliv
         WHERE idOrder=${+req.body[0].orderId};`)
    })


    app.post("/user/order", (req, res) => {
        connection.query(`SELECT * FROM orderdeliv WHERE CustomerId=${+req.body.IdUser}`, (err, res) => {
            if (err) console.log("err");
            console.log(res);
            console.log("Success");
            data = {res};
        });
        console.log("OK")
        res.send(data)
    })

//Добавление
    app.post("/api/add/Delivery", add.addDelivery)

    app.post(`/api/add/Product`, add.addProduct);

    app.post("/api/add/order", add.addOrder)

//Изменение
    app.post("/api/change/order", change.changeOrder)

    app.post(`/api/changeUser`, change.changeUser);

    app.post(`/api/change/product`, change.changeProduct);

    app.post(`/api/change/deliv`, change.changeDeliv);


},1000)


