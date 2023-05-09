const express = require("express");
const path = require("path");
const mysql2 = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const postLogin = require("./login");
const { addProduct } = require("./addProduct");
const deleteU = require("./delete");
const change = require("./change");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const _dirname = path.resolve();

const connection = mysql2.createConnection({
  host: "192.168.56.1",
  user: "a2",
  database: "sql_website",
  password: "qwerty12",
});

exports.connection = connection

let data;

app.listen(3005, () => {
  console.log("Server started");
});

app.get("/api/data/users", (req, res) => {
  connection.query("SELECT * FROM user", (err, res) => {
    if (err) console.log("err");
    data = { res };
  });
  res.json(data);
});

app.get("/api/data/shop/candle", (req, res) => {
  connection.query("SELECT * FROM product", (err, res) => {
    if (err) console.log("err");
    console.log(res);
    console.log("Success");
    data = { res };
  });
  res.json(data);
});

app.post("/auth/login", (req, res) => {
  let ok = "notok";
  let user
  connection.query("SELECT * FROM user", (err, respon) => {
    if (err) console.log("err");
    data = { respon };
    for (let b = 0; b < data.respon.length; b++) {
      if (
        (req.body[0].email == data.respon[b].email ||
          req.body[0].email == data.respon[b].login) &&
        req.body[0].passwd == data.respon[b].passwd
      ) {
        if (req.body[0].email == "admin" && req.body[0].passwd == "qwerty12") {
          ok = "admin";
          break;
        }
        console.log(
          "Это он",
          data.respon[b].idUser,
          req.body[0].email,
          data.respon[b].email
        );
        user = data.respon[b].idUser
        ok = "ok";
        break;
      } else if (
        req.body[0].email != data.respon[b].email ||
        req.body[0].passwd != data.respon[b].passwd
      ) {
        ok = "notlogin";
      }
    }
    console.log(user)
    res.send([ok, user]);

  });
});

app.get("/api/data/products", (req, res) => {
  connection.query("SELECT * FROM product", (err, res) => {
    if (err) console.log("err");
    console.log(res);
    console.log("Success");
    data = { res };
  });
  res.json(data);
});

app.get("/api/data/order", (req, res) => {
  connection.query("SELECT * FROM basket INNER JOIN product ON basket.product_id = product.idProduct;", (err, res) => {
    if (err) console.log("err");
    console.log(res);
    console.log("Success");
    data = { res };
  });
  res.json(data);
});

app.post(`/api/addUser`, postLogin.createUser);

app.post(`/api/changeUser`,change.changeUser);

app.post(`/api/change/product`,change.changeProduct);

app.post(`/api/change/deliv`,change.changeDeliv);

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

app.post(`/api/addProduct`, addProduct);



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

app.get(`/api/data/orderDeliv`, (req,res)=>{
  connection.query("SELECT * FROM orderdeliv", (err, res) => {
    if (err) console.log("err");
    console.log(res);
    console.log("Success");
    data = { res };
  });
  res.json(data);
})


