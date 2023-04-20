const connection = require("./node")


exports.addProduct = function (req, res) {
    connection.connection.query(
      `INSERT INTO product (title, descript, price, category) VALUES ("${
        req.body[0].title
      }", 
       "${req.body[0].descript}",
       "${+req.body[0].price}", 
       "${req.body[0].category}")`,
      (err, respon) => {
        if (err) console.log(err);
        console.log(respon);
      }
    );
    res.send("ok");
  };
