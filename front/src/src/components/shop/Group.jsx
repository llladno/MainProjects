import React from 'react'
import candle1 from "./../img/imgshop/1.jpg"
import candle2 from "./../img/imgshop/2.jpg"
import axios from 'axios';
const images = require.context('./../img/imgshop', true);
const imgs = images.keys()

function Group(products) {
  let candle = products.products.photoid
  function addProdShop(event) {
    console.log(event.target.classList.value)
    if (sessionStorage.getItem("idUser")) {
      axios({
        method: 'post',
        url: 'http://localhost:3005/api/addBasketShop',
        data: [{
          IdUser: sessionStorage.getItem("idUser"),
          IdProduct: event.target.classList.value
        }]
      }).then(response => {
        console.log(response)
      }).catch(err => {
        console.log(err)
      })
    }
    else {
      alert("Авторизуйтесь")
    }
  }
  return (
    <div className='card'>
      <img src={images(imgs[candle])} alt="" srcset="" style={{ width: 200, height: 250 }} />
      <h1>{products.products.title}</h1>
      <p>{products.products.category}</p>
      <p>{products.products.price + "₽"}</p>
      <button onClick={addProdShop} className={products.products.idProduct}>Add</button>
    </div>
  )
}

export default Group