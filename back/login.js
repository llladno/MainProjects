const data22 = require("./node")
console.log(data22)
const connection = require("./node")
console.log(connection.connection)
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
