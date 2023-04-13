const mysql = requre("mysql")


const connection = mysql.createConnection({
    host:"localhost:3306",
    user:"root",
    database:"sql_website",
    password:"qwerty12",
})


connection.connect(err => {
    if(err) console.log(err);
    else{
        console.log("database ok")
    }
}
)