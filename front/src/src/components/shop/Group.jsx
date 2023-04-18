import React from 'react'
import candle1 from "./../img/imgshop/1.jpg"
import candle2 from "./../img/imgshop/2.jpg"

function Group(products) {
  let candle
  if (products.products.title == "Свеча 1") candle = candle1
  else if (products.products.title == "Свеча 2") candle = candle2
  return (
      <div style={{width:1000}}>
        <img src={candle} alt="" srcset="" style={{width:80}}/>
        <h1>{products.products.title}</h1>
        <p>{products.products.descript}</p>
        <p>{products.products.price}</p>
      </div>
  )
}

export default Group