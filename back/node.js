const express = require("express")
const path  = require("path")
const mysql2 = require("mysql2")
const cors = require("cors")
const bodyParser =require("body-parser")
const postLogin = require("./login")



const app = express()
app.use(cors())
app.use(bodyParser.json());
const _dirname = path.resolve()




console.log("Папка",_dirname)


const connection = mysql2.createConnection({
    host:"localhost",
    user:"root",
    database:'sql_website',
    password:'qwerty12'
})

//  connection.query('INSERT INTO user (email, passwd, name, login) VALUES ("Антонио@mail.ru", "123", "Антонио", "Антонио123")',(err,res)=>{
//      if(err) console.log("err")
//      console.log(res)
//  })
let data


app.listen(3005,()=>{
    console.log("Server started")
})

// app.get("/auth/login", postLogin.createUser)

app.get("/api/data/users",(req,res)=>{
    connection.query('SELECT * FROM user',(err,res)=>{
        if(err) console.log("err")
        data = {res}
    })
    res.json(data)
})

app.get("/api/data/shop/candle",(req,res)=>{
    connection.query('SELECT * FROM product',(err,res)=>{
        if(err) console.log("err")
        console.log(res)
        console.log("Success")
        data = {res}
    })
    res.json(data)
    console.log(data)
    console.log("your data")
})
// const data22 = data

// module.exports = data22


app.post("/auth/login", (req,res)=>{
    let ok = "notok"
    connection.query('SELECT * FROM user',(err,respon)=>{
        if(err) console.log("err")
        data = {respon}
        console.log(req.body[0].email)
        console.log(data.respon[0].email)
        for(let b = 0; b < data.respon.length ;b++){
            if(req.body[0].email == data.respon[b].email && req.body[0].passwd == data.respon[b].passwd){
                console.log("Это он",data.respon[b].idUser ,req.body[0].email, data.respon[b].email)
                ok = "ok"
                 break
            }
            else if (req.body[0].email != data.respon[b].email || req.body[0].passwd != data.respon[b].passwd){
                ok = "notlogin"
            }
        }
        res.send(ok)
    })
    
})

app.get("/api/photos",(req,res)=>{
    console.log("suu")
    connection.query('SELECT * FROM images',(err,respon)=>{
        if(err) console.log("err")
        console.log(respon)
        console.log("Success")
        data = {res}
    })
})

app.get("/api/data/products",(req,res)=>{
    connection.query('SELECT * FROM product',(err,res)=>{
        if(err) console.log("err")
        console.log(res)
        console.log("Success")
        data = {res}
    })
    res.json(data)
    console.log(data)
    console.log("your data")
})

app.get("/api/photo", (req,res)=>{
    console.log("Ok")
    
    res.sendFile(path.join(_dirname,"img","3.jpg"))
})

app.post(`/api/addUser`, (req, res)=>{
    console.log(req.body)
    console.log(req.body[0].login)
     connection.query(`INSERT INTO user (email, passwd, name, login) VALUES ("${req.body[0].email}", 
     "${req.body[0].passwd}",
     "${req.body[0].name}", 
     "${req.body[0].login}")`
     ,(err,respon)=>{
     if(err) console.log(err)
     console.log(respon)
 })
    res.send("ok")
})

app.post(`/api/changeUser`, (req, res)=>{
    console.log(req.body)
    console.log(req.body[0].login)
     connection.query(`UPDATE user SET email="${req.body[0].email}", 
     passwd="${req.body[0].passwd}", 
     name="${req.body[0].name}", login="${req.body[0].login}"
     WHERE idUser = ${+req.body[0].idUser};`
     ,(err,respon)=>{
     if(err) console.log(err)
     console.log(respon)
 })
    res.send("ok")
})

app.post(`/api/deleteUser`, (req, res)=>{
    console.log(req.body)
    console.log(req.body[0].login)
     connection.query(`DELETE FROM user 
     WHERE idUser=${+req.body[0].idUser};`
     ,(err,respon)=>{
     if(err) console.log(err)
     console.log(respon)
 })
    res.send("ok")
})


app.post(`/api/addProduct`, (req, res)=>{
    console.log(req.body)
    console.log(req.body[0].login)
     connection.query(`INSERT INTO product (title, descript, price, category) VALUES ("${req.body[0].title}", 
     "${req.body[0].descript}",
     "${+req.body[0].price}", 
     "${req.body[0].category}")`
     ,(err,respon)=>{
     if(err) console.log(err)
     console.log(respon)
 })
    res.send("ok")
})

// app.post('/api/post', (req, res) => {
//     const data = req.body; // данные, отправленные с помощью Axios
  
//     // обработка данных и формирование ответа
//     const result = data;
//     console.log(data)
//     // отправка ответа
//     res.send(result);
//   });