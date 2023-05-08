const connection = require("./node")

exports.changeUser = function(req, res){
        connection.connection.query(
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
}


exports.changeDeliv = function(req, res){
    connection.connection.query(
      `UPDATE orderDeliv SET dateOrder="${req.body[0].dateOrder}", 
      dateDeliv="${req.body[0].dateDeliv}", 
      idShop="${req.body[0].idShop}", CustomerId="${req.body[0].CustomerId}"
       WHERE idOrder = ${+req.body[0].idOrder};`,
      (err, respon) => {
        if (err) console.log(err);
        console.log(respon);
      }
    );
    res.send("ok");
}


exports.changeProduct = function(req, res){
    connection.connection.query(
      `UPDATE product SET title="${req.body[0].title}", 
      descript="${req.body[0].descript}", 
      price="${+req.body[0].price}", category="${req.body[0].category}",
      photoid="${req.body[0].photoid}"
       WHERE idProduct = ${+req.body[0].idProduct};`,
      (err, respon) => {
        if (err) console.log(err);
        console.log(respon);
      }
    );
    res.send("ok");
}