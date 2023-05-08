const connection = require("./node")
exports.deleteUser = function (req, res) {
    connection.connection.query(
        `DELETE FROM user 
         WHERE idUser=${+req.body[0].idUser};`,
        (err, respon) => {
          if (err) console.log(err);
          console.log(respon);
        }
      );
      res.send("ok");
}

exports.deleteBasket2 = function (req,res){
    console.log(req.body[0].IdProduct)
  connection.connection.query(`DELETE FROM basket WHERE product_id IN (${req.body[0].IdProduct.map((elem,index)=>{
    return +elem.product_id
  })})`,
  (err,respon)=>{
    if(err) console.log(err)
    console.log(respon)
  })
  connection.connection.query(`DELETE FROM product WHERE idProduct IN (${req.body[0].IdProduct.map((elem,index)=>{
    return +elem.product_id
  })})`,
  (err,respon)=>{
    if(err) console.log(err)
    console.log(respon)
  })
  const time = Date.now()
  const today = new Date(time)
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 3);
  const formattedDate = currentDate.toLocaleDateString();
  let datetoday = today.toLocaleDateString()
  connection.connection.query(
    `INSERT INTO orderdeliv (dateOrder, dateDeliv,idShop, CustomerId) VALUES 
    ("${datetoday}", 
       "${formattedDate}",
       1,
       ${+req.body[0].user_id})`,
    (err, respon) => {
      if (err) console.log(err);
      console.log(respon);
    }
  );
  console.log(formattedDate)

  res.send("ok")
}
