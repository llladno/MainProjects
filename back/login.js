const data22 = require("./node")
const connection = require("./node")


exports.createUser = function (req, res) {
    connection.connection.query(
        `INSERT INTO user (email, passwd, name, login) VALUES ("${req.body[0].email}", 
         "${req.body[0].passwd}",
         "${req.body[0].name}", 
         "${req.body[0].login}")`,
        (err, respon) => {
          if (err) console.log(err);
          console.log(respon);
        }
      );
      res.send("ok");
}

exports.login = (req, res) => {
  let ok = "notok";
  let user
  connection.connection.query("SELECT * FROM user", (err, respon) => {
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
        const date = new Date();
        const day = date.getDate()
        connection.connection.query(`UPDATE count SET counts= counts + 1 WHERE countNumber = ${day};`)
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
}


exports.getStat = (req,res) =>{
  connection.connection.query(`SELECT * FROM sql_website.count;`, (err,respone)=>{
    console.log(respone)
    data = respone
    res.send(data)
  })
}