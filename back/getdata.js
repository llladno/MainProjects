const connection = require("./node")

exports.getUser = (req, res) => {
    connection.connection.query("SELECT * FROM user", (err, res) => {
      if (err) console.log("err");
      data = { res };
    });
    res.json(data);
}

exports.getProductShop = (req, res) => {
    connection.connection.query("SELECT * FROM product", (err, res) => {
      if (err) console.log("err");
      console.log(res);
      console.log("Success");
      data = { res };
    });
    res.json(data);
  }

exports.getProduct = (req, res) => {
    connection.connection.query("SELECT * FROM product", (err, res) => {
      if (err) console.log("err");
      console.log(res);
      console.log("Success");
      data = { res };
    });
    res.json(data);
  }

  exports.getOrder = (req, res) => {
    connection.connection.query("SELECT * FROM basket INNER JOIN product ON basket.product_id = product.idProduct;", (err, res) => {
      if (err) console.log("err");
      console.log(res);
      console.log("Success");
      data = { res };
    });
    res.json(data);
  }


  exports.getDelivery = (req, res) => {
    connection.connection.query("SELECT * FROM orderdeliv", (err, res) => {
      if (err) console.log("err");
      console.log(res);
      console.log("Success");
      data = { res };
    });
    res.json(data);
  }