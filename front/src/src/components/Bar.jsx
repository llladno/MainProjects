import React from 'react'
import "./style.css"
import imageLogin from "./img/user-interface.png"
import basketLogin from "./img/material-symbols_shopping-cart-outline.png"


const Bar = () => {
    return (
        <div className="barStyle">
            <div className='leftbar'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href='/shop/candle'>Store</a></li>
                    <li><a>Address</a></li>
                </ul>
            </div>
            <div className="logoBar">
                <div style={{display:'flex',justifyContent:"center"}}>LOGO</div>
            </div>
            <div className='barStyle2'>
                <div>
                    <input style={{ width: 200, marginLeft:50}}></input>
                </div>
                <div style={{display:"flex",}}>
                    <a href='/auth/login' style={{padding:"0px 40px 0px 40px"}}><img src={imageLogin} className="loginimg"></img></a>
                    <a href='/'><img src={basketLogin} className="loginimg"></img></a>
                </div>
            </div>
        </div>
    )
}
export default Bar;