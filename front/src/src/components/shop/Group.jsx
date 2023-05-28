import React from 'react'
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
      <div className='imgcard'>
        <img src={images(imgs[candle])} alt="" srcset=""
          style={{ width: 180, height: 200 }} />
      </div>
      <div className='textcard'>
        <h1>{products.products.title}</h1>
        <p>{products.products.category}</p>
        <p style={{ margin: 0 }}>{products.products.price + "₽"}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={addProdShop}
          className={products.products.idProduct}>В корзину</button>
      </div>
    </div>
  )
}

export default Group