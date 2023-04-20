const express = require("express");
const path = require("path");
const mysql2 = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const postLogin = require("./login");
const { addProduct } = require("./addProduct");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const _dirname = path.resolve();

const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
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
        ok = "ok";
        break;
      } else if (
        req.body[0].email != data.respon[b].email ||
        req.body[0].passwd != data.respon[b].passwd
      ) {
        ok = "notlogin";
      }
    }
    res.send(ok);
  });
});

app.get("/api/photos", (req, res) => {
  connection.query("SELECT * FROM images", (err, respon) => {
    if (err) console.log("err");
    data = { res };
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
    connection.query("SELECT * FROM basket", (err, res) => {
      if (err) console.log("err");
      console.log(res);
      console.log("Success");
      data = { res };
    });
    res.json(data);
  });

app.post(`/api/addUser`, postLogin.createUser);

app.post(`/api/changeUser`, (req, res) => {
  connection.query(
    `UPDATE user SET email="${req.body[0].email}", 
     passwd="${req.body[0].passwd}", 
     name="${req.body[0].name}", login="${req.body[0].login}"
     WHERE idUser = ${+req.body[0].idUser};`,
    (err, respon) => {
      if (err) console.log(err);
      console.log(respon);
    }
  );
  res.send("ok");
});

app.post(`/api/deleteUser`, (req, res) => {
  connection.query(
    `DELETE FROM user 
     WHERE idUser=${+req.body[0].idUser};`,
    (err, respon) => {
      if (err) console.log(err);
      console.log(respon);
    }
  );
  res.send("ok");
});

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

app.post(`/api/addProduct`,addProduct);