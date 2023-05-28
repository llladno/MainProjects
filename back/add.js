const connection = require("./node")


exports.addProduct = (req, res) => {
    connection.connection.query(
      `INSERT INTO product (title, descript, price, category,photoid) VALUES ("${
        req.body[0].title
      }", 
       "${req.body[0].descript}",
       "${+req.body[0].price}", 
       "${req.body[0].category}",
       ${req.body[0].photoid})
       `,
      (err, respon) => {
        if (err) console.log(err);
        console.log(respon);
      }
    );
    res.send("ok");
  };


exports.addDelivery = (req,res)=>{
    console.log(+req.body[0].CustomerId)
    connection.connection.query(
      `INSERT INTO orderdeliv (dateOrder, dateDeliv, idShop, CustomerId) VALUES ("${req.body[0].dateOrder}", 
         "${req.body[0].dateDeliv}",
         ${+req.body[0].idShop},
         ${+req.body[0].CustomerId})`,
      (err, respon) => {
        if (err) console.log(err);
        console.log(respon);
      }
    );
  
    res.send("ok");
}


exports.addOrder = (req,res)=>{
    connection.connection.query(
      `INSERT INTO basket (user_id, product_id) VALUES (${+req.body[0].IdUser}, 
         ${+req.body[0].IdProduct})`,
      (err, respon) => {
        if (err) console.log(err);
        console.log(respon);
      }
    );
  
    res.send("ok");
  
  }